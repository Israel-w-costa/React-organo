import "./Colaborador.css"

const Colaborador = ({nome,ano,imagem,corDeFundo}) => {

    return (
       <div className="colaborador">
        
        <div className="cabecalho">
            <img src={imagem} alt= {nome} ></img>
        </div>

        <div className="rodape">
        <h5>
        {nome}
        </h5>
        <h4>
        {ano}
        </h4>
        </div>

       </div>
    )
}

export default Colaborador
