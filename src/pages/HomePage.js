import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi';
import photo from '../assets/avatar-gratuit.png';

const skills = [
  'PHP 8.1+', 'Symfony', 'Vue.js', 'JavaScript',
  'Node.js', 'Express', 'Python', 'Flutter',
  'React', 'Angular', 'PostgreSQL', 'MySQL',
  'Docker', 'Git', 'Azure OpenAI', 'Agile / Scrum',
];

const projects = [
  {
    title: 'Tech Mapper',
    description: "Base de connaissance pour associer chaque technologie à son langage. Full-stack : frontend Vue-style, API Express/Node.js avec auth Basic, données JSON.",
    tech: ['Node.js', 'Express', 'JavaScript', 'HTML/CSS'],
    github: 'https://github.com/BaptChau/tech-mapper',
    demo: 'https://tech-mapper.fr/',
  },
  {
    title: 'Personal Blog API',
    description: "API REST pour un blog personnel. Architecture MVC (controllers / routes / models / middleware), authentification JWT, Express v5.",
    tech: ['Node.js', 'Express v5', 'JWT', 'REST API'],
    github: 'https://github.com/BaptChau/personal-blog-api',
    demo: null,
  },
  {
    title: 'Todo List API',
    description: "API REST de gestion de tâches en Python. Flask comme framework web, SQLAlchemy pour l'ORM et la persistance.",
    tech: ['Python', 'Flask', 'SQLAlchemy', 'REST API'],
    github: 'https://github.com/BaptChau/todo-list-api',
    demo: null,
  },
  {
    title: 'Yugi Proba',
    description: "CLI Python pour analyser les probabilités de mains d'ouverture à Yu-Gi-Oh!. Aucune dépendance externe — logique probabiliste pure.",
    tech: ['Python', 'CLI', 'Algorithmique'],
    github: 'https://github.com/BaptChau/yugi-proba',
    demo: null,
  },
  {
    title: 'Number Guessing Game (Go)',
    description: "Jeu de devinette implémenté en Go. Projet d'apprentissage du langage illustrant une approche multi-langage.",
    tech: ['Go'],
    github: 'https://github.com/BaptChau/numberGuessingGame-GO',
    demo: null,
  },
  {
    title: 'Blockchain (Python)',
    description: "Implémentation simplifiée d'une blockchain en Python. Exploration des fondamentaux : blocs, hachage, chaîne de validation.",
    tech: ['Python', 'Cryptographie'],
    github: 'https://github.com/BaptChau/blockchain',
    demo: null,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="min-h-[88vh] flex items-center px-4 py-16
        bg-gradient-to-br from-orange-50 via-white to-white
        dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="inline-block c-accent-badge text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
                Développeur Full Stack
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-3 c-text">
                Bonjour, je suis<br />
                <span className="c-accent">Baptiste</span>
              </h1>
              <p className="c-muted text-lg mb-8 max-w-lg leading-relaxed">
                Full Stack depuis 2021, spécialisé{' '}
                <span className="c-accent font-semibold">PHP/Symfony</span> et{' '}
                <span className="c-accent font-semibold">Vue.js</span>.
                Expérience en environnement bancaire critique (Boursorama). Curieux, rigoureux, orienté solutions.
              </p>
              <div className="flex flex-wrap gap-3 mb-7">
                <Link to="/a-propos" className="c-btn-primary">En savoir plus</Link>
                <Link to="/contact"  className="c-btn-outline">Me contacter</Link>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/BaptChau" target="_blank" rel="noreferrer"
                   className="c-muted hover:c-accent transition-colors duration-200">
                  <FiGithub size={22} />
                </a>
                <a href="https://www.linkedin.com/in/baptiste-chaudron-61a118161/" target="_blank" rel="noreferrer"
                   className="c-muted hover:c-accent transition-colors duration-200">
                  <FiLinkedin size={22} />
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img
                src={photo}
                alt="Baptiste Chaudron"
                className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover
                  border-4 border-orange-700 dark:border-orange-400
                  shadow-[0_0_40px_rgba(194,65,12,0.2)] dark:shadow-[0_0_40px_rgba(251,146,60,0.2)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Compétences ── */}
      <section className="c-panel py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold c-text mb-1">
            Compétences <span className="c-accent">Techniques</span>
          </h2>
          <div className="w-12 h-0.5 c-divider-accent mb-10" />
          <div className="flex flex-wrap gap-2.5">
            {skills.map((s) => (
              <span key={s} className="c-skill-badge">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projets ── */}
      <section className="c-page py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold c-text mb-1">
            Mes <span className="c-accent">Projets</span>
          </h2>
          <div className="w-12 h-0.5 c-divider-accent mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <div key={p.title}
                className="c-card rounded-xl overflow-hidden flex flex-col
                  hover:shadow-md hover:-translate-y-1 hover:border-orange-400 dark:hover:border-orange-500
                  transition-all duration-200">
                <div className="c-panel border-b c-divider px-5 py-4">
                  <span className="font-bold text-base c-text">{p.title}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="c-muted text-sm leading-relaxed flex-1 mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.map((t) => (
                      <span key={t} className="c-tech-badge">{t}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold
                          c-accent-bg text-white px-3 py-1.5 rounded-md
                          hover:opacity-80 transition-opacity duration-200">
                        <FiExternalLink size={12} /> Demo live
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold
                          c-accent c-accent-border border px-3 py-1.5 rounded-md
                          hover:c-accent-soft transition-colors duration-200">
                        <FiGithub size={12} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
