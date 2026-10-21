const TONES = [
  { bg: "#efe6d8", fg: "#17150f" },
  { bg: "#e9d9c8", fg: "#17150f" },
  { bg: "#dfc9b0", fg: "#17150f" },
  { bg: "#17150f", fg: "#f6f2ea" },
];

function getDomain(url: string) {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url;
  }
}

type ProjectVisualProps = {
  name: string;
  url?: string;
  index: number;
};

export default function ProjectVisual({ name, url, index }: ProjectVisualProps) {
  const tone = TONES[index % TONES.length];

  return (
    <div
      className="flex h-full w-full flex-col overflow-hidden rounded-sm border border-line"
      style={{ backgroundColor: tone.bg }}
    >
      <div className="flex items-center gap-2 border-b border-black/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full border border-current opacity-40" />
        <span className="h-2.5 w-2.5 rounded-full border border-current opacity-40" />
        <span className="h-2.5 w-2.5 rounded-full border border-current opacity-40" />
        <span
          className="ml-3 truncate font-mono text-[11px] opacity-60"
          style={{ color: tone.fg }}
        >
          {url ? getDomain(url) : "coming soon"}
        </span>
      </div>
      <div className="flex flex-1 items-center justify-center px-6 py-10">
        <p
          className="font-display text-center text-3xl leading-tight sm:text-4xl"
          style={{ color: tone.fg }}
        >
          {name}
        </p>
      </div>
    </div>
  );
}
