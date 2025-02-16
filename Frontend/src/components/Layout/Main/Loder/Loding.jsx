import React from 'react'
import { motion } from "framer-motion";
import { BrainCircuit, Code } from "lucide-react";

function Loding() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-full text-white space-y-6">

                {/* Animated Code Block */}
                <motion.div
                    className="relative w-80 h-36 bg-gray-800 rounded-lg overflow-hidden shadow-lg shadow-blue-800 border border-gray-700"
                >
                    <div className="absolute top-3 left-3 animate-bounce  flex items-center justify-center   space-x-2 ">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>

                    <motion.div
                        className="absolute  inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="pt-10 pl-10 text-green-400 font-mono text-sm">
                        <Code className="w-5 h-5 inline text-green-400" /> <span>Processing...</span>
                        <br />
                        <span className="text-blue-400">function</span> <span className="text-yellow-400">reviewCode</span>(<span className="text-green-300">input</span>) {"{"}
                        <br />
                        &nbsp;&nbsp;<span className="text-blue-400">return</span> "Analyzing Code...";
                        <br />
                        {"}"}
                    </div>
                </motion.div>
            </div>

        </>
    )
}

export default Loding