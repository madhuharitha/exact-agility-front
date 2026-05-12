import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Phone, Mail, Youtube, Linkedin, MessageCircle, ChevronDown,
  Calendar, ArrowRight, Star, Users, Briefcase, Award, GraduationCap, ChevronLeft, ChevronRight,
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
      <div className="container-ta flex items-center justify-between py-3 flex-wrap gap-2">
        <div className="flex items-center gap-8 flex-wrap">
          <span className="flex items-center gap-2"><Phone className="h-4 w-4" />+91 933-029-9565</span>
          <span className="flex items-center gap-2"><Mail className="h-4 w-4" />connect@targetagility.com</span>
        </div>
        <div className="flex items-center gap-5">
          <Youtube className="h-5 w-5 cursor-pointer hover:text-[var(--gold)]" />
          <MessageCircle className="h-5 w-5 cursor-pointer hover:text-[var(--gold)]" />
          <Linkedin className="h-5 w-5 cursor-pointer hover:text-[var(--gold)]" />
          <a href="#contact" className="btn-gold-sm ml-2">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <a href="#" className="flex flex-col items-center gap-1">
      <svg viewBox="0 0 60 50" className="h-12 w-14">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22c2d6" />
            <stop offset="40%" stopColor="#f5a623" />
            <stop offset="100%" stopColor="#c0399f" />
          </linearGradient>
        </defs>
        <path d="M30 4 L56 46 L4 46 Z" fill="none" stroke="url(#lg)" strokeWidth="5" strokeLinejoin="round" />
        <path d="M22 30 L30 14 L38 30" fill="none" stroke="url(#lg)" strokeWidth="4" strokeLinejoin="round" />
      </svg>
      <div className="leading-tight text-center">
        <div className="font-bold text-[var(--navy)] text-[11px] tracking-[0.2em]">TARGET AGILITY</div>
        <div className="text-[8px] text-muted-foreground -mt-0.5 italic">Accelerating the agility within you!</div>
      </div>
    </a>
  );
}

function Navbar() {
  const links = ["Courses", "Scrum Bootcamp", "Job Opportunities", "Referral program", "Resources", "Career Connects"];
  const hasDropdown = new Set(["Courses", "Resources", "Career Connects"]);
  return (
    <nav className="bg-white sticky top-0 z-40 shadow-[0_2px_10px_rgba(13,27,61,0.06)]">
      <div className="container-ta flex items-center justify-between h-24">
        <Logo />
        <ul className="hidden lg:flex items-center gap-9">
          {links.map(l => (
            <li key={l} className="text-[15px] font-semibold text-[var(--navy)] hover:text-[var(--gold)] cursor-pointer flex items-center gap-1">
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
    <section className="relative overflow-hidden bg-[#fafbfc]">
      <div className="container-ta relative grid lg:grid-cols-2 gap-14 items-center py-20 lg:py-28">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="space-y-10">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-[var(--navy)] leading-[1.15] tracking-tight">
            Ready to level up your career?<br />Let's make it happen!
          </h1>
          <div className="space-y-6">
            {cards.map((c) => (
              <div key={c.title} className="card-soft flex items-center gap-6 p-6 hover:-translate-y-0.5 transition-transform">
                <div className={`h-24 w-24 shrink-0 rounded-full bg-gradient-to-br ${c.color} grid place-items-center text-white text-xs font-bold text-center px-2 shadow-lg`}>{c.abbr}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-[var(--navy)] text-xl">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">Next Batch on: {c.date}</p>
                  <button className="btn-gold-sm mt-4">Click here</button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
          <div aria-hidden className="absolute inset-0 -z-0 grid place-items-center">
            <div className="h-[420px] w-[420px] rounded-full bg-[var(--gold)]" />
          </div>
          <div aria-hidden className="absolute right-0 bottom-0 -z-0 h-[70%] w-[80%] bg-[var(--navy)]" style={{ clipPath: "polygon(20% 100%, 100% 0, 100% 100%)" }} />
          <img src={heroImg} alt="Career growth" className="relative w-full max-w-[560px] mx-auto" width={1024} height={1024} />
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { n: "4,500+", l: "Students Trained" },
    { n: "5", l: "Rated on Trustpilot" },
    { n: "30+", l: "Companies trained" },
    { n: "300+", l: "Trainings Delivered" },
  ];
  return (
    <section className="bg-[var(--soft-blue)] py-16">
      <div className="container-ta grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div key={s.l} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-xl bg-[var(--navy)] text-white py-12 text-center shadow-[0_10px_30px_rgba(13,27,61,0.18)]">
            <div className="text-5xl font-bold text-[var(--gold)]">{s.n}</div>
            <div className="text-base mt-3 text-[var(--gold)]/95">{s.l}</div>
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
    <section className="py-24 bg-[#fafbfc]">
      <div className="container-ta">
        <div className="text-center mb-14">
          <p className="text-[var(--navy)] font-semibold text-base">Courses</p>
          <h2 className="h-section mt-3">Most In-Demand Courses</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {courses.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="rounded-2xl bg-[var(--soft-blue)] overflow-hidden group ring-1 ring-black/5">
              <div className="relative p-3">
                <img src={c.img} alt={c.title} loading="lazy" className="w-full h-48 object-cover rounded-lg group-hover:scale-[1.02] transition-transform duration-500" />
                <span className="absolute top-5 left-5 inline-block rounded-md bg-orange-500 px-3 py-1 text-[11px] font-semibold text-white">{c.tag}</span>
              </div>
              <div className="p-5 pt-2">
                <h3 className="font-bold text-[var(--navy)] text-lg leading-snug min-h-[56px]">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 flex items-center gap-2"><Calendar className="h-4 w-4" />Next Batch Starts on: {c.date}</p>
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
    { icon: Users, text: "Experience the ongoing advantages of our esteemed alumni community by joining us." },
    { icon: GraduationCap, text: "Join Target Agility to extend your benefits beyond course completion." },
    { icon: Award, text: "Exclusive webinars featuring tips on job search and interview preparation." },
    { icon: Briefcase, text: "Target Agility Alumni receive exclusive benefits, including access to Agile job openings." },
  ];
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container-ta relative grid lg:grid-cols-2 gap-14 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center lg:text-left">
          <p className="text-[var(--navy)] font-semibold text-base">About Target Agility</p>
          <h2 className="h-section mt-3">Why Choose Us?</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
            At Target Agility, we take pride in our journey and the achievements that define us as a leading company in our field. Our commitment to excellence and innovation has propelled us to reach several significant milestones over the years.
          </p>
          <button className="btn-gold mt-8">Know More</button>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl bg-[var(--soft-blue)] p-7 text-center">
                <div className="h-14 w-14 rounded-full bg-[var(--navy)] grid place-items-center mx-auto">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <p className="mt-5 text-[var(--navy)] font-semibold text-[15px] leading-relaxed">{b.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ReferEarn() {
  return (
    <section className="py-12 bg-[#fafbfc]">
      <div className="container-ta">
        <div className="rounded-2xl bg-[var(--navy)] overflow-hidden grid md:grid-cols-2 items-center">
          <div className="relative h-64 md:h-72">
            <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&h=600&fit=crop" alt="Refer" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="p-10">
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--gold)]">Refer &amp; Earn</h3>
            <p className="mt-4 text-white/85 leading-relaxed">The more you refer, the more you earn! Get Rs 1000/- every time you refer a person.</p>
            <button className="btn-gold mt-6">Refer now</button>
          </div>
        </div>
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
    <section className="py-24 bg-[#f5f5f5]">
      <div className="container-ta">
        <div className="text-center mb-14">
          <p className="text-[#3b82f6] font-semibold uppercase tracking-widest text-sm">Reviews</p>
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
    <section className="relative py-28 text-white overflow-hidden">
      <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&h=900&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[var(--navy)]/75" />
      <div className="container-ta relative">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold">Corporate Training</h2>
          <p className="mt-5 text-white/90 leading-relaxed text-lg">
            Utilize Our Customized Corporate Training Programs for AgileScrum, SAFe, and DevOps to Maintain a Competitive Edge and Achieve Success in the Digital Era.
          </p>
          <button className="mt-8 inline-flex items-center justify-center rounded-md bg-red-600 hover:bg-red-700 px-10 py-4 text-base font-semibold text-white shadow-lg transition">
            Connect with us
          </button>
        </motion.div>
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
    <section className="py-24 bg-[#fafbfc] relative">
      <div className="container-ta">
        <div className="text-center mb-14">
          <p className="text-[var(--navy)] font-semibold text-base">Events</p>
          <h2 className="h-section mt-3">Register for your next event</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-7 relative">
          <button aria-label="prev" className="hidden md:grid place-items-center absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-md bg-[var(--gold)]/30 hover:bg-[var(--gold)] text-[var(--navy)] z-10"><ChevronLeft className="h-5 w-5" /></button>
          <button aria-label="next" className="hidden md:grid place-items-center absolute -right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-md bg-[var(--gold)]/30 hover:bg-[var(--gold)] text-[var(--navy)] z-10"><ChevronRight className="h-5 w-5" /></button>
          {events.map((e, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-2xl bg-[var(--soft-blue)] overflow-hidden p-4">
              <img src={e.img} alt={e.title} loading="lazy" className="w-full h-56 object-cover rounded-lg" />
              <div className="p-4">
                <h3 className="font-bold text-[var(--navy)] text-lg text-center">{e.title}</h3>
                <ul className="mt-4 space-y-2 text-center">
                  {e.bullets.map((b, k) => (
                    <li key={k} className="text-sm text-muted-foreground">{b}</li>
                  ))}
                </ul>
                <div className="text-center">
                  <button className="btn-gold-sm mt-5 inline-flex gap-2">Read More<ArrowRight className="h-3.5 w-3.5" /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
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
    <section className="py-24 bg-[#f5f5f5] relative">
      <div className="container-ta">
        <div className="text-center mb-14">
          <h2 className="h-section">Read Our latest Blogs</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 relative">
          <button aria-label="prev" className="hidden md:grid place-items-center absolute -left-8 top-1/2 -translate-y-1/2 text-[var(--navy)]/60 hover:text-[var(--navy)] z-10"><ChevronLeft className="h-6 w-6" /></button>
          <button aria-label="next" className="hidden md:grid place-items-center absolute -right-8 top-1/2 -translate-y-1/2 text-[var(--navy)]/60 hover:text-[var(--navy)] z-10"><ChevronRight className="h-6 w-6" /></button>
          {blogs.map((b, i) => (
            <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl bg-white shadow-[0_10px_30px_-12px_rgba(13,27,61,0.18)] overflow-hidden group">
              <div className="relative">
                <img src={b.img} alt={b.title} loading="lazy" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-3 left-4 right-4 font-bold text-white text-lg leading-tight">{b.title}</h3>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[var(--navy)] leading-snug">{b.title}</h3>
                <p className="text-sm text-muted-foreground mt-3">{b.excerpt}</p>
                <a className="text-[var(--navy)] underline font-medium text-sm mt-4 inline-flex items-center gap-1 cursor-pointer">Read More »</a>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="btn-gold">View All Blogs</button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact">
      <div className="bg-white py-10">
        <div className="container-ta flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo />
          <div className="flex gap-3">
            <a className="h-10 w-10 grid place-items-center rounded-full bg-red-600 text-white"><Youtube className="h-5 w-5" /></a>
            <a className="h-10 w-10 grid place-items-center rounded-full bg-green-500 text-white"><MessageCircle className="h-5 w-5" /></a>
            <a className="h-10 w-10 grid place-items-center rounded-full bg-blue-600 text-white"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="bg-[var(--navy)] text-white py-5 text-sm">
        <div className="container-ta flex flex-col md:flex-row items-center justify-between gap-3">
          <p>Copyright © 2024. Target Agility. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-2 gap-y-1 justify-center">
            <a className="underline hover:text-[var(--gold)] cursor-pointer">Contact Us</a><span>|</span>
            <a className="underline hover:text-[var(--gold)] cursor-pointer">Privacy Policy</a><span>|</span>
            <a className="underline hover:text-[var(--gold)] cursor-pointer">Return, refund, &amp; cancellation</a><span>|</span>
            <a className="underline hover:text-[var(--gold)] cursor-pointer">Refer and earn</a><span>|</span>
            <a className="underline hover:text-[var(--gold)] cursor-pointer">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingButtons() {
  return (
    <>
      <a aria-label="WhatsApp" className="fixed bottom-5 left-5 z-50 h-12 w-12 grid place-items-center rounded-md bg-green-500 text-white shadow-lg hover:scale-105 transition cursor-pointer">
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
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
      <ReferEarn />
      <Reviews />
      <Corporate />
      <Events />
      <Blogs />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
