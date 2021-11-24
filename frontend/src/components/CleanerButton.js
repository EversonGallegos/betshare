import React from 'react'
import GameContext from '../context/GameContext'
import { ActionButton } from './styles/gamelist.styles'

const CleanerButton = ({onClick}) => {
    return (
    <GameContext.Consumer>
        {({color}) =>
            <ActionButton 
                color={color}
                onClick={onClick}>limpar</ActionButton>
        }
    </GameContext.Consumer>
    )
}

export default CleanerButton
