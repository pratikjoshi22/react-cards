import React from "react";
import Mobile from "./Mobile";
import mob from "./mob.json";

function App() {
  return (
    <div className="mobile-container">
      {mob.map((ele) => {
        return <Mobile image={ele.image} name={ele.name} price={ele.price} />;
      })}
    </div>
  );
}

// conditional rendering

// Rendering data from arrays

export default App;
