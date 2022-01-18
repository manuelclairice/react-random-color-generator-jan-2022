/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import color from 'randomcolor';

// CSS-in-JS
const button = css`
  background-color: #b0b0b0;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
`;

export default function Button(props) {
  return (
    <button
      css={button}
      onClick={() =>
        props.setRandomColor(
          color.randomColor({ luminosity: props.luminosity, hue: props.hue }),
        )
      }
    >
      Generate random color
    </button>
  );
}
