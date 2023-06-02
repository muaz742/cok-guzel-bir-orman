const mod62 = {
  anahtar: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  encode: function (girdi) {
    var anahtar = this.anahtar.split("");
    if (girdi == null) {
      girdi = 46999;
    }
    var bolunen = girdi;
    var bolen = anahtar.length;
    var bolum;
    var kalan;
    var kalanlar = [];
    if (bolunen == 0) {
      kalanlar.push(bolunen);
    } else {
      while (bolunen > 0) {
        kalan = bolunen % bolen;
        bolum = Math.floor(bolunen / bolen);
        kalanlar.push(kalan);
        bolunen = bolum;
      }
    }
    var i = kalanlar.length;
    var degerA;
    var cikti;
    while (i > 0) {
      i--;
      degerA = anahtar[kalanlar[i]];
      if (cikti == null) {
        cikti = degerA;
      } else {
        cikti = cikti + degerA;
      }
    }
    return cikti;
  },
  decode: function (girdi) {
    /** karakter setini diziye dönüştür */
    var anahtar = this.anahtar.split("");
    /** böleni tanımla */
    var bolen = anahtar.length;
    /** karakter seti dizisini döndür */
    anahtar = array_flip(anahtar);

    function array_flip(trans) {
      var key,
        tmp_ar = {};

      for (key in trans) {
        if (trans.hasOwnProperty(key)) {
          tmp_ar[trans[key]] = key;
        }
      }

      return tmp_ar;
    }

    /** karakterleri tanımla */
    if (girdi == null) {
      girdi = 46999;
    }
    girdi = String(girdi);
    girdi = girdi.split("");
    girdi = girdi.reverse();
    /** sayıyı hesapla */
    var i = 0;
    var kalan;
    var bolunen;
    var cikti;
    var taban;
    while (i < girdi.length) {
      kalan = anahtar[girdi[i]];
      taban = Math.pow(bolen, i);
      /** karşılık gelen değeri çıktıya ekle */
      bolunen = kalan * taban;
      if (cikti == null) {
        cikti = bolunen;
      } else {
        cikti = cikti + bolunen;
      }
      i++;
    }
    /** çıktıyı döndür */
    return cikti;
  },
};

/** örnek kullanım
 * //kodlama işlevi kullanımı
 * mod62.girdi = 46999;
 * console.log(mod62.encode());
 * //çözümleme işlevi kullanımı
 * mod62.girdi = "ba";
 * console.log(mod62.decode());
 */

export default mod62;
