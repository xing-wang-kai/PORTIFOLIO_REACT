import React from 'react';
import { CButton } from '../../styled-components.styled/styles'
const Button = (props: any) => {
    return(
    
    <CButton >
        {props.children}
    </CButton>
    )
}

export default Button;