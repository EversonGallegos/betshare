import React, {useState, useEffect} from 'react'
import { TicketNumber } from './styles/gamelist.styles'

const Number = ({number, index, handleCounter, handleSelected, isSelected}) => {
    const [selected, setSelected] = useState(false)
    const handleClick = () => {
        if(handleCounter(!selected)){
            handleSelected(index, number, !selected)
        }
    }

    useEffect(()=>{
        setSelected(isSelected);
    }, [isSelected])
    
    return (
        <TicketNumber key={index} onClick={handleClick} selected={selected}>
            {number}
        </TicketNumber>
    )
}

export default Number
