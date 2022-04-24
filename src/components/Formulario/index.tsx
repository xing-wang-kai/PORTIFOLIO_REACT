import  { useState } from 'react';
import Button from '../button'
import { Clegend, Cfieldset, Cinput, Clabel, Cform } from '../../styled-components.styled/styles'
import { v4 as uuid4 } from 'uuid';
const Formulario =(props:any)=> {
interface Ivalores{
    tarefa: string,
    tempo: string,
    selecionado: boolean,
    completado: boolean,
    id: number;
}
        const [valores, setValores] = useState<Ivalores | any >({});
        const handleTarefa=(e: any)=>{
            e.stopPropagation();
            e.preventDefault();
            setValores({...valores, [e.target.name]: e.target.value})
            
        }
        const enviaTarefa=(e:any)=> {
            e.preventDefault();
            e.stopPropagation();
            const valor = {...valores, selecionado: false, completado: false, id: uuid4() }
            props.addTarefa(valor);
            
        }
        return(
            <Cfieldset>
                <Clegend>Formulário</Clegend>
                <Cform onSubmit={enviaTarefa}>
                    <div>
                        <Clabel htmlFor="tarefa"> Adicione um novo estudo: </Clabel>
                        <Cinput onChange={handleTarefa} 
                                value={valores.tarefa}
                                type="text" 
                                name='tarefa'
                                id='tarefa'
                                placeholder="O que você quer estudar"
                                required />
                    </div>
                    <div>
                        <Clabel htmlFor="tempo"> Tempo: </Clabel>
                        <Cinput onChange={handleTarefa} 
                                value={valores.tempo}
                                type="time" 
                                step='1'
                                name='tempo'
                                id='tempo'
                                min='00:00:00'
                                max='01:30:00'
                                required />
                    </div>
                <Button>Adicionar</Button>
                </Cform>

            </Cfieldset>
            
            )
    }


export default Formulario;