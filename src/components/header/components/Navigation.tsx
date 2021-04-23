import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navigation: React.FC =  () => (
    <nav className="page-header--navbar">
            <div className="search-bar">
                <form>
                    <label>
                        <input type="text" placeholder="Recherchez un joueur..."/>
                        <FontAwesomeIcon icon={['fas', 'search']} />
                    </label>
                </form>
            </div>

            <div className="menu">
                <ul>
                    <li className="active"><a href="/">Accueil</a></li>
                    <li><a href="/#forum">Forum</a></li>
                    <li><a href="/#statistiques">Statistiques</a></li>
                </ul>
            </div>
        </nav>
)

export default Navigation