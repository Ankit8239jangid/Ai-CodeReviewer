import React, { useCallback } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";

function LeftSection({ code, setCode, handleSubmit }) {
  // Memoized syntax highlighting function
  const highlightCode = useCallback(
    (code) => Prism.highlight(code, Prism.languages.javascript, "javascript"),
    []
  );

  return (
    <div className="relative h-[90vh] w-full md:w-1/2 border border-gray-700 rounded-xl p-4 shadow-lg bg-gray-900">
      <div className="h-full overflow-hidden rounded-xl">
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={highlightCode}
          padding={12}
          style={{
            fontFamily: '"Fira Code", "Fira Mono", monospace',
            fontSize: 16,
            backgroundColor: "#1e1e1e",
            color: "#ffffff",
            borderRadius: "5px",
            height: "100%",
            width: "100%",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            overflow: "auto", // Enables scrolling when content is too long
          }}
          className="h-full rounded-lg"
          autoFocus
        />
      </div>

      <button
        onClick={handleSubmit}
        className="absolute right-4 bottom-4 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!code.trim()}
      >
        Submit
      </button>
    </div>
  );
}

export default LeftSection;
