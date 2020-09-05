import React from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";


function App() {

  const { ref, } = useWebAnimations({
    keyframes: {
      transform: "translateX(0%)",
      // eslint-disable-next-line
      transform: "translateX(-200%)",
    },
    timing: {
      duration: 7000,
      iterations: Infinity,
      playbackRate: -2
    },
  })

  const horse = require("../src/images/horse.gif")
  const cactus = require("../src/images/cactus.png")

  return (
    <div>
      <div ref={ref} class="myhorse" id="myhorse">
        <img src={horse} alt="running horse" id="horse" />
      </div>
      <div class="mycactus1">
        <img src={cactus} alt="cactus1" id="cactus1" />
      </div>
      <div class="mycactus2">
        <img src={cactus} alt="cactus2" id="cactus2" />
      </div>
    </div >
  );
}

export default App;
