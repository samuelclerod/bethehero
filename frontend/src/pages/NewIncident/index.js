import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './style.css'
import logo from '../../assets/logo.svg'
import api from '../../services/api'

export default function NewIncident() {
    const history = useHistory()
    const ongId = localStorage.getItem('ongId')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    function handleNewIncident(e) {
        e.preventDefault()
        const data = {
            title,
            description,
            value
        }
        api.post('incidents', data, {
            headers: { Authorization: ongId }
        }).then(response => {
            history.push('/profile')
        }).catch(error => {
            alert('Não foi possívelcadastrar o caso, tente novamente.')
        })
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logo} alt="be the hero" />
                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva o texto detalhadamente para achar um herói para resolver isso.</p>

                    <Link className="backlink" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="Título do Caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)} />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)} />
                    <input
                        placeholder="valor em Reais"
                        value={value}
                        onChange={e => setValue(e.target.value)} />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}