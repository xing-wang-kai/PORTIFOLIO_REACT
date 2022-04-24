import './style.css';
type props = {
    tempo: number | undefined;
}
const Relogio = ({ tempo = 0 }: props) => {
    const minutos = Math.floor(tempo/60);
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, "0");
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, "0");

    return(
    <div>
        <span className="relogioNumero">{minutoDezena}</span>
        <span className="relogioNumero">{minutoUnidade}</span>
        <span className="relogioDivisao">:</span>
        <span className="relogioNumero">{segundoDezena}</span>
        <span className="relogioNumero">{segundoUnidade}</span>

    </div>
    )
}

export default Relogio;