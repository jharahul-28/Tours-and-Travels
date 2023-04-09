import styles from './Heading.module.css';

const Heading = props => {
    return (
        <div className={styles.heading}>
            <h1>{props.h}</h1>
        </div>
    );
};

export default Heading;