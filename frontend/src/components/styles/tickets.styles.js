import styled from "styled-components/macro";

export const ContainerTickets = styled.div`
    display: block;
    margin-top: 50px;
    width: 98%;
    background: #fff;
    border-radius: 10px;
    max-width: 900px;
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
    background: #ddd;
    margin-top: 5px;
`
export const ContainerTableRow = styled.div`
    display: flex;
    padding: 5px 0;
    cursor: pointer;
    &:hover{
        background: #ddd;
    }
`


export const TableHeadItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    font-family: 'Futura Bold';
    text-align: center;
`

export const TableItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    text-align: center;
`