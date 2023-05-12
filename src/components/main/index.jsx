import style from './style.module.css';
function Main(props) {

    const [header, content, buttons] = props.children;


    return (
        <div className={style.main}>
            <div className={style.header}>         
                {header}
            </div>
            <div className={style.content}>   
                {content}
            </div>
            <div className={style.buttons}>
                {buttons}
            </div>
        </div>
    )
}
export default Main;