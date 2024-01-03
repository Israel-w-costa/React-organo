import Banner from './componentes/Banner/Banner';
import Empresa from './componentes/Empresa';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import { useState } from "react";



function App() {
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])

  }

  const empresas = [
    {
        nome: 'Nintendo',
        corSecundaria: '#e73f4d',
    },
    {
        nome: 'Playtation',
        corSecundaria: '#52D3D8',
    },
    {
        nome: 'Xbox',
        corSecundaria: '#65B741',
    },
    {
        nome: 'Pc',
        corSecundaria: '#808080',
    },
    {
        nome: 'Mobile',
        corSecundaria: '#F4F27E  ',
    }
]

  function botaoDeletar () {
    console.log ('deletando colaborador')
  }

  
 
  return (
    
    <div className='App'> 
      <Banner/>
      <Formulario empresas={empresas.map(empresa=>empresa.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {empresas.map(empresa =>
        <Empresa
          key={empresa.nome} 
          nome={empresa.nome} 
          corSecundaria={empresa.corSecundaria}
          colaboradores={colaboradores.filter(colaborador=>colaborador.empresa === empresa.nome)}
          aoDeletar={botaoDeletar}
          />)
      }

      <Rodape/>
    </div>
  );
  }
  
export default App;
