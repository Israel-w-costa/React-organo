import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from '../ListaSuspensa';
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {

      const [nome, setNome] = useState ("")
      const [ano, setAno] = useState ("")
      const [imagem, setImagem] = useState ("")
      const [empresa, setEmpresa] = useState ("")

      const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado ({
          nome,
          ano,
          imagem,
          empresa
      })
      setNome('')
      setAno('')
      setImagem('')
      setEmpresa('')
      }

    return (
        <section className="formulario" >
            <form onSubmit={aoSalvar}>
            <h2>Preença os dados para criar o card do jogo  </h2>
                <CampoTexto obrigatorio={true} 
                label='Nome' 
                placeholder='Digite o seu nome'
                valor = {nome}                
                aoAlterado ={valor =>setNome(valor)}
                />
                <CampoTexto obrigatorio={true}
                 label='Ano do lançamento'
                  placeholder='Digite o ano do lançamento'
                  valor = {ano}                
                aoAlterado ={valor =>setAno(valor)}
                  />
                <CampoTexto label='Imagem'
                 placeholder='Digite o endereço de imagem'
                 valor = {imagem}                
                aoAlterado ={valor =>setImagem(valor)}
                 />
                <ListaSuspensa obrigatorio={true}
                 label ="Empresa"
                  itens = {props.empresas}
                  valor={empresa}
                  aoAlterado={valor=>setEmpresa(valor)}
                  />
                <Botao> Cria Card </Botao>
            </form>
        </section>
    )
}

export default Formulario