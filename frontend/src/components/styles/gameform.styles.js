import styled from 'styled-components/macro'

const borderstyle = "2px solid #AAA"

export const ContainerFormGame = styled.div`
    height: calc(100vh-50px);
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 15px;
`

export const FormGame = styled.form`
    margin: 10px;
    align-self: center;
    display: flex;
    flex-direction: column;
    border: ${borderstyle};
    padding: 15px;
    border-radius: 8px;
    @media screen and (max-width:400px){
        margin: 0;
        border: none;
    }
`
export const TitleForm = styled.h1`
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 20px;
`

export const GroupItems = styled.div`
    display: grid;
    margin-bottom: 10px;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    label {
        text-align: right;
        margin-right: 10px;
        font-size: 0.8rem;
    }
    input[type='number']{
        padding: 5px;
        width: 80%;
        border: ${borderstyle};
        border-radius: 8px;
        justify-self: center;
    }
`
export const GroupInner =  styled.div`
    display: flex;
    width: 80%;
    justify-self: center;
    justify-items: center;
    input {
        flex: 1;
        @media screen and (max-width:310px){
            max-width: 85%;
        }
    }
`

export const NumbersView =  styled.div`
    border: ${borderstyle};
    border-radius: 10px;
    height: 20px;
    width: 20px; 
    display: flex;
    justify-content: center;
    align-items: center;
`
export const UnmutableValue = styled.p`
    text-align: center;
`

export const SubmitButton = styled.button`
    width: 50%;
    padding: 10px;
    background: orange;
    color: white;
    align-self: center;
    font-weight: 600;
    border: 1px solid #AAA;
    border-radius: 8px;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
`