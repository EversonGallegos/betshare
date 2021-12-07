import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../components/Form'
import { ButtonSubmit, 
        ErrorMessage, 
        GroupInputs, 
        Input, 
        Label, 
        SecundaryButton, 
        TitleForm } from '../components/styles/form.styles'
import AuthContext from '../context/AuthContext'

const FormLogin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()
    
    const handleLogin = async (e) => {
        e.preventDefault()
        const status = await login(username, password)
        console.log(status)
        if(status === 200){
            navigate('/home')
        }else{
            setError('Usuário e/ou senha incorretos')
            setTimeout(() => setError(''), 3000)
        }
    }
    

    return (
        <Form action={handleLogin}>
            <TitleForm>Informações de acesso</TitleForm>
            {error &&
            <ErrorMessage>{error}</ErrorMessage>}
            <GroupInputs>
                <Label htmlFor='username'>Usuário</Label>
                <Input 
                    type='text' 
                    name='username' 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
            </GroupInputs>
            <GroupInputs>
            <Label htmlFor='password'>Senha</Label>
                <Input 
                    type='password' 
                    name='password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
            </GroupInputs>
            <ButtonSubmit type='submit'>Entrar</ButtonSubmit>
            <SecundaryButton to='/register'>Registre-se</SecundaryButton>
        </Form>
    )
}

export default FormLogin
