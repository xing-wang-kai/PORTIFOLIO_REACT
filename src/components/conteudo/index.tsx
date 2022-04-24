
import {GlobalStyle, Cbody, CfomularioDiv} from '../../styled-components.styled/styles'
import Formulario from '../Formulario'
import Lista from '../Lista'
import Cronometro from '../Cronometro';

const Conteudo = (props: any) => {
    return (
        <div>
            <GlobalStyle/>
            <Cbody>
                <CfomularioDiv >
                    <div>
                    <Formulario addTarefa={props.addTarefa}/>
                    <Cronometro selecionado={props.selecionado}
                    finalizarTarefas={props.finalizarTarefas}/>
                    </div>
                    <Lista Tarefas={props.Tarefas} selecionarTarefa={props.selecionarTarefa}/>
                </CfomularioDiv>
            </Cbody>
        </div>
        )
}

export default Conteudo;