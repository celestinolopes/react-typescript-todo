import style from '../Global.module.css';


interface TotalCreatetTasksProps{
    totalCreatedTasks:number,
    totalFinishedTaskTask:number

}
export default function ({totalCreatedTasks,totalFinishedTaskTask}:TotalCreatetTasksProps){

    return (
        <div>
        <button className={style.finishLabel}>Concluídas</button>
         <span className={style.secondBadge}>
         {totalFinishedTaskTask} de {totalCreatedTasks}
         </span>
       </div>
    );
}