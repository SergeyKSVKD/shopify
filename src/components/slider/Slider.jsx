import styles from './Slider.module.css'

export const Slider = () => {

    return <>
        <div className={styles.slider__container}            >
            <img src={require('./assets/slider-img1.jpg')} alt="slider-img1" />
            <div className={styles.slideshow} />
            <div className={styles.shopnow}>
                <span className={styles.shopnow__title}>Good4Me</span>
                <span className={styles.shopnow__subtitle}>Apple Cider Vinegar</span>
                <span className={styles.shopnow__text}>Good4Me Apple Cider Vinegar gummies are the newest addition to your morning health and well-being regime. </span>
                <div className={styles.shopnow__button}>
                    <span className={styles.shopnow__button_text}>Shop Now</span>
                </div>
            </div>
        </div>
    </>
}