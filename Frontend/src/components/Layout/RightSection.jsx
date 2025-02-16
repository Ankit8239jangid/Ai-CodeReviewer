import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ClipboardCopy, Check } from "lucide-react";
import Loding from "./Main/Loder/Loding";
import NoReviewMessage from "./Main/Loder/intro";


function RightSection({ review, loading }) {
    const [copied, setCopied] = useState(false);
    const [typedReview, setTypedReview] = useState("");

    // Ensure review is a string before processing
    useEffect(() => {
        if (typeof review === "string" && review.length > 0) {
            setTypedReview(""); // Reset before typing
            let index = 0;
            const interval = setInterval(() => {
                setTypedReview((prev) => prev + review[index]);
                index++;
                if (index >= review.length) clearInterval(interval);
            },5); // Adjust speed here
            return () => clearInterval(interval); // Cleanup interval
        }
    }, [review]);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Extract only the code block from the review safely
    const getCodeContent = (text) => {
        if (typeof text !== "string") return ""; // Prevents errors
        const codeBlockRegex = /```(?:javascript)?\n([\s\S]*?)```/;
        const match = text.match(codeBlockRegex);
        return match ? match[1].trim() : "";
    };

    const extractedCode = getCodeContent(review);

    return (
        <div className="h-full md:w-1/2 w-full text-white p-4 border border-gray-700 rounded-2xl overflow-auto shadow-xl transition-all duration-300">
            {loading ? (
                <Loding />
            ) : review ? (
                <div className="space-y-4">
                    {/* Typing Effect for Review */}
                    <div className="prose prose-invert max-w-none">
                        <Markdown rehypePlugins={[rehypeHighlight]}>
                            {typedReview}
                        </Markdown>
                    </div>

                    {/* Extracted Code Section */}
                    {extractedCode && (
                        <div className="relative mt-6 p-4 bg-gray-800 rounded-lg group">
                            <pre className="overflow-x-auto">
                                <code className="language-javascript">
                                    {extractedCode}
                                </code>
                            </pre>

                            <CopyToClipboard text={extractedCode} onCopy={handleCopy}>
                                <button
                                    className="absolute top-2 right-2 p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-all duration-200"
                                    title={copied ? "Copied!" : "Copy code"}
                                >
                                    {copied ? (
                                        <div className="flex items-center space-x-2">
                                            <Check className="h-4 w-4 text-green-400" />
                                            <span className="text-sm text-green-400">Copied!</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center space-x-2">
                                            <ClipboardCopy className="h-4 w-4 text-gray-300" />
                                            <span className="text-sm">Copy code</span>
                                        </div>
                                    )}
                                </button>
                            </CopyToClipboard>
                        </div>
                    )}
                </div>
            ) : (
                <NoReviewMessage />
            )}
        </div>
    );
}

export default RightSection;
