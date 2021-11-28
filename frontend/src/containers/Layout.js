import React, {useState, useEffect} from 'react'
import { Container } from '../components/styles/app.styles'
import Header from './Header'
import { service } from '../services/api'
const Layout = ({children}) => {
    const [length, setLength] = useState(0)
    useEffect(() => {
        const getData = async () => {
            const data = await service.getLengthCart()
            setLength(data)
        }
        getData()
    }, [])

    return (
            <Container>
                <Header />
                {children}
            </Container>
    )
}

export default Layout
