import { useState } from "react";
import { nanoid } from "nanoid";

import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";

import ColorForm from "./Components/ColorForm/ColorForm";

import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(data) {
    const newColor = { id: nanoid(), ...data };

    setColors([newColor, ...colors]);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </>
  );
}

export default App;
