import React, {useState, useEffect} from 'react'
import { ConfirmButton, 
        ContainerCart, 
        ContainerFooter, 
        TBODYTableCart, 
        THEADTableCart, 
        THTableCart, 
        TotalValue, 
        TRTableCart } from '../components/styles/cart.styles'
import { service } from '../services/api'
import TableRow from './TableRow'
import { ContainerHeader, 
    ContainerTableRowHead, 
    ContainerTickets, 
    Subtitle, 
    Table, 
    TableHeadItem, 
    Title } from '../components/styles/tables.styles'


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
            <ContainerHeader>
                <Title>Requisições em aberto</Title>
                <Subtitle>Conclua o pagamento para finalizar e gerar suas cotas.</Subtitle>
            </ContainerHeader>
            <Table>
                <ContainerTableRowHead>
                        <TableHeadItem>Jogo</TableHeadItem>
                        <TableHeadItem>Qnt. de números</TableHeadItem>
                        <TableHeadItem>Preço da cota</TableHeadItem>
                        <TableHeadItem>Qnt. de cotas</TableHeadItem>
                        <TableHeadItem>Preço total</TableHeadItem>
                        <TableHeadItem></TableHeadItem>
                </ContainerTableRowHead>
                <TBODYTableCart>
                    {cart.map((item) =>
                        <TableRow item={item} onClick={handleDelete} />
                    )}
                </TBODYTableCart>
            </Table>
            <ContainerFooter>
                <TotalValue>Total: {totalPrice}</TotalValue>
                <ConfirmButton onClick={handleConfirmPayment}>Finalizar</ConfirmButton>      
            </ContainerFooter>
        </ContainerCart>
    )
}

export default TableCart
