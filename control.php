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
                $sonuc['aksiyon'] = 1;
                $sonuc['veri']['mesaj'] = '"new issue" butonu ile yeni bir issue oluşturarak fikrini paylaşabilirsin';
                $sonuc['veri']['url'] = 'https://github.com/muaz742/cok-guzel-bir-orman/issues';
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
    if ($ekranNo >= 0 && $ekranNo < 29) {
        /** özel koşullar */
        if ($ekranNo == 17 && $secim == 1) {
            $ekranNo = 19;
        } elseif ($ekranNo == 20 && $secim == 1) {
            $ekranNo = 30;
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

if (g('secimler') == 712) {
    //echo json_encode($_SESSION['secimler'],JSON_PRETTY_PRINT);
    print_r($_SESSION['secimler']);
    exit;
}

function sonucYazAgac(){
    global $sonuc;
    if (!isset($_SESSION['secimler']['2'])||!isset($_SESSION['secimler']['3'])||!isset($_SESSION['secimler']['4'])){
        $sonuc['yazi']="ağaç seçimleri eksik";
        echo json_encode($sonuc, JSON_PRETTY_PRINT);
        exit;
    }
    $sonuc['veri']['baslik']=' ';
    $sonuc['veri']['yazi']= sonucGetir(2,1).sonucGetir(3,1).sonucGetir(4,1);
    }
function sonucYazHayvan(){
    global $sonuc;
    if (!isset($_SESSION['secimler']['6'])||!isset($_SESSION['secimler']['7'])){
        $sonuc['yazi']="hayvan seçimleri eksik";
        echo json_encode($sonuc, JSON_PRETTY_PRINT);
        exit;
    }
    $sonuc['veri']['baslik']=' ';
    $sonuc['veri']['yazi']= sonucGetir(6,1).sonucGetir(7,1);
}
function sonucYazBeyazKapi(){
    global $sonuc;
    if (!isset($_SESSION['secimler']['8'])||!isset($_SESSION['secimler']['9'])||!isset($_SESSION['secimler']['10'])){
        $sonuc['yazi']="beyaz kapı seçimleri eksik";
        echo json_encode($sonuc, JSON_PRETTY_PRINT);
        exit;
    }
    $sonuc['veri']['baslik']=' ';
    $sonuc['veri']['yazi']= sonucGetir(8,1).sonucGetir(9,1).sonucGetir(10,1);
}
function sonucYazKirmiziKapi(){
    global $sonuc;
    if (!isset($_SESSION['secimler']['11'])||!isset($_SESSION['secimler']['12'])||!isset($_SESSION['secimler']['13'])){
        $sonuc['yazi']="kırmızı seçimleri eksik";
        echo json_encode($sonuc, JSON_PRETTY_PRINT);
        exit;
    }
    $sonuc['veri']['baslik']=' ';
    $sonuc['veri']['yazi']= sonucGetir(11,1).sonucGetir(12,1).sonucGetir(13,1);
}
function sonucYazSiyahKapi(){
    global $sonuc;
    if (!isset($_SESSION['secimler']['14'])||!isset($_SESSION['secimler']['15'])||!isset($_SESSION['secimler']['16'])){
        $sonuc['yazi']="ağaç seçimleri eksik";
        echo json_encode($sonuc, JSON_PRETTY_PRINT);
        exit;
    }
    $sonuc['veri']['baslik']=' ';
    $sonuc['veri']['yazi']= sonucGetir(14,1).sonucGetir(15,1).sonucGetir(16,1);
}
function sonucYazKutu(){
    global $sonuc;
    if (!isset($_SESSION['secimler']['17'])){
        $sonuc['yazi']="kutu seçimi eksik";
        echo json_encode($sonuc, JSON_PRETTY_PRINT);
        exit;
    }
    $sonuc['veri']['baslik']=' ';
    $sonuc['veri']['yazi']= sonucGetir(17,1);
}
function sonucYazParca(){
    global $sonuc;
    if (!isset($_SESSION['secimler']['18'])){
        $sonuc['yazi']="parça seçimi eksik";
        echo json_encode($sonuc, JSON_PRETTY_PRINT);
        exit;
    }
    $sonuc['veri']['baslik']=' ';
    $sonuc['veri']['yazi']= sonucGetir(18,1);
}
function sonuclariYaz(){
    global $sonuc;
    if ($_SESSION['secimler'][17]==0){
        $parcaYazi = sonucGetir(18,1);
    }else{
        $parcaYazi = " ";
    }
    $sonuc['veri']['yazi']=
        sonucGetir(2,1).sonucGetir(3,1).sonucGetir(4,1)."<br>".
        sonucGetir(6,1).sonucGetir(7,1)."<br>".
        sonucGetir(8,1).sonucGetir(9,1).sonucGetir(10,1)."<br>".
        sonucGetir(11,1).sonucGetir(12,1).sonucGetir(13,1)."<br>".
        sonucGetir(14,1).sonucGetir(15,1).sonucGetir(16,1)."<br>".
        sonucGetir(17,1)."<br>".$parcaYazi;
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

function sonucGetir($ekranNo,$sonucTipi = 0){
    global $vt;
    switch ($sonucTipi){
        case 1:
            $tip = 'sonucYaziDedde';
            break;
        default:
            $tip = 'sonucYaziDuru';
    }
    $veri = $vt->query("SELECT ".$tip." FROM iceriklik WHERE ekranNo='".$ekranNo."' AND secimNo='".$_SESSION['secimler'][$ekranNo]."'", PDO::FETCH_ASSOC);
    $sorgu = $veri->fetch(PDO::FETCH_ASSOC);
    return $sorgu[$tip];
}

/*
 * TODO url coder geliştir
 * https://stackoverflow.com/questions/742013/how-do-i-create-a-url-shortener
 * adresindeki anlatımdan ilham alınıyor
 */
function urlKodla($girdi){
    $anahtar=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
    $i = 0;
    $kalanlar=[];
    $bolen = count($anahtar)+1;
    while ($girdi>$bolen){
        $kalan = $girdi%$bolen;
        $girdi = $girdi - $kalan;
        $girdi = $girdi/$bolen;
        array_push($kalanlar,$kalan);
        if ($girdi<$bolen){
            array_push($kalanlar,$girdi);
        }
        $i++;
    }
    $i=0;
    while ($i<count($kalanlar)){
        if (!isset($cikti)){
            $cikti = $anahtar[$kalanlar[$i]-1];
        }else{
            $cikti = $cikti.$anahtar[$kalanlar[$i]-1];
        }
        $i++;
    }
    return $cikti;
}
function urlCoz($girdi){
    //TODO çözümleyiciyi geliştir
    $anahtar=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
    $cikti = 'gelistiriliyor';
    return $cikti;
}

header("Location: /index.php");