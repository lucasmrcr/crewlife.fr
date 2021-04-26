import React from 'react'

interface MateProps {
    name: string
    avatarUrl: string
    role: string
}

const Mate: React.FC<MateProps> = ({name, avatarUrl, role}) => (
    <div className="team-mate">
        <img src={avatarUrl} alt={`Profil de ${name}`} />
        <p className="team-mate--name">{name}</p>
        <p className="team-mate--role"><small>{role}</small></p>
    </div>
)

export default Mate