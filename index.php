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

/** veritabanı bağlantısı yap */
try {
    $vt = new PDO("mysql:host=$sunucu;dbname=$vtisim;charset=utf8", "$vtkullaniciisim", "$vtkullaniciparola");
} catch (PDOException $e) {
    print $e->getMessage();
}

/** yapı bilgilerini tanımla */
$httpHost = "sistem.site"; //alan adı
$gui['lang'] = 'tr'; //varsayılan dil

/** içerik bilgilerini tanımla */
$icerik['mNo'] = '0';
$icerik['head']['title'] = 'ORMANA HOŞGELDİN';
$icerik['baslik'] = 'ÇOK GÜZEL BİR ORMANDASIN';
$icerik['yazi'] = 'ORMANDA DOLAŞIRKEN<br>KENDİNİ KEŞFEDEBİLECEĞİN BİR MACERAYA<br>HAZIR MISIN?<br>';
$icerik['btn0']['yazi'] = 'ORMANA GİR';
$icerik['btn0']['onclick'] = 'onclick="secim(0,0)"';
$icerik['btn0']['href'] = ' ';
$icerik['btn010']['yazi'] = 'ORMANDAN ÇIK';
$icerik['btn010']['onclick'] = 'onclick="secim(0,10)"';
$icerik['btn010']['href'] = ' ';
$icerik['btn011']['yazi'] = 'BAŞA DÖN';
$icerik['btn011']['onclick'] = 'onclick="secim(0,11)"';
$icerik['btn011']['href'] = ' ';
$icerik['btn012']['yazi'] = 'FİKRİM VAR !';
$icerik['btn012']['onclick'] = 'onclick="secim(0,12)"';
$icerik['btn012']['href'] = ' ';
$icerik['btn013']['yazi'] = 'PAYLAŞ';
$icerik['btn013']['onclick'] = 'onclick="secim(0,13)"';
$icerik['btn013']['href'] = 'href="#"';
$icerik['header2-1']['attr'] = 'class="cid-r3yvzHG8J6 mbr-fullscreen" data-bg-video="https://www.youtube.com/watch?v=gVrfBvCNCkU"';
if (isMobile()) {
    $icerik['header2-1']['attr'] = 'class="cid-r7lyGYk8HF mbr-fullscreen"';
}
$logoyazi = 'WALK ON THE JUNGLE';
$yol = '';

/** kullanıcıya hata gösterimini pasifleştir */
error_reporting(0);

/** fonksiyonları tanımla */
class Mod62
{
    public $anahtar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    public function encode($girdi)
    {
        $anahtar = $this->anahtar;
        $anahtar = str_split($anahtar);
        $bolunen = $girdi;
        $bolen = count($anahtar);
        $kalanlar = [];
        if ($bolunen == 0) {
            array_push($kalanlar, $bolunen);
        } else {
            while ($bolunen > 0) {
                $kalan = $bolunen % $bolen;
                $bolum = floor($bolunen / $bolen);
                array_push($kalanlar, $kalan);
                $bolunen = $bolum;
            }
        }
        $i = count($kalanlar) - 1;
        while ($i >= 0) {
            $degerA = $anahtar[$kalanlar[$i]];
            $i--;
            (empty($cikti)) ? $cikti = $degerA : $cikti = $cikti . $degerA;
        }
        return $cikti;
    }

    public function decode($girdi)
    {
        $anahtar = $this->anahtar;
        $anahtar = str_split($anahtar);
        $anahtar = array_flip($anahtar);
        $bolen = count($anahtar);
        $girdi = str_split($girdi);
        $girdi = array_reverse($girdi);
        $i = 0;
        while ($i < count($girdi)) {
            $kalan = $anahtar[$girdi[$i]];
            $taban = pow($bolen, $i);
            $bolunen = $kalan * $taban;
            (empty($cikti)) ? $cikti = $bolunen : $cikti = $cikti + $bolunen;
            $i++;
        }
        return $cikti;
    }
}

function isMobile()
{
    return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
}

/** sonuç yazdırma fonksiyonlarını tanımla */
function sonucGetir($ekranNo, $sonucTipi = 0)
{
    global $vt;
    switch ($sonucTipi) {
        case 1:
            $tip = 'sonucYaziDedde';
            break;
        default:
            $tip = 'sonucYaziDuru';
    }
    $veri = $vt->query("SELECT " . $tip . " FROM iceriklik WHERE ekranNo='" . $ekranNo . "' AND secimNo='" . $_SESSION['secimler'][$ekranNo] . "'", PDO::FETCH_ASSOC);
    $sorgu = $veri->fetch(PDO::FETCH_ASSOC);
    return $sorgu[$tip];
}

function sonuclariYaz()
{
    global $sonuc;
    if ($_SESSION['secimler'][17] == 0) {
        $parcaYazi = sonucGetir(18, 1);
    } else {
        $parcaYazi = " ";
    }
    $sonuc['veri']['yazi'] =
        sonucGetir(2, 1) . sonucGetir(3, 1) . sonucGetir(4, 1) . "<br>" .
        sonucGetir(6, 1) . sonucGetir(7, 1) . "<br>" .
        sonucGetir(8, 1) . sonucGetir(9, 1) . sonucGetir(10, 1) . "<br>" .
        sonucGetir(11, 1) . sonucGetir(12, 1) . sonucGetir(13, 1) . "<br>" .
        sonucGetir(14, 1) . sonucGetir(15, 1) . sonucGetir(16, 1) . "<br>" .
        sonucGetir(17, 1) . "<br>" . $parcaYazi;
}

function koddanIcerikGetir($girdi)
{
    $mod62 = new Mod62();
    $no = $mod62->decode($girdi);
    global $vt;
    $veri = $vt->query("SELECT * FROM secimler WHERE time='" . $no . "'");
    $sorgu = $veri->fetch(PDO::FETCH_ASSOC);
    unset($sorgu['id']);
    unset($sorgu['sessionId']);
    unset($sorgu['time']);
    unset($sorgu['user']);
    $_SESSION['secimler'] = $sorgu;
    sonuclariYaz();
    //return $cikti;
}

/** http taleplerini index.php ye topla*/
$talep = explode('/', $_SERVER['REQUEST_URI']);
//dil talebi yokla - yoksa tr

/** talep var mı */
if (!empty($talep[1])) {
    /** sonuç görüntüleme mi */
    if ($talep[1] == "e" && !empty($talep[2])) {
        /** koda göre içerik getir */
        koddanIcerikGetir($talep['2']);
        $icerik['mNo'] = '30';
        $icerik['head']['title'] = 'ORMANA HOŞGELDİN';
        $icerik['baslik'] = 'ORMANDAN';
        $icerik['yazi'] = $sonuc['veri']['yazi'];
        $yol = '../';
        //echo $ekran;
        //exit;
    } else {
        /** ana dizine döndür */
        header('Location: /');
        /** bitir */
        exit;
    }
}


/** dil seçimi yokla */

/** ekranı tanımla */
$ekran = ('<!DOCTYPE html>
<html lang="tr">
<head>
    <!-- Site made with Mobirise Website Builder v4.9.2, https://mobirise.com -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="generator" content="Mobirise v4.9.2, mobirise.com">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
    <link rel="shortcut icon" href="' . $yol . 'assets/images/walking.svg" type="image/x-icon">
    <meta name="description" content="ORMANDA DOLAŞIRKEN KENDİNİ KEŞFEDEBİLECEĞİN BİR MACERAYA HAZIR MISIN?">
    <title>' . $icerik['head']['title'] . '</title>
    <link rel="stylesheet" href="' . $yol . 'assets/web/assets/mobirise-icons/mobirise-icons.css">
    <link rel="stylesheet" href="' . $yol . 'assets/tether/tether.min.css">
    <link rel="stylesheet" href="' . $yol . 'assets/soundcloud-plugin/style.css">
    <link rel="stylesheet" href="' . $yol . 'assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="' . $yol . 'assets/bootstrap/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="' . $yol . 'assets/bootstrap/css/bootstrap-reboot.min.css">
    <link rel="stylesheet" href="' . $yol . 'assets/dropdown/css/style.css">
    <link rel="stylesheet" href="' . $yol . 'assets/socicon/css/styles.css">
    <link rel="stylesheet" href="' . $yol . 'assets/theme/css/style.css">
    <link rel="stylesheet" href="' . $yol . 'assets/mobirise/css/mbr-additional.css" type="text/css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
    <link rel="stylesheet" href="' . $yol . 'assets/progressjs/progressjs.min.css">
</head>
<body>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-112846050-7"></script>
<script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }

    gtag(\'js\', new Date());

    gtag(\'config\', \'UA-112846050-7\');
</script>

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
                         <img src="' . $yol . 'assets/images/walking.svg" alt="WALK ON THE FOREST" title="EXPLORER"
                              style="height: 3.8rem;">
                    </a>
                </span>
                <span class="navbar-caption-wrap"><a class="navbar-caption text-white display-4"
                                                     href="#header2-1">' . $logoyazi . '</a></span>
            </div>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav nav-dropdown" data-app-modern-menu="true">
                <li class="nav-item">
                    <a class="nav-link link text-white display-4" ' . $icerik['btn010']['onclick'] . ' ' . $icerik['btn010']['href'] . ' target="_blank">
                        <span class="mbri-magic-stick mbr-iconfont mbr-iconfont-btn"></span>' . $icerik['btn010']['yazi'] . '</a>
                </li>
                <li class="nav-item"><a class="nav-link link text-white display-4" ' . $icerik['btn011']['onclick'] . ' ' . $icerik['btn011']['href'] . '>
                    <span class="mbri-home mbr-iconfont mbr-iconfont-btn"></span> ' . $icerik['btn011']['yazi'] . '</a></li>
                <li class="nav-item">
                    <a class="nav-link link text-white display-4" ' . $icerik['btn012']['onclick'] . ' ' . $icerik['btn012']['href'] . '><span
                            class="mbri-idea mbr-iconfont mbr-iconfont-btn"></span>' . $icerik['btn012']['yazi'] . '</a>
                </li>
            </ul>
            <div class="navbar-buttons mbr-section-btn"><a class="btn btn-sm btn-white-outline display-4" ' . $icerik['btn013']['href'] . '
                                                           ' . $icerik['btn013']['onclick'] . '>' . $icerik['btn013']['yazi'] . '</a></div>
        </div>
    </nav>
</section>

<section class="engine"><a href="https://mobirise.info/r">bootstrap template</a></section>
<section ' . $icerik['header2-1']['attr'] . '
         id="header2-1">
    <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(118, 118, 118);"></div>
    <div class="container align-center">
        <div class="row justify-content-md-center">
            <div class="mbr-white col-md-10" id="mEkran">
                <div id="mNo" hidden>' . $icerik['mNo'] . '</div>
                <h1 class="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-1" id="mBaslik">' . $icerik['baslik'] . '</h1>
                <p class="mbr-text pb-3 mbr-fonts-style display-5" id="mYazi">' . $icerik['yazi'] . '</p>
                <div class="mbr-section-btn" id="mButonluk">
                    <a class="btn btn-md btn-primary display-4 butonamk" id="mBtn0" ' . $icerik['btn0']['href'] . ' ' . $icerik['btn0']['onclick'] . '>' . $icerik['btn0']['yazi'] . '</a>
                </div>
            </div>
        </div>
    </div>
    <div style="position: fixed; bottom: 0.5em; left: 1em; opacity: 0.6" 
        class="border border-dark" id="qrcode" onclick="secim(28,0)">
    </div>
    <p style="position: fixed;
  bottom: 0em;
  right: 1em">
        <a onclick="tamEkran();">
            <img src="' . $yol . 'assets/images/tam-ekran.svg" alt="" style="height: 2.0rem;">
        </a>
    </p>
</section>
<section once="" class="cid-r3yvICSlmZ mbr-reveal" id="footer7-4">
    <div class="container">
        <div class="media-container-row align-center mbr-white">
            <div class="row row-copirayt">
                <p class="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7">© COPYRIGHT ' . date(Y) . ' <a
                        href="http://www.muaz712.com" class="text-white" target="_blank">MUAZ712.COM</a>- TÜM HAKLARI
                    SAKLIDIR</p>
            </div>
            <div class="row row-copirayt">
                <p class="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7">
                    <a href="https://github.com/muaz742/cok-guzel-bir-orman" target="_blank">
                        <img src="' . $yol . 'assets/images/github.svg" alt="" style="height: 2.0rem;">
                    </a>
                </p>
            </div>
        </div>
    </div>
</section>
<script src="' . $yol . 'assets/web/assets/jquery/jquery.min.js"></script>
<script src="' . $yol . 'assets/popper/popper.min.js"></script>
<script src="' . $yol . 'assets/tether/tether.min.js"></script>
<script src="' . $yol . 'assets/bootstrap/js/bootstrap.min.js"></script>
<script src="' . $yol . 'assets/smoothscroll/smooth-scroll.js"></script>
<script src="' . $yol . 'assets/dropdown/js/script.min.js"></script>
<script src="' . $yol . 'assets/touchswipe/jquery.touch-swipe.min.js"></script>
<script src="' . $yol . 'assets/ytplayer/jquery.mb.ytplayer.min.js"></script>
<script src="' . $yol . 'assets/vimeoplayer/jquery.mb.vimeo_player.js"></script>
<script src="' . $yol . 'assets/theme/js/script.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
<script src="' . $yol . 'assets/qrcode/qrcode.js"></script>
<script src="' . $yol . 'assets/progressjs/progress.min.js"></script>

<script src="http://orman.muaz712.com/index.js?v=' . time() . '"></script>
</body>
</html>');

/** ekran yükle */
echo $ekran;
/** bitir */
exit;