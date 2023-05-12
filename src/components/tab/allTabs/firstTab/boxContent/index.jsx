import style from './style.module.css';
function BoxContent(props) {
  return (
    <div className={style.boxContent}>
      {props.children}
    </div>
  );
}
export default BoxContent;