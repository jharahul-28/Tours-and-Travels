import styles from './GMTag.module.css';
import Button from '../../UI/Button';

const GMTag = () => {
    return(
        <>
        <p className={styles.tagLine}>DISCOVER YOUR DREAMS</p>
        <div className={styles.conBut}><Button>Contact Us</Button></div>
        </>
    );
}

export default GMTag;