import React from 'react'

interface BigButtonProps {
    className: string
    name: string
    url: string
}

const BigButton: React.FC<BigButtonProps> = ({className, name, url}) => (
    <a className={`big-button ${className}`} href={url}>
        {name}
    </a>
)

export default BigButton