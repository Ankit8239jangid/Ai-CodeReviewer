import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

const NoReviewMessage = () => {
    return (
        <div className="flex flex-col items-center justify-center text-white p-6">
            {/* Floating Icon with Neon Glow */}
            <motion.div
                className="p-6 bg-gray-900 bg-opacity-40 backdrop-blur-lg rounded-full shadow-lg border border-blue-500/30"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <Code className="w-16 h-16 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
            </motion.div>

            {/* Animated Title */}
            <motion.h1
                className="text-4xl font-extrabold mt-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-wide"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Welcome to AI Code Reviewer! 🚀
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p
                className="text-lg text-gray-300 mt-3 text-center max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Paste your code on Left and let our AI analyze, detect issues, and suggest improvements in real time.  
            </motion.p>

            {/* Glowing Border Effect */}
            <motion.div
                className="mt-6 w-40 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.7)]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
            />
        </div>
    );
};

export default NoReviewMessage;
