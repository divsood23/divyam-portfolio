In `app/page.tsx`, press **Ctrl + A**, then paste this complete replacement and commit it:

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Download,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Sun,
  X,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;
const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
};

function SectionTitle({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[.2em] text-clay">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-[.98] tracking-tight sm:text-6xl">
        {title}
      </h2>
      {copy && (
        <p className="mt-6 max-w-xl text-base leading-7 text-ink/65 dark:text-white/60">
          {copy}
        </p>
      )}
    </div>
  );
}

function Counter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1600, bounce: 0 });
  const rounded = useTransform(spring, (n) => Math.round(n));
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => rounded.on("change", setCount), [rounded]);

  return (
    <div
      ref={ref}
      className="border-t border-ink/15 pt-5 dark:border-white/15"
    >
      <p className="font-display text-5xl sm:text-6xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[.16em] text-ink/55 dark:text-white/50">
        {label}
      </p>
    </div>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle dark mode"
      className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 dark:border-white/15"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["About", "Journey", "Experience", "Impact", "Contact"];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-ink/10 bg-paper/80 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-[#171717]/80">
        <a href="#top" className="font-display text-xl">
          DS<span className="text-clay">.</span>
        </a>

        <nav className="hidden gap-7 md:flex">
          {links.map((x) => (
            <a
              key={x}
              href={`#${x.toLowerCase()}`}
              className="text-sm text-ink/70 transition hover:text-clay dark:text-white/70"
            >
              {x}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center md:hidden"
            aria-label="Menu"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-auto mt-2 flex max-w-7xl flex-col rounded-3xl border border-ink/10 bg-paper p-5 text-center dark:border-white/10 dark:bg-[#171717] md:hidden">
          {links.map((x) => (
            <a
              onClick={() => setOpen(false)}
              key={x}
              href={`#${x.toLowerCase()}`}
              className="py-3"
            >
              {x}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default function Home() {
  const values = [
    "Ownership",
    "Discipline",
    "Continuous Learning",
    "Problem Solving",
    "Customer First",
    "Collaboration",
  ];

  const timeline = [
    ["2023-25", "PGDM in Marketing", "CGPA 9.0"],
    ["2020-23", "BBA", "88.68% - 3rd University Rank"],
    ["2020", "Class XII", "97.4%"],
    ["2018", "Class X", "88.68%"],
  ];

  return (
    <main
      id="top"
      className="overflow-hidden bg-paper transition-colors duration-500 dark:bg-[#171717]"
    >
      <Nav />

      <section className="grain min-h-screen px-5 pb-16 pt-36 sm:px-10">
        <div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            className="relative z-10"
          >
            <motion.p
              variants={reveal}
              className="mb-6 flex items-center gap-2 text-sm text-ink/60 dark:text-white/60"
            >
              <MapPin size={15} className="text-clay" /> Bangalore, India
            </motion.p>

            <motion.h1
              variants={reveal}
              className="max-w-3xl font-display text-[17vw] leading-[.78] tracking-[-.075em] sm:text-[10rem] lg:text-[11rem]"
            >
              Divyam
              <br />
              <i className="font-normal text-clay">Sood.</i>
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-10 max-w-lg text-lg leading-8 text-ink/70 dark:text-white/65"
            >
              A PGDM in Marketing graduate drawn to the quiet craft behind
              memorable customer experiences - where sharp insight becomes work
              that moves people and metrics.
            </motion.p>

            <motion.div variants={reveal} className="mt-9 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white dark:bg-white dark:text-ink"
              >
                <Download size={15} /> Download resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-medium dark:border-white/15"
              >
                Let&apos;s connect <ArrowDown size={15} />
              </a>
            </motion.div>

            <motion.div
              variants={reveal}
              className="mt-12 flex gap-5 text-ink/65 dark:text-white/65"
            >
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/divyamsood2312/"
                target="_blank"
              >
                <Linkedin size={19} />
              </a>
              <a aria-label="Email" href="mailto:divsood23@gmail.com">
                <Mail size={19} />
              </a>
              <a aria-label="Phone" href="tel:+917889076532">
                <Phone size={19} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-6 rounded-[3rem] bg-clay/15 blur-3xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#d9d1c6]">
              <img
                src="/profile.jpg"
                alt="Divyam Sood"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-5 left-5 rounded-full bg-paper/85 px-4 py-2 text-xs font-semibold backdrop-blur">
                PGDM - Marketing
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="about"
        className="bg-white px-5 py-28 dark:bg-[#202020] sm:px-10"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]"
        >
          <SectionTitle
            eyebrow="01 / About me"
            title="Curiosity is where my work begins."
          />
          <p className="max-w-2xl self-end text-2xl leading-[1.45] tracking-tight text-ink/75 dark:text-white/70">
            I&apos;ve always noticed the small things: why someone stops
            scrolling, what makes an idea feel useful, and how a moment can
            become a memory. That instinct led me to marketing - not as a
            loudspeaker, but as a way to create a genuine connection between
            people and brands. I bring structure to the messy middle, stay
            close to the customer, and care deeply about finishing what I
            start.
          </p>
        </motion.div>
      </section>

      <section className="px-5 py-28 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="02 / What defines me"
            title="The principles I bring to every brief."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3 dark:border-white/10 dark:bg-white/10">
            {values.map((v, i) => (
              <motion.article
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                key={v}
                className="min-h-48 bg-paper p-7 transition hover:bg-[#eee5da] dark:bg-[#171717] dark:hover:bg-[#252525]"
              >
                <span className="font-display text-3xl text-clay">
                  0{i + 1}
                </span>
                <h3 className="mt-10 text-xl font-medium">{v}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/60 dark:text-white/55">
                  {
                    [
                      "Taking responsibility from first thought to final outcome.",
                      "Showing up prepared, consistent, and intentional.",
                      "Turning every challenge into a new capability.",
                      "Finding clarity and momentum in complex problems.",
                      "Keeping the real human at the centre of decisions.",
                      "Making good work better through shared ownership.",
                    ][i]
                  }
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="bg-ink px-5 py-28 text-white sm:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="03 / Academic journey"
            title="A record of learning with intent."
          />
          <div className="relative mt-16 border-l border-white/20 pl-8 sm:ml-32 sm:pl-16">
            {timeline.map(([year, degree, result], i) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                key={degree}
                className="relative grid gap-2 pb-12 sm:grid-cols-[120px_1fr]"
              >
                <span className="absolute -left-[38px] top-2 h-3 w-3 rounded-full bg-clay ring-8 ring-ink sm:-left-[70px]" />
                <p className="text-sm text-white/45">{year}</p>
                <div>
                  <h3 className="font-display text-3xl">{degree}</h3>
                  <p className="mt-1 text-clay">{result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="px-5 py-28 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="04 / Professional experience"
            title="Building moments that customers notice."
          />

          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[2rem] bg-white p-8 shadow-soft dark:bg-[#202020] sm:p-10">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-clay">2024 - Present</p>
                  <h3 className="mt-2 font-display text-5xl">Zepto</h3>
                </div>
                <BriefcaseBusiness className="text-clay" />
              </div>

              <div className="mt-10 space-y-6">
                {[
                  [
                    "Marquee Events",
                    "Helping shape high-visibility moments that translate brand energy into action.",
                  ],
                  [
                    "Category Events",
                    "End-to-end ownership - from the first customer insight and event narrative to execution, optimisation, and reporting.",
                  ],
                  [
                    "CRM, Push Notifications & Performance",
                    "Creating timely, relevant communication that earns attention and drives measurable outcomes.",
                  ],
                ].map(([title, copy]) => (
                  <div
                    key={title}
                    className="border-t border-ink/10 pt-4 dark:border-white/10"
                  >
                    <h4 className="font-medium">{title}</h4>
                    <p className="mt-2 text-sm leading-6 text-ink/60 dark:text-white/55">
                      {copy}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-[#f1e6d9] p-5 dark:bg-[#302820]">
                <p className="text-xs font-semibold uppercase tracking-wider text-clay">
                  Standout event
                </p>
                <p className="mt-2 text-lg font-medium">Kitchen & Dining</p>
                <p className="mt-1 text-sm text-ink/65 dark:text-white/65">
                  Delivered the highest-ever GSV and CTR - making a category
                  moment feel culturally relevant and commercially powerful.
                </p>
              </div>
            </article>

            <article className="rounded-[2rem] bg-clay p-8 text-white sm:p-10">
              <p className="text-sm text-white/65">Earlier experience</p>
              <h3 className="mt-2 font-display text-5xl">
                Steller
                <br />
                Sprangs
              </h3>
              <p className="mt-9 max-w-md text-lg leading-8 text-white/80">
                A hands-on introduction to how relationships, systems and
                follow-through drive growth.
              </p>

              <ul className="mt-10 space-y-4">
                {[
                  "Built lead-nurturing flows that kept prospects engaged.",
                  "Managed client communication with clarity and care.",
                  "Organised CRM for a more dependable sales process.",
                  "Improved conversions by 15% through consistent follow-up.",
                ].map((x) => (
                  <li
                    key={x}
                    className="border-t border-white/20 pt-4 text-sm leading-6"
                  >
                    {x}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section
        id="impact"
        className="bg-[#e8ddd0] px-5 py-28 dark:bg-[#25211d] sm:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="05 / Impact dashboard"
            title="Work that has a number behind it."
          />
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <Counter value={15} suffix="%" label="Conversion improvement" />
            <Counter value={9} suffix=".0" label="PGDM CGPA" />
            <Counter value={3} suffix="rd" label="University rank" />
            <Counter value={2} suffix="x" label="Highest-ever event metrics" />
          </div>
        </div>
      </section>

      <section className="px-5 py-28 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="06 / Academic projects"
            title="Ideas made to travel beyond the classroom."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {[
              [
                "Meme Sabha",
                "A culture-forward communication concept exploring how humour and community can make civic conversation feel participative.",
              ],
              [
                "Mitti Cafe",
                "A brand and outreach project built around inclusion, purpose and the kind of stories people want to pass on.",
              ],
            ].map(([title, copy], i) => (
              <motion.article
                whileHover={{ y: -6 }}
                key={title}
                className="rounded-[2rem] border border-ink/10 p-8 dark:border-white/10 sm:p-10"
              >
                <p className="font-display text-7xl text-clay/40">0{i + 1}</p>
                <h3 className="mt-12 font-display text-4xl">{title}</h3>
                <p className="mt-4 max-w-md leading-7 text-ink/65 dark:text-white/60">
                  {copy}
                </p>
                <span className="mt-10 inline-flex items-center gap-1 text-sm font-medium">
                  View case study <ArrowUpRight size={15} />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-28 dark:bg-[#202020] sm:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <SectionTitle
            eyebrow="07 / Leadership"
            title="The best outcomes are shared."
            copy="Whether I'm bringing order to a deadline or making space for a quieter perspective, I believe leadership is an everyday practice: create clarity, build trust, and help the group move."
          />

          <div className="grid content-center gap-5">
            <div className="rounded-2xl bg-paper p-6 dark:bg-[#171717]">
              <p className="text-sm text-clay">How I show up</p>
              <p className="mt-2 text-xl">
                Calm in ambiguity. Generous with context. Accountable for the
                details.
              </p>
            </div>
            <div className="rounded-2xl bg-ink p-6 text-white">
              <p className="text-sm text-clay">What I value</p>
              <p className="mt-2 text-xl">
                Teams where curiosity is contagious and everyone has room to do
                their best work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-28 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="08 / Achievements"
            title="Recognition for the work behind the work."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_.9fr]">
            <div className="rounded-[2rem] bg-ink p-8 text-white sm:p-10">
              <Award className="text-clay" size={30} />
              <p className="mt-14 text-sm uppercase tracking-[.18em] text-white/50">
                Academic distinction
              </p>
              <h3 className="mt-3 font-display text-5xl">Dean&apos;s Honour</h3>
              <p className="mt-5 max-w-md leading-7 text-white/65">
                A recognition that reflects sustained academic rigour,
                consistency and a deep commitment to learning.
              </p>
              <a
                href="/deans-honour-certificate.pdf"
                target="_blank"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink"
              >
                View certificate <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="relative min-h-80 overflow-hidden rounded-[2rem] bg-[#ded5ca]">
              <img
                src="/deans-honour-certificate.jpg"
                alt="Dean's Honour certificate"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid place-items-center bg-ink/5">
                <span className="rounded-full bg-paper/90 px-4 py-2 text-xs font-semibold backdrop-blur">
                  Dean&apos;s Honour Certificate
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="bg-clay px-5 pb-8 pt-24 text-white sm:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-white/65">
            09 / Contact
          </p>
          <h2 className="mt-5 max-w-5xl font-display text-6xl leading-[.9] tracking-tight sm:text-8xl">
            Let&apos;s make something people <i>feel.</i>
          </h2>

          <div className="mt-14 flex flex-col justify-between gap-10 border-t border-white/25 pt-6 sm:flex-row">
            <div className="space-y-2">
              <a
                className="block text-lg"
                href="mailto:divsood23@gmail.com"
              >
                divsood23@gmail.com
              </a>
              <a className="block text-lg" href="tel:+917889076532">
                +91 7889076532
              </a>
              <p className="text-white/65">Bangalore, India</p>
            </div>

            <a
              href="https://www.linkedin.com/in/divyamsood2312/"
              target="_blank"
              className="inline-flex h-fit items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm"
            >
              LinkedIn <ArrowUpRight size={15} />
            </a>
          </div>

          <p className="mt-20 text-xs text-white/50">
            © {new Date().getFullYear()} Divyam Sood. Thoughtfully made.
          </p>
        </div>
      </footer>
    </main>
  );
}
```
