import React, { useState } from "react"
import List from "./components/List"
import data from "./data"
function App() {
  const [people, setPeople] = useState(data)
  return (
    <section className="flex items-center justify-center min-h-screen min-w-full bg-blue-100">
      <div className="w-[400px] h-full mx-10 my-5 bg-gray-900 shadow-xl shadow-black rounded-sm p-6">
        <h3 className="text-3xl font-medium text-center text-white ">
          <span className="text-blue-400 px-3">{people.length}</span>Birthdays
          Today 🎉
        </h3>
        <List people={people} />
        <button
          className="bg-blue-600 justify-center items-center w-full px-10 py-2 text-white font-semibold text-center shadow-sm rounded shadow-white hover:scale-105 my-2"
          onClick={() => setPeople([])}
        >
          Clear All
        </button>
      </div>
    </section>
  )
}

export default App
