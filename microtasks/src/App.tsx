import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";

function App() {
  return (
    <div className="App">
        <Header titleForHeader={'NEW HEADER'}/>
        <Body titleForBody={'New Body'}/>
        <Footer/>
    </div>
  );
}

export default App;