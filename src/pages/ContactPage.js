import React from 'react';
import { FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const links = [
  { href: 'https://www.linkedin.com/in/baptiste-chaudron-61a118161/', external: true,  icon: <FiLinkedin size={38} />, label: 'LinkedIn', sub: 'baptiste-chaudron' },
  { href: 'https://github.com/BaptChau',                              external: true,  icon: <FiGithub size={38} />,   label: 'GitHub',   sub: 'BaptChau' },
  { href: '/cv-baptiste',                                              external: false, icon: <FiFileText size={38} />, label: 'CV',       sub: 'Voir en ligne' },
];

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold c-text mb-1">
        Parlons <span className="c-accent">!</span>
      </h1>
      <div className="w-12 h-0.5 c-divider-accent mb-4" />
      <p className="c-muted mb-12 leading-relaxed">
        Vous avez un projet, une opportunité ou juste envie d'échanger ?
        Retrouvez-moi sur les réseaux ci-dessous.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {links.map(({ href, external, icon, label, sub }) => {
          const content = (
            <>
              <span className="c-accent">{icon}</span>
              <span className="font-bold c-text">{label}</span>
              <span className="text-xs c-muted">{sub}</span>
            </>
          );
          return external
            ? <a key={label} href={href} target="_blank" rel="noreferrer" className="c-link-card">{content}</a>
            : <Link key={label} to={href} className="c-link-card">{content}</Link>;
        })}
      </div>
    </div>
  );
}
