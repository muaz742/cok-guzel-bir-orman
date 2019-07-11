<?php
/**
 * Kullanılan Editör: PhpStorm
 * Zaman Konumu: 20190511-024616
 * Geliştirici: muaz
 */

/** oturum kaydını başlat */
session_start();

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

/** fonksiyonları tanımla */
function g($par)
{
    isset($_GET[$par]) ? $par = $_GET[$par] : $par = "0";
    return $par;
}

function p($par)
{
    isset($_POST[$par]) ? $par = htmlspecialchars(addslashes(trim($_POST[$par]))) : $par = 0;
    return $par;
}

function mod62_encode($girdi, $anahtar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')
{
    $bolunen = $girdi;
    $anahtar = str_split($anahtar);
    $i = 0;
    $kalanlar = [];
    $bolen = count($anahtar);
    while ($bolunen > 1) {
        $kalan = $bolunen % $bolen;
        $bolum = floor($bolunen / $bolen);
        array_push($kalanlar, $kalan);
        $bolunen = $bolum;
        $i++;
    }
    $i = count($kalanlar) - 1;
    while ($i >= 0) {
        $degerA = $anahtar[$kalanlar[$i]];
        $i--;
        $cikti = $cikti . $degerA;
    }
    return $cikti;
}

function mod62_decode($girdi, $anahtar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')
{
    $anahtar = str_split($anahtar);
    $bolen = count($anahtar);
    $girdi = str_split($girdi);
    $girdi = array_reverse($girdi);
    $anahtar = array_flip($anahtar);
    $i = 0;
    while ($i < count($girdi)) {
        $kalan = $anahtar[$girdi[$i]];
        $taban = pow($bolen, $i);
        $bolunen = $kalan * $taban;
        $cikti = $cikti+$bolunen;
        $i++;
    }
    return $cikti;
}

function sonucYazAgac()
{
    global $sonuc;
    if (!isset($_SESSION['secimler']['2']) || !isset($_SESSION['secimler']['3']) || !isset($_SESSION['secimler']['4'])) {
        $sonuc['yazi'] = "ağaç seçimleri eksik";
        echo json_encode($sonuc, JSON_PRETTY_PRINT);
        exit;
    }
    $sonuc['veri']['baslik'] = ' ';
    $sonuc['veri']['yazi'] = sonucGetir(2, 1) . sonucGetir(3, 1) . sonucGetir(4, 1);
}

function sonucYazHayvan()
{
    global $sonuc;
    if (!isset($_SESSION['secimler']['6']) || !isset($_SESSION['secimler']['7'])) {
        $sonuc['yazi'] = "hayvan seçimleri eksik";
        echo json_encode($sonuc, JSON_PRETTY_PRINT);
        exit;
    }
    $sonuc['veri']['baslik'] = ' ';
    $sonuc['veri']['yazi'] = sonucGetir(6, 1) . sonucGetir(7, 1);
}

function sonucYazBeyazKapi()
{
    global $sonuc;
    if (!isset($_SESSION['secimler']['8']) || !isset($_SESSION['secimler']['9']) || !isset($_SESSION['secimler']['10'])) {
        $sonuc['yazi'] = "beyaz kapı seçimleri eksik";
        echo json_encode($sonuc, JSON_PRETTY_PRINT);
        exit;
    }
    $sonuc['veri']['baslik'] = ' ';
    $sonuc['veri']['yazi'] = sonucGetir(8, 1) . sonucGetir(9, 1) . sonucGetir(10, 1);
}

function sonucYazKirmiziKapi()
{
    global $sonuc;
    if (!isset($_SESSION['secimler']['11']) || !isset($_SESSION['secimler']['12']) || !isset($_SESSION['secimler']['13'])) {
        $sonuc['yazi'] = "kırmızı seçimleri eksik";
        echo json_encode($sonuc, JSON_PRETTY_PRINT);
        exit;
    }
    $sonuc['veri']['baslik'] = ' ';
    $sonuc['veri']['yazi'] = sonucGetir(11, 1) . sonucGetir(12, 1) . sonucGetir(13, 1);
}

function sonucYazSiyahKapi()
{
    global $sonuc;
    if (!isset($_SESSION['secimler']['14']) || !isset($_SESSION['secimler']['15']) || !isset($_SESSION['secimler']['16'])) {
        $sonuc['yazi'] = "ağaç seçimleri eksik";
        echo json_encode($sonuc, JSON_PRETTY_PRINT);
        exit;
    }
    $sonuc['veri']['baslik'] = ' ';
    $sonuc['veri']['yazi'] = sonucGetir(14, 1) . sonucGetir(15, 1) . sonucGetir(16, 1);
}

function sonucYazKutu()
{
    global $sonuc;
    if (!isset($_SESSION['secimler']['17'])) {
        $sonuc['yazi'] = "kutu seçimi eksik";
        echo json_encode($sonuc, JSON_PRETTY_PRINT);
        exit;
    }
    $sonuc['veri']['baslik'] = ' ';
    $sonuc['veri']['yazi'] = sonucGetir(17, 1);
}

function sonucYazParca()
{
    global $sonuc;
    if (!isset($_SESSION['secimler']['18'])) {
        $sonuc['yazi'] = "parça seçimi eksik";
        echo json_encode($sonuc, JSON_PRETTY_PRINT);
        exit;
    }
    $sonuc['veri']['baslik'] = ' ';
    $sonuc['veri']['yazi'] = sonucGetir(18, 1);
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

function icerigiSonucaTanimla($ekranNo)
{
    global $vt;
    global $sonuc;
    $sorgu = $vt->prepare("SELECT ekranNo,baslik,yazi,secimNo,secimYazi FROM iceriklik WHERE ekranNo='" . $ekranNo . "'");
    $sorgu->execute();
    $veri = $sorgu->fetchAll();
	$sonuc['aksiyon']=3;
	$sonuc['veri']['ekranNo']=$veri[0]['ekranNo'];
	$sonuc['veri']['baslik']=$veri[0]['baslik'];
	$sonuc['veri']['yazi']=$veri[0]['yazi'];
	foreach ($veri as $a){
    	$sonuc['veri']['butonluk'][$a['secimNo']]=$a['secimYazi'];
	}
}

function secimleriSifirla()
{
    unset($_SESSION['secimler']);
}

function secimleriKaydet()
{
    /** işlem verilerini tanımla */
    $dizi0['sessionId'] = session_id();
    $milliseconds = round(microtime(true) * 1000);
    $dizi0['time'] = $milliseconds;
    (isset($_SESSION['kullanici'])) ? $dizi0['user'] = $_SESSION['kullanici'] : "";
    $dizi0deger = implode("','", $dizi0);
    $dizi0anahtar = array_keys($dizi0);
    $dizi0anahtar = implode("`,`", $dizi0anahtar);

    /** seçimleri tanımla */
    $dizi1 = (isset($_SESSION['secimler'])) ? $_SESSION['secimler'] : [0, 1];
    $dizi1deger = implode("','", $dizi1);
    $dizi1anahtar = array_keys($dizi1);
    $dizi1anahtar = implode("`,`", $dizi1anahtar);

    /** verileri birleştir */
    $deger = $dizi0deger . "','" . $dizi1deger;
    $anahtar = $dizi0anahtar . "`,`" . $dizi1anahtar;

    /** veritabanına işle */
    $sorgu = "INSERT INTO secimler (`" . $anahtar . "`) VALUES ('" . $deger . "')";
    global $vt;
    try {
        $islem = $vt->prepare($sorgu);
        $durum = $islem->execute();
        $vt->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        $e->getMessage();
    }

    /** işlem sonucunu çıktı ver */
    if ($durum) {
        global $cikti;
        /** kısa url kodunu oturum kayıtarına kaydet */
        $_SESSION['kisaUrl'] = mod62_encode($milliseconds);
        $cikti = 1;
    } else {
        global $cikti;
        $cikti = 0;
    }
    return $cikti;
}

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

/** kontrolleri tanımla */
/** seçim - sonuç ilişkisini tanımla
 * gelen seçimlere göre uygulanacak olan aksiyonu karar veren birim.
 * aksiyonlar işlem tiplerine göre belirlenir. bunlar;
 * - 0 - aksiyon yok
 * - 1 - yönlendir - open
 * - 2 - yönlendir - location
 * - 3 - ekran güncelle
 * - 4 - alert
 * - 5 - swal alert
 * - 6 - swal toast
 * verilen karar JSON formatında döndürülür.
 * cevap formatı;
 * {aksiyon:aksiyonkodu,veri:aksiyonverisi}
 * şeklindedir.
 */

/** seçim varsa */
if (g('func') == 'secim') {
    /** ekran ve seçim numarasını algıla */
    $ekranNo = g('ekran');
    $secim = g('secim');
    /** seçimi oturum kaydına kaydet */
    $_SESSION['secimler'][$ekranNo] = $secim;

    /** seçim, kontrol butonları veya sonuç gösterim ekranı butonlarına aitse ise */
    if (!($ekranNo==0&&$secim==0)&&($ekranNo==0||$ekranNo==28||$ekranNo==29||$ekranNo==30)){
        /** aksiyon-veri kayıtlarını ekran ve seçim numarasına göre veritabanından çek */
        $kisaUrl = $_SESSION['kisaUrl'];
        $vt->exec("set names utf8mb4");
        $query = $vt->prepare("SELECT ekranNo,secimNo,aksiyon,veri FROM iceriklik WHERE ekranNo='".$ekranNo."' AND secimNo='".$secim."'");
        $query->execute();
        $veri = $query->fetchAll();
        $sonuc['aksiyon'] = (int)$veri[0]['aksiyon'];
        $asama0 = explode('|', $veri[0]['veri']);
        for ($i = 0; $i < count($asama0); $i++) {
            $asama1 = explode('~', $asama0[$i]);
            eval("\$asama1[1] = \"$asama1[1]\";");
            $sonuc['veri'][$asama1[0]] = $asama1[1];
        }

        /**
         * silinen fonksiyonda bulunan aksiyon kayıtları (veritabanına kopyalanmaya hazır biçimde yazıldı - 20190705-152950-muaz)
         *
         * ekranNo:28 | secim:2
         * yazi: SADECE GİT
         * aksiyon: 6
         * veri: tip~success|yazi~yeni bir macerada görüşmek üzere koca yürekli insan :)|animasyon~fadeInUp
         *
         * ekranNo:28 | secim:3
         * yazi: ARKADAŞLARINI ORMAN ÇAĞIR
         * aksiyon: 6
         * veri: tip~sucess|yazi~arkadaşlar ormana çağırıldı|animasyon~success
         *
         * ekranNo:28 | secim:4
         * yazi: BİLGEYİ TAKİP ET
         * aksiyon: 6
         * veri: tip~success|yazi~bilge takip edildi|animasyon:~shake
         */

        /** sonucu json olarak döndür */
        echo json_encode($sonuc, JSON_PRETTY_PRINT);
        /** bitir */
        exit;
    }

    /** seçim, seçim ekranlarına ait ise */
    if ($ekranNo >= 0 && $ekranNo < 29) {
        /** ekran numarasını tanımla */
        if ($ekranNo == 17 && $secim == 1) {
            $ekranNo = 19;
        } elseif ($ekranNo == 20 && $secim == 1) {
            $ekranNo = 30;
        } elseif ($ekranNo == 26 && $_SESSION['secimler'][17] == 1) {
            /** kutu açılmamışsa ekran atla */
            $ekranNo = 28;
        } else {
            $ekranNo++;
        }

        /** seçimleri veritabanına işle */
        if ($ekranNo == 19) {
            secimleriKaydet();
        }

        /** ekran numarasına göre içeriği getir */
        icerigiSonucaTanimla($ekranNo);

        /** sonuç görüntüleme ekranı içeriği getir */
        switch ($ekranNo) {
            case 21:
                sonucYazAgac();
                if(isset($_SESSION['kisaUrl'])){
                    $sonuc['veri']['qrcode'] = "http://orman.muaz712.com/e/" . $_SESSION['kisaUrl'];
                }
                break;
            case 22:
                sonucYazHayvan();
                break;
            case 23:
                sonucYazBeyazKapi();
                break;
            case 24:
                sonucYazKirmiziKapi();
                break;
            case 25:
                sonucYazSiyahKapi();
                break;
            case 26:
                sonucYazKutu();
                break;
            case 27:
                sonucYazParca();
                break;
            case 30:
                sonuclariYaz();
                if ($secim==1&&isset($_SESSION['kisaUrl'])){
                    $sonuc['veri']['qrcode'] = "http://orman.muaz712.com/e/" . $_SESSION['kisaUrl'];
                }
                break;
        }

        /** sonucu json olarak döndür */
        echo json_encode($sonuc, JSON_PRETTY_PRINT);
        /** bitir */
        exit;
    }

    /** test içeriklerini tanımla */
    if ($ekranNo == 1) {
        switch ($secim) {
            case 0:
                $sonuc['aksiyon'] = 4;
                $sonuc['veri'] = 'sen kralsın 👍';
                break;
            case 1:
                $sonuc['aksiyon'] = 4;
                $sonuc['veri'] = 'allah standarttan ayırmasın  🙏';
                break;
            case 2:
                $sonuc['aksiyon'] = 4;
                $sonuc['veri'] = "deme öyle sen can'sın ❤";
                break;
        }
        echo json_encode($sonuc, JSON_PRETTY_PRINT);
        exit;
    }
    $sonuc['aksiyon'] = 3;
    $sonuc['veri']['ekranNo'] = '1';
    $sonuc['veri']['baslik'] = 'merhaba';
    $sonuc['veri']['yazi'] = 'naber nasılsın nasıl gidiyor hayat';
    $sonuc['veri']['butonluk']['0'] = 'mükemmel';
    $sonuc['veri']['butonluk']['1'] = 'standart';
    $sonuc['veri']['butonluk']['2'] = 'bok gibi';

    /** sonucu json olarak döndür */
    echo json_encode($sonuc, JSON_PRETTY_PRINT);
    /** bitir */
    exit;
}

/** geliştirici araçları talebi varsa */
// TODO diagrama göre yorum satırları geliştirilecek
if (g('dev') == '712') {
    $cikti['zaman konumu'] = time();
    $cikti['oturum kodu'] = session_id();
    if (g('ssio') == 'secimler') {
        var_dump($_SESSION['secimler']);
        exit;
    }
    if (g('ssio') == 'kisaUrl') {
        var_dump($_SESSION['kisaUrl']);
        exit;
    }
    if (g('mod62') == 'encode') {
        $girdi = (int)g('v');
        unset($cikti);
        if (!empty($girdi) && $girdi < 999999999) {
            $cikti['sonuc'] = mod62_encode($girdi);
        } else {
            $cikti['hata'] = 'değer algılanamadı';
        }
        echo json_encode($cikti, JSON_PRETTY_PRINT);
        exit;
    }
    if (g('mod62') == 'decode') {
        $girdi = g('v');
        if (!empty($girdi)) {
            $cikti['sonuc'] = mod62_decode($girdi);
        } else {
            $cikti['hata'] = 'değer algılanamadı';
        }
        echo json_encode($cikti, JSON_PRETTY_PRINT);
        exit;
    }
    echo json_encode($cikti, JSON_PRETTY_PRINT);
    exit;
}

/** eylem yoksa ana dizine döndür */
header("Location: /index.php");
/** bitir */
exit;