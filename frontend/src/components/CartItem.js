import React, {useState} from 'react'
import { ContainerTableRow, TableItem, GameName, RemoveButton, ColumnItem } from './styles/tables.styles'

const CartItem = ({item, onClick}) => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }

    const remove = () => {
        onClick(item['id'])
    }

    return (
        <>
            <ContainerTableRow onClick={handleToggle} toggle={toggle} key={item['id']}>
                <TableItem><GameName>{item['option']['game']['name']}</GameName></TableItem>
                <TableItem>{item['price']}</TableItem>
                <TableItem><RemoveButton type='button' onClick={remove}>X</RemoveButton></TableItem>
            </ContainerTableRow>
            {toggle && 
                <ColumnItem>
                <ContainerTableRow>    
                    <TableItem>Números:</TableItem>
                    <TableItem>{item['option']['numbers']}</TableItem>
                </ContainerTableRow>
                <ContainerTableRow>    
                    <TableItem>Cotas:</TableItem>
                    <TableItem>{item['quotes']}</TableItem>
                </ContainerTableRow>
                <ContainerTableRow>    
                    <TableItem>Preço da cota:</TableItem>
                    <TableItem>{item['option']['quote_value']}</TableItem>
                </ContainerTableRow>    
            </ColumnItem>
            }
        </>
    )
}

export default CartItem
