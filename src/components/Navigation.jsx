//import React from 'react';

const Navigation = ({ setActiveTab }) => {
  return (
    <nav>
      <button onClick={() => setActiveTab('home')}>Home</button>
      <button onClick={() => setActiveTab('about')}>About</button>
      <button onClick={() => setActiveTab('contact')}>Contact</button>
    </nav>
  );
};

export default Navigation;
