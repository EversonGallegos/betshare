import React, {useState} from 'react'
import { TicketNumber } from './styles/gamelist.styles'

const Number = ({number, key, handleCounter}) => {
    const [selected, setSelected] = useState(false)
    const handleClick = () => {
        if(handleCounter(!selected, number)){
            setSelected(!selected)
        }
    }
    return (
        <TicketNumber key={key} onClick={handleClick} selected={selected}>
                {number}
        </TicketNumber>
    )
}

export default Number
