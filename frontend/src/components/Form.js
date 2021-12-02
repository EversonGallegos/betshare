import React from 'react'
import { FormContainer, FormElement } from './styles/form.styles'

const Form = ({children, action}) => {
    return (
        <FormContainer>
            <FormElement onSubmit={action}>
                {children}
            </FormElement>
        </FormContainer>
    )
}

export default Form
