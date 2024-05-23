import { useState } from "react";
import Text from "./components/Text";


function App() {
  const [toggle,setToggle] = useState(false)
  return (
    <>
      <div>
        <button onClick={() => {
          setToggle(!toggle);
        }}>Comments</button>
      </div>
      {toggle && <Text/>}
    </>
  );
}

export default App;
