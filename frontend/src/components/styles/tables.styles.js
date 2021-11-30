import styled from "styled-components/macro";

export const GameName = styled.div`
    font-family: 'Futura Bold';
    font-weight: 600;
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TotalValue = styled.p`
    font-family: 'Futura Bold';
`

export const RemoveButton = styled.button` 
    color: red;
    font-family: courier;
    cursor: pointer;
    font-weight: 700;
    padding: 0 10px;
    border: none;
    background: #fff;
    &:hover{
        background: #AAA;
    }
`

export const ContainerFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: auto;
    border-radius: 0 0 10px 10px;
`

export const ConfirmButton = styled.div`
    padding: 5px 15px;
    color: #FFF;
    background: orange;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    margin: 10px;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
`

export const ContainerTable = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 98%;
    background: #fff;
    border-radius: 10px;
    max-width: 600px;
    min-height: 300px;
    padding: 10px;
`

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 50px;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
`

export const Title = styled.h1`
    font-family: 'Futura Bold';
    font-size: 1.2rem;
    flex: 1;
`

export const Subtitle = styled.p`
    font-size: 0.9rem;
    flex: 1;
`

export const Table = styled.div`
    display: block;
`

export const ContainerTableRowHead = styled.div`
    display: flex;
    padding: 5px 0;
    background: #005DA8;
    color: #fff;
    margin-top: 5px;
`

export const ContainerTableRow = styled.div`
    display: flex;
    padding: 5px 0;
    cursor: pointer;
    width: 100%;
    background: ${props => props.toggle ? '#1179B6' : null};
    color: ${props => props.toggle ? '#fff': '#000'};
    &:hover{
        background: #1179B6;
        color: #fff;
    }
`

export const TableHeadItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    font-family: 'Futura Bold';
    text-align: center;
    flex: 1;
`

export const TableItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    text-align: center;
    font-family: sans-serif;
    flex: 1;
`

export const ColumnItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;  
    div{
        width: 100%;
        font-size: 0.7rem;
        &:hover{
            background: #fff;
            color: #000;
            cursor: initial;
        }
        div{
            &:nth-child(1){
                align-items: center;
                justify-content: flex-end;
                max-width: 30%;
                font-weight: 600;
            }
            &:nth-child(2){
                align-items: center;
                justify-content: center;
                flex: 1;
                div{
                    justify-content: center;
                }
            }
        }
    }
`