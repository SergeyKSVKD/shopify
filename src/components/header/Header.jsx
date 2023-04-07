import styles from './Header.module.css'
import cn from 'classnames'
import { ReactComponent as USAFlag } from './assets/usa.svg'
import { ReactComponent as EUFlag } from './assets/eu.svg'
import { ReactComponent as RUFlag } from './assets/ru.svg'
import { ReactComponent as ArrowIcon } from './assets/arrow.svg'
import { ReactComponent as LogoIcon } from './assets/logo.svg'
import { ReactComponent as LoupeIcon } from './assets/loupe.svg'
import { ReactComponent as BucketIcon } from './assets/bucket.svg'
import { ReactComponent as MenuIcon } from './assets/menu.svg'
import { ReactComponent as AuthIcon } from './assets/auth.svg'
import { useResize } from '../../helpers/index'
import { useState } from 'react'

export const Header = () => {
    const size = useResize()
    const initialState = {
        menu: false,
        auth: false,
        search: false,
        currency: false,
        bucket: false,
    }

    const [activeMenu, setActiveMenu] = useState(initialState)
    const [currency, setCurrency] = useState('USD')
    const bucketItems = 3

    function currencyHandler(e) {
        setCurrency(e.target.dataset.currency)
        setActiveMenu(initialState)
    }

    return (
        size.isScreenLg ?
            <>
                <div className={styles.topHeader}>
                    <span className={styles.text}>Afterpay, Laybuy & Genoapay | Free Delivery New Zealand + Australia*</span>
                    <span className={styles.sign}>Sign In / Register</span>
                    <span className={styles.line}></span>
                    <div className={styles.currency__container}
                        onClick={() => setActiveMenu({
                            ...initialState,
                            currency: !activeMenu.currency,
                        })}>
                        {currency === 'USD' ? <div className={styles.currency}>
                            <USAFlag />
                            <span className={styles.currency__active__text}>USD</span>
                            <ArrowIcon className={styles.currency__arrow__color} />
                        </div> : null}
                        {currency === 'EUR' ? <div className={styles.currency}>
                            <EUFlag />
                            <span className={styles.currency__active__text}>EUR</span>
                            <ArrowIcon className={styles.currency__arrow__color} />
                        </div> : null}
                        {currency === 'RUB' ? <div className={styles.currency}>
                            <RUFlag />
                            <span className={styles.currency__active__text}>RUB</span>
                            <ArrowIcon className={styles.currency__arrow__color} />
                        </div> : null}
                        <div className={cn(styles.currency__select, {
                            [styles.active]: activeMenu.currency
                        })}>
                            <span data-currency='USD'
                                onClick={currencyHandler}
                                className={cn(styles.currency__text, {
                                    [styles.active__currency]: currency === 'USD'
                                })}>USD</span>
                            <span data-currency='EUR'
                                onClick={currencyHandler}
                                className={cn(styles.currency__text, {
                                    [styles.active__currency]: currency === 'EUR'
                                })}>EUR</span>
                            <span data-currency='RUB'
                                onClick={currencyHandler}
                                className={cn(styles.currency__text, {
                                    [styles.active__currency]: currency === 'RUB'
                                })}>RUB</span>
                        </div>
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
                                <span className={styles.bucket__text}>{bucketItems}</span>
                            </div>
                            <BucketIcon />
                        </div>
                    </div>
                </div>
            </>
            :
            <>
                <div className={styles.compact__container}>
                    <div className={styles.header__compact}>
                        <div className={styles.menu__wrapper}>
                            <MenuIcon className={styles.menu__button}
                                onClick={() => setActiveMenu({
                                    ...activeMenu,
                                    menu: !activeMenu.menu
                                })}
                            />
                            <div className={cn(styles.compact__menu, {
                                [styles.active]: activeMenu.menu
                            })}>
                                <span className={styles.menu}>HOME</span>
                                <span className={styles.menu}>SHOP</span>
                                <span className={styles.menu}>FAQ'S</span>
                                <span className={styles.menu}>STOCKISTS</span>
                                <span className={styles.menu}>WHOLESALE</span>
                                <span className={styles.menu}>CONTACT</span>
                            </div>
                        </div>
                        {size.isScreenSm ? <LogoIcon /> : null}
                        <div className={styles.compactBucketContainer}>
                            <LoupeIcon />
                            <AuthIcon />
                            <div className={styles.ellipse}>
                                <span className={styles.bucket__text}>{bucketItems}</span>
                            </div>
                            <div className={styles.currency__compact__container}
                                onClick={() => setActiveMenu({
                                    ...initialState,
                                    currency: !activeMenu.currency,
                                })}
                            >
                                {currency === 'USD' ? <div className={styles.currency__compact}>
                                    <USAFlag />
                                    <span className={styles.currency____compact__active__text}>USD</span>
                                    <ArrowIcon className={styles.currency__compact__arrow__color} />
                                </div> : null}
                                {currency === 'EUR' ? <div className={styles.currency__compact}>
                                    <EUFlag />
                                    <span className={styles.currency____compact__active__text}>EUR</span>
                                    <ArrowIcon className={styles.currency__compact__arrow__color} />
                                </div> : null}
                                {currency === 'RUB' ? <div className={styles.currency__compact}>
                                    <RUFlag />
                                    <span className={styles.currency____compact__active__text}>RUB</span>
                                    <ArrowIcon className={styles.currency__compact__arrow__color} />
                                </div> : null}
                                <div className={cn(styles.currency__compact__select, {
                                    [styles.active]: activeMenu.currency
                                })}>
                                    <span data-currency='USD'
                                        onClick={currencyHandler}
                                        className={cn(styles.currency__text__compact, {
                                            [styles.active__currency]: currency === 'USD'
                                        })}>USD</span>
                                    <span data-currency='EUR'
                                        onClick={currencyHandler}
                                        className={cn(styles.currency__text__compact, {
                                            [styles.active__currency]: currency === 'EUR'
                                        })}>EUR</span>
                                    <span data-currency='RUB'
                                        onClick={currencyHandler}
                                        className={cn(styles.currency__text__compact, {
                                            [styles.active__currency]: currency === 'RUB'
                                        })}>RUB</span>
                                </div>
                            </div>
                            <BucketIcon />
                        </div>
                    </div>
                </div>
            </>
    )
}