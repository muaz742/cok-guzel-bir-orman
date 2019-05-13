function secim(ekranNo, secim) {
    /** ekran kodu ve seçimi gönder */
    var veri = {ekran: ekranNo, secim: secim};
    $.getJSON('control.php?func=secim', veri, function (yanit) {
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
        case 5: //swal
            Swal.fire({
                title: veri.baslik,
                input: 'text',
                inputValue: veri.url,
                showCancelButton: false,
                showConfirmButton: false
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