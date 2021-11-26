import React, {useState} from 'react'
import { RemoveButton, TDTableCart, TRTableCart } from '../components/styles/cart.styles'

const TableRow = ({item, onDelete}) => {
    const [id, setID] = useState(item['id'])
    console.log(id)
    return (
        <TRTableCart key={id}>
            <TDTableCart>{item['option']['game']['name']}</TDTableCart>
            <TDTableCart>{item['option']['numbers']}</TDTableCart>
            <TDTableCart>{item['option']['quote_value']}</TDTableCart>
            <TDTableCart>{item['quotes']}</TDTableCart>
            <TDTableCart>{item['price']}</TDTableCart>
            <TDTableCart><RemoveButton onClick={onDelete(id)}>X</RemoveButton></TDTableCart>
        </TRTableCart>
    )
}

export default TableRow
