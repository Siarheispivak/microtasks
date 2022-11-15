import React from 'react';
import './App.css';
import {NewComponent} from "./site/NewComponent";

let students = [
    {id:1,name:"S",age:54},
    {id:2,name:"Se",age:23},
    {id:3,name:"Ser",age:22},
    {id:4,name:"ar",age:17},
    {id:5,name:"dar",age:12},
    {id:6,name:"perl",age:11},
    {id:7,name:"ctar",age:1},
    {id:8,name:"avatar",age:2},
    {id:9,name:"aar",age:3},
    {id:10,name:"artiom",age:4},
    {id:11,name:"aval",age:5},

]
const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]

function App() {

  return (
    <div className="App">

        <NewComponent students={students} topCars={topCars}/>
    </div>
  );
}

export default App;
