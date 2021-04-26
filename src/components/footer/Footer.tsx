import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Footer: React.FC = () => (
    <footer>
        <div className="footer-box">
            <ul>
                <li><a href="/#">À propos</a></li>
                <li><a href="/#">Équipe</a></li>
                <li><a href="/#">Donateur</a></li>
                <li><a href="/#">Forum</a></li>
            </ul>
        </div>
        <div className="footer-box footer-box--social-network">
            <ul>
                <li><a href="/#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                <li><a href="/#"><FontAwesomeIcon icon={['fab', 'discord']} /></a></li>
            </ul>
        </div>
        <div className="footer-box">
            <p>Copyright &copy; 2021 CrewLife.fr par Lucas</p>
        </div>
    </footer>
)

export default Footer