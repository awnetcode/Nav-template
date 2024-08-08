/* eslint-disable react/no-unescaped-entities */
//import React from 'react';
import "./styles/content.css";

import Home from './Home';
import About from "./About";

const Content = ({ activeTab }) => {
  let content;
  switch (activeTab) {
    case 'home':
      content = <Home/>;
      break;
    case 'about':
      content = <About/>;
      break;
    case 'contact':
      content = <div className="text">To jest strona kontaktowa.</div>;
      break;
    default:
      content = <div className="text">Dowiesz się z niej jak postępować aby napisac prostą stronkę w React.</div>;
  }

  return (
    <main>
      {content}
    </main>
  );
};

export default Content;