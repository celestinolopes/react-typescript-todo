import style from '../Global.module.css';
import mouse from '../assets/mouse.svg';


export default function (){
    
    return (
        <div className={style.emptyBox}>
               <img src={mouse} alt="mouse icon" />
               <label>Você ainda não tem tarefas cadastradas</label>
               <span>Crie tarefas e organize os seus itens a fazer</span>
           </div>
    );

}