import React from 'react'
import home from '../../assets/icones/home.png'
import maisCurtidas from '../../assets/icones/mais-curtidas.png'
import maisVistas from '../../assets/icones/mais-vistas.png'
import novas from '../../assets/icones/novas.png'
import surpreendaMe from '../../assets/icones/home.png'
import styles from './menu.module.scss'
import "../../assets/icones/fontes/GandhiSans-Bold.otf"
import "../../assets/icones/fontes/GandhiSans-Regular.otf"


export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={home} alt="" />
                <a href="/"> Inicio</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maisCurtidas} alt="" />
                <a href="/"> Mais curtidas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maisVistas} alt="" />
                <a href="/"> Mais vistas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={novas} alt="" />
                <a href="/"> Novas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={surpreendaMe} alt="" />
                <a href="/"> Surpreenda-me</a>
            </li>
        </ul>
    </nav>
  )
}
