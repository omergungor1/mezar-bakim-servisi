import { SITE } from "@/lib/constants";

export const metadata = {
  title: "İletişim",
  description:
    "Mezar Bakım Servisi iletişim: telefon, WhatsApp. Bursa geneli hizmet. Detaylı bilgi için hemen arayın.",
};

export default function IletisimPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4 text-center">
          İletişim
        </h1>
        <p className="text-[var(--muted)] text-center mb-10">
          Detaylı bilgi için hemen arayın veya WhatsApp üzerinden yazın.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[var(--white)] rounded-2xl border border-[var(--beige)] p-6 md:p-8">
            <h2 className="text-xl font-bold text-[var(--primary)] mb-4">İletişim Bilgileri</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-[var(--muted)] mb-1">Telefon</p>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="text-lg font-semibold text-[var(--foreground)] hover:text-[var(--primary)]"
                >
                  {SITE.phone}
                </a>
              </div>
              <div>
                <p className="text-sm text-[var(--muted)] mb-1">WhatsApp</p>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-[var(--foreground)] hover:text-[var(--primary)]"
                >
                  {SITE.phone}
                </a>
              </div>
            </div>
            <p className="text-sm text-[var(--muted)] mt-6">
              Hizmet bölgemiz: <strong>Bursa geneli (tüm ilçeler)</strong>
            </p>
          </div>

          <div className="bg-[var(--white)] rounded-2xl border border-[var(--beige)] p-6 md:p-8">
            <h2 className="text-xl font-bold text-[var(--primary)] mb-4">Çalışma Saatleri</h2>
            <p className="text-[var(--foreground)]">
              Randevu ve bilgi için telefon ve WhatsApp üzerinden ulaşabilirsiniz. En kısa sürede
              dönüş yapıyoruz.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl overflow-hidden border border-[var(--beige)] bg-[var(--beige-light)] aspect-video max-w-3xl mx-auto">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=28.95%2C40.10%2C29.25%2C40.28&layer=mapnik&marker=40.1826%2C29.0665"
            title="Bursa haritası"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 300 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="text-center text-sm text-[var(--muted)] mt-2">
          Hizmet bölgesi: Bursa
        </p>

        <div className="text-center mt-10">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] text-white font-semibold px-8 py-4 hover:bg-[var(--primary-dark)] transition-colors"
          >
            📞 Detaylı bilgi için hemen arayın
          </a>
        </div>
      </div>
    </div>
  );
}
