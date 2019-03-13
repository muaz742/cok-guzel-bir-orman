<?php
/**
 * Kullanılan Editör: PhpStorm
 * Zaman Konumu: 20190313-201031
 * Geliştirici: muaz
 */

session_start();
ob_start();
$var = "var oluş amacı php değişkenlerinin kontrollerini yapma aracı olan sayfa";
?>
<!doctype html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport'
          content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'>
    <meta http-equiv='X-UA-Compatible' content='ie=edge'>
    <title>Test Ekranı</title>
</head>
<body>
<h1>Test Ekranı</h1>
<p><?php echo $var."<br>".time()."<br>".session_id();?></p>
<p>
    <?php
        print_r($_SESSION['secimler']);
        echo "<br>";
        var_dump($_SESSION['secimler']);
    ?>
</p>
</body>
</html>