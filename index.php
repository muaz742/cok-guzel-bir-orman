<?php

# erişmek istediğin ip adresini tanımlamalısın.
# ip adresini öğrenmek için;
# https://muaz742.com/saymyip/
$ip = "";

if ($_SERVER['REMOTE_ADDR'] == $ip) {
    include "main.html";
} else {
    echo "app is run";
}