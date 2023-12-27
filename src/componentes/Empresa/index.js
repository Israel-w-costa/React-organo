import Colaborador from '../Colaborador'
import './Empresa.css'

const Empresa = (props) => {
    return (
        <section className='empresa' style={{ backgroundColor: props.corSecundaria }}>
            <h3>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} ano ={colaborador.ano} imagem={colaborador.imagem} /> )}
            </div>
        </section>
    )
}


export default Empresa