import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import GalleryImages from "@/components/GalleryImages";

const HIZMETLER = [
  { title: "Mermer temizleme ve parlatma", icon: "✨" },
  { title: "Mermer beyazlatma", icon: "🪨" },
  { title: "Mermer tamir", icon: "🔧" },
  { title: "İsim yazısı boyama", icon: "✍️" },
  { title: "Korkuluk boyama", icon: "🎨" },
  { title: "Toprak takviyesi (çökme varsa)", icon: "🌱" },
  { title: "Yabani ot temizliği", icon: "🌿" },
  { title: "Mezar yeşillendirme", icon: "🟢" },
  { title: "Çiçek ekimi", icon: "🌸" },
  { title: "Sulama", icon: "💧" },
  { title: "İlaçlama", icon: "🧴" },
  { title: "Anlık fotoğraf gönderimi", icon: "📷" },
];

const NEDEN_BIZ = [
  "Bursa geneli tüm ilçelere hizmet",
  "Fotoğraflı teslimat",
  "Düzenli bakım garantisi",
  "Profesyonel ekip",
  "Zamanında hizmet",
  "Uygun bitki seçimi",
];

const FAQ_ITEMS = [
  {
    s: "Hizmet ne kadar sürer?",
    c: "Tek seferlik bakım genelde 1–2 saat içinde tamamlanır. Yıllık paketlerde periyodik ziyaretler plana göre yapılır.",
  },
  {
    s: "Fotoğraf gönderiyor musunuz?",
    c: "Evet. Yapılan bakım sonrası mezarların fotoğraflarını size iletiyoruz.",
  },
  {
    s: "Hangi ilçelere hizmet var?",
    c: "Bursa’nın tüm ilçelerine hizmet veriyoruz.",
  },
  {
    s: "Yıllık paket nasıl işliyor?",
    c: "Yıllık pakette çiçek, toprak, ilaçlama, temizlik, sulama ve anlık resim gönderimi dahildir. Periyodik ziyaretlerle bakım yapılır.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--primary)] text-[var(--beige-light)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Bursa Genelinde Profesyonel Mezar Bakım Hizmeti
          </h1>
          <p className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto mb-8">
            Sevdiklerinizin kabri emin ellerde. Düzenli bakım, temizlik ve fotoğraflı raporlama hizmeti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--white)] text-[var(--primary)] font-semibold px-8 py-4 hover:bg-[var(--beige-light)] transition-colors"
            >
              📞 Hemen Ara
            </a>
            <Link
              href="/servis-talebi"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--white)] text-[var(--white)] font-semibold px-8 py-4 hover:bg-white/10 transition-colors"
            >
              📝 Servis Talebi Oluştur
            </Link>
          </div>
        </div>
      </section>

      {/* Hizmetlerimiz */}
      <section className="py-16 bg-[var(--white)]">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] text-center mb-10">
            Hizmetlerimiz
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HIZMETLER.map((h) => (
              <div
                key={h.title}
                className="flex items-center gap-3 p-4 rounded-xl bg-[var(--beige-light)] border border-[var(--beige)]"
              >
                <span className="text-2xl">{h.icon}</span>
                <span className="font-medium text-[var(--foreground)]">{h.title}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/hizmetlerimiz"
              className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] text-white font-semibold px-6 py-3 hover:bg-[var(--primary-dark)] transition-colors"
            >
              Tüm Hizmetler
            </Link>
          </div>
        </div>
      </section>

      {/* Fiyatlandırma Özeti */}
      <section className="py-16 bg-[var(--beige-light)]">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] text-center mb-10">
            Fiyatlandırma Özeti
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[var(--white)] rounded-2xl p-6 shadow-sm border border-[var(--beige)]">
              <p className="text-lg font-semibold text-[var(--primary)] mb-1">🌸 Tek Sefer Çiçekli Bakım</p>
              <p className="text-sm text-[var(--muted)] mb-3">Çiçek + Toprak + Genel Temizlik</p>
              <p className="text-xl font-bold text-[var(--foreground)]">6.000 – 8.500 TL</p>
            </div>
            <div className="bg-[var(--white)] rounded-2xl p-6 shadow-sm border border-[var(--beige)]">
              <p className="text-lg font-semibold text-[var(--primary)] mb-1">✨ Mermer Beyazlatma Paketi</p>
              <p className="text-sm text-[var(--muted)] mb-3">Mermer Beyazlatma + Genel Temizlik</p>
              <p className="text-xl font-bold text-[var(--foreground)]">5.000 TL</p>
            </div>
            <div className="bg-[var(--white)] rounded-2xl p-6 shadow-sm border border-[var(--beige)]">
              <p className="text-lg font-semibold text-[var(--primary)] mb-1">💧 Yıllık Bakım Paketi</p>
              <p className="text-sm text-[var(--muted)] mb-3">Çiçek + Toprak + İlaçlama + Temizlik + Sulama + Anlık Resim</p>
              <p className="text-xl font-bold text-[var(--foreground)]">20.000 – 25.000 TL</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/servis-talebi"
              className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] text-white font-semibold px-6 py-3 hover:bg-[var(--primary-dark)] transition-colors"
            >
              📝 Detaylı Teklif Al
            </Link>
          </div>
        </div>
      </section>

      {/* Neden Bizi Tercih Etmelisiniz */}
      <section className="py-16 bg-[var(--white)]">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] text-center mb-10">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {NEDEN_BIZ.map((item) => (
              <li key={item} className="flex items-center gap-2 text-[var(--foreground)]">
                <span className="text-[var(--primary)]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bakım Yapıldı Galerisi */}
      <section className="py-16 bg-[var(--beige-light)]">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] text-center mb-4">
            Bakım Yapıldı
          </h2>
          <p className="text-center text-[var(--muted)] mb-8">Yaptığımız bakım çalışmalarından örnekler</p>
          <GalleryImages />
        </div>
      </section>

      {/* Müşteri güveni */}
      <section className="py-16 bg-[var(--white)]">
        <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-4">
            Memnuniyet Odaklı Hizmet
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Sevdiklerinizin kabirlerine saygı ve özenle yaklaşıyoruz. Her işlem sonrası fotoğraflı bilgilendirme ile güven sağlıyoruz.
          </p>
        </div>
      </section>

      {/* SSS */}
      <section className="py-16 bg-[var(--beige-light)]">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] text-center mb-10">
            Sık Sorulan Sorular
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq) => (
              <div
                key={faq.s}
                className="bg-[var(--white)] rounded-xl p-4 border border-[var(--beige)]"
              >
                <h3 className="font-semibold text-[var(--foreground)] mb-2">{faq.s}</h3>
                <p className="text-[var(--muted)] text-sm">{faq.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alt CTA */}
      <section className="py-16 bg-[var(--primary)] text-[var(--beige-light)]">
        <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Sevdiklerinizin kabri bakımsız kalmasın.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--white)] text-[var(--primary)] font-semibold px-8 py-4 hover:bg-[var(--beige-light)] transition-colors"
            >
              📞 Hemen Arayın
            </a>
            <Link
              href="/servis-talebi"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--white)] text-[var(--white)] font-semibold px-8 py-4 hover:bg-white/10 transition-colors"
            >
              📝 Servis Talebi Oluşturun
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
