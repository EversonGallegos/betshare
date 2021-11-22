import React, {useState, useEffect} from 'react'
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

const GameItem = ({color, name, options, total_numbers, total_queue}) => {
    const min = options[0]['numbers']
    const max = options[options.length-1]['numbers']
    const [toggle, setToggle] = useState(false)
    const [numbers, setNumbers] = useState(min)
    const [quote_value, setQuoteValue] = useState(options[0]['quote_value'])
    const [quote_numbers, setQuoteNumbers] = useState(1)
    const [total_price, setTotalPrice] = useState(quote_value)

    const openToggle = () => {
        if(!toggle) setToggle(true)
    }

    const closeToggle = () => {
        console.log(toggle)
        setToggle(false)
    }
    useEffect(() => {
        setTotalPrice(quote_numbers * quote_value)
    }, [quote_numbers, quote_value])

    const handleNumbers = (e) => {
        let nmbs = e.target.value
        let qt_price = options[nmbs-min]['quote_value']
        setNumbers(nmbs)
        setQuoteValue(qt_price)
    }

    const handleQuoteNumbers = (e) => {
        if(e.target.value >= 1){
            setQuoteNumbers(e.target.value)
        }else{
            setQuoteNumbers(1)
        }
    }

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
                        <MoneyView>R$ {quote_value}</MoneyView>
                    </GroupInputInner>
                </GroupGameInput>
                <GroupGameInput>
                    <Label htmlFor='quote_numbers'>Quantidade de cotas:</Label>
                    <Input 
                        type='number' 
                        name='quote_numbers'
                        value={quote_numbers}
                        onChange={handleQuoteNumbers}/>
                </GroupGameInput>
                <GroupGameInput>
                    <Label htmlFor='total_price'>Preço total:</Label>
                    <MoneyView color={color}>R$ {total_price}</MoneyView>
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
