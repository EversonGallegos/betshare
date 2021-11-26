import React, {useState} from 'react'
import { RemoveButton, TDTableCart, TRTableCart } from '../components/styles/cart.styles'
import { service } from '../services/api'
const TableRow = ({item, onClick}) => {
    const destroy = () => {
        onClick(item['id'])
    }

    return (
        <TRTableCart key={item['id']}>
            <TDTableCart>{item['option']['game']['name']}</TDTableCart>
            <TDTableCart>{item['option']['numbers']}</TDTableCart>
            <TDTableCart>{item['option']['quote_value']}</TDTableCart>
            <TDTableCart>{item['quotes']}</TDTableCart>
            <TDTableCart>{item['price']}</TDTableCart>
            <TDTableCart><RemoveButton type='button' onClick={destroy}>X</RemoveButton></TDTableCart>
        </TRTableCart>
    )
}

export default TableRow
