<?php
/**
 * Kullanılan Editör: PhpStorm
 * Zaman Konumu: 20190313-143410
 * Geliştirici: muaz
 */

session_start();
ob_start();
//include "ayar/baglanti.php";
include "ayar/fonksiyon.php";

$mEkranKodu = "0a";

if (mOturumAcikMi()) {
    if (mErisimYetkisiVarMi($mEkranKodu,s('kullanicikodu'))) {
        $mEkranKodu = "0c";
    } else {
        $mEkranKodu = "0b";
    }
} else {
    $mEkranKodu = "0a";
}

mEkranYukle($mEkranKodu);