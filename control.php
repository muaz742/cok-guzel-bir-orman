<?php
/**
 * Kullanılan Editör: PhpStorm
 * Zaman Konumu: 20190511-024616
 * Geliştirici: muaz
 */
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

/** seçim - sonuç ilişkisini tanımla
 * gelen seçimlere göre uygulanacak olan aksiyonu karar veren birim.
 * aksiyonlar işlem tiplerine göre belirlenir. bunlar;
 * - 0 - aksiyon yok
 * - 1 - yönlendir - open
 * - 2 - yönlendir - location
 * - 3 - ekran güncelle
 * - 4 - alert
 * verilen karar JSON formatında döndürülür.
 * cevap formatı;
 * {aksiyon:aksiyonkodu,veri:aksiyonverisi}
 * şeklindedir.
 */
if (g('func') == 'secim') {
    $ekranNo = g('ekran');
    $secim = g('secim');
    /** seçimi oturum kaydına kaydet */
    $_SESSION['secimler'][$ekranNo] = $secim;

    /** kontrol butonları aksiyonlarını tanımla */
    if ($ekranNo == 0 && $secim > 9) {
        $sonuc['aksiyon'] = 1;
        switch ($secim) {
            case 10: //ormandan çık
                $sonuc['veri']['url'] = 'http://sistem.site';
                $sonuc['veri']['target'] = '_blank';
                break;
            case 11: //başa dön
                secimleriSifirla();
                $sonuc['aksiyon'] = 2;
                $sonuc['veri']['url'] = '/index.php';
                break;
            case 12: //fikrim var
                $sonuc['aksiyon'] = 2;
                $sonuc['veri']['url'] = '/fikrimvar';
                // TODO fikrim var sayfasını tanımla
                break;
            case 13: //siteyi paylaş
                $sonuc['aksiyon'] = 2;
                $sonuc['veri']['url'] = '/paylas';
                // TODO paylaşım platformu seç ekranı tanımla
                break;
            case 14: //logo yazı
                $sonuc['aksiyon'] = 2;
                $sonuc['veri']['url'] = '/index.php';
                break;
            case 15: //logo resim
                $sonuc['aksiyon'] = 2;
                $sonuc['veri']['url'] = '/index.php';
                break;
            case 16: //gönder butonu-fikrimvar.php
                //TODO kullanıcı geribildirimleri kayıt altına alınacak
                break;
            default:
                $sonuc['aksiyon'] = 4;
                $sonuc['veri'] = 'senin ne işin var burada :(';
        }
        echo json_encode($sonuc, JSON_PRETTY_PRINT);
        exit;
    }

    /** sonuç ekranıları aksiyonlarını tanımla */
    /** sonuç paylaşım ekranı aksiyonları */
    if ($ekranNo == 30) {
        switch ($secim) {
            case 0: //twitter
                $sonuc['aksiyon'] = 4;
                $sonuc['veri'] = 'tivitırda paylaşıldı';
                break;
            case 1: //facebook
                $sonuc['aksiyon'] = 4;
                $sonuc['veri'] = 'feysbukta paylaşıldı';
                break;
            case 2: //instagram
                $sonuc['aksiyon'] = 4;
                $sonuc['veri'] = 'istagramda paylaşıldı';
                break;
            case 3: //whatsapp
                $sonuc['aksiyon'] = 4;
                $sonuc['veri'] = 'vatzapta paylaşıldı';
                break;
            case 4: //başa dön
                secimleriSifirla();
                $sonuc['aksiyon'] = 2;
                $sonuc['veri']['url'] = '/index.php';
                break;
            default: //seçim algılama hatası
                $sonuc['aksiyon'] = 4;
                $sonuc['veri'] = 'seçim algılama hatası';
        }
        echo json_encode($sonuc, JSON_PRETTY_PRINT);
        exit;
    }
    /** son sonuç ekranı aksiyonları */
    if ($ekranNo == 28) {

        switch ($secim) {
            case 0: //maceranı paylaş
                //TODO benzersiz paylaşım linki oluştur
                icerigiSonucaTanimla(30);
                sonuclariYaz();
                break;
            case 1: //gülümse ve git
                $sonuc['aksiyon'] = 4;
                $sonuc['veri'] = 'yeni bir macerada görüşmek üzere koca yürekli insan :)';
                break;
            case 2: //sadece git
                $sonuc['aksiyon'] = 4;
                $sonuc['veri'] = 'peki..';
                break;
            case 3: //arkadaşlarını ormana çağır
                $sonuc['aksiyon'] = 4;
                $sonuc['veri'] = 'arkadaşlar ormana çağırıldı';
                break;
            case 4: //bilgeyi takip et
                $sonuc['aksiyon'] = 4;
                $sonuc['veri'] = 'bilge takip edildi';
                break;
            default: //seçim algılama hatası
                $sonuc['aksiyon'] = 4;
                $sonuc['veri'] = 'seçim algılama hatası';
        }
        echo json_encode($sonuc, JSON_PRETTY_PRINT);
        exit;
    }


    /** seçim ekranı aksiyonlarını tanımla */
    if ($ekranNo >= 0 && $ekranNo < 30) {
        /** özel koşullar */
        if ($ekranNo == 17 && $secim == 1) {
            $ekranNo = 19;
        } elseif ($ekranNo == 20 && $secim == 1) {
            $ekranNo = 29;
        } elseif ($ekranNo == 26 && $_SESSION['secimler'][17]==1) {
            /** kutu açılmamışsa ekran atla */
            $ekranNo = 28;
        } else {
            $ekranNo++;
        }
        icerigiSonucaTanimla($ekranNo);
        /** sonuç ekranı aksiyonlarını tanımla */
        switch ($ekranNo){
            case 21:
                sonucYazAgac();
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
                break;
        }

        echo json_encode($sonuc, JSON_PRETTY_PRINT);
        exit;
    }


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
    echo json_encode($sonuc, JSON_PRETTY_PRINT);
    exit;
}


function sonucYazAgac(){
    //TODO buradan devam edilecek
    global $sonuc;
    $sonuc['veri']['baslik']='sonuç ekranı ~ ağaç';
    $sonuc['veri']['yazi']='sonuç yazısı ~ ağaç';
    /*
    global $vt;
    global $sonuc;
    if (!isset($_SESSION['secimler']['2'])||!isset($_SESSION['secimler']['3'])||!isset($_SESSION['secimler']['4'])){
        $sonuc['yazi']="ağaç seçimleri eksik";
        echo json_encode($sonuc, JSON_PRETTY_PRINT);
        exit;
    }
    $veri = $vt->query("SELECT * FROM iceriksonuc WHERE ekran='2' AND secim='".$_SESSION['secimler']['2']."'", PDO::FETCH_ASSOC);
    $sorgu = $veri->fetch(PDO::FETCH_ASSOC);
    print_r($sorgu['yazi']);
    $sonuc['veri']['baslik']=' ';
    //$sonuc['veri']['yazi']="<i>Ulu çınar diyor ki; gördüğün ağaçlar arkadaşlıklarını temsil ediyor. Ağaçları " . $mYaziAgacBoyu . " ve " . $mYaziAgacSikligi . " gördün. Bu arkadaşlık bağlarının " . $mYaziArkadaslikBagi . ", arkadaşlıklarının " . $mYaziAgacBoyu . " olduğunu gösterir.</i>";
*/
    }
function sonucYazHayvan(){
    global $sonuc;
    $sonuc['veri']['baslik']='sonuç ekranı ~ hayvan';
    $sonuc['veri']['yazi']='sonuç yazısı ~ hayvan';
}
function sonucYazBeyazKapi(){
    global $sonuc;
    $sonuc['veri']['baslik']='sonuç ekranı ~ beyaz kapı';
    $sonuc['veri']['yazi']='sonuç yazısı ~ beyaz kapı';
}
function sonucYazKirmiziKapi(){
    global $sonuc;
    $sonuc['veri']['baslik']='sonuç ekranı ~ kırmızı kapı';
    $sonuc['veri']['yazi']='sonuç yazısı ~ kırmızı kapı';
}
function sonucYazSiyahKapi(){
    global $sonuc;
    $sonuc['veri']['baslik']='sonuç ekranı ~ siyah kapı';
    $sonuc['veri']['yazi']='sonuç yazısı ~ siyah kapı';
}
function sonucYazKutu(){
    global $sonuc;
    $sonuc['veri']['baslik']='sonuç ekranı ~ kutu';
    $sonuc['veri']['yazi']='sonuç yazısı ~ kutu';
}
function sonucYazParca(){
    global $sonuc;
    $sonuc['veri']['baslik']='sonuç ekranı ~ parça';
    $sonuc['veri']['yazi']='sonuç yazısı ~ parça';
}
function sonuclariYaz(){
    global $sonuc;
    $sonuc['veri']['yazi']='sonuç yazısı ~ tüm sonuçlar';
}
function icerigiSonucaTanimla($ekranNo)
{
    global $vt;
    global $sonuc;
    $veri = $vt->query("SELECT * FROM icerikekran WHERE no='" . $ekranNo . "'", PDO::FETCH_ASSOC);
    $butonlar = $veri->fetch(PDO::FETCH_ASSOC);
    $sonuc['veri']['baslik'] = $butonlar['baslik'];
    $sonuc['veri']['yazi'] = $butonlar['yazi'];
    $sonuc['veri']['ekranNo'] = $butonlar['no'];
    unset($butonlar['baslik']);
    unset($butonlar['yazi']);
    unset($butonlar['no']);
    $sonuc['aksiyon'] = 3;
    $sonuc['veri']['butonluk'] = $butonlar;
}
function secimleriSifirla(){
    unset($_SESSION['secimler']);
}

if (g('secimler') == 712) {
    echo json_encode($_SESSION['secimler'],JSON_PRETTY_PRINT);
    //print_r($_SESSION['secimler']);
    exit;
}

header("Location: /index.php");