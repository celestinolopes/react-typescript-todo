import style from '../Global.module.css';
import logo from '../assets/logo.svg';
export default function(){
    return (
        <div className={style.header}>
        <div className={style.headerWrapper}>
          <img src={logo} className={style.logo}/>
        </div>
       </div>
    );
}