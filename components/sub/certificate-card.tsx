"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/lib/motion';

interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  image: string;
  description: string;
}

interface CertificateCardProps {
  certificate: Certificate;
  onImageClick: (image: string, title: string) => void;
}


export const CertificateCard = ({ certificate, onImageClick }: CertificateCardProps) => {
  return (
    <motion.div
      variants={slideInFromLeft(0.5)}
      className="flex flex-col md:flex-row w-full bg-gradient-to-br from-[#0a0026]/80 to-[#1a0a3c]/80 border border-purple-500/30 rounded-2xl overflow-hidden shadow-lg shadow-purple-900/20 mb-10"
    >
      {/* Left: Certificate Image */}
      <div
        className="relative w-full md:w-1/3 min-h-[220px] max-h-[400px] flex items-center justify-center bg-black/40 cursor-pointer"
        onClick={() => onImageClick(certificate.image, certificate.title)}
      >
        <Image
          src={certificate.image}
          alt={`${certificate.title} Certificate`}
          fill
          className="object-contain rounded-lg hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 400px"
          priority
        />
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-3 py-1 rounded-full shadow-md opacity-80 pointer-events-none">
          Click to enlarge
        </div>
      </div>

      {/* Right: Certificate Details */}
      <div className="w-full md:w-2/3 p-6 flex flex-col justify-center gap-2">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
          {certificate.title}
        </h3>
        <p className="text-base text-gray-400 mb-1 font-semibold">
          {certificate.organization}
          {certificate.date && <span className="ml-2 text-xs text-cyan-300">{certificate.date}</span>}
        </p>
        <p className="text-gray-300 text-base leading-relaxed">
          {certificate.description}
        </p>
      </div>
    </motion.div>
  );
};
