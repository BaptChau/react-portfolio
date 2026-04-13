import React from 'react';
import { FiFileText, FiGithub, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const skillCategories = [
  { label: 'Backend',          items: ['PHP 8.1+', 'Symfony', 'Python', 'FastAPI', 'Node.js', 'Express'] },
  { label: 'Frontend',         items: ['Vue.js', 'JavaScript', 'React', 'Angular', 'HTML/CSS', 'Sass'] },
  { label: 'Mobile',           items: ['Flutter', 'Android Studio'] },
  { label: 'Bases de données', items: ['PostgreSQL', 'MySQL'] },
  { label: 'DevOps / Outils',  items: ['Docker', 'Git', 'CI/CD Bamboo', 'Ansible', 'PHPUnit', 'Codeception', 'Playwright', 'Jira'] },
  { label: 'IA / Chatbot',     items: ['Azure OpenAI', 'Illuin', 'ChatBot', 'CallBot'] },
  { label: 'Méthodologies',    items: ['Agile / Scrum', 'Conventional Commit', 'Revue de code'] },
  { label: 'En cours',         items: ['Go', 'GraphQL'] },
];

function Block({ title, children }) {
  return (
    <div className="c-card rounded-xl p-6">
      <p className="text-xs font-bold uppercase tracking-widest c-accent mb-5">{title}</p>
      {children}
    </div>
  );
}

function TimelineItem({ date, title, sub, bullets }) {
  return (
    <div className="relative pl-5 pb-7 last:pb-0">
      <span className="absolute left-[-1px] top-1.5 w-2.5 h-2.5 rounded-full
        bg-orange-700 dark:bg-orange-400 border-2 border-white dark:border-neutral-950" />
      <p className="text-xs font-semibold c-accent mb-0.5">{date}</p>
      <p className="font-bold text-sm c-text mb-0.5">{title}</p>
      {sub && <p className="c-muted text-xs mb-1.5 italic">{sub}</p>}
      {bullets && (
        <ul className="space-y-1">
          {bullets.map((b) => (
            <li key={b} className="c-muted text-xs flex gap-1.5">
              <span className="c-accent mt-0.5 flex-shrink-0">›</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function LinkCard({ href, external, icon, label, sub }) {
  const content = (
    <>
      <span className="c-accent">{icon}</span>
      <span className="font-bold text-sm c-text">{label}</span>
      <span className="text-xs c-muted">{sub}</span>
    </>
  );
  return external
    ? <a href={href} target="_blank" rel="noreferrer" className="c-link-card">{content}</a>
    : <Link to={href} className="c-link-card">{content}</Link>;
}

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">

      <h1 className="text-4xl font-extrabold c-text mb-1">
        À propos <span className="c-accent">de moi</span>
      </h1>
      <div className="w-12 h-0.5 c-divider-accent mb-8" />

      <p className="c-muted text-lg leading-relaxed max-w-3xl mb-12">
        Développeur Full Stack depuis mars 2021, spécialisé{' '}
        <span className="c-accent font-semibold">PHP/Symfony</span> et{' '}
        <span className="c-accent font-semibold">Vue.js</span>, avec une expérience en
        environnement bancaire critique (Boursorama). Au-delà du code, ce qui m'anime c'est
        de comprendre les problématiques métier pour y apporter des solutions durables.
        Rigoureux et curieux, je m'implique aussi bien dans la conception que dans la relation
        avec les équipes produit et fonctionnelles.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        <Block title="Expériences professionnelles">
          <div className="relative border-l-2 border-gray-200 dark:border-neutral-700 pl-4">
            <TimelineItem
              date="Janv. 2023 – Présent"
              title="Consultant Développeur Web"
              sub="Bloomind · ESN — Nancy"
              bullets={[
                'Mission Boursorama (jan. 2023 – déc. 2025) : PHP 8.1+, Symfony, Vue.js, Flutter, Azure OpenAI',
                'Mécénat Pet Rescue (jan. – fév. 2026) : Symfony / Vue.js, Agile',
                'Équipe interne (fév. 2026 – présent) : Node.js / Express, Vue.js 3',
              ]}
            />
            <TimelineItem
              date="Mars 2021 – Déc. 2022"
              title="Développeur Web Full Stack"
              sub="Via Mobilis Group · CDI — Ambacourt"
              bullets={[
                "Plateforme d'annonces B2B/B2C (poids lourds, BTP, agricole)",
                'PHP 7.4, PostgreSQL 13, Sass, ORM Propel, Nginx',
              ]}
            />
            <TimelineItem
              date="Avr. – Juin 2019"
              title="Stagiaire Développeur Web Full Stack"
              sub="Albéa Tubes France — Sainte-Ménéhould"
              bullets={[
                'Migration MS Access → web, base +100 000 lignes',
                'PHP 7.4, MySQL, jQuery/Ajax, Active Directory',
              ]}
            />
          </div>
        </Block>

        <div className="flex flex-col gap-5">
          <Block title="Formation">
            <div className="relative border-l-2 border-gray-200 dark:border-neutral-700 pl-4">
              <TimelineItem
                date="2017 – 2019"
                title="DUT Informatique"
                sub="IUT de Reims Champagne-Ardenne · développement web & génie logiciel"
              />
              <TimelineItem
                date="2014 – 2017"
                title="Baccalauréat STI2D"
                sub="Lycée Raymond Poincaré, Bar-le-Duc"
              />
            </div>
          </Block>

          <Block title="Langues">
            <div className="space-y-3">
              {[
                { lang: 'Français', level: 'Langue maternelle' },
                { lang: 'Anglais',  level: 'Intermédiaire — lecture technique courante' },
              ].map(({ lang, level }) => (
                <div key={lang} className="flex items-center justify-between">
                  <span className="text-sm font-semibold c-text">{lang}</span>
                  <span className="text-xs c-muted">{level}</span>
                </div>
              ))}
            </div>
          </Block>

          <Block title="Bénévolat">
            <p className="text-sm font-semibold c-text mb-2">Club de handball</p>
            <ul className="space-y-1.5">
              {[
                'Vice-président administratif depuis juin 2022',
                'Entraîneur seniors (2021-2022) et U11 (depuis sept. 2023)',
                'Responsable de salle, chronométreur, secrétaire à la table de marque',
              ].map((b) => (
                <li key={b} className="c-muted text-xs flex gap-1.5">
                  <span className="c-accent flex-shrink-0">›</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Block>
        </div>
      </div>

      <Block title="Compétences techniques">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map(({ label, items }) => (
            <div key={label}>
              <p className="text-xs font-semibold c-muted mb-2">{label}</p>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span key={item}
                    className="c-panel border border-gray-200 dark:border-neutral-700
                      c-text text-xs font-medium px-2.5 py-1 rounded-md">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Block>

      <hr className="border-gray-200 dark:border-neutral-700 my-10" />
      <h2 className="text-2xl font-extrabold c-text mb-6">
        Documents & <span className="c-accent">Contact</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <LinkCard href="/cv-baptiste"  external={false} icon={<FiFileText size={34} />}   label="Mon CV"   sub="Voir en ligne" />
        <LinkCard href="https://www.linkedin.com/in/baptiste-chaudron-61a118161/" external icon={<FiLinkedin size={34} />} label="LinkedIn" sub="baptiste-chaudron" />
        <LinkCard href="https://github.com/BaptChau" external icon={<FiGithub size={34} />}   label="GitHub"   sub="BaptChau" />
      </div>
    </div>
  );
}
