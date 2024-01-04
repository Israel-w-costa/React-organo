import { IoIosCloseCircle } from "react-icons/io";
import "./Colaborador.css"

const Colaborador = (props) => {

    return (
       <div className="colaborador" >
        <IoIosCloseCircle className="deletar" size={25} onClick={()=> props.aoDeletar(props.id)} />
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
