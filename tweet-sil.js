// Kendi tweet'lerini toplu silmek için konsol scripti.
// Kullanım: kendi profil sayfanı aç (x.com/kullaniciadin), F12 > Console'a yapıştır, Enter.
// Durdurmak için: sayfayı yenile.

(async () => {
  const bekle = (ms) => new Promise((r) => setTimeout(r, ms));
  const SILME_YAZISI = /^(sil|delete)$/i;
  const BEKLEME = 1200;       // her işlem arası (ms). Düşürürsen hız sınırına takılabilirsin.
  const MAX_BOS_TUR = 6;      // üst üste bu kadar turda yeni tweet yoksa bitir

  // Bu kelimelerden biri geçen tweet'ler SİLİNMEZ (büyük/küçük harf fark etmez).
  // Kendi kelimelerinle değiştir. Hiç koruma istemezsen listeyi boş bırak: []
  const KORUNACAK = ["kelime 1", "kelime 1 "];

  const kucult = (s) => s.toLocaleLowerCase("tr-TR");
  const korunuyorMu = (tweet) => {
    const metin = kucult(tweet.querySelector('[data-testid="tweetText"]')?.innerText || "");
    return KORUNACAK.some((k) => metin.includes(kucult(k)));
  };

  let silinen = 0;
  let atlanan = 0;
  let bosTur = 0;

  while (bosTur < MAX_BOS_TUR) {
    const tweetler = [...document.querySelectorAll('article[data-testid="tweet"]')]
      .filter((t) => !t.dataset.islendi);

    if (tweetler.length === 0) {
      bosTur++;
      window.scrollBy(0, 800);
      await bekle(1500);
      continue;
    }
    bosTur = 0;

    for (const tweet of tweetler) {
      tweet.dataset.islendi = "1";
      if (korunuyorMu(tweet)) { atlanan++; continue; }
      const menu = tweet.querySelector('[data-testid="caret"]');
      if (!menu) { atlanan++; continue; }

      tweet.scrollIntoView({ block: "center" });
      await bekle(400);
      menu.click();
      await bekle(600);

      // Menüde "Sil" / "Delete" seçeneği var mı? (başkasının tweet'inde olmaz)
      const secenek = [...document.querySelectorAll('[role="menuitem"]')]
        .find((el) => SILME_YAZISI.test(el.innerText.trim()));

      if (!secenek) {
        document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
        atlanan++;
        await bekle(400);
        continue;
      }

      secenek.click();
      await bekle(600);

      const onay = document.querySelector('[data-testid="confirmationSheetConfirm"]');
      if (onay) {
        onay.click();
        silinen++;
        console.log(`Silinen: ${silinen} | Atlanan: ${atlanan}`);
      }
      await bekle(BEKLEME);
    }

    window.scrollBy(0, 600);
    await bekle(1500);
  }

  console.log(`Bitti. Toplam silinen: ${silinen}, atlanan: ${atlanan}`);
})();
