import useLocalStorageState from 'use-local-storage-state'
import { nanoid } from "nanoid";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";

function App() {
  const [colors, setColors] = useLocalStorageState("colors",{
    defaultValue: initialColors
  });

  function handleAddColor(data) {
    const newColor = { id: nanoid(), ...data };
    setColors([newColor, ...colors]);
  }

  function handleDeleteColor(id) {
    setColors(colors.filter((color) => color.id !== id));
  }

  function handleEditColor(updatedColor) {
    setColors(colors.map((color) => color.id === updatedColor.id ? updatedColor : color));
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      
      {colors.map((color) => (
        <Color key={color.id} color={color} onDeleteColor={handleDeleteColor} onEditColor={handleEditColor}/>
      ))}
    </>
  );
}

export default App;
