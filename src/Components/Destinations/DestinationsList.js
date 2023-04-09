import Button from '../UI/Button';
import styles from './DestinationsList.module.css';

const DestinationsList = props => {
    return (
        <div className={styles.destinationsLists}>
            <div className={styles.listContainer}>

                <div className={styles.individual}>
                    <div className={styles.individualDestination} id={styles.iD1}></div>
                    <Button className={styles.destinationName}>AFRICA</Button>
                </div>

                <div className={styles.individual}>
                    <div className={styles.individualDestination} id={styles.iD2}></div>
                    <Button className={styles.destinationName}>ASIA</Button>
                </div>

                <div className={styles.individual}>
                    <div className={styles.individualDestination} id={styles.iD3}></div>
                    <Button className={styles.destinationName}>AUSTRALIA</Button>
                </div>

            </div>

            <div className={styles.listContainer}>
                <div className={styles.individual}>
                    <div className={styles.individualDestination} id={styles.iD4}></div>
                    <Button className={styles.destinationName}>EUROPE</Button>
                </div>

                <div className={styles.individual}>
                    <div className={styles.individualDestination} id={styles.iD5}></div>
                    <Button className={styles.destinationName}>NORTH AMERICA</Button>
                </div>

                <div className={styles.individual}>
                    <div className={styles.individualDestination} id={styles.iD6}></div>
                    <Button className={styles.destinationName}>SOUTH AMERICA</Button>
                </div>

            </div>
        </div>
    );
};

export default DestinationsList;