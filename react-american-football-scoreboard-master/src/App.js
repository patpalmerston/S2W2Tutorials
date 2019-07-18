//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import Scoreboard from './Scoreboard';
import Buttons from './Buttons';


function App() {

  const [hCount, setHomeScore] = useState(0);
  const [aCount, setAwayScore] = useState(0);

  return (
    <div className='container'>
      <Scoreboard 
        hCount={hCount} 
        aCount={aCount} 
      />

      <Buttons
        hCount={hCount} 
        aCount={aCount} 
        setHomeScore={setHomeScore}
        setAwayScore={setAwayScore}
      />
    </div>
  );
}

export default App;

// henry's timer

// function App() {
//   const [timer, setTimer] = useState(845);
//   const seconds = (timer % 60).toString().padStart(2, '0');
//   const minutes = Math.floor(timer / 60).toString().padStart(2, '0');
//   useEffect(() => {
//     setInterval(() => {
//       setTimer(timer => timer - 1);
//     }, 1000);
//   }, []);
//   if (timer <= 0) {
//     setTimer(900);
//   }
//   return (
//     <div>
//       <div>{minutes}:{seconds}</div>
//     </div>
//   );
// }
