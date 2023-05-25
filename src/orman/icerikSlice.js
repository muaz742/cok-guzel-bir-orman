import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";
import { db, doc, getDoc, setDoc } from "./firebase/firebaseInit";

const initialState = {
  ekran: {},
  arayuz: {},
  secimler: {},
  mevcutEkran: 0,
  status: null,
  sonucStatus: null,
  secimKayitStatus: null,
  kayitliSecimKodu: null,
};

const icerikSlice = createSlice({
  name: "icerik",
  initialState,
  reducers: {
    secimiKaydet(state, action) {
      const { ekranNo, secimNo } = action.payload;
      state.secimler = { ...state.secimler, [ekranNo]: secimNo };
    },
    ekranNoKaydet(state, action) {
      const { ekranNo } = action.payload;
      if (Object.keys(state.ekran).length - 1 < ekranNo) {
        state.mevcutEkran = Object.keys(state.ekran).length - 1;
      } else {
        state.mevcutEkran = ekranNo;
      }
    },
    secimleriKaydet(state, action) {
      const { secimler } = action.payload;
      state.secimler = secimler;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIcerik.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIcerik.fulfilled, (state, action) => {
        state.arayuz = action.payload.arayuz;
        state.ekran = action.payload.ekran;
        state.status = "idle";
      })
      .addCase(fetchIcerik.rejected, (state) => {
        state.status = "error";
      })
      .addCase(fetchSecimlerFromFirebase.pending, (state) => {
        state.sonucStatus = "loading";
      })
      .addCase(fetchSecimlerFromFirebase.fulfilled, (state, action) => {
        state.secimler = action.payload;
        state.sonucStatus = "idle";
      })
      .addCase(fetchSecimlerFromFirebase.rejected, (state) => {
        state.sonucStatus = "error";
      })
      .addCase(fetchSecimleriKaydetToFirebase.pending, (state) => {
        state.sonucStatus = "loading";
      })
      .addCase(fetchSecimleriKaydetToFirebase.fulfilled, (state, action) => {
        state.sonucStatus = "idle";
        state.kayitliSecimKodu = action.payload;
      })
      .addCase(fetchSecimleriKaydetToFirebase.rejected, (state) => {
        state.sonucStatus = "error";
      });
  },
});

export const { secimiKaydet, ekranNoKaydet, secimleriKaydet } =
  icerikSlice.actions;

export default icerikSlice.reducer;

export const fetchIcerik = createAsyncThunk("icerik/fetchIcerik", async () => {
  const response = await axios.get(window.location.origin+"/iceriklik.json");
  return response.data;
});

// Thunk fonksiyonu
export const fetchSecimlerFromFirebase = createAsyncThunk(
  "icerik/fetchSecimlerFromFirebase",
  async (sonucKodu) => {
    try {
      const docRef = doc(db, "secimler", String(sonucKodu));
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching secimler from Firebase:", error);
      throw error; // Hata durumunu fırlat
    }
  }
);

export const fetchSecimleriKaydetToFirebase = createAsyncThunk(
  "icerik/fetchSecimleriKaydetToFirebase",
  async (_, { getState }) => {
    try {
      const secimler = getState().icerik.secimler;
      const kayitliSecimKodu = String(Date.now());
      const docRef = doc(db, "secimler", kayitliSecimKodu);
      await setDoc(docRef, secimler);

      return kayitliSecimKodu; // secimlerTimeStamp değerini dön
    } catch (error) {
      console.error("Error fetching secimler from Firebase:", error);
      throw error;
    }
  }
);

export const selectIcerik = createSelector(
  (state) => state.icerik,
  (icerik) => icerik
);

export const getKayitliSecimKodu= createSelector(
    (state) => state.icerik.kayitliSecimKodu,
    (kayitliSecimKodu) => kayitliSecimKodu
    );