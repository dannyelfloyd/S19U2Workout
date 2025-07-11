// App.js
import React from 'react';
import { languageProvider } from './LanguageContext';
import LanguageSelector from './LanguageSelector';
import Greeting from './Greeting';

const App = () => {
  return (
    <languageProvider>
      <div>
        <h1>Language Selector APP</h1>
        <LanguageSelector />
        <Greeting />
      </div>
    </languageProvider>
  );
};

export default App;
