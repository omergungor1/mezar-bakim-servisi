import Link from "next/link";

export const metadata = {
  title: "Fiyatlar",
  description:
    "Bursa mezar bakım fiyatları: mermer beyazlatma, tek sefer çiçekli bakım, yıllık bakım paketi. Net fiyat için teklif alın.",
};

const FIYATLAR = [
  {
    paket: "Mermer Beyazlatma",
    icerik: "Beyazlatma + Temizlik",
    fiyat: "5.000 TL",
  },
  {
    paket: "Tek Sefer Çiçekli Bakım",
    icerik: "Çiçek + Toprak + Temizlik",
    fiyat: "6.000 – 8.500 TL",
  },
  {
    paket: "Yıllık Bakım",
    icerik: "Her şey dahil",
    fiyat: "20.000 – 25.000 TL",
  },
];

export default function FiyatlarPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4 text-center">
          Fiyatlar
        </h1>
        <p className="text-[var(--muted)] text-center mb-10">
          Net fiyat için mezar konumu ve durumuna göre teklif verilir.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-[var(--beige)] bg-[var(--white)] shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[var(--beige)] bg-[var(--beige-light)]">
                <th className="px-4 py-4 font-semibold text-[var(--primary)]">Paket</th>
                <th className="px-4 py-4 font-semibold text-[var(--primary)]">İçerik</th>
                <th className="px-4 py-4 font-semibold text-[var(--primary)]">Fiyat</th>
              </tr>
            </thead>
            <tbody>
              {FIYATLAR.map((row) => (
                <tr key={row.paket} className="border-b border-[var(--beige)] last:border-0">
                  <td className="px-4 py-4 font-medium text-[var(--foreground)]">{row.paket}</td>
                  <td className="px-4 py-4 text-[var(--muted)]">{row.icerik}</td>
                  <td className="px-4 py-4 font-semibold text-[var(--primary)]">{row.fiyat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-[var(--muted)] text-sm mt-6">
          Net fiyat için mezar konumu ve durumuna göre teklif verilir.
        </p>

        <div className="text-center mt-10">
          <Link
            href="/servis-talebi"
            className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] text-white font-semibold px-8 py-4 hover:bg-[var(--primary-dark)] transition-colors"
          >
            📝 Teklif / Servis Talebi Oluştur
          </Link>
        </div>
      </div>
    </div>
  );
}
