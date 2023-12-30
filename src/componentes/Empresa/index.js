import Colaborador from '../Colaborador'
import './Empresa.css'

const Empresa = (props) => {
    return (
       (props.colaboradores.length >0) && <section className='empresa' style={{ backgroundColor: props.corSecundaria }}>
            <h3>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador  key={colaborador.nome} nome={colaborador.nome} ano ={colaborador.ano} imagem={colaborador.imagem} /> )}
            </div>
        </section>
    )
}


export default Empresa