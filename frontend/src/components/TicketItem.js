import React, {useState, useEffect, useContext} from 'react'
import { ContainerTableRow, 
        TableItem,
        GameName, 
        ColumnItem} from './styles/tables.styles'
import { BackgroundFill } from './styles/window.styles'
import BetWindow from './BetWindow'
import { service } from '../services/api'
import AuthContext from '../context/AuthContext'

const TicketItem = ({ticket}) => {
    const [toggle, setToggle] = useState(false)
    const [showBet, setShowBet] = useState(false)
    const [dataBet, setDataBet] = useState({})

    const id=ticket['ticket']['id'],
        name=ticket['ticket']['option']['game']['name'],
        numbers=ticket['ticket']['option']['numbers'],
        quotes=ticket['quotes'],
        quotes_sold=(ticket['ticket']['quotes_sold']),
        status=ticket['ticket']['status'],
        price=ticket['ticket']['option']['price']
    const { access_token } = useContext(AuthContext)
    useEffect(() => {
        const getBet = async () => {
            const data = await service.getBet(id, access_token)
            setDataBet(data)
        }
        getBet()
    }, [])

    const handleToggle = () => {
        setToggle(!toggle)
    }
    const handleShowBet = () => {
        setShowBet(!showBet)
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
                {Object.keys(dataBet).length > 0 &&
                <ContainerTableRow>
                    <TableItem>Bilhete:</TableItem>
                    <TableItem><button type="button" onClick={handleShowBet}>ver</button></TableItem>
                </ContainerTableRow>}
            </ColumnItem>}
            {showBet && 
            <>    
                <BetWindow 
                    handleCancel={handleShowBet} 
                    data={dataBet}
                    name={name}/>
                <BackgroundFill />
            </>}
        </>
    )
}

export default TicketItem
