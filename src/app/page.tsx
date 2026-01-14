"use client";

import React from "react";
import { 
  Users, 
  MapPin, 
  BookOpen, 
  Home, 
  Briefcase, 
  ShieldCheck, 
  ArrowRight, 
  Play,
  Heart
} from "lucide-react";
import { motion } from "framer-motion";

// --- Components ---

function Button({ 
  children, 
  variant = "primary", 
  className = "", 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "outline" }) {
  const baseStyle = "px-8 py-3 rounded-md transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-lg",
    secondary: "bg-secondary text-white hover:bg-secondary-hover shadow-sm",
    outline: "border border-primary text-primary hover:bg-primary/5",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Section({ 
  children, 
  className = "", 
  id = "" 
}: { 
  children: React.ReactNode; 
  className?: string; 
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// --- Page Content ---

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      
      {/* SECTION 1: HERO */}
      <div className="relative min-h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Background - placeholder for Medina image */}
        <div className="absolute inset-0 bg-[#1A3C34] z-0">
          <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1565552629477-ff441f77d338?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A3C34]/80 via-[#1A3C34]/60 to-[#1A3C34]/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-8 pt-20">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight mb-6">
              Medina im Herzen. <br />
              <span className="text-secondary">Saudi-Arabien als Zukunft.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto font-light">
              Eine Community für Muslime, die Hijrah ernst nehmen 
              und Verantwortung für ihre Familie und ihre Zukunft übernehmen wollen.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button variant="secondary" className="w-full sm:w-auto text-base py-4">
                Zur Community
              </Button>
              <Button variant="outline" className="w-full sm:w-auto text-base py-4 border-white text-white hover:bg-white/10">
                Mehr erfahren
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* SECTION 2: Worum es hier geht */}
      <Section className="bg-surface text-center">
        <FadeIn>
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Worum es hier geht</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Diese Plattform richtet sich an Muslime, die über eine Auswanderung
              nach Saudi-Arabien nachdenken – insbesondere nach Medina.
              Nicht als Traum, sondern als bewusste Entscheidung.
              Der Kern der Seite ist eine geschlossene Skool Community
              für Austausch, Orientierung und ehrliche Erfahrungen.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* SECTION 3: Für wen diese Community ist */}
      <Section className="bg-accent/30">
        <FadeIn>
          <h2 className="text-3xl font-serif text-primary text-center mb-16">Für wen diese Community ist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Muslime mit Vision", desc: "Die Hijrah mit Verstand, Iman und langfristiger Planung verbinden." },
              { title: "Familien", desc: "Die Verantwortung übernehmen und eine sichere Umgebung für ihre Kinder suchen." },
              { title: "Unternehmer & Profis", desc: "Selbstständige und Angestellte, die ihre Expertise in Saudi-Arabien einbringen wollen." },
              { title: "Macher", desc: "Menschen, die bauen und gestalten wollen – nicht nur fliehen." }
            ].map((item, idx) => (
              <div key={idx} className="bg-surface p-8 rounded-lg shadow-sm border border-primary/5 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-serif text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-12 text-sm italic">
            „Diese Community ist kein Ort für Panikmache oder falsche Versprechen.“
          </p>
        </FadeIn>
      </Section>

      {/* SECTION 4: Was dich erwartet */}
      <Section className="bg-surface">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6 leading-tight">
                Was dich in der <br/>Community erwartet
              </h2>
              <p className="text-muted-foreground mb-8">
                Ein strukturierter Raum für Wissen, Austausch und echte Unterstützung auf deinem Weg.
              </p>
              <Button variant="primary">
                Zugang anfragen <ArrowRight size={16} />
              </Button>
            </FadeIn>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: BookOpen, title: "Orientierung & Wissen", desc: "Ehrliche Diskussionen und klare Fakten statt Gerüchte." },
              { icon: ShieldCheck, title: "Visa & Aufenthalt", desc: "Erfahrungsbasiertes Wissen zu Iqama, Visum und Recht." },
              { icon: Home, title: "Leben in Medina", desc: "Realistische Einblicke in Wohnen, Alltag und Nachbarschaft." },
              { icon: Users, title: "Familie & Schule", desc: "Alles zu Schulen, Kindererziehung und Familienleben." },
              { icon: Briefcase, title: "Arbeit & Business", desc: "Jobmarkt, Firmengründung und Einkommensmöglichkeiten." },
              { icon: MapPin, title: "Erfahrungen vor Ort", desc: "Direkter Austausch mit Menschen, die den Weg bereits gegangen sind." },
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-accent/20 transition-colors">
                  <div className="mt-1 text-secondary">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 5: Haltung & Werte */}
      <Section className="bg-primary text-white text-center py-32">
        <FadeIn>
          <div className="max-w-3xl mx-auto space-y-8">
            <Heart size={48} className="mx-auto text-secondary mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif leading-tight">
              Hijrah ist keine Flucht. <br/>
              Hijrah ist Verantwortung.
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              Diese Community steht für Klarheit statt Illusion und Gemeinschaft statt Alleingang.
              Wir begleiten dich dabei, diesen Schritt mit Bewusstsein und Planung zu gehen.
            </p>
            <div className="pt-8">
              <span className="inline-block border-t border-secondary pt-4 text-secondary uppercase tracking-widest text-sm font-medium">
                Umrah ist Ibadah. Hijrah ist Verantwortung.
              </span>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* SECTION 6: Video Section (Placeholder) */}
      <Section className="bg-muted">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <div className="aspect-video bg-gray-200 rounded-xl shadow-lg flex items-center justify-center relative group cursor-pointer overflow-hidden mb-8">
               {/* Video Placeholder */}
               <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all"></div>
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                 <Play size={32} className="text-primary ml-1" />
               </div>
            </div>
            <p className="text-lg text-primary font-medium">
              „Ein paar Worte zur Vision dieser Community und warum Medina mehr ist als ein Ort.“
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* SECTION 7: CTA - Skool Community */}
      <Section className="bg-surface py-32">
        <FadeIn>
          <div className="max-w-4xl mx-auto bg-accent/20 rounded-2xl p-8 md:p-16 text-center border border-primary/5">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
              Teil der Community werden
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Wenn du dich ernsthaft mit dem Gedanken an Hijrah beschäftigst,
              findest du hier Austausch, Klarheit und ehrliche Erfahrungen.
            </p>
            <Button variant="primary" className="text-lg px-10 py-5 mx-auto w-full md:w-auto">
              Jetzt zur Skool Community
            </Button>
            <p className="mt-6 text-xs text-muted-foreground uppercase tracking-wider">
              Geschlossene Community · Respektvoll · Moderiert
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* SECTION 8: Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="font-serif text-2xl text-primary mb-2">Auswandern nach Medina</h3>
          <p className="text-muted-foreground mb-8">Eine Community für Muslime, die Verantwortung leben.</p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">Impressum</a>
            <a href="#" className="hover:text-primary transition-colors">Datenschutz</a>
          </div>
          <p className="mt-8 text-xs text-gray-300">© {new Date().getFullYear()} Auswandern nach Medina</p>
        </div>
      </footer>

    </main>
  );
}
