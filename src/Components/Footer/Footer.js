import Heading from '../UI/Heading';
import styles from './Footer.module.css';

const Footer = props => {
    return (
        <div className={styles.contactUs}>
            <Heading h="Contact Details"/>
            <div className={styles.footer}>
                <h3>Our Social Media Handles</h3>
                <h3>Headquarters</h3>
                <h3>Phone Number</h3>
                <div className={styles.SocialMedia}>
                    <div className={styles.iGfByT}>
                        <i class="fa-brands fa-instagram fa-lg"></i>
                        <p className={styles.socialMediaNames}>Instagram</p>
                    </div>
                    <div className={styles.iGfByT}>
                        <i class="fa-brands fa-facebook-f fa-lg"></i>
                        <p className={styles.socialMediaNames}>Facebook</p>
                    </div>
                    <div className={styles.iGfByT}>
                        <i class="fa-brands fa-youtube fa-lg"></i>
                        <p className={styles.socialMediaNames}>YouTube</p>
                    </div>
                </div>
                <div className={styles.Headquarters}>
                    <ul>
                        <li>Mumbai</li>
                        <li>Paris</li>
                        <li>New York</li>
                        <li>Melbourne</li>
                    </ul>
                </div>
                <div className={styles.PhoneNumber}>
                    <ul>
                        <li>+91-1122334455</li>
                        <li>+01-6677889900</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;