import Heading from '../UI/Heading';
import styles from './CustomerReview.module.css';

const CustomerReview = props => {
    return (
        <div className={styles.customerReview}>
            <Heading h='Customer Review' />
            <div className={styles.reviewList}>
                <div className={styles.individualreview} id={styles.r1}>
                    <div className={styles.imageDiv}>
                        <div className={styles.customerImg} id={styles.c1}>
                        </div>
                        <div className={styles.imgBG}></div>
                    </div>
                    <div className={styles.reviewPara} id={styles.iCR1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum laudantium, expedita nulla dignissimos doloremque harum in assumenda tempore quasi, blanditiis architecto nam consequatur provident earum. Sed fugiat consequuntur vel dolore itaque vitae tempora voluptate rerum minima maxime, amet doloribus modi rem dolorem, facilis obcaecati a cumque dolor, molestiae velit autem? Sed est labore harum nobis provident expedita, laudantium quisquam velit.
                    </div>
                </div>

                <div className={styles.individualreview} id={styles.r2}> 
                    <div className={styles.imageDiv}>
                        <div className={styles.customerImg} id={styles.c2}>
                        </div>
                        <div className={styles.imgBG}></div>
                    </div>
                    <div className={styles.reviewPara} id={styles.iCR2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum laudantium, expedita nulla dignissimos doloremque harum in assumenda tempore quasi, blanditiis architecto nam consequatur provident earum. Sed fugiat consequuntur vel dolore itaque vitae tempora voluptate rerum minima maxime, amet doloribus modi rem dolorem, facilis obcaecati a cumque dolor, molestiae velit autem? Sed est labore harum nobis provident expedita, laudantium quisquam velit.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerReview;