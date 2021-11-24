import React from 'react'
import GameContext from '../context/GameContext'
import { ActionButton } from './styles/gamelist.styles'

const DrawButton = ({onClick}) => {
    return (
    <GameContext.Consumer>
        {({color}) =>
            <ActionButton color={color} onClick={onClick}>sortear</ActionButton>
        }
    </GameContext.Consumer>
    )
}

export default DrawButton
