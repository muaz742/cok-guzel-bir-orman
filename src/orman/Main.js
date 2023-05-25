import { useDispatch, useSelector } from "react-redux";
import {
  secimiKaydet,
  ekranNoKaydet,
  fetchSecimleriKaydetToFirebase,
  getKayitliSecimKodu,
} from "./icerikSlice";
import mod62 from "./mod62/mod62";
import { copyToClipboard } from "./OrmanView";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { QRCodeSVG } from "qrcode.react";

const Main = (props) => {
  const dispatch = useDispatch();
  const katiyliSecimKodu = useSelector(getKayitliSecimKodu);
  const secim = (ekranNo, secimNo) => {
    ekranNo = Number(ekranNo);
    secimNo = Number(secimNo);
    dispatch(secimiKaydet({ ekranNo, secimNo }));
    if (props.butonlar[secimNo].zipla) {
      ekranNo = props.butonlar[secimNo].zipla.hedef;
    } else {
      ekranNo += 1;
    }
    if (props.butonlar[secimNo].aksiyon) {
      isle(
        props.butonlar[secimNo].aksiyon[0].tip,
        props.butonlar[secimNo].aksiyon[0].veri
      );
    }
    if (props.butonlar[secimNo].secimiKaydet === true) {
      console.log("Seçimi kaydet çalıştı.");
      dispatch(fetchSecimleriKaydetToFirebase());
    }
    dispatch(ekranNoKaydet({ ekranNo }));
  };

  const isle = (aksiyon, veri) => {
    /** aksiyona göre işlem seç */
    switch (aksiyon) {
      case 0: //aksiyon yok
        console.log("aksiyon yok");
        break;
      case 1: //yönlendir - open
        if (veri.mesaj) {
          alert(veri.mesaj);
        }
        window.open(veri.url, veri.target);
        break;
      case 2: //yönlendir - location
        window.location = veri.url;
        break;
      case 3: //ekran güncelle
        // yazıları güncelle
        // mEkranYaz(veri);
        break;
      case 4: //alert
        alert(veri);
        break;
      case 5: //input içi kopyalanabilir veri - swal
        MySwal.fire({
          title: veri.baslik,
          input: "text",
          inputValue:
            window.location.origin + "/e/" + mod62.encode(katiyliSecimKodu),
          showCancelButton: false,
          showConfirmButton: true,
          confirmButtonText: "KOPYALA",
          confirmButtonColor: "#6c757d",
          animation: false,
          customClass: {
            popup: "animated tada",
          },
        }).then((result) => {
          if (result.value) {
            copyToClipboard(result.value);
            Toast.fire({
              icon: "success",
              title: "Kopyalandı 👍",
            });
          }
        });
        break;
      case 6: //toast göster
        Toast.fire({
          icon: veri.tip,
          title: veri.yazi,
          animation: false,
          customClass: {
            popup: "animated " + veri.animasyon,
          },
        });
        break;
      case 7: //sekmeyi kapat
        console.log("sekmeyi kapat");
        // setTimeout(window.close, 5000);
        // window.close();
        break;
      default:
        alert("aksiyon algılanamadı");
    }
  };

  return (
    <section className="cid-r7lyGYk8HF mbr-fullscreen">
      <div className="mbr-overlay" style={styles.style1}></div>
      <div className="container align-center">
        <div className="row justify-content-md-center">
          <div className="mbr-white col-md-10">
            <h1 className="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-1">
              {props.baslik}
            </h1>
            <p
              className="mbr-text pb-3 mbr-fonts-style display-5"
              dangerouslySetInnerHTML={{ __html: props.yazi }}
            />
            <div className="mbr-section-btn">
              {Object.keys(props.butonlar).map((key) => {
                return (
                  <a
                    key={key}
                    className="btn btn-md btn-primary display-4"
                    onClick={() => secim(props.ekranNo, key)}
                  >
                    {props.butonlar[key].yazi}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        style={styles.style2}
        id="qrcode"
        onClick={() =>
          isle(5, {
            baslik:
              "\uD83C\uDF33\uD83C\uDF32\uD83C\uDF33\uD83C\uDF32\uD83C\uDF33\uD83C\uDF33\uD83C\uDF32<br><br>BİZ GİDERİZ ORMANA",
          })
        }
      >
        {katiyliSecimKodu && (
          <QRCodeSVG
            size={96}
            value={
              window.location.origin + "/e/" + mod62.encode(katiyliSecimKodu)
            }
          />
        )}
      </div>
      <p style={styles.style3}>
        <a onClick={() => tamEkran()}>
          <img src="assets/images/tam-ekran.svg" alt="" style={styles.style4} />
        </a>
      </p>
    </section>
  );
};

const styles = {
  style1: {
    opacity: 0.5,
    backgroundColor: "rgb(118, 118, 118)",
  },
  style2: {
    position: "fixed",
    bottom: "0.5em",
    left: "1em",
    opacity: 0.6,
    zIndex: 1,
  },
  style3: {
    position: "fixed",
    bottom: "0em",
    right: "1em",
  },
  style4: {
    height: "2rem",
  },
};
export default Main;

/** tam ekran fonksiyonu tanımla */
var elem = document.documentElement;
var durumTamEkran = false;

function tamEkran() {
  if (!durumTamEkran) {
    acTamEkran();
  } else {
    kapaTamEkran();
  }
}

/* aç tam ekran */
function acTamEkran() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
  durumTamEkran = true;
}

/* kapa tam ekran */
function kapaTamEkran() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
  durumTamEkran = false;
}

const MySwal = withReactContent(Swal);
/** tost gösterimi tanımla */
const Toast = MySwal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
});
