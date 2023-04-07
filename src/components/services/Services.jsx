import styles from './Services.module.css'
import { ReactComponent as GuaranteeIcon } from './assets/guarantee.svg'
import { ReactComponent as SecuredPaymentsIcon } from './assets/secured_payments.svg'
import { ReactComponent as WorldwideShippingicon } from './assets/worldwide_shipping.svg'

export const ServicesBlock = () => {

    return <>
        <div className={styles.services__container}>
            <div className={styles.service}>
                <WorldwideShippingicon className={styles.worldwide_shipping} />
                <div className={styles.service__ellipse} />
                <span className={styles.service__title}>WORLDWIDE SHIPPING</span>
                <span className={styles.service__description}>Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean</span>
            </div>
            <div className={styles.service}>
                <GuaranteeIcon className={styles.guarantee}/>
                <div className={styles.service__ellipse} />
                <span className={styles.service__title}>30 DAYS GUARANTEE</span>
                <span className={styles.service__description}>Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean</span>
            </div>
            <div className={styles.service}>
                <SecuredPaymentsIcon className={styles.securedPayments}/>
                <div className={styles.service__ellipse} />
                <span className={styles.service__title}>SECURED PAYMENTS</span>
                <span className={styles.service__description}>Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean</span>
            </div>
        </div>
    </>
}