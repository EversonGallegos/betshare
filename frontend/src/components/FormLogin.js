import React from 'react'
import Form from './Form'
import { ButtonSubmit, GroupInputs, Input, Label, SecundaryButton, TitleForm } from './styles/form.styles'

const FormLogin = () => {
    return (
        <Form>
            <TitleForm>Faça o login</TitleForm>
            <GroupInputs>
                <Label htmlFor='username'>Usuário</Label>
                <Input 
                    type='text' 
                    name='username' />
            </GroupInputs>
            <GroupInputs>
            <Label htmlFor='password'>Senha</Label>
                <Input 
                    type='password' 
                    name='password' />
            </GroupInputs>
            <ButtonSubmit type='submit'>Entrar</ButtonSubmit>
            <SecundaryButton to='/register'>Registre-se</SecundaryButton>
        </Form>
    )
}

export default FormLogin
