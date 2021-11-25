import './styles.scss'

import { useState } from 'react';

function App() {
  const [ cliques, setCliques ] = useState(0);

  function increment(){
    setCliques(cliques+1);
  }
  
  return (
    <div id="Page-Game">
      
      <header className="Header-Game">
        <h1>Clique na parte vermelha do Botão</h1>
        <h2>{cliques}</h2>
      </header>

      <main>
        <div id="Game-Button">
          <button className="Bigger-Button"></button>
          <button className="Click-Button" onClick={increment}></button>
        </div>
      </main>

    </div>
  )
}

export default App;
