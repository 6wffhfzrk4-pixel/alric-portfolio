"use client";

import Link from "next/link";
import { projects, profile, type Project, type Persona } from "@/data/site";
import { MaskText, Reveal, ImgFrame, Magnetic } from "./shared";
import Footer from "./Footer";

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="copy-mono text-[10px] text-grey-500">{k}</dt>
      <dd className="font-display mt-2 text-sm uppercase">{v}</dd>
    </div>
  );
}

function CaseHeading({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <h2 className="font-display text-3xl tracking-tight uppercase md:text-5xl">
        {children}
      </h2>
    </Reveal>
  );
}

function PersonaBullets({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-5">
      <p className="copy-mono text-[10px] text-grey-500">{title}</p>
      <ul className="mt-2 flex flex-col gap-1.5">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2 text-sm text-grey-700">
            <span className="text-ink">—</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PersonaCard({ p }: { p: Persona }) {
  return (
    <article className="h-full rounded-3xl border border-grey-300 p-6 md:p-8">
      <div className="flex items-center gap-4">
        <div className="font-display flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink text-lg text-paper">
          {p.name.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <h3 className="font-display text-2xl tracking-tight uppercase">
            {p.name}
          </h3>
          <p className="copy-mono mt-1 text-[10px] text-grey-500">
            {p.age} · {p.location}
          </p>
        </div>
      </div>
      <p className="copy-mono mt-4 text-[10px] text-grey-500">{p.role}</p>
      {p.context && (
        <p className="mt-3 text-sm leading-relaxed text-grey-700">{p.context}</p>
      )}
      {p.quote && (
        <p className="mt-4 border-l-2 border-ink pl-4 text-sm leading-relaxed text-grey-700 italic">
          « {p.quote} »
        </p>
      )}
      <PersonaBullets title="Objectifs" items={p.goals} />
      <PersonaBullets title="Frustrations" items={p.frustrations} />
      <PersonaBullets title="Besoins clés" items={p.needs} />
    </article>
  );
}

/* Découpe un libellé en ≤ 3 lignes pour tenir dans une boîte SVG */
function wrapLabel(text: string, max = 26): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    const next = cur ? `${cur} ${w}` : w;
    if (next.length <= max) cur = next;
    else {
      if (cur) lines.push(cur);
      cur = w;
    }
  }
  if (cur) lines.push(cur);
  return lines.slice(0, 3);
}

/* Arborescence du site rendue en SVG monochrome (depuis project.sitemap) */
function SitemapTree({
  root,
  columns,
}: {
  root: string;
  columns: { tab: string; items: string[] }[];
}) {
  const COLS = columns.length;
  const COL_W = 240;
  const W = COLS * COL_W;
  const ROOT_W = 230;
  const ROOT_H = 56;
  const HEAD_W = 160;
  const HEAD_H = 44;
  const LEAF_W = 186;
  const LEAF_H = 54;
  const LEAF_STEP = 68;
  const LINE_H = 13;
  const INK = "#0a0a0a";
  const rootCx = W / 2;
  const rootY = 6;
  const busY = rootY + ROOT_H + 30;
  const headY = busY + 30;
  const leafTop = headY + HEAD_H + 38;
  const maxItems = Math.max(...columns.map((c) => c.items.length));
  const H = leafTop + maxItems * LEAF_STEP + 10;
  const colCx = (i: number) => i * COL_W + COL_W / 2;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={`Arborescence — ${root}`}
      className="h-auto w-full min-w-[680px]"
    >
      {/* Racine */}
      <rect
        x={rootCx - ROOT_W / 2}
        y={rootY}
        width={ROOT_W}
        height={ROOT_H}
        rx={14}
        fill={INK}
      />
      <text
        x={rootCx}
        y={rootY + ROOT_H / 2}
        textAnchor="middle"
        dominantBaseline="central"
        className="font-display"
        fontSize={20}
        fontWeight={600}
        fill="#ffffff"
      >
        {root}
      </text>

      <line x1={rootCx} y1={rootY + ROOT_H} x2={rootCx} y2={busY} stroke={INK} strokeWidth={1.5} />
      <line x1={colCx(0)} y1={busY} x2={colCx(COLS - 1)} y2={busY} stroke={INK} strokeWidth={1.5} />

      {columns.map((col, i) => {
        const cx = colCx(i);
        const spineX = cx - LEAF_W / 2 - 18;
        const leafLeft = spineX + 20;
        const lastCenter =
          leafTop + (col.items.length - 1) * LEAF_STEP + LEAF_H / 2;
        return (
          <g key={col.tab}>
            <line x1={cx} y1={busY} x2={cx} y2={headY} stroke={INK} strokeWidth={1.5} />
            <rect
              x={cx - HEAD_W / 2}
              y={headY}
              width={HEAD_W}
              height={HEAD_H}
              rx={8}
              fill="#3a3a3a"
            />
            <text
              x={cx}
              y={headY + HEAD_H / 2}
              textAnchor="middle"
              dominantBaseline="central"
              className="font-display"
              fontSize={14}
              letterSpacing={0.6}
              fill="#ffffff"
            >
              {col.tab.toUpperCase()}
            </text>

            <path
              d={`M ${cx} ${headY + HEAD_H} V ${headY + HEAD_H + 18} H ${spineX} V ${lastCenter}`}
              fill="none"
              stroke={INK}
              strokeWidth={1.5}
            />

            {col.items.map((it, j) => {
              const top = leafTop + j * LEAF_STEP;
              const center = top + LEAF_H / 2;
              const lines = wrapLabel(it);
              const startY = center - ((lines.length - 1) * LINE_H) / 2 + 4;
              return (
                <g key={j}>
                  <line x1={spineX} y1={center} x2={leafLeft} y2={center} stroke={INK} strokeWidth={1.5} />
                  <rect
                    x={leafLeft}
                    y={top}
                    width={LEAF_W}
                    height={LEAF_H}
                    rx={6}
                    fill="#f4f4f4"
                    stroke="#d6d6d6"
                    strokeWidth={1}
                  />
                  <text textAnchor="middle" fontSize={12.5} fill="#4b4b4b">
                    {lines.map((ln, k) => (
                      <tspan key={k} x={leafLeft + LEAF_W / 2} y={startY + k * LINE_H}>
                        {ln}
                      </tspan>
                    ))}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}

export default function ProjectDetail({ project }: { project: Project }) {
  const idx = projects.findIndex((p) => p.id === project.id);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      {/* Nav projet */}
      <header className="fixed inset-x-0 top-0 z-[80]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-12">
          <Link
            href="/"
            data-cursor="link"
            className="font-display rounded-full border border-grey-300 bg-paper/80 px-4 py-2 text-lg tracking-tight backdrop-blur"
          >
            {profile.wordmark}
            <span className="text-ink">.</span>
          </Link>
          <Link
            href="/#projects"
            data-cursor="link"
            className="rounded-full border border-grey-300 bg-paper/80 px-4 py-2 text-[11px] font-medium tracking-widest uppercase backdrop-blur transition-colors hover:bg-ink hover:text-paper"
          >
            ← Tous les projets
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[1280px] px-6 pt-32 pb-24 md:px-12 md:pt-44">
        {/* Titre + résumé */}
        <p className="copy-mono text-[11px]">{project.kicker}</p>
        <h1 className="font-display mt-3 text-[18vw] leading-[0.82] md:text-[10vw]">
          <MaskText text={project.title} />
        </h1>
        <Reveal>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-grey-700 md:text-xl">
            {project.summary}
          </p>
        </Reveal>

        {/* Méta */}
        <Reveal>
          <dl className="mt-12 grid grid-cols-2 gap-6 border-y border-grey-300 py-8 md:grid-cols-4">
            <Meta k="Année" v={project.year} />
            <Meta k="Rôle" v={project.role} />
            <div className="col-span-2">
              <dt className="copy-mono text-[10px] text-grey-500">Services</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-grey-300 px-3 py-1 text-[11px] tracking-widest uppercase"
                  >
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>

        {/* Cover */}
        <Reveal>
          <ImgFrame
            src={project.image}
            alt={project.title}
            label={project.kicker}
            className="mt-12 aspect-[16/10] w-full rounded-3xl grayscale"
          />
        </Reveal>

        {/* En résumé */}
        {project.context && (
          <div className="mt-20 max-w-3xl md:mt-28">
            <CaseHeading>En résumé</CaseHeading>
            <Reveal>
              <p className="mt-6 text-lg leading-relaxed text-grey-700 md:text-xl">
                {project.context}
              </p>
            </Reveal>
          </div>
        )}

        {/* Le défi */}
        <div className="mt-20 grid gap-8 md:mt-28 md:grid-cols-[0.4fr_0.6fr] md:gap-12">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight uppercase md:text-5xl">
              Le défi
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-lg leading-relaxed text-grey-700">
              {project.problem}
            </p>
          </Reveal>
        </div>

        {/* Aujourd'hui → Demain */}
        {project.tension && (
          <div className="mt-20 md:mt-28">
            <CaseHeading>Aujourd&apos;hui → Demain</CaseHeading>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-3xl border border-grey-300 p-6 md:p-8">
                  <p className="copy-mono text-[11px] text-grey-500">
                    Aujourd&apos;hui
                  </p>
                  <ul className="mt-4 flex flex-col">
                    {project.tension.today.map((t, i) => (
                      <li
                        key={i}
                        className="border-t border-grey-300 py-3 text-grey-700"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal>
                <div className="h-full rounded-3xl border border-ink bg-ink p-6 text-paper md:p-8">
                  <p className="copy-mono text-[11px] text-paper/60">
                    Demain — objectif UX
                  </p>
                  <ul className="mt-4 flex flex-col">
                    {project.tension.tomorrow.map((t, i) => (
                      <li key={i} className="border-t border-paper/20 py-3">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        )}

        {/* Objectifs UX */}
        {project.objectives && (
          <div className="mt-20 grid gap-8 md:mt-28 md:grid-cols-[0.4fr_0.6fr] md:gap-12">
            <Reveal>
              <h2 className="font-display text-3xl tracking-tight uppercase md:text-5xl">
                Objectifs UX
              </h2>
            </Reveal>
            <ul className="flex flex-col">
              {project.objectives.map((o, i) => (
                <Reveal as="li" key={i} delay={i * 0.05}>
                  <div className="flex gap-5 border-t border-grey-300 py-5">
                    <span className="font-display text-sm text-grey-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-grey-700">{o}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        )}

        {/* Recherche utilisateur */}
        {(project.researchMethod || project.stakeholders) && (
          <div className="mt-20 md:mt-28">
            <CaseHeading>Recherche utilisateur</CaseHeading>
            {project.researchMethod && (
              <Reveal>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-grey-700">
                  {project.researchMethod}
                </p>
              </Reveal>
            )}
            {project.stakeholders && (
              <div className="mt-10 grid gap-10 md:grid-cols-2">
                {project.stakeholders.map((g) => (
                  <Reveal key={g.group}>
                    <p className="copy-mono text-[11px] text-grey-500">
                      {g.group}
                    </p>
                    <ul className="mt-2 flex flex-col">
                      {g.items.map((it) => (
                        <li
                          key={it.name}
                          className="border-t border-grey-300 py-4"
                        >
                          <p className="font-display text-lg tracking-tight uppercase">
                            {it.name}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-grey-700">
                            {it.desc}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Personas */}
        {project.personas && (
          <div className="mt-20 md:mt-28">
            <CaseHeading>Personas</CaseHeading>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {project.personas.map((p) => (
                <Reveal key={p.name}>
                  <PersonaCard p={p} />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Ce qu'elles veulent vraiment */}
        {project.truths && (
          <div className="mt-20 md:mt-28">
            <CaseHeading>Ce qu&apos;elles veulent vraiment</CaseHeading>
            <div className="mt-10 flex flex-col">
              {project.truths.map((t, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="grid gap-2 border-t border-grey-300 py-6 md:grid-cols-2 md:gap-12">
                    <p className="text-sm leading-relaxed text-grey-500">
                      {t.surface}
                    </p>
                    <p className="text-lg leading-relaxed text-ink">{t.real}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Parcours utilisateur */}
        {project.journey && (
          <div className="mt-20 md:mt-28">
            <CaseHeading>Parcours utilisateur</CaseHeading>
            <Reveal>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-grey-700">
                {project.journey.scenario}
              </p>
            </Reveal>
            <div className="mt-10 flex flex-col">
              {project.journey.steps.map((s, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="grid gap-4 border-t border-grey-300 py-8 md:grid-cols-[0.32fr_0.68fr] md:gap-10">
                    <div>
                      <p className="font-display text-xl tracking-tight uppercase md:text-2xl">
                        {s.stage}
                      </p>
                      <span className="mt-3 inline-block rounded-full border border-grey-300 px-3 py-1 text-[11px] tracking-widest uppercase">
                        {s.emotion}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="text-grey-700">{s.action}</p>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <p className="copy-mono text-[10px] text-grey-500">
                            Point de friction
                          </p>
                          <p className="mt-1 text-sm text-grey-700">{s.pain}</p>
                        </div>
                        <div>
                          <p className="copy-mono text-[10px] text-grey-500">
                            Objectif UX
                          </p>
                          <p className="mt-1 text-sm text-grey-700">
                            {s.opportunity}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* User flows */}
        {project.flows && (
          <div className="mt-20 md:mt-28">
            <CaseHeading>User flows</CaseHeading>
            <div className="mt-10 flex flex-col gap-6">
              {project.flows.map((f) => (
                <Reveal key={f.name}>
                  <div className="rounded-3xl border border-grey-300 p-6 md:p-8">
                    <p className="font-display text-lg tracking-tight uppercase">
                      {f.name}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-y-3">
                      {f.steps.map((s, i) => (
                        <span key={i} className="flex items-center">
                          <span className="rounded-full border border-grey-300 px-4 py-1.5 text-sm text-grey-700">
                            {s}
                          </span>
                          {i < f.steps.length - 1 && (
                            <span className="px-2 text-grey-500">→</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Architecture de l'information */}
        {project.sitemap && (
          <div className="mt-20 md:mt-28">
            <CaseHeading>Architecture de l&apos;information</CaseHeading>
            <Reveal>
              <div className="mt-10 overflow-x-auto rounded-3xl border border-grey-300 bg-paper p-4 md:p-8">
                <SitemapTree
                  root={project.sitemapRoot ?? project.title}
                  columns={project.sitemap}
                />
              </div>
            </Reveal>
          </div>
        )}

        {/* Design system */}
        {project.designSystem && (
          <div className="mt-20 md:mt-28">
            <CaseHeading>Design system</CaseHeading>
            {project.designSystem.note && (
              <Reveal>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-grey-700">
                  {project.designSystem.note}
                </p>
              </Reveal>
            )}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
              {project.designSystem.palette.map((c) => (
                <Reveal key={c.hex}>
                  <div className="h-full rounded-3xl border border-grey-300 p-5">
                    <div
                      className="h-16 w-full rounded-2xl border border-grey-300"
                      style={{ backgroundColor: c.hex }}
                    />
                    <p className="font-display mt-4 text-lg tracking-tight uppercase">
                      {c.name}
                    </p>
                    <p className="copy-mono mt-1 text-[10px] text-grey-500">
                      {c.hex}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-grey-700">
                      {c.usage}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Ce que disent les chiffres */}
        {project.insights && (
          <div className="mt-20 md:mt-28">
            <CaseHeading>Ce que disent les chiffres</CaseHeading>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-grey-300 bg-grey-300 md:grid-cols-4">
              {project.insights.map((it, i) => (
                <div key={i} className="bg-paper p-6 md:p-8">
                  <span className="font-display block text-4xl md:text-5xl">
                    {it.value}
                  </span>
                  <p className="copy-mono mt-3 text-[10px] leading-relaxed">
                    {it.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* L'approche */}
        <div className="mt-20 grid gap-8 md:grid-cols-[0.4fr_0.6fr] md:gap-12">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight uppercase md:text-5xl">
              L&apos;approche
            </h2>
          </Reveal>
          <ul className="flex flex-col">
            {project.approach.map((a, i) => (
              <Reveal as="li" key={i} delay={i * 0.05}>
                <div className="flex gap-5 border-t border-grey-300 py-5">
                  <span className="font-display text-sm text-grey-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-grey-700">{a}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Galerie */}
        <div className="mt-20 grid gap-6 md:mt-28 md:grid-cols-2">
          {project.gallery.map((g, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <ImgFrame
                src={g}
                alt={`${project.title} — visuel ${i + 1}`}
                label="VISUEL PROJET"
                className="aspect-[4/3] w-full rounded-3xl grayscale"
              />
            </Reveal>
          ))}
        </div>

        {/* La solution */}
        <div className="mt-20 grid gap-8 md:grid-cols-[0.4fr_0.6fr] md:gap-12">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight uppercase md:text-5xl">
              La solution
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-lg leading-relaxed text-grey-700">
              {project.solution}
            </p>
          </Reveal>
        </div>

        {/* Maquette finale */}
        <div className="mt-20 md:mt-28">
          <h2 className="font-display text-[12vw] leading-none md:text-[5vw]">
            <MaskText text="MAQUETTE FINALE" />
          </h2>
          <Reveal>
            <ImgFrame
              src={project.finalImage}
              alt={`${project.title} — maquette finale`}
              label="MAQUETTE FINALE"
              className="mt-8 aspect-[16/10] w-full rounded-3xl grayscale"
            />
          </Reveal>
          {project.liveUrl && (
            <Reveal>
              <div className="mt-8 flex">
                <Magnetic strength={0.3}>
                  <a
                    href={project.liveUrl}
                    data-cursor="link"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs tracking-widest uppercase text-paper transition-colors hover:bg-grey-700"
                  >
                    Voir le projet sur Figma ↗
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          )}
        </div>

        {/* Projet suivant */}
        <Link
          href={`/projets/${next.slug}`}
          data-cursor="view"
          className="group mt-24 block border-t border-grey-300 pt-12 md:mt-32"
        >
          <p className="copy-mono text-[10px] text-grey-500">Projet suivant</p>
          <div className="mt-3 flex items-center justify-between gap-4">
            <span className="font-display text-[14vw] leading-none uppercase transition-transform duration-500 group-hover:translate-x-3 md:text-[6vw]">
              {next.title}
            </span>
            <span className="text-3xl transition-transform duration-300 group-hover:translate-x-3 group-hover:-translate-y-1">
              ↗
            </span>
          </div>
        </Link>
      </main>

      <Footer />
    </>
  );
}
