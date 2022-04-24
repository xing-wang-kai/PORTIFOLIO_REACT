import { Link } from "react-router-dom";
import { Cbody, Cfieldset, Clegend, Cp, Cimg} from "../../styled-components.styled/styles"
import eu from '../../assets/img/uso.png'

const Sobre = () => {
    return(
        <Cbody>
            <h2> Olá.. Tudo bem?</h2>
            <Cfieldset>
            <Clegend>Sobre o Código!</Clegend>
            <Cp>Este projeto foi desenvolvido usando práticas modernas do Typescript com REACT.</Cp>
            <Cp>Neste projeto foram aplicados conceitos modernos do REACT com function componentes, além da utilização da manipulação do RENDER com UseStates e UseEffect.</Cp>
            <Cp>Para a Renderização de Rotas foi usado a biblioteca React-Router-Dom, onde as páginas são manipuladas com uso de práticas modernas da biblioteca usando BrowserRouter, Routes, Route e Link para construir conexões entre as páginas.</Cp>

            <Cp>Como práticas modernas usadas nas bibliotecas Material UI e BootStrap Foi usado o Styled-Componet do React, criando desta forma renderizações modernas de componentes aplicando técnicas do SASS no CSS, cada componente foi estilizado com esta técnica para separar suas estilizações de forma que se torne ainda mais simples a compreensão e manutenção do código.
            </Cp>
            
            <Cp> Navegue pelo código <a href="https://github.com/xing-wang-kai/PORTIFOLIO_REACT" target={"_blanck"}> Clique Aqui</a> Para o código do Projeto no meu Github.</Cp>
            <br/>
            </Cfieldset>
            <Cfieldset>
                <Clegend>Sobre Kai Wang... 王凯</Clegend>
                <Cimg src={eu} alt='minha foto' />
                <Cp> Olá me chamo Wang kai este é meu nome chinês, sou Brasileiro e falo Mandarim e inglês fluente..</Cp>
                <Cp> Desde pequenos sempre amei computadores e códigos, porém os obstáculos sociais e financeiros da época me impediram de estudar, então me dediquei a aprender idiomas principalmente o mandarim que também possuía um sistema de codifico e logica que iria além do português. Hoje após conquistar maior autonomia financeira estou me dedicando a apreender programação com muita dedicação e esforço..</Cp>
                <Cp>Atualmente estou estudando na graduação Jogos Digitais, E estou aprendendo programar em C#, C e C++ para desenvolvimento de jogos, além de conteúdos relacionados a IHC(interação Homem e Computador) e linguagem de estrutura UML, na área desenvolvimento Web Amo muito projetos com React js, estilização com Sass(viciante) e construções de API do tipo Rest para mongo DB e MySql com Moogooze, Sequelize, nest e  muito mais...</Cp>
                <Cp> caso queria saber mais sobre mim, <Link to="/contato">Clique Aqui</Link></Cp>

            </Cfieldset>

        </Cbody>
        )
}

export default Sobre;