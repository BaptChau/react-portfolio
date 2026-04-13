import React from 'react';

export default function MentionLegal() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold c-text mb-1">
        Mentions <span className="c-accent">Légales</span>
      </h1>
      <div className="w-12 h-0.5 c-divider-accent mb-8" />
      <div className="c-card rounded-xl p-8 space-y-6 text-sm c-muted leading-relaxed">
        <div>
          <p className="font-bold c-text mb-1">Éditeur du site</p>
          <p>Baptiste Chaudron — Particulier<br />
          Vandœuvre-lès-Nancy, France<br />
          Contact : <a href="mailto:chaudron964@gmail.com" className="c-accent hover:underline">chaudron964@gmail.com</a>
          </p>
        </div>
        <div>
          <p className="font-bold c-text mb-1">Hébergeur</p>
          <p>Vercel Inc.<br />
          440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
          <a href="https://vercel.com" target="_blank" rel="noreferrer" className="c-accent hover:underline">vercel.com</a>
          </p>
        </div>
        <div>
          <p className="font-bold c-text mb-1">Propriété intellectuelle</p>
          <p>L'ensemble du contenu de ce site (textes, structure, code) est la propriété exclusive
          de Baptiste Chaudron. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
        </div>
        <div>
          <p className="font-bold c-text mb-1">Données personnelles</p>
          <p>Ce site ne collecte aucune donnée personnelle et n'utilise pas de cookies de traçage.
          Aucun formulaire de contact n'est présent sur ce site.</p>
        </div>
        <div>
          <p className="font-bold c-text mb-1">Responsabilité</p>
          <p>Les informations présentes sur ce site sont fournies à titre indicatif.
          Baptiste Chaudron ne saurait être tenu responsable des erreurs ou omissions éventuelles.</p>
        </div>
      </div>
    </div>
  );
}
