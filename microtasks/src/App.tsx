import React,{ MouseEvent } from 'react';

import './App.css';
import {NewComponent} from "./site/NewComponent";
import {Button} from "./components/Button";


function App() {

    const Button1Foo=(subscriber: string,age:number,address:string)=>{
        console.log(subscriber,age)
    }
    const Button2Foo=(subscriber: string)=>{
        console.log(subscriber)
    }
    const Button3Foo=()=>{
        console.log('i am stupid')
    }

    return (
    <div className="App">

        {/*<button >MyYouTubeChanel-1</button>*/}
        {/*<button >MyYouTubeChanel-2</button>*/}
        <Button name={'MyYouTubeChanel-1'} callBack={()=>Button1Foo('i am Vasilij', 21, 'live in minsk')}/>
        <Button name={'MyYouTubeChanel-2'}callBack={()=>Button2Foo('i am Ivan')}/>
        {/*<Button name={'MyYouTubeChanel-3'}callBack={()=>Button2Foo('i am stupid button')}/>*/}
        <Button name={"Stupid"} callBack={Button3Foo}/>

    </div>
  );
}

export default App;
