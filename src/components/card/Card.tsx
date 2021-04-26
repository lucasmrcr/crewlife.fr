import React, {ReactElement, ReactNode} from 'react'

interface CardProps {
    children: ReactElement[] | ReactNode
    category?: CardCategory
}

enum CardCategory {
    PRIMARY,
    SECONDARY
}

const Card: React.FC<CardProps> = ({children, category = CardCategory.PRIMARY}) => (
    <div className="card">
        {children}
    </div>
)

export default Card;