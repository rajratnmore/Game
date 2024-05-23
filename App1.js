import React, { useEffect } from "react";
import { useState } from "react";

const trafficLight = [
  { color: "red", next: "green", wait: 4000 },
  { color: "yellow", next: "red", wait: 1000 },
  { color: "green", next: "yellow", wait: 3000 },
];
const App = () => {
  const [activeLight, setActiveLight] = useState("green");
  const light = trafficLight.find((light) => light.color === activeLight);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveLight(light.next);
    }, [light.wait]);

    return () => clearTimeout(timer);
  }, [light, activeLight]);

  return (
    <>
      <div className="w-28 bg-slate-300 p-2 flex flex-col items-center mx-auto top-10 relative">
        {trafficLight.map((light, index) => (
          <div
            key={index}
            className="w-20 h-20 bg-slate-400 m-2 rounded-full"
            style={{ background: activeLight === light.color ? activeLight : "black" }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default App;
