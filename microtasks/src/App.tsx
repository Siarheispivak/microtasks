import React, {MouseEvent, useState} from 'react';

import './App.css';

type FilterType = 'All'|'Dollars'|'Rubles'

function App() {

    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'Rubles', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'Rubles', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'Rubles', value: 50, number: ' v1234567890' },
    ])
    const[filter,setFilter] = useState<FilterType>('All')

    let currentMoney = money;
    if(filter === 'Dollars'){
        currentMoney = money.filter((filteredMoney)=> filteredMoney.banknots === 'Dollars')

    }else if(filter === 'Rubles'){
        currentMoney = money.filter((filteredMoney)=> filteredMoney.banknots === 'Rubles')

    }


    const onClickFilterHandler = (nameButton:FilterType) => {
        setFilter(nameButton)
    }

    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr,index)=>{
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
                <button onClick={()=>onClickFilterHandler('All')}>all</button>
                <button onClick={()=>onClickFilterHandler('Rubles')}>rubles</button>
                <button onClick={()=>onClickFilterHandler('Dollars')}>dollars</button>
            </div>
        </>


    );
}
export default App;
