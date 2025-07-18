"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft } from "@/lib/motion";

interface Achievement {
  id: string;
  title: string;
  organization: string;
  duration: string;
  type: string;
  role: string;
  image: string;
  logo?: string;
  certificateImage?: string;
  description: string;
  highlights: string[];
  stats: string;
}

interface AchievementCardProps {
  achievement: Achievement;
}

export const AchievementCard = ({ achievement }: AchievementCardProps) => {
  return (
    <motion.div
      variants={slideInFromLeft(0.5)}
      whileHover={{ scale: 1.02 }}
      className="relative group"
    >
      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300 h-full">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative">
            <Image
              src={achievement.image}
              alt={achievement.title}
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />
            {achievement.logo && (
              <Image
                src={achievement.logo}
                alt="Organization Logo"
                width={24}
                height={24}
                className="absolute -bottom-2 -right-2 rounded-full bg-white p-1"
              />
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
              {achievement.title}
            </h3>
            <p className="text-purple-300 font-semibold text-sm">
              {achievement.organization}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-1 bg-purple-600/30 text-purple-200 text-xs rounded-full">
                {achievement.duration}
              </span>
              <span className="px-2 py-1 bg-blue-600/30 text-blue-200 text-xs rounded-full">
                {achievement.type}
              </span>
            </div>
          </div>
        </div>

        {/* Role */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium rounded-full">
            {achievement.role}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {achievement.description}
        </p>

        {/* Highlights */}
        <div className="mb-4">
          <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            Key Highlights
          </h4>
          <ul className="space-y-1">
            {achievement.highlights.map((highlight, index) => (
              <li key={index} className="text-gray-400 text-xs flex items-start gap-2">
                <span className="w-1 h-1 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div className="pt-4 border-t border-purple-500/20">
          <p className="text-cyan-300 text-xs font-medium">
            📊 {achievement.stats}
          </p>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
};
