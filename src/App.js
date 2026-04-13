import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from './hooks/useTheme';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MentionLegal from './pages/MentionLegale';
import CVShow from './pages/CVShow';

function NavLink({ to, children, onClick }) {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={[
        'relative px-3 py-2 text-sm font-medium transition-colors duration-200',
        'after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2',
        'after:h-0.5 after:transition-all after:duration-200',
        active
          ? 'c-accent after:w-3/5 after:bg-orange-700 dark:after:bg-orange-400'
          : 'c-muted hover:c-text after:w-0 hover:after:w-3/5 after:bg-orange-700 dark:after:bg-orange-400',
      ].join(' ')}
    >
      {children}
    </Link>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, toggleTheme] = useTheme();

  return (
    <nav className="c-nav sticky top-0 z-50 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">

        <Link to="/" className="c-accent font-bold text-lg tracking-wide hover:opacity-80 transition-opacity">
          Baptiste Chaudron
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/a-propos">À Propos</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <button
            onClick={toggleTheme}
            aria-label="Changer de thème"
            className="ml-3 p-2 rounded-lg c-muted hover:c-text hover:c-panel transition-colors duration-200"
          >
            {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-1">
          <button
            onClick={toggleTheme}
            aria-label="Changer de thème"
            className="p-2 rounded-lg c-muted hover:c-text hover:c-panel transition-colors duration-200"
          >
            {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="p-2 rounded-lg c-muted hover:c-text hover:c-panel transition-colors duration-200"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t c-divider c-panel px-4 py-3 flex flex-col gap-1">
          <NavLink to="/"         onClick={() => setOpen(false)}>Accueil</NavLink>
          <NavLink to="/a-propos" onClick={() => setOpen(false)}>À Propos</NavLink>
          <NavLink to="/contact"  onClick={() => setOpen(false)}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col c-page">
        <Navbar />
        <main className="flex-1">
          <Route path="/"               exact component={HomePage} />
          <Route path="/a-propos"       exact component={AboutPage} />
          <Route path="/contact"        exact component={ContactPage} />
          <Route path="/mention-legale" exact component={MentionLegal} />
          <Route path="/cv-baptiste"    exact component={CVShow} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
