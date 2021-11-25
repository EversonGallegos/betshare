import React, { useState, useEffect } from 'react'
import Number from './Number'
import { TicketNumbersStyled, 
        GroupButtons, 
        ContainerNumberList,
        SuggestText} from './styles/gamelist.styles'
import DrawButton from './DrawButton'
import CleanerButton from './CleanerButton'
import GameContext from '../context/GameContext'


const NumberList = ({total_numbers, numbers, setSelecteds, confirm}) => {
    var ticketnumbers = []
    const [selected, setSelected] = useState({})
    
    const makeNumber = (num) => {
        if(num < 10){
            return '[0'+num+']'
        }else{
            return '['+num+']'
        }
    }
    for(let i = 1; i <= total_numbers; i++){
        ticketnumbers.push(makeNumber(i))
    }
    
    const handleSelected = (index, number, select) => {
        let size_selected = Object.keys(selected).length
        if(selected[index] === undefined 
            && select
            && size_selected < numbers){
            setSelected({...selected, [index]:number})
            console.log(number, index)
        }else if(selected[index] === number && !select){
            delete selected[index]
            setSelected({...selected})
        }
    }

    const handleDraw = () => { 
        let numbersdraw = {}
        numbersdraw = selected
        let i = 0;
        while(i < (numbers - Object.keys(selected).length)){
            let random = Math.floor(Math.random() * total_numbers) + 1
            let index = 'i'.concat(random-1)
            if(numbersdraw[index] === undefined){
                let number = makeNumber(random)
                numbersdraw = {...numbersdraw, [index]:number}
                i++
            }
        }
        setSelected(numbersdraw)
    }

    useEffect(() => {
        if(confirm){
            handleDraw()
        }
    }, [confirm])

    const handleCleaner = () => {
        setSelected({})
    }

    useEffect(() => {
        let size_selected = Object.keys(selected).length
        if(size_selected > numbers){
            delete selected[Object.keys(selected)[size_selected-1]]
            setSelected({...selected})
        }
        const values = Object.values(selected)
        setSelecteds(values.join(',').replace(/[\[\]]/g,''))
    }, [selected, numbers])

    const isSelected = (index) => {
        if(selected['i'+index.toString()] !== undefined){
            return true
        }
        return false
    }


    return (
        <GameContext.Consumer>
            {({total_queue, color, toggle}) =>
            <ContainerNumberList>
                <TicketNumbersStyled total_queue={total_queue}>
                {ticketnumbers.map((number, index) => 
                    <Number number={number}
                        index={index}
                        handleSelected={handleSelected}
                        isSelected = {isSelected(index)}
                        color={color}
                    />)
                }
                </TicketNumbersStyled>
                {toggle &&
                <GroupButtons>
                    <SuggestText>sugira seus números da sorte</SuggestText>
                    <DrawButton onClick={handleDraw}/>
                    <CleanerButton onClick={handleCleaner}/>
                </GroupButtons>}
            </ContainerNumberList>
            }
        </GameContext.Consumer>
    )
}

export default NumberList
