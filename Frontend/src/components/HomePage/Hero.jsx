
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Star, GitBranch, CheckCircle, Terminal, Zap } from 'lucide-react';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const codeExample = `function reviewCode(code) {
  // AI-powered analysis
  const review = ai.analyze(code);
  
  return {
    quality: review.score,
    suggestions: review.tips,
    improvements: review.fixes
  };
}`;
function Hero({ handleClick }) {

    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 px-8 ">
                <motion.div
                    variants={fadeIn}
                    className="lg:w-1/2 space-y-8"
                >
                    <motion.h1
                        className="text-6xl font-bold leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Transform Your
                        <span className="block mt-2">
                            <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                                Code Quality
                            </span>
                        </span>
                        with AI
                    </motion.h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Experience intelligent code reviews that help you write cleaner,
                        more efficient, and production-ready code in real-time.
                    </p>
                    <div className="flex items-center space-x-4">
                        <motion.button
                            onClick={handleClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full hover:from-blue-700 hover:to-violet-700 transition-all shadow-lg hover:shadow-blue-500/20 flex items-center space-x-2"
                        >
                            <Terminal className="w-5 h-5" />
                            <button >Try Now Free</button>
                        </motion.button>
                        <div className="flex items-center space-x-4 text-gray-400">
                            <Star className="w-5 h-5 text-yellow-500" />
                            <span>4.9/5 from 1000+ reviews</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeIn}
                    className="lg:w-1/2"
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                >
                    <motion.div
                        className="relative bg-gray-800 rounded-xl p-6 shadow-2xl"
                        animate={{
                            boxShadow: isHovered
                                ? '0 0 40px rgba(59, 130, 246, 0.3)'
                                : '0 0 20px rgba(0, 0, 0, 0.3)'
                        }}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400 text-sm">
                                <GitBranch className="w-4 h-4" />
                                <span>main</span>
                            </div>
                        </div>
                        <pre className="text-sm font-mono overflow-x-auto">
                            <code className="text-blue-400">{codeExample}</code>
                        </pre>
                        <motion.div
                            className="absolute -bottom-3 -right-3 bg-green-500 text-white px-4 py-2 rounded-full text-sm flex items-center space-x-2 shadow-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <CheckCircle className="w-4 h-4" />
                            <span>Code Review Complete</span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Features Grid */}
            <motion.div
                variants={fadeIn}
                className="grid md:grid-cols-3 gap-8 mt-24 px-6"
            >
                {[
                    {
                        icon: <Zap className="w-6 h-6 text-yellow-500" />,
                        title: "Real-Time Analysis",
                        description: "Get instant feedback as you code with our AI-powered review system"
                    },
                    {
                        icon: <Terminal className="w-6 h-6 text-blue-500" />,
                        title: "Smart Suggestions",
                        description: "Receive context-aware recommendations to improve your code quality"
                    },
                    {
                        icon: <Code2 className="w-6 h-6 text-violet-500" />,
                        title: "Best Practices",
                        description: "Learn and apply industry-standard patterns and practices"
                    }
                ].map((feature, index) => (
                    <motion.div
                        key={index}
                        variants={fadeIn}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl hover:shadow-2xl transition-all border border-gray-800"
                    >
                        <div className="bg-gray-800 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                    </motion.div>
                ))}
            </motion.div>






        </>
    )
}

export default Hero