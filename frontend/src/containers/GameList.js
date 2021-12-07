import React, { useEffect, useState, useContext } from 'react'
import GameItem from '../components/GameItem'
import { ContainerGameList, Inner } from '../components/styles/gamelist.styles'
import { service } from '../services/api'
import AuthContext from '../context/AuthContext'

const GameList = () => { 
    const [games, setGames] = useState([])
    const { access_token } = useContext(AuthContext)

    useEffect(() => {
        service.getGames(setGames, access_token)
    },[])

    return (
        <Inner>    
            <ContainerGameList>
                {games.map((item) => item['is_active'] &&
                <GameItem 
                    key={item['name']}
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
