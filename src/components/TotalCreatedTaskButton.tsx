import style from '../Global.module.css';

interface TotalCreatetTasksProps{
    totalCreatedTask:number,
}

export default function({totalCreatedTask}:TotalCreatetTasksProps){

    return (
    <div>
        <button className={style.totalTaskLabel}>Tarefas criadas</button>
         <span className={style.badge}>
            {totalCreatedTask}
         </span>
       </div>
    );
}