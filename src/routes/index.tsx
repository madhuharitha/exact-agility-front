import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Phone, Mail, Youtube, Linkedin, MessageCircle, ChevronDown,
  Calendar, ArrowRight, Star, MapPin,
} from "lucide-react";
import heroImg from "@/assets/hero-celebrate.jpg";

export const Route = createFileRoute("/")({ component: Index });

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
} as const;

function TopBar() {
  return (
    <div className="bg-[var(--navy)] text-white text-sm">
      <div className="container-ta flex items-center justify-between py-2.5 flex-wrap gap-2">
        <div className="flex items-center gap-6 flex-wrap">
          <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 933-029-9565</span>
          <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> connect@targetagility.com</span>
        </div>
        <div className="flex items-center gap-4">
          <Youtube className="h-4 w-4 cursor-pointer hover:text-[var(--gold)]" />
          <MessageCircle className="h-4 w-4 cursor-pointer hover:text-[var(--gold)]" />
          <Linkedin className="h-4 w-4 cursor-pointer hover:text-[var(--gold)]" />
          <a href="#contact" className="btn-gold-sm ml-2">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const links = ["Courses", "Scrum Bootcamp", "Job Opportunities", "Referral program", "Resources", "Career Connects"];
  const hasDropdown = new Set(["Courses", "Resources", "Career Connects"]);
  return (
    <nav className="bg-white sticky top-0 z-40 shadow-[0_2px_8px_rgba(13,27,61,0.06)]">
      <div className="container-ta flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-2">
          <div className="h-11 w-11 rounded-md bg-gradient-to-br from-[var(--gold)] via-pink-400 to-[var(--navy)]" />
          <div className="leading-tight">
            <div className="font-bold text-[var(--navy)] text-lg tracking-wide">TARGET AGILITY</div>
            <div className="text-[10px] text-muted-foreground -mt-0.5">Accelerating the agility within you!</div>
          </div>
        </a>
        <ul className="hidden lg:flex items-center gap-7">
          {links.map(l => (
            <li key={l} className="text-[15px] font-medium text-[var(--navy)] hover:text-[var(--gold)] cursor-pointer flex items-center gap-1">
              {l}{hasDropdown.has(l) && <ChevronDown className="h-3.5 w-3.5" />}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  const cards = [
    { title: "PSM-AI Essentials", date: "30/05/26", color: "from-sky-400 to-sky-600", abbr: "PSM-AI" },
    { title: "PSPO-AI Essentials", date: "31/05/26", color: "from-emerald-400 to-emerald-600", abbr: "PSPO-AI" },
  ];
  return (
    <section className="relative overflow-hidden bg-white">
      {/* decorative blue blocks */}
      <div aria-hidden className="pointer-events-none absolute -top-10 -left-16 h-72 w-72 rounded-3xl bg-[var(--soft-blue)] rotate-12 opacity-80" />
      <div aria-hidden className="pointer-events-none absolute top-40 right-[-60px] h-80 w-80 rounded-full bg-[color-mix(in_oklab,var(--navy)_8%,white)] opacity-70" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/3 h-40 w-40 rounded-2xl border-2 border-[var(--gold)]/30 rotate-12" />

      <div className="container-ta relative grid lg:grid-cols-2 gap-14 items-center py-24 lg:py-32">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="space-y-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--navy)] leading-[1.1] tracking-tight">
            Ready to level up your career?<br /><span className="text-[var(--navy)]">Let's make it happen!</span>
          </h1>
          <div className="space-y-6">
            {cards.map((c) => (
              <div key={c.title} className="card-soft flex items-center gap-6 p-6 hover:-translate-y-0.5 transition-transform">
                <div className={`h-24 w-24 shrink-0 rounded-full bg-gradient-to-br ${c.color} grid place-items-center text-white text-xs font-bold text-center px-2 shadow-lg`}>{c.abbr}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[var(--navy)] text-xl">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">Next Batch on: {c.date}</p>
                  <button className="btn-gold-sm mt-4">Click here</button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
          {/* layered geometry behind image */}
          <div aria-hidden className="absolute inset-0 -z-0">
            <div className="absolute top-6 right-6 h-72 w-72 rounded-full bg-[var(--soft-blue)]" />
            <div className="absolute bottom-10 left-2 h-40 w-40 rounded-2xl bg-[color-mix(in_oklab,var(--navy)_10%,white)] rotate-6" />
            <div className="absolute top-1/3 -left-6 h-24 w-24 rounded-full border-4 border-[var(--gold)]/40" />
          </div>
          <img src={heroImg} alt="Career growth" className="relative w-full max-w-[620px] mx-auto drop-shadow-[0_30px_60px_rgba(13,27,61,0.18)]" width={1024} height={1024} />
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { n: "3500+", l: "Students Trained" },
    { n: "4", l: "Rated on Trustpilot" },
    { n: "25+", l: "Companies trained" },
    { n: "270+", l: "Trainings Delivered" },
  ];
  return (
    <section className="bg-[var(--soft-blue)] py-20">
      <div className="container-ta grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div key={s.l} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-xl bg-[var(--navy)] text-white py-10 text-center shadow-[0_10px_30px_rgba(13,27,61,0.15)]">
            <div className="text-4xl font-bold text-[var(--gold)]">{s.n}</div>
            <div className="text-sm mt-2 text-[var(--gold)]/90">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Courses() {
  const courses = [
    { tag: "Trending", title: "Professional Scrum Product Owner™ – AI Essentials", date: "31/05/2026", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=360&fit=crop" },
    { tag: "Trending", title: "Professional Scrum Master™ – AI Essentials", date: "30/05/2026", img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=360&fit=crop" },
    { tag: "Best Seller", title: "Professional Scrum Master I", date: "09/05/26", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=360&fit=crop" },
    { tag: "Best Seller", title: "Professional Scrum Master Advanced", date: "TBD", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=360&fit=crop" },
    { tag: "Best Seller", title: "Professional Scrum Product Owner I", date: "16/05/26", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=360&fit=crop" },
    { tag: "Best Seller", title: "Professional Scrum Product Owner Advanced", date: "TBD", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=360&fit=crop" },
  ];
  return (
    <section className="py-28 bg-white">
      <div className="container-ta">
        <div className="text-center mb-12">
          <p className="eyebrow">Courses</p>
          <h2 className="h-section mt-3">Most In-Demand Courses</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {courses.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="card-soft overflow-hidden group">
              <div className="relative">
                <img src={c.img} alt={c.title} loading="lazy" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="chip-gold absolute top-3 left-3">{c.tag}</span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[var(--navy)] text-base leading-snug min-h-[48px]">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 flex items-center gap-2"><Calendar className="h-4 w-4" /> Next Batch Starts on: {c.date}</p>
                <button className="btn-gold-sm mt-4 w-full">Enroll Now</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const benefits = [
    "Experience the ongoing advantages of our esteemed alumni community by joining us.",
    "Join Target Agility to extend your benefits beyond course completion.",
    "Exclusive webinars featuring tips on job search and interview preparation.",
    "Target Agility Alumni receive exclusive benefits, including access to Agile job openings.",
  ];
  return (
    <section className="py-28 bg-[var(--soft-blue)]">
      <div className="container-ta grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="eyebrow">About Target Agility</p>
          <h2 className="h-section mt-3">Why Choose Us?</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            At Target Agility, we take pride in our journey and the achievements that define us as a leading company in our field. Our commitment to excellence and innovation has propelled us to reach several significant milestones over the years.
          </p>
          <button className="btn-gold mt-7">Know More</button>
        </motion.div>
        <motion.ul initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-4">
          {benefits.map((b) => (
            <li key={b} className="flex gap-4 card-soft p-5">
              <div className="h-9 w-9 rounded-full bg-[var(--gold)] grid place-items-center text-[var(--navy)] font-bold shrink-0">★</div>
              <p className="text-[var(--navy)] text-sm leading-relaxed">{b}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = Array.from({ length: 4 }, (_, i) => ({
    name: "Saket Kumar",
    img: `https://i.pravatar.cc/120?img=${i + 12}`,
    text: "Quasi quo sit suscipit tempora aperiam rerum placeat id. Voluptatem praesentium excepturi id. Repudiandae incidunt doloremque. Error est et ullam.",
  }));
  return (
    <section className="py-28 bg-white">
      <div className="container-ta">
        <div className="text-center mb-12">
          <p className="eyebrow">Reviews</p>
          <h2 className="h-section mt-3">What customers say about Us</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-soft p-6">
              <img src={r.img} alt={r.name} loading="lazy" className="h-14 w-14 rounded-full object-cover" />
              <h3 className="font-semibold text-[var(--navy)] mt-4">{r.name}</h3>
              <div className="flex gap-0.5 mt-1">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-3.5 w-3.5 fill-[var(--gold)] text-[var(--gold)]" />)}
              </div>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Corporate() {
  return (
    <section className="py-28 bg-[var(--navy)] text-white">
      <div className="container-ta grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold">Corporate Training</h2>
          <p className="mt-5 text-white/80 leading-relaxed max-w-lg">
            Utilize Our Customized Corporate Training Programs for Agile Scrum, SAFe, and DevOps to Maintain a Competitive Edge and Achieve Success in the Digital Era.
          </p>
          <button className="btn-gold mt-7">Connect with us</button>
        </motion.div>
        <motion.img initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&h=600&fit=crop" alt="Corporate training" loading="lazy"
          className="rounded-xl shadow-2xl object-cover w-full h-[360px]" />
      </div>
    </section>
  );
}

function Events() {
  const events = [
    { title: "Master Your Scrum Journey & JIRA Hands-On Training", img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=450&fit=crop",
      bullets: ["Understanding Scrum Mastery (20-25 mins).", "Scrum Roles, Events & Artifacts – Explained with Real-Life Examples.", "JIRA Hands-On Overview (20-25 mins).", "Working with User Stories, Sprints & Backlogs.", "Scrum Simulation (Role Play Activity)"] },
    { title: "Navigating careers in product management", img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=450&fit=crop",
      bullets: ["Curious about what it takes to grow in the field?", "How to transition into Product Management", "Key skills that separate great PMs from good ones", "Job market trends & future opportunities", "Live Q&A—bring your questions!"] },
  ];
  return (
    <section className="py-28 bg-[var(--soft-blue)]">
      <div className="container-ta">
        <div className="text-center mb-12">
          <p className="eyebrow">Events</p>
          <h2 className="h-section mt-3">Register for your next event</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-7">
          {events.map((e, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}
              className="card-soft overflow-hidden">
              <img src={e.img} alt={e.title} loading="lazy" className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-[var(--navy)] text-lg">{e.title}</h3>
                <ul className="mt-4 space-y-2">
                  {e.bullets.map((b, k) => (
                    <li key={k} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-[var(--gold)] mt-1">●</span>{b}
                    </li>
                  ))}
                </ul>
                <button className="btn-gold-sm mt-5 inline-flex gap-2">Read More <ArrowRight className="h-3.5 w-3.5" /></button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="btn-gold">View All Events</button>
        </div>
      </div>
    </section>
  );
}

function Blogs() {
  const blogs = [
    { title: "Scrum Masters Who Ignore AI Will Be Unemployable by 2026", excerpt: "This isn't a prediction meant to shock. It's an observation already…", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=360&fit=crop" },
    { title: "If You Still Run Stand-ups Manually in 2025, You're Behind", excerpt: "Daily stand-ups were designed to enable fast alignment, early problem…", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=360&fit=crop" },
    { title: "How AI Can Answer PSM-Level Questions Better Than Most Scrum Masters", excerpt: "Professional Scrum Master (PSM) certification tests a candidate's understanding of…", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=360&fit=crop" },
  ];
  return (
    <section className="py-28 bg-white">
      <div className="container-ta">
        <div className="text-center mb-12">
          <h2 className="h-section">Read Our latest Blogs</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {blogs.map((b, i) => (
            <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-soft overflow-hidden group">
              <img src={b.img} alt={b.title} loading="lazy" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-6">
                <h3 className="font-bold text-[var(--navy)] leading-snug">{b.title}</h3>
                <p className="text-sm text-muted-foreground mt-3">{b.excerpt}</p>
                <a className="text-[var(--gold)] font-semibold text-sm mt-4 inline-flex items-center gap-1 hover:gap-2 transition-all">Read More »</a>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="btn-gold">View All Blogs</button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[var(--navy)] text-white pt-12 pb-6">
      <div className="container-ta grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-bold text-lg text-[var(--gold)]">TARGET AGILITY</div>
          <p className="mt-3 text-white/75 leading-relaxed">Accelerating the agility within you. Premium training in Agile, Scrum, SAFe & DevOps.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-white/75">
            <li className="hover:text-[var(--gold)] cursor-pointer">Courses</li>
            <li className="hover:text-[var(--gold)] cursor-pointer">Scrum Bootcamp</li>
            <li className="hover:text-[var(--gold)] cursor-pointer">Job Opportunities</li>
            <li className="hover:text-[var(--gold)] cursor-pointer">Resources</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-white/75">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 933-029-9565</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> connect@targetagility.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> India</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-3">
            <a className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--navy)] transition"><Youtube className="h-4 w-4" /></a>
            <a className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--navy)] transition"><Linkedin className="h-4 w-4" /></a>
            <a className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--navy)] transition"><MessageCircle className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="container-ta mt-8 pt-5 border-t border-white/10 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Target Agility. All rights reserved.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <Hero />
      <Stats />
      <Courses />
      <WhyUs />
      <Reviews />
      <Corporate />
      <Events />
      <Blogs />
      <Footer />
    </main>
  );
}
