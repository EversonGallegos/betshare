import React from 'react'
import Clover from './Clover'
import { GameName } from './styles/gamelist.styles'
import GameContext from '../context/GameContext'

const GameHeader = () => {
    return (
    <GameContext.Consumer>
        {({name, color}) =>
        <GameName color={color}>
            <Clover />
            {name}
        </GameName>
        }
    </GameContext.Consumer>
    )
}

export default GameHeader
