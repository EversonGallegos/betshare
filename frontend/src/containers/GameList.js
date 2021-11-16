import React from 'react'
import GameItem from '../components/GameItem'
import { ContainerGameList } from '../components/styles/gamelist.styles'
import { Itens } from './data/itens-games'

const GameList = () => { 
    return (
        <ContainerGameList>
            {Itens.map((item, key) => 
            <GameItem 
                key={key}
                name={item['name']}
                color={item['color']}
                max={item['max']}
                min={item['min']}
                prize={item['prize']}
            />)}
        </ContainerGameList>
    )
}

export default GameList
