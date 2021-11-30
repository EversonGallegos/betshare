import React, {useState, useEffect} from 'react'
import { ContainerHeader, 
        ContainerTableRowHead, 
        ContainerTable, 
        Subtitle, 
        Table, 
        TableHeadItem, 
        Title } from '../components/styles/tables.styles'
import TicketItem from '../components/TicketItem'
import { service } from '../services/api'

const TicketList = () => {
    const [tickets, setTickets] = useState([])
    useEffect(() => {
        const getTickets = async () => {
            const data = await service.getQuoteManager()
            console.log(data)
            setTickets(data)
        } 
        return getTickets()
    }, [])

    return (
        <ContainerTable>
            <ContainerHeader>
                <Title>Lista de bilhetes</Title>
                <Subtitle>Clique para ver mais detalhes</Subtitle>
            </ContainerHeader>
            <Table>
                <ContainerTableRowHead>
                    <TableHeadItem>ID</TableHeadItem>
                    <TableHeadItem>Jogo</TableHeadItem>
                    <TableHeadItem>Status</TableHeadItem>
                </ContainerTableRowHead>
                {tickets.map((ticket) => 
                    <TicketItem ticket={ticket}/>)
                }
            </Table>
        </ContainerTable>
    )
}

export default TicketList
