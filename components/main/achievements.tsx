"use client";

import { motion } from "framer-motion";
import { AchievementCard } from "@/components/sub/achievement-card";
import { ACHIEVEMENTS } from "@/constants";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const Achievements = () => {
  return (
    <section
      id="achievements"
      className="flex flex-col items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
        <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-50" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6"
      >
        {/* Section Header */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
            Space Technology Achievements
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Documenting my journey in space science, citizen research, and contributions to 
            NASA and ISRO initiatives. Each achievement represents a commitment to advancing 
            our understanding of Earth and space through collaborative science.
          </p>
        </motion.div>

        {/* NASA Achievements Section */}
        <motion.div
          variants={slideInFromLeft(0.7)}
          className="mb-20"
        >
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <img 
                src="/images/Nasa LOGO.jpg" 
                alt="NASA Logo" 
                className="h-16 w-16 object-contain"
              />
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                NASA Contributions
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ACHIEVEMENTS.filter(achievement => achievement.organization.includes("NASA")).map((achievement, index) => (
              <motion.div
                key={achievement.id}
                variants={slideInFromLeft(0.5 + index * 0.1)}
              >
                <AchievementCard achievement={achievement} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ISRO Achievements Section */}
        <motion.div
          variants={slideInFromRight(0.7)}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <img 
                src="/images/ISRO logo.jpg" 
                alt="ISRO Logo" 
                className="h-16 w-16 object-contain"
              />
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                ISRO Certifications
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ACHIEVEMENTS.filter(achievement => achievement.organization.includes("ISRO")).map((achievement, index) => (
              <motion.div
                key={achievement.id}
                variants={slideInFromRight(0.5 + index * 0.1)}
              >
                <AchievementCard achievement={achievement} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="text-center mt-16 p-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Impact & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">19</div>
              <div className="text-gray-300">Vulnerabilities Submitted to NASA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">5</div>
              <div className="text-gray-300">Officially Accepted by NASA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">6</div>
              <div className="text-gray-300">Major Space-Tech Achievements</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
