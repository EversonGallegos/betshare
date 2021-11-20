import React, { useState } from 'react'
import Number from './Number'
import { TicketNumbersStyled } from './styles/gamelist.styles'


const TicketNumbers = ({total_numbers, total_queue, numbers}) => {
    var ticketnumbers = []
    for(let i = 1; i <= total_numbers; i++){
        if(i < 10){
            ticketnumbers.push('[0'+i+']')
        }else{
            ticketnumbers.push('['+i+']')
        }
    }
    const [counter, setCounter] = useState(0)
    const [selectedNumbers, setSelectedNumbers] = useState([])

    const addSelected = (item) => {
        let selected = [...selectedNumbers]
        selected.push(item)
        setSelectedNumbers(selected)
        console.log(selectedNumbers)
    }
    const handleCounter = (select, number) => 
    {
        if(select && counter < numbers){
            setCounter(counter+1)
            addSelected(number)
            return true;
        }else if(!select && counter > 0){
            setCounter(counter-1)
            return true;
        }
        return false;
    }

    
    return (
        <TicketNumbersStyled total_queue={total_queue}>
            {ticketnumbers.map((number, key) => 
                <Number 
                    number={number} 
                    key={key} 
                    handleCounter={handleCounter} 
                />
            )}
        </TicketNumbersStyled>

    )
}

export default TicketNumbers
