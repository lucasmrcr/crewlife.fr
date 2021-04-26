import React from 'react'
import Card from '../card'
import Mate from './components/Mate'
import BigButton from '../big-button'

const Team: React.FC = () => (
    <Card>
        <header className="card--header">
            <p>Rencontrez Notre Équipe</p>
            <p><small>Nous sommes constamment à la recherche de nouveaux talents.</small></p>

            <BigButton className="big-button--bottom" name="Rejoignez-nous" url="https://forum.crewlife.fr" />
        </header>
        <section className="card--body">
            <Mate
                name="Shad Brossard"
                avatarUrl="https://cdn.discordapp.com/avatars/443489413993857037/edaf7e967918953925287c5aec7adac4.png?size=128"
                role="Fondateur" />
            <Mate
                name="Bodino Brossard"
                avatarUrl="https://cdn.discordapp.com/avatars/328608563549175808/06eaec8c5e49a01002acb953211edd0a.png?size=128"
                role="Fondateur" />
            <Mate
                name="Luc Hataway"
                avatarUrl="https://cdn.discordapp.com/avatars/232103662711734274/8febd9be84e66803308ec78a940c7b3b.png?size=128"
                role="Fondateur" />
            <Mate
                name="Ziouf"
                avatarUrl="https://cdn.discordapp.com/avatars/310768000506658816/70362d96dc8429485a3b7927416bae74.png?size=128"
                role="Fondateur" />
            <Mate
                name="Saisaka Brossard"
                avatarUrl="https://cdn.discordapp.com/avatars/246337178479755264/cb24c8b8d9d192f89a6efb19d5a21f75.png?size=128"
                role="Fondateur" />
            <Mate
                name="Lucas"
                avatarUrl="https://cdn.discordapp.com/avatars/285102125959086080/40fc9f371d6076438f5b0d0801710cb3.png?size=128"
                role="Admin" />
        </section>
    </Card>
)

export default Team;