import React, {useState} from 'react'
import { GameName, 
    ContainerGameItem, 
    GameNumbers, 
    ContainerGameInput, 
    GroupGameInput, 
    Label, 
    Input, 
    GroupInputInner, 
    NumbersView, 
    MoneyView, 
    Button,
    CloseToggle} from './styles/gamelist.styles'
import Clover from './Clover'
import TicketNumbers from './TicketNumbers'

const GameItem = ({color, name, min, max, prize}) => {
    const [toggle, setToggle] = useState(false)

    const openToggle = () => {
        if(!toggle) setToggle(true)
    }

    const closeToggle = () => {
        console.log(toggle)
        setToggle(false)
    }

    return (
        <ContainerGameItem onClick={openToggle} toggle={toggle}>
            <GameName color={color}>
                <Clover />
                {name}
            </GameName>
            <TicketNumbers />
            { toggle ?
            <ContainerGameInput>
                <GroupGameInput>
                    <Label htmlFor='numbers'>Quantidade de números:</Label>
                    <GroupInputInner>
                        <NumbersView color={color}>11</NumbersView>
                        <Input type='range' name='numbers' min={min} max={max} />
                        <MoneyView>R$ 20,00</MoneyView>
                    </GroupInputInner>
                </GroupGameInput>
                <GroupGameInput>
                    <Label htmlFor='quote_numbers'>Quantidade de cotas:</Label>
                    <Input type='number' name='quote_numbers'/>
                </GroupGameInput>
                <GroupGameInput>
                    <Label htmlFor='total_price'>Preço total:</Label>
                    <MoneyView color={color}>R$ 200,00</MoneyView>
                </GroupGameInput>
                <CloseToggle 
                    color={color}
                    onClick={closeToggle}>^</CloseToggle>
                <Button color={color}>Adicionar aposta</Button>
            </ContainerGameInput> 
            :
            <GameNumbers color={color}><p>escolha entre {min} e {max} números</p></GameNumbers>
            }
        </ContainerGameItem>
    )
}

export default GameItem
