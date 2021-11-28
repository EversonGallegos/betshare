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

    console.log(tickets)

    const handleTickets = (data) => {
        let ticket = []
 
        data.map((item) =>{
            let j = 0
            for(let i = 0; i < ticket.length; i++){
                if(item['ticket']['id'] === ticket[i]['ticket']['id']){
                    ticket[i]['request']['quotes'] += item['request']['quotes']
                    ticket[i]['request']['price'] += item['request']['price']
                    ticket[i]['quotes'] += item['quotes']
                    j++
                }else if(i === ticket.length-1 && j === 0){
                    ticket.push(item)
                }
            }
            if(ticket.length === 0){
                ticket.push(item)
            }
        })
        setTickets(ticket)
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
                    <TableHeadItem>Cotas compradas</TableHeadItem>
                    <TableHeadItem>Progresso</TableHeadItem>
                    <TableHeadItem>Status</TableHeadItem>
                </ContainerTableRowHead>
                {tickets.map((item) => 
                    <TicketItem 
                        id={item['ticket']['id']}
                        name={item['ticket']['option']['game']['name']}
                        numbers={item['quotes']}
                        porcent={(item['ticket']['quotes_sold']/250)*100}
                        status={item['ticket']['status']}
                    />)
                }
            </Table>
        </ContainerTickets>
    )
}

export default TicketList
