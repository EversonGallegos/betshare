import React from 'react'
import LoginButton from '../components/LoginButton'
import Logo from '../components/Logo'
import LogoutButton from '../components/LogoutButton'
import { ContainerAuth, ContainerHeader, Inner } from '../components/styles/header.styles'

const Header = () => {
    return (
        <ContainerHeader>
            <Inner>
                <Logo />
                <ContainerAuth>
                    <LoginButton />
                    <LogoutButton />
                </ContainerAuth>
            </Inner>
        </ContainerHeader>
    )
}

export default Header
