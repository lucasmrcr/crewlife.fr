import React from 'react'
import Navigation from './components/Navigation'
import background from '../../assets/images/background.png'

const Header: React.FC =  () => (
    <header className="page-header" style={{backgroundImage: `url(${background})`}}>
        <Navigation />

        <section className="welcome">
            <h1>Bienvenue sur le serveur <span>CrewLife</span> !</h1>
            <h4>Serveur <span>Arma 3</span> Altis Life roleplay & pvp.</h4>
        </section>
    </header>
)

export default Header