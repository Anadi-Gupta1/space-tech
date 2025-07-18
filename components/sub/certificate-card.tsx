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
      className="flex flex-col h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-400/40 transition-all duration-300"
    >
      <div 
        className="relative overflow-hidden cursor-pointer"
        onClick={() => onImageClick(certificate.image, certificate.title)}
      >
        <div className="aspect-[4/3] relative">
          <Image
            src={certificate.image}
            alt={`${certificate.title} Certificate`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <p className="text-sm font-medium">Click to view full certificate</p>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
          {certificate.title}
        </h3>
        <p className="text-sm text-gray-400 mb-3">{certificate.organization} | {certificate.date}</p>
        <p className="text-gray-300 text-sm flex-grow">
          {certificate.description}
        </p>
      </div>
    </motion.div>
  );
};
