const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

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

function secim(ekranNo, secim) {
    /** ekran kodu ve seçimi gönder */
    var veri = {ekran: ekranNo, secim: secim};
    $.getJSON('http://orman.muaz712.com/control.php?func=secim', veri, function (yanit) {
        JSON.stringify(yanit);
        isle(yanit.aksiyon, yanit.veri);
    });
}

function isle(aksiyon, veri) {
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
}

function mEkranYaz(veri) {
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