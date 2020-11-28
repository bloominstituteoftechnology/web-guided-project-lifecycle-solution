import React, { useState, useEffect } from "react";

const AppFunc = () => {
  const [name, setName] = useState("Warren");
  const handleClick = () => {
    setName("Allison");
  };
  console.log("AppClass: Component Constructed");

  useEffect(()=> {
    console.log("AppFunc: Component Mounted");
  }, []);

  useEffect(()=> {
    console.log("AppFunc: Component Updated");
  });

  console.log("AppClass: Component Rendered");
  return (
    <div>
      <h1>Hello {name}!</h1>
  
      <button onClick={handleClick}>MAKE IT ALLISON!</button>
    </div>
  );
};

export default AppFunc;
