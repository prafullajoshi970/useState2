
import Screen from "./components/Screen";
import Input from "./components/Input"
import {useState} from "react"

function App() {
  
  const [mark,setmark]=useState("");
  return (
    <div style={{display:"flex"}}>
       <Input setDatafn={setmark}></Input>
      <Screen markupData={mark}></Screen>
     
    </div>
  );
}

export default App;
