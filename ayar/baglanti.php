<?php
/**
 * Kullanılan Editör: PhpStorm
 * Zaman Konumu: 20190313-143538
 * Geliştirici: muaz
 */

//FIXME veritabanı bağlantı bilgilerini gir.
$host = "localhost";
$dbname = "veritabani";
$dbusername = "kullanici";
$dbuserpass = "parola";

try{
    $db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", "$dbusername", "$dbuserpass");
}catch (PDOException $e){
    print $e->getMessage();
}
/* error_reporting(0); */
