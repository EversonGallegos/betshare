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
    CloseToggle,
    GroupToggle,} from './styles/gamelist.styles'
import Clover from './Clover'
import TicketNumbers from './TicketNumbers'

const GameItem = ({color, name, min, max, total_numbers, total_queue}) => {
    const [toggle, setToggle] = useState(false)
    const [numbers, setNumbers] = useState(min)

    const openToggle = () => {
        if(!toggle) setToggle(true)
    }

    const closeToggle = () => {
        console.log(toggle)
        setToggle(false)
    }

    const handleNumbers = (e) => {setNumbers(e.target.value)}


    return (
        <ContainerGameItem onClick={openToggle} toggle={toggle}>
            <GameName color={color}>
                <Clover />
                {name}
            </GameName>
            <TicketNumbers 
                total_numbers={total_numbers} 
                total_queue={total_queue} 
                numbers={numbers}/>            
            { toggle ?
            <ContainerGameInput>
                <GroupGameInput>
                    <Label htmlFor='numbers'>Quantidade de números:</Label>
                    <GroupInputInner>
                        <NumbersView color={color}>{numbers}</NumbersView>
                        <Input 
                            type='range' 
                            name='numbers' 
                            value={numbers}
                            onChange={(e) => handleNumbers(e)}
                            min={min} 
                            max={max} 
                            />
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
                <GroupToggle>
                    <CloseToggle color={color} onClick={closeToggle}>&#5169;</CloseToggle>
                    <Button color={color}>Adicionar aposta</Button>
                </GroupToggle>
                </ContainerGameInput>
            :
            <GroupToggle>
                <GameNumbers color={color}><p>escolha entre {min} e {max} números</p></GameNumbers>
            </GroupToggle>
            
            } 
        </ContainerGameItem>
    )
}

export default GameItem
