import React from 'react';
import './Styles/App.css';

import Header from "./Components/Header"
import MainSection from "./Components/MainSection";
import Sidebar from "./Components/Sidebar";



function App() {
  return (
      <div className="app-header">
        <Header/>
        <div className="app-container">
          <div className="mainSection-container"><MainSection/></div>
          <div className="sidebar-container"><Sidebar/></div>
        </div>
      </div>
  );
}

export default App;
