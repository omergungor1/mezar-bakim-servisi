"use client";

import { useState } from "react";

const TALEP_HIZMETLER = [
  "Mermer temizleme / parlatma",
  "Mermer beyazlatma",
  "Mermer tamir",
  "İsim yazısı yenileme",
  "Korkuluk boyama",
  "Toprak takviyesi",
  "Yabani ot temizliği",
  "Mezar yeşillendirme",
  "Çiçek ekimi / sulama",
  "Yıllık bakım paketi",
  "Diğer",
];

export default function ServisTalebiPage() {
  const [gonderildi, setGonderildi] = useState(false);
  const [form, setForm] = useState({
    adSoyad: "",
    telefon: "",
    email: "",
    mezarlikAdi: "",
    il: "Bursa",
    ilce: "",
    mezarAdi: "",
    mezarKonumu: "",
    hizmet: "",
    not: "",
    kvkk: false,
  });
  const [dosya, setDosya] = useState(null);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.kvkk) {
      alert("Devam edebilmek için KVKK metnini kabul etmelisiniz.");
      return;
    }
    setGonderildi(true);
  }

  if (gonderildi) {
    return (
      <div className="py-12 md:py-16">
        <div className="mx-auto max-w-xl px-4 md:px-6 text-center">
          <div className="bg-[var(--beige-light)] rounded-2xl border border-[var(--beige)] p-8">
            <h2 className="text-2xl font-bold text-[var(--primary)] mb-4">
              Talebiniz alınmıştır
            </h2>
            <p className="text-[var(--foreground)]">
              En kısa sürede sizinle iletişime geçeceğiz.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-2xl px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4 text-center">
          Mezar Bakım Talep Formu
        </h1>
        <p className="text-[var(--muted)] text-center mb-10">
          Formu doldurarak servis talebinizi iletebilirsiniz. En kısa sürede size dönüş yapacağız.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="adSoyad" className="block text-sm font-medium text-[var(--foreground)] mb-1">
              Ad Soyad *
            </label>
            <input
              id="adSoyad"
              name="adSoyad"
              type="text"
              required
              value={form.adSoyad}
              onChange={handleChange}
              className="w-full rounded-lg border border-[var(--beige)] bg-[var(--white)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="telefon" className="block text-sm font-medium text-[var(--foreground)] mb-1">
                Telefon *
              </label>
              <input
                id="telefon"
                name="telefon"
                type="tel"
                required
                value={form.telefon}
                onChange={handleChange}
                className="w-full rounded-lg border border-[var(--beige)] bg-[var(--white)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-1">
                E-posta
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-[var(--beige)] bg-[var(--white)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="mezarlikAdi" className="block text-sm font-medium text-[var(--foreground)] mb-1">
              Mezarlık Adı *
            </label>
            <input
              id="mezarlikAdi"
              name="mezarlikAdi"
              type="text"
              required
              value={form.mezarlikAdi}
              onChange={handleChange}
              className="w-full rounded-lg border border-[var(--beige)] bg-[var(--white)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="il" className="block text-sm font-medium text-[var(--foreground)] mb-1">
                İl
              </label>
              <input
                id="il"
                name="il"
                type="text"
                value={form.il}
                onChange={handleChange}
                className="w-full rounded-lg border border-[var(--beige)] bg-[var(--white)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
            <div>
              <label htmlFor="ilce" className="block text-sm font-medium text-[var(--foreground)] mb-1">
                İlçe *
              </label>
              <input
                id="ilce"
                name="ilce"
                type="text"
                required
                value={form.ilce}
                onChange={handleChange}
                className="w-full rounded-lg border border-[var(--beige)] bg-[var(--white)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="mezarAdi" className="block text-sm font-medium text-[var(--foreground)] mb-1">
              Mezarın Adı (Yatan kişinin adı)
            </label>
            <input
              id="mezarAdi"
              name="mezarAdi"
              type="text"
              value={form.mezarAdi}
              onChange={handleChange}
              className="w-full rounded-lg border border-[var(--beige)] bg-[var(--white)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          <div>
            <label htmlFor="mezarKonumu" className="block text-sm font-medium text-[var(--foreground)] mb-1">
              Mezarın Konumu (Parsel / Ada bilgisi)
            </label>
            <input
              id="mezarKonumu"
              name="mezarKonumu"
              type="text"
              value={form.mezarKonumu}
              onChange={handleChange}
              className="w-full rounded-lg border border-[var(--beige)] bg-[var(--white)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          <div>
            <label htmlFor="hizmet" className="block text-sm font-medium text-[var(--foreground)] mb-1">
              Talep Edilen Hizmet
            </label>
            <select
              id="hizmet"
              name="hizmet"
              value={form.hizmet}
              onChange={handleChange}
              className="w-full rounded-lg border border-[var(--beige)] bg-[var(--white)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            >
              <option value="">Seçiniz</option>
              {TALEP_HIZMETLER.map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="not" className="block text-sm font-medium text-[var(--foreground)] mb-1">
              Ek Not
            </label>
            <textarea
              id="not"
              name="not"
              rows={4}
              value={form.not}
              onChange={handleChange}
              className="w-full rounded-lg border border-[var(--beige)] bg-[var(--white)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--foreground)] mb-1">
              Fotoğraf Yükleme (isteğe bağlı)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setDosya(e.target.files?.[0] || null)}
              className="w-full rounded-lg border border-[var(--beige)] bg-[var(--white)] px-4 py-3 text-sm text-[var(--muted)]"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              id="kvkk"
              name="kvkk"
              type="checkbox"
              required
              checked={form.kvkk}
              onChange={handleChange}
              className="mt-1 rounded border-[var(--beige)] text-[var(--primary)] focus:ring-[var(--primary)]"
            />
            <label htmlFor="kvkk" className="text-sm text-[var(--foreground)]">
              Kişisel verilerimin, talebimin değerlendirilmesi ve iletişim için işlenmesine ve
              KVKK kapsamında saklanmasına izin veriyorum. *
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[var(--primary)] text-white font-semibold py-4 hover:bg-[var(--primary-dark)] transition-colors"
          >
            📝 Talep Gönder
          </button>
        </form>
      </div>
    </div>
  );
}
