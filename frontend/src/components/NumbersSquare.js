import React from 'react'
import GameContext from '../context/GameContext'
import { NumbersView } from './styles/gamelist.styles'

const NumbersSquare = ({children}) => {
    return (
        <GameContext.Consumer>
            {({color}) =>
                <NumbersView color={color}>
                    {children}
                </NumbersView>
            }
        </GameContext.Consumer>
    )
}


export default NumbersSquare
