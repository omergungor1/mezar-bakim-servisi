import Link from "next/link";

const HIZMETLER_DETAY = [
  {
    id: "mermer-temizleme-parlatma",
    title: "Mermer Temizleme ve Parlatma",
    aciklama: "Mezar mermerlerinizin yüzeyi özel ürünlerle temizlenir ve parlatılır. Lekeler, yosun ve kirlilik giderilir.",
    kimler: "Mermeri solmuş, lekeli veya mat görünen tüm mezarlar için uygundur.",
    fiyat: "Mezar büyüklüğüne göre değişir. Detaylı teklif için iletişime geçin.",
  },
  {
    id: "mermer-beyazlatma",
    title: "Mermer Beyazlatma",
    aciklama: "Mermer yüzeyindeki sararma ve renk solması profesyonel beyazlatma ile giderilir.",
    kimler: "Beyaz mermeri zamanla sararan veya renk atan mezarlar için.",
    fiyat: "Paket fiyat: 5.000 TL (beyazlatma + genel temizlik dahil).",
  },
  {
    id: "isim-yazisi-yenileme",
    title: "İsim Yazısı Yenileme",
    aciklama: "Mezar taşındaki isim ve yazılar özenle yeniden boyanır, okunaklı ve kalıcı hale getirilir.",
    kimler: "Yazıları silinmiş veya solmuş mezarlar için.",
    fiyat: "Yazı uzunluğuna göre değişir. Teklif alabilirsiniz.",
  },
  {
    id: "korkuluk-boyama",
    title: "Korkuluk Boyama",
    aciklama: "Mezar korkulukları pas ve dökülmelere karşı koruyucu boyalarla yenilenir.",
    kimler: "Demir korkuluğu olan ve boyası dökülen mezarlar için.",
    fiyat: "Korkuluk metre/parça bazında fiyatlandırılır.",
  },
  {
    id: "cokme-duzeltme-toprak",
    title: "Çökme Düzeltme ve Toprak Takviyesi",
    aciklama: "Mezar üzerindeki çökmüş toprak takviye edilir, düzeltilir ve çiçek ekimine uygun hale getirilir.",
    kimler: "Toprağı çöken veya düzleşmesi gereken mezarlar için.",
    fiyat: "Alan ve işçilik miktarına göre teklif verilir.",
  },
  {
    id: "yabani-ot-temizligi",
    title: "Yabani Ot Temizliği",
    aciklama: "Mezar ve çevresindeki yabani otlar temizlenir, düzenli görünüm sağlanır.",
    kimler: "Otlanmış veya bakımsız görünen tüm mezarlar için.",
    fiyat: "Tek sefer veya yıllık paket kapsamında yapılabilir.",
  },
  {
    id: "mezar-yesillendirme",
    title: "Mezar Yeşillendirme",
    aciklama: "Mezar üzerine uygun yeşil örtü bitkileri veya çim ekimi yapılır.",
    kimler: "Yeşil ve bakımlı görünüm isteyen mezarlar için.",
    fiyat: "Metrekare ve bitki türüne göre değişir.",
  },
  {
    id: "cicek-ekimi-sulama",
    title: "Çiçek Ekimi ve Sulama",
    aciklama: "Mevsimine uygun çiçekler ekilir, düzenli sulama ile canlı kalması sağlanır.",
    kimler: "Çiçekli ve renkli mezar görünümü isteyenler için.",
    fiyat: "Tek sefer çiçekli bakım 6.000 – 8.500 TL. Yıllık pakette dahildir.",
  },
  {
    id: "yillik-periyodik-bakim",
    title: "Yıllık Periyodik Bakım",
    aciklama: "Çiçek, toprak, ilaçlama, temizlik, sulama ve anlık fotoğraf gönderimi dahil her şey dahil paket.",
    kimler: "Yıl boyu düzenli bakım ve raporlama isteyen aileler için.",
    fiyat: "20.000 – 25.000 TL (mezar durumuna göre net fiyat teklifi verilir).",
  },
];

export const metadata = {
  title: "Hizmetlerimiz",
  description:
    "Bursa mezar bakımı: mermer temizleme, beyazlatma, çiçek ekimi, yıllık bakım ve daha fazlası. Tüm hizmetlerimizi inceleyin.",
};

export default function HizmetlerimizPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4 text-center">
          Hizmetlerimiz
        </h1>
        <p className="text-[var(--muted)] text-center mb-12 max-w-2xl mx-auto">
          Bursa genelinde sunduğumuz mezar bakım hizmetleri. Her biri için kısa açıklama, uygunluk ve fiyat bilgisi aşağıdadır.
        </p>

        <div className="space-y-10">
          {HIZMETLER_DETAY.map((h) => (
            <article
              key={h.id}
              id={h.id}
              className="bg-[var(--white)] rounded-2xl p-6 md:p-8 border border-[var(--beige)] shadow-sm"
            >
              <h2 className="text-xl md:text-2xl font-bold text-[var(--primary)] mb-4">
                {h.title}
              </h2>
              <p className="text-[var(--foreground)] mb-4">{h.aciklama}</p>
              <p className="text-sm text-[var(--muted)] mb-2">
                <strong>Kimler için uygun?</strong> {h.kimler}
              </p>
              <p className="text-sm text-[var(--muted)] mb-6">
                <strong>Ortalama fiyat:</strong> {h.fiyat}
              </p>
              <Link
                href="/servis-talebi"
                className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] text-white font-semibold px-5 py-2.5 hover:bg-[var(--primary-dark)] transition-colors text-sm"
              >
                Servis talebi oluştur
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/servis-talebi"
            className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] text-white font-semibold px-8 py-4 hover:bg-[var(--primary-dark)] transition-colors"
          >
            📝 Genel Servis Talebi Gönder
          </Link>
        </div>
      </div>
    </div>
  );
}
