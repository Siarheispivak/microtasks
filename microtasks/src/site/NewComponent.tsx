import React from 'react';
import {debug} from "util";

type NewComponentType = {
    students: Array<StudentsType>
    topCars:Array<TopCarsType>
}
type StudentsType = {
    id:number
    name:string
    age:number
}
type TopCarsType ={
    manufacturer:string
    model:string
}

export const NewComponent = (props:NewComponentType) => {



//         <table>
//         <tr>
//         <th>Month</th>
//         </tr>
//         </table>

    return(
        <>
        <ul>
            {props.students.map((el,)=>{
                return(
                    <li key={el.id}>{`${el.name} ${el.age}`}</li>
                    )
            })}

        </ul>
            <table>
                <tr>
                    {props.topCars.map((el, index)=>{
                        return(
                            <th key={index}>{`${el.manufacturer} ${el.model}`}</th>
                        )
                    })}
                </tr>
            </table>
        </>
    )
}