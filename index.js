function secim(secim) {
    if (secim<10){
        var mEkNo = document.getElementById("mNo").outerText;
        mSecimiKaydet(mEkNo, secim);
        switch (mEkNo) {
            case 17:
                if (secim==1){
                    mEkNo = 18;
                }
                break;
            case 20:
                if (secim==1){
                    mEkNo=29;
                }
                break;
            case 26:
                if (secim==0){
                    $.ajax({
                        url: "ayar/islem.php?ekran=onyedi",
                        success: function (yanit) {
                            if (yanit == 1) {
                                mEkranYaz(28);
                            }
                        }
                    });
                }
                break;
            case 28:
                switch (secim) {
                    case 0:
                        //maceranı paylaş
                        // TODO link oluştur
                        mEkNo++;
                        break;
                    case 1:
                        //gülümse ve git
                        alert("yeni bir macerada görüşmek üzere koca yürekli insan :)");
                        break;
                    case 2:
                        //sadece git
                        alert("peki..");
                        break;
                    case 3:
                        //arkadaşlarını ormana çağır
                        break;
                    case 4:
                        //bilgeyi takip et
                        break;
                }
                break;
            case 30:
                switch (secim) {
                    case 0:
                        alert("tivitırda paylaşıldı");
                        break;
                    case 1:
                        alert("feysbukta paylaşıldı");
                        break;
                    case 2:
                        alert("istagramda paylaşıldı");
                        break;
                    case 3:
                        alert("vatzapta paylaşıldı");
                        break;
                    case 4:
                        mBasaDon();
                        break;
                    default:
                        alert("seçim algılama hatası");
                }
                break;
            default:
        }
        mEkNo++;
        mEkranYaz(mEkNo, secim);
    }else {
        switch (secim) {
            case 10:
                //ormandan çık
                // TODO hoşcakal mesajı ver, swal kullanabilirsin
                window.open("https://www.youtube.com/watch?v=aqJciupunWQ", "_blank");
                break;
            case 11:
                //seçimleri sıfırla
                $.ajax({url: "ayar/islem.php?secim=sifirla"});
                //ekran 0 yükle
                // TODO fikrimvar.php üzerinde iken seçimleri sıfırla ve ana sayfaya yönlendirme yap
                mEkranYaz(0);
                break;
            case 12:
                // fikrim var
                //FIXME onar
                window.location = "./ekran/0a/fikrimvar.php";
                break;
            case 13:
                //siteyi paylaş
                //paylaşım platformu seç - pop up
                // TODO paylaşım ekranı geliştir, swal kullanabilirsin
                break;
            case 14:
                //logo yazı
                window.location("/index.php");
                break;
            case 15:
                //logo resim
                window.location("/index.php");
                break;
            case 16:
                //gönder butonu-fikrimvar.php
                // TODO form verilerini sql'e gönderme kodu geliştir - ajax veya json kullanabilirsin
                break;
            case 712:
                //muaz712.com - footer
                window.open("http://muaz712.com", "_blank");
                break;
            default:
                alert("seçim tanımlanamadı :(");
        }
    }
}

function mSecimiKaydet(ekranNo, secim) {
    var data = {mEkNo: ekranNo, mEkSecim: secim};
    //alert("EkNo-"+ekranNo+" - Sec-"+secim);
    $.ajax({
        url: "ayar/islem.php?secim=kayit",
        type: "POST",
        data: data,
        success: function (yanit) {
            //alert(yanit);
            if (yanit == 1) {
                //alert("seçim kaydı başarılı");
            } else if (yanit == 0) {
                alert("seçim kayıt hatası");
            } else {
                //bağlantı hatası
                alert("bir sorun oluştu");
            }
        }
    });
}

function mEkranYaz(ekranNo, secim) {
    var veri = {mEkKodu: ekranNo, mEkSecim: secim};
    $.getJSON("ayar/islem.php?ekran=icerik", veri, function (icerik) {
        mButonlukKaldir();
        mButonlukEkle();
        mYazEkranNo(ekranNo);
        mYazBaslik(icerik.baslik);
        mYazYazi(icerik.yazi);
        //alert(JSON.stringify(icerik));
        //var i=0;
        $.each(icerik.butonlar, function (index, element) {
            //alert("index: "+index+" ~ "+"element: "+element+" ~ "+"i: "+i);
            if (element != null) {
                mEkleButon(index, element);
            }
            //i++;
        });
    });
}

function mButonlukKaldir() {
    //element kaldırma
    var buton = document.getElementById("mButonluk"); //element seç
    var ebeveyn = buton.parentElement; //seçilen elementin ebeveyn elementi tanımla
    ebeveyn.removeChild(buton); //ebevenyden elementi kaldır
}

function mButonlukEkle() {
    //element ekleme
    var yeniElement = document.createElement("div"); //element tipi tanımla
    yeniElement.setAttribute("class", "mbr-section-btn"); //element stili tanımla
    yeniElement.setAttribute("id", "mButonluk"); //element id'si tanımla
    var ana = document.getElementById("mEkran"); //ebeveyn elementi tanımla
    ana.appendChild(yeniElement); //elementi ebeveyne ekle
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

function mEkleButon(no, yazi) {
    var yeniElement = document.createElement("a");
    yeniElement.setAttribute("class", "btn btn-md btn-primary display-4");
    yeniElement.setAttribute("id", "mBtn" + no);
    yeniElement.setAttribute("onclick", "secim(" + no + ")");
    yeniElement.innerText = yazi;
    var ana = document.getElementById("mButonluk");
    ana.appendChild(yeniElement);
}