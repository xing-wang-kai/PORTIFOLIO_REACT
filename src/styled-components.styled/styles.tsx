
import styled, { createGlobalStyle } from 'styled-components'

const cores = {
    primary: "#041C32",
    secondary: "#04293A",
    terciary: "#064663",
    quartenary: "#ECB365"
}
export const GlobalStyle =  createGlobalStyle`
 html{
        margin: 0;
        padding: 0;
        font-family: Arial;
        background-color: ${cores.terciary};
        color: #8f8f8f;

    }
    `;
export const Cbody = styled.body`
    width: 940px;
    background-color: ${cores.primary};
    margin: 1rem auto;
    border-radius: 2rem;
    padding: 2.5rem;
    box-shadow: 5px 5px 5px 1px #0000007c;
    @media (max-width: 940px){
        margin: auto;
        padding: 0.5%;
        width: 95%;
        text-align: center;
    }
    `
export const CTitulo = styled.h1`
    font-size: 2.5rem;
    font-family: "calibri light";
    text-align: center;
    img{
        width:2rem;
    }
    @media (max-width: 940px){
        font-size: 1.5rem;
    }
    @media (max-width: 600px){
        font-size: 1rem;
    }
    `
export const Cp = styled.p`
    color: gray;
    `
export const CButton = styled.button`
    align-self: center;

    background-color: ${cores.secondary};
    border:none;
    border-radius: 0.5rem;
    box-shadow: 2px 4px 4px #0000009f;

    color: ${cores.quartenary};

    font-size: 1.25rem;
    
    margin: 2rem;
    
    padding: 1.6rem;

    width: 150px;
    &:active{
        background-color: ${cores.primary};
        box-shadow: 2px 4px 4px #0000009f;
    }
    &:hover {
        background-color: ${cores.quartenary};
        color: ${cores.secondary};
        a{
        color: ${cores.primary}
    }
    }
    a{
        text-decoration: none;
        color: ${cores.quartenary}
    }
    `
export const Cfieldset = styled.fieldset`
    border-radius: 1rem;
    box-shadow: 5px 5px 5px 1px #0000007c;
    color: ${cores.terciary};

    margin: 2rem 2rem auto 0;
    padding: 1.3rem;
    
    width: 80%;
    &:hover{
        color: ${cores.quartenary};
        border-color: ${cores.quartenary};
    }
    &:hover legend{
        color: ${cores.quartenary};
    }
    @media (max-width: 940px){
        margin: auto;
        width: 95%;
        text-align: center;
        padding: 1%;
    }
    `
export const Clegend = styled.legend`
    padding: 10px;
    margin: 5px;
    font-size: 1.3rem;
    
    `
export const Cform = styled.form`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    `
export const Clabel = styled.label`
    font-size: 1.25rem;
    padding: 0.5rem;
    margin-bottom: 2rem;
    `
export const Cinput = styled.input`
    background-color: ${cores.secondary};
    box-shadow: 1px 1px 1px 1px #0000007f inset;
    border: none;
    border-radius: 0.5rem;

    color: ${cores.quartenary};

    display: flex;

    flex-direction: column;
    font-size: 1rem;

    margin-bottom: 16px;
    margin-top: 10px;

    padding: 0.8rem;

    width: 95%;
    &:hover{
        background-color: ${cores.primary};
        color: ${cores.quartenary};
        border: none;
    }
    @media (max-width: 940px){
        margin: 2rem auto;
        width: 60%;
        text-align: center;
        padding: 2%;
    }
    `
export const CfomularioDiv = styled.div`
    display: flex;
    @media (max-width: 940px){
        display: block;
        font-size: 2.25rem;
        padding: 24px;
        box-sizing: border-box;
    }
    `

export const Cfooter = styled.footer`
    background-color: ${cores.secondary};
    align-items: center;
    padding: 3rem;
    margin: 4rem 0 0 0;
    box-shadow: 1px -3px 3px 1px #0000007f;
    h2{
        text-align: center;
        font-family: cursive;
        color: ${cores.quartenary}
    }
    `
export const Cheader = styled.header`
    background-color: ${cores.secondary};
    align-items: center;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 1px 3px 3px 1px #0000007f;
    @media (max-width: 600px){
        text-align: center;
        height: 100%;
        padding: 0.2rem;
        margin-bottom: 1rem;
    }
    @media (max-width: 940px){
        margin-bottom: 1rem;
    }
    `
export const Cul = styled.ul`
    display: inline;
    list-style-type: none;
    max-width: 80%;
    overflow: auto;
    padding: 0;
    @media (max-width: 940px){
        max-width: 100%;
        overflow-y: scroll;
        scrollbar-width: thin;
    }
    `
export const CulHeader = styled.ul`
display: flex;
list-style-type: none;
max-width: 80%;
padding: 0.5rem;
margin-left: auto;
margin-right: auto;
li{
    padding-right: 1rem;
    margin-bottom: 0.5rem;
}
a{
    text-decoration: none;
    color: gray;
    &:hover{
        color: ${cores.quartenary};
        cursor: pointer;
    }
}
@media (max-width: 600px){
    display: block;
    max-width: 100%;
}
`
export const Ch2 = styled.h2`
    font-size: 2.25rem;
    margin-bottom: 12px;
    @media (max-width: 940px){
        text-align: center;
        font-size: 1.25rem;
        margin-bottom: 24px;
    }
    `
export const Cli = styled.li`
    
    `
export const Clihome = styled.li`
    border-radius: 2rem;
    text-align: center;
    display: inline-block;
    padding: 1rem;
    margin: 2rem;
    width: 20%;
    height: 200px;
    align-items: center;
    background-color: ${cores.secondary};
    box-shadow: 1px 3px 3px 1px #0000007f;
    &:hover{
        background-color: ${cores.terciary};
        box-shadow: 1px 3px 3px 1px #0000007f inset;
    }
    @media (max-width: 700px){
        width: 50%;
    }
    p{
        font-size: 0.8rem;
        color: gray;
        &:hover{
            color: ${cores.quartenary};
        }
    }
    a{
        text-decoration: none;
    }
    

    `

export const Ch3 = styled.h3`
    color: ${cores.primary};
    margin-bottom: 8px;
    word-break: break-all;
    `
export const Cspan = styled.span`
    color: #d0d0d0;
    `
export const Caside = styled.aside`
    width: 100%;
    margin: 0 auto 0 auto;
    `
export const Cimg = styled.img`
    float: left;
    width: 30%;
    text-align: center;
    border-radius: 10rem;
    margin: 5%;
    `
export const Cdiv = styled.div`
    text-align: center;
    `