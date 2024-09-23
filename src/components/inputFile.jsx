import React from "react";
import { TbFile3D } from "react-icons/tb";

function inputFile({ onFileUpload }) {
  
  const handleFileChange = (e) => {
    onFileUpload(e.target.files[0]);
  };

  return (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-600 opacity-20">
        <div className="h-full bg-gray-600 flex justify-center items-center">
          <input
            type="file"
            className="h-full w-full opacity-0"
            name=""
            onChange={handleFileChange}
          />
        </div>
      </div>

      <div className="flex flex-col items-center scale-125">
        <TbFile3D className="text-[10rem] text-gray-400 stroke-1" />
        <span className="block text-[2rem] text-gray-400 font-bold">
          Attach your 3D files here
        </span>
        <p className="mt-1 text-ls text-gray-400">
          STL, OBJ, GLTF, GLB up to 10MB
        </p>
      </div>
    </>
  );
}

export default inputFile;