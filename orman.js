function getJsonToObj(pathJson) {
    /** get JSON file */
    var getJson = new XMLHttpRequest();
    getJson.open("GET", pathJson, false);
    getJson.send();
    var json = getJson.response;

    /** JSON to Object */
    var objJson = JSON.parse(json);

    /** return Object */
    return objJson;
}

/** konfigürasyon */
var pathJson = "/docs/iceriklik.json";
var secimler = [];

/** içerik çek */
var icerik = getJsonToObj(pathJson);

function sec(hedef) {
    /** ekran ve seçim numarasını algıla */
    var ekranNo = algilaNo("ekran", hedef);
    var secimNo = algilaNo("secim", hedef);
    console.log(ekranNo + "-" + secimNo);

    /** seçimi oturum kaydına kaydet */
    secimler[ekranNo] = secimNo;

    /** aksiyon algıla */
    var aksiyon = algilaAksiyon(icerik.ekran[ekranNo].secenekler[secimNo].aksiyon);
    var aksiyonSayisi = Object.keys(aksiyon).length;
    console.log(aksiyon);

    /** aksiyonları işle */
    for (var i = 0; i < aksiyonSayisi; i++) {
        isleAksiyon(aksiyon[i].tip,aksiyon[i].veri);
    }
}
function algilaNo(id, element) {
    switch (id) {
        case "ekran":
            return element.parentElement.parentElement.getAttribute("data-id");
            break;
        case "secim":
            return element.getAttribute("data-id");
            break;
        default:
            return 5;
    }
}
function algilaAksiyon(aksiyon) {
    if (aksiyon){
        return aksiyon;
    }else {
        return {0:{tip:0,veri:"aksiyon yok"}};
    }
}
function isleAksiyon(tip, veri) {
    console.log("tip:" + tip);
    console.log("veri:" + veri);
}