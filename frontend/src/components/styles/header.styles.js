import styled from 'styled-components/macro'
import { Link, Navigate } from 'react-router-dom'

export const LogoStyled = styled.h1`
    display: flex;
    align-items: center;
    a{
        font-size: 1.3rem;
        color: white;
        font-family: 'Futura Bold';
        cursor: pointer;
        text-decoration: none;
    }
`
export const ContainerHeader = styled.div`
    width: 100%;
    height: 40px;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #005DA8;
    display: flex;
    justify-content: center;
`
export const AuthButton = styled(Link)`
    color: white;
    margin-right: 10px;
    font-weight: 600;
    font-family: 'Futura Bold';
    text-decoration: none;
`
export const LogoutBtn = styled.div`
    color: white;
    margin-right: 10px;
    font-weight: 600;
    font-family: 'Futura Bold';
    text-decoration: none;
    cursor: pointer;
`
export const ContainerAuth = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Inner =  styled.div`
    max-width: 900px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 90%
`

export const ContainerCartLink = styled.div`
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        margin-right: 10px;
        font-weight: 600;
        font-family: 'Futura Bold';
        text-decoration: none;
    }

`

export const ViewCountCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
    font-family: 'Futura Bold';
    color: #fff;
    border-radius: 50%;
    background: red;
    position: relative;
    z-index: 2;
    top: 10px;
    left: -8%;
`

export const ContainerTicketsLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    a{
        text-decoration: none;
        font-family: 'Futura Bold';
        color: #fff;
    }
`