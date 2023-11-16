import "./App.css";
import trianguloRetangulo from "./components/triangulo-retangulo.png";
import { useState } from "react";

function App() {
  var [A, setA] = useState('')
  var [B, setB] = useState('')

  const LadoC = (LA, LB) => {
    var tempC = (LA * LA) + (LB * LB)
    var C = Math.sqrt(tempC)
    return(C.toFixed(2))
  }
  return (
    <div className="App">
      <main>
        <h1>Teorema de Pitágoras</h1>
        <img src={trianguloRetangulo} alt="Triângulo Retângulo" width='400px'/>

        <div className='labels'>
          <label>Lado A</label>
          <input placeholder="Digite o valor do lado A" onChange={(event) => setA(event.target.value)}/>
        </div>

        <div className='labels'>
          <label>Lado B</label>
          <input placeholder="Digite o valor do lado B" onChange={(event) => setB(event.target.value)}/>
        </div>

        {(A.length !== 0 && B.length !== 0) && <p id="Resultado">Considerando <strong>{A}</strong> um lado e <strong>{B}</strong> outro, teremos <strong>{LadoC(A, B)}</strong> no lado oposto</p>}
      </main>
    </div>
  );
}

export default App;