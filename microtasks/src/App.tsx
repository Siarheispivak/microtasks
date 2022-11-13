import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./site/NewComponent";

function App() {
  return (
    <div className="App">
        <Header titleForHeader={'NEW HEADER'}/>
        <Body titleForBody={'NEW BODY'}/>
        <Footer titleForFooter={'NEW FOOTER'}/>
        <NewComponent />
    </div>
  );
}

export default App;
