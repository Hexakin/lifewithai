import { Eyebrow } from "@/components/ui";
import { statusLabel, type App } from "@/lib/apps";

export function AppCard({
  app,
  tone = "paper",
}: {
  app: App;
  tone?: "paper" | "navy";
}) {
  const navy = tone === "navy";
  return (
    <article
      className={`flex flex-col gap-3.5 rounded-2xl border p-6 lg:px-8 lg:py-9 ${
        navy ? "border-navy-line bg-navy-raised" : "border-line bg-card"
      }`}
    >
      <p
        className={`self-start rounded-full px-3.5 py-1 font-mono text-sm font-semibold uppercase tracking-[0.06em] ${
          navy ? "bg-highlight text-ink" : "bg-highlight-soft text-ink"
        }`}
      >
        {statusLabel[app.status]}
      </p>
      <h3 className="mt-1 font-serif text-[2rem] leading-[1.1] lg:text-[2.5rem]">
        {app.name}
      </h3>
      <Eyebrow
        tone={navy ? "inherit" : "muted"}
        className={`text-[0.8125rem] ${navy ? "text-on-navy-muted" : ""}`}
      >
        {app.platform}
        {app.nameNote ? ` · ${app.nameNote}` : null}
      </Eyebrow>
      <p
        className={`flex-1 text-[1.0625rem] leading-relaxed lg:text-lg ${
          navy ? "text-on-navy-soft" : "text-ink-soft"
        }`}
      >
        {app.summary}
      </p>
      {app.href ? (
        <a
          href={app.href}
          className={`mt-2 text-lg font-bold underline underline-offset-[5px] ${
            navy ? "text-highlight" : "text-tomato-deep"
          }`}
        >
          Get {app.name}
        </a>
      ) : null}
    </article>
  );
}
