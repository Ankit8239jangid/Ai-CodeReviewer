import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Hero from "./Hero";
import Main from "../Layout/Main/Main";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  const [active, setActive] = useState(false);
  const handleClick = () => setActive((prv) => !prv);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden flex flex-col justify-center items-center">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
            backgroundSize: "100% 100%",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div initial="hidden" animate="visible" className="container mx-auto px-6 lg:px-16 flex flex-col items-center">
        {/* Navbar */}
        <motion.nav variants={fadeIn} className="flex flex-wrap justify-between items-center py-4 w-full">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              CodeReviewAI
            </span>
          </div>

          {/* Responsive Menu */}
          <div className="flex mt-5 md:mt-0 items-center space-x-4 md:space-x-8">
            <motion.button
              onClick={handleClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 text-sm md:text-base bg-gradient-to-r from-blue-600 to-violet-600 rounded-full hover:from-blue-700 hover:to-violet-700 transition-all shadow-lg hover:shadow-blue-500/20"
            >
              {active ? "Back" : "Get Started"}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 text-sm md:text-base text-blue-500 hover:text-blue-400 transition-colors"
            >
              Documentation
            </motion.button>
          </div>
        </motion.nav>
      </motion.div>

      {active ? <Main /> : <Hero handleClick={handleClick} />}

      {/* Footer */}
      <footer className="py-12 md:py-16 w-full flex flex-col items-center">
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Logo */}
          <div className="flex justify-center items-center space-x-2">
            <Code2 className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              CodeReviewAI
            </span>
          </div>

          {/* Navigation Links */}
          <ul className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8">
            {["About", "Careers", "History", "Services", "Projects", "Blog"].map((item) => (
              <li key={item}>
                <a className="text-white text-sm md:text-base transition hover:text-white/75" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <ul className="mt-8 flex justify-center gap-6 md:gap-8">
            {[
              { href: "#", label: "Facebook", icon: Facebook },
              { href: "https://www.instagram.com/ankitjangid__001/", label: "Instagram", icon: Instagram },
              { href: "https://x.com/AnkitJangid82", label: "Twitter", icon: Twitter },
              { href: "https://www.linkedin.com/in/ankit-jangid-417b902bb", label: "LinkedIn", icon: Linkedin },
            ].map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a href={href} rel="noreferrer" target="_blank" className="text-white transition hover:text-white/75">
                  <span className="sr-only">{label}</span>
                  <Icon className="w-6 h-6 md:w-7 md:h-7" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 flex  flex-col items-center">
          <span className="text-white">Created By Ankit Jangid </span>
          <span> © {new Date().getFullYear()} CodeReviewAI. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
