import { LogoStyled } from "./styles/header.styles";
import { Link } from 'react-router-dom'

import React from 'react'

const Logo = () => {
    return (
        <LogoStyled>
            <Link to='/home'>Betshare</Link>
        </LogoStyled>
    )
}

export default Logo
