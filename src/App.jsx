import { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Content from './components/Content';

import "../src/App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState('not_found');

  return (
    <div id='container'>
      <Header />
      <Navigation setActiveTab={setActiveTab} />
      <Content activeTab={activeTab} />
    </div>
  );
};

export default App;
