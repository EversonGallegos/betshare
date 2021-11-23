import React, { useEffect, useState } from 'react'
import GameItem from '../components/GameItem'
import { ContainerGameList, Inner } from '../components/styles/gamelist.styles'
import { service } from '../services/api'

const GameList = () => { 
    const [games, setGames] = useState([])
    useEffect(() => {
        service.getGames(setGames)
    },[])

    return (
        <Inner>    
            <ContainerGameList>
                {games.map((item, key) => item['is_active'] &&
                <GameItem 
                    key={key}
                    name={item['name']}
                    color={item['color']}
                    options={item['options']}
                    total_numbers={item['total_numbers']}
                    total_queue={item['total_queues']}
                />)}
            </ContainerGameList>
        </Inner>
    )
}

export default GameList
