-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Anamakine: localhost:3306
-- Üretim Zamanı: 05 Tem 2019, 14:38:09
-- Sunucu sürümü: 10.0.38-MariaDB-cll-lve
-- PHP Sürümü: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `u8748904_sistem`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `iceriklik`
--

CREATE TABLE `iceriklik` (
  `ekranNo` int(11) NOT NULL,
  `baslik` varchar(120) COLLATE utf8_turkish_ci NOT NULL,
  `yazi` varchar(400) COLLATE utf8_turkish_ci NOT NULL,
  `secimNo` varchar(120) COLLATE utf8_turkish_ci DEFAULT NULL,
  `secimYazi` varchar(120) COLLATE utf8_turkish_ci DEFAULT NULL,
  `sonucYaziDuru` varchar(400) COLLATE utf8_turkish_ci DEFAULT NULL,
  `sonucYaziDedde` varchar(400) COLLATE utf8_turkish_ci DEFAULT NULL,
  `aksiyon` int(10) NOT NULL,
  `veri` varchar(200) COLLATE utf8_turkish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `iceriklik`
--

INSERT INTO `iceriklik` (`ekranNo`, `baslik`, `yazi`, `secimNo`, `secimYazi`, `sonucYaziDuru`, `sonucYaziDedde`, `aksiyon`, `veri`) VALUES
(0, 'ORMANA HOŞGELDİN', 'ORMANDA DOLAŞIRKEN KENDİNİ KEŞFEDEBİLECEĞİN BİR MACERAYA <br>HAZIR MISIN?', '0', 'ORMANA GİR', NULL, NULL, 0, ''),
(1, 'HAYAL ET', 'ÇOK GÜZEL BİR ORMANDASIN', '0', 'YÜRÜMEYE DEVAM ET', NULL, NULL, 0, ''),
(2, 'ETRAFINA BAK', 'AĞAÇLAR SIK MI SEYREK Mİ?', '0', 'SIK', 'Ağaçları sık görmen çevrende çok arkadaşının gösterir.', 'Tam arkadaş canlısısın. Yeni arkadaşlıklar kurmayı seviyorsun. Konserde alanı hınca hınç dolmuş pop sanatçısı gibisin. Kalabalığı seviyorsun. Kalabalığın içinde olmaktan haz alıyorsun. ', 0, ''),
(2, 'ETRAFINA BAK', 'AĞAÇLAR SIK MI SEYREK Mİ?', '1', 'SEYREK', 'Ağaçları seyrek görmen çevrende az arkadaşının gösterir.', 'Kalabalıktan kaçıyorsun. Dost canlısı değilsin. Bir iki tane olsun az olsun istiyorsun. Kalabalıktan ziyade seni anlayan bir arkadaş olsun yeterde artar. ', 0, ''),
(3, 'AĞAÇLARI SEYRET', 'AĞAÇ BOYLARI NASIL?', '0', 'UZUN', 'Ağaç boylarının uzun olmasu arkadaşlıklarının uzun olduğunu gösterir.', 'Uzun süreli arkadaşlıkların var. Her şeyin yenisi, dostun eskisi diyorsun. Arkadaşlığa önem veriyorsun. Sağlam arkadaşlıkların var.', 0, ''),
(3, 'AĞAÇLARI SEYRET', 'AĞAÇ BOYLARI NASIL?', '1', 'KISA', 'Ağaç boylarının kısa olmasu arkadaşlıklarının kısa olduğunu gösterir.', 'Arkadaşlarına karşı mesafelisin. Ne kadar iyi de olsalar araya hep bir mesafe koyuyorsun. Prensiplerin var ve kimse onlardan üstün değil. ', 0, ''),
(4, 'YUKARI BAK', 'GÖKYÜZÜNÜ GÖREBİLİYOR MUSUN?', '0', 'APAÇIK GÖREBİLİYORUM', 'Bu arkadaşlık bağlarının zayıf,', 'Tavsiye almayı sevmiyorsun. Arkadaşlarının tavsiyesini kulak ardı ediyorsun. Söylenen şeyleri gözünle görmeden inanmıyorsun. Etki altında kalmıyorsun. ', 0, ''),
(4, 'YUKARI BAK', 'GÖKYÜZÜNÜ GÖREBİLİYOR MUSUN?', '1', 'AĞAÇLARIN ARASINDAN GÖREBİLİYORUM', 'Bu arkadaşlık bağlarının iyi,', 'Arkadaş tavsiyelerini önemsiyorsun. Bir şeyi yorumlarken veya bir olayı sonuca bağlamaya çalışırken onların tavsiyelerinde faydalanıyorsun. ', 0, ''),
(4, 'YUKARI BAK', 'GÖKYÜZÜNÜ GÖREBİLİYOR MUSUN?', '2', 'AĞAÇLAR O KADAR GÜR Kİ GÖREMİYORUM', 'Bu arkadaşlık bağlarının güçlü,', 'Kendi başına karar vermekte zorlanıyorsun. Hatta çoğu zaman karar bile veremiyorsun. Sürekli arkadaşlarında tavsiye alma mecburiyeti hissediyorsun. Fazla etkileniyorsun. ', 0, ''),
(5, ' ', 'BU GÜZEL ORMANI SEYRETMENİN KEYİFLİ OLDUĞUNU BİLİYORUM AMA DAHA YOLUMUZ VAR', '0', 'YÜRÜMEYE DEVAM ET', NULL, NULL, 0, ''),
(6, 'ÖNÜNE BİR HAYVAN ÇIKTI', 'KARŞINA ÇIKAN HAYVAN HANGİSİYDİ?', '0', 'KURT', 'Gördüğün hayvan senin karakterini yansıtıyor. Sen kurt gördün ve bu senin kurt olduğunu gösterir.', 'Asil bir insansın. Boyun eğmez. En zor zamanlarda bile taviz vermiyorsun. Dostluğa ve sadakate önem veriyorsun. ', 0, ''),
(6, 'ÖNÜNE BİR HAYVAN ÇIKTI', 'KARŞINA ÇIKAN HAYVAN HANGİSİYDİ?', '1', 'TAVŞAN', 'Gördüğün hayvan senin karakterini yansıtıyor. Sen tavşan gördün ve bu senin tavşan olduğunu gösterir.', 'Oldukça sempatiksin. Deli, dolu ve zarif. Özel hayatın çok hareketli. Cinselliğe önem veriyorsun. ', 0, ''),
(6, 'ÖNÜNE BİR HAYVAN ÇIKTI', 'KARŞINA ÇIKAN HAYVAN HANGİSİYDİ?', '2', 'KEDİ', 'Gördüğün hayvan senin karakterini yansıtıyor. Sen kedi gördün ve bu senin kedi olduğunu gösterir.', 'Uysal bir insansın. Suyuna giden herkesle anlaşabiliyorsun. Ama tersini kimse görmek istemez. En güzel yanın umursamazlığın. Hak ettiğin değeri vermeyen herkesi hayatından çıkarıyorsun. Çorap çıkarır gibi. ', 0, ''),
(6, 'ÖNÜNE BİR HAYVAN ÇIKTI', 'KARŞINA ÇIKAN HAYVAN HANGİSİYDİ?', '3', 'ASLAN', 'Gördüğün hayvan senin karakterini yansıtıyor. Sen aslan gördün ve bu senin aslan olduğunu gösterir.', 'Gücünü yalnızlığından alıyorsun. Gücünün farkındasın. Dürüst, cesur, korkusuzsun. Lafını esirgemiyorsun. Yalnızsın çünkü tek kafa dengin kendinsin. Yalnızsın ama herkesin arkadaş olmak isteyeceği birisin. ', 0, ''),
(6, 'ÖNÜNE BİR HAYVAN ÇIKTI', 'KARŞINA ÇIKAN HAYVAN HANGİSİYDİ?', '4', 'BOĞA', 'Gördüğün hayvan senin karakterini yansıtıyor. Sen boğa gördün ve bu senin boğa olduğunu gösterir.', 'Dirayetli bir insansın. Zorluklar yıldıramaz seni. Zorluk yoktur. Ayağa kalkmayan sen vardır. Cüssen gibi kocaman bir kalbin var. Her ne kadar göstermesen de oldukça uysalsın. Yeter ki önerilen şey mantıklı olsun. ', 0, ''),
(6, 'ÖNÜNE BİR HAYVAN ÇIKTI', 'KARŞINA ÇIKAN HAYVAN HANGİSİYDİ?', '5', 'KUZU', 'Gördüğün hayvan senin karakterini yansıtıyor. Sen kuzu gördün ve bu senin kuzu olduğunu gösterir.', 'Sempatik ve sevimli oluşunu korkaklık olarak algılıyorlar. Uysallığını suiistimal edenlerin fırtınanın göbeğinde olmanın ne demek olduğunu anlamaları uzun sürmez. Aptalmış gibi yapmayı seviyorsun. Kendini akıllı zanneden aptalları izlemek zevkli sonuçta.', 0, ''),
(6, 'ÖNÜNE BİR HAYVAN ÇIKTI', 'KARŞINA ÇIKAN HAYVAN HANGİSİYDİ?', '6', 'HİPOPOTAM', 'Gördüğün hayvan senin karakterini yansıtıyor. Sen hipopotam gördün ve bu senin hipopotam olduğunu gösterir.', NULL, 0, ''),
(7, 'ONA BAK VE SÖYLE ', 'BU HAYVANA BAKTIĞINDA NASIL HİSSETTİRİYOR?', '0', 'İYİ', 'Ve onu görmek sana iyi hissettirdi. Bu kendini sevdiğini gösterir.', 'Kendinle yüzleşmeyi seviyorsun. Korkmuyorsun. Evet bu benim. Benim bu. Seni mükemmel kılan şey bu. Eksiklik veya fazlalıklarını biliyorsun. ', 0, ''),
(7, 'ONA BAK VE SÖYLE ', 'BU HAYVANA BAKTIĞINDA NASIL HİSSETTİRİYOR?', '1', 'KÖTÜ', 'Ve onu görmek sana kötü hissettirdi. Bu kendinle sorun yaşadığını gösterir.', 'Kendinden kaçıyorsun. Yüzleşmekten çekiniyorsun. Eleştirilmeyi kaldıramıyorsun. Kendine haksızlık etmemelisin ama kendinle yüzleşmekten de kaçmamalısın.', 0, ''),
(7, 'ONA BAK VE SÖYLE ', 'BU HAYVANA BAKTIĞINDA NASIL HİSSETTİRİYOR?', '2', 'NORMAL', 'Ve onu görmek sana normal hissettirdi. Bu kendinin farkında olduğunu gösterir.', 'Kendinle yüzleşmekten korkmuyorsun. Ama hani aynaya çok bakmasam veya eleştirilmesem daha iyi olur diyorsun.', 0, ''),
(8, 'YOLUNA DEVAM EDİYORSUN', 'KARŞINA BEYAZ BİR KAPI ÇIKTI<br>BU KAPININ BOYUTU NE KADAR?', '0', 'BÜYÜK', 'Karşına çıkan beyaz kapı umut kapısıydı. Kapıyı büyük görmen, umutlarının büyük olduğunu gösterir.', 'Şu umudundan dünyaya da versen daha yaşanılabilir bir yer olurdu. Her şeye rağmen ümitlisin. Bir dünya barışının olabileceğinden bile ümitlisin. ', 0, ''),
(8, 'YOLUNA DEVAM EDİYORSUN', 'KARŞINA BEYAZ BİR KAPI ÇIKTI<br>BU KAPININ BOYUTU NE KADAR?', '1', 'NORMAL', 'Karşına çıkan beyaz kapı umut kapısıydı. Kapıyı normal görmen, umutlarının normal olduğunu gösterir.', 'Ümitlisin ama gerçekleri ve koşulları göz ardı etmeyecek kadar da mantıklı. Kesinlikle bir hayalperest değilsin ama biraz hayal etmekten de bir şey olmaz diyorsun. ', 0, ''),
(8, 'YOLUNA DEVAM EDİYORSUN', 'KARŞINA BEYAZ BİR KAPI ÇIKTI<br>BU KAPININ BOYUTU NE KADAR?', '2', 'KÜÇÜK', 'Karşına çıkan beyaz kapı umut kapısıydı. Kapıyı küçük görmen, umutlarının küçük olduğunu gösterir.', 'Bu kadar ümitsiz olman zamanında ümit ettiğin şeylerin sana koca bir nanik yapmış olmasından olsa gerek.  Amerika’nın demokrasi getirmesini bekleme **. Ama sürprizleri de yadsıma.', 0, ''),
(9, 'KAPIYA BAK VE SÖYLE', 'BU KAPI SANA NASIL HİSSETTİRİYOR?', '0', 'İYİ', 'Umuda karşı iyi hislere sahipsin.', 'İyi veya kötü, güzel veya çirkin kararlısın. İkilemde kalmıyorsun. En kötü karar bile kararsızlıktan iyidir diyorsun. Ümit etmekten de vazgeçmiyorsun.', 0, ''),
(9, 'KAPIYA BAK VE SÖYLE', 'BU KAPI SANA NASIL HİSSETTİRİYOR?', '1', 'KÖTÜ', 'Umuda karşı kötü hislere sahipsin.', 'Gerçekten yapmak istediğin ile hissettiğin şey hep çelişiyor. Kararsızsın. Nasıl davranacağını bilmiyorsun. Ümit etmenin saçma olduğunu düşünmek dışında.', 0, ''),
(9, 'KAPIYA BAK VE SÖYLE', 'BU KAPI SANA NASIL HİSSETTİRİYOR?', '2', 'NORMAL', 'Umuda karşı normal hislere sahipsin.', 'O kadar olgunsun ki herşeye büyük bir olgunlukla yaklaşıyorsun. ', 0, ''),
(10, ' ', 'BU KAPIDAN İÇERİ GİRMEK İSTİYOR MUSUN?', '0', 'EVET', 'Ve sen bu kapıdan geçmek istedin. Bu da umuda açık olduğunu gösterir.', 'Yeni şeyler görmek, öğrenmek seni cezbediyor. Bu sende dinmeyen bir susuzluk gibi. Meraklısın. Ve yeni şeylere açsın. Sonsuz bir umudun var. Hiç kurumayacak bir nehir gibi.', 0, ''),
(10, ' ', 'BU KAPIDAN İÇERİ GİRMEK İSTİYOR MUSUN?', '1', 'HAYIR', 'Ve sen bu kapıdan geçmek istemedin. Bu da umuda kapalı olduğunu gösterir.', 'Rasyonelsin. Hem çilekten muz tadı almaya çalışmak saçmalık. Ümit etmek, boş beklentilere kapılmak istemiyorsun. Beklentiyi az tutmak başa çıkmaları durumunda acıyı hafifletir. Hem ormandaki bir kapının önünde ne varsa arkasında da o vardır.', 0, ''),
(11, 'YÜRÜMEYE DEVAM EDİYORSUN', 'BU SEFER KARŞINA KIRMIZI BİR KAPI ÇIKIYOR<br>BU KAPININ BOYUTU NE KADAR?', '0', 'BÜYÜK', 'Kırmızı kapı aşk kapısıydı. Kapıyı büyük görmen, aşkın senin için değerinin büyük olduğunu gösterir.', 'Eros’un dünyadaki varisisin. Sen tam bir aşk insanısın. Tutkulu ve duygusalsın. Her şeyi tutkuyla yapıyorsun. Sevmeyi de nefret etmeyi de. Tutku senin ölçütün. ', 0, ''),
(11, 'YÜRÜMEYE DEVAM EDİYORSUN', 'BU SEFER KARŞINA KIRMIZI BİR KAPI ÇIKIYOR<br>BU KAPININ BOYUTU NE KADAR?', '1', 'KÜÇÜK', 'Kırmızı kapı aşk kapısıydı. Kapıyı küçük görmen, aşkın senin için değerinin küçük olduğunu gösterir.', 'Eros’un “fail” i sen olmalısın. Duygusallığın mantığı körelttiğini düşünüyorsun. Duygusallık mantığın düşmanı. Özel hayatında (sevgili, arkadaş) ilişkilerinde mantık senin ölçütün. ', 0, ''),
(11, 'YÜRÜMEYE DEVAM EDİYORSUN', 'BU SEFER KARŞINA KIRMIZI BİR KAPI ÇIKIYOR<br>BU KAPININ BOYUTU NE KADAR?', '2', 'NORMAL', 'Kırmızı kapı aşk kapısıydı. Kapıyı normal görmen, aşkın senin için değerinin normal olduğunu gösterir.', 'Mantığı duygularınla, duygularını mantıkla destekliyorsun. İkisi de tek başlarına hata yaptırır diye düşünüyorsun. Düzeni, standartları olan uçlarda yaşamayan bir insansın. ', 0, ''),
(12, 'KAPIYA BAKTIĞINDA', 'BU KAPI SANA NASIL HİSSETTİRİYOR?', '0', 'İYİ', 'Aşka karşı iyi hislere sahipsin.', 'Romeo da kim senin yanında? (sonun onun gibi olmasın) Aşktan yana şanslısın. Sevmeyi istiyorsun. Yaptığın en iyi şey güzel sevmek. Senin gibisini bulmak zor bu zamanda. ', 0, ''),
(12, 'KAPIYA BAKTIĞINDA', 'BU KAPI SANA NASIL HİSSETTİRİYOR?', '1', 'KÖTÜ', 'Aşka karşı kötü hislere sahipsin.', 'Hep olmadık insanlar çıkmış karşına. Ya yanlış insanı doğru sevmişsin, yada doğru insanı yanlış sevmişsin. Bıktırmışlar seni. ', 0, ''),
(12, 'KAPIYA BAKTIĞINDA', 'BU KAPI SANA NASIL HİSSETTİRİYOR?', '2', 'NORMAL', 'Aşka karşı normal hislere sahipsin.', 'Her şeyi olduğu gibi, aşkı da sevmeyi de olgunlukla karşılıyorsun. Olması gereken oldu bitmesi gerektiğinde de bitti diyorsun.  ', 0, ''),
(13, ' ', 'BU KAPIDAN İÇERİ GİRMEK İSTİYOR MUSUN?', '0', 'EVET', 'Ve sen bu kapıdan geçmek istedin. Bu da aşka açık olduğunu gösterir.', 'Aşk tutkun dünya döndükçe baki kalacak. Sen sevmeyi seviyorsun. Tutkuyla. Hiçbir şey seni tutkuyla sevmekten alıkoyamaz. Sevmeyi bildikten sonra sevilecek birini bulmak kolay. Senin tarafından sevilmek ayrıcalık. ', 0, ''),
(13, ' ', 'BU KAPIDAN İÇERİ GİRMEK İSTİYOR MUSUN?', '1', 'HAYIR', 'Ve sen bu kapıdan geçmek istemedin. Bu da aşka kapalı olduğunu gösterir.', ' Hepsinin sonu Romeo gibi olacak diyorsun. Juliet’ten başka kız mı yoktu? Kapattık dükkanı diyorsun. Çok kırmışlar seni. Hatta paramparça etmişler. ', 0, ''),
(14, 'YÜRÜMEYE DEVAM EDİYORSUN', 'BU SEFER DE SİYAH BİR KAPI ÇIKIYOR KARŞINA<br>KAPININ BOYUTU NE KADAR?', '0', 'BÜYÜK', 'Siyah kapı ölüm kapısıydı. Kapıyı büyük görmen ölümün senin için ne kadar büyük olduğunu gösteriyor.', 'Ölüm hayatının her anında. Onu düşünmediğin anlar pek az. Hatta çoğu zaman seni karamsarlığa itiyor. ', 0, ''),
(14, 'YÜRÜMEYE DEVAM EDİYORSUN', 'BU SEFER DE SİYAH BİR KAPI ÇIKIYOR KARŞINA<br>KAPININ BOYUTU NE KADAR?', '1', 'KÜÇÜK', 'Siyah kapı ölüm kapısıydı. Kapıyı küçük görmen ölümün senin için ne kadar küçük olduğunu gösteriyor.', 'Ölüm mü? Daha değil. Yapacak bir sürü şey var. Bir sürü planın var. Ve bunların arasında ölüm yok. ', 0, ''),
(14, 'YÜRÜMEYE DEVAM EDİYORSUN', 'BU SEFER DE SİYAH BİR KAPI ÇIKIYOR KARŞINA<br>KAPININ BOYUTU NE KADAR?', '2', 'NORMAL', 'Siyah kapı ölüm kapısıydı. Kapıyı normal görmen ölümün senin için ne kadar normal olduğunu gösteriyor.', 'Her canlı ölümü tadacaktır. Ama şimdiden durup kendi yasını tutmanın bir anlamı yok.', 0, ''),
(15, 'KAPIYA BAKTIĞINDA', 'SANA NASIL HİSSETTİRİYOR?', '0', 'İYİ', 'Ölüme karşı iyi hislere sahipsin.', 'Hayatı tam manasıyla olmasada yaşadığını düşünüyorsun. Öleceğini inkar etmeden, yapmak istediği şeyleri yaparak, buradaki sorumlulukları yerine getirdikten sonra ölümün kaçınılmaz son olduğunu düşünüyorsun. Ona göre yaşadın ve yaşıyorsun. ', 0, ''),
(15, 'KAPIYA BAKTIĞINDA', 'SANA NASIL HİSSETTİRİYOR?', '1', 'KÖTÜ', 'Ölüme karşı kötü hislere sahipsin.', 'İçinde henüz bir sürü şeyi yarım bırakmışlığın tedirginliği var. Ölümden korkmuyorsun. İşlerini erteliyorsun. İlişkilerini. Bu yüzden 100 yaşına da gelsen her ölüm senin için erken ölüm olacak. ', 0, ''),
(15, 'KAPIYA BAKTIĞINDA', 'SANA NASIL HİSSETTİRİYOR?', '2', 'NORMAL', 'Ölüme karşı normal hislere sahipsin.', 'Ölümü kabulleniyor ama gölgesinde yaşayamıyorsun. Hem bugün ölecekmiş gibi hem de hiç ölmeyecekmiş gibi yaşıyorsun.', 0, ''),
(16, ' ', 'BU KAPIDAN İÇERİ GEÇMEK İSTİYOR MUSUN?', '0', 'EVET', 'Ve sen bu kapıdan geçmek istedin. Bu da senin ölümden korkmadığını gösterir.', 'Sorumluluk duygun yüksek. Üzerine düşen her sorumluluğu yerine getirmeyi başarıyorsun. Yaşamının da sorumluluğu bir gün ölmek ve sen sorumluluk sahibisin. ', 0, ''),
(16, ' ', 'BU KAPIDAN İÇERİ GEÇMEK İSTİYOR MUSUN?', '1', 'HAYIR', 'Ve sen bu kapıdan geçmek istemedin Bu da senin ölümden korktuğunu gösterir.', 'Hey bir dakika yeni geldik ya! Sorumluluk sahibi değilsin. Sorumluluktan kaçıyorsun. Ciddi ilişkilerden kaçtın, evlilikten, işlerinin sorumluluğundan. Ama ölüm nihai son, sıkıysa kaç. ', 0, ''),
(17, 'YÜRÜMEYE DEVAM EDİYORSUN', 'KARŞINA BİR KUTU ÇIKIYOR', '0', 'KUTUYU AÇ', 'Sen kutuyu açmayı seçtin. Bu senin geçmişine ilgili olduğunu gösterir.', 'Geçmişinden kaçmıyor, onunla yüzleşme cesareti gösteriyorsun. Ondan ders çıkarıyorsun. Aynı hataları yapmak istemiyorsun. ', 0, ''),
(17, 'YÜRÜMEYE DEVAM EDİYORSUN', 'KARŞINA BİR KUTU ÇIKIYOR', '1', 'YÜRÜMEYE DEVAM ET', 'Kutuyu açmadan yürümeye devam etmeyi seçtin. Bu senin geçmişe ilgili olmadığını gösterir.', 'Geçmişin hayal kırıklıkları ve pişmanlıkla dolu. Ve en iyi yolu ondan kaçmakta buluyorsun. ', 0, ''),
(18, 'KUTUNUN KAPAĞINI AÇIYORSUN', 'VE KUTUNUN İÇİNDEN KIRIK EŞYALAR ÇIKIYOR<br>YOLUNA DEVAM ETMELİSİN<br>BU EŞYALARI YANINDA GÖTÜRMEK İSTİYOR MUSUN?', '0', 'EVET', 'Sen bu parçaları yanında götürmeyi seçtin. Yani senin geçmişteki anıların vazgeçilmezin.', 'Gereksiz anıları taşıyorsun. Pişmanlıklarını. Pişmanlıklarının gölgesinde yaşıyorsun. Seni üzdüğünü bildiğin halde bunları kendine yük etmekten geri durmuyorsun. Mazoşistsin. ', 0, ''),
(18, 'KUTUNUN KAPAĞINI AÇIYORSUN', 'VE KUTUNUN İÇİNDEN KIRIK EŞYALAR ÇIKIYOR<br>YOLUNA DEVAM ETMELİSİN<br>BU EŞYALARI YANINDA GÖTÜRMEK İSTİYOR MUSUN?', '1', 'HAYIR', 'Sen bu parçaları yanında götürmek istemedin. Yani senin için geçmişteki anıların geçmişte kaldığıyla güzel.', 'Yaşandı ve bitti. İyi yada kötü. Yeni şeyler söylemek yeni şeyler yaşamak istiyorsun. Geçmişi kendine köstek yapmıyorsun. En azından güzel bir gelecek için anıları rafa kaldırıyorsun. Senin hayatında geçmişin pişmanlıklarına YER YOK. ', 0, ''),
(19, 'YÜRÜMEYE DEVAM EDİYORSUN', 'KARŞINA BİR BİLGE ÇIKIYOR<br>VE SANA SELAM VERİYOR', '0', 'BİLGENİN YANINA GİT', NULL, NULL, 0, ''),
(20, ' ', '<i>Merhaba. Bana bu ormanın bilgesi derler<br>ama bildiklerim benden değil bu ulu çınardan gelir.<br>Eğer dinlersen ulu çınarın sana söylemek istediği bir kaç şey var.</i>', '0', 'BİLGEYİ DİNLE', NULL, NULL, 0, ''),
(20, ' ', '<i>Merhaba. Bana bu ormanın bilgesi derler<br>ama bildiklerim benden değil bu ulu çınardan gelir.<br>Eğer dinlersen ulu çınarın sana söylemek istediği bir kaç şey var.</i>', '1', 'ALLAH VERSİN, BENİM ACELEM VAR', NULL, NULL, 0, ''),
(21, 'başlık 21', 'yazı 21', '0', 'DEVAM ET', NULL, NULL, 0, ''),
(22, 'başlık 22', 'yazı 22', '0', 'DEVAM ET', NULL, NULL, 0, ''),
(23, 'başlık 23', 'yazı 23', '0', 'DEVAM ET', NULL, NULL, 0, ''),
(24, 'başlık 24', 'yazı 24', '0', 'DEVAM ET', NULL, NULL, 0, ''),
(25, 'başlık 25', 'yazı 25', '0', 'DEVAM ET', NULL, NULL, 0, ''),
(26, 'başlık 26', 'yazı 26', '0', 'DEVAM ET', NULL, NULL, 0, ''),
(27, 'başlık 27', 'yazı 27', '0', 'DEVAM ET', NULL, NULL, 0, ''),
(28, ' ', '<i>Ulu çınarın söylemek istedikleri bu kadardı. Burası çok güzel bir orman.<br>Umarım doğanın güzellikleri biraz olsun içini rahatlatmıştır.<br>Her neyse yolcu yolunda gerek. Kal sağlıcakla.</i> diyor bilge ve ağır ağır uzaklaşmaya başlıyor. Dilersen bu ufak maceranı arkadaşlarınla paylaşabilir veya bir tebessüm bırakıp gidebilirsin :) Hatta isetersen sadece gidebilisin de. Seçim senin.', '0', 'MACERANI PAYLAŞ', NULL, NULL, 5, 'url~http://orman.muaz712.com/e/$dizge'),
(28, ' ', '<i>Ulu çınarın söylemek istedikleri bu kadardı. Burası çok güzel bir orman.<br>Umarım doğanın güzellikleri biraz olsun içini rahatlatmıştır.<br>Her neyse yolcu yolunda gerek. Kal sağlıcakla.</i> diyor bilge ve ağır ağır uzaklaşmaya başlıyor. Dilersen bu ufak maceranı arkadaşlarınla paylaşabilir veya bir tebessüm bırakıp gidebilirsin :) Hatta isetersen sadece gidebilisin de. Seçim senin.', '1', 'GÜLÜMSE VE GİT :)', NULL, NULL, 6, 'tip~\'success\'|yazi~\'Hoşcakal :)\'|animasyon~\'fadeInUp\''),
(29, 'YENİ BİR MACERADA GÖRÜŞMEK ÜZERE', 'DİLERSEN BU UFAK MACERANI ARKADAŞLARINLA PAYLAŞABİLİR<br>VEYA SADECE GÜLÜMSEYİP GİDEBİLİRSİN.<br>HATTA İSTERSEN SADECE GİDEBİLİRSİN DE. SEÇİM SENİN.', '0', 'MACERANI PAYLAŞ', NULL, NULL, 5, 'url~\"http://orman.muaz712.com/e/\" . $_SESSION[\'kisaUrl\']|MACERANI PAYLAŞ'),
(29, 'YENİ BİR MACERADA GÖRÜŞMEK ÜZERE', 'DİLERSEN BU UFAK MACERANI ARKADAŞLARINLA PAYLAŞABİLİR<br>VEYA SADECE GÜLÜMSEYİP GİDEBİLİRSİN.<br>HATTA İSTERSEN SADECE GİDEBİLİRSİN DE. SEÇİM SENİN.', '1', 'GÜLÜMSE VE GİT :)', NULL, NULL, 0, ''),
(29, 'YENİ BİR MACERADA GÖRÜŞMEK ÜZERE', 'DİLERSEN BU UFAK MACERANI ARKADAŞLARINLA PAYLAŞABİLİR<br>VEYA SADECE GÜLÜMSEYİP GİDEBİLİRSİN.<br>HATTA İSTERSEN SADECE GİDEBİLİRSİN DE. SEÇİM SENİN.', '2', 'SADECE GİT', NULL, NULL, 0, ''),
(30, 'ORMANDAN', 'yazı 30', '0', 'MACERANI PAYLAŞ', NULL, NULL, 5, 'url~\"http://orman.muaz712.com/e/\" . $_SESSION[\'kisaUrl\']|MACERANI PAYLAŞ'),
(30, 'ORMANDAN', 'yazı 30', '1', 'BAŞA DÖN', NULL, NULL, 1, 'url~/index.php'),
(0, 'baslik 0', 'yazi 0', '10', 'ORMANA GİR', NULL, NULL, 1, 'url~https://www.youtube.com/watch?v=aqJciupunWQ|target:_blank'),
(0, 'baslik 0', 'yazi 0', '11', 'BAŞA DÖN', NULL, NULL, 2, 'url~/index.php'),
(0, 'baslik 0', 'yazi 0', '12', 'FİKRİM VAR !', NULL, NULL, 1, 'url~https://github.com/muaz742/cok-guzel-bir-orman/issues|mesaj~\'\"new issue\" butonu ile yeni bir issue oluşturarak fikrini paylaşabilirsin\''),
(0, 'baslik 0', 'yazi 0', '13', 'PAYLAŞ', NULL, NULL, 5, 'url~http://orman.muaz712.com|baslik~BİZ GİDERİZ ORMANA'),
(0, 'baslik 0', 'yazi 0', '14', '*logo yazı*', NULL, NULL, 2, 'url~/index.php'),
(0, 'baslik 0', 'yazi 0', '15', '*logo resim*', NULL, NULL, 4, 'url~/index.php');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
