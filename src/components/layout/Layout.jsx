import styles from './Layout.module.css'
import { Header, Footer } from '../index'

export const Layout = ({ children }) => {

    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <Header />
            </header>
            <div className={styles.main}>
                {children}
            </div>
            <footer className={styles.footer} >
                <Footer />
            </footer>
        </div>
    )
}