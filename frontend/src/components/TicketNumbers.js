import React from 'react'
import { TicketNumber, TicketNumbersStyled } from './styles/gamelist.styles'


const TicketNumbers = () => {
    var numbers = []
    for(let i = 1; i <= 60; i++){
        if(i < 10){
            numbers.push('[0'+i+']')
        }else{
            numbers.push('['+i+']')
        }
    }
    return (
        <TicketNumbersStyled>
            {numbers.map((number, key) => 
            <TicketNumber>
                {number}
            </TicketNumber>)}
        </TicketNumbersStyled>
    )
}

export default TicketNumbers
