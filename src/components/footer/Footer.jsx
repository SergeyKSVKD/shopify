import styles from './Footer.module.css'
import { format } from 'date-fns'
import { ReactComponent as FacebookIcon } from './assets/facebook.svg'
import { ReactComponent as InstagramIcon } from './assets/instagram.svg'
import { ReactComponent as TwitterIcon } from './assets/twitter.svg'
import { ReactComponent as SocioalIcon } from './assets/social.svg'
import { ReactComponent as YoutubeIcon } from './assets/youtube.svg'
import { ReactComponent as LogoIcon } from './assets/logo.svg'

export const Footer = () => {
    return (
        <>
            <div className={styles.footer__container}>
                <div className={styles.slideshow} />
                <div className={styles.footer__content}>
                    <div className={styles.footer__top}>
                        <div className={styles.footer__about}>
                            <LogoIcon />
                            <span className={styles.footer__about__text}>Good health is important, so all of our products have been carefully designed to bring out the best in you.</span>
                        </div>

                        <div className={styles.footer__subscribe}>
                            <span className={styles.footer__subscribe__title}>Keep In Touch</span>
                            <span className={styles.footer__subscribe__subtitle}>Subscribe to receive new product updates, be the first to know about sales, and more.</span>
                            <div className={styles.footer__subscribe__area}>
                                <span className={styles.footer__subscribe__area__text}>Enter your email address</span>
                                <span className={styles.footer__subscribe__area__title}>Subscribe</span>
                            </div>
                            <span className={styles.footer__subscribe__line}></span>
                        </div>

                        <div className={styles.footer__info}>
                            <span className={styles.footer__info__title}>MORE INFO</span>
                            <span className={styles.footer__info__text}>Shipping & Delivery</span>
                            <span className={styles.footer__info__text}>Refund Policy</span>
                            <span className={styles.footer__info__text}>Partner Program</span>
                            <span className={styles.footer__info__text}>Wholesale Portal</span>
                            <span className={styles.footer__info__text}>You Buy, We Donate</span>
                            <span className={styles.footer__info__text}>Privacy Policy</span>
                            <span className={styles.footer__info__text}>Terms & Conditions</span>
                        </div>
                    </div>

                    <div className={styles.footer__bottom}>
                        <div className={styles.social__container}>
                            <FacebookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                            <SocioalIcon />
                            <YoutubeIcon />
                        </div>
                        <div className={styles.date}>© {format(new Date(), 'dd.MM.yyyy')}, <span className={styles.date__text__color}>GOOD4ME</span>. Powered by Shopify</div>
                        <div className={styles.payment}>
                            <img src={require('./assets/payment.png')} alt="payments" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}