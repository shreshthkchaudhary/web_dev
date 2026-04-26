import { useState } from "react"

function Color() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="flex justify-center">
        <div className="fixed top-2 flex gap-5 justify-center border rounded bg-white px-3 py-1 shadow-md">
          <button onClick={() => setColor("white")} className="border rounded-xl m-2 px-4 py-2 hover:bg-gray-100 cursor-pointer bg-white text-black shadow-sm">White</button>
          <button onClick={() => setColor("yellow")} className="border rounded-xl m-2 px-4 py-2 hover:bg-yellow-500 cursor-pointer bg-yellow-400 text-black shadow-sm">Yellow</button>
          <button onClick={() => setColor("red")} className="border rounded-xl m-2 px-4 py-2 hover:bg-red-600 cursor-pointer bg-red-500 text-white shadow-sm">Red</button>
          <button onClick={() => setColor("blue")} className="border rounded-xl m-2 px-4 py-2 hover:bg-blue-600 cursor-pointer bg-blue-500 text-white shadow-sm">Blue</button>
          <button onClick={() => setColor("black")} className="border rounded-xl m-2 px-4 py-2 hover:bg-gray-800 cursor-pointer bg-black text-white shadow-sm">Black</button>
        </div>
      </div>
    </div>
  )
}

export default Color