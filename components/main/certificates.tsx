"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '@/lib/motion';
import { CertificateCard } from '../sub/certificate-card';
import { CertificateModal } from '../sub/certificate-modal';
import { CERTIFICATES } from '@/constants';

export const Certificates = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');

  const openModal = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setModalOpen(true);
  };

  return (
    <section
      id="certificates"
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
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            Certifications & Achievements
          </h1>
          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed">
              My professional journey through space technology is reflected in these credentials from NASA and ISRO.
              Each certificate represents a milestone in my commitment to advancing space science and research.
            </p>
            <p className="text-base text-gray-400 italic">
              Click on any certificate image to view it in full screen with zoom capabilities.
            </p>
          </div>
        </motion.div>

        {/* Certificates List - Horizontal Row Layout */}
        <div className="flex flex-col gap-12">
          {CERTIFICATES.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              onImageClick={openModal}
            />
          ))}
        </div>
      </motion.div>

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={selectedImage}
        title={selectedTitle}
      />
    </section>
  );
};
