import { Ch3, Cspan } from "../../../styled-components.styled/styles"
import '../../Lista/styles.css';
const Item = (props: any) =>{
    return(
        <li className={`${"item"} ${props.tarefa.selecionado? "itemSelecionado": " "} ${props.tarefa.completado? "itemCompletado": "" }`} onClick={()=> !props.tarefa.completado && props.selecionarTarefa(props.tarefa)}>
            <Ch3>{props.tarefa.tarefa}</Ch3>
            <Cspan>{props.tarefa.tempo}</Cspan>
            {props.tarefa.completado && <span className="concluido" aria-label="tarefa completada"></span> }
        </li>
    )
}

export default Item;