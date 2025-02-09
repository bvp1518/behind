import { useState } from "react";

import Counter from "./components/Counter/Counter";
import Header from "./components/Header";
import { log } from "./log.js"; 
import ConfigureCounter from "./components/Counter/ConfigureCounter.js";


function App() {
  log("<App /> rendered");
 
  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount){
    setChosenCount(newCount);
    setChosenCount((prevChosenCount) => prevChosenCount + 1);
    // console.log(chosenCount);
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter initialCount={0} />
      </main>
    </>
  );
}

export default App;
