function mesajBtnFikrimVar(){
    alert("\"new issue\" butonu ile yeni bir issue oluşturarak fikrini paylaşabilirsin");
}
function mesajBtnCokYakinda(){
    var r = confirm("Orman GitHub üzerinde geliştirilmeye devam ediyor. Proje sayfasını ziyeret etmek ister misin?");
    if (r == true) {
        window.open('https://github.com/muaz742/cok-guzel-bir-orman/tree/gh-pages', '_blank');
    }
}

function blabla(){
    alert("bla bla bla");
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
