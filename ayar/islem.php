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