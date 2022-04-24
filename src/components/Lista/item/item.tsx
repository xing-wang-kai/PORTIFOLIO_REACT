import { Ch3, Cspan } from "../../../styled-components.styled/styles"
import '../../Lista/styles.css';
const Item = ({tarefa, tempo }: {tarefa: string, tempo: string}) =>{
    return(
        <li className="item">
            <Ch3>{tarefa}</Ch3>
            <Cspan>{tempo}</Cspan>
        </li>
    )
}

export default Item;