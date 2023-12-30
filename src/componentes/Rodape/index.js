import './Rodape.css'

const Rodape = () => {
    return (
      <div className='rodape'>
        <div className='rodape_container'>
          <ul className='rodape_logos'>
           <li> <a href='https://www.facebook.com/'> <img src="/imagens/fb.png" alt='logo do Facebook'/> </a> </li>
           <li> <a href='https://www.twitter.com/'> <img src="/imagens/tw.png" alt='logo do Twitter'/> </a> </li>
           <li> <a href="https://www.instagram.com/"> <img src="/imagens/ig.png" alt='logo do Instragram'/> </a> </li>
          </ul>
          <div>
            <img src="/imagens/logo.png" alt='logo do Organo'/>
          </div>
          <div>
            <h5> desenvolvindo pela Alura</h5>
          </div>
        </div>
        <div className='rodape_link'>
          <a href="https://icons8.com"> Site do icone <strong>Icons8</strong></a>
        </div> 
      </div>   
    )
}

export default Rodape