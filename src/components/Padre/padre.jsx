import React, { useState } from "react";
import Hijo from "../Hijo/index";

const Padre = () => {
  const [children, setChildren] = useState([
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
  ]);

  const handleDrop = (e, index) => {
    e.preventDefault();
    const childName = e.dataTransfer.getData("childName");
    const newChildren = [...children];
    const childIndex = newChildren.indexOf(childName);
    newChildren.splice(childIndex, 1);
    newChildren.splice(index, 0, childName);
    setChildren(newChildren);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div className="padre">
      {children.map((nombre, index) => (
        <Hijo
          key={index}
          nombre={nombre}
          onDrop={(e) => handleDrop(e, index)}
          onDragOver={allowDrop}
        />
      ))}
    </div>
  );
};

export default Padre;
