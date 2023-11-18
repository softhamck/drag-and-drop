import React from "react";

// Definición del componente Hijo como una función que recibe propiedades
const Hijo = ({ nombre, onDrop, onDragOver }) => {
  // Función para manejar el clic en el botón
  const handleClick = () => {
    console.log(`Hola Mundo desde ${nombre}`); // Imprime un mensaje en la consola con el nombre del hijo
  };

  // Función para manejar el inicio del arrastre de un hijo
  const handleDragStart = (e) => {
    e.dataTransfer.setData("childName", nombre); // Guarda el nombre del hijo en los datos de transferencia
  };

  // Renderizado del componente Hijo
  return (
    <div
      className="hijo" // Clase CSS del elemento div
      draggable // Permite que el elemento sea arrastrable
      onDragStart={handleDragStart} // Maneja el evento de inicio de arrastre
      onDrop={onDrop} // Maneja el evento de soltar un hijo
      onDragOver={onDragOver} // Maneja el evento de arrastrar sobre un hijo
    >
      <button onClick={handleClick}>Mostrar Hola Mundo en {nombre}</button>{" "}
      {/* Botón que muestra el nombre del hijo */}
    </div>
  );
};

export default Hijo;
