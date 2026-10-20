# Tweet-silme-olaycıgı-

X (Twitter) hesabındaki tweet'leri **ücretsiz** ve **üçüncü taraf bir siteye giriş yapmadan**, doğrudan tarayıcında toplu olarak silmeni sağlayan küçük bir JavaScript scriptidir.

Script, tarayıcı konsolunda senin açık oturumunla çalışır. Ekrandaki tweet'lerin üç nokta menüsüne tıklar, "Sil"i seçer ve onaylar. Şifre, token ya da API anahtarı istemez. Dışarıya hiçbir veri göndermez.

## Özellikler

- Ücretsiz, API veya hesap yetkilendirmesi gerekmez
- **Korunacak kelimeler:** Belirlediğin kelimeleri içeren tweet'ler silinmez
- Başkasının tweet'lerini ve retweet'leri otomatik atlar
- Türkçe karakterlere duyarlı büyük/küçük harf eşleştirmesi (İ/ı)
- Bittiğinde kendiliğinden durur
- Tek dosya, kurulum yok

## Başlamadan önce

> **Silinen tweet'ler geri getirilemez.Sorumluluk almayı sevmem şimdiden söyleyeyim.**

1. Önce arşivini indir: **Ayarlar → Hesabın → Verilerinin arşivini indir**.
2. Scripti çalıştırmadan önce kodu oku. Konsola yapıştırdığın kodu anlamadan çalıştırma alışkanlığı güvenli değildir. Bu script sadece sayfadaki menülere tıklar.
3. Silme işleminde belirli bir kelime içinde kullanılan tweetkeri silmemesi için kod kısmından düzenle!!!!.
## Kullanım

1. Bilgisayarda tarayıcıdan X'e gir ve **kendi profil sayfanı** aç (`x.com/kullaniciadin`). Mobil uygulamada çalışmaz.
2. `F12` ile geliştirici araçlarını aç ve **Console** sekmesine geç.
3. `tweet-sil.js` dosyasının içeriğini yapıştırıp Enter'a bas.
4. Tarayıcı yapıştırma uyarısı verirse konsola `allow pasting` yazıp Enter'a bas, sonra kodu tekrar yapıştır.
   - Alternatif: **Sources → Snippets → New snippet** bölümüne yapıştırıp `Ctrl+Enter` ile çalıştır.
5. Konsolda silinen/atlanan sayacı görürsün. Bitince `Bitti. Toplam silinen: ...` yazar.
6. Durdurmak için sayfayı yenile.

### Hangi sayfada ne silinir?

| Sayfa | Sonuç |
|---|---|
| Profil → Gönderiler | Kendi tweet'lerin silinir, retweet'ler atlanır |
| Profil → Yanıtlar | Kendi yanıtların silinir, başkalarının tweet'leri atlanır |

Her sekme için scripti ayrıca çalıştırman gerekir.

## Korunacak kelimeler

Dosyanın başındaki listeyi düzenle:

```js
const KORUNACAK = ["kelime 1", "kelime 2"];
```

- Büyük/küçük harf fark etmez.
- Kelime tweet metninin **herhangi bir yerinde** geçse tweet korunur. Başka kelimelerin içinde geçen harf dizileri de eşleşir, bu yüzden kelimeleri yeterince özgün seç.
- Liste boşsa (`[]`) hiçbir tweet korunmaz.
- Sadece tweet metnine bakılır. Görsellerin içindeki yazılar kontrol edilmez.

## En eski tweet'ten başlamak

X, profilde tweet'leri her zaman yeniden eskiye sıralar.Silmeye başladığı yerden yukarıya dogru hareket eder . Dikkatli kullanılmalıdır . Gerekiyorsa bir kopyası indirilmelidir 
## Ayarlar

| Değişken | Açıklama | Varsayılan |
|---|---|---|
| `KORUNACAK` | Silinmeyecek kelimeler | `["kelime 1", "kelime 2"]` |
| `BEKLEME` | İşlemler arası bekleme (ms) | `1200` |
| `MAX_BOS_TUR` | Yeni tweet bulunamayan tur sayısı, sonra durur | `6` |

`BEKLEME` değerini çok düşürürsen X geçici hız sınırı uygulayabilir.Hata verebilir. Şüpheli işlem olarak belirleyebilir.

## Script çalışırken

- Bilgisayar uyku moduna girerse script durur. Uyku modunu kapat, laptopsan prize tak.
- Sekmeyi, tarayıcıyı kapatma ve oturumdan çıkma. Aksi halde script durur.
- Ekran kilidi sorun değildir, uyku modu sorundur.
- X sekmesini simge durumuna küçültme. Arka plandaki sekmeler yavaşlatılabilir.

## Bilinen sınırlamalar

- X arayüzünü sık değiştirir. `data-testid` seçicileri değişirse script çalışmayabilir. Bir sorun görürsen **Issue** aç.
- Hız sınırına takılırsan biraz bekleyip sayfayı yenileyerek tekrar dene.
- Script retweet'leri geri almaz, sadece kendi tweet ve yanıtlarını siler.

## Uyarı ve sorumluluk reddi

Bu araç otomasyon kullanır ve X'in kullanım şartlarıyla çelişebilir. Hesabın geçici olarak kısıtlanması gibi sonuçlar doğabilir. Kullanım tamamen **kendi sorumluluğundadır**. Geliştirici, silinen verilerden veya hesabına gelebilecek kısıtlamalardan sorumlu tutulamaz.KUllanırken verilerin yedeğini al.

## Katkı

Hata bildirimleri ve geliştirme önerileri için Issue veya Pull Request açabilirsin.

## Lisans

[MIT](LICENSE)
