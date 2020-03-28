import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import heroesImg from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'

function Logon() {

    const history = useHistory();

    const [id, setId] = useState('')

    function handleLogin(e) {
        e.preventDefault()
        api.post('/sessions', { id }).then((response) => {
            console.log(response.data.name)
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)
            history.push('profile')
        }).catch((error) => {
            alert('Falha no log-in, tente novamente.', error)
        })
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Be The Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)} />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="backlink" to="/register">
                        <FiLogIn size={16} color="#E02041" />Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="heroes" />
        </div>
    )
}

export default Logon