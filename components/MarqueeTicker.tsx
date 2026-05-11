const items = [
  "匠 Handcrafted",
  "鋼 Damascus Steel",
  "刃 Razor Sharp",
  "職人 Master Craftsmen",
  "無料 Free Personalization",
];

export function MarqueeTicker() {
  const content = [...items, ...items];

  return (
    <section className="border-y border-washi/10 bg-black/20 py-4">
      <div className="overflow-hidden">
        <div
          className="flex min-w-max gap-8 whitespace-nowrap px-4 text-sm uppercase tracking-[0.34em] text-washi/70"
          style={{ animation: "marquee 22s linear infinite" }}
        >
          {content.map((item, index) => (
            <span key={`${item}-${index}`} className="inline-flex items-center gap-3">
              <span className="red-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
