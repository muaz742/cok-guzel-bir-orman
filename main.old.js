/*ekranların tanımları yapıldı
* kullanıcı seçimlerine göre sonuç verecek şekilde düzenlenecek - yapıldı
* seçimleri algılayacak buton fonksiyonları yazılacak - yapıldı
* seçimlere göre verilecek sonucu hesaplayacak sonuçlar yazılacak - yapıldı
* TODO session kaydı eklenecek
* TODO kullanıcı hareketlerinin veritabanına işlenmesi tanımlanacak
* TODO sonuç linki paylaşımı tanımlanacak
* ekranlar arası geçişi yumuşatan geçiş animasyonu eklenebilir
* arkaplana yumuşak bir fon eklenebilir
* TODO google analitik ilişkilendirmesi yapılacak
* sadece kayıtlı kullanıcıların erişebileceği şekilde düzenlenebilir
* arkaplan videosu 1:48:57 de başlayacak şekilde düzenlenecek - yapıldı
* TODO çerez kullanım bilgilendirmesi yap
 */

// SEÇİMLER

var secim00 = 0;
var secim01 = 0;
var secim02 = 0;
var secim03 = 0;
var secim04 = 0;
var secim05 = 0;
var secim06 = 0;
var secim07 = 0;
var secim08 = 0;
var secim09 = 0;
var secim10 = 0;
var secim11 = 0;
var secim12 = 0;
var secim13 = 0;
var secim14 = 0;
var secim15 = 0;
var secim16 = 0;
var secim17 = 0;
var secim18 = 0;
var secim19 = 0;
var secim20 = 0;
var secim21 = 0;
var secim22 = 0;
var secim23 = 0;
var secim24 = 0;
var secim25 = 0;
var secim26 = 0;
var secim27 = 0;
var secim28 = 0;
var secim29 = 0;
var secim30 = 0;
var secim31 = 0;
var secim32 = 0;
var secim33 = 0;
var secim34 = 0;
var secim35 = 0;
var secim36 = 0;
var secim37 = 0;
var secim38 = 0;
var secim39 = 0;
var secim40 = 0;
var secim41 = 0;
var secim42 = 0;
var secim43 = 0;
var secim44 = 0;
var secim45 = 0;
var secim46 = 0;
var secim47 = 0;
var secim48 = 0;
var secim49 = 0;
var secim50 = 0;
var secim51 = 0;
var secim52 = 0;
var secim53 = 0;
var secim54 = 0;
var secim55 = 0;
var secim56 = 0;
var secim57 = 0;
var secim58 = 0;
var secim59 = 0;
var secim60 = 0;
var secim61 = 0;
var secim62 = 0;
var secim63 = 0;
var secim64 = 0;
var secim65 = 0;
var secim66 = 0;
var secim67 = 0;

// YAZILAR
var mYaziAgac = "tanimlanmadi";
var mYaziAgacBoyu = "tanimlanmadi";
var mYaziAgacSikligi = "tanimlanmadi";
var mYaziArkadaslikBagi = "tanimlanmadi";
var mYaziHayvan = "tanimlanmadi";
var mYaziHayvanAdi = "tanimlanmadi";
var mYaziHayvanHis = "tanimlanmadi";
var mYaziHayvanAciklama = "tanimlanmadi";
var mYaziBeyazKapi = "tanimlanmadi";
var mYaziBeyazKapiBoy = "tanimlanmadi";
var mYaziBeyazKapiHis = "tanimlanmadi";
var mYaziBeyazKapiGecis = "tanimlanmadi";
var mYaziBeyazKapiTutum = "tanimlanmadi";
var mYaziKirmiziKapi = "tanimlanmadi";
var mYaziKirmiziKapiBoy = "tanimlanmadi";
var mYaziKirmiziKapiHis = "tanimlanmadi";
var mYaziKirmiziKapiGecis = "tanimlanmadi";
var mYaziKirmiziKapiTutum = "tanimlanmadi";
var mYaziSiyahKapi = "tanimlanmadi";
var mYaziSiyahKapiBoy = "tanimlanmadi";
var mYaziSiyahKapiHis = "tanimlanmadi";
var mYaziSiyahKapiGecis = "tanimlanmadi";
var mYaziSiyahKapiTutum = "tanimlanmadi";
var mYaziKutu = "tanimlanmadi";
var mYaziKutuAciklama = "tanimlanmad}";
var mYaziParca = "tanimlanmadi";
var mYaziParcaAciklama = "tanimlanmadi";

function secimleriSifirla() {
    secim00 = 0;
    secim01 = 0;
    secim02 = 0;
    secim03 = 0;
    secim04 = 0;
    secim05 = 0;
    secim06 = 0;
    secim07 = 0;
    secim08 = 0;
    secim09 = 0;
    secim10 = 0;
    secim11 = 0;
    secim12 = 0;
    secim13 = 0;
    secim14 = 0;
    secim15 = 0;
    secim16 = 0;
    secim17 = 0;
    secim18 = 0;
    secim19 = 0;
    secim20 = 0;
    secim21 = 0;
    secim22 = 0;
    secim23 = 0;
    secim24 = 0;
    secim25 = 0;
    secim26 = 0;
    secim27 = 0;
    secim28 = 0;
    secim29 = 0;
    secim30 = 0;
    secim31 = 0;
    secim32 = 0;
    secim33 = 0;
    secim34 = 0;
    secim35 = 0;
    secim36 = 0;
    secim37 = 0;
    secim38 = 0;
    secim39 = 0;
    secim40 = 0;
    secim41 = 0;
    secim42 = 0;
    secim43 = 0;
    secim44 = 0;
    secim45 = 0;
    secim46 = 0;
    secim47 = 0;
    secim48 = 0;
    secim49 = 0;
    secim50 = 0;
    secim51 = 0;
    secim52 = 0;
    secim53 = 0;
    secim54 = 0;
    secim55 = 0;
    secim56 = 0;
    secim57 = 0;
    secim58 = 0;
    secim59 = 0;
    secim60 = 0;
    secim61 = 0;
    secim62 = 0;
    secim63 = 0;
    secim64 = 0;
    secim65 = 0;
    secim66 = 0;
    secim67 = 0;
}

// BUTONLAR

function buton00() { //ekran00 - ORMANA GİR
    secim00 = 1;
    ekran01();
}
function buton01() { //ekran01 - YÜRÜMEYE DEVAM ET
    secim01 = 1;
    ekran02();
}
function buton02() { //ekran02 - SIK
    secim02 = 1;
    ekran03();
}
function buton03() { //ekran02 - SEYREK
    secim03 = 1;
    ekran03();
}
function buton04() { //ekran03 - UZUN
    secim04 = 1;
    ekran04();
}
function buton05() { //ekran03 - KISA
    secim05 = 1;
    ekran04();
}
function buton06() { //ekran04 - APAÇIK GÖREBİLİOYORUM
    secim06 = 1;
    ekran05();
}
function buton07() { //ekran04 - AĞAÇLARIN ARASINDAN GÖREBİLİYORUM
    secim07 = 1;
    ekran05();
}
function buton08() { //ekran04 - AĞAÇLAR O KADAR GÜR Kİ GÖREMİYORUM
    secim08 = 1;
    ekran05();
}
function buton09() { //ekran05 - YÜRÜMEYE DEVAM ET
    secim09 = 1;
    ekran06();
}
function buton10() { //ekran06 - KURT
    secim10 = 1;
    ekran07();
}
function buton11() { //ekran06 - TAVŞAN
    secim11 = 1;
    ekran07();
}
function buton12() { //ekran06 - KEDİ
    secim12 = 1;
    ekran07();
}
function buton13() { //ekran06 - ASLAN
    secim13 = 1;
    ekran07();
}
function buton14() { //ekran06 - BOĞA
    secim14 = 1;
    ekran07();
}
function buton15() { //ekran06 - KUZU
    secim15 = 1;
    ekran07();
}
function buton16() { //ekran06 - HİPOPOTAM
    secim16 = 1;
    ekran07();
}
function buton17() { //ekran07 - İYİ
    secim17 = 1;
    ekran08();
}
function buton18() { //ekran07 - KÖTÜ
    secim18 = 1;
    ekran08();
}
function buton19() { //ekran07 - NORMAL
    secim19 = 1;
    ekran08();
}
function buton20() { //ekran08 - BÜYÜK
    secim20 = 1;
    ekran09();
}
function buton21() { //ekran08 - NORMAL
    secim21 = 1;
    ekran09();
}
function buton22() { //ekran08 - KÜÇÜK
    secim22 = 1;
    ekran09();
}
function buton23() { //ekran09 - İYİ
    secim23 = 1;
    ekran10();
}
function buton24() { //ekran09 - KÖTÜ
    secim24 = 1;
    ekran10();
}
function buton25() { //ekran09 - NORMAL
    secim25 = 1;
    ekran10();
}
function buton26() { //ekran10 - EVET
    secim26 = 1;
    ekran11();
}
function buton27() { //ekran10 - HAYIR
    secim27 = 1;
    ekran11();
}
function buton28() { //ekran11 - BÜYÜK
    secim28 = 1;
    ekran12();
}
function buton29() { //ekran11 - KÜÇÜK
    secim29 = 1;
    ekran12();
}
function buton30() { //ekran11 - NORMAL
    secim30 = 1;
    ekran12();
}
function buton31() { //ekran12 - İYİ
    secim31 = 1;
    ekran13();
}
function buton32() { //ekran12 - KÖTÜ
    secim32 = 1;
    ekran13();
}
function buton33() { //ekran12 - NORMAL
    secim33 = 1;
    ekran13();
}
function buton34() { //ekran13 - EVET
    secim34 = 1;
    ekran14();
}
function buton35() { //ekran13 - HAYIR
    secim35 = 1;
    ekran14();
}
function buton36() { //ekran14 - BÜYÜK
    secim36 = 1;
    ekran15();
}
function buton37() { //ekran14 - KÜÇÜK
    secim37 = 1;
    ekran15();
}
function buton38() { //ekran14 - NORMAL
    secim38 = 1;
    ekran15();
}
function buton39() { //ekran15 - İYİ
    secim39 = 1;
    ekran16();
}
function buton40() { //ekran15 - KÖTÜ
    secim40 = 1;
    ekran16();
}
function buton41() { //ekran15 - NORMAL
    secim41 = 1;
    ekran16();
}
function buton42() { //ekran16 - EVET
    secim42 = 1;
    ekran17();
}
function buton43() { //ekran16 - HAYIR
    secim43 = 1;
    ekran17();
}
function buton44() { //ekran17 - KUTUYU AÇ
    secim44 = 1;
    ekran18();
}
function buton45() { //ekran17 - YÜRÜMEYE DEVAM ET
    secim45 = 1;
    ekran19();
}
function buton46() { //ekran18 - EVET
    secim46 = 1;
    ekran19();
}
function buton47() { //ekran18 - HAYIR
    secim47 = 1;
    ekran19();
}
function buton48() { //ekran19 - BİLGENİN YANINA GİT
    secim48 = 1;
    ekran20();
}
function buton49() { //ekran20 - BİLGEYİ DİNLE
    secim49 = 1;
    ekran21();
}
function buton50() { //ekran20 - ALLAH VERSİN, BENİM ACELEM VAR
    secim50 = 1;
    window.alert("Bilge sana bir video gönderdi.");
    window.open("https://youtu.be/XKFWyPecIJA", "_blank");
    ekran30();
}
function buton51() { //ekran21 - DEVEM ET
    secim51 = 1;
    ekran22();
}
function buton52() { //ekran22 - DEVEM ET
    secim52 = 1;
    ekran23();
}
function buton53() { //ekran23 - DEVEM ET
    secim53 = 1;
    ekran24();
}
function buton54() { //ekran24 - DEVEM ET
    secim54 = 1;
    ekran25();
}
function buton55() { //ekran25 - DEVEM ET
    secim55 = 1;
    ekran26();
}
function buton56() { //ekran26 - DEVEM ET
    secim56 = 1;
    ekran27();
}
function buton57() { //ekran27 - DEVEM ET
    secim57 = 1;
    ekran28();
}
function buton58() { //ekran28 - BİLGEYİ TAKİP ET
    secim58 = 1;
    ekran29();
}
function buton59() { //ekran28 - ARKADAŞLARINI ORMANA ÇAĞIR
    secim59 = 1;
    window.alert("Henüz ormana çağır fonksiyonu tanımlanmadı. Tarayıcının paylaş tuşuyla arkadaşlarını ormana çağırabilirsin.");
    ekran29();
}
function buton60() { //ekran29 - MACERANI PAYLAŞ
    secim60 = 1;
    ekran30();
}
function buton61() { //ekran29 - GÜLÜMSE VE GİT :)
    secim61 = 1;
    window.alert("Yeni bir macerada görüşmek üzere :)");
    ekran30();
}
function buton62() { //ekran29 - SADECE GİT
    secim62 = 1;
    window.open("https://youtu.be/5AMMGHWRpJA", "_blank");
    ekran30();
}
function buton63() { //ekran30 - TWITTER
    secim63 = 1;
    window.alert("Paylaşım butonları henüz aktif değil. Şimdilik ekran görüntüsü ile idare edebilirisn.");
}
function buton64() { //ekran30 - FACEBOOK
    secim64 = 1;
    window.alert("Paylaşım butonları henüz aktif değil. Şimdilik ekran görüntüsü ile idare edebilirisn.");
}
function buton65() { //ekran30 - INSTAGRAM
    secim65 = 1;
    window.alert("Paylaşım butonları henüz aktif değil. Şimdilik ekran görüntüsü ile idare edebilirisn.");
}
function buton66() { //ekran30 - WHATSAPP
    secim66 = 1;
    window.alert("Paylaşım butonları henüz aktif değil. Şimdilik ekran görüntüsü ile idare edebilirisn.");
}
function buton67() { //ekran30 - BAŞA DÖN
    secim67 = 1;
    ekran00();
}

// EKRANLAR

function ekran00() {
    mYazBaslik("ORMANA HOŞGELDİN");
    mYazYazi("ORMANDA DOLAŞIRKEN KENDİNİ KEŞFEDEBİLECEĞİN BİR MACERAYA HAZIR MISIN?");
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton00()", "ORMANA GİR");
    secimleriSifirla();
}
function ekran01() {
    mYazBaslik("HAYAL ET");
    mYazYazi("ÇOK GÜZEL BİR ORMANDASIN");
	mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton01()", "YÜRÜMEYE DEVAM ET");
}

function ekran02() {
    mYazBaslik("ETRAFINA BAK");
    mYazYazi("AĞAÇLAR SIK MI SEYREK Mİ?");
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton02()", "SIK");
    mButonEkle("mBtn02", "buton03()", "SEYREK");
}

function ekran03() {
    mYazBaslik("AĞAÇLARI SEYRET");
    mYazYazi("AĞAÇ BOYLARI NASIL?");
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton04()", "UZUN");
    mButonEkle("mBtn02", "buton05()", "KISA");
}

function ekran04() {
    mYazBaslik("YUKARI BAK");
    mYazYazi("GÖKYÜZÜNÜ GÖREBİLİYOR MUSUN?");
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton06()", "APAÇIK GÖREBİLİOYORUM");
    mButonEkle("mBtn02", "buton07()", "AĞAÇLARIN ARASINDAN GÖREBİLİYORUM");
    mButonEkle("mBtn03", "buton08()", "AĞAÇLAR O KADAR GÜR Kİ GÖREMİYORUM");
}

function ekran05() {
    mYazBaslik(" ");
    mYazYazi("BU GÜZEL ORMANI SEYRETMENİN KEYİFLİ OLDUĞUNU BİLİYORUM AMA DAHA YOLUMUZ VAR");
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton09()", "YÜRÜMEYE DEVAM ET");
}

function ekran06() {
    mYazBaslik("ÖNÜNE BİR HAYVAN ÇIKTI");
    mYazYazi("KARŞINA ÇIKAN HAYVAN HANGİSİYDİ?");
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton10()", "KURT");
    mButonEkle("mBtn02", "buton11()", "TAVŞAN");
    mButonEkle("mBtn03", "buton12()", "KEDİ");
    mButonEkle("mBtn04", "buton13()", "ASLAN");
    mButonEkle("mBtn05", "buton14()", "BOĞA");
    mButonEkle("mBtn06", "buton15()", "KUZU");
    mButonEkle("mBtn07", "buton16()", "HİPOPOTAM");
}

function ekran07() {
    mYazBaslik("ONA BAK VE SÖYLE");
    mYazYazi("BU HAYVANA BAKTIĞINDA NASIL HİSSETTİRİYOR?");
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton17()", "İYİ");
    mButonEkle("mBtn02", "buton18()", "KÖTÜ");
    mButonEkle("mBtn03", "buton19()", "NORMAL");
}

function ekran08() {
    mYazBaslik("YOLUNA DEVAM EDİYORSUN");
    mYazYazi("KARŞINA BEYAZ BİR KAPI ÇIKTI. BU KAPININ BOYUTU NE KADAR?");
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton20()", "BÜYÜK");
    mButonEkle("mBtn02", "buton21()", "NORMAL");
    mButonEkle("mBtn03", "buton22()", "KÜÇÜK");
}

function ekran09() {
    mYazBaslik("KAPIYA BAK VE SÖYLE");
    mYazYazi("BU KAPI SANA NASIL HİSSETTİRİYOR?");
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton23()", "İYİ");
    mButonEkle("mBtn02", "buton24()", "KÖTÜ");
    mButonEkle("mBtn03", "buton25()", "NORMAL");
}

function ekran10() {
    mYazBaslik(" ");
    mYazYazi("BU KAPIDAN İÇERİ GİRMEK İSTİYOR MUSUN?");
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton26()", "EVET");
    mButonEkle("mBtn02", "buton27()", "HAYIR");
}

function ekran11() {
    mYazBaslik("YÜRÜMEYE DEVAM EDİYORSUN");
    mYazYazi("BU SEFER KARŞINA KIRMIZI BİR KAPI ÇIKIYOR. BU KAPININ BOYUTU NE KADAR?");
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton28()", "BÜYÜK");
    mButonEkle("mBtn02", "buton29()", "KÜÇÜK");
    mButonEkle("mBtn03", "buton30()", "NORMAL");
}

function ekran12() {
    mYazBaslik("KAPIYA BAKTIĞINDA");
    mYazYazi("BU KAPI SANA NASIL HİSSETTİRİYOR?");
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton31()", "İYİ");
    mButonEkle("mBtn02", "buton32()", "KÖTÜ");
    mButonEkle("mBtn03", "buton33()", "NORMAL");
}

function ekran13() {
    mYazBaslik(" ");
    mYazYazi("BU KAPIDAN İÇERİ GİRMEK İSTİYOR MUSUN?");
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton34()", "EVET");
    mButonEkle("mBtn02", "buton35()", "HAYIR");
}

function ekran14() {
    mYazBaslik("YÜRÜMEYE DEVAM EDİYORSUN");
    mYazYazi("BU SEFER DE SİYAH BİR KAPI ÇIKIYOR KARŞINA. KAPININ BOYUTU NE KADAR?");
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton36()", "BÜYÜK");
    mButonEkle("mBtn02", "buton37()", "KÜÇÜK");
    mButonEkle("mBtn03", "buton38()", "NORMAL");
}

function ekran15() {
    mYazBaslik("KAPIYA BAKTIĞINDA");
    mYazYazi("SANA NASIL HİSSETTİRİYOR?");
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton39()", "İYİ");
    mButonEkle("mBtn02", "buton40()", "KÖTÜ");
    mButonEkle("mBtn03", "buton41()", "NORMAL");
}

function ekran16() {
    mYazBaslik(" ");
    mYazYazi("BU KAPIDAN İÇERİ GEÇMEK İSTİYOR MUSUN?");
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton42()", "EVET");
    mButonEkle("mBtn02", "buton43()", "HAYIR");
}

function ekran17() {
    mYazBaslik("YÜRÜMEYE DEVAM EDİYORSUN...");
    mYazYazi("KARŞINA BİR KUTU ÇIKIYOR");
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton44()", "KUTUYU AÇ");
    mButonEkle("mBtn02", "buton45()", "YÜRÜMEYE DEVAM ET");
}

function ekran18() {
    mYazBaslik("KUTUNUN KAPAĞINI AÇIYORSUN");
    mYazYazi("VE KUTUNUN İÇİNDEN KIRIK EŞYALAR ÇIKIYOR. YOLUNA DEVAM ETMELİSİN. BU EŞYALARI YANINDA GÖTÜRMEK İSTİYOR MUSUN?");
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton46()", "EVET");
    mButonEkle("mBtn02", "buton47()", "HAYIR");
}

function ekran19() {
    mYazBaslik("YÜRÜMEYE DEVAM EDİYORSUN...");
    mYazYazi("KARŞINA BİR BİLGE ÇIKIYOR. VE SANA SELAM VERİYOR.");
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton48()", "BİLGENİN YANINA GİT");
}

function ekran20() {
    mYazBaslik(" ");
    mYazYazi("<i>Merhaba. Bana bu ormanın bilgesi derler ama bildiklerim benden değil bu ulu çınardan gelir. Eğer dinlersen ulu çınarın sana söylemek istediği bir kaç şey var.</i>");
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton49()", "BİLGEYİ DİNLE");
    mButonEkle("mBtn02", "buton50()", "ALLAH VERSİN, BENİM ACELEM VAR");
    mSonuclariTanimla();
}

function ekran21() {
    mYazBaslik("");
    mYazYazi(mYaziAgac);
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton51()", "DEVEM ET");
}

function ekran22() {
    mYazBaslik("");
    mYazYazi(mYaziHayvan);
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton52()", "DEVEM ET");
}

function ekran23() {
    mYazBaslik("");
    mYazYazi(mYaziBeyazKapi);
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton53()", "DEVEM ET");
}

function ekran24() {
    mYazBaslik("");
    mYazYazi(mYaziKirmiziKapi);
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton54()", "DEVEM ET");
}

function ekran25() {
    mYazBaslik("");
    mYazYazi(mYaziSiyahKapi);
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton55()", "DEVEM ET");
}

function ekran26() {
    mYazBaslik("");
    mYazYazi(mYaziKutu);
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton56()", "DEVEM ET");
}

function ekran27() {
    mYazBaslik("");
    mYazYazi(mYaziParca);
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton57()", "DEVEM ET");
}

function ekran28() {
    mYazBaslik("");
    mYazYazi("<i>Ulu çınarın söylemek istedikleri bu kadardı. Burası çok güzel bir orman. Umarım doğanın güzellikleri biraz olsun içini rahatlatmıştır. Dilersen arkadaşlarını da ormana çağırabilirsin. Her neyse yolcu yolunda gerek. kal sağlıcakla.</i> diyor bilge ve ağır ağır uzaklaşmaya başlıyor.");
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton58()", "BİLGEYİ TAKİP ET");
    mButonEkle("mBtn02", "buton59()", "ARKADAŞLARINI ORMANA ÇAĞIR");
}

function ekran29() {
    mYazBaslik("YENİ BİR MACERADA GÖRÜŞMEK ÜZERE");
    mYazYazi("DİLERSEN BU UFAK MACERANI ARKADAŞLARINLA PAYLAŞABİLİR VEYA SADECE GÜLÜMSEYİP GİDEBİLİRSİN. HATTA İSTERSEN SADECE GİDEBİLİRSİN DE. SEÇİM SENİN.");
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton60()", "MACERANI PAYLAŞ");
    mButonEkle("mBtn02", "buton61()", "GÜLÜMSE VE GİT :)");
    mButonEkle("mBtn03", "buton62()", "SADECE GİT");
}

function ekran30() {
    mYazBaslik("ORMANDAN");
    mYazYazi(mYaziAgac +" "+mYaziHayvan+" "+mYaziBeyazKapi+" "+mYaziKirmiziKapi+" "+mYaziSiyahKapi+" "+mYaziKutu+" "+mYaziParca);
    mButonlukKaldir();
    mButonlukEkle();
    mButonEkle("mBtn01", "buton63()", "TWITTER");
    mButonEkle("mBtn02", "buton64()", "FACEBOOK");
    mButonEkle("mBtn03", "buton65()", "INSTAGRAM");
    mButonEkle("mBtn04", "buton66()", "WHATSAPP");
    mButonEkle("mBtn05", "buton67()", "BAŞA DÖN");
    //TODO paylaşım butonları tanımlanacak
}

// FONKSİYONLAR

function mSonuclariTanimla() {
    mYazSonucAgac();
    mYaziAgac = "<i>Ulu çınar diyor ki; gördüğün ağaçlar arkadaşlıklarını temsil ediyor. Ağaçları " + mYaziAgacBoyu + " ve " + mYaziAgacSikligi + " gördün. Bu arkadaşlık bağlarının " + mYaziArkadaslikBagi + ", arkadaşlıklarının " + mYaziAgacBoyu + " olduğunu gösterir.</i>";
    mYazSonucHayvan();
    mYaziHayvan = "<i>Gördüğün hayvan senin karakterini yansıtıyor. Sen " + mYaziHayvanAdi + " gördün ve onu görmek sana " + mYaziHayvanHis +" hissettirdi. "+ mYaziHayvanAciklama +"</i>";
    mYazSonucBeyazKapi();
    mYaziBeyazKapi = "<i>Karşına çıkan beyaz kapı umut kapısıydı. Kapıyı " + mYaziBeyazKapiBoy +" görmen, umutlarının " + mYaziBeyazKapiBoy +" olduğunu gösterir. Umuda karşı " + mYaziBeyazKapiHis +" hislere sahipsin. Ve sen bu kapıdan geçmek " + mYaziBeyazKapiGecis +". Bu da umuda " + mYaziBeyazKapiTutum + " olduğunu gösterir.</i>";
    mYazSonucKirmiziKapi();
    mYaziKirmiziKapi = "<i>Kırmızı kapı aşk kapısıydı. Kapıyı " + mYaziKirmiziKapiBoy + " görmen, aşkın senin için değerinin " + mYaziKirmiziKapiBoy + " olduğunu gösterir. Aşka karşı " + mYaziKirmiziKapiHis + " hislere sahipsin. Ve sen bu kapıdan geçmek " + mYaziKirmiziKapiGecis + ". Bu da aşka " + mYaziKirmiziKapiTutum + " olduğunu gösterir.</i>";
    mYazSonucSiyahKapi();
    mYaziSiyahKapi = "<i>Siyah kapı ölüm kapısıydı. Kapıyı " + mYaziSiyahKapiBoy + " görmen ölümün senin için ne kadar " + mYaziSiyahKapiBoy + " olduğunu gösteriyor. Ölüme karşı " + mYaziSiyahKapiHis + " hislere sahipsin. Ve sen bu kapıdan geçmek " + mYaziSiyahKapiGecis + ". Bu da senin ölümden " + mYaziSiyahKapiTutum + " gösterir.</i>";
    mYazSonucKutu();
    mYaziKutu = "<i>Önüne çıkan kutu geçmişindi. "+ mYaziKutuAciklama +"</i>";
    mYazSonucParca();
    mYaziParca = "<i>Kutunun içindeki kırık parçalar anılarındı. " + mYaziParcaAciklama + "</i>";
}

function mYazSonucAgac() {
    if (secim02==1){
        mYaziAgacSikligi = "sık";
    } else if (secim03==1){
        mYaziAgacSikligi = "seyrek";
    } else {
        mYaziAgacSikligi = "<b>!ağaç sıklığı seçimi yok</b>";
    }
    if (secim04==1){
        mYaziAgacBoyu = "uzun";
    } else if (secim05==1){
        mYaziAgacBoyu = "kısa";
    } else {
        mYaziAgacBoyu = "<b>!ağaç boyu seçimi yok!</b>";
    }
    if (secim06==1){
        mYaziArkadaslikBagi = "zayıf";
    } else if (secim07==1){
        mYaziArkadaslikBagi = "iyi";
    } else if (secim08==1){
        mYaziArkadaslikBagi = "güçlü";
    } else {
        mYaziArkadaslikBagi = "<b>!arkadaşlık bağı seçimi yok!</b>";
    }

}

function mYazSonucHayvan() {
    if (secim10==1){
        mYaziHayvanAdi = "kurt";
        mYaziHayvanAciklama = "Bu senin kurt olduğunu gösterir.";
    } else if (secim11==1){
        mYaziHayvanAdi = "tavşan";
        mYaziHayvanAciklama = "Bu senin tavşan olduğunu gösterir.";
    } else if (secim12){
        mYaziHayvanAdi = "kedi";
        mYaziHayvanAciklama = "Bu senin kedi olduğunu gösterir";
    } else if (secim13==1){
        mYaziHayvanAdi = "aslan";
        mYaziHayvanAciklama = "Bu senin aslan olduğunu gösterir.";
    } else if (secim14==1){
        mYaziHayvanAdi = "boğa";
        mYaziHayvanAciklama = "Bu senin boğa olduğunu gösterir.";
    } else if (secim15==1){
        mYaziHayvanAdi = "kuzu";
        mYaziHayvanAciklama = "Bu senin kuzu olduğunu gösterir.";
    } else if (secim16==1){
        mYaziHayvanAdi = "hipopotam";
        mYaziHayvanAciklama = "Bu senin hipopotam olduğunu gösterir.";
    } else {
        mYaziHayvanAdi = "<b>!hayvan seçimi yok!</b>";
    }
    if (secim17==1){
        mYaziHayvanHis = "iyi";
    } else if (secim18==1){
        mYaziHayvanHis = "kötü";
    } else if (secim19==1){
        mYaziHayvanHis = "normal";
    } else {
        mYaziHayvanHis = "<b>!his seçimi yok!</b>";
    }
}

function mYazSonucBeyazKapi() {
    if (secim20==1){
        mYaziBeyazKapiBoy = "büyük";
    } else if (secim21==1){
        mYaziBeyazKapiBoy = "normal";
    } else if (secim22==1){
        mYaziBeyazKapiBoy = "küçük";
    } else {
        mYaziBeyazKapiBoy = "<b>!beyaz kapı boy seçimi yok!</b>";
    }
    if (secim23==1){
        mYaziBeyazKapiHis = "iyi";
    } else if (secim24==1){
        mYaziBeyazKapiHis = "kötü";
    } else if (secim25==1){
        mYaziBeyazKapiHis = "normal";
    } else {
        mYaziBeyazKapiHis = "<b>!beyaz kapı his seçimi yok!</b>";
    }
    if (secim26==1){
        mYaziBeyazKapiGecis = "istedin";
        mYaziBeyazKapiTutum = "açık";
    } else if (secim27==1){
        mYaziBeyazKapiGecis = "istemedin";
        mYaziBeyazKapiTutum = "kapalı";
    } else {
        mYaziBeyazKapiGecis = "<b>!beyaz kapı geçiş seçimi yok!</b>";
        mYaziBeyazKapiTutum = "<b>!beyaz kapı tutum seçimi yok!</b>";
    }
}
function mYazSonucKirmiziKapi() {
    if (secim28==1){
        mYaziKirmiziKapiBoy = "büyük";
    } else if (secim29==1){
        mYaziKirmiziKapiBoy = "küçük";
    } else if (secim30==1){
        mYaziKirmiziKapiBoy = "normal";
    } else {
        mYaziKirmiziKapiBoy = "<b>!kırmızı kapı boy seçimi yok!</b>";
    }
    if (secim31==1){
        mYaziKirmiziKapiHis = "iyi";
    } else if (secim32==1){
        mYaziKirmiziKapiHis = "kötü";
    } else if (secim33==1){
        mYaziKirmiziKapiHis = "normal";
    } else {
        mYaziKirmiziKapiHis = "<b>!kırmızı kapı his seçimi yok!</b>";
    }
    if (secim34==1){
        mYaziKirmiziKapiGecis = "istedin";
        mYaziKirmiziKapiTutum = "açık";
    } else if (secim35==1){
        mYaziKirmiziKapiGecis = "istemedin";
        mYaziKirmiziKapiTutum = "kapalı";
    } else {
        mYaziKirmiziKapiGecis = "<b>!kırmızı kapı geçiş seçimi yok!</b>";
        mYaziKirmiziKapiTutum = "<b>!kırmızı kapı tutum seçimi yok!</b>";
    }
}
function mYazSonucSiyahKapi() {
    if (secim36==1){
        mYaziSiyahKapiBoy = "büyük";
    } else if (secim37==1){
        mYaziSiyahKapiBoy = "küçük";
    } else if (secim38==1){
        mYaziSiyahKapiBoy = "normal";
    } else {
        mYaziSiyahKapiBoy = "<b>!siyah kapı boy seçimi yok!</b>";
    }
    if (secim39==1){
        mYaziSiyahKapiHis = "iyi";
    } else if (secim40==1){
        mYaziSiyahKapiHis = "kötü";
    } else if (secim41==1){
        mYaziSiyahKapiHis = "normal";
    } else {
        mYaziSiyahKapiHis = "<b>!siyah kapı his seçimi yok!</b>";
    }
    if (secim42==1){
        mYaziSiyahKapiGecis = "istedin";
        mYaziSiyahKapiTutum = "korkmadığını";
    } else if (secim43==1){
        mYaziSiyahKapiGecis = "istemedin";
        mYaziSiyahKapiTutum = "korktuğunu";
    } else {
        mYaziSiyahKapiGecis = "<b>!siyah kapı geçiş seçimi yok!</b>";
        mYaziSiyahKapiTutum = "<b>!siyah kapı tutum seçimi yok!</b>";
    }
}
function mYazSonucKutu() {
    if (secim44==1){
        mYaziKutuAciklama = "Sen kutuyu açmayı seçtin. Bu senin geçmişine ilgili olduğunu gösterir.";
    } else if (secim45==1){
        mYaziKutuAciklama = "Kutuyu açmadan yürümeye devam etmeyi seçtin. Bu senin geçmişe ilgili olmadığını gösterir.";
    } else {
        mYaziKutuAciklama = "<b>!kutu açılış seçimi yok!</b>";
    }
}
function mYazSonucParca() {
    if (secim46==1){
        mYaziParcaAciklama = "Sen bu parçaları yanında götürmeyi seçtin. Yani senin geçmişteki anıların vazgeçilmezin.";
    } else if (secim47==1){
        mYaziParcaAciklama = "Sen bu parçaları yanında götürmek istemedin. Yani senin için geçmişteki anıların geçmişte kaldığıyla güzel.";
    } else {
        mYaziParcaAciklama = "<b>!parça alım seçimi yok!</b>";
    }

}

function mYazBaslik(yazi) {
    document.getElementById("mBaslik").innerText = yazi;
}

function mYazYazi(yazi) {
    document.getElementById("mYazi").innerHTML = yazi;
}

function mButonEkle(id, fonksiyon, yazi) {
    mElementEkle("mButonluk", "a", "btn btn-md btn-primary display-4", id, fonksiyon, yazi);
}

function mElementEkle(ebeveyn, tip, stil, id, fonksiyon, yazi) {
    //element ekleme
    var yeniElement = document.createElement(tip); //element tipi tanımla
    yeniElement.setAttribute("class", stil); //element stili tanımla
    yeniElement.setAttribute("id", id); //element id'si tanımla
    yeniElement.setAttribute("onclick", fonksiyon); //element fonksiyonu tanımla
    yeniElement.innerText = yazi; //element yazısı tanımla
    var ana = document.getElementById(ebeveyn); //ebeveyn elementi tanımla
    ana.appendChild(yeniElement); //elementi ebeveyne ekle

}

function mElementKaldir(id) {
    //element kaldırma
    var buton = document.getElementById(id); //element seç
    var ebeveyn = buton.parentElement; //seçilen elementin ebeveyn elementi tanımla
    ebeveyn.removeChild(buton); //ebevenyden elementi kaldır
}

function mButonlukKaldir() {
    //element kaldırma
    var buton = document.getElementById("mButonluk"); //element seç
    var ebeveyn = buton.parentElement; //seçilen elementin ebeveyn elementi tanımla
    ebeveyn.removeChild(buton); //ebevenyden elementi kaldır
}

function mButonlukEkle() {
    //element ekleme
    var yeniElement = document.createElement("div"); //element tipi tanımla
    yeniElement.setAttribute("class", "mbr-section-btn"); //element stili tanımla
    yeniElement.setAttribute("id", "mButonluk"); //element id'si tanımla
    var ana = document.getElementById("mEkran"); //ebeveyn elementi tanımla
    ana.appendChild(yeniElement); //elementi ebeveyne ekle

}