# Send Choice to Firestore Exapmle

```javascript
let secimler = {
    0: 0,
    1: 0,
    2: 1,
    3: 0,
    4: 2,
    5: 0,
    6: 1,
    7: 0,
    8: 0,
    9: 1,
    10: 0,
    11: 0,
    12: 1,
    13: 0,
    14: 1,
    15: 2,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 1,
    30: 0,
};
let timestamp = String(new Date().getTime());
// Add a new document in collection "secimler"
await setDoc(doc(db, "secimler", timestamp), secimler).then(() => {
    console.log("Document successfully written!");
});
```

# Create URL then save choice to Firestore

```mermaid
sequenceDiagram
    main.js->>main.js: create time stamp: 1683802664
    main.js->>firestore: send to timestamp
    firestore->>main.js: success message
    main.js->>main.js: encode time stamp with Mod62: bZ7d9E
    main.js->>window: show url: orman/bZ7d9E
```

# Use Case: User click choice 0.1.0

04.05.2023 19:36:50

```mermaid
sequenceDiagram
    secim->>control.php: ekranNo
    secim->>control.php: secim
    control.php->>secim:yanit.aksiyon
    control.php->>secim:yanit.veri
    secim->>isle: aksiyon
    secim->>isle: veri
    isle->>window: (aksiyon=0) aksiyon yok
    isle->>window: (aksiyon=1) open(url)
    isle->>window: (aksiyon=2) location url
    isle->>window: (aksiyon=4) alert
    isle->>window: (aksiyon=5) sweet alert
    isle->>window: (aksiyon=6) show toast
    isle->>window: (aksiyon=null) aksiyon algılanamadı
    isle->>mEkranYaz:(aksiyon=3) veri
    mEkranYaz->>guncelleProgress: veri.ekranNo
    guncelleProgress->>window: update ProgressJS
    mEkranYaz->>mButonlukKaldir: call
    mButonlukKaldir->>window: remove mButonluk element
    mEkranYaz->>mButonlukEkle: call
    mButonlukEkle->>window: add mButonluk element
    mEkranYaz->>mYazEkranNo: veri.ekranNo
    mYazEkranNo->>window: update mNo element text
    mEkranYaz->>mYazBaslik: veri.baslik
    mYazBaslik->>window: update mBaslik element text 
    mEkranYaz->>mYazYazi: veri.yazi
    mYazYazi->>window: update mYazi element html
    mEkranYaz->>mEkleButon: veri.butonluk.index
    mEkranYaz->>mEkleButon: veri.butonluk.element
    mEkranYaz->>mEkleButon: veri.ekranNo
    mEkleButon->>window: update buttons
```

# Use Case: User click choice 0.2.0

09.05.2023 23:24:39 

```mermaid
sequenceDiagram
    secim->>meyvele: ekranNo
    secim->>meyvele: secim
    meyvele->>secim:yanit.aksiyon
    meyvele->>secim:yanit.veri
    secim->>isle: aksiyon
    secim->>isle: veri
    isle->>window: (aksiyon=0) aksiyon yok
    isle->>window: (aksiyon=1) open(url)
    isle->>window: (aksiyon=2) location url
    isle->>window: (aksiyon=4) alert
    isle->>window: (aksiyon=5) sweet alert
    isle->>window: (aksiyon=6) show toast
    isle->>window: (aksiyon=null) aksiyon algılanamadı
    isle->>mEkranYaz:(aksiyon=3) veri
    mEkranYaz->>window: (veri.ekranNo) update ProgressJS
    mEkranYaz->>window: remove mButonluk element
    mEkranYaz->>window: add mButonluk element
    mEkranYaz->>window: (veri.ekranNo) update mNo element
    mEkranYaz->>window: (veri.baslik) update mBaslik element
    mEkranYaz->>window: (veri.yazi) update mYazi element
    mEkranYaz->>window: (veri.ekranNo) add button (per veri.butonluk)
```

# Load Script File

01.05.2023 09:50:53

```mermaid
sequenceDiagram
    participant Oturum
    participant Veritabanı
    participant Fonksiyonlar
    participant Mod62

    Oturum->>+Veritabanı: oturum kaydını başlat\n veritabanı bağlantı bilgilerini tanımla
    Veritabanı->>+Fonksiyonlar: fonksiyonları tanımla
    Veritabanı->>+Mod62: Mod62 sınıfını tanımla
    Fonksiyonlar-->>-Veritabanı: Tanımlanan fonksiyonlar
    Mod62-->>-Veritabanı: Tanımlanan Mod62 sınıfı

    loop sonuçYazAgac fonksiyonu
        Veritabanı->>+Fonksiyonlar: sonucYazAgac fonksiyonunu tanımla
        Fonksiyonlar-->>-Veritabanı: Tanımlanan sonucYazAgac fonksiyonu
    end

    loop sonucYazHayvan fonksiyonu
        Veritabanı->>+Fonksiyonlar: sonucYazHayvan fonksiyonunu tanımla
        Fonksiyonlar-->>-Veritabanı: Tanımlanan sonucYazHayvan fonksiyonu
    end

    loop sonucYazBeyazKapi fonksiyonu
        Veritabanı->>+Fonksiyonlar: sonucYazBeyazKapi fonksiyonunu tanımla
        Fonksiyonlar-->>-Veritabanı: Tanımlanan sonucYazBeyazKapi fonksiyonu
    end

    loop sonucYazKirmiziKapi fonksiyonu
        Veritabanı->>+Fonksiyonlar: sonucYazKirmiziKapi fonksiyonunu tanımla
        Fonksiyonlar-->>-Veritabanı: Tanımlanan sonucYazKirmiziKapi fonksiyonu
    end
```