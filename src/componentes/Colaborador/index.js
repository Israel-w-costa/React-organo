import "./Colaborador.css"

const Colaborador = (props) => {

    return (
       <div className="colaborador">
        <div className="deletar" onClick={props.aoDeletar}>deletar</div>
        <div className="cabecalho">
            <img src={props.imagem} alt= {props.nome} ></img>
        </div>

        <div className="rodape">
            <h5>
            {props.nome}
            </h5>
            <h4>
            {props.ano}
            </h4>
        </div>

       </div>
    )
}

export default Colaborador
