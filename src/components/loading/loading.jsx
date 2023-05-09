import styles from './style.module.css';
import loading from '../../img/loading.svg'
function Loading() {
    return (
        <div className={styles.loading}>
            <img src={loading} alt="loading" />
        </div>
    )
}
export default Loading;