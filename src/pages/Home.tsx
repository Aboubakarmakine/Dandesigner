import { Link } from 'react-router-dom';
import { categories } from '../data';

const pillars = [
  {
    title: 'Documentary',
    description:
      'Human-led stories with emotional precision and immersive cinematic language.',
  },
  {
    title: 'Commercial',
    description:
      'Brand films that feel editorial, intentional, and elevated in every frame.',
  },
  {
    title: 'Portraiture',
    description:
      'Visual identities shaped through light, gesture, and honest atmosphere.',
  },
];

const aboutHighlights = [
  'Based in Maryland, available worldwide',
  'Focus: documentary, branded films, and portrait-led storytelling',
  'Approach: cinematic craft, emotional clarity, and cultural depth',
];

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#040404]">
      <section className="relative min-h-screen px-6 pt-32 pb-20 md:px-12">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2940&auto=format&fit=crop"
            className="h-full w-full object-cover brightness-[0.28]"
            alt="Filmmaker cinematic hero"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(197,163,88,0.18),transparent_45%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#040404]" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col justify-end gap-10">
          <span className="w-fit border border-white/20 bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-white/80 backdrop-blur">
            Filmmaker and Visual Storyteller
          </span>
          <div className="space-y-8">
            <h1 className="font-serif text-5xl leading-[0.95] text-white md:text-7xl lg:text-[6.6rem]">
              Dan T.
              <br />
              <span className="text-[--color-gold]">Cinematic Narratives</span>
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-white/75 md:text-lg">
              I direct and craft films that translate identity, culture, and emotion into
              timeless visual stories. Every frame is built with elegance, clarity, and depth.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#work"
              className="border border-[--color-gold] bg-[--color-gold] px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-black transition hover:brightness-110"
            >
              View Selected Work
            </a>
            <a
              href="#contact"
              className="border border-white/35 bg-black/20 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Start a Project
            </a>
          </div>
        </div>
      </section>

      <section id="studio" className="px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm"
            >
              <p className="mb-5 text-[11px] uppercase tracking-[0.28em] text-[--color-gold]">
                {pillar.title}
              </p>
              <p className="font-serif text-2xl leading-snug text-white/92">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-14 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 border border-white/10 bg-black/40 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div className="space-y-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/60">Featured Film</p>
            <h2 className="font-serif text-4xl text-[--color-gold] md:text-6xl">The Distance Between</h2>
            <p className="max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
              A poetic documentary following migration, memory, and belonging. Screened across
              independent festivals and praised for visual restraint and emotional intimacy.
            </p>
            <button className="border border-white/30 px-6 py-3 text-[11px] uppercase tracking-[0.25em] text-white transition hover:border-[--color-gold] hover:text-[--color-gold]">
              Watch Trailer
            </button>
          </div>
          <div className="overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2940&auto=format&fit=crop"
              className="h-full w-full object-cover brightness-[0.8]"
              alt="Featured film still"
            />
          </div>
        </div>
      </section>

      <section id="work" className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-8">
            <h3 className="font-serif text-4xl text-white md:text-6xl">
              Selected <span className="text-[--color-gold]">Portfolio</span>
            </h3>
            <p className="max-w-sm text-right text-xs uppercase tracking-[0.2em] text-white/50">
              Crafted stories across documentary, education, portrait, and travel.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {categories.map((cat) => (
              <Link
                to={`/category/${cat.id}`}
                key={cat.id}
                className="group relative overflow-hidden border border-white/10 bg-black/50"
              >
                <img
                  src={cat.cover}
                  alt={cat.title}
                  className="aspect-[4/3] w-full object-cover brightness-[0.62] transition duration-700 group-hover:scale-105 group-hover:brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[--color-gold]">
                    Project
                  </p>
                  <h4 className="font-serif text-3xl text-white">{cat.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 border border-white/10 bg-white/[0.02] p-7 md:grid-cols-[1.05fr_0.95fr] md:p-10">
          <div className="space-y-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[--color-gold]">About</p>
            <h3 className="font-serif text-4xl leading-tight text-white md:text-6xl">
              Filmmaking Rooted in Story, Atmosphere, and Human Detail.
            </h3>
            <p className="max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
              I am a filmmaker and visual storyteller crafting cinematic work for artists, brands,
              and institutions. My process blends documentary sensitivity with polished visual
              direction to create films that feel timeless and emotionally precise.
            </p>
            <a
              href="#contact"
              className="inline-block border border-white/30 px-6 py-3 text-[11px] uppercase tracking-[0.25em] text-white transition hover:border-[--color-gold] hover:text-[--color-gold]"
            >
              Book a Project
            </a>
          </div>
          <div className="space-y-6 border-t border-white/10 pt-6 md:border-l md:border-t-0 md:pt-0 md:pl-10">
            {aboutHighlights.map((item) => (
              <div key={item} className="border-b border-white/10 pb-4">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/55">Profile</p>
                <p className="mt-2 font-serif text-2xl leading-snug text-white/92">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl items-stretch gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2940&auto=format&fit=crop"
              className="h-full w-full object-cover"
              alt="Filmmaker portrait"
            />
          </div>
          <div
            id="contact"
            className="flex flex-col justify-between border border-white/10 bg-white/[0.02] p-8 md:p-10"
          >
            <div className="space-y-6">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[--color-gold]">About / Contact</p>
              <h3 className="font-serif text-3xl text-white md:text-5xl">
                Built for Brands, Artists, and Cultural Institutions.
              </h3>
              <p className="text-sm leading-relaxed text-white/75 md:text-base">
                Available for documentaries, campaign films, branded storytelling, and visual
                direction. Based in Maryland, working globally.
              </p>
            </div>
            <div className="mt-10 space-y-3 text-sm text-white/85">
              <p>Email: hello@dantfilms.com</p>
              <p>Instagram: @dantfilms</p>
              <p className="pt-5 text-xs uppercase tracking-[0.2em] text-white/55">
                Booking for summer and fall productions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
