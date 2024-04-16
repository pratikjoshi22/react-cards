import React from "react";
import Mobile from "./Mobile";
import mob from "./mob.json";
import Navbar from './Navbar';
import Footer from "./footer";

function App() {
  return (
    <div className="container">
      <Navbar/>
      <div className="mobile-container">
        {mob.map((ele) => {
          return <Mobile image={ele.image} name={ele.name} price={ele.price} />;
        })}
      </div>
      <Footer/>
    </div>
  );
}

// conditional rendering

// Rendering data from arrays

export default App;
