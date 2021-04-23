import React from 'react'

interface CardProps {
    title: string
    component: React.FC<any> | null
    category?: CardCategory
}

enum CardCategory {
    PRIMARY,
    SECONDARY
}

const Card: React.FC<CardProps> = ({title, component, category = CardCategory.PRIMARY}) => (
    <div className="card">

    </div>
)

export default Card;