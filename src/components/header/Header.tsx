import React from 'react'
import Navigation from './components/Navigation'
import background from '../../assets/images/background.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Header: React.FC =  () => (
    <header className="page-header" style={{backgroundImage: `url(${background})`}}>
        <Navigation />

        <section className="welcome">
            <div className="welcome--description">
                <h1>Bienvenue sur le serveur <span>CrewLife</span> !</h1>
                <h4>Serveur <span>Arma 3</span> Altis Life roleplay & pvp.</h4>
            </div>
            <div className="welcome--play-button">
                <button>
                    <FontAwesomeIcon icon={['fas', 'play']} />
                    Rejoignez les 125 connectés
                </button>
            </div>
        </section>
    </header>
)

export default Header