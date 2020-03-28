import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './style.css'
import logo from '../../assets/logo.svg'

export default function NewIncident() {
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
                <form>
                    <input placeholder="Título do Caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="valor em Reais" />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}