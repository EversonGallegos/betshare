import styled from "styled-components/macro";

export const ConfirmScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 300px;
    position: fixed;
    top: calc(50% - 120px);
    left: calc(50% - 140px);
    padding: 10px;
    color: #FFF;
    background: ${props => props.color? props.color : '#005DA8'};
    z-index: 10;
    border: 5px solid #;
`

export const Title = styled.h1`
    font-family: 'Futura Bold';
    text-align: center;
    font-size: 1.3rem;
`
export const GameName = styled.p`
    font-family: 'Futura Bold';
    text-align: center;
    font-size: 1.4rem;
    margin: 10px 0;
`
export const GroupInfo = styled.div`
    display: flex;
    align-items: center;
`
export const Label = styled.p`
    margin-right: 5px;
    font-size: 0.9rem;
`
export const Value = styled.p`
    font-family: 'Futura Bold';
    font-size: 0.8rem;

`

export const GroupSuggest = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 10px;
    p:nth-child(1){
        font-size: 0.8rem;
        margin-bottom: 3px;
    }
    p:nth-child(2){
        font-size: 0.7rem;
        text-align: center;
        font-family: 'Poppins';
    }
`

export const GroupButtons = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2px;
    margin-top: auto;
`
export const ConfirmButton = styled.div`
    background: #F6941E;
    padding: 5px 10px;
    font-family: 'Futura Bold';
    color: #FFF;
    cursor: pointer;
    margin: 0 3px;
    &:hover{
        opacity: 0.7;
    }
`
export const CancelButton = styled.div`
    padding: 5px;
    cursor: pointer;
    font-family: 'Futura Bold';
    &:hover{
        opacity: 0.7;
    }
`

export const BackgroundFill = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #000;
    opacity: 0.6;
`