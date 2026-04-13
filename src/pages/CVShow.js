import React from 'react';
import { FiDownload } from 'react-icons/fi';

export default function CVShow() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold c-text mb-1">
            Mon <span className="c-accent">CV</span>
          </h1>
          <div className="w-12 h-0.5 c-divider-accent" />
        </div>
        <a
          href="/cv_baptiste_chaudron.pdf"
          download
          className="c-btn-primary flex items-center gap-2 self-start sm:self-auto"
        >
          <FiDownload size={16} /> Télécharger le PDF
        </a>
      </div>

      <div className="c-card rounded-xl overflow-hidden">
        <iframe
          src="/cv_baptiste_chaudron.pdf"
          title="CV Baptiste Chaudron"
          className="w-full"
          style={{ height: '85vh', border: 'none' }}
        />
      </div>
    </div>
  );
}
