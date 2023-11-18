import React, { useState } from "react";
import Hijo from "../Hijo/index";

// Definición del componente Padre como una función
const Padre = () => {
  // Estado local para almacenar los nombres de los hijos
  const [children, setChildren] = useState([
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
  ]);

  // Función para manejar el evento de soltar un elemento
  const handleDrop = (e, index) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del navegador al soltar un elemento
    const childName = e.dataTransfer.getData("childName"); // Obtiene el nombre del hijo arrastrado
    const newChildren = [...children]; // Crea una copia del array de nombres
    const childIndex = newChildren.indexOf(childName); // Obtiene el índice del hijo arrastrado
    newChildren.splice(childIndex, 1); // Elimina el hijo arrastrado del array
    newChildren.splice(index, 0, childName); // Inserta el hijo en la nueva posición
    setChildren(newChildren); // Actualiza el estado con la nueva lista de hijos
  };

  // Función para permitir que un elemento sea soltado en este contenedor
  const allowDrop = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del navegador al arrastrar elementos
  };

  // Renderizado del componente Padre
  return (
    <div className="padre">
      {/* Mapeo de los nombres de los hijos para renderizar componentes Hijo */}
      {children.map((nombre, index) => (
        <Hijo
          key={index} // Propiedad key para identificar de manera única cada hijo en la lista
          nombre={nombre} // Propiedad nombre pasada al componente Hijo
          onDrop={(e) => handleDrop(e, index)} // Propiedad que maneja el evento de soltar un hijo
          onDragOver={allowDrop} // Propiedad que maneja el evento de arrastrar sobre un hijo
        />
      ))}
    </div>
  );
};

export default Padre;
