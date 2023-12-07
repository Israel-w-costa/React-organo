import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from '../ListaSuspensa';

const Formulario = () => {
    
    const empresas = [
        "Nintendo",
        "Playstation",
        "Xbox",
        "Pc",
        "Mobile"
      ]
    
    return (
        <section className="formulario">
            <form>
            <h2>Preença os dados para criar o card do jogo  </h2>
                <CampoTexto label='Nome' placeholder='Digite o seu nome' />
                <CampoTexto label='Ano do lançamento' placeholder='Digite o ano do lançamento' />
                <CampoTexto label='Imagem' placeholder='Digite o endereço de imagem' />
                <ListaSuspensa label ="Empresa" itens = {empresas}/>
            </form>
        </section>
    )
}

export default Formulario