import axios from 'axios';
import React, { useState } from 'react'
import './styles.css';


function Modal(e) {


    const [titulo, setTitulo] = useState()
    const [tipo, setTipo] = useState()
    const [categoria, setCategoria] = useState()
    const [valor, setValor] = useState()


    const fechar = () => {
        e.OnAbrir(false)
        console.log(e)
    }

    const atualizar = () => {
        axios.put(`https://60b8f73980400f00177b5f1b.mockapi.io/semfinanca/gastos/${e.id}`, {
            titulo: titulo,
            categoria: categoria,
            tipo: tipo,
            valor: valor
        }).then(function (resposta) {
            if (resposta.status === 200) {
                alert("atualizado com sucesso")
                fechar()
                window.location.reload()
            }
        }).catch(function (error) {
            console.log(error)
        })
    }



    return (
        <div className="modal">
            <label className="labelEdicao">Título</label>
            <input
                value={titulo}
                onChange={e => setTitulo(e.target.value)}
            />

            <label className="labelEdicao">Tipo</label>
            <input
                value={tipo}
                onChange={e => setTipo(e.target.value)}
            />
            <label className="labelEdicao">Categoria</label>
            <input
                value={categoria}
                onChange={e => setCategoria(e.target.value)}
            />

            <label className="labelEdicao">Valor</label>
            <input
                value={valor}
                onChange={e => setValor(e.target.value)}
            />


            <div className="buttons">
                <button onClick={event => atualizar()}>Atualizar</button>
                <button onClick={e => fechar()}>Cancelar</button>
            </div>
        </div>

    );
}

export default Modal;