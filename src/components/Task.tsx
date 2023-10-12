import TaskInterface from '../interface/taskInterface';
import style from './Task.module.css';
import {  Trash } from 'phosphor-react';


export default function({content, isDone,id, handleDeleteTask, handleChangeCheckBox}:TaskInterface){
     
    return (
        <div className={style.task}>
            { 
           <input type="checkbox" onChange={()=>handleChangeCheckBox(id)} checked={isDone} className={style.checkBox}/>
            }

        <span className={style.content} >
           {content}
        </span>
          
            <button onClick={()=>handleDeleteTask(id)} className={style.deleteTask}>
                <Trash/>
            </button>
        </div>
    );
}