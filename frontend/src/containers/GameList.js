import React, { useEffect, useState } from 'react'
import GameItem from '../components/GameItem'
import { ContainerGameList, Inner } from '../components/styles/gamelist.styles'
import { Itens } from './data/itens-games'

const GameList = () => { 
    const [games, setGames] = useState([])
    const URL = 'http://127.0.0.1:8000/api/games/'
    useEffect(() => {
        const getGames = async () =>{
            const data = await fetch(URL, {
                headers: {
                    'Authorization': 'token c556349da55f68e59805f7ce0f2558bea2036270',
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
            const result = await data
            setGames(result)
        }
        getGames()
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
