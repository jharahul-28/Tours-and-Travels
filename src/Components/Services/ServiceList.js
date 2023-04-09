import styles from './ServiceList.module.css';
import Button from '../UI/Button'

const ServiceList = props => {
    return(
        <div className={styles.serviceList}>
            <ul>
                <li>
                    <div className={styles.individualService} id={styles.iS1}></div>
                    <Button>TREKKING</Button>
                </li>
                <li>
                    <div className={styles.individualService} id={styles.iS2}></div>
                    <Button>WATER SPORTS</Button>
                </li>
                <li>
                    <div className={styles.individualService} id={styles.iS3}></div>
                    <Button>LODGING</Button>
                </li>
                <li>
                    <div className={styles.individualService} id={styles.iS4}></div>
                    <Button>SKY-DIVING</Button>
                </li>
                <li>
                    <div className={styles.individualService} id={styles.iS5}></div>
                    <Button>CUISINE</Button>
                </li>
                <li>
                    <div className={styles.individualService} id={styles.iS6}></div>
                    <Button>TRANSPORTATION</Button>
                </li>
                <li>
                    <div className={styles.individualService} id={styles.iS7}></div>
                    <Button>GUIDE</Button>
                </li>
            </ul>
        </div>
    );
};

export default ServiceList;