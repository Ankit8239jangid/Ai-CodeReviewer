import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

const NoReviewMessage = () => {
    return (
        <div className="flex flex-col items-center justify-center  text-white p-6">
            {/* Icon with Subtle Floating Effect */}
            <motion.div
                className="p-4 bg-gray-800 rounded-full shadow-md mb-4"
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <Code className="w-14 h-14 text-gray-300" />
            </motion.div>

            {/* User Greeting */}
            <motion.h1
                className="text-3xl font-bold"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Welcome to AI Code Reviewer! 🚀
            </motion.h1>

            {/* Introduction */}
            <motion.p
                className="text-lg text-gray-400 mt-2 text-center max-w-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Hi there! Paste your code below, and our AI will analyze it, find issues, and suggest improvements.
            </motion.p>
        </div>
    );

};

export default NoReviewMessage;
