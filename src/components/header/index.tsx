import React from 'react';
import { Link } from 'react-router-dom';
import {Cheader, CTitulo, CulHeader} from '../../styled-components.styled/styles'
import Chrome from '../../assets/img/icons8-futuro-48.png'
const Header = ( ) => {
    return(
    <Cheader>
        <CTitulo><img src={Chrome} alt='imagem tempo' />Lista to-do com cronometro de atividades</CTitulo>
        <CulHeader>
            <li><Link to='/'> Home</Link> </li>
            <li><Link to='/sobre'>Sobre</Link></li>
            <li><Link to='/conteudo'> Conteúdo </Link></li>
            <li><Link to='/contato'> contato</Link> </li>
        </CulHeader>
    </Cheader>
    )
}
export default Header;