import React, { useState } from 'react';
import './App.css';

function App() {
  const [original, setOriginal] = useState('');
  const [desired, setDesired] = useState('');
  const [pieces, setPieces] = useState(0);
  const [pieceContents, setPieceContents] = useState([]);

  function countPiecesArray(original, desired) {
    let pieces = 0;
    let currentOriginalIndex = -1; // Manter o índice da última posição, inicializado a -1
    let pieceContents = [];
    let currentPiece = [];

    for (let i = 0; i < desired.length; i++) {
      // Encontra a posição do elemento de 'desired' em 'original' a partir do índice atual
      let nextOriginalIndex = original.indexOf(desired[i], currentOriginalIndex + 1);

      // Se a sequência não está em ordem ou o elemento não é encontrado
      if (nextOriginalIndex === -1 || (currentOriginalIndex !== -1 && nextOriginalIndex !== currentOriginalIndex + 1)) {
        // Se houver uma peça construída, adiciona-a à lista
        if (currentPiece.length > 0) {
          pieceContents.push(currentPiece.join(",")); // Junta os números da peça em uma string
          pieces++;  // Incrementa o número de peças
          currentPiece = []; // Limpa a peça para começar uma nova
        }

        // Reinicia a busca no array 'original' e começa uma nova peça
        currentOriginalIndex = original.indexOf(desired[i]);
        currentPiece.push(desired[i]);
      } else {
        // Se o número é encontrado em sequência, adiciona-o à peça atual
        currentOriginalIndex = nextOriginalIndex;
        currentPiece.push(desired[i]);
      }
    }

    // Adiciona a última peça, se houver
    if (currentPiece.length > 0) {
      pieceContents.push(currentPiece.join(",")); // Junta os números da última peça
      pieces++;  // Incrementa o número de peças
    }

    return { pieces, pieceContents };
  }

  const handleSubmit = () => {
    const originalArray = original.split(',').map(num => parseInt(num.trim(), 10));
    const desiredArray = desired.split(',').map(num => parseInt(num.trim(), 10));
    const result = countPiecesArray(originalArray, desiredArray);
    setPieces(result.pieces);
    setPieceContents(result.pieceContents);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contador de Peças</h1>

        <div className="input-container">
          <label>
            <span>Array Original:</span>
            <input
              type="text"
              value={original}
              onChange={(e) => setOriginal(e.target.value)}
              placeholder="Digite os números do array original (ex: 1,2,3)"
            />
          </label>
        </div>

        <div className="input-container">
          <label>
            <span>Array Desejado:</span>
            <input
              type="text"
              value={desired}
              onChange={(e) => setDesired(e.target.value)}
              placeholder="Digite os números do array desejado (ex: 2,3,1)"
            />
          </label>
        </div>

        <button onClick={handleSubmit} className="submit-button">Contar Peças</button>

        {pieces > 0 && (
          <div className="result">
            <h2>Resultado:</h2>
            <p><strong>Peças:</strong> {pieces}</p>
            <ul>
              {pieceContents.map((piece, index) => (
                <li key={index} className="piece-item">{piece}</li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
