import Image from "next/image";
import fs from "fs";
import path from "path";

function getImageList() {
  try {
    const dir = path.join(process.cwd(), "public", "images");
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort();
  } catch {
    return [];
  }
}

export default function GalleryImages() {
  const images = getImageList();

  if (images.length === 0) {
    return (
      <p className="text-[var(--muted)] text-center py-8">
        Bakım görselleri yakında eklenecektir.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {images.map((name) => (
        <div
          key={name}
          className="relative aspect-square rounded-lg overflow-hidden bg-[var(--beige)]"
        >
          <Image
            src={`/images/${name}`}
            alt="Bakım yapılmış mezar"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          />
        </div>
      ))}
    </div>
  );
}
