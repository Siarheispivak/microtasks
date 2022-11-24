import React, {ChangeEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {log} from "util";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (taskTitle:string) => void
}

export function Todolist(props: PropsType) {

    let [taskTitle,setTaskTitle] = useState('')

    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
    }
    const addTaskHandler = () => {
        props.addTask(taskTitle)
        setTaskTitle('')
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input onChange={onChangeInputHandler} value={taskTitle}/>
            <button onClick={addTaskHandler}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={ () => { props.removeTask(t.id) } }>x</button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={ () => { props.changeFilter("all") } }>
                All
            </button>
            <button onClick={ () => { props.changeFilter("active") } }>
                Active
            </button>
            <button onClick={ () => { props.changeFilter("completed") } }>
                Completed
            </button>
        </div>
    </div>
}
