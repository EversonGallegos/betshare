import React from 'react'
import { ConfirmScreenContainer,
        Title,
        GameName,
        GroupInfo,
        Label,
        Value,
        GroupButtons,
        GroupSuggest,
        ConfirmButton,
        CancelButton} from './styles/confirmscreen.styles'

const ConfirmScreen = ({name, 
                    numbers, 
                    quote_value, 
                    quote_numbers, 
                    total_price,
                    color,
                    selecteds,
                    handleCancel}) => {
    return (
        <ConfirmScreenContainer color={color}>
            <Title>Confirma a aposta?</Title>
            <GameName>{name}</GameName>
            <GroupInfo>
                <Label>Quantidade de números:</Label>
                <Value>{numbers}</Value>
            </GroupInfo>
            <GroupInfo>
                <Label>Preço da cota:</Label>
                <Value>{quote_value}</Value>
            </GroupInfo>
            <GroupInfo>
                <Label>Quantidade de cotas:</Label>
                <Value>{quote_numbers}</Value>
            </GroupInfo>
            <GroupInfo>
                <Label>Preço total:</Label>
                <Value>{total_price}</Value>
            </GroupInfo>
            <GroupSuggest>
                <Label>Sugestões:</Label>
                <Value>{selecteds}</Value>
            </GroupSuggest>
            <GroupButtons>
                <ConfirmButton>confirmar</ConfirmButton>
                <CancelButton onClick={handleCancel}>cancelar</CancelButton>
            </GroupButtons>
        </ConfirmScreenContainer>
    )
}

export default ConfirmScreen
