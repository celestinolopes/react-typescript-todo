import style from './global.module.css';
import Header from './components/Header';
import FormContent from './components/FormContent';
import TotalTaskButton from './components/TotalCreatedTaskButton';
import TotalFinishedTask from './components/TotalFinishedTaskButton';
import EmptyBox from './components/EmptyBox';
  import { ChangeEvent, FormEvent, useState } from 'react';
import TaskInterface from './interface/taskInterface';
import Task from './components/Task';
import toast from 'react-hot-toast/headless';
  



 /* const tasks:task[] = [
  {
    content:"Organizar a gaveta de meias e separar as que não são mais usadas.",
    isDone:false
   },
   {
    content:"Aprender uma nova palavra em um idioma estrangeiro.",
    isDone:true
   },
   {
    content:" Conectar-se com um amigo ou familiar por videochamada",
    isDone:false
   }

 ]
 */

function App(){

  function generateRandomId(): number {
     const randomId = Math.floor(Math.random() * 10000) + 1;
    return randomId;
  }
  

const [tarefas, setTask] = useState<TaskInterface[]>([]);
const [newTaskText, setNewTaskText]= useState("");

  function countTotalFinishedTasks():number{
    return tarefas.filter((filteredTask)=>filteredTask.isDone==true).length;
  }

function handleDeleteTask(idTask:number){
  const filteredTask = tarefas.filter((taskToDelete)=>taskToDelete.id!=idTask);

  setTask(filteredTask)
  toast.success("Tarefa deletada com sucesso")

  }

  function handleChangeCheckBox(idTask:number){
      const tarefasEditadas =   tarefas.map((tarefa)=>{
           if(tarefa.id==idTask){
            tarefa.isDone=!tarefa.isDone;
           }
           return tarefa;
         })
         setTask(tarefasEditadas);
  }

function handleCreateTask(event:FormEvent){
  event.preventDefault();

  setTask([...tarefas,{content:newTaskText,isDone:false, id:generateRandomId(), handleDeleteTask, handleChangeCheckBox}]);
  setNewTaskText("");
  console.log("Chamando handle create Task");
}

function handleTextChange(event:ChangeEvent<HTMLInputElement>){
    console.log(event.target.value);
    setNewTaskText(event.target.value);
}

  return (
    <>   
   
   <Header/>  

      <form>
         <FormContent  value={newTaskText} handleTextChange={handleTextChange}  handleCreateTask={handleCreateTask} />
      </form>
       
      <div className={style.containerButtons}>
    

            <TotalTaskButton totalCreatedTask={tarefas.length}/>
            <TotalFinishedTask  totalCreatedTasks={tarefas.length} totalFinishedTaskTask={countTotalFinishedTasks()}  />
       </div>

       <div className={style.containerContent}> 
    
             {
             tarefas.length==0?   <EmptyBox/>:
             tarefas.map((task)=>
             <Task handleDeleteTask={handleDeleteTask} handleChangeCheckBox={handleChangeCheckBox}  id={task.id} key={task.id} isDone={task.isDone} content={task.content} />)
             }
       </div>

      
    </>
  );
}

export default App;