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
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
            Certificates & Achievements
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My professional journey and contributions in space technology, validated through credentials from NASA and ISRO.
            Click on any certificate to view it in full detail.
          </p>
        </motion.div>

        {/* NASA Certificates Section */}
        <motion.div
          variants={slideInFromLeft(0.7)}
          className="mb-20"
        >
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <Image 
                src="/images/Nasa LOGO.jpg" 
                alt="NASA Logo"
                width={48}
                height={48}
                className="object-contain rounded-full bg-white/10 p-1" 
              />
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                NASA Certifications
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATES.filter((cert) => cert.organization.includes('NASA')).map((certificate) => (
              <CertificateCard 
                key={certificate.id}
                certificate={certificate}
                onImageClick={openModal}
              />
            ))}
          </div>
        </motion.div>

        {/* ISRO Certificates Section */}
        <motion.div
          variants={slideInFromRight(0.7)}
        >
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              <Image 
                src="/images/ISRO logo.jpg" 
                alt="ISRO Logo"
                width={48}
                height={48} 
                className="object-contain rounded-full bg-white/10 p-1" 
              />
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                ISRO Certifications
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATES.filter((cert) => cert.organization.includes('ISRO')).map((certificate) => (
              <CertificateCard 
                key={certificate.id}
                certificate={certificate}
                onImageClick={openModal}
              />
            ))}
          </div>
        </motion.div>
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
