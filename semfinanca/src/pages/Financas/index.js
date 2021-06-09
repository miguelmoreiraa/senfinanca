/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react'
import './styles.css';

import { IoIosAddCircleOutline } from "react-icons/io";
import { GrEdit } from "react-icons/gr";
import { BiTrash } from "react-icons/bi";

import Header from '../../components/Header'
import TitleType from '../../components/TitleType';
import TitleCategory from '../../components/TitleCategory';
import TitlePrice from '../../components/TitlePrice';
import TitleDate from '../../components/TitleDate';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from '../../components/Modal';




function CadastroGasto() {

    const [gasto, setGasto] = useState([])
    const [abrir, setAbrir] = useState(false)
    const [id, setId] = useState(false)

    const [pagamento, setPagamento] = useState('')
    const [recebimento, setRecebimento] = useState('')


    const carregarGastos = () => {
        axios.get('https://60b8f73980400f00177b5f1b.mockapi.io/semfinanca/gastos').then(function (resposta) {
            setGasto(resposta.data)
            pagamentosConfirmados()
        }).catch(function (error) {
            console.log(error)
        })
    }

    const deletarGastos = (id) => {
        axios.delete(`https://60b8f73980400f00177b5f1b.mockapi.io/semfinanca/gastos/${id}`).then(function (resposta) {
            if (resposta.status === 200) {
                alert("Excluído com sucesso!")
                location.reload()
            } else {
                alert("Erro ao excluir")
            }
            console.log(resposta)
        }).catch(function (error) {
            console.log(error)
        })
    }


    const pagamentosConfirmados = () => {
        gasto.forEach(item => {
            if (item.tipo === "Entrada") {
                console.log("Entrada " + parseInt(item.valor))
                setRecebimento(parseInt(item.valor))
            }
            else if (item.tipo === "Saida") {
                console.log("Saida " + parseInt(item.valor))
                setPagamento(parseInt(item.valor))
            }
        })
    }




    useEffect(() => {
        carregarGastos()
        pagamentosConfirmados()
    })






    return (
        <div className="page-cadastro-financas">
            {
                abrir ? <Modal OnAbrir={setAbrir} id={id} /> : React.Fragment
            }
            <Header />
            <main className="main">
                <div className="conteudo">
                    <header className="headerGastosFinancas">
                        <div>
                            <div className="addGastos">
                                <Link to="/"><IoIosAddCircleOutline size={26} color="rgba(0,0,0,0.6)"></IoIosAddCircleOutline></Link>
                                <text> Adicione seus gastos</text>
                            </div>
                        </div>
                    </header>


                    {gasto.map((e) =>
                        <div className="titulo">
                            <div className="titles">
                                <TitleType>{e.titulo}</TitleType>
                                <TitleCategory>{e.categoria}</TitleCategory>
                            </div>
                            <div className="price">
                                <TitlePrice>{e.data}</TitlePrice>
                                <TitleDate>{e.valor}</TitleDate>
                            </div>
                            <div className="deleteEdit" >
                                <button onClick={event => deletarGastos(e.id)} ><BiTrash size={20} color="rgba(255,0,0,0.6)"></BiTrash></button>
                                <button onClick={even => {
                                    setAbrir(true)
                                    setId(e.id)
                                }}><GrEdit size={16} color="rgba(0,0,255,0.6)"></GrEdit></button>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <main>
                <div className="saldo">
                    <div className="pagamentos">
                        <label>Pagamentos:  </label>
                        <label>R$ {pagamento}</label>
                    </div>

                    <div className="pagamentos">
                        <label>Recebimentos: </label>
                        <label>R$ {recebimento}</label>
                    </div>
                    <div className="pagamentos">
                        <label>Saldo Total: </label>
                        <label>R$  {(parseInt(recebimento - pagamento))}</label>
                    </div>

                </div>
            </main>
        </div>
    );
}

export default CadastroGasto;