import "./Color.css";
import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";

export default function Color({ color }) {
  const [isConfirming, setIsConfirming] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [currentData, setCurrentData] = useState(color);

  if (isDeleted) {
    return null;
  }

  function handleEditSubmit(updatedData) {
    setCurrentData({ ...currentData, ...updatedData });
    setIsEditing(false);
    setIsConfirming(false);
  }

  function handleCancelDelete() {
    setIsConfirming(false);
  }
  function handleConfirmDelete() {
    setIsDeleted(true);
  }
  function handleShowConfirm() {
    setIsConfirming(true);
  }
  function handleStartEdit() {
    setIsEditing(true);
  }
  function handleCancelEdit() {
    setIsEditing(false);
  }

  const buttonAction = () => {
    if (isConfirming) {
      return (
        <div className="color-card-actions">
          <span className="color-card-highlight">Really delete?</span>

          <button onClick={handleCancelDelete}>Cancel</button>
          <button onClick={handleConfirmDelete}>Delete</button>
        </div>
      );
    } else {

      return (
      <>
      <button onClick={handleShowConfirm}>Delete</button>
      <button onClick={handleStartEdit}>Edit</button>
      </>
      );
    }
  };
if (isEditing) {
  return (
    <div className="color-card" style={{ backgroundColor: currentData.hex, color: currentData.contrastText }}>
      
      <ColorForm initialData={currentData} onSubmitColor={handleEditSubmit} buttonText="UPDATE COLOR"/>
      <button onClick={handleCancelEdit} className="cancel-edit-button">Cancel</button>
    </div>
  );
} else {
  return (
    <div
      className="color-card"
      style={{ backgroundColor: currentData.hex, color: currentData.contrastText }}
    >
      <h3 className="color-card-headline">{currentData.hex}</h3>
      <h4>{currentData.role}</h4>
      <p>contrast: {currentData.contrastText}</p>

      {buttonAction()}
    </div>
  );
}
}