import heroImg from "@/assets/hero-escoras.jpeg";
import logoMultiloc from "@/assets/logo-multiloc.png";
import escorasImg from "@/assets/hero-escoras.jpeg";
import vigasImg from "@/assets/vigas.jpeg";
import fachadeiroImg from "@/assets/fachadeiro.jpeg";
import {
  Construction,
  Wrench,
  Truck,
  Headphones,
  ShieldCheck,
  Zap,
  CheckCircle2,
  MessageCircle,
  Phone,
  ArrowRight,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5571996616519?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const equipamentosLista = [
  "Escoras 3,20m | 4m | 4,50m",
  "Andaimes comuns 1,5m | 1m",
  "Pisos para andaimes",
  "Andaimes fachadeiros",
  "Pisos para fachadeiros",
  "Vigas metálicas",
  "Barras de ancoragem",
  "Forcados simples e duplos",
  "Sapatas",
  "Roldanas",
  "Betoneiras",
];

const equipamentosDestaque = [
  { img: escorasImg, title: "Escoras Metálicas", desc: "Disponíveis em 3,20m, 4m e 4,50m" },
  { img: vigasImg, title: "Vigas Metálicas", desc: "Resistência e durabilidade para sua obra" },
  { img: fachadeiroImg, title: "Andaimes Fachadeiros", desc: "Estrutura segura para fachadas" },
];

const beneficios = [
  { icon: Zap, title: "Atendimento rápido", desc: "Resposta ágil para sua demanda" },
  { icon: ShieldCheck, title: "Equipamentos de qualidade", desc: "Segurança e durabilidade" },
  { icon: Construction, title: "Segurança para sua obra", desc: "Equipamentos revisados" },
  { icon: Truck, title: "Agilidade na entrega", desc: "Logística eficiente" },
  { icon: Headphones, title: "Suporte na locação", desc: "Acompanhamento completo" },
  { icon: Wrench, title: "Soluções sob medida", desc: "Para diferentes demandas" },
];

const passos = [
  { n: "01", title: "Entre em contato", desc: "Fale com nossa equipe pelo WhatsApp e informe sua necessidade." },
  { n: "02", title: "Receba seu orçamento", desc: "Analisamos sua demanda e enviamos uma proposta rápida." },
  { n: "03", title: "Retirada dos equipamentos", desc: "O cliente realiza a retirada dos equipamentos diretamente no local, de forma rápida e prática." },
  { n: "04", title: "Suporte na locação", desc: "Acompanhamos sua demanda para garantir mais segurança." },
];

function WhatsAppButton({ children, size = "md" }: { children: React.ReactNode; size?: "md" | "lg" }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-md bg-accent text-accent-foreground font-semibold transition-all hover:scale-105 hover:shadow-glow ${
        size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base"
      }`}
    >
      <MessageCircle className="h-5 w-5" />
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-primary">
              <Construction className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl tracking-wider text-primary">MULTILOC</span>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#sobre" className="text-sm text-muted-foreground hover:text-primary transition">Quem somos</a>
            <a href="#equipamentos" className="text-sm text-muted-foreground hover:text-primary transition">Equipamentos</a>
            <a href="#processo" className="text-sm text-muted-foreground hover:text-primary transition">Como funciona</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold hover:scale-105 transition"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Orçamento</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <img
          src={heroImg}
          alt="Escoras metálicas Multiloc"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 text-sm text-accent-foreground backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-white">Locação para construção civil</span>
            </div>
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-white md:text-7xl">
              Sua obra<br />
              <span className="text-accent">em movimento.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/90 md:text-xl">
              Locação de escoras, andaimes, vigas metálicas e betoneiras.
              Atendemos obras de pequeno, médio e grande porte com agilidade e qualidade.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <WhatsAppButton size="lg">Solicite seu orçamento</WhatsAppButton>
              <a href="#equipamentos" className="inline-flex items-center gap-2 px-6 py-4 text-base font-medium text-white hover:text-accent transition">
                Ver equipamentos <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-6 text-sm text-white/80">
              {["Escoras", "Andaimes", "Vigas metálicas", "Betoneiras"].map((t) => (
                <span key={t} className="border-l-2 border-accent pl-3">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quem somos */}
      <section id="sobre" className="border-y border-border bg-card py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent font-semibold">Quem somos</p>
            <h2 className="font-display text-4xl text-primary md:text-5xl">
              Equipamentos<br />
              <span className="text-accent">que sustentam</span><br />
              grandes obras.
            </h2>
          </div>
          <div className="space-y-5 text-lg text-foreground/80">
            <p>
              A <strong className="text-primary">Multiloc</strong> é especializada na locação
              de equipamentos para construção civil, oferecendo soluções práticas e seguras
              para obras e reformas.
            </p>
            <p>
              Nosso compromisso é entregar equipamentos de qualidade com atendimento rápido,
              ajudando nossos clientes a manter suas obras funcionando com eficiência e segurança.
            </p>
            <p>
              Trabalhamos com foco em <strong className="text-primary">agilidade, suporte e confiança</strong>,
              atendendo diferentes tipos de demandas da construção.
            </p>
          </div>
        </div>
      </section>

      {/* Equipamentos */}
      <section id="equipamentos" className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent font-semibold">Nossos equipamentos</p>
            <h2 className="font-display text-4xl text-primary md:text-5xl">Tudo o que sua obra precisa.</h2>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {equipamentosDestaque.map((eq) => (
              <div
                key={eq.title}
                className="group overflow-hidden rounded-lg border border-border bg-card transition hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={eq.img}
                    alt={eq.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-primary">{eq.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{eq.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-border bg-card p-8">
            <h3 className="mb-6 font-display text-2xl text-primary">Linha completa de equipamentos</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {equipamentosLista.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-md border border-border bg-background px-4 py-3 transition hover:border-accent"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="border-y border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent font-semibold">Por que Multiloc</p>
            <h2 className="font-display text-4xl text-primary md:text-5xl">Confiança que constrói.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {beneficios.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-lg border border-border bg-background p-8 transition hover:border-accent hover:-translate-y-1"
                style={{ transition: "all 0.3s ease" }}
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-xl text-primary">{title}</h3>
                <p className="text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="processo" className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent font-semibold">Como funciona</p>
            <h2 className="font-display text-4xl text-primary md:text-5xl">Simples, rápido e seguro.</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {passos.map((p) => (
              <div key={p.n} className="bg-card p-8 transition hover:bg-secondary">
                <div className="mb-6 font-display text-5xl text-accent">{p.n}</div>
                <h3 className="mb-2 font-display text-xl text-primary">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atendimento */}
      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent font-semibold">Atendimento</p>
          <h2 className="font-display text-3xl text-primary md:text-5xl">
            Atendemos obras, reformas e projetos<br />de diferentes portes.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { icon: "📦", title: "Equipamentos prontos", desc: "Para sua obra" },
              { icon: "🚧", title: "Atendimento ágil", desc: "Sem complicações" },
              { icon: "📲", title: "Suporte WhatsApp", desc: "Resposta rápida" },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-background p-6">
                <div className="mb-3 text-4xl">{item.icon}</div>
                <h3 className="font-display text-lg text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="border-t border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent font-semibold">Prova social</p>
            <h2 className="font-display text-4xl text-primary md:text-5xl">Quem confia na Multiloc.</h2>
          </div>

          <div className="mb-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              { num: "+500", label: "Obras atendidas" },
              { num: "+10", label: "Anos de experiência" },
              { num: "98%", label: "Clientes satisfeitos" },
              { num: "24h", label: "Resposta no WhatsApp" },
            ].map((s) => (
              <div key={s.label} className="bg-card p-8 text-center">
                <div className="font-display text-4xl text-accent md:text-5xl">{s.num}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Carlos Mendes", role: "Engenheiro Civil", text: "Atendimento excelente e equipamentos sempre em ótimo estado. A Multiloc tem sido parceira em todas as nossas obras." },
              { name: "Juliana Souza", role: "Construtora JS", text: "Agilidade na resposta e preço justo. Nunca tive problema com nenhum equipamento alugado. Recomendo!" },
              { name: "Roberto Lima", role: "Mestre de obras", text: "Escoras e andaimes de qualidade, entrega rápida e suporte sempre disponível pelo WhatsApp. Top demais." },
            ].map((t) => (
              <div key={t.name} className="rounded-lg border border-border bg-card p-6" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="mb-3 flex gap-1 text-accent">
                  {"★★★★★".split("").map((s, i) => (<span key={i}>{s}</span>))}
                </div>
                <p className="mb-5 text-sm leading-relaxed text-foreground/80">"{t.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-display text-base text-primary">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative overflow-hidden bg-primary py-24">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl leading-tight text-white md:text-6xl">
            Precisa de equipamentos<br />para sua obra?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
            Fale agora com nossa equipe e solicite seu orçamento de forma rápida e prática.
          </p>
          <div className="mt-10">
            <WhatsAppButton size="lg">Chamar no WhatsApp</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <img src={logoMultiloc} alt="Multiloc" className="h-10 w-auto" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Multiloc · Locação de equipamentos para construção civil
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary hover:text-accent transition"
          >
            (71) 99661-6519
          </a>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chamar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg hover:scale-110 transition"
        style={{ boxShadow: "var(--shadow-glow)" }}
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
