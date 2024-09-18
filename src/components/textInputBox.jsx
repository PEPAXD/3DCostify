import React from "react";

//import components
import RemoveButton from "./removeButton";

function textInputBox({ id, removeBox }) {
  return (
    <div className="relative w-full mb-2">
      <input
        type="text"
        name="postCost"
        id={`postCost-${id}`}
        placeholder="E.g: [Additional services $10000]"
        className="w-full py-2 pl-8 pr-10 border border-gray-400 focus:outline-none focus:border-gray-100 bg-transparent"
      />
      <div className="absolute inset-y-0 right-0 flex items-center p-2">
        <RemoveButton onClick={() => removeBox(id)} />
      </div>
    </div>
  );
}

export default textInputBox;
