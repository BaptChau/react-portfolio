import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="c-panel border-t border-gray-200 dark:border-neutral-800 px-4 py-5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm c-muted">
        <span>Baptiste Chaudron</span>
        <Link to="/mention-legale" className="hover:c-accent transition-colors duration-200">
          Mentions légales
        </Link>
        <span>Réalisé avec React & Tailwind CSS</span>
      </div>
    </footer>
  );
}
