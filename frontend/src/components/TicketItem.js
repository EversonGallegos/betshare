import React from 'react'
import { ContainerTableRow, TableItem } from './styles/tickets.styles'

const TicketItem = ({id, name, numbers, porcent, status}) => {
    return (
        <ContainerTableRow key={id}>
            <TableItem>{name}</TableItem>
            <TableItem>{numbers}</TableItem>
            <TableItem>{porcent.toFixed(2)+'%'}</TableItem>
            <TableItem>{status}</TableItem>
        </ContainerTableRow>
    )
}

export default TicketItem
