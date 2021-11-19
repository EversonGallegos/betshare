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
    border: 7px solid white;
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
    display: flex;
    color: white;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 600;
    background: ${props => props.color ? props.color : '#005DA8'};
    padding: 10px;

`
export const GameNumbers = styled.div`
    font-size: 0.8rem;
    color: white;
    font-weight: 600;
    display: flex;
    flex: 1;
    background: ${props => props.color ? props.color : '#F6941E'};
    justify-content: center;
    align-items: center;
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
    grid-template-columns: repeat(10, 1fr);
    justify-items: center;
    border-top: 5px solid white;
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
        max-width: 40%
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
    font-size: 0.8rem;
    color: #F6941E;
    text-align: right;
    margin-bottom: 5px;
    min-width: 50%;
    align-self: center;
`

export const GroupInputInner = styled.div`
    display: flex;
`

export const NumbersView = styled.div`
    display: flex;
    height: 20px;
    width: 20px;
    justify-content: center;
    align-items: center;
    border: 2px solid #FFF;
    margin-right: 10px;
    background: ${props => props.color ? props.color : '#FFF'};
    color: ${props => props.color ? '#FFF' : '#000'};
`

export const MoneyView = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
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

export const Button = styled.div`
    font-size: 0.9rem;
    color: white;
    font-weight: 600;
    display: flex;
    flex: 1;
    cursor: poiter;
    background: ${props => props.color ? props.color : '#F6941E'};
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px 0;
    border-top: 5px solid #fff;
`