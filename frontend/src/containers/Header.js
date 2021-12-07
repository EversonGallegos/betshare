import React, { useContext } from 'react'
import CartLink from '../components/CartLink'
import LoginButton from '../components/LoginButton'
import Logo from '../components/Logo'
import LogoutButton from '../components/LogoutButton'
import { ContainerAuth, ContainerHeader, Inner } from '../components/styles/header.styles'
import TicketsLink from '../components/TicketsLink'
import AuthContext from '../context/AuthContext'

const Header = () => {
    const { access_token } = useContext(AuthContext)
    return (
        <ContainerHeader>
            <Inner>
                <Logo />
                {access_token &&
                <>
                    <CartLink />
                    <TicketsLink />
                </>
                }
                <ContainerAuth>
                {!access_token ? 
                    <LoginButton /> :
                    <LogoutButton />
                }
                </ContainerAuth>
            </Inner>
        </ContainerHeader>
    )
}

export default Header
