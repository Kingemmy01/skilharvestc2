import React, { useState } from 'react';

function ColorColding() {
  const [color, setColor] = useState("black");

  return (
    <div className="color" style={{ backgroundColor: color, color: 'white' }}>
       <h1>Change the color when the user clicks</h1>

        <div className="showColor">Current Color: { color }
        </div>

    <button onClick={ () => setColor("green") }>
        Click me to change color to green
    </button>

    <button onClick={ () => setColor("red") }>
        Click me to change color to red
    </button>

    <button onClick={ () => setColor("yellow") }>
        Click me to change color to yellow
    </button>
    </div>
  );
  }

  export default ColorColding;