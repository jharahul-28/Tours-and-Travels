import Navbar from "../Navbar/Navbar";
import styles from './Hero.module.css';
import GMTag from "./GMTag/GMTag";

const Hero = () => {
    return (
        <div className={styles.heroSec}>
            <Navbar/>
            <div className={styles.gMTag}>
                <GMTag></GMTag>
            </div>
        </div>
    );
}

export default Hero;