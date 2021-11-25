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
        CancelButton,
        GroupTerms,
        CheckTerms,
        LabelTerms,
        TotalQuotes} from './styles/confirmscreen.styles'

    
const ConfirmScreen = ({name, 
                    numbers, 
                    quote_value, 
                    quote_numbers, 
                    total_price,
                    color,
                    selecteds,
                    handleCancel,
                    handleConfirm}) => {

    const getSuggest = selecteds.split(',').sort().join(',')

    return (
        <ConfirmScreenContainer color={color}>
            <Title>Confirme sua aposta</Title>
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
                <TotalQuotes>/250</TotalQuotes>
            </GroupInfo>
            <GroupInfo>
                <Label>Participação no bilhete*:</Label>
                <Value>{((quote_numbers/250)*100)} %</Value>
            </GroupInfo>
            <GroupInfo>
                <Label>Preço total:</Label>
                <Value>{total_price}</Value>
            </GroupInfo>
            <GroupSuggest>
                <Label>Números sugeridos:</Label>
                <Value>{getSuggest}</Value>
            </GroupSuggest>
            <GroupTerms>
                <CheckTerms name='checkterms' type='checkbox' checked/>
                <LabelTerms htmlFor='checkterms'>aceito os termos da política de apostas *</LabelTerms>
            </GroupTerms>
            <GroupButtons>
                <ConfirmButton onClick={handleConfirm}>confirmar</ConfirmButton>
                <CancelButton onClick={handleCancel}>voltar</CancelButton>
            </GroupButtons>
        </ConfirmScreenContainer>
    )
}

export default ConfirmScreen
