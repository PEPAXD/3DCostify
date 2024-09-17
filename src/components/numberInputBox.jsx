import React from 'react'

function numberInputBox({ boxTitle, boxHolder }) {
  return (
    <div className="col-span-2 sm:col-span-1 mb-4">
      <label htmlFor="weight" className="block mb-2">
        <h3>{boxTitle}</h3>
      </label>
      <input
        type="number"
        placeholder={boxHolder}
        className="numBoxInputs w-full py-2 px-2 border border-gray-400 focus:outline-none focus:border-gray-100 bg-transparent text-right"
      />
    </div>
  )
}

export default numberInputBox