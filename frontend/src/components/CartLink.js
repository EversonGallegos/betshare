import React, {useState, useEffect} from 'react'
import { ContainerCartLink, ViewCountCart } from './styles/header.styles'
import { Link } from 'react-router-dom'
import { service } from '../services/api'

const CartLink = () => {
    const [itens, setItens] = useState(0)
    useEffect(() => {
        const getData = async () => {
            const length = await service.getLengthCart()
            setItens(length)
        }
        getData()
    }, [])

    return (
            <ContainerCartLink>
                <Link to='/cart'>
                    Carrinho
                    {itens > 0 &&
                        <ViewCountCart>{itens}</ViewCountCart>
                    }
                </Link>
            </ContainerCartLink>
    )
}

export default CartLink