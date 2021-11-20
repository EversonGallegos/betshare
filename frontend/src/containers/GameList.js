import React from 'react'
import GameItem from '../components/GameItem'
import { ContainerGameList, Inner } from '../components/styles/gamelist.styles'
import { Itens } from './data/itens-games'

const GameList = () => { 
    return (
        <Inner>    
            <ContainerGameList>
                {Itens.map((item, key) => 
                <GameItem 
                    key={key}
                    name={item['name']}
                    color={item['color']}
                    max={item['max']}
                    min={item['min']}
                    prize={item['prize']}
                    total_numbers={item['total_numbers']}
                    total_queue={item['total_queue']}
                />)}
            </ContainerGameList>
        </Inner>
    )
}

export default GameList
