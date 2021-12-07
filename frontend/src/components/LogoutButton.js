import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { service } from '../services/api'
import { LogoutBtn } from './styles/header.styles'

const LogoutButton = () => {
    const [logout, setLogout] = useState(false)
    const navigate = useNavigate()
    const handleLogout = () => {
        service.logout()
        setLogout(true)
        navigate('/login')
    }
    
    return (
        <LogoutBtn onClick={handleLogout}>
            Logout
        </LogoutBtn>
    )
}

export default LogoutButton
