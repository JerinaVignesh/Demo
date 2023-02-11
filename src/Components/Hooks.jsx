import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../Components/Hooks.css";
function Hooks() {
  //const [color, setColor] = useState("red");
  const [Count, setCount] = useState(0);
  //count[userDet, setDet]=useState([{id:"1",name:"jerina"},{id:"",name:"jeri"}]);
  let sty = {
    color: "green",
    fontSize: "40px",
    marginTop: "30px",
    fontWeight: "bold",
  };

  useEffect(() => {
    // const interval = setTimeout(() => {
    setTimeout(() => {
      setCount(() => Count + 1);
    }, 2000);

    // return () => {
    //   clearInterval(interval);
    //   console.log("interval is cleard");
    // };
  });

  return (
    <>
      <div style={sty}>
        count is {Count}
        <h2>{Hooks.toLocaleCountString}</h2>
      </div>

      {/* <button
        className="btn btn-primary mt-4"
        onClick={() => setCount(() => Count + 1)}
      >
        increment
      </button> */}
    </>
  );
}
export default Hooks;
