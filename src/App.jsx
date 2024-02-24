import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive");

  const colorChange = () => {
    setColor(color)
  }

  return (
    <>
      <div className="flex h-screen w-full" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap bottom-12 justify-center items-center inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor("red")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={() => setColor("blue")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "blue" }}>Blue</button>
            <button onClick={() => setColor("green")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "green" }}>Green</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
