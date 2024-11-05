"use client"; // Add this line to mark the file as a client component

import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const members = [
    {
      name: 'Murcko Adam',
      hobbies: 'Hobbies for member 1',
      description:
        'My name is Adam Murcko, and I am 22 years old. I am currently studying Computer Networks at the Technical University of Košice. My interests is playing video games.',
      imgSrc: '/images/Wolf.png',
      imgCredit: 'Image by pngtree.com',
      imgLink:
        'https://pngtree.com/freepng/red-wolf-logo-for-game-team_5518165.html',
      socialLinks: {
        facebook: 'https://www.facebook.com/murci669/',
        github: 'https://github.com/Zephyrer669',
        instagram: 'https://www.instagram.com/murcik505/',
        youtube: 'https://www.youtube.com/channel/adam.murcko',
      },
    },
    {
      name: 'Albekov Aleksandr',
      hobbies: 'Hobbies for Member 2',
      description:
        'My name is Albekov Aleksander, and I am 22 years old. I am currently studying Computer Science at the Technical University of Košice. My interests include programming and exploring new technologies.',
      imgSrc: '/images/AlexanderPic.jpg',
      socialLinks: {
        facebook: 'https://www.facebook.com/profile.php?id=100087952890575',
        github: 'https://github.com/bulbashenko',
        instagram: 'https://www.instagram.com/albekov',
        youtube: 'https://www.youtube.com/channel/albekov',
      },
    },
    {
      name: 'Istomina Polina',
      hobbies: 'Hobbies for Member 3',
      description:
        'Im Polina Istomina, Im 19 years old. I am finishing my bachelors degree at TUKE. My hobbies are traveling and reading.',
      imgSrc: '/images/MackaPic.jpg',
      socialLinks: {
        facebook: 'https://www.facebook.com/profile.php?id=100095638837198',
        github: 'https://github.com/wiatjlkg',
        instagram: 'https://www.instagram.com/istomina',
        youtube: 'https://www.youtube.com/channel/istomina',
      },
    },
    {
      name: 'Pöhm Peter',
      hobbies: 'Hobbies for Member 4',
      description:
        'My name is Peter Pöhm, I am 21 years old and I attend TUKE University in Košice. My hobbies include cycling and playing computer games.',
      imgSrc: '/images/PohmImage.jpg',
      socialLinks: {
        facebook: 'https://www.facebook.com/profile.php?id=100006458835800',
        github: 'https://github.com/Peto321',
        instagram: 'https://www.instagram.com/pohm',
        youtube: 'https://www.youtube.com/channel/pohm',
      },
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [currentImageCredit, setCurrentImageCredit] = useState('');
  const [currentImageLink, setCurrentImageLink] = useState('');
  const [currentMemberName, setCurrentMemberName] = useState('');

  const handleImageClick = (credit, link, name) => {
    setCurrentImageCredit(credit);
    setCurrentImageLink(link);
    setCurrentMemberName(name);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  // Map social media keys to icon components
  const iconComponents = {
    facebook: FaFacebook,
    github: FaGithub,
    instagram: FaInstagram,
    youtube: FaYoutube,
  };

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    },
  };

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
      <motion.div
        className="container mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {members.map((member, index) => (
          <motion.div
            key={index}
            className="bg-zinc-800 text-white p-6 relative rounded-xl overflow-hidden w-full"
            variants={itemVariants}
          >
            <div className="relative w-full h-auto">
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-full h-80 object-cover rounded-lg cursor-pointer"
                onClick={() =>
                  handleImageClick(
                    member.imgCredit,
                    member.imgLink,
                    member.name
                  )
                }
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-300 mt-2">{member.description}</p>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              {Object.entries(member.socialLinks).map(([key, link]) => {
                const IconComponent = iconComponents[key];
                if (!IconComponent) return null;
                return (
                  <a
                    key={key}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-400"
                  >
                    <IconComponent size={32} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for image and member name */}
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg text-center relative">
            <span
              className="cursor-pointer text-2xl absolute top-2 right-4"
              onClick={handleCloseModal}
            >
              &times;
            </span>
            <p>
              {currentImageCredit} - {currentMemberName}
            </p>
            <p>
              <a
                href={currentImageLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {currentImageLink}
              </a>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;
