import React, {useState} from 'react'
import { ContainerTableRow, 
        TableItem,
        GameName, 
        ColumnItem} from './styles/tables.styles'

const TicketItem = ({ticket}) => {
    const [toggle, setToggle] = useState(false)
    const id=ticket['ticket']['id'],
        name=ticket['ticket']['option']['game']['name'],
        numbers=ticket['ticket']['option']['numbers'],
        quotes=ticket['quotes'],
        quotes_sold=(ticket['ticket']['quotes_sold']),
        status=ticket['ticket']['status'],
        price=ticket['ticket']['option']['price']
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <ContainerTableRow toggle={toggle} onClick={handleToggle} key={id}>
                <TableItem>{id}</TableItem>
                <TableItem><GameName>{name}</GameName></TableItem>
                <TableItem>{status}</TableItem>
            </ContainerTableRow>
            {toggle && 
            <ColumnItem>
                <ContainerTableRow>    
                    <TableItem>Números:</TableItem>
                    <TableItem>{numbers}</TableItem>
                </ContainerTableRow>
                <ContainerTableRow>    
                    <TableItem>Cotas:</TableItem>
                    <TableItem><GameName>{quotes}</GameName></TableItem>
                </ContainerTableRow>    
                <ContainerTableRow>
                    <TableItem>Preço total:</TableItem>
                    <TableItem>{price}</TableItem>
                </ContainerTableRow>
                <ContainerTableRow>
                    <TableItem>Progresso:</TableItem>
                    <TableItem><progress max={250} value={quotes_sold}/></TableItem>
                </ContainerTableRow>
            </ColumnItem>}
        </>
    )
}

export default TicketItem
