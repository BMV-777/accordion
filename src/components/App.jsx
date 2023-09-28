import Accordion from "./Accordion/Accordion";

import books from "../server.js";

function App() {
  return (
    <div className="App">
      <Accordion data={books} />
    </div>
  );
}

export default App;
// codesandbox.io/s/react-exercise-accardion-starter-forked-q3vucw?file=/src/App.js
