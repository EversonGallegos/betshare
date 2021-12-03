import React from 'react'
import { Container } from '../components/styles/app.styles'
import Header from './Header'
const Layout = ({children}) => {

    return (
            <Container>
                <Header />
                {children}
            </Container>
    )
}

export default Layout
