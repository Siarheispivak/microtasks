import React from "react";
import {FilterType} from "../App";

type NewComponent = {
    currentMoney:Array<CurrentMoneyType>
    onClickFilterHandler:(props:FilterType)=>void
}
type CurrentMoneyType = {
    banknots:string
    value:number
    number:string
}


export const NewComponent = (props:NewComponent)=>{
    return(
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr,index)=>{
                    return(
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={()=>props.onClickFilterHandler('All')}>all</button>
                <button onClick={()=>props.onClickFilterHandler('Rubles')}>rubles</button>
                <button onClick={()=>props.onClickFilterHandler('Dollars')}>dollars</button>
            </div>
        </>
    )
}