import React from 'react'
import { GameName, ContainerGameItem, GameNumbers, GamePrize, ContainerInner } from './styles/gamelist.styles'

const GameItem = ({color, name, min, max, prize}) => {
    return (
        <ContainerGameItem>
            <ContainerInner>
                <GameName color={color}>{name}</GameName>
                <GameNumbers><p>escolha entre {min} e {max} números</p></GameNumbers>
            </ContainerInner>
            <GamePrize><strong>premiação estimada:</strong>{prize}</GamePrize>
        </ContainerGameItem>
    )
}

export default GameItem
