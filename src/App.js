import React from 'react';
import './App.css';
import TopNavigation from './Components/TopNavigation';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNavigation />
      </header>
      <div className="MainContent">
        Strona główna
      </div>
    </div>
  );
}

export default App;
