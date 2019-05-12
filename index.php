<?php
/**
 * Kullanılan Editör: PhpStorm
 * Zaman Konumu: 20190313-143410
 * Geliştirici: muaz
 */

/** oturum kaydını başlat */
session_start();
ob_start();

/** veritabanı bağlantı bilgilerini tanımla */
$sunucu = "localhost";
$vtisim = "";
$vtkullaniciisim = "";
$vtkullaniciparola = "";

/** yapı bilgilerini tanımla */
$httpHost = "sistem.site"; //alan adı
$gui['lang']='tr'; //varsayılan dil
$icerik['baslik'] = 'ORMANA HOŞGELDİN';
$logoyazi = 'WALK ON THE JUNGLE';
$yol = 'view/';
$ekran = ('<!DOCTYPE html>
<html lang="tr">
<head>
    <!-- Site made with Mobirise Website Builder v4.9.2, https://mobirise.com -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="generator" content="Mobirise v4.9.2, mobirise.com">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
    <link rel="shortcut icon" href="' .$yol. 'assets/images/walking.svg" type="image/x-icon">
    <meta name="description" content="ORMANDA DOLAŞIRKEN KENDİNİ KEŞFEDEBİLECEĞİN BİR MACERAYA HAZIR MISIN?">
    <title>' .$icerik['baslik']. '</title>
    <link rel="stylesheet" href="' .$yol. 'assets/web/assets/mobirise-icons/mobirise-icons.css">
    <link rel="stylesheet" href="' .$yol. 'assets/tether/tether.min.css">
    <link rel="stylesheet" href="' .$yol. 'assets/soundcloud-plugin/style.css">
    <link rel="stylesheet" href="' .$yol. 'assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="' .$yol. 'assets/bootstrap/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="' .$yol. 'assets/bootstrap/css/bootstrap-reboot.min.css">
    <link rel="stylesheet" href="' .$yol. 'assets/dropdown/css/style.css">
    <link rel="stylesheet" href="' .$yol. 'assets/socicon/css/styles.css">
    <link rel="stylesheet" href="' .$yol. 'assets/theme/css/style.css">
    <link rel="stylesheet" href="' .$yol. 'assets/mobirise/css/mbr-additional.css" type="text/css">
</head>
<body>
<!-- Google Analytics -->
<script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }

    gtag(\'js\', new Date());
    gtag(\'config\', \'UA-112846050-7\');
</script>
<!-- /Google Analytics -->
<section class="menu cid-r3yvrVmYpQ" once="menu" id="menu1-0">
    <nav class="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm bg-color transparent">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </button>
        <div class="menu-logo">
            <div class="navbar-brand">
                <span class="navbar-logo">
                    <a href="#header2-1">
                         <img src="' .$yol. 'assets/images/walking.svg" alt="WALK ON THE FOREST" title="EXPLORER"
                              style="height: 3.8rem;">
                    </a>
                </span>
                <span class="navbar-caption-wrap"><a class="navbar-caption text-white display-4" href="#header2-1">' .$logoyazi. '</a></span>
            </div>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav nav-dropdown" data-app-modern-menu="true">
                <li class="nav-item">
                    <a class="nav-link link text-white display-4" onclick="secim(0,10)" target="_blank">
                        <span class="mbri-magic-stick mbr-iconfont mbr-iconfont-btn"></span>ORMANDAN ÇIK</a>
                </li>
                <li class="nav-item"><a class="nav-link link text-white display-4" onclick="secim(0,11)">
                    <span class="mbri-home mbr-iconfont mbr-iconfont-btn"></span> BAŞA DÖN</a></li>
                <li class="nav-item">
                    <a class="nav-link link text-white display-4" onclick="secim(0,12)"><span
                            class="mbri-idea mbr-iconfont mbr-iconfont-btn"></span> FİKRİM VAR !</a>
                </li>
            </ul>
            <div class="navbar-buttons mbr-section-btn"><a class="btn btn-sm btn-white-outline display-4"
                                                           onclick="secim(0,13)">PAYLAŞ</a></div>
        </div>
    </nav>
</section>

<section class="engine"><a href="https://mobirise.info/r">bootstrap template</a></section>
<section class="cid-r3yvzHG8J6 mbr-fullscreen" data-bg-video="https://www.youtube.com/watch?v=gVrfBvCNCkU"
         id="header2-1">
    <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(118, 118, 118);"></div>
    <div class="container align-center">
        <div class="row justify-content-md-center">
            <div class="mbr-white col-md-10" id="mEkran">
                <div id="mNo" hidden>0</div>
                <h1 class="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-1" id="mBaslik">ÇOK GÜZEL BİR
                    ORMANDASIN</h1>
                <p class="mbr-text pb-3 mbr-fonts-style display-5" id="mYazi">ORMANDA DOLAŞIRKEN<br>KENDİNİ
                    KEŞFEDEBİLECEĞİN BİR MACERAYA<br>HAZIR MISIN?<br>
                </p>
                <div class="mbr-section-btn" id="mButonluk">
                    <a class="btn btn-md btn-primary display-4 butonamk" id="mBtn0" onclick="secim(0,0)">ORMANA GİR</a>
                </div>
            </div>
        </div>
    </div>
</section>
<section once="" class="cid-r3yvICSlmZ mbr-reveal" id="footer7-4">
    <div class="container">
        <div class="media-container-row align-center mbr-white">
            <div class="row row-copirayt">
                <p class="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7">© COPYRIGHT 2018 <a
                        href="http://www.muaz712.com" class="text-white" target="_blank">MUAZ712.COM</a>- TÜM HAKLARI
                    SAKLIDIR</p>
            </div>
        </div>
    </div>
</section>
<script src="' .$yol. 'assets/web/assets/jquery/jquery.min.js"></script>
<script src="' .$yol. 'assets/popper/popper.min.js"></script>
<script src="' .$yol. 'assets/tether/tether.min.js"></script>
<script src="' .$yol. 'assets/bootstrap/js/bootstrap.min.js"></script>
<script src="' .$yol. 'assets/smoothscroll/smooth-scroll.js"></script>
<script src="' .$yol. 'assets/dropdown/js/script.min.js"></script>
<script src="' .$yol. 'assets/touchswipe/jquery.touch-swipe.min.js"></script>
<script src="' .$yol. 'assets/ytplayer/jquery.mb.ytplayer.min.js"></script>
<script src="' .$yol. 'assets/vimeoplayer/jquery.mb.vimeo_player.js"></script>
<script src="' .$yol. 'assets/theme/js/script.js"></script>
<script src="index.js?v=' .time(). '"></script>
</body>
</html>');


/** veritabanı bağlantısı yap */
try{
    $vt = new PDO("mysql:host=$sunucu;dbname=$vtisim;charset=utf8", "$vtkullaniciisim", "$vtkullaniciparola");
}catch (PDOException $e){
    print $e->getMessage();
}

/** kullanıcıya hata gösterimini pasifleştir */
error_reporting(0);

/** fonksiyonları tanımla */
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
    global $vt;
    if ($kullanici!=0){
        $sorgu = $vt->query("SELECT `".$obje."` FROM `kullanici` WHERE `kod`=".$kullanici."")->fetch(PDO::FETCH_ASSOC);
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

/** http taleplerini index.php ye topla*/
$talep = explode('/',$_SERVER['REQUEST_URI']);
//dil talebi yokla - yoksa tr
if (!empty($talep[1])){
    header('Location: /');
    exit;
}

/** oturum ve erişim yokla */
// TODO oturum ve yetki sorgusu yapılacak
if (s('oturum')==1&&s('erisim')==1){
    // oturum ve erişim var
}elseif (s('oturum')==1&&s('erisim')==0){
    //oturum açık erişim yok
}else{
    //oturum yok
}

/** dil seçimi yokla */

/** ekran yükle */
echo $ekran;

/** ekran tipleri
 * giriş ekranı
 * seçim ekranı
 * sonuç ekranı
 * fikrim var ekranı
 * bilgi ekranı
 */

