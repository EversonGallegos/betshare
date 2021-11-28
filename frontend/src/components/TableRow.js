import React from 'react'
import { RemoveButton, TDTableCart, TRTableCart, GameName } from '../components/styles/cart.styles'
const TableRow = ({item, onClick}) => {
    const remove = () => {
        onClick(item['id'])
    }

    return (
        <TRTableCart key={item['id']}>
            <TDTableCart><GameName>{item['option']['game']['name']}</GameName></TDTableCart>
            <TDTableCart>{item['option']['numbers']}</TDTableCart>
            <TDTableCart>{item['option']['quote_value']}</TDTableCart>
            <TDTableCart>{item['quotes']}</TDTableCart>
            <TDTableCart>{item['price']}</TDTableCart>
            <TDTableCart><RemoveButton type='button' onClick={remove}>X</RemoveButton></TDTableCart>
        </TRTableCart>
    )
}

export default TableRow
