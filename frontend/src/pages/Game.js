import React, { useState } from 'react'
import { Container } from '../components/styles/app.styles'
import { FormGame, GroupInner, GroupItems, NumbersView, SubmitButton, TitleForm, UnmutableValue } from '../components/styles/gameform.styles'
import Header from '../containers/Header'

const Game = (data) => {
    const [game, setGame] = useState({
        name: 'megasena',
        min: 11,
        max: 15,
    })

    const [request, setRequest] = useState({
        user: '',
        numbers: game.min,
        quote_price: 10,
        quote_numbers: 1,
        total_price: 0,
    })

    const handleRequest = (e) => {
        const name = e.target.name
        const value = e.target.value
        setRequest({...request, [name]: value})
    }

    const validateQuoteNumbers = (e) => {
        if(request.quote_numbers < 1){
            setRequest({...request, quote_numbers: 1})
            alert('O número de cotas deve ser maior ou igual a 1!')
        }
    }

    const getQuotePrice = () => {
        return request.quote_price
    }

    const getTotalPrice = () => {
        return request.quote_price * request.quote_numbers
    }

    return (
        <Container>
            <Header />
            <FormGame>
                <TitleForm>
                    {game.name}
                </TitleForm>
                <GroupItems>
                    <label htmlFor='numbers'>Qnt de números:</label>
                    <GroupInner>
                        <input 
                            type='range'
                            name='numbers'
                            min={game.min}
                            max={game.max}
                            value={request.numbers}
                            onChange={(e) => handleRequest(e)} />
                        <NumbersView>{request.numbers}</NumbersView>
                    </GroupInner>
                </GroupItems>
                <GroupItems>
                    <label htmlFor='quote_price'>Preço da cota:</label>
                    <UnmutableValue name='quote_price'>R$ {getQuotePrice()}</UnmutableValue> 
                </GroupItems>
                <GroupItems>
                    <label htmlFor='quote_numbers'>Quantidade de cotas:</label>
                    <input 
                        type='number' 
                        name='quote_numbers'
                        value={request.quote_numbers}
                        onChange={(e) => handleRequest(e)} />   
                </GroupItems>
                <GroupItems>
                    <label htmlFor='total_price'>Preço total:</label>
                    <UnmutableValue name='total_price'>R$ {getTotalPrice()}</UnmutableValue> 
                </GroupItems>
                <SubmitButton type='submit'>Finalizar</SubmitButton>
            </FormGame>
        </Container>
    )
}

export default Game
