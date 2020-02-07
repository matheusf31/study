import React from 'react';
import './App.css';

import TechList from './components/TechList';
import NameForm from './components/NameForm';
import TempCalc from './components/TempCalc';

function App() {
  return (
    <>
      <TechList />
      <NameForm />
      <TempCalc />
    </>
  );
}

export default App;
