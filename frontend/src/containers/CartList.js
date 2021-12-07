import React, { useState, useEffect, useContext } from 'react'
import { service } from '../services/api'
import { ContainerTable,
    ContainerHeader, 
    ContainerTableRowHead, 
    Subtitle, 
    Table, 
    TableHeadItem, 
    Title,
    ConfirmButton,  
    ContainerFooter, 
    TotalValue, 
    ContainerTableBody} from '../components/styles/tables.styles'
import CartItem from '../components/CartItem'
import AuthContext from '../context/AuthContext'


const TableCart = () => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const { access_token } = useContext(AuthContext)

    const handleListCart = async () => {
        const ct = await service.getCart(setCart, access_token)   
    }
    
    const handleConfirmPayment = async () => {
        const payment =  await service.setPayment(access_token)
        if(payment === 200){
            setCart([])
        }
    }

    const handleDelete = async (pk) => {
        const status = await service.deleteRequest(pk, access_token)
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
        <ContainerTable>
            <ContainerHeader>
                <Title>Requisições em aberto</Title>
                <Subtitle>Para gerar suas cotas, finalize os pagamentos.</Subtitle>
            </ContainerHeader>
            <Table>
                <ContainerTableRowHead>
                    <TableHeadItem>Jogo</TableHeadItem>
                    <TableHeadItem>Preço total</TableHeadItem>
                    <TableHeadItem></TableHeadItem>
                </ContainerTableRowHead>
                <ContainerTableBody>
                    {cart.map((item) =>
                        <CartItem 
                            key={item['id']} 
                            item={item} 
                            onClick={handleDelete} 
                        />
                    )}
                </ContainerTableBody>
            </Table>
            <ContainerFooter>
                <TotalValue>Total: {totalPrice}</TotalValue>
                <ConfirmButton onClick={handleConfirmPayment}>Finalizar</ConfirmButton>      
            </ContainerFooter>
        </ContainerTable>
    )
}

export default TableCart