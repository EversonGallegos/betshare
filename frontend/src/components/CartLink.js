import React, {useState, useEffect, useContext} from 'react'
import { ContainerCartLink, ViewCountCart } from './styles/header.styles'
import { Link } from 'react-router-dom'
import { service } from '../services/api'
import AuthContext from '../context/AuthContext'

const CartLink = () => {
    const [itens, setItens] = useState(0)
    const { access_token } = useContext(AuthContext)
    useEffect(() => {
        const getData = async () => {
            const length = await service.getLengthCart(access_token)
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