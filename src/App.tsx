import { useState } from 'react';
import {GlobalStyle, Cfooter } from './styled-components.styled/styles'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header';
import Conteudo from './components/conteudo';
import Home from './components/home';
import Sobre from './components/sobre/sobre';
import Contato from './components/contato';

function App() {
interface ITarefas {
  tarefa: string; tempo: string; selecionado: boolean, completado: boolean, id: number
}
  const [tarefas, setTarefas]= useState<ITarefas[]|[]>([]) 

  function addTarefa(valores:{tarefa: string; tempo: string; selecionado: boolean, completado: boolean, id: number}){
    setTarefas([...tarefas, valores])
    console.log(tarefas)
  }
  
  return (
    <div>
      <Router>
      <GlobalStyle/>
          <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path="/conteudo" element={<Conteudo addTarefa={addTarefa} Tarefas={tarefas}/>}/>
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Cfooter>
            <h2> Feito Por Kai Wang</h2>
          </Cfooter>
      </Router>
    </div>
  );
}

export default App;
