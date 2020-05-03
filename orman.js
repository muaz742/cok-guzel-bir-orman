function getJsonToObj(pathJson) {
    /** get JSON file */
    var getJson = new XMLHttpRequest();
    getJson.open("GET", pathJson, false);
    getJson.send();
    var json = getJson.response;

    /** JSON to Object */
    var objJson = JSON.parse(json);

    /** return Object */
    return objJson;
}

/** konfigürasyon */
var pathJson = "/docs/iceriklik.json";
var secimler = [];

/** içerik çek */
var icerik = getJsonToObj(pathJson);

function sec(hedef) {
    /** ekran ve seçim numarasını algıla */
    var ekranNo = algilaNo("ekran", hedef);
    var secimNo = algilaNo("secim", hedef);
    console.log(ekranNo + "-" + secimNo);

    /** seçimi oturum kaydına kaydet */
    secimler[ekranNo] = secimNo;

    /** aksiyon algıla */
    var aksiyon = algilaAksiyon(icerik.ekran[ekranNo].secenekler[secimNo].aksiyon);
    var aksiyonSayisi = Object.keys(aksiyon).length;
    console.log(aksiyon);

    /** aksiyonları işle */
    for (var i = 0; i < aksiyonSayisi; i++) {
        isleAksiyon(aksiyon[i].tip, aksiyon[i].veri);
    }
}

function algilaNo(id, element) {
    switch (id) {
        case "ekran":
            return element.parentElement.parentElement.getAttribute("data-id");
            break;
        case "secim":
            return element.getAttribute("data-id");
            break;
        default:
            return 5;
    }
}

function algilaAksiyon(aksiyon) {
    if (aksiyon) {
        return aksiyon;
    } else {
        return {0: {tip: 0, veri: "aksiyon yok from 'algilaAksiyon();'"}};
    }
}

function isleAksiyon(tip, veri) {
    switch (tip) {
        case 0: //aksiyon yok
            console.log("aksiyon yok from 'isleAksiyon();'");
            break;
        case 1: //yönlendir - yeni sekmede
            (veri.mesaj) ? alert(veri.mesaj) : null;
            (veri.url) ? window.open(veri.url) : console.log("url nof found");
            break;
        case 2: //yönlendir - ekranda
            (veri.mesaj) ? alert(veri.mesaj) : null;
            (veri.url) ? window.open(veri.url, "_parent") : console.log("url nof found");
            break;
        case 3: //ekran güncelle
            // yazıları güncelle
            mEkranYaz(veri);
            break;
        case 4: //alert
            (veri.mesaj) ? alert(veri.mesaj) : null;
            break;
        case 5: //sw alert
            (veri.baslik) ? null : veri.baslik = "Hata";
            (veri.url) ? null : veri.url = "Hata";
            Swal.fire({
                title: veri.baslik,
                input: 'text',
                inputValue: veri.url,
                showCancelButton: false,
                showConfirmButton: true,
                confirmButtonText: 'KOPYALA',
                confirmButtonColor: '#6c757d',
                animation: false,
                customClass: {
                    popup: 'animated tada'
                }
            }).then((result) => {
                if (result.value) {
                    copyToClipboard(result.value);
                    Toast.fire({
                        type: 'success',
                        title: 'Kopyalandı 👍'
                    })
                }
            });
            break;
        case 6: //sw toast
            (veri.tip) ? null : veri.tip = "error";
            (veri.mesaj) ? null : veri.mesaj = "Hata";
            Toast.fire({
                type: veri.tip,
                title: veri.mesaj,
            });
            break;
        default:
            console.log("aksiyon algılanamadı");
    }
    (veri.log) ? console.log(veri.log) : null;
}

/** panoya kopyala fonkisyonu tanımla */
/** https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f */
const copyToClipboard = str => {
    const el = document.createElement('textarea');  // Create a <textarea> element
    el.value = str;                                 // Set its value to the string that you want copied
    el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
    el.style.position = 'absolute';
    el.style.left = '-9999px';                      // Move outside the screen to make it invisible
    document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
    const selected =
        document.getSelection().rangeCount > 0        // Check if there is any content selected previously
            ? document.getSelection().getRangeAt(0)     // Store selection if found
            : false;                                    // Mark as false to know no selection existed before
    el.select();                                    // Select the <textarea> content
    document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el);                  // Remove the <textarea> element
    if (selected) {                                 // If a selection existed before copying
        document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
        document.getSelection().addRange(selected);   // Restore the original selection
    }
}

/** tost gösterimi tanımla */
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
