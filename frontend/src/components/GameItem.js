import React from 'react'
import { GameName, ContainerGameItem, GameNumbers, GamePrize } from './styles/gamelist.styles'
import Clover from './Clover'
import TicketNumbers from './TicketNumbers'

const GameItem = ({color, name, min, max, prize}) => {
    return (
        <ContainerGameItem>
            <GameName color={color}>
                <Clover />
                {name}
            </GameName>
            <TicketNumbers />
            <GameNumbers><p>escolha entre {min} e {max} números</p></GameNumbers>
        </ContainerGameItem>
    )
}

export default GameItem
