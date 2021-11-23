import React, { useState, useEffect } from 'react'
import Number from './Number'
import { TicketNumbersStyled } from './styles/gamelist.styles'


const TicketNumbers = ({total_numbers, total_queue, numbers, setSelecteds}) => {
    var ticketnumbers = []
    const [selected, setSelected] = useState({})
    
    for(let i = 1; i <= total_numbers; i++){
        if(i < 10){
            ticketnumbers.push('[0'+i+']')
        }else{
            ticketnumbers.push('['+i+']')
        }
    }
    
    const handleSelected = (index, number, select) => {
        let size_selected = Object.keys(selected).length
        if(selected[index] === undefined 
            && select
            && size_selected < numbers){
            setSelected({...selected, [index]:number})
        }else if(selected[index] === number && !select){
            delete selected[index]
            setSelected({...selected})
        }
        const values = Object.values(selected)
        setSelecteds(values.join(',').replace(/[\[\]]/g,''))
    }
    useEffect(() => {
        let size_selected = Object.keys(selected).length
        if(size_selected > numbers){
            delete selected[Object.keys(selected)[size_selected-1]]
            setSelected({...selected})
        }
    }, [selected, numbers])

    const isSelected = (index) => {
        if(selected['i'+index.toString()] !== undefined){
            return true
        }
        return false
    }


    return (
        <TicketNumbersStyled total_queue={total_queue}>
            {ticketnumbers.map((number, index) => 
                <Number number={number}
                    index={index}
                    handleSelected={handleSelected}
                    isSelected = {isSelected(index)}
                />)
            }
        </TicketNumbersStyled>

    )
}

export default TicketNumbers
