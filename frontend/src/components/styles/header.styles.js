import styled from 'styled-components/macro'

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
export const AuthButton = styled.div`
    color: white;
    margin-right: 10px;
    font-weight: 600;
    font-family: 'Futura Bold';
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