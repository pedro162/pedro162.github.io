import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Braces, Check, ChevronDown, Cloud, Code2, ExternalLink, Globe2, Layers3, Linkedin, Mail, Menu, Monitor, Smartphone, Workflow, X } from 'lucide-react';

type Language = 'pt' | 'en';
const links = {
  email: 'mailto:pedro.aguiar.dev@gmail.com?subject=Software%20Development%20Inquiry',
  whatsapp: 'https://wa.me/5598984257623?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto%20de%20software.',
  github: 'https://github.com/pedro162',
  linkedin: 'https://www.linkedin.com/in/pedro-aguiar-92000a176/',
};
const content = {
  pt: {
    nav: ['Início', 'Serviços', 'Projetos', 'Sobre', 'Contato'],
    availability: 'ABERTO A PROJETOS E PARCERIAS',
    eyebrow: 'ENGENHARIA DE SOFTWARE · SOLUÇÕES DIGITAIS',
    hero: 'Tecnologia sólida para negócios que querem ir mais longe.',
    description: 'Desenvolvo sistemas empresariais, APIs, integrações, aplicações web e mobile com foco em qualidade, escalabilidade e resultados reais.',
    cta: 'Fale sobre seu projeto',
    explore: 'Explorar projetos',
    trust: 'EXPERIÊNCIA EM ENGENHARIA DE SOFTWARE DESDE 2017',
    stat1: 'Desde 2017', stat1Sub: 'Desenvolvimento de software',
    stat2: 'Backend & Full Stack', stat2Sub: 'Soluções de ponta a ponta',
    stat3: 'Engenharia aplicada', stat3Sub: 'Arquitetura, qualidade e integração',
    serviceKicker: 'O QUE POSSO FAZER POR VOCÊ',
    serviceTitle: 'Da ideia à solução pronta para evoluir.',
    serviceDescription: 'Projetos sob medida, com decisões técnicas alinhadas às necessidades do seu negócio.',
    services: [
      { title: 'Sistemas personalizados', description: 'Sistemas de gestão, backoffices, fluxos operacionais e ferramentas internas que simplificam processos.', points: ['Gestão operacional', 'Plataformas empresariais'] },
      { title: 'Sites e aplicações web', description: 'Experiências web rápidas, responsivas e orientadas a conversão e usabilidade.', points: ['Sites institucionais', 'Aplicações e dashboards'] },
      { title: 'Aplicativos mobile', description: 'Experiências móveis conectadas a sistemas e APIs, para equipes e clientes.', points: ['React Native', 'Integração com backend'] },
      { title: 'APIs e integrações', description: 'Conecte CRMs, ERPs e serviços, automatize operações e reduza trabalho manual.', points: ['REST APIs & webhooks', 'Mensageria e automação'] },
      { title: 'Arquitetura e modernização', description: 'Evolua sistemas existentes, melhore manutenibilidade e prepare sua operação para crescer.', points: ['Refatoração e DDD', 'Testes e segurança'] },
      { title: 'Cloud e observabilidade', description: 'Infraestrutura, deploys, monitoramento e boas práticas para serviços mais confiáveis.', points: ['Docker e AWS', 'Métricas e CI/CD'] },
    ],
    projectsKicker: 'TRABALHOS SELECIONADOS',
    projectsTitle: 'Engenharia demonstrada na prática.',
    projectsDescription: 'Projetos pessoais e laboratórios técnicos públicos. Alguns estão em evolução e não representam produtos comerciais finalizados.',
    projects: [
      { tag: 'LARAVEL · DDD · API', title: 'Work Order Management', desc: 'API de ordens de serviço com separação entre domínio, aplicação e infraestrutura; entidades e fluxos operacionais.', state: 'Em desenvolvimento', url: 'https://github.com/pedro162/work_order' },
      { tag: 'REACT · BUSINESS SOFTWARE', title: 'Aesthetic Clinic System', desc: 'Interface de gestão para negócios de serviços, com dashboards, contas a receber, movimentações e filiais.', state: 'Projeto demonstrativo', url: 'https://github.com/pedro162/clinica_estetica' },
      { tag: 'DOCKER · GRAFANA · PROMETHEUS', title: 'Observability Lab', desc: 'Ambiente de estudo para coleta e visualização de métricas de aplicações, com infraestrutura conteinerizada.', state: 'Laboratório técnico', url: 'https://github.com/pedro162/observability_prometheus_grafana' },
    ],
    viewRepository: 'Ver repositório',
    allProjects: 'Mais projetos no GitHub',
    aboutKicker: 'QUEM ESTÁ POR TRÁS DO CÓDIGO',
    aboutTitle: 'Experiência técnica com visão de negócio.',
    about1: 'Sou Pedro Aguiar, engenheiro de software sênior brasileiro, atuando profissionalmente com desenvolvimento desde 2017. Meu foco está em backend, sistemas distribuídos, integração de plataformas e evolução de sistemas empresariais.',
    about2: 'Trabalho principalmente com PHP, Laravel e Python, além de tecnologias frontend, bancos de dados, mensageria, cloud e práticas de engenharia. Acredito em soluções pragmáticas, seguras e fáceis de manter.',
    approachTitle: 'Como trabalho',
    approach: ['Entender a necessidade', 'Desenhar a solução', 'Desenvolver e validar', 'Entregar e evoluir'],
    partnerships: 'Também colaboro com agências, startups e equipes técnicas que precisam de um parceiro de engenharia.',
    contactKicker: 'VAMOS CONSTRUIR ALGO',
    contactTitle: 'Seu próximo projeto começa com uma conversa.',
    contactText: 'Precisa desenvolver um sistema, modernizar uma aplicação ou encontrar um parceiro técnico? Conte sobre o desafio e vamos avaliar os próximos passos.',
    contactButton: 'Conversar pelo WhatsApp',
    contactEmail: 'Enviar e-mail',
    footerNote: 'Perfil profissional independente. Uma futura marca empresarial será apresentada separadamente.',
    rights: 'Todos os direitos reservados.',
    skip: 'Ir para o conteúdo',
    menuOpen: 'Abrir menu', menuClose: 'Fechar menu',
  },
  en: {
    nav: ['Home', 'Services', 'Projects', 'About', 'Contact'],
    availability: 'OPEN TO PROJECTS & PARTNERSHIPS',
    eyebrow: 'SOFTWARE ENGINEERING · DIGITAL SOLUTIONS',
    hero: 'Reliable technology for businesses moving forward.',
    description: 'I build business software, APIs, integrations, web and mobile applications with a focus on quality, scalability, and real business outcomes.',
    cta: 'Discuss your project',
    explore: 'Explore projects',
    trust: 'PROFESSIONAL SOFTWARE EXPERIENCE SINCE 2017',
    stat1: 'Since 2017', stat1Sub: 'Software development',
    stat2: 'Backend & Full Stack', stat2Sub: 'End-to-end solutions',
    stat3: 'Engineering mindset', stat3Sub: 'Architecture, quality & integration',
    serviceKicker: 'HOW I CAN HELP',
    serviceTitle: 'From idea to software built to evolve.',
    serviceDescription: 'Tailored development with technical decisions aligned to your business needs.',
    services: [
      { title: 'Custom business software', description: 'Management systems, back offices, workflows, and internal tools that simplify operations.', points: ['Operational management', 'Enterprise platforms'] },
      { title: 'Websites & web apps', description: 'Fast, responsive web experiences focused on usability and conversion.', points: ['Business websites', 'Apps and dashboards'] },
      { title: 'Mobile applications', description: 'Mobile experiences integrated with your systems and APIs, for customers and teams.', points: ['React Native', 'Backend integrations'] },
      { title: 'APIs & integrations', description: 'Connect CRMs, ERPs, and services to automate workflows and reduce manual work.', points: ['REST APIs & webhooks', 'Messaging & automation'] },
      { title: 'Architecture & modernization', description: 'Improve existing systems, maintainability, and readiness for growth.', points: ['Refactoring & DDD', 'Testing & security'] },
      { title: 'Cloud & observability', description: 'Infrastructure, deployment, monitoring, and practices for dependable services.', points: ['Docker & AWS', 'Metrics & CI/CD'] },
    ],
    projectsKicker: 'SELECTED WORK',
    projectsTitle: 'Engineering put into practice.',
    projectsDescription: 'Public personal projects and technical labs. Some are works in progress, not finished commercial products.',
    projects: [
      { tag: 'LARAVEL · DDD · API', title: 'Work Order Management', desc: 'Work order API with domain, application, and infrastructure layers, plus entities and business workflows.', state: 'In development', url: 'https://github.com/pedro162/work_order' },
      { tag: 'REACT · BUSINESS SOFTWARE', title: 'Aesthetic Clinic System', desc: 'Management interface for service businesses with dashboards, receivables, transactions, and branches.', state: 'Portfolio project', url: 'https://github.com/pedro162/clinica_estetica' },
      { tag: 'DOCKER · GRAFANA · PROMETHEUS', title: 'Observability Lab', desc: 'Study environment for collecting and visualizing application metrics with containerized infrastructure.', state: 'Technical lab', url: 'https://github.com/pedro162/observability_prometheus_grafana' },
    ],
    viewRepository: 'View repository',
    allProjects: 'More projects on GitHub',
    aboutKicker: 'BEHIND THE CODE',
    aboutTitle: 'Technical expertise with a business perspective.',
    about1: "I'm Pedro Aguiar, a Brazilian Senior Software Engineer with professional development experience since 2017. I focus on backend systems, distributed software, platform integrations, and enterprise modernization.",
    about2: 'My main stack includes PHP, Laravel, and Python, complemented by frontend technologies, databases, messaging, cloud, and engineering practices. I value pragmatic, secure, maintainable solutions.',
    approachTitle: 'My approach',
    approach: ['Understand the problem', 'Design the solution', 'Build & validate', 'Deliver & improve'],
    partnerships: 'I also collaborate with agencies, startups, and engineering teams looking for a reliable development partner.',
    contactKicker: "LET'S BUILD SOMETHING",
    contactTitle: 'Your next project starts with a conversation.',
    contactText: 'Need custom software, application modernization, or a trusted technical partner? Share the challenge and we can explore the next steps.',
    contactButton: 'Chat on WhatsApp',
    contactEmail: 'Send an email',
    footerNote: 'Independent professional profile. A future company brand will be presented separately.',
    rights: 'All rights reserved.',
    skip: 'Skip to content',
    menuOpen: 'Open menu', menuClose: 'Close menu',
  },
} as const;

const icons = [Layers3, Monitor, Smartphone, Workflow, Code2, Cloud];
const navIds = ['home', 'services', 'projects', 'about', 'contact'] as const;

function ExternalLinkButton({ href, children, primary = false }: { href: string; children: React.ReactNode; primary?: boolean }) {
  return <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition-all duration-200 hover:-translate-y-0.5 ${primary ? 'bg-accent text-white shadow-[0_10px_35px_rgba(76,141,255,.22)] hover:bg-blue-400' : 'border border-white/20 text-white hover:border-accent/60 hover:bg-white/5'}`}>
    {children}<ArrowUpRight aria-hidden="true" size={17}/>
  </a>;
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'pt';
    return window.localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'pt';
  });
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = content[language];
  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    document.title = language === 'pt' ? 'Pedro Aguiar | Engenharia de Software & Soluções Digitais' : 'Pedro Aguiar | Software Engineering & Digital Solutions';
    document.querySelector('meta[name="description"]')?.setAttribute('content',language === 'pt' ? 'Desenvolvimento de sistemas empresariais, APIs, integrações, aplicações web e mobile com Pedro Aguiar.' : 'Custom business software, APIs, web and mobile development, and integrations by Pedro Aguiar.');
    window.localStorage.setItem('portfolio-language',language);
  }, [language]);
  const changeLanguage = () => setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  return (
    <div className="min-h-screen overflow-x-hidden">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[99] focus:rounded-lg focus:bg-white focus:p-3 focus:text-navy">{t.skip}</a>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" aria-label="Pedro Aguiar — home" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/25 bg-accent/10 text-lg font-extrabold text-accent transition-transform group-hover:rotate-6">P.</span>
            <span className="text-base font-bold tracking-wide text-white">PEDRO <span className="font-medium text-slate-300">AGUIAR</span></span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
            {t.nav.map((label,i) => <a className="text-sm font-medium text-slate-300 transition-colors hover:text-white" key={navIds[i]} href={`#${navIds[i]}`}>{label}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <button aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para português'} onClick={changeLanguage} className="flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-white/10"><Globe2 size={15}/>{language.toUpperCase()}<ChevronDown size={12}/></button>
            <a href="#contact" className="hidden rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-400 sm:inline-flex">{t.cta}</a>
            <button className="rounded-lg border border-white/15 p-2 text-white lg:hidden" aria-label={mobileOpen?t.menuClose:t.menuOpen} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(v=>!v)}>{mobileOpen?<X size={20}/>:<Menu size={20}/>}</button>
          </div>
        </div>
        {mobileOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="flex flex-col gap-1 border-t border-white/10 bg-navy px-5 py-4 lg:hidden">{t.nav.map((label,i)=><a key={navIds[i]} href={`#${navIds[i]}`} onClick={()=>setMobileOpen(false)} className="rounded-lg px-3 py-3 text-sm text-slate-200 hover:bg-white/10">{label}</a>)}</nav>}
      </header>

      <main id="main">
        <section id="home" className="relative mx-auto max-w-7xl px-5 pb-24 pt-24 sm:px-8 sm:pt-32 lg:pb-32">
          <div aria-hidden="true" className="pointer-events-none absolute right-0 top-20 hidden h-96 w-96 rounded-full bg-blue-600/10 blur-3xl lg:block"/>
          <div className="relative max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-bold tracking-wider text-blue-200"><span className="h-2 w-2 rounded-full bg-emerald-400"/>{t.availability}</span>
            <p className="section-kicker mt-10">{t.eyebrow}</p>
            <h1 className="gradient-text mt-5 max-w-4xl text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-[76px]">{t.hero}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">{t.description}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-3 rounded-xl bg-accent px-6 py-4 font-semibold text-white shadow-[0_10px_35px_rgba(76,141,255,.25)] transition-all hover:-translate-y-0.5 hover:bg-blue-400">{t.cta}<ArrowRight size={18}/></a>
              <a href="#projects" className="inline-flex items-center gap-3 rounded-xl border border-white/20 px-6 py-4 font-semibold text-white transition-all hover:border-accent/60 hover:bg-white/5">{t.explore}<ArrowUpRight size={18}/></a>
            </div>
          </div>
          <div className="mt-24 border-t border-white/10 pt-9">
            <p className="text-xs font-bold tracking-[.2em] text-slate-500">{t.trust}</p>
            <div className="mt-7 grid gap-6 sm:grid-cols-3">
              {[[t.stat1,t.stat1Sub],[t.stat2,t.stat2Sub],[t.stat3,t.stat3Sub]].map(([name,sub])=><div key={name} className="border-l-2 border-blue-400/50 pl-4"><div className="font-bold text-white">{name}</div><div className="mt-1 text-sm text-slate-400">{sub}</div></div>)}
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-white/5 bg-[#101b31]/70 py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="section-kicker">{t.serviceKicker}</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">{t.serviceTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg text-slate-400">{t.serviceDescription}</p>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {t.services.map((service,i) => {const Icon=icons[i];return <article className="surface rounded-2xl p-7 transition-all duration-200 hover:-translate-y-1 hover:border-blue-400/35" key={service.title}>
                <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 text-blue-300"><Icon size={23}/></div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-400">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">{service.points.map(point=><span key={point} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-300">{point}</span>)}</div>
              </article>})}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
          <p className="section-kicker">{t.projectsKicker}</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl">{t.projectsTitle}</h2>
          <p className="mt-5 max-w-2xl text-lg text-slate-400">{t.projectsDescription}</p>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {t.projects.map((project,i)=><article key={project.title} className="surface flex h-full flex-col overflow-hidden rounded-2xl">
              <div className={`relative flex h-48 items-center justify-center border-b border-white/10 ${i===0?'bg-gradient-to-br from-blue-950 to-slate-900':i===1?'bg-gradient-to-br from-indigo-950 to-slate-900':'bg-gradient-to-br from-slate-800 to-blue-950'}`}>
                <div aria-hidden="true" className="absolute inset-0 opacity-25" style={{backgroundImage:'linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)',backgroundSize:'28px 28px'}}/>
                {i===0?<Braces size={68} strokeWidth={1.1} className="relative text-blue-300"/>:i===1?<Monitor size={68} strokeWidth={1.1} className="relative text-blue-300"/>:<Cloud size={68} strokeWidth={1.1} className="relative text-blue-300"/>}
                <span className="absolute bottom-4 left-5 rounded-full border border-white/15 bg-navy/60 px-3 py-1 text-xs text-slate-200">{project.state}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-bold tracking-widest text-blue-300">{project.tag}</span>
                <h3 className="mt-3 text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{project.desc}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-300 hover:text-white">{t.viewRepository}<ArrowUpRight size={16}/></a>
              </div>
            </article>)}
          </div>
          <div className="mt-9 text-center"><a href={links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-blue-300 hover:text-white">{t.allProjects}<ArrowRight size={16}/></a></div>
        </section>

        <section id="about" className="border-y border-white/5 bg-[#101b31]/70 py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_.9fr]">
            <div><p className="section-kicker">{t.aboutKicker}</p><h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">{t.aboutTitle}</h2><p className="mt-7 leading-8 text-slate-300">{t.about1}</p><p className="mt-5 leading-8 text-slate-400">{t.about2}</p><p className="mt-6 rounded-xl border-l-2 border-accent bg-blue-400/5 p-5 leading-7 text-slate-300">{t.partnerships}</p></div>
            <div className="surface rounded-2xl p-7 sm:p-9">
              <div className="flex items-center gap-3 text-blue-300"><Code2 size={23}/><h3 className="text-xl font-bold text-white">{t.approachTitle}</h3></div>
              <div className="mt-8 space-y-6">{t.approach.map((step,i)=><div className="flex items-center gap-4" key={step}><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-400/10 text-sm font-bold text-blue-300">0{i+1}</span><span className="font-semibold text-slate-200">{step}</span><Check className="ml-auto text-emerald-400" size={17}/></div>)}</div>
              <div className="mt-10 border-t border-white/10 pt-7"><span className="text-xs font-bold tracking-widest text-slate-500">TECH STACK</span><div className="mt-4 flex flex-wrap gap-2">{['PHP','Laravel','Python','Django','React','PostgreSQL','Docker','AWS','RabbitMQ','Redis'].map(tech=><span key={tech} className="rounded-lg bg-white/5 px-3 py-2 text-xs font-medium text-slate-300">{tech}</span>)}</div></div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-[#1b3156] via-[#122340] to-[#101a2c] px-6 py-16 sm:px-12 sm:py-20">
            <div aria-hidden="true" className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl"/>
            <div className="relative max-w-3xl"><p className="section-kicker">{t.contactKicker}</p><h2 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl">{t.contactTitle}</h2><p className="mt-6 text-lg leading-8 text-slate-300">{t.contactText}</p><div className="mt-9 flex flex-wrap gap-3"><ExternalLinkButton href={links.whatsapp} primary>{t.contactButton}</ExternalLinkButton><ExternalLinkButton href={links.email}>{t.contactEmail}</ExternalLinkButton></div></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-5 sm:px-8 md:flex-row md:items-center">
          <div><div className="font-bold tracking-wider text-white">PEDRO AGUIAR</div><p className="mt-2 max-w-md text-xs leading-6 text-slate-500">{t.footerNote}</p><p className="mt-2 text-xs text-slate-500">© {new Date().getFullYear()} Pedro Aguiar. {t.rights}</p></div>
          <div className="flex items-center gap-3">
            <a aria-label="GitHub" className="rounded-xl border border-white/10 p-3 text-slate-300 hover:border-blue-400/30 hover:text-white" href={links.github} target="_blank" rel="noopener noreferrer"><Code2 size={20}/></a>
            <a aria-label="LinkedIn" className="rounded-xl border border-white/10 p-3 text-slate-300 hover:border-blue-400/30 hover:text-white" href={links.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20}/></a>
            <a aria-label="Email" className="rounded-xl border border-white/10 p-3 text-slate-300 hover:border-blue-400/30 hover:text-white" href={links.email}><Mail size={20}/></a>
            <a aria-label="Portfolio source code" className="rounded-xl border border-white/10 p-3 text-slate-300 hover:border-blue-400/30 hover:text-white" href="https://github.com/pedro162/pedro162.github.io" target="_blank" rel="noopener noreferrer"><ExternalLink size={20}/></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
