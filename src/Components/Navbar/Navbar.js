import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.cName}>
                <p>DREAM TRIP</p>
            </div>
            <div className={styles.navContent}>
                <ul>
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Services</li>
                    <li>Review</li>
                    <li>Plan</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;