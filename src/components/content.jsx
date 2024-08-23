/* eslint-disable react/no-unescaped-entities */
//import React from 'react';
import "./styles/content.css";


import Tools from "./Tools";
import Create from "./Create";
import Git from "./Git";
import Generate from "./Generate";
import About from "./About"
import Push from "./Push";
import Build from "./Build";

const Content = ({ activeTab }) => {
  let content;
  switch (activeTab) {
    case 'tools':
      content = <Tools/>;
      break;
    case 'create':
      content = <Create/>;
      break;
    case 'generate':
      content = <Generate/>;
      break;
    case 'git':
      content = <Git/>;
      break;
    case 'about':
      content = <About/>;
      break;
    case 'push':
      content = <Push/>;
      break;
      case 'build':
        content = <Build/>;
        break;
    default:
      content = <div className="text">Dowiesz się z niej jak postępować aby napisac prostą stronkę w React.</div>;
  }

  return (
    <main className="content">
      {content}
    </main>
  );
};

export default Content;