import styled from 'styled-components'

export const ContainerGameList =  styled.div`
    display: grid;
    grid-template-column: repeat(6, 1fr);
    background: white;
    height: calc(100vh - 50px);
`

export const ContainerGameItem = styled.div`
    display: block;
    border-bottom: 1px solid #DDD;
    cursor: pointer;
    &:hover{
        background: #ddd;
    }
`

export const ContainerInner = styled.div`
    display: flex;
    height: 50%;
`

export const GameName = styled.div`
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
    background: ${props => props.color ? props.color : '#005DA8'};
    padding: 10px;
    width: 40%;
    border-radius: 0 0 20px 0;
`
export const GameNumbers = styled.div`
    font-size: 0.8rem;
    color: black;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const GamePrize = styled.div`
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 50%;
    font-size: 0.9rem;
`