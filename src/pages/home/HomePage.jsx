import { Slider, ServicesBlock } from '../../components/index'
import styles from './HomePage.module.css'

export const HomePage = () => {

    return <>
        <div className={styles.homepage__container}>
            <Slider />
            <ServicesBlock />
        </div>
    </>
}