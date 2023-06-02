import React from "react";
import { useSelector } from "react-redux";
import { selectIcerik } from "./icerikSlice";
import { copyToClipboard } from "./OrmanView";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ProgressBar from "@ramonak/react-progress-bar";

const Navigation = (props) => {
  const icerik = useSelector(selectIcerik);
  const logo = icerik.arayuz.logo;
  const navbar = icerik.arayuz.navbar;

  const secim = (ekranNo, secimNo) => {
    switch (secimNo) {
      case 10: //yönlendir - open
        return () => {
          const aksiyon = navbar[10].aksiyon[0].tip;
          const veri = navbar[10].aksiyon[0].veri;
          isle(aksiyon, veri);
        };
      case 11: //yönlendir - close
        return () => {
          const aksiyon = navbar[11].aksiyon[0].tip;
          const veri = navbar[11].aksiyon[0].veri;
          isle(aksiyon, veri);
        };
      case 12: //yönlendir - close
        return () => {
          const aksiyon = navbar[12].aksiyon[0].tip;
          const veri = navbar[12].aksiyon[0].veri;
          isle(aksiyon, veri);
        };
      case 13: //yönlendir - close
        return () => {
          const aksiyon = navbar[13].aksiyon[0].tip;
          const veri = navbar[13].aksiyon[0].veri;
          isle(aksiyon, veri);
        };
    }
  };

  /** işle fonksiyonu tanımla */
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
          inputValue: window.location.origin,
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
    <section className="menu cid-r3yvrVmYpQ" id="menu1-0">
      <div style={styles.progressBar}>
        <ProgressBar
          completed={props.currentScreen}
          maxCompleted={props.totalScreen}
          customLabel={" "}
          bgColor={"rgba(49,255,18,0.53)"}
          baseBgColor={"rgba(0,0,0,0)"}
        />
      </div>
      <nav className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm bg-color transparent">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="menu-logo">
          <div className="navbar-brand">
            <span className="navbar-logo">
              <a href={logo.href}>
                <img
                  src={logo.resim}
                  alt={logo.yazi}
                  title="EXPLORER"
                  style={styles.navResim}
                />
              </a>
            </span>
            <span className="navbar-caption-wrap">
              <a
                className="navbar-caption text-white display-4"
                href={logo.href}
              >
                {logo.yazi}
              </a>
            </span>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
            <li className="nav-item">
              <a
                className="nav-link link text-white display-4"
                onClick={secim(0, 10)}
              >
                <span className="mbri-magic-stick mbr-iconfont mbr-iconfont-btn"></span>
                {navbar[10].yazi}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link link text-white display-4"
                onClick={secim(0, 11)}
              >
                <span className="mbri-home mbr-iconfont mbr-iconfont-btn"></span>
                {navbar[11].yazi}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link link text-white display-4"
                onClick={secim(0, 12)}
              >
                <span className="mbri-idea mbr-iconfont mbr-iconfont-btn"></span>
                {navbar[12].yazi}
              </a>
            </li>
          </ul>
          <div className="navbar-buttons mbr-section-btn">
            <a
              className="btn btn-sm btn-white-outline display-4"
              href="#"
              onClick={secim(0, 13)}
            >
              {navbar[13].yazi}
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
};

const styles = {
  navResim: {
    height: "3.8rem",
  },
  progressBar: {
    justifyContent: "center",
    alignItems: "center",
    // display: "flex",
    position: "fixed",
    top: -15,
    left: -10,
    right: 0,
    zIndex: 9999,
    width: "110vw",
  },
};
export default Navigation;

const MySwal = withReactContent(Swal);
/** tost gösterimi tanımla */
const Toast = MySwal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
});
