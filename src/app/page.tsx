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
  Heart,
  Star,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

function Button({ 
  children, 
  variant = "primary", 
  className = "", 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "outline" | "ghost" }) {
  const variants = {
    primary: "bg-[#1A3C34] text-[#FDFBF7] hover:bg-[#142F29] shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    secondary: "bg-[#C5A065] text-white hover:bg-[#B08D55] shadow-md hover:shadow-lg",
    outline: "border-2 border-[#1A3C34] text-[#1A3C34] hover:bg-[#1A3C34]/5",
    ghost: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20",
  };

  return (
    <button 
      className={cn(
        "px-8 py-4 rounded-xl transition-all duration-300 font-medium text-base tracking-wide flex items-center justify-center gap-2 active:scale-95",
        variants[variant],
        className
      )} 
      {...props}
    >
      {children}
    </button>
  );
}

function BentoCard({ 
  children, 
  className = "", 
  title, 
  subtitle,
  icon: Icon
}: { 
  children?: React.ReactNode; 
  className?: string;
  title?: string;
  subtitle?: string;
  icon?: React.ElementType;
}) {
  return (
    <div className={cn(
      "bg-white rounded-3xl p-8 border border-[#1A3C34]/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full",
      className
    )}>
      {(Icon || title) && (
        <div className="mb-6">
          {Icon && (
            <div className="w-12 h-12 bg-[#1A3C34]/5 rounded-2xl flex items-center justify-center text-[#1A3C34] mb-4">
              <Icon size={24} />
            </div>
          )}
          {title && <h3 className="text-xl font-serif text-[#1A3C34] font-medium">{title}</h3>}
          {subtitle && <p className="text-[#6B7C76] text-sm mt-2 leading-relaxed">{subtitle}</p>}
        </div>
      )}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={cn("py-24 px-6 md:px-12 lg:px-24", className)}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

// --- Page Content ---

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FDFBF7] selection:bg-[#C5A065] selection:text-white">
      
      {/* SECTION 1: MODERN SPLIT HERO */}
      <div className="relative min-h-[95vh] grid lg:grid-cols-2">
        {/* Left: Content */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 lg:py-0 order-2 lg:order-1 z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A3C34]/5 text-[#1A3C34] text-sm font-medium mb-8 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A065] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A065]"></span>
              </span>
              Community für bewusste Hijrah
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-[#1A3C34] mb-8">
              Medina im Herzen.<br/>
              <span className="text-[#C5A065] italic">Zukunft</span> in der Hand.
            </h1>
            
            <p className="text-xl text-[#6B7C76] leading-relaxed max-w-xl mb-10 font-light">
              Keine Flucht, sondern ein geplanter Aufbruch. 
              Tritt der exklusiven Skool-Community für Muslime bei, die Verantwortung übernehmen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="w-full sm:w-auto">
                Zur Community beitreten
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Mehr erfahren
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm text-[#6B7C76]">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#FDFBF7] bg-gray-200 flex items-center justify-center text-xs overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Avatar" />
                  </div>
                ))}
              </div>
              <p>Bereits 500+ Mitglieder</p>
            </div>
          </FadeIn>
        </div>

        {/* Right: Visual */}
        <div className="relative h-[50vh] lg:h-auto order-1 lg:order-2 overflow-hidden bg-[#1A3C34]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565552629477-ff441f77d338?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34] via-transparent to-transparent lg:bg-gradient-to-l"></div>
          
          {/* Floating Glass Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-12 left-12 right-12 lg:bottom-24 lg:left-24 lg:right-auto lg:w-80 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl text-white hidden md:block"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#C5A065] rounded-xl">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-300 uppercase tracking-wider mb-1">Nächstes Ziel</p>
                <p className="font-serif text-xl">Al Madinah</p>
                <p className="text-sm text-gray-300 mt-2">"Der beste Ort für diejenigen, die Ruhe suchen."</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SECTION 2: BENTO GRID FEATURES */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif text-[#1A3C34] mb-6">Alles für deinen Weg.</h2>
            <p className="text-lg text-[#6B7C76]">
              Struktur, Wissen und Netzwerk. Wir haben die Community so aufgebaut, 
              dass sie dir echte Antworten auf echte Fragen gibt.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {/* Large Card - Community */}
          <FadeIn className="md:col-span-2 md:row-span-2 h-full">
            <BentoCard 
              className="bg-[#1A3C34] text-[#FDFBF7] border-none"
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-[#C5A065]">
                    <Users size={24} />
                  </div>
                  <h3 className="text-3xl font-serif mb-4">Das Netzwerk</h3>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                    Triff Familien, Unternehmer und Experten, die bereits vor Ort sind. 
                    Keine Theorie, sondern gelebte Praxis aus Medina.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <p className="text-2xl font-bold text-[#C5A065] mb-1">24/7</p>
                    <p className="text-xs text-gray-400">Austausch</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <p className="text-2xl font-bold text-[#C5A065] mb-1">100%</p>
                    <p className="text-xs text-gray-400">Authentisch</p>
                  </div>
                </div>
              </div>
            </BentoCard>
          </FadeIn>

          {/* Tall Card - Responsibility */}
          <FadeIn className="md:row-span-2 h-full">
            <BentoCard 
              title="Verantwortung" 
              subtitle="Hijrah ist kein Urlaub. Wir fokussieren uns auf Visa, Arbeit und langfristige Sicherheit."
              icon={ShieldCheck}
              className="bg-[#F3F1EB]"
            >
               <div className="mt-6 space-y-4">
                 {['Visum & Iqama', 'Immobilienmarkt', 'Schulsystem', 'Krankenversicherung'].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                     <CheckCircle2 size={16} className="text-[#C5A065]" />
                     <span className="text-sm font-medium text-[#1A3C34]">{item}</span>
                   </div>
                 ))}
               </div>
            </BentoCard>
          </FadeIn>

          {/* Wide Card - Vision */}
          <FadeIn className="md:col-span-2 h-full">
             <BentoCard 
               className="flex flex-row items-center gap-8 relative overflow-hidden group"
             >
                <div className="flex-1 relative z-10">
                  <h3 className="text-xl font-serif text-[#1A3C34] font-medium mb-2">Für Macher & Visionäre</h3>
                  <p className="text-[#6B7C76] text-sm leading-relaxed">
                    Ob du remote arbeitest, ein Business gründest oder eine Anstellung suchst – 
                    hier findest du Wege, deinen Lebensunterhalt halal zu sichern.
                  </p>
                </div>
                <div className="hidden sm:block w-32 h-32 bg-[#C5A065]/10 rounded-full absolute -right-10 -bottom-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10 bg-[#FDFBF7] p-4 rounded-full border border-[#1A3C34]/10 text-[#1A3C34]">
                   <Briefcase size={28} />
                </div>
             </BentoCard>
          </FadeIn>

           {/* Small Card - Education */}
           <FadeIn className="h-full">
            <BentoCard 
              title="Wissen" 
              icon={BookOpen}
              className="bg-white"
            >
              <p className="text-sm text-[#6B7C76]">Zugang zu Guides, Checklisten und Experten-Webinaren.</p>
            </BentoCard>
          </FadeIn>
        </div>
      </Section>

      {/* SECTION 3: TESTIMONIALS / QUOTE (Glassmorphism Style) */}
      <Section className="bg-[#1A3C34] relative overflow-hidden py-32">
         {/* Background decoration */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
           <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#C5A065] rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#2C5F52] rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>
         </div>

         <div className="relative z-10 max-w-4xl mx-auto text-center">
           <FadeIn>
             <div className="inline-block p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
               <Star className="text-[#C5A065] fill-[#C5A065]" size={24} />
             </div>
             <blockquote className="text-3xl md:text-5xl font-serif text-white leading-tight mb-8">
               "Diese Community ist kein Ort für Panikmache oder falsche Versprechen. Sie ist ein Anker für Realismus."
             </blockquote>
             <cite className="text-[#C5A065] not-italic font-medium tracking-wide uppercase text-sm">
               — Aus dem Community Manifest
             </cite>
           </FadeIn>
         </div>
      </Section>

      {/* SECTION 4: CTA CARD */}
      <Section>
        <FadeIn>
          <div className="bg-[#F3F1EB] rounded-[3rem] p-8 md:p-20 text-center border border-[#1A3C34]/5 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif text-[#1A3C34] mb-6">
                Bereit für den nächsten Schritt?
              </h2>
              <p className="text-lg text-[#6B7C76] mb-10">
                Werde Teil einer Bewegung von Muslimen, die ihre Zukunft aktiv gestalten.
                Sicher, strukturiert und gemeinsam.
              </p>
              <Button className="w-full sm:w-auto mx-auto text-lg px-12 py-5 shadow-2xl shadow-[#1A3C34]/20">
                Jetzt Zugang anfragen
              </Button>
              <p className="mt-8 text-xs text-[#6B7C76] uppercase tracking-wider">
                Exklusiver Zugang via Skool
              </p>
            </div>
            
            {/* Decoration Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#C5A065] rounded-full mix-blend-multiply filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>
          </div>
        </FadeIn>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-[#1A3C34]/10 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl text-[#1A3C34] font-bold">Auswandern nach Medina</h3>
            <p className="text-sm text-[#6B7C76] mt-1">Verantwortung leben.</p>
          </div>
          <div className="flex gap-8 text-sm text-[#6B7C76]">
            <a href="#" className="hover:text-[#1A3C34] transition-colors">Impressum</a>
            <a href="#" className="hover:text-[#1A3C34] transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-[#1A3C34] transition-colors">Login</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
