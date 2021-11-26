import styled from 'styled-components/macro'


export const ContainerCart = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    background: #FFF;
    align-items: center;
    border-radius: 10px;
    min-height: 400px;
    max-height: 600px;
    padding: 10px 10px;
    max-width: 95%;
`

export const TitleCart = styled.h1`
    font-family: 'Futura Bold';
    font-size: 1.3rem;
    text-align: center;
    padding: 20px;
`

export const ContainerTable = styled.div`
    flex: 1;
    max-width: 100%;
    overflow: scroll;
`

export const ContainerFooter = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-end;
`
export const TotalValue = styled.p`
    font-family: 'Futura Bold';
`


export const Table = styled.table`
`

export const THEADTableCart = styled.thead`
    padding: 10px 0;
`
export const TBODYTableCart = styled.tbody`
    padding: 10px 0;
`
export const THTableCart = styled.th`
    font-family: 'Futura Bold';
    padding: 0 10px;

`

export const TRTableCart = styled.tr`
    text-align: center;
`

export const TDTableCart = styled.td`
    padding: 5px 5px;
    font-size: 0.8rem;
`

export const ConfirmButton = styled.div`

    padding: 5px 15px;
    color: #FFF;
    background: orange;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    margin: 10px;

`

export const RemoveButton = styled.div` 
    color: red;
    font-family: courier;
    cursor: pointer;
    font-weight: 700;
    padding: 0 10px;
    &:hover{
        background: #DDD;
    }
`