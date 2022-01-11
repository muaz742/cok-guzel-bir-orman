class Orman {
    constructor() {
        this.ekranNo = 1;
        this.secimler = {};
    }
    icerikEkle(pathJson) {
        /** get JSON file */
        var getJson = new XMLHttpRequest();
        getJson.open("GET", pathJson, false);
        getJson.send();
        var json = getJson.response;
        /** JSON to Object */
        this.icerik = JSON.parse(json);
    }
    _butonlariSil() {
        var butonluk = document.querySelector('#mButonluk')
        while (butonluk.firstChild) {
            butonluk.removeChild(butonluk.firstChild);
        }
    }
    _butonEkle(yazi, id, onclick = "orman.sec(" + id + ")") {
        var buton = document.createElement('a');
        buton.className = "btn btn-md btn-primary display-4";
        buton.id = "mBtn" + id;
        buton.innerHTML = yazi;
        buton.setAttribute("onclick", onclick);
        document.querySelector('#mButonluk').appendChild(buton);
    }
    /* TODO
    _arayuzYukle(){
        var arayuz = this.icerik.arayuz
        document.querySelector('#guiBaslik').innerHTML = arayuz.baslik;
        document.querySelector('#guiLogo').src = arayuz.logo;
    }
    */
    _sonucYazdir(ekranlar = [], tip = 0) {
        var yazi = ""
        var ekran = this.icerik.ekran
        for (let i = 0; i < ekranlar.length; i++) {
            console.log(ekranlar[i]);
            var ekranNo = ekranlar[i]
            var secimNo = this.secimler[ekranlar[i]]
            try {
                yazi += " " + ekran[ekranNo].secenekler[secimNo].sonuc[tip]
            } catch {
                console.log(ekranlar[i] + " ekranında seçim yok.");
            }
        }
        return yazi
    }
    _ekranYukle() {
        var ekran =
            this.icerik.ekran[this.ekranNo]
        // başlık güncelle
        document.querySelector('#mBaslik').innerHTML = ekran.baslik;
        // yazı güncelle
        if (ekran.yazi.sonuc) {
            console.log(ekran.yazi.sonuc);
            var sonuc = this._sonucYazdir(ekran.yazi.sonuc, 1)
            document.querySelector('#mYazi').innerHTML = sonuc
        } else {
            document.querySelector('#mYazi').innerHTML = ekran.yazi;
            console.log("sonuc yok");
        }
        // buton güncelle
        this._butonlariSil();
        for (const [key, value] of Object.entries(ekran.secenekler)) {
            value.onclick ? this._butonEkle(value.yazi, key, value.onclick) : this._butonEkle(value.yazi, key);
        }
    }
    sec(id) {
        // seçimi kaydet
        this.secimler[this.ekranNo] = id;
        console.log(this.secimler);

        // ekranı güncelle
        var buton = this.icerik.ekran[this.ekranNo].secenekler[id];
        if (buton.zipla) {
            if (buton.zipla.kosul) {
                if (this.secimler[buton.zipla.kosul.ekran] == buton.zipla.kosul.secim) {
                    this.ekranNo = buton.zipla.hedef;
                } else {
                    this.ekranNo++;
                }
            } else {
                this.ekranNo = buton.zipla.hedef;
            }
        } else {
            this.ekranNo++;
        }
        //this.acilisIslemleri()
        this._ekranYukle();
    }
    calistir() {
        //this._arayuzYukle();
        this._ekranYukle();
    }
}