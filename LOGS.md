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
- ekran içerikleri - yapıldı - 190512-022200-muaz
    - ekran varsayılan içerikleri tanımlanacak - yapıldı - 190512-022201-muaz
    - ekran içerikleri veritabanından çekilecek şekilde yapılandırılacak - yapıldı - 190512-022202-muaz
- *ekran, seçim, sonuç* içeriklerini bir tablo üzerinde toparlamayı denedim. *orman.xlsx:içeriklik* tablosunu oluşturdum. - 199512-142800 - muaz
- tablo yapısı veritabanına işleniyor - 190512-145900 - muaz
    - veritabanı oluşturuldu.
    - sonuç ekranı ilişkilendirmesi deneniyor.
    - ilişkilendirme başarılı. sonuç ekranları güzel çalışıyor - 190512-161900 - muaz
- sonuç hesaplamaları tanımlanmalı
    - sonuç yazıları, veritabanından çekilecek şekilde tasarlanmalı
    - birden fazla dilde ve birden fazla tipte sonuç verebilecek esneklikte yapı tasarlandı.
    - içerik düzenlemesi pratik hale getirildi. #:24 - yapıldı - 190512-162400 - muaz
- footer a github linki ekle ikonlu falan - yapıldı - 199512-182600 - muaz
- *fikrimvar* butonunu *fikrimvar.php* sayfası yerine proje dosyasının *issues* sayfasına yönlendirildi - yapıldı - 190512-185000 - muaz
- coder tanımlanıyor - yapıldı - 190513-160400 - muaz
    - kodlayıcı geliştirildi - 190513-023100 - muaz
    - çözümleyici geliştirildi - 190513-043500 - muaz
    - *urlKodla* ve *urlCoz* olan fonksiyon isimleri *mod62_encode* ve *mod62_decode* olarak güncellendi - 199513-160200 - muaz
- 63 ten küçük değerlerin encode işlemi yapılmıyor - onar - yapıldı - 190513-051000 - muaz
- kullanıcıların sonuçlarını paylaşabilmesi sağlanacak - yapıldı - 190514-024402 - muaz
    - sonuçlar kayıt edilmeli - yapıldı - 190513-233100 - muaz
    - kayıtlar link ile paylaşılmalı - yapıldı - 190514-024400 - muaz
    - link ile gelenlere sonuç görüntülenmeli - yapıldı - 190514-024401 - muaz
- macerayı paylaş butonu geliştirildi - 190514-045100 - muaz
    - input içerisinde kısa link seçilebilir şekilde görüntülendi
    - kopyala butonu eklendi

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
- *28:0->30* yönlendirmesini gözden geçir. gerekirse kaldır.
- paylaşım butonlarını geliştir
    - 0:11 - paylaş
    - 28:0 - maceranı paylaş - yapıldı - 190514-051900-muaz
    - 29:0 - maceranı paylaş
- eski yapı dosyalarının gerekliliğini değerlendir
- yapılan geliştirmeleri diyagrama işle
- yapıyı sadeleştir
- sayfalar tanımlanmalı
    - fikrimvar.php 
    - paylas.php - sweet alert ile açılan ekranda yapılacak
    - katkılar.php
- mobil cihazdan erişen kullanıcılar için arkaplanda sabit resim gösterilmeli
- oturum ve yetki sorgusu tanımlanacak index.php:203
- sistemin sql bağlantısını kaybetme ihtimaline karşı sunucuyla etkileşim kurabileceği alternatif bir yapı düşün. json ile api falan...
