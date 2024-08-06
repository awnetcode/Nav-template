/* eslint-disable react/no-unescaped-entities */
//import React from 'react';
import "./styles/content.css";

import Main from './Main';
import About from "./About";

const Content = ({ activeTab }) => {
  let content;
  switch (activeTab) {
    case 'home':
      content = <Main/>;
      break;
    case 'about':
      content = <About/>;
      break;
    case 'contact':
      content = <div>To jest strona kontaktowa.</div>;
      break;
    default:
      content = <div>Strona nie znaleziona.</div>;
  }

  return (
    <main>
      {content}
    </main>
  );
};

export default Content;