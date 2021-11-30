import React from 'react'
import CartLink from '../components/CartLink'
import LoginButton from '../components/LoginButton'
import Logo from '../components/Logo'
import LogoutButton from '../components/LogoutButton'
import { ContainerAuth, ContainerHeader, Inner } from '../components/styles/header.styles'
import TicketsLink from '../components/TicketsLink'

const Header = () => {
    return (
        <ContainerHeader>
            <Inner>
                <Logo />
                <CartLink />
                <TicketsLink />
                <ContainerAuth>
                    <LoginButton />
                    <LogoutButton />
                </ContainerAuth>
            </Inner>
        </ContainerHeader>
    )
}

export default Header
