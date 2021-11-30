import React from 'react'
import { ContainerTableRow, TableItem, GameName, RemoveButton } from './styles/tables.styles'

const CartItem = ({item, onClick}) => {
    const remove = () => {
        onClick(item['id'])
    }

    return (
        <ContainerTableRow key={item['id']}>
            <TableItem><GameName>{item['option']['game']['name']}</GameName></TableItem>
            <TableItem>{item['option']['numbers']}</TableItem>
            <TableItem>{item['option']['quote_value']}</TableItem>
            <TableItem>{item['quotes']}</TableItem>
            <TableItem>{item['price']}</TableItem>
            <TableItem><RemoveButton type='button' onClick={remove}>X</RemoveButton></TableItem>
        </ContainerTableRow>
    )
}

export default CartItem
