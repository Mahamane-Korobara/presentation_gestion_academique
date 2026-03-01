import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const Motion = motion

const adminScreens = Array.from({ length: 8 }, (_, i) => `/screens/admin/admin-${i + 1}.png`)
const profScreens = Array.from({ length: 6 }, (_, i) => `/screens/prof/prof-${i + 1}.png`)

const kpis = [
  { value: '3', label: 'Rôles applicatifs', detail: 'Admin, Professeur, Étudiant' },
  { value: '151', label: 'Routes API', detail: 'Mesurées dans routes/api.php' },
  { value: '23', label: 'Services API Front', detail: 'Objets endpoint déclarés' },
  { value: '42', label: 'Pages métier', detail: '25 admin, 9 prof, 8 étudiant' },
]

const modules = [
  {
    title: 'Pilotage Académique',
    points: ['Années académiques', 'Semestres actifs', 'Filières et niveaux'],
    color: 'from-sky-500/20 to-blue-500/10',
  },
  {
    title: 'Gestion Pédagogique',
    points: ['Cours et affectations profs', 'Inscriptions par niveau', 'Suivi des charges'],
    color: 'from-cyan-500/20 to-sky-500/10',
  },
  {
    title: 'Évaluations & Notes',
    points: ['Création des évaluations', 'Saisie par professeur', 'Validation admin en attente'],
    color: 'from-indigo-500/20 to-blue-500/10',
  },
  {
    title: 'Bulletins & Décisions',
    points: ['Bulletins semestriels', 'Bulletins annuels', 'Téléchargement PDF étudiant'],
    color: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    title: 'Planning Opérationnel',
    points: ['Emploi du temps admin', 'Vue semaine/jour prof', 'Vue semaine/jour étudiant'],
    color: 'from-orange-500/20 to-amber-500/10',
  },
  {
    title: 'Communication Interne',
    points: ['Messagerie commune', 'Annonces ciblées', 'Partage de documents prof'],
    color: 'from-fuchsia-500/20 to-violet-500/10',
  },
]

const workflow = [
  'Structuration académique (année, semestre, filière, niveau)',
  'Création et affectation des cours',
  'Planification des évaluations',
  'Saisie des notes par le professeur',
  'Validation des notes par l’administration',
  'Génération des bulletins et consultation étudiant',
]

const techStack = [
  'Frontend: Next.js 16, React 19, Tailwind CSS, Radix UI, FullCalendar',
  'Backend: Laravel API, Sanctum, middleware rôles/compte actif/changement mot de passe',
  'Données: PostgreSQL/MySQL (selon env), cache applicatif et invalidations ciblées',
  'Fonctionnel: dashboards, calendriers, notes, bulletins, documents et messagerie',
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function AnimatedSection({ children, className = '' }) {
  return (
    <Motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={fadeUp}
      className={className}
    >
      {children}
    </Motion.section>
  )
}

function App() {
  const [activeRole, setActiveRole] = useState('admin')

  const gallery = useMemo(() => {
    return activeRole === 'admin' ? adminScreens : profScreens
  }, [activeRole])

  return (
    <main className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-sky-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-400/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pt-10">
        <Motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur lg:px-6"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Projet</p>
            <h1 className="text-sm font-semibold text-white sm:text-base">Plateforme de Gestion Académique</h1>
          </div>
          <span className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
            Frontend + Backend réel
          </span>
        </Motion.nav>

        <section className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Motion.p
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-sky-300/35 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-200"
            >
              Produit web académique
            </Motion.p>

            <Motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 max-w-3xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-7xl"
            >
              Centraliser
              <span className="block bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                le cycle académique
              </span>
            </Motion.h2>

            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base"
            >
              Cette plateforme couvre le flux complet observé dans le code source: administration pédagogique,
              gestion des cours, évaluations, saisie/validation des notes, bulletins, emplois du temps,
              annonces, documents et messagerie.
            </Motion.p>

            <Motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <a
                href="#modules"
                className="rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-700/40 transition hover:scale-[1.02]"
              >
                Explorer les modules
              </a>
              <a
                href="#interfaces"
                className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-300/40 hover:bg-sky-300/10"
              >
                Voir les interfaces réelles
              </a>
            </Motion.div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {kpis.map((item, index) => (
                <Motion.article
                  key={item.label}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur"
                >
                  <p className="text-2xl font-extrabold text-white">{item.value}</p>
                  <p className="mt-1 text-sm font-semibold text-sky-200">{item.label}</p>
                  <p className="mt-1 text-xs text-slate-400">{item.detail}</p>
                </Motion.article>
              ))}
            </div>
          </div>

          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="relative lg:-translate-y-30"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-2xl border border-cyan-300/30 bg-cyan-400/10 backdrop-blur" />
            <img
              src="/screens/admin/admin-8.png"
              alt="Dashboard administrateur"
              className="w-full rounded-[1.6rem] border border-white/15 shadow-2xl shadow-sky-900/40"
            />
            <Motion.img
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              src="/screens/prof/prof-5.png"
              alt="Interface professeur"
              className="absolute -bottom-7 -left-3 w-[52%] rounded-2xl border border-white/20 shadow-xl shadow-slate-950/70 sm:-left-8"
            />
            <div className="absolute -top-4 left-6 right-6 rounded-xl border border-white/15 bg-slate-900/80 p-3 backdrop-blur">
              <p className="text-center text-xs font-semibold text-sky-200 sm:text-sm">
                Flux réel: cours → évaluations → notes → validation admin → bulletins
              </p>
            </div>
          </Motion.div>
        </section>

        <AnimatedSection className="mt-20" id="modules">
          <div className="mb-7 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">Couverture fonctionnelle</p>
            <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Modules alignés sur l'architecture backend et frontend
            </h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((module, index) => (
              <Motion.article
                key={module.title}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className={`rounded-2xl border border-white/10 bg-gradient-to-br ${module.color} p-5 shadow-lg shadow-slate-950/30`}
              >
                <h4 className="text-lg font-bold text-white">{module.title}</h4>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {module.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Motion.article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-20 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">Workflow métier</p>
            <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">Cycle académique maîtrisé</h3>
            <div className="mt-5 space-y-3">
              {workflow.map((step, index) => (
                <Motion.div
                  key={step}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-900/40 px-3 py-2"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-500/25 text-xs font-bold text-sky-100">
                    {index + 1}
                  </span>
                  <p className="text-sm text-slate-200">{step}</p>
                </Motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">Stack technique réelle</p>
            <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">Fondations du projet</h3>
            <div className="mt-5 space-y-3">
              {techStack.map((item, index) => (
                <Motion.article
                  key={item}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  className="rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-sm text-slate-200"
                >
                  {item}
                </Motion.article>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-20" id="interfaces">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">Captures réelles</p>
              <h3 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Interfaces Admin et Professeur</h3>
            </div>
            <div className="flex rounded-full border border-white/10 bg-white/[0.04] p-1">
              <button
                onClick={() => setActiveRole('admin')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeRole === 'admin'
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-600/30'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Admin
              </button>
              <button
                onClick={() => setActiveRole('prof')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeRole === 'prof'
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-600/30'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Professeur
              </button>
            </div>
          </div>

          <Motion.div
            key={activeRole}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          >
            {gallery.map((src, index) => (
              <Motion.figure
                key={src}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60"
              >
                <img
                  src={src}
                  alt={`Interface ${activeRole} ${index + 1}`}
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </Motion.figure>
            ))}
          </Motion.div>
        </AnimatedSection>

        <AnimatedSection className="mt-20">
          <div className="rounded-3xl border border-sky-300/20 bg-gradient-to-r from-sky-500/15 via-cyan-500/10 to-blue-500/15 px-6 py-10 text-center sm:px-10">
            <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Une base solide pour une démo ou un déploiement
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base">
              Cette landing est alignée sur les éléments réellement implémentés dans les dépôts du projet: routes API,
              services frontend, workflows notes/validations, calendriers, documents et dashboards multi-rôles.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#interfaces"
                className="rounded-full bg-white px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:scale-[1.02]"
              >
                Parcourir les interfaces
              </a>
              <a
                href="#modules"
                className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Revoir les modules
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}

export default App
