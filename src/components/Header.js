import React from "react";

function Header() {
  let title = "";
  const client = "Designer";

  /*  if (client === "Designer") {
    title = "Design is my life";
  } else {
    title = "Programing is my life";
  } */

  return (
    <div className="navbar bg-primary rounded">
      <h1 className="bg-dark text-white">
        {client === "Designer" ? "Design " : "Programing "}is my life
      </h1>
    </div>
  );
}

export default Header; /* Internal style */ /*  Inline Style */
/* function Header() {
  const style = {
    color: "red",
    fontSize: "100px",
    backgroundColor: "blue",
  };

  return <h1 style={style}>Design is my life</h1>;     
} */

/* function Header() {
  return <h1 style={
    { 
        color: "red",
        fontSize: "100px",
        backgroundColor: "blue"
  
  }
  }>Design is my life</h1>;     
}  */

/* document.querySelector("root").style.color = "red"; */
