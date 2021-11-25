import React, { useState, useEffect } from 'react'
import {
    ContainerGameItem, 
    GameNumbers, 
    ContainerGameInput, 
    GroupGameInput, 
    Label, 
    Input, 
    GroupInputInner, 
    MoneyView, 
    Button,
    CloseToggle,
    GroupToggle} from './styles/gamelist.styles'
import{ BackgroundFill } from './styles/confirmscreen.styles'
import ConfirmScreen from './ConfirmScreen'
import NumberList from './NumberList'
import { service } from '../services/api'
import GameContext from '../context/GameContext'
import GameHeader from './GameHeader'
import NumbersSquare from './NumbersSquare'

const GameItem = ({color, name, options, total_numbers, total_queue}) => {
    const min = options[0]['numbers']
    const max = options[options.length-1]['numbers']
    const [confirmScreen, setConfirmScreen] = useState(false)
    const [selecteds, setSelecteds] = useState()
    const [toggle, setToggle] = useState(false)
    const [numbers, setNumbers] = useState(min)
    const [quote_value, setQuoteValue] = useState(options[0]['quote_value'])
    const [quote_numbers, setQuoteNumbers] = useState(1)
    const [total_price, setTotalPrice] = useState(quote_value)
    const openToggle = () => {
        if(!toggle) setToggle(true)
    }

    const closeToggle = () => {
        setToggle(false)
    }

    const context = {
        name: name,
        color: color,
        toggle: toggle,
        total_numbers: total_numbers,
        total_queue: total_queue,
    }

    useEffect(() => {
        let tl_prc = quote_numbers * quote_value
        setTotalPrice(tl_prc.toFixed(2))
    }, [quote_numbers, quote_value])

    const handleNumbers = (e) => {
        let nmbs = e.target.value
        let qt_price = options[nmbs-min]['quote_value']
        setNumbers(nmbs)
        setQuoteValue(qt_price.toFixed(2))
    }

    const handleQuoteNumbers = (e) => {
        if(e.target.value >= 1){
            setQuoteNumbers(e.target.value)
        }else{
            setQuoteNumbers(1)
        }
    }

    const handleSubmit = async () => {
        /*const response = await service.sendRequest(
                                        options[numbers-min].id, 
                                        quote_numbers,
                                        selecteds)
        */
        setConfirmScreen(!confirmScreen)
    }

    return (
        <GameContext.Provider value={context}>
            <ContainerGameItem onClick={openToggle} toggle={toggle}>
                <GameHeader />
                <NumberList
                    total_numbers={total_numbers} 
                    numbers={numbers}
                    setSelecteds={setSelecteds}s/>            
                { toggle ?
                <ContainerGameInput>
                    <GroupGameInput>
                        <Label htmlFor='numbers'>Quantidade de números:</Label>
                        <GroupInputInner>
                            <NumbersSquare>{numbers}</NumbersSquare>
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
                        <MoneyView>R$ {total_price}</MoneyView>
                    </GroupGameInput>
                    <GroupToggle>
                        <CloseToggle color={color} onClick={closeToggle}>&#5169;</CloseToggle>
                        <Button color={color} onClick={handleSubmit}>Adicionar aposta</Button>
                    </GroupToggle>
                </ContainerGameInput>
                :
                <GroupToggle>
                    <GameNumbers color={color}><p>escolha entre {min} e {max} números</p></GameNumbers>
                </GroupToggle>
                
                } 
            </ContainerGameItem>
            {confirmScreen && 
            <>
            <ConfirmScreen 
                name={name}
                numbers={numbers}
                quote_value={quote_value}
                quote_numbers={quote_numbers} 
                total_price={total_price}
                color={color}
                selecteds={selecteds}
                handleCancel={handleSubmit}
            />
            <BackgroundFill />
            </>
            }
        </GameContext.Provider>
    )
}

export default GameItem
