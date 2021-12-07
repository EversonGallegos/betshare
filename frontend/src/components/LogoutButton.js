import React, { useContext } from 'react'
import { LogoutBtn } from './styles/header.styles'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
const LogoutButton = () => {  
    const { logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <LogoutBtn onClick={handleLogout}>
            Logout
        </LogoutBtn>
    )
}

export default LogoutButton
