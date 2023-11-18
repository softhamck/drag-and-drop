import React from "react";

const Hijo = ({ nombre, onDrop, onDragOver }) => {
  const handleClick = () => {
    console.log(`Hola Mundo desde ${nombre}`);
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("childName", nombre);
  };

  return (
    <div
      className="hijo"
      draggable
      onDragStart={handleDragStart}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <button onClick={handleClick}>Mostrar Hola Mundo en {nombre}</button>
    </div>
  );
};

export default Hijo;
