import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Editer from "react-simple-code-editor"

function LeftSection() {
  const [code, setCode] = useState(" function()");

  return (
    <div className="relative h-full w-full md:w-1/2 border border-gray-700 rounded-xl p-4 bg-gray-900 shadow-lg">
      {/* Code Preview with Syntax Highlighting */}
      <div className="absolute inset-0 h-full p-2 pointer-events-none overflow-auto">
        <SyntaxHighlighter language="javascript" style={oneDark} className="rounded-lg">
          {code }
        </SyntaxHighlighter>
      </div>

     

    {/* Submit Button */}
      <button className="absolute right-4 bottom-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all">
        Submit
      </button>
    </div>
  );
}

export default LeftSection;
