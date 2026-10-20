import "./Color.css";
import { useState } from "react";

export default function Color({ color }) {
  const [isConfirming, setIsConfirming] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  if (isDeleted) {
    return null;
  }

  const buttonAction = () => {
    if (isConfirming) {
      return (
        <div className="color-card-actions">
          <span className="color-card-highlight">Really delete?</span>

          <button onClick={() => setIsConfirming(false)}>Cancel</button>
          <button onClick={() => setIsDeleted(true)}>Delete</button>
        </div>
      );
    } else {
      return <button onClick={() => setIsConfirming(true)}>Delete</button>;
    }
  };

  return (
    <div
      className="color-card"
      style={{ backgroundColor: color.hex, color: color.contrastText }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

      {buttonAction()}
    </div>
  );
}
