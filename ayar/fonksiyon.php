<?php
/**
 * Kullanılan Editör: PhpStorm
 * Zaman Konumu: 20190313-143527
 * Geliştirici: muaz
 */

function g($par){
    isset($_GET[$par]) ? $par = $_GET[$par] : $par = "0";
    return $par;
}

function p($par) {
    isset($_POST[$par])? $par = htmlspecialchars(addslashes(trim($_POST[$par]))) : $par = 0;
    return $par;
}

function s($par){
    isset($_SESSION[$par])? $session = $_SESSION[$par] : $session = 0;
    return $session;
}

function mOturumAcikMi(){
    return (s("oturum")==1)? 1: 0;
}

function mErisimYetkisiVarMi($obje, $kullanici){
    global $db;
    if ($kullanici!=0){
        $sorgu = $db->query("SELECT `".$obje."` FROM `kullanici` WHERE `kod`=".$kullanici."")->fetch(PDO::FETCH_ASSOC);
        if ($sorgu){
            return $sorgu[$obje];
        }else{
            echo 0;
        }
    }else{
        return 0;
    }
}

function mEkranYukle ($ekranKodu){
    require_once "ekran/".$ekranKodu.".php";
}
