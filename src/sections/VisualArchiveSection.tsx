import Image from "next/image";
import { collageItems } from "@/data/collageItems";

export function VisualArchiveSection() {
  return (
    <section id="visual-archive" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-violet-300">
            Visual archive
          </p>

          <h2 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
            Random fragments becoming a visual language.
          </h2>

          <p className="mt-6 text-sm leading-7 text-slate-400">
            A living collection of climbing, textures, nature and photography.
            Nothing needs to be perfect to belong here.
          </p>
        </div>

        <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
          {collageItems.map((item) => (
            <article
              key={item.image}
              className="group mb-5 break-inside-avoid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70" />
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-violet-300">
                  {item.type}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}