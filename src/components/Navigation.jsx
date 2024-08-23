//import React from 'react';

const Navigation = ({ setActiveTab }) => {
  return (
    <nav className="left-nav-panel">
      <button onClick={() => setActiveTab('tools')}>Narzędzia</button>
      <button onClick={() => setActiveTab('create')}>Start projektu</button>
      <button onClick={() => setActiveTab('git')}>Start Git-a</button>
      <button onClick={() => setActiveTab('generate')}>Generowanie komponentów</button>
      <button onClick={() => setActiveTab('about')}>Funkcjonalność nawigacji</button>
      <button onClick={() => setActiveTab('push')}>Zapis repozytorim</button>
      <button onClick={() => setActiveTab('build')}>Generowanie plików strony</button>
    </nav>
  );
};

export default Navigation;
