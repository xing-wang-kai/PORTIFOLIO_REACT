import { Cbody, Cfieldset,Cdiv } from "../../styled-components.styled/styles"

const Contato = () => {
    return(
      <Cbody>
          <h2>Páginas Contatos</h2>
          <p>Caso tenha gostado entre em contato comigo...</p>
          <Cfieldset> 
              <Cdiv>
            <a href="https://github.com/xing-wang-kai"> <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /></a>
            <br/>
            <br/>
            <a href="https://www.youtube.com/channel/UCY29hQpYlZK4ZeHA8p9f_7g" target={"_blank"}> <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" /></a>
            <br/>
            <br/>
            <a href="https://www.instagram.com/xingwangkai/" target={"_blank"}><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" /></a>
            <br/>
            <br/>
            <a href = "mailto:kaiuchihaa@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" /></a>
            <br/>
            <br/>
            <a href="https://www.linkedin.com/in/deusnir-portela-633b90181/" target={"_blank"}><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
            <br/>
            <br/>
            <a href="https://web.whatsapp.com/send?phone=5511990150864" target={"_blank"}><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/></a>
            <br/>
            <br/>
            </Cdiv>
            </Cfieldset>
      </Cbody>
      )
}

export default Contato;