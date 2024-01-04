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

  const [empresas,setempresas] = useState( [
    {
        nome: 'Nintendo',
        cor: '#e73f4d',
    },
    {
        nome: 'Playtation',
        cor: '#52D3D8',
    },
    {
        nome: 'Xbox',
        cor: '#65B741',
    },
    {
        nome: 'Pc',
        cor: '#808080',
    },
    {
        nome: 'Mobile',
        cor: '#F4F27E  ',
    }
])

  function botaoDeletar () {
    console.log ('deletando colaborador')
  }

  function mudarCorDaEmpresa(cor, nome) {
    setempresas(empresas.map(empresa => {
        if(empresa.nome=== nome) {
            empresa.cor = cor;
        }
        return empresa;
    }));
}

  
 
  return (
    
    <div className='App'> 
      <Banner/>
      <Formulario empresas={empresas.map(empresa=>empresa.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {empresas.map(empresa =>
        <Empresa
          mudarCor={mudarCorDaEmpresa}
          key={empresa.nome} 
          nome={empresa.nome} 
          cor={empresa.cor}
          colaboradores={colaboradores.filter(colaborador=>colaborador.empresa === empresa.nome)}
          aoDeletar={botaoDeletar}
          />)
      }

      <Rodape/>
    </div>
  );
  }
  
export default App;
