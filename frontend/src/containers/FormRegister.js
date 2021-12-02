import React from 'react'
import Form from '../components/Form'
import { ButtonSubmit, FormContainer, GroupInputs, Input, Label, SecundaryButton, TitleForm } from '../components/styles/form.styles'

const FormRegister = () => {
    return (
            <Form>
                <TitleForm>Registre-se</TitleForm>
                <GroupInputs>
                    <Label htmlFor='username'>Usuário</Label>
                    <Input 
                        type='text' 
                        name='username' />
                </GroupInputs>
                <GroupInputs>
                    <Label htmlFor='email'>E-mail</Label>
                    <Input 
                        type='email' 
                        name='email' />
                </GroupInputs>
                <GroupInputs>
                    <Label htmlFor='password'>Senha</Label>
                    <Input 
                        type='password' 
                        name='password' />
                </GroupInputs>
                <GroupInputs>
                    <Label htmlFor='password2'>Confirme a senha</Label>
                    <Input 
                        type='password' 
                        name='password2' />
                </GroupInputs>
                <ButtonSubmit>Registrar</ButtonSubmit>
                <SecundaryButton to='/login'>Voltar</SecundaryButton>
            </Form>
    )
}

export default FormRegister
