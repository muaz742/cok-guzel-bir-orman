/** seçim fonksiyonu tanımla */
function secim(ekranNo, secim) {
    /** ekran kodu ve seçimi veriye tanımla */
    var veri = {ekran: ekranNo, secim: secim};
    /** veriyi kontrole gönder */
    $.getJSON('http://orman.muaz712.com/control.php?func=secim', veri, function (yanit) {
        JSON.stringify(yanit);
        /** yanıtı işle */
        isle(yanit.aksiyon, yanit.veri);
    });
}

/** işle fonksiyonu tanımla */
function isle(aksiyon, veri) {
    /** aksiyona göre işlem seç */
    switch (aksiyon) {
        case 0: //aksiyon yok
            console.log('aksiyon yok');
            break;
        case 1: //yönlendir - open
            if (veri.mesaj){
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
        case 6: //toast göster
            Toast.fire({
                type: veri.tip,
                title: veri.yazi,
                animation: false,
                customClass: {
                    popup: 'animated '+veri.animasyon
                }
            });
            break;
        default:
            alert("aksiyon algılanamadı");
    }
    if(veri.qrcode){
        var qrcode = new QRCode("qrcode", {
            text: veri.qrcode,
            width: 64,
            height: 64,
            colorDark : "#ffffff",
            colorLight : "#000000",
            correctLevel : QRCode.CorrectLevel.H
        });
    }
}

/** fonksiyonları tanımla */
function mEkranYaz(veri) {
    guncelleProgress(veri.ekranNo);
    mButonlukKaldir();
    mButonlukEkle();
    mYazEkranNo(veri.ekranNo);
    mYazBaslik(veri.baslik);
    mYazYazi(veri.yazi);
    $.each(veri.butonluk, function (index, element) {
        if (element != null) {
            mEkleButon(index, element, veri.ekranNo);
        }
    });
}

function mYazEkranNo(yazi) {
    document.getElementById("mNo").innerText = yazi;
}

function mYazBaslik(yazi) {
    document.getElementById("mBaslik").innerText = yazi;
}

function mYazYazi(yazi) {
    document.getElementById("mYazi").innerHTML = yazi;
}

function mButonlukKaldir() {
    var buton = document.getElementById("mButonluk");
    var ebeveyn = buton.parentElement;
    ebeveyn.removeChild(buton);
}

function mButonlukEkle() {
    var yeniElement = document.createElement("div");
    yeniElement.setAttribute("class", "mbr-section-btn");
    yeniElement.setAttribute("id", "mButonluk");
    var ana = document.getElementById("mEkran");
    ana.appendChild(yeniElement);
}

function mEkleButon(no, yazi, ekranNo) {
    var yeniElement = document.createElement("a");
    yeniElement.setAttribute("class", "btn btn-md btn-primary display-4");
    yeniElement.setAttribute("id", "mBtn" + no);
    yeniElement.setAttribute("onclick", "secim(" + ekranNo + "," + no + ")");
    yeniElement.innerText = yazi;
    var ana = document.getElementById("mButonluk");
    ana.appendChild(yeniElement);
}


/** tam ekran fonksiyonu tanımla */
var elem = document.documentElement;
var durumTamEkran = false;
function tamEkran() {
    if (!durumTamEkran) {
        acTamEkran();
    }else {
        kapaTamEkran();
    }
}

/* aç tam ekran */
function acTamEkran() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
    durumTamEkran = true;
}

/* kapa tam ekran */
function kapaTamEkran() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
    }
    durumTamEkran = false;
}

/** tost gösterimi tanımla */
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

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
    var oran = 100/ekranMiktari;

    // yüzde hesapla
    var yuzde = Math.ceil(ekranNo*oran);

    // yüzdeyi işlem barına işle
    progressJs().set(yuzde);
}
