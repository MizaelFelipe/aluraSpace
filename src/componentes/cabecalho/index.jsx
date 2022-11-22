import logo from './logo.png'
import search from './search.png'
export default function Cabecalho() {
    return(
        <header>
            <img src={logo} alt="Logo alura Space" />
            <div>
                <input type="text"
                placeholder="O que voce procura ?"/>
                <img src={search} alt="icone de lupa" />
            </div>
        </header>
    )
}