import React from 'react'
import { ContainerTicketsLink } from './styles/header.styles'
import { Link } from 'react-router-dom'

const TicketsLink = () => {
    return (
        <ContainerTicketsLink>
            <Link to='/tickets'>Bilhetes</Link>
        </ContainerTicketsLink>
    )
}

export default TicketsLink
