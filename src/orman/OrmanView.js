import Navigation from "./Navigation";
import Engine from "./Engine";
import Main from "./Main";
import Footer from "./Footer";
import Loading from "../Components/Loading";
import { useSelector, useDispatch } from "react-redux";
import { selectIcerik, fetchSecimlerFromFirebase } from "./icerikSlice";
import mod62 from "./mod62/mod62";

// import {progressJs} from "../progressjs/progress.min";

function OrmanView() {
  const icerik = useSelector(selectIcerik);
  const dispatch = useDispatch();

  if (icerik.status !== "idle") {
    return <Loading />;
  }

  let ekranNo = icerik.mevcutEkran;
  let ekran = icerik.ekran[ekranNo];
  let secimler = icerik.secimler;

  // Paylaşım bağlantısı varsa sonuçları göster.
  const currentURL = window.location.pathname;
  if (currentURL.split("/")[1] === "e") {
    if (icerik.sonucStatus !== "idle") {
      dispatch(
        fetchSecimlerFromFirebase(mod62.decode(currentURL.split("/")[2]))
      );
      console.log(mod62.decode(currentURL.split("/")[2]));
      return <Loading />;
    }
    ekranNo = 30;
  }

  // Koşullar uygun mu?
  if (ekran.kosul) {
    for (const key in ekran.kosul) {
      if (secimler[key] !== ekran.kosul[key]) {
        ekranNo += 1;
        break;
      }
    }
  }
  ekran = icerik.ekran[ekranNo];

  // Yazı oluştur.
  let yazi = "";
  if (ekran.yazi.sonuc) {
    const sonuc = ekran.yazi.sonuc;
    for (const i in sonuc) {
      try {
        yazi +=
          " " + icerik.ekran[sonuc[i]].secenekler[secimler[sonuc[i]]].sonuc[1];
      } catch (e) {
        console.warn(e);
      }
    }
  } else {
    yazi = ekran.yazi;
  }

  // /** progress js fonksiyonu başlat */
  // progressJs().start();
  // progressJs().set(Math.ceil((ekranNo / (Object.keys(icerik.ekran).length-1)) * 100));

  return (
    <div>
      <Navigation
        progressValue={Math.ceil(
          (ekranNo / (Object.keys(icerik.ekran).length - 1)) * 100
        )}
        totalScreen={Object.keys(icerik.ekran).length - 1}
        currentScreen={ekranNo}
      />
      <Engine />
      <Main
        baslik={ekran.baslik}
        yazi={yazi}
        butonlar={ekran.secenekler}
        ekranNo={ekranNo}
      />
      <Footer />
    </div>
  );
}

export default OrmanView;

/** panoya kopyala fonkis"yonu tanımla */
/** https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f */
export const copyToClipboard = (str) => {
  const el = document.createElement("textarea"); // Create a <textarea> element
  el.value = str; // Set its value to the string that you want copied
  el.setAttribute("readonly", ""); // Make it readonly to be tamper-proof
  el.style.position = "absolute";
  el.style.left = "-9999px"; // Move outside the screen to make it invisible
  document.body.appendChild(el); // Append the <textarea> element to the HTML document
  const selected =
    document.getSelection().rangeCount > 0 // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0) // Store selection if found
      : false; // Mark as false to know no selection existed before
  el.select(); // Select the <textarea> content
  document.execCommand("copy"); // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el); // Remove the <textarea> element
  if (selected) {
    // If a selection existed before copying
    document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
    document.getSelection().addRange(selected); // Restore the original selection
  }
};
