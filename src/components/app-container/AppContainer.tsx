import React from 'react'

interface AppContainerProps {
    children: React.ReactElement[] | React.ReactNode
}

const AppContainer: React.FC<AppContainerProps> = ({children}) => (
    <section className="main-app-section">
        {children}
    </section>
)
export default AppContainer