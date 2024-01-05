import './Campo.css'

const Campo = ({type='text',placeholder,aoAlterado,label,valor,obrigatorio=true,}) => {
    const placeholderModificado = `${placeholder}...`

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }
    
    
    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
                <input type={type} value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholderModificado}/>
        </div>
    )
};

export default Campo