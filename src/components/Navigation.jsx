//import React from 'react';

const Navigation = ({ setActiveTab }) => {
  return (
    <nav>
      <button onClick={() => setActiveTab('tools')}>Narzędzia</button>
      <button onClick={() => setActiveTab('create')}>Start projektu</button>
      <button onClick={() => setActiveTab('home')}>Start Git-a</button>
      <button onClick={() => setActiveTab('home')}>Generowanie komponentów</button>
      <button onClick={() => setActiveTab('about')}>Funkcjonalność nawigacji</button>
      <button onClick={() => setActiveTab('contact')}>Zapis repozytorim</button>
      <button onClick={() => setActiveTab('contact')}>Generowanie plików strony</button>
    </nav>
  );
};

export default Navigation;
