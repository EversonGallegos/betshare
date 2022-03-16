import React, { useEffect, useState, useContext } from 'react'
import GameItem from '../components/GameItem'
import { ContainerGameList, Inner } from '../components/styles/gamelist.styles'
import { service } from '../services/api'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const GameList = () => { 
    const [games, setGames] = useState([])
    const { access_token, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            const response = await service.getGames(access_token)
            if(response.status === 200){
                const data = await response.json()
                setGames(data)
            }else if(response.status === 401){
                logout()
                navigate('/login')
            }
        }
        getData()
    }, [])

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
