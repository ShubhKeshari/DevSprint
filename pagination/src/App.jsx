import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Pagination button add</div>
      <button>Prev</button>
      <button></button>
      <button>Next</button>
    </>
  );
}

export default App;
