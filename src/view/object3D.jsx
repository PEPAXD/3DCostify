import React from "react";

//import components
import InputFile from "../components/inputFile";

function object3D() {
  return (
    <div className="flex h-full w-full">
      <div className="relative w-full border-dashed border-r-2 border-white-900 flex justify-center items-center">
        <InputFile />
      </div>
    </div>
  );
}

export default object3D;
