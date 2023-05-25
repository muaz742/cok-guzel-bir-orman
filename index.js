class Orman {
  constructor() {
    this.tohum = {};
    this.tohumURL = "";
    this.secimler = {};
  }

  tohumEk(URL) {
    this.tohumURL = URL;
    console.log("Tohum ekildi.");
  }

  filizlendir() {
    return fetch(this.tohumURL)
      .then((response) => response.json())
      .then((data) => {
        this.tohum = data;
        console.log("Tohum filizlendi.");
      })
      .catch((error) => console.error("Hata:", error));
  }

  cicekAc() {
    // Tohumdan arayüzü güncelle.
    const arayuz = this.tohum.arayuz;

    // Başlık
    document.title = arayuz.baslik;
    const favicon = document.querySelector("#favicon");
    favicon.setAttribute("href", arayuz.logo.resim);
    // Logo
    const navResim = document.querySelector("#navResim");
    navResim.setAttribute("src", arayuz.logo.resim);
    const navBaslik = document.querySelector("#navBaslik");
    navBaslik.textContent = arayuz.logo.yazi;

    // Navbar
    const navbar = arayuz.navbar;
    for (const buton in navbar) {
      const navBtn = document.querySelector("#navBtn" + buton);
      navBtn.innerHTML = navbar[buton].yazi;
      navBtn.setAttribute(
        "onclick",
        "isle(" +
          navbar[buton].aksiyon[0].tip +
          "," +
          JSON.stringify(navbar[buton].aksiyon[0].veri) +
          ")"
      );
    }
    const mBtn01 = document.querySelector("#mBtn01");
    mBtn01.setAttribute("onclick", "secim(0,0)");
  }

  sepetle() {
    // TODO seçimleri firebase veritabanına kaydet
  }

  meyvele(ekranNo, secim) {
    // Seçimi kaydet
    this.secimler[ekranNo] = secim;
    console.log(this.secimler);
    // TODO ekran ve seçim ile iceriklik.json içindeki verilere göre yanita karar ver
    console.log("meyvele");
    if (ekranNo == 20 && secim == 1) {
      ekranNo = 30;
    } else if (ekranNo == 26) {
      ekranNo = ekranNo + 2;
    } else if (ekranNo == 17 && secim == 1) {
      ekranNo = ekranNo + 2;
    } else if (ekranNo == 28 && secim == 1) {
      ekranNo = 30;
    } else if ((ekranNo == 28 && secim == 0) || (ekranNo == 30 && secim == 0)) {
      return {
        aksiyon: 5,
        veri: {
          url: "https://orman.muaz712.com",
          baslik:
            "\uD83C\uDF33\uD83C\uDF32\uD83C\uDF33\uD83C\uDF32\uD83C\uDF33\uD83C\uDF33\uD83C\uDF32<br><br>BİZ GİDERİZ ORMANA",
        },
      };
    } else if (ekranNo == 30 && secim == 1) {
      return {
        aksiyon: 2,
        veri: {
          url: "/cok-guzel-bir-orman",
        },
      };
    } else {
      ekranNo = ekranNo + 1;
    }
    const butonluk = {};
    for (const secenek in this.tohum.ekran[ekranNo].secenekler) {
      butonluk[secenek] = this.tohum.ekran[ekranNo].secenekler[secenek].yazi;
    }
    let yazi = "";
    if (this.tohum.ekran[ekranNo].yazi.sonuc) {
      console.log("sonuc var");
      for (const i in this.tohum.ekran[ekranNo].yazi.sonuc) {
        const ekran = this.tohum.ekran[ekranNo].yazi.sonuc[i];
        const secilen = this.secimler[ekran];
        try {
          yazi += " " + this.tohum.ekran[ekran].secenekler[secilen].sonuc[1];
        } catch (e) {
          console.log(e);
        }
      }
    } else {
      yazi = this.tohum.ekran[ekranNo].yazi;
    }
    return {
      aksiyon: 3,
      veri: {
        ekranNo: ekranNo,
        baslik: this.tohum.ekran[ekranNo].baslik,
        yazi: yazi,
        butonluk: butonluk,
      },
    };

    const yanit = {
      aksiyon: 3,
      veri: {
        ekranNo: 2,
        baslik: "başlık",
        yazi: "içerik yazısı",
        butonluk: {
          0: "birinci",
          1: "ikinci",
        },
      },
    };
    return yanit;
  }
}

const orman = new Orman();
orman.tohumEk("/cok-guzel-bir-orman/docs/iceriklik.json");

async function promiscik() {
  await orman.filizlendir();
  orman.cicekAc();
}

promiscik();

/** seçim fonksiyonu tanımla */
function secim(ekranNo, secim) {
  /** ekran kodu ve seçimi veriye tanımla */
  /** veriyi kontrole gönder */
  const yanit = orman.meyvele(ekranNo, secim);
  /** yanıtı işle */
  isle(yanit.aksiyon, yanit.veri);
}

/** işle fonksiyonu tanımla */
function isle(aksiyon, veri) {
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
      mEkranYaz(veri);
      break;
    case 4: //alert
      alert(veri);
      break;
    case 5: //input içi kopyalanabilir veri - swal
      Swal.fire({
        title: veri.baslik,
        input: "text",
        inputValue: veri.url,
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
            type: "success",
            title: "Kopyalandı 👍",
          });
        }
      });
      break;
    case 6: //toast göster
      Toast.fire({
        type: veri.tip,
        title: veri.yazi,
        animation: false,
        customClass: {
          popup: "animated " + veri.animasyon,
        },
      });
      break;
    default:
      alert("aksiyon algılanamadı");
  }
  if (veri.qrcode) {
    var qrcode = new QRCode("qrcode", {
      text: veri.qrcode,
      width: 64,
      height: 64,
      colorDark: "#ffffff",
      colorLight: "#000000",
      correctLevel: QRCode.CorrectLevel.H,
    });
  }
}

/** fonksiyonları tanımla */
function mEkranYaz(veri) {
  //guncelleProgress(veri.ekranNo);
  // gelen değeri sayıya dönüştür
  ekranNo = Number(veri.ekranNo);
  /** toplam ekran miktarını tanımla
   * toplam 30 ekran var
   * seçim sürecinde kullanıcı bunun en fazla 28 ini görebiliyor
   */
  var ekranMiktari = 28;
  // oran hesapla
  var oran = 100 / ekranMiktari;
  // yüzde hesapla
  var yuzde = Math.ceil(ekranNo * oran);
  // yüzdeyi işlem barına işle
  progressJs().set(yuzde);

  //mButonlukKaldir();
  var buton = document.getElementById("mButonluk");
  var ebeveyn = buton.parentElement;
  ebeveyn.removeChild(buton);

  //mButonlukEkle();
  var yeniElement = document.createElement("div");
  yeniElement.setAttribute("class", "mbr-section-btn");
  yeniElement.setAttribute("id", "mButonluk");
  var ana = document.getElementById("mEkran");
  ana.appendChild(yeniElement);

  //mYazEkranNo(veri.ekranNo);
  document.getElementById("mNo").innerText = veri.ekranNo;

  //mYazBaslik(veri.baslik);
  document.getElementById("mBaslik").innerText = veri.baslik;

  //mYazYazi(veri.yazi);
  document.getElementById("mYazi").innerHTML = veri.yazi;

  $.each(veri.butonluk, function (index, element) {
    if (element != null) {
      //mEkleButon(index, element, veri.ekranNo);
      var yeniElement = document.createElement("a");
      yeniElement.setAttribute("class", "btn btn-md btn-primary display-4");
      yeniElement.setAttribute("id", "mBtn" + index);
      yeniElement.setAttribute(
        "onclick",
        "secim(" + veri.ekranNo + "," + index + ")"
      );
      yeniElement.innerText = element;
      var ana = document.getElementById("mButonluk");
      ana.appendChild(yeniElement);
    }
  });
}

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

/** tost gösterimi tanımla */
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
});

/** panoya kopyala fonkisyonu tanımla */
/** https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f */
const copyToClipboard = (str) => {
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

/** progress js fonksiyonu başlat */
progressJs().start();
progressJs().set(0);

function guncelleProgress(ekranNo) {
  // gelen değeri sayıya dönüştür
  ekranNo = Number(ekranNo);

  /** toplam ekran miktarını tanımla
   * toplam 30 ekran var
   * seçim sürecinde kullanıcı bunun en fazla 28 ini görebiliyor
   */
  var ekranMiktari = 28;

  // oran hesapla
  var oran = 100 / ekranMiktari;

  // yüzde hesapla
  var yuzde = Math.ceil(ekranNo * oran);

  // yüzdeyi işlem barına işle
  progressJs().set(yuzde);
}
