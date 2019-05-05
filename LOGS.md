# YAPILANLAR
- logs dosyası olıuşturuldu ve ilk girdi yapıldı. - 190313-1429-muaz
- sistem712 altyapısı uygulandı. - 199313-144400-muaz
- FIXME sql bağlantısı yapılmadı. sayfa başlangıcındaki bağlantı denemesi pasifleştirildi.
- süreçten tasarruf için arayüz mobirise ile tasarlandı. - 190313-163800-muaz
- arayüzü yükle - mobirise arayüzü yüklendi - 190313-171800-muaz
- index.js eklendi, arayüz dosyaları php dosyasına dönüştürüldü - 190213-190200-muaz
- elementlere id leri tanımla - yapıldı-190313-234600-muaz
- islem.php dosyası eklendi, fonksiyonlar tanımlandı. index.js geliştirildi - 190313-234700-muaz
- seçim-element ilişkisini tanımla - yapıldı sayılır - seçim-ekran ilişkisi tanımlandı - 190313-234900-muaz
- sonuç ekranı tanımlanacak - yapıldı - 190314-003500-muaz
- docs klasörü oluşturuldu ve içerisine adobe xd ile oluşturulan arayüz tasarım dosyası eklendi - 190314-004400-muaz
- *LOG* dosya yapısı geliştirildi. - 190505-142500-muaz
- tüm yapı index.php üzerinde toparlandı - 190505-190500-muaz
    - gelen talepler .htaccess ve index.php ile index.php ana dizine toplandı
- akış diyagrama işlendi - 190505-190501-muaz

# YAPILIYORLAR
- 

## çalışmaya başlamadan önce
- görevleri sırasıyla kontrol et - [yapılıyorlar](#yaplyorlar), [yapılacaklar](#yaplacaklar)
- hata gösterimini aktifleştir
    - *ayar/baglanti.php:19* satırını pasif et
- bağlantıları yap - **ftp, sql**

## çalışma bittikten sonra
- işlemleri *LOGS.md* üzerine kayıtla
- kayıtları *github* üzerine işle
- dosyaları *google.drive* üzerine yedekle

## yayınlamadan önce
- sql yapısı oluşturulacak
- sql bağlantısı tanımlanacak
- sayfalardaki notlar kaldırılacak
- hata gösterimini pasifleştir
    - *ayar/baglanti.php:19* satırını aktif et
- geliştirilen yapıyı sunucuya yükle

# YAPILACAKLAR
- ekran içeriklrei
    - ekran varsayılan içerikleri tanımlanacak
    - ekran içerikleri veritabanından çekilecek şekilde yapılandırılacak
- oturum ve yetki sorgusu tanımlanacak index.php:187
- footer a github linki ekle ikonlu falan
- TODO kullanıcıların sonuçlarını paylaşabilmesi sağlanacak
- bunun için sisteme gereken yetenekler; link oluşturma, seçim kayıtlarını saklama, linke göre kayıt görüntüleme
- sistemin sql bağlantısını kaybetme ihtimaline karşı sunucuyla etkileşim kurabileceği alternatif bir yapı düşün. json ile api falan...
