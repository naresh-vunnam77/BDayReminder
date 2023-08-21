import React from "react"

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <article
            className="flex items-center justify-center flex-row my-5 mx-2"
            key={person.id}
          >
            <div className="w-[50px] h-[50px] rounded-full ring-1  bg-white shadow-sm shadow-blue-400">
              <img
                className="w-full h-full rounded-full object-cover"
                src={person.image}
                alt={person.name}
              />
            </div>
            <div className="flex flex-col drop-shadow-2xl w-3/4 mx-4 my-2">
              <h2 className="text-blue-500 text-start text-xl font-semibold">
                {person.name}
              </h2>
              <p className="text-blue-200 text-start text-md">
                {person.age} years
              </p>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List
