 
export default interface TaskInterface{
    id:number,
    content:String,
    isDone:boolean,
    handleDeleteTask:(idTask:number)=>void,
    handleChangeCheckBox:(idTask:number)=>void,
   }