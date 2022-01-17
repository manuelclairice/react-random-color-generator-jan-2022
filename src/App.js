//original code, not deleting in case i need it later

// import logo from './logo.svg';

// import './App.css';

// function App() {
// return (
// <div className="App">
// <header className="App-header">
//  <img src={logo} className="App-logo" alt="logo" />
// <p>
// Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
// className="App-link"
// href="https://reactjs.org"
// target="_blank"
// rel="noopener noreferrer"
// >
// Learn React
// </a>
// </header>
// </div>
// );
// }

// export default App;

// MY OWN CODE for the project

import './randomColorProject.css';
import { useState } from 'react';

const RandomColor = () => {
  const [color, setColor] = useState('#000');

  const getRgb = () => Math.floor(Math.random() * 256);

  const rgbToHex = (r, g, b) =>
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('');

  const handleGenerate = () => {
    const color = {
      r: getRgb(),
      g: getRgb(),
      b: getRgb(),
    };

    setColor(rgbToHex(color.r, color.g, color.b));
  };

  return (
    <div className="container">
      {' '}
      <button style={{ color: color }} onClick={handleGenerate}>
        {'Generate'}
      </button>
      <div style={{ backgroundColor: color }}>
        {`Generated Color: ${color}`}
      </div>
    </div>
  );
};

export default RandomColor;
