import React, { useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";

function LeftSection({ code, setCode, handleSubmit }) {
  
  useEffect(() => {
    Prism.highlightAll();
  }, [code]); // Only run when `code` updates

  return (
    <div className="relative h-full w-full md:w-1/2 border border-gray-700 rounded-xl p-2 bg-gray-900 shadow-lg">
      {/* Code Editor */}
      <div className="h-full overflow-auto rounded-xl">
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={(code) => Prism.highlight(code, Prism.languages.javascript, "javascript")}
          padding={10}
          style={{
            fontFamily: '"Fira Code", "Fira Mono", monospace',
            fontSize: 16,
            borderRadius: "5px",
            height: "100%",
            width: "100%",
            backgroundColor: "#1e1e1e",
            color: "#ffffff",
          }}
        />
      </div>

      {/* Submit Button */}
      <button 
        onClick={handleSubmit} 
        className="absolute right-4 bottom-4 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition-all shadow-md"
      >
        Submit
      </button>
    </div>
  );
}

export default LeftSection;
