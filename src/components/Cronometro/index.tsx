import { Cfieldset, Clegend } from "../../styled-components.styled/styles";
import Button from "../button"
import Relogio from "./Relogio";
import './style.css'

const Cronometro = () => {
    return (
    <Cfieldset>
        <Clegend>Escolha um Card e Inicie o Cronômetro</Clegend>
    <div className="cronometro">
        <div className="relogioWrapper">
            <Relogio />
        </div>
        <Button>Começar!</Button>
    </div>
    </Cfieldset>
    )
}
export default Cronometro;