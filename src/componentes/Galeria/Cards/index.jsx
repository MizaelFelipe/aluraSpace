import React from 'react'
import open from "../../Galeria/open.png"
import favorito from "../../Galeria/favorito.png"


export default function Cards({itens, styles}) {
    return (
        <ul className={styles.galeria__cards}>
            {itens.map((itens) => {
                return (
                    <li key={itens.id} className={styles.galeria__card}>
                        <img className={styles.galeria__imagem} src={itens.imagem} alt={itens.título} />
                        <p className={styles.galeria__descricao}> alt={itens.titulo} </p>
                        <div>
                            <p>{itens.creditos}</p>
                            <span>
                                <img src={favorito} alt="ícone coração de curtir" />
                                <img src={open} alt="ícone para abrir modal" />
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
