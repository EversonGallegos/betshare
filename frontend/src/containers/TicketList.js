import React, {useState, useEffect, useContext} from 'react'
import { ContainerHeader, 
        ContainerTableRowHead, 
        ContainerTable, 
        Subtitle, 
        Table, 
        TableHeadItem, 
        Title, 
        ContainerTableBody} from '../components/styles/tables.styles'
import TicketItem from '../components/TicketItem'
import { service } from '../services/api'
import AuthContext from '../context/AuthContext'

const TicketList = () => {
    const [tickets, setTickets] = useState([])
    const { access_token } = useContext(AuthContext)
    useEffect(() => {
        const getTickets = async () => {
            const data = await service.getQuoteManager(access_token)
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
                <ContainerTableBody>
                    {tickets.map((ticket) => 
                        <TicketItem ticket={ticket}/>)
                    }
                </ContainerTableBody>
            </Table>
        </ContainerTable>
    )
}

export default TicketList
