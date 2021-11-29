import React, {useState, useEffect} from 'react'
import { ContainerHeader, 
        ContainerTableRowHead, 
        ContainerTickets, 
        Subtitle, 
        Table, 
        TableHeadItem, 
        Title } from '../components/styles/tickets.styles'
import TicketItem from '../components/TicketItem'
import { service } from '../services/api'

const TicketList = () => {
    const [tickets, setTickets] = useState([])
    useEffect(() => {
        const getTickets = async () => {
            const data = await service.getQuoteManager()
            handleTickets(data)
        } 
        return getTickets()
    }, [])

    const handleTickets = (data) => {
        let ticket = []
        if (data.length > 0) {
            let isUnique
            data.map(
                (item) => {
                    isUnique = true
                    if(ticket.length > 0){
                        for(let i = 0; i < ticket.length; i++){
                            if(item['ticket']['id'] === ticket[i]['ticket']['id']){
                                if(!Array.isArray(ticket[i]['request'])){
                                    let req = ticket[i]['request']
                                    ticket[i]['request'] = []
                                    ticket[i]['request'].push(req)
                                }
                                ticket[i]['request'].push(item['request'])
                                ticket[i]['quotes'] += item['quotes']
                                isUnique = false
                            }
                        }
                        if(isUnique) ticket.push(item)
                    }else{
                        ticket.push(item)
                    }
                }
            )
        }
        setTickets(ticket)
        console.log(ticket)
    }

    return (
        <ContainerTickets>
            <ContainerHeader>
                <Title>Lista de bilhetes</Title>
                <Subtitle>Clique para ver mais detalhes</Subtitle>
            </ContainerHeader>
            <Table>
                <ContainerTableRowHead>
                    <TableHeadItem>Jogo</TableHeadItem>
                    <TableHeadItem>Qnt de números</TableHeadItem>
                    <TableHeadItem>Cotas compradas</TableHeadItem>
                    <TableHeadItem>Progresso</TableHeadItem>
                    <TableHeadItem>Status</TableHeadItem>
                </ContainerTableRowHead>
                {tickets.map((item) => 
                    <TicketItem 
                        id={item['ticket']['id']}
                        name={item['ticket']['option']['game']['name']}
                        numbers={item['ticket']['option']['numbers']}
                        quotes={item['quotes']}
                        porcent={(item['ticket']['quotes_sold']/250)*100}
                        status={item['ticket']['status']}
                    />)
                }
            </Table>
        </ContainerTickets>
    )
}

export default TicketList
