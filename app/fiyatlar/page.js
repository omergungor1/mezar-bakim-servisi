import Link from "next/link";

export const metadata = {
  title: "Fiyatlar",
  description:
    "Bursa mezar bakım fiyatları: tek seferlik bakım ve yıllık bakım paketi. Net fiyat için teklif alın.",
};

const FIYATLAR = [
  {
    paket: "Tek Seferlik Bakım",
    icerik: "Tek seferlik mezar bakımı, temizlik ve gerekli işlemler.",
    fiyat: "5.000₺ + KDV",
  },
  {
    paket: "Yıllık Bakım",
    icerik: "Yıllık bakımda her ay düzenli bakım yapılacaktır.",
    fiyat: "20.000 – 25.000₺ + KDV",
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

        <div className="space-y-4 md:space-y-0">
          {/* Mobil: kartlar */}
          <div className="md:hidden space-y-4">
            {FIYATLAR.map((row) => (
              <div
                key={row.paket}
                className="rounded-2xl border border-[var(--beige)] bg-[var(--white)] p-5 shadow-sm"
              >
                <p className="font-semibold text-[var(--primary)] text-lg mb-1">{row.paket}</p>
                <p className="text-[var(--muted)] text-sm mb-3">{row.icerik}</p>
                <p className="font-bold text-[var(--primary)] text-xl">{row.fiyat}</p>
              </div>
            ))}
          </div>

          {/* Masaüstü: tablo */}
          <div className="hidden md:block overflow-x-auto rounded-2xl border border-[var(--beige)] bg-[var(--white)] shadow-sm">
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
