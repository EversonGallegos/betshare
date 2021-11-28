import React, {useState, useEffect} from 'react'
import { ConfirmButton, 
        ContainerCart, 
        ContainerFooter, 
        ContainerTable, 
        Table, 
        TBODYTableCart, 
        THEADTableCart, 
        THTableCart, 
        TitleCart, 
        TotalValue, 
        TRTableCart } from '../components/styles/cart.styles'
import { service } from '../services/api'
import TableRow from './TableRow'

const TableCart = () => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const handleListCart = async () => {
        const ct = await service.getCart()   
        setCart(ct)
    }
    
    const handleConfirmPayment = async () => {
        const payment =  await service.setPayment()
        if(payment === 200){
            setCart([])
        }
    }

    const handleDelete = async (pk) => {
        const status = await service.deleteRequest(pk)
        if(status === 200){
            setCart(cart.filter(item => item.id !== pk))
        }else{
            alert('Houve um erro na exclusão da aposta.')
        }
    }

    useEffect(() => {
        handleListCart()
    }, [])

    useEffect(() => {
        const setPrice = () => {
            let value = 0
            cart.map(item => {
                value +=  item['price']
            })
            setTotalPrice(value.toFixed(2))
        }
        setPrice()
    }, [cart])

    
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
                            <TableRow item={item} onClick={handleDelete} />
                        )}
                    </TBODYTableCart>
                </Table>
            </ContainerTable>
            <ContainerFooter>
                <TotalValue>Total: {totalPrice}</TotalValue>
                <ConfirmButton onClick={handleConfirmPayment}>Finalizar</ConfirmButton>      
            </ContainerFooter>
        </ContainerCart>
    )
}

export default TableCart
