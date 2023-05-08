import style from './style.module.css';
function Box() {
    return (
        <div className={style.card}>
            <div className={style.card__img}></div> 
             <div className={style.data}></div>   
        </div>
    )
}
export default Box;