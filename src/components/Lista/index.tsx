import React, { useState } from 'react';
import { Cul, Caside, Cfieldset, Clegend } from '../../styled-components.styled/styles';
import Item from './item/item'
import "./styles.css";

const Lista=(props:any)=>{
    
        return(
        <Cfieldset>
            <Clegend>Estudos do dia</Clegend>
            <Caside>
                <Cul>
                    {props.Tarefas.map((item:any , index:any)=>(
                        <Item 
                            selecionarTarefa={props.selecionarTarefa} 
                            key={index} 
                            tarefa={item}
                            indice={index} />
                        
                    ))}
                </Cul>
            </Caside>
        </Cfieldset>
            
            )
}

export default Lista;