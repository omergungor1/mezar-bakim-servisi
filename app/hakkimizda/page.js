import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata = {
  title: "Hakkımızda",
  description:
    "Bursa merkezli mezar bakım hizmeti. Saygı, güven ve düzenli bakım ilkesiyle çalışıyoruz. Tüm ilçelere servis.",
};

const MADDELER = [
  "Bursa merkezli mezar bakım hizmeti sunuyoruz.",
  "Saygı, güven ve düzenli bakım ilkemizdir.",
  "Profesyonel ekip ile işlerinizi titizlikle yürütüyoruz.",
  "Fotoğraflı raporlama sistemi ile işlem sonrası bilgilendirme yapıyoruz.",
  "Bursa’nın tüm ilçelerine servis veriyoruz.",
];

export default function HakkimizdaPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-6 text-center">
          Hakkımızda
        </h1>

        <div className="bg-[var(--white)] rounded-2xl border border-[var(--beige)] p-6 md:p-8 space-y-6">
          <p className="text-[var(--foreground)] leading-relaxed">
            Mezar Bakım Servisi olarak Bursa genelinde sevdiklerinizin kabirlerine saygı ve özenle
            yaklaşıyoruz. Amacımız, mezarların düzenli bakımı, temizliği ve yeşillendirilmesiyle
            huzurlu bir görünüm sunmaktır.
          </p>
          <ul className="space-y-3">
            {MADDELER.map((m) => (
              <li key={m} className="flex items-start gap-2 text-[var(--foreground)]">
                <span className="text-[var(--primary)] mt-0.5">✓</span>
                {m}
              </li>
            ))}
          </ul>
          <p className="text-[var(--muted)] text-sm">
            Detaylı bilgi ve servis talebi için iletişim sayfamızdan veya hemen arayarak bize
            ulaşabilirsiniz.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] text-white font-semibold px-8 py-4 hover:bg-[var(--primary-dark)] transition-colors"
          >
            📞 Hemen Arayın
          </a>
          <Link
            href="/servis-talebi"
            className="inline-flex items-center justify-center rounded-full border-2 border-[var(--primary)] text-[var(--primary)] font-semibold px-8 py-4 hover:bg-[var(--primary)] hover:text-white transition-colors"
          >
            Servis Talebi
          </Link>
        </div>
      </div>
    </div>
  );
}
