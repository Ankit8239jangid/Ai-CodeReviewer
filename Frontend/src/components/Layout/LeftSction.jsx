import React from "react";
import { useCallback } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";


function LeftSection({ code, setCode, handleSubmit }) {
  // Memoize the highlight function to optimize rendering
  const highlightCode = useCallback(
    (code) => Prism.highlight(code, Prism.languages.javascript || Prism.languages.extend("javascript", {}), "javascript"),
    []
  );

  return (
    <div className="relative h-full w-full md:w-1/2 border border-gray-700 rounded-xl p-2 bg-gray-900 shadow-lg">
      <div className="h-full overflow-auto rounded-xl">
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={highlightCode}
          padding={10}
          style={{
            fontFamily: '"Fira Code", "Fira Mono", monospace',
            fontSize: 16,
            borderRadius: "5px",
            height: "100%",
            width: "100%",
            backgroundColor: "#1e1e1e",
            color: "#ffffff",
            overflow: "auto",
          }}
          className="min-h-full"
        />
      </div>

      <button
        onClick={() => handleSubmit()} // Ensuring handleSubmit is called properly
        className="absolute right-4 bottom-4 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition-all shadow-md active:transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!code.trim()}
      >
        Submit
      </button>
    </div>
  );
}

export default LeftSection;
