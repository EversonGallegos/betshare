import styled from 'styled-components/macro'

export const ContainerGameList =  styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: calc(100% - 60px);
    width: 100%;
    max-width: 900px;
`

export const ContainerGameItem = styled.div`
    display: flex;
    min-width: 320px;
    background: #FFFCD5;
    flex-direction: column;
    cursor: pointer;
    margin: 5px;
    &:hover{
        background: #F8F1D1;
    }
`

export const CloverImage = styled.div`
    height: 20px;
    width: 20px;
    margin-right: 10px;
    align-self: center;
`

export const ContainerInner = styled.div`
    display: flex;
    flex-direction: column;
`

export const GameName = styled.div`
    display: flex;
    border: 5px solid #fff;
    color: white;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 600;
    background: ${props => props.color ? props.color : '#005DA8'};
    padding: 10px;
    @media screen and (max-width:340px){
        font-size: 0.8rem;
    }
`
export const GameNumbers = styled.div`
    font-size: 0.8rem;
    color: black;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 5px solid #fff;
`

export const GamePrize = styled.div`
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 0.9rem;
    @media screen and (max-width: 400px){
        font-size: 0.7em;
    }
`

export const Inner = styled.div`
    width:100%;
    height: 100%;
    max-witdh: 900px;
    display: flex;
    justify-content: center;
    padding-top: 2px;
    background: linear-gradient(45deg, #1D8DB3 0%, #3EB7AE 100%);
`

export const TicketNumbersStyled = styled.div`
    font-size: 0.9rem;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    justify-items: center;
    border: 5px solid white;
    padding: 10px;
`

export const TicketNumber = styled.div`
    height: 22px;
    width: 22px;
    display: flex;
    align-content: center;
    justify-content: center;
    font-size: 0.8rem;
    font-family: monospace;
    color: #F6941E;
`