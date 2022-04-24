
import {GlobalStyle, Cbody, CfomularioDiv,Cfooter } from '../../styled-components.styled/styles'
import Formulario from '../Formulario'
import Lista from '../Lista'
import Cronometro from '../Cronometro';
import Header from '../header';

const Conteudo = (props: any) => {
    return (
        <div>
            <GlobalStyle/>
            <Cbody>
                <CfomularioDiv >
                    <div>
                    <Formulario addTarefa={props.addTarefa}/>
                    <Cronometro />
                    </div>
                    <Lista Tarefas={props.Tarefas} />
                </CfomularioDiv>
            </Cbody>
        </div>
        )
}

export default Conteudo;