import React from "react";

//import components
import RemoveButton from "./removeButton";

function textInputBox() {
  return (
    <div className="relative w-full mb-2">
      <input
        type="text"
        name="postCost"
        placeholder="E.g: [Additional services $10000]"
        className="w-full py-2 pl-8 pr-10 border border-gray-400 focus:outline-none focus:border-gray-100 bg-transparent"
      />
    </div>
  );
}

export default textInputBox;
