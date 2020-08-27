import React from 'react';
import './App.css';
import Header from './header/header'
import Sidebar from './body/sidebar'
import Widgets from './body/Widgets'
import Feed from './body/Feed'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app__body">
        <Sidebar/>
        <Feed />
        <Widgets/>
      </div>
    </div>
  );
}

export default App;