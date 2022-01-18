// import './ReactRandomColorProject';
// import { useState } from 'react';

// // import logo from './logo.svg';

// const RandomColor = () => {
//   const [color, setColor] = useState('#000');

//   const getRgb = () => Math.floor(Math.random() * 256);

//   const rgbToHex = (r, g, b) =>
//     '#' +
//     [r, g, b]
//       .map((x) => {
//         const hex = x.toString(16);
//         return hex.length === 1 ? '0' + hex : hex;
//       })
//       .join('');

//   const handleGenerate = () => {
//     const colors = {
//       r: getRgb(),
//       g: getRgb(),
//       b: getRgb(),
//     };

//     setColor(rgbToHex(colors.r, colors.g, colors.b));
//   };

//   return (
//     <div style={{ backgroundColor: color }} className="container">
//       {' '}
//       <button style={{ color: color }} onClick={handleGenerate}>
//         Generate
//       </button>
//       <div style={{ backgroundColor: color }}>Generated Color: {color}</div>
//     </div>
//   );
// };

// export default RandomColor;

// // to try to have the logo on the page
// //  <div> {logo} </div>

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import Input from './Input.js';
import Button from './RandomColorButton.js';

// CSS-in-JS
const frame = css`
  position: absolute;
  top: 20%;
  left: 50%;
  width: 500px;
  height: 600px;
  margin-top: -100px;
  margin-left: -250px;
`;

const center = css`
  text-align: center;
`;

// App Component
function App() {
  const [randomColor, setRandomColor] = useState('');
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  // onChange Handlers
  function onChangeHue(event) {
    setHue(event.currentTarget.value);
  }

  function onChangeLuminosity(event) {
    setLuminosity(event.currentTarget.value);
  }

  function onChangeWidth(event) {
    setWidth(event.currentTarget.value);
  }

  function onChangeHeight(event) {
    setHeight(event.currentTarget.value);
  }

  const str = <h2 css={center}>{randomColor}</h2>;

  const colorBox = css`
    background-color: ${randomColor};
    width: ${width > 0 && width < 1000 ? width : 400}px;
    height: ${height > 0 && height < 1000 ? height : 300}px;
  `;

  return (
    <div css={frame}>
      <h1>Random Color Generator</h1>

      <h3>Would you like the color to be a certain hue and luminosity?</h3>
      <div>
        <Input
          htmlFor="hue"
          text="hue"
          type="text"
          id="hue"
          placeholder="green"
          value={hue}
          onChange={onChangeHue}
        />
      </div>

      <div>
        <Input
          htmlFor="luminosity"
          text="luminosity"
          type="text"
          id="luminosity"
          placeholder="light"
          value={luminosity}
          onChange={onChangeLuminosity}
        />
      </div>
      <br />

      <h3>You can also resize the box!</h3>
      <div>
        <Input
          htmlFor="width"
          text="width (in px)"
          type="number"
          id="width"
          placeholder="500px"
          value={width}
          onChange={onChangeWidth}
        />
      </div>
      <div>
        <Input
          htmlFor="height"
          text="height (in px)"
          type="number"
          id="height"
          placeholder="500px"
          value={height}
          onChange={onChangeHeight}
        />
      </div>
      <br />
      <br />

      <Button
        setRandomColor={setRandomColor}
        luminosity={luminosity}
        hue={hue}
      />

      <br />
      <br />
      <br />
      <div css={colorBox}>{str}</div>
    </div>
  );
}

export default App;
