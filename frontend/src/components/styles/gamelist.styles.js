import styled from 'styled-components/macro'
import { fontFuturaBold } from '../../styles/global'

export const ContainerGameList =  styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: calc(100% - 60px);
    width: 100%;
    max-width: 900px;
    font-family: 'Futura Book';
`

export const ContainerGameItem = styled.div`
    border: 7px solid #fff;
    display: flex;
    min-width: 320px;
    background: #FFFCD5;
    flex-direction: column;
    margin: 5px;
    &:hover{
        background: ${props => props.toggle ? '#FFFCD5' : '#F8F1D1'};
        cursor: ${props => props.toggle ? 'initial' : 'pointer'};
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
    font-family: 'Futura Bold';
    display: flex;
    color: white;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 600;
    background: ${props => props.color ? props.color : '#005DA8'};
    padding: 10px;

`
export const GameNumbers = styled.div`
    font-size: 1rem;
    color: white;
    font-family: 'Futura Bold';
    display: flex;
    //flex: 1;
    background: ${props => props.color ? props.color : '#F6941E'};
    justify-content: center;
    align-items: flex-end;
    text-align: center;
    border-top: 5px solid #fff;
`

export const Inner = styled.div`
    width: 100%;
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
    grid-template-columns: repeat(${props => props.total_queue ? props.total_queue : 10}, 1fr);
    justify-items: center;
    border-top: 5px solid white;
    padding: 10px;
    max-height: 175px;
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
    cursor: pointer;
    text-decoration: ${props => props.selected ? 'line-through' : 'none'};
    @media screen and (max-width:330px){
        font-size: 0.7rem;
        height: 15px;
        width: 15px;
        margin: 0;
        padding: 0;
    }
`

export const ContainerGameInput = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    max-width: 300px;
    margin: auto 0 0 0;
`
export const GroupGameInput =  styled.div`
    display: flex;
    padding: 15px 0;
    border-top: 5px solid #FFF;
    input[type='number']{
        padding: 5px;
        margin-left: 10px;
        text-align: center;
        font-weight: 600;
        color: #F6941E;
        align-self: center;
        max-width: 40%;
        background: #fff;
    }
    &:first-of-type{
        flex-direction: column;
        label {
            text-align: center;
        }
    }
`
export const Input = styled.input`
    flex: 1;
    background: rgba(255,255,255,0);
    border: 2px solid #F6941E;
    outline: none;
`

export const Label = styled.label`
    font-size: 0.9rem;
    color: #F6941E;
    text-align: right;
    margin-bottom: 5px;
    min-width: 50%;
    font-weight: 600;
    align-self: center;
`

export const GroupInputInner = styled.div`
    display: flex;
`

export const NumbersView = styled.div`
    display: flex;
    height: 23px;
    width: 23px;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    border: 4px solid #FFF;
    margin-right: 10px;
    background: ${props => props.color ? props.color : '#FFF'};
    color: ${props => props.color ? '#FFF' : '#000'};
`

export const MoneyView = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 70px;
    font-size: 0.8rem;
    margin-left: 10px;
    color: #F6941E;
    font-weight: 600;
    flex: 1;
`
export const CloseToggle = styled.div`
    background: ${props => props.color ? props.color : '#F6941E;'};
    cursor: pointer;
    border-top: 5px solid #fff;
    display: flex;
    justify-content: center;
    font-weight: 600;
    color: #fff;
    &:hover{
        opacity: 0.8;
    }
`
export const OpenToggle = styled.div`
    background: ${props => props.color ? props.color : '#F6941E;'};
    margin: auto 0 0 0;
    cursor: pointer;
    border-top: 5px solid #fff;
    display: flex;
    justify-content: center;
    font-weight: 600;
    color: #fff;
    &:hover{
        opacity: 0.8;
    }
`

export const Button = styled.div`
    font-size: 1rem;
    color: white;
    font-weight: 600;
    display: flex;
    font-family: 'Futura Bold';
    flex: 1;
    cursor: pointer;
    background: ${props => props.color ? props.color : '#F6941E'};
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px 0;
    border-top: 5px solid #fff;
`

export const GroupToggle = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: flex-end;
    margin: auto 0 0 0 ;
`