import React, { useState, useContext } from 'react'
import Form from '../components/Form'
import { ButtonSubmit, 
        ErrorMessage, 
        GroupInputs, 
        Input, 
        Label, 
        SecundaryButton, 
        TitleForm } from '../components/styles/form.styles'
import AuthContext from '../context/AuthContext'
import { service } from '../services/api'

const FormLogin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()

    const Login = async (e) => {
        e.preventDefault()
        const status = await service.Login(username, password)
        if(status !== 200){
            setError('Usuário e/ou senha não está correto!')
            setTimeout(() => setError(''), 3000)
        }
    }

    return (
        <Form action={Login}>
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
