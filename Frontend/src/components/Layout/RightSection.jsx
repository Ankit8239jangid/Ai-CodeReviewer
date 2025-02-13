import React, { useEffect } from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import Prism from "prismjs";

function RightSection({ review, loading, setLoading }) {

    useEffect(() => {
        Prism.highlightAll();
    }, [review]); // Only run when `review` updates

    return (
        <div className="h-full md:w-1/2 w-full bg-gray-900 text-white p-4 border border-gray-700 rounded-2xl overflow-auto shadow-xl transition-all duration-300">
            {loading ? (
                <p className="text-gray-400">Loading...</p>
            ) : review ? (
                <Markdown rehypePlugins={[rehypeHighlight]} className="prose prose-invert">
                    {review}
                </Markdown>
            ) : (
                <p className="text-gray-400">No review available.</p>
            )}
        </div>
    );
}

export default RightSection;
