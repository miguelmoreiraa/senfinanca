import React, { useState } from 'react';
import './styles.css';

import Header from '../../components/Header'
import Input from '../../components/Input';
import TitleForm from '../../components/TitleForm';
import axios from 'axios';
import { useHistory } from 'react-router';

function CadastroGasto() {

    let history = useHistory()
    const [titulo, setTitulo] = useState()
    const [tipo, setTipo] = useState()
    const [categoria, setCategoria] = useState()
    const [valor, setValor] = useState()



    const onSubmit = (e) => {
        e.preventDefault()
        let data = new Date().toLocaleDateString()
        axios.post('https://60b8f73980400f00177b5f1b.mockapi.io/semfinanca/gastos', {
            titulo: titulo,
            tipo: tipo,
            categoria: categoria,
            valor: valor,
            data: data
        }).then(function (resposta) {
            console.log(resposta)
        }).catch(function (error) {
            console.log(error)
        })
    }



    const handleClick = () => {
        history.push("/financas")
    }




    return (
        <div className="page-cadastro-gasto">
            <Header />
            <form className="form" onSubmit={onSubmit}>
                <div className="conteudo">
                    <header className="headerGastos">Cadastre seus gastos</header>
                    <TitleForm>Seus Dados</TitleForm>
                    <hr className="hr"></hr>

                    <TitleForm>Titulo</TitleForm>
                    <Input
                        name="titulo"
                        type="text"
                        required
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                    />
                    <TitleForm>Tipo (Entrada ou Saída)</TitleForm>
                    <Input
                        name="tipo"
                        type="text"
                        required
                        value={tipo}
                        onChange={e => setTipo(e.target.value)}
                    />
                    <TitleForm>Categoria</TitleForm>
                    <Input
                        name="categoria"
                        type="text"
                        required
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    />
                    <TitleForm>Valor</TitleForm>
                    <Input
                        name="valor"
                        type="number"
                        required
                        value={valor}
                        onChange={e => setValor(e.target.value)}
                    />
                </div>
                <button className="botão">Adicionar Gastos</button>
            </form>
            <div className="verGastos">
                <button onClick={handleClick}>Veja seus gastos</button>
            </div>
        </div>
    );
}

export default CadastroGasto;