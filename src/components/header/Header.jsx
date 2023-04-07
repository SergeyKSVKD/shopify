import styles from './Header.module.css'
import { ReactComponent as CountryFlag } from './assets/currensy.svg'
import { ReactComponent as ArrowIcon } from './assets/arrow.svg'
import { ReactComponent as LogoIcon } from './assets/logo.svg'
import { ReactComponent as LoupeIcon } from './assets/loupe.svg'
import { ReactComponent as BucketIcon } from './assets/bucket.svg'

export const Header = () => {
    return (
        <>
            <div className={styles.topHeader}>
                <span className={styles.text}>Afterpay, Laybuy & Genoapay | Free Delivery New Zealand + Australia*</span>
                <span className={styles.sign}>Sign In / Register</span>
                <span className={styles.line}></span>
                <div className={styles.currency}>
                    <CountryFlag />
                    <span className={styles.currency__text}>USD</span>
                    <ArrowIcon />
                </div>
            </div>
            <div className={styles.centerHeader}>
                <div className={styles.nav}>
                    <LogoIcon />
                    <div className={styles.navbar}>
                        <span className={styles.menu}>HOME</span>
                        <span className={styles.menu}>SHOP</span>
                        <span className={styles.menu}>FAQ'S</span>
                        <span className={styles.menu}>STOCKISTS</span>
                        <span className={styles.menu}>WHOLESALE</span>
                        <span className={styles.menu}>CONTACT</span>
                    </div>
                    <div className={styles.bucketContainer}>
                        <LoupeIcon />
                        <div className={styles.ellipse}>
                            <span className={styles.bucket__text}>3</span>
                        </div>
                        <BucketIcon />
                    </div>
                </div>
            </div>
        </>
    )
}