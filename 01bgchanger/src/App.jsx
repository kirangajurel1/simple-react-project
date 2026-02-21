import {useState} from "react"

function App() {
  const [color, setColor] = useState("blue");
  const [inputValue, setInputValue] = useState("");

  return (
    <>
       <div className="w-full h-screen duration-200"
       style = {{backgroundColor: color}}
       >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl border border-2" >
            <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}
            >Red</button>

            <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "green"}}
            >Green</button>

            <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "yellow"}}
            >Yellow</button>

            <div className="border border-black m-2 p-2 rounded-full">

            <input
            type="text"
            placeholder="Give background color"
            onChange={(e)=>setInputValue(e.target.value)}
            className=" bg-transparent border-0 outline-none text-md "
            />
            <button onClick={()=>setColor(inputValue)} className="bg-gray-400 rounded-xl p-1 hover:bg-gray-500">Apply</button>
            </div>
            
          </div>
        </div>
       </div>

    </>
  )
}

export default App
