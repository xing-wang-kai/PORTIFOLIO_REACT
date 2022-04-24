import { Cbody, CButton, Clihome, Cul } from "../../styled-components.styled/styles"
import { Link } from 'react-router-dom'
import react1 from '../../assets/img/react-modernizando-escrever-typescript.svg'
import react2 from '../../assets/img/react-arquivos-estaticos.svg'
import react3 from '../../assets/img/react-biblioteca-react-router.svg'
import react4 from '../../assets/img/react-js.svg';
import react5 from '../../assets/img/react-ciclo-de-vida.svg';
import react6 from '../../assets/img/react-function-components.svg';
import react7 from '../../assets/img/react-hooks-e-formularios.svg';
import react8 from '../../assets/img/react-router-navegacao-spa.svg';
import react9 from '../../assets/img/react-styled-components.svg';

const Home = () => {
    return(
    <Cbody>
      <h2>Seja muito bem-vindo!!</h2>
      <p> <i>Este projeto faz parte do Portifólio de Kai Wang... </i> </p>

      <p><Link to={'/sobre'}>Click Aqui</Link> para Saber como foi desenvolvido este projeto </p> <br/>
      <CButton><Link to="/conteudo">Clique Aqui para Começar! </Link></CButton>

      <p>Este projeto foi desenvolvido com foco na <a href= 'https://cursos.alura.com.br/formacao-react-ts' target={"_blank"} >Formação React com TypeScript</a> da escola <a href= 'https://cursos.alura.com.br' target={"_blank"}>ALURA</a> e tem como implementações conteúdos referente aos cursos: </p> <br/>
      <Cul>
        <Clihome><img src={react1} alt='curso01' width='80px' /> <a href= "https://cursos.alura.com.br/course/react-modernizando-escrever-typescript" > <p> Fundamentos de React: escrevendo com Typescript.</p> </a> </Clihome>

        <Clihome><img src={react2} alt='curso01' width='80px' /> <a href= "https://cursos.alura.com.br/course/react-arquivos-estaticos"><p> React: lidado com Arquivos estáticos.</p> </a> </Clihome>

        <Clihome><img src={react3} alt='curso01' width='80px' /> <a href= "https://cursos.alura.com.br/course/react-biblioteca-react-router"><p> React conhecendo a biblioteca React Router.</p> </a> </Clihome>

        <Clihome><img src={react4} alt='curso01' width='80px' /> <a href="https://cursos.alura.com.br/course/react-js"><p>React entendendo como a biblioteca funciona;</p>  </a> </Clihome>

        <Clihome><img src={react5} alt='curso01' width='80px' /> <a href="https://cursos.alura.com.br/course/react-ciclo-de-vida"> <p>React: ciclo de vida dos componentes;</p></a> </Clihome>

        <Clihome><img src={react6} alt='curso01' width='80px' /> <a href="https://cursos.alura.com.br/course/react-function-components"><p> React Function Components, uma abordagem moderna;</p></a> </Clihome>

        <Clihome><img src={react7} alt='curso01' width='80px' /> <a href="https://cursos.alura.com.br/course/react-hooks-e-formularios"><p> React hooks, contextos e boas Práticas</p></a> </Clihome>

        <Clihome><img src={react8} alt='curso01' width='80px' /> <a href= "https://cursos.alura.com.br/course/react-router-navegacao-spa"> <p>React Router: navegações em uma SPA</p></a> </Clihome>

        <Clihome><img src={react9} alt='curso01' width='80px' /> <a href="https://cursos.alura.com.br/course/react-styled-components"> <p>React abstraindo seu CSS com styled Components;</p> </a>  </Clihome>
      </Cul>
    </Cbody>
    )
}
export default Home;