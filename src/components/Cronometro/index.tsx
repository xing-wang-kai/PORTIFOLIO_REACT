import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/date";
import { CButton, Cfieldset, Clegend } from "../../styled-components.styled/styles";
import Relogio from "./Relogio";
import './style.css'

const Cronometro = (props:any) => {
    
    const [tempo, setTempo]= useState<number>();

    function regressiva(contador: number = 0){
        setTimeout(()=>{
            if(contador > 0){
                setTempo(contador -1);
                return regressiva(contador-1);
            }
            props.finalizarTarefas();
        }, 1000);
    }   
    useEffect(()=>{
        setTempo(tempoParaSegundos(String(props.selecionado?.tempo)))
    },[props.selecionado])
    return (
    <Cfieldset>
        <Clegend>Escolha um Card e Inicie o Cronômetro</Clegend>
    <div className="cronometro">
    <p>tempo: {tempo}</p>
        <div className="relogioWrapper">
            
            <Relogio tempo={tempo} />
        </div>
        <CButton onClick={()=> regressiva(tempo)}> Começar!</CButton>
    </div>
    </Cfieldset>
    )
}
export default Cronometro;