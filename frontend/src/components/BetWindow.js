import React from 'react'
import { ContainerWindow, 
        GroupInfo, 
        GroupNumbers, 
        GroupButtons,
        ItemTitle, 
        Label, 
        Value,
        CancelButton } from './styles/window.styles'

const BetWindow = ({handleCancel, data, name}) => {
    return (
        <ContainerWindow>
            <ItemTitle>{name}</ItemTitle>
            <GroupInfo>
                <Label>Bilhete:</Label>
                <Value>{data['ticket']}</Value>
            </GroupInfo>
            <GroupInfo>
                <Label>Concurso:</Label>
                <Value>{data['contest']['code']}</Value>
            </GroupInfo>
            <GroupInfo>
                <Label>Situação:</Label>
                <Value>{data['contest']['status']}</Value>
            </GroupInfo>
            <GroupInfo>
                <Label>Premiação estimada:</Label>
                <Value>{data['contest']['prize']}</Value>
            </GroupInfo>
            <GroupInfo>
                <Label>Data do sorteio:</Label>
                <Value>20/12/2021</Value>
            </GroupInfo>
            <GroupNumbers>
                <Label>Números do bilhete:</Label>
                <Value>{data['numbers']}</Value>
            </GroupNumbers>
            <GroupButtons>
                <CancelButton onClick={handleCancel}>voltar</CancelButton>
            </GroupButtons>
        </ContainerWindow>
    )
}

export default BetWindow
