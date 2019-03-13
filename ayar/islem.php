<?php
/**
 * Kullanılan Editör: PhpStorm
 * Zaman Konumu: 20190313-200148
 * Geliştirici: muaz
 */

session_start();
ob_start();
include "baglanti.php";
require_once "fonksiyon.php";

if (g('secim') == 'sifirla') {
    unset($_SESSION['secimler']);
}

if (g('secim') == 'kayit') {
    $mEkranNo = p("mEkNo");
    $mEkranSecimi = p("mEkSecim");
    if (isset($mEkranNo) && isset($mEkranSecimi)) {
        $_SESSION['secimler'][$mEkranNo] = $mEkranSecimi;
        echo "1";
    } else {
        echo "0";
    }
}

if (g('ekran') == 'icerik') {    // ekran içeriği oluşturma kod bloğu
    $mEkNo = g("mEkKodu");
    $mEkranSecimi = g("mEkSecim");
    $veri = $db->query("SELECT * FROM icerikekran WHERE no='" . $mEkNo . "'", PDO::FETCH_ASSOC);
    $mButonlar = $veri->fetch(PDO::FETCH_ASSOC);
    $mEkBaslik = $mButonlar['baslik'];
    $mEkYazi = $mButonlar['yazi'];

    global $mYaziAgac;
    global $mYaziHayvan;
    global $mYaziBeyazKapi;
    global $mYaziKirmiziKapi;
    global $mYaziSiyahKapi;
    global $mYaziKutu;
    global $mYaziParca;
    switch ($mEkNo) {
        case 21:
            mSonucAgac();
            $mEkBaslik = "";
            $mEkYazi = $mYaziAgac;
            break;
        case 22:
            mSonucHayvan();
            $mEkYazi =$mYaziHayvan;
            $mEkBaslik = "";
            break;
        case 23:
            mSonucBeyazKapi();
            $mEkYazi = $mYaziBeyazKapi;
            $mEkBaslik = "";
            break;
        case 24:
            mSonucKirmiziKapi();
            $mEkYazi = $mYaziKirmiziKapi;
            $mEkBaslik = "";
            break;
        case 25:
            mSonucSiyahKapi();
            $mEkYazi = $mYaziSiyahKapi;
            $mEkBaslik = "";
            break;
        case 26:
            mSonucKutu();
            $mEkYazi = $mYaziKutu;
            $mEkBaslik = "";
            break;
        case 27:
            mSonucParca();
            $mEkYazi = $mYaziParca;
            $mEkBaslik = "";
            break;
        case 30:
            mSonuclariTanimla();
            $mEkBaslik = "ORMANDAN";
            $mEkYazi = $mYaziAgac . " " . $mYaziHayvan . " " . $mYaziBeyazKapi . " " . $mYaziKirmiziKapi . " " . $mYaziSiyahKapi . " " . $mYaziKutu . " ".$mYaziParca;
            break;
    }
    unset($mButonlar['no']);
    unset($mButonlar['baslik']);
    unset($mButonlar['yazi']);
    //geriye buton kayıtları dizi olarak kalır
    $mDizi0 = array("baslik" => $mEkBaslik, "yazi" => $mEkYazi, "butonlar" => $mButonlar);
    $mJson = json_encode($mDizi0);
    echo $mJson;
}

if (g('ekran') == 'onyedi') {
    if ($_SESSION['secimler'][17] == 1) {
        echo 1;
    } else {
        echo 0;
    }
}

function mSonucAgac(){
    global $mYaziAgacSikligi;
    $mYaziAgacSikligi = "<b>!ağaç sıklığı tanımlanmadı</b>";
    global $mYaziAgacBoyu;
    $mYaziAgacBoyu = "<b>!ağaç boyu tanımlanmadı!</b>";
    global $mYaziArkadaslikBagi;
    $mYaziArkadaslikBagi = "<b>!arkadaşlık bağı tanımlanmadı!</b>";
    if ($_SESSION['secimler'][2] == 0) {
        $mYaziAgacSikligi = "sık";
    } elseif ($_SESSION['secimler'][2] == 1) {
        $mYaziAgacSikligi = "seyrek";
    } else {
        $mYaziAgacSikligi = "<b>!ağaç sıklığı seçimi yok</b>";
    }

    if ($_SESSION['secimler'][3] == 0) {
        $mYaziAgacBoyu = "uzun";
    } elseif ($_SESSION['secimler'][3] == 1) {
        $mYaziAgacBoyu = "uzun";
    } else {
        $mYaziAgacBoyu = "<b>!ağaç boyu seçimi yok!</b>";
    }

    if ($_SESSION['secimler'][4] == 0) {
        $mYaziArkadaslikBagi = "zayıf";
    } elseif ($_SESSION['secimler'][4] == 1) {
        $mYaziArkadaslikBagi = "iyi";
    } elseif ($_SESSION['secimler'][4] == 2) {
        $mYaziArkadaslikBagi = "güçlü";
    } else {
        $mYaziArkadaslikBagi = "<b>!arkadaşlık bağı seçimi yok!</b>";
    }
    global $mYaziAgac;
    $mYaziAgac = "<i>Ulu çınar diyor ki; gördüğün ağaçlar arkadaşlıklarını temsil ediyor. Ağaçları " . $mYaziAgacBoyu . " ve " . $mYaziAgacSikligi . " gördün. Bu arkadaşlık bağlarının " . $mYaziArkadaslikBagi . ", arkadaşlıklarının " . $mYaziAgacBoyu . " olduğunu gösterir.</i>";

}

function mSonuclariTanimla(){
    mSonucAgac();
    mSonucHayvan();
    mSonucBeyazKapi();
    mSonucSiyahKapi();
    mSonucKirmiziKapi();
    mSonucKutu();
    if($_SESSION['secimler'][17]==0){
        mSonucParca();
    }else{
        $mYaziParca = "";
    }
}

function mSonucHayvan(){
    global $mYaziHayvanAdi;
    $mYaziHayvanAdi = "<b>!hayvan seçimi tanımlanmadı!</b>";
    global $mYaziHayvanHis;
    $mYaziHayvanHis = "<b>!his seçimi yok!</b>";
    global $mYaziHayvanAciklama;
    $mYaziHayvanAciklama = "<b>!his açıklaması tanımlanmadı!</b>";
    if ($_SESSION['secimler'][6] == 0) {
        $mYaziHayvanAdi = "kurt";
        $mYaziHayvanAciklama = "Bu senin kurt olduğunu gösterir.";
    } elseif ($_SESSION['secimler'][6] == 1) {
        $mYaziHayvanAdi = "tavşan";
        $mYaziHayvanAciklama = "Bu senin tavşan olduğunu gösterir.";
    } elseif ($_SESSION['secimler'][6] == 2) {
        $mYaziHayvanAdi = "kedi";
        $mYaziHayvanAciklama = "Bu senin kedi olduğunu gösterir.";
    } elseif ($_SESSION['secimler'][6] == 3) {
        $mYaziHayvanAdi = "aslan";
        $mYaziHayvanAciklama = "Bu senin aslan olduğunu gösterir.";
    } elseif ($_SESSION['secimler'][6] == 4) {
        $mYaziHayvanAdi = "boğa";
        $mYaziHayvanAciklama = "Bu senin boğa olduğunu gösterir.";
    } elseif ($_SESSION['secimler'][6] == 5) {
        $mYaziHayvanAdi = "kuzu";
        $mYaziHayvanAciklama = "Bu senin kuzu olduğunu gösterir.";
    } elseif ($_SESSION['secimler'][6] == 7) {
        $mYaziHayvanAdi = "hipopotam";
        $mYaziHayvanAciklama = "Bu senin hipopotam olduğunu gösterir.";
    } else {
        $mYaziHayvanAdi = "<b>!hayvan seçimi yok!</b>";
        $mYaziHayvanAciklama = "<b>!hayvan seçimi yok!</b>";
    }

    if ($_SESSION['secimler'][7] == 0) {
        $mYaziHayvanHis = "iyi";
    } elseif ($_SESSION['secimler'][7] == 1) {
        $mYaziHayvanHis = "kötü";
    } elseif ($_SESSION['secimler'][7] == 2) {
        $mYaziHayvanHis = "normal";
    } else {
        $mYaziHayvanHis = "<b>!his seçimi yok!</b>";
    }
    global $mYaziHayvan;
    $mYaziHayvan = "<i>Gördüğün hayvan senin karakterini yansıtıyor. Sen " . $mYaziHayvanAdi . " gördün ve onu görmek sana " . $mYaziHayvanHis . " hissettirdi. " . $mYaziHayvanAciklama . "</i>";

}

function mSonucBeyazKapi(){
    global $mYaziBeyazKapiBoy;
    $mYaziBeyazKapiBoy = "<b>!beyaz kapı boy seçimi tanımlanmadı!</b>";
    global $mYaziBeyazKapiHis;
    $mYaziBeyazKapiHis = "<b>!beyaz kapı his seçimi tanımlanmadı!</b>";
    global $mYaziBeyazKapiGecis;
    $mYaziBeyazKapiGecis = "<b>!beyaz kapı geçiş seçimi tanımlanmadı!</b>";
    global $mYaziBeyazKapiTutum;
    $mYaziBeyazKapiTutum = "<b>!beyaz kapı tutum seçimi tanımlanmadı!</b>";
    if ($_SESSION['secimler'][8] == 0) {
        $mYaziBeyazKapiBoy = "büyük";
    } elseif ($_SESSION['secimler'][8] == 1) {
        $mYaziBeyazKapiBoy = "normal";
    } elseif ($_SESSION['secimler'][8] == 2) {
        $mYaziBeyazKapiBoy = "küçük";
    } else {
        $mYaziBeyazKapiBoy = "<b>!beyaz kapı boy seçimi yok!</b>";
    }
    if ($_SESSION['secimler'][9] == 0) {
        $mYaziBeyazKapiHis = "iyi";
    } elseif ($_SESSION['secimler'][9] == 1) {
        $mYaziBeyazKapiHis = "kötü";
    } elseif ($_SESSION['secimler'][9] == 2) {
        $mYaziBeyazKapiHis = "normal";
    } else {
        $mYaziBeyazKapiHis = "<b>!beyaz kapı his seçimi yok!</b>";
    }
    if ($_SESSION['secimler'][10] == 0) {
        $mYaziBeyazKapiGecis = "istedin";
        $mYaziBeyazKapiTutum = "açık";
    } elseif ($_SESSION['secimler'][10] == 1) {
        $mYaziBeyazKapiGecis = "istemedin";
        $mYaziBeyazKapiTutum = "kapalı";
    } else {
        $mYaziBeyazKapiGecis = "<b>!beyaz kapı geçiş seçimi yok!</b>";
        $mYaziBeyazKapiTutum = "<b>!beyaz kapı tutum seçimi yok!</b>";
    }
    global $mYaziBeyazKapi;
    $mYaziBeyazKapi = "<i>Karşına çıkan beyaz kapı umut kapısıydı. Kapıyı " . $mYaziBeyazKapiBoy . " görmen, umutlarının " . $mYaziBeyazKapiBoy . " olduğunu gösterir. Umuda karşı " . $mYaziBeyazKapiHis . " hislere sahipsin. Ve sen bu kapıdan geçmek " . $mYaziBeyazKapiGecis . ". Bu da umuda " . $mYaziBeyazKapiTutum . " olduğunu gösterir.</i>";

}

function mSonucKirmiziKapi(){
    global $mYaziKirmiziKapiBoy;
    $mYaziKirmiziKapiBoy = "";
    global $mYaziKirmiziKapiHis;
    $mYaziKirmiziKapiHis = "";
    global $mYaziKirmiziKapiGecis;
    $mYaziKirmiziKapiGecis = "";
    global $mYaziKirmiziKapiTutum;
    $mYaziKirmiziKapiTutum = "";
    if ($_SESSION['secimler'][11] == 0) {
        $mYaziKirmiziKapiBoy = "büyük";
    } elseif ($_SESSION['secimler'][11] == 1) {
        $mYaziKirmiziKapiBoy = "küçük";
    } elseif ($_SESSION['secimler'][11] == 2) {
        $mYaziKirmiziKapiBoy = "normal";
    } else {
        $mYaziKirmiziKapiBoy = "<b>!kırmızı kapı boy seçimi yok!</b>";
    }
    if ($_SESSION['secimler'][12] == 0) {
        $mYaziKirmiziKapiHis = "iyi";
    } elseif ($_SESSION['secimler'][12] == 1) {
        $mYaziKirmiziKapiHis = "kötü";
    } elseif ($_SESSION['secimler'][12] == 2) {
        $mYaziKirmiziKapiHis = "normal";
    } else {
        $mYaziKirmiziKapiHis = "<b>!kırmızı kapı his seçimi yok!</b>";
    }
    if ($_SESSION['secimler'][13] == 0) {
        $mYaziKirmiziKapiGecis = "istedin";
        $mYaziKirmiziKapiTutum = "açık";
    } elseif ($_SESSION['secimler'][13] == 1) {
        $mYaziKirmiziKapiGecis = "istemedin";
        $mYaziKirmiziKapiTutum = "kapalı";
    } else {
        $mYaziKirmiziKapiGecis = "<b>!kırmızı kapı geçiş seçimi yok!</b>";
        $mYaziKirmiziKapiTutum = "<b>!kırmızı kapı tutum seçimi yok!</b>";
    }
    global $mYaziKirmiziKapi;
    $mYaziKirmiziKapi = "<i>Kırmızı kapı aşk kapısıydı. Kapıyı " . $mYaziKirmiziKapiBoy . " görmen, aşkın senin için değerinin " . $mYaziKirmiziKapiBoy . " olduğunu gösterir. Aşka karşı " . $mYaziKirmiziKapiHis . " hislere sahipsin. Ve sen bu kapıdan geçmek " . $mYaziKirmiziKapiGecis . ". Bu da aşka " . $mYaziKirmiziKapiTutum . " olduğunu gösterir.</i>";
}

function mSonucSiyahKapi(){
    global $mYaziSiyahKapiBoy;
    $mYaziSiyahKapiBoy = "<b>!siyah kapı boy seçimi tanımlanamadı!</b>";
    global $mYaziSiyahKapiHis;
    $mYaziSiyahKapiHis = "<b>!siyah kapı his seçimi tanımlanamadı!</b>";
    global $mYaziSiyahKapiGecis;
    $mYaziSiyahKapiGecis = "<b>!siyah kapı geçiş seçimi tanımlanamadı!</b>";
    global $mYaziSiyahKapiTutum;
    $mYaziSiyahKapiTutum = "<b>!siyah kapı tutum seçimi tanımlanamadı!</b>";
    if ($_SESSION['secimler'][14] == 0) {
        $mYaziSiyahKapiBoy = "büyük";
    } elseif ($_SESSION['secimler'][14] == 1) {
        $mYaziSiyahKapiBoy = "küçük";
    } elseif ($_SESSION['secimler'][14] == 2) {
        $mYaziSiyahKapiBoy = "normal";
    } else {
        $mYaziSiyahKapiBoy = "<b>!siyah kapı boy seçimi yok!</b>";
    }
    if ($_SESSION['secimler'][15] == 0) {
        $mYaziSiyahKapiHis = "iyi";
    } elseif ($_SESSION['secimler'][15] == 1) {
        $mYaziSiyahKapiHis = "kötü";
    } elseif ($_SESSION['secimler'][15] == 2) {
        $mYaziSiyahKapiHis = "normal";
    } else {
        $mYaziSiyahKapiHis = "<b>!siyah kapı his seçimi yok!</b>";
    }
    if ($_SESSION['secimler'][16] == 0) {
        $mYaziSiyahKapiGecis = "istedin";
        $mYaziSiyahKapiTutum = "korkmadığını";
    } elseif ($_SESSION['secimler'][16] == 1) {
        $mYaziSiyahKapiGecis = "istemedin";
        $mYaziSiyahKapiTutum = "korktuğunu";
    } else {
        $mYaziSiyahKapiGecis = "<b>!siyah kapı geçiş seçimi yok!</b>";
        $mYaziSiyahKapiTutum = "<b>!siyah kapı tutum seçimi yok!</b>";
    }
    global $mYaziSiyahKapi;
    $mYaziSiyahKapi = "<i>Siyah kapı ölüm kapısıydı. Kapıyı " . $mYaziSiyahKapiBoy . " görmen ölümün senin için ne kadar " . $mYaziSiyahKapiBoy . " olduğunu gösteriyor. Ölüme karşı " . $mYaziSiyahKapiHis . " hislere sahipsin. Ve sen bu kapıdan geçmek " . $mYaziSiyahKapiGecis . ". Bu da senin ölümden " . $mYaziSiyahKapiTutum . " gösterir.</i>";
}

function mSonucKutu(){
    global $mYaziKutuAciklama;
    $mYaziKutuAciklama = "<b>!kutu açılış seçimi tanımlanamadı!</b>";
    if ($_SESSION['secimler'][17] == 0) {
        $mYaziKutuAciklama = "Sen kutuyu açmayı seçtin. Bu senin geçmişine ilgili olduğunu gösterir.";
    } elseif ($_SESSION['secimler'][17] == 1) {
        $mYaziKutuAciklama = "Kutuyu açmadan yürümeye devam etmeyi seçtin. Bu senin geçmişe ilgili olmadığını gösterir.";
    } else {
        $mYaziKutuAciklama = "<b>!kutu açılış seçimi yok!</b>";
    }
    global $mYaziKutu;
    $mYaziKutu = "<i>Önüne çıkan kutu geçmişindi. " . $mYaziKutuAciklama . "</i>";
}

function mSonucParca(){
    global $mYaziParcaAciklama;
    $mYaziParcaAciklama = "";
    if ($_SESSION['secimler'][18] == 0) {
        $mYaziParcaAciklama = "Sen bu parçaları yanında götürmeyi seçtin. Yani senin geçmişteki anıların vazgeçilmezin.";
    } elseif ($_SESSION['secimler'][18] == 1) {
        $mYaziParcaAciklama = "Sen bu parçaları yanında götürmek istemedin. Yani senin için geçmişteki anıların geçmişte kaldığıyla güzel.";
    } else {
        $mYaziParcaAciklama = "<b>!parça alım seçimi yok!</b>";
    }
    global $mYaziParca;
    $mYaziParca = "<i>Kutunun içindeki kırık parçalar anılarındı. " . $mYaziParcaAciklama . "</i>";
}