import { PlusCircle } from "phosphor-react";
import style from '../Global.module.css';
import { ChangeEvent, FormEvent } from "react";

interface FormProps{
    handleCreateTask: (event:FormEvent)=>void,
    handleTextChange:(event:ChangeEvent<HTMLInputElement>)=>void,
    value:string
}

export default function FormContent({handleCreateTask,handleTextChange, value}:FormProps){
    return (
        <div className={style.content}>
              <input value={value} onChange={handleTextChange} type="text"  placeholder='Adicione uma nova tarefa'/>
              <button onClick={handleCreateTask} type="submit">Criar <PlusCircle className={style.icone}/> </button>
      </div>
    )
}