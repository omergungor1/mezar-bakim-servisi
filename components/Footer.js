import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary-dark)] text-[var(--beige-light)]">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-semibold text-[var(--white)] text-lg mb-3">Mezar Bakım Servisi</p>
            <p className="text-sm opacity-90">
              Bursa genelinde profesyonel mezar bakım, temizlik ve yıllık bakım hizmeti.
            </p>
          </div>
          <div>
            <p className="font-semibold text-[var(--white)] mb-3">Sayfalar</p>
            <ul className="flex flex-col gap-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[var(--white)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-[var(--white)] mb-3">İletişim</p>
            <a href={`tel:${SITE.phoneRaw}`} className="text-sm hover:text-[var(--white)] transition-colors block">
              {SITE.phone}
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-[var(--white)] transition-colors block mt-1"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm opacity-80">
          © {new Date().getFullYear()} Mezar Bakım Servisi. Bursa.
        </div>
      </div>
    </footer>
  );
}
