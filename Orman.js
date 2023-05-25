const Orman = {
    tohum: {},
    tohumURL: "",
    ekranNo: 0,
    secimler: {},
    tohumEk: function (URL) {
        this.tohumURL = URL;
        console.log("Tohum ekildi.");
    },
    filizlendir: function () {
        return fetch(this.tohumURL)
            .then(
                (response) => response.json()
            )
            .then((data) => {
                this.tohum = data;
                console.log("Tohum filizlendi.");
            })
            .catch((error) => console.error("Hata:", error));
    },
    cicekAc: function () {
        // Tohumdan arayüzü güncelle.
        const arayuz = this.tohum.arayuz;

        // Başlık
        document.title = arayuz.baslik;
        const favicon = document.querySelector("#favicon");
        favicon.setAttribute("href", arayuz.logo.resim);
        // Logo
        const navResim = document.querySelector("#navResim");
        navResim.setAttribute("src", arayuz.logo.resim);
        const navBaslik = document.querySelector("#navBaslik");
        navBaslik.textContent = arayuz.logo.yazi;

        // Navbar
        const navbar = arayuz.navbar;
        for (const buton in navbar) {
            const navBtn = document.querySelector("#navBtn" + buton);
            navBtn.innerHTML = navbar[buton].yazi;
            navBtn.setAttribute(
                "onclick",
                "isle(" +
                navbar[buton].aksiyon[0].tip +
                "," +
                JSON.stringify(navbar[buton].aksiyon[0].veri) +
                ")"
            );
        }
        //const mBtn01 = document.querySelector("#mBtn01");
        //mBtn01.addEventListener("click", this.meyvele(0,0));
    },
    meyvele: function (ekranNo, secim) {
        // Seçimi kaydet
        this.secimler[ekranNo] = secim;
        console.log(this.secimler);
        // TODO ekran ve seçim ile iceriklik.json içindeki verilere göre yanita karar ver
        console.log("meyvele is run in Orman.js");

    }
};

function hey(){
    console.log("hey");
}
export default Orman;