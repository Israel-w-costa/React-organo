import Banner from './componentes/Banner/Banner';
import Empresa from './componentes/Empresa';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';



function App() {
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])

  }

  const [empresas,setEmpresas] = useState( [
    {
      id:uuidv4,
        nome: 'Nintendo',
        cor: '#e73f4d',
    },
    {
      id:uuidv4,
        nome: 'Playtation',
        cor: '#52D3D8',
    },
    {
      id:uuidv4,
        nome: 'Xbox',
        cor: '#65B741',
    },
    {
      id:uuidv4,
        nome: 'Pc',
        cor: '#808080',
    },
    {
      id:uuidv4,
        nome: 'Mobile',
        cor: '#F4F27E  ',
    }
])

  function botaoDeletar (id) {
    setColaboradores(colaboradores.filter(
      colaborador=>colaborador.id !==id
    ))
  }

  function mudarCorDaEmpresa(cor, id) {
    setEmpresas(empresas.map(empresa => {
        if(empresa.id=== id) {
            empresa.cor = cor;
        }
        return empresa;
    }));
}

function cadastrarEmpresa(novaEmpresa) {
  setEmpresas([...empresas, { ...novaEmpresa, id: uuidv4 } ])
} 

  
 
  return (
    
    <div className='App'> 
      <Banner/>
      <Formulario
      cadastrarEmpresa ={cadastrarEmpresa}
       empresas={empresas.map(empresa=>empresa.nome)} 
       aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} 
      />
      {empresas.map(empresa =>
        <Empresa
          mudarCor={mudarCorDaEmpresa}
          key={empresa.nome} 
          nome={empresa.nome} 
          cor={empresa.cor}
          colaboradores={colaboradores.filter(colaborador=>colaborador.empresa === empresa.nome)}
          aoDeletar={botaoDeletar}
          id={uuidv4}
          />)
      }

      <Rodape/>
    </div>
  );
  }
  
export default App;
