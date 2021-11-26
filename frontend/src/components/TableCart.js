import React, {useState, useEffect} from 'react'
import { ConfirmButton, ContainerCart, ContainerFooter, ContainerTable, RemoveButton, Table, TBODYTableCart, TDTableCart, THEADTableCart, THTableCart, TitleCart, TotalValue, TRTableCart } from '../components/styles/cart.styles'
import { service } from '../services/api'
import TableRow from './TableRow'

const TableCart = () => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    
    useEffect(() => {
        service.getCart(setCart)
        let value = 0
        cart.map(item => {
            value +=  item['price']
        })
        setTotalPrice(value.toFixed(2))
    }, [])

    const handleDelete = (id) => {
        service.deleteRequest(id)
    }
    
    return (
        <ContainerCart>
            <TitleCart>Apostas em aberto</TitleCart>
            <ContainerTable>
                <Table>
                    <THEADTableCart>
                        <TRTableCart>
                            <THTableCart>Jogo</THTableCart>
                            <THTableCart>Qnt. de números</THTableCart>
                            <THTableCart>Preço da cota</THTableCart>
                            <THTableCart>Qnt. de cotas</THTableCart>
                            <THTableCart>Preço total</THTableCart>
                            <THTableCart></THTableCart>
                        </TRTableCart>
                    </THEADTableCart>
                    <TBODYTableCart>
                        {cart.map((item) =>
                            <TableRow item={item} key={item['id']} onDelete={handleDelete}  />
                        )}
                    </TBODYTableCart>
                </Table>
            </ContainerTable>
            <ContainerFooter>
                <TotalValue>Total: {totalPrice}</TotalValue>
                <ConfirmButton>Finalizar</ConfirmButton>      
            </ContainerFooter>
        </ContainerCart>
    )
}

export default TableCart
