import Colaborador from '../Colaborador'
import './Empresa.css'

const Empresa = (props) => {
    return (
       (props.colaboradores.length >0) && <section className='empresa' style={{ backgroundColor: props.cor }}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.nome)}  value={props.cor} type='color' className='input-color'/>
            <h3>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => 
              {
              return  <Colaborador  key={colaborador.nome} nome={colaborador.nome} ano ={colaborador.ano} imagem={colaborador.imagem} aoDeletar={props.aoDeletar} /> 
              }
              )}
            </div>
        </section>
    )
}


export default Empresa