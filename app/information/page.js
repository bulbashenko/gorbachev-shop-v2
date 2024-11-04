"use client"; // Add this line to mark the file as a client component

import React, { useState } from 'react';
import './AboutUs.css'; // Import the CSS file

const AboutUs = () => {
  const members = [
    {
      name: 'Murcko Adam',
      hobbies: 'Hobbies for member 1',
      description: 'My name is Adam Murcko, and I am 22 years old. I am currently studying Computer Networks at the Technical University of Košice. My interests is playing video games.',
      imgSrc: '/images/Wolf.png',
      imgCredit: "Image by pngtree.com",
      imgLink: "https://pngtree.com/freepng/red-wolf-logo-for-game-team_5518165.html",
      socialLinks: {
        facebook: 'https://www.facebook.com/murci669/',
        github: 'https://github.com/Zephyrer669',
        instagram: 'https://www.instagram.com/murcik505/',
        youtube: 'https://www.youtube.com/channel/adam.murcko',
      }
    },
    {
      name: 'Albekov Aleksandr',
      hobbies: 'Hobbies for Member 2',
      description: 'This is a description for Member 2. They love music and traveling.',
      imgSrc: '/images/AlexanderPic.jpg',
      socialLinks: {
        facebook: 'https://www.facebook.com/albekov.aleksandr',
        github: 'https://github.com/albekov',
        instagram: 'https://www.instagram.com/albekov',
        youtube: 'https://www.youtube.com/channel/albekov',
      }
    },
    {
      name: 'Istomina Polina',
      hobbies: 'Hobbies for Member 3',
      description: 'This is a description for Member 3. They are passionate about photography and painting.',
      imgSrc: '/images/MackaPic.jpg',
      socialLinks: {
        facebook: 'https://www.facebook.com/istomina.polina',
        github: 'https://github.com/istomina',
        instagram: 'https://www.instagram.com/istomina',
        youtube: 'https://www.youtube.com/channel/istomina',
      }
    },
    {
      name: 'Pöhm Peter',
      hobbies: 'Hobbies for Member 4',
      description: 'This is a description for Member 4. They enjoy cooking and reading.',
      imgSrc: '/images/member4.jpg',
      socialLinks: {
        facebook: 'https://www.facebook.com/pohm.peter',
        github: 'https://github.com/pohm',
        instagram: 'https://www.instagram.com/pohm',
        youtube: 'https://www.youtube.com/channel/pohm',
      }
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [currentImageCredit, setCurrentImageCredit] = useState('');
  const [currentImageLink, setCurrentImageLink] = useState('');

  const handleImageClick = (credit, link) => {
    setCurrentImageCredit(credit);
    setCurrentImageLink(link);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <section className="aboutUs">
      <h2 className="title">About Us</h2>
      <div className="membersContainer">
        {members.map((member, index) => (
          <div key={index} className="member">
            <div className="imageContainer">
              <img
                src={member.imgSrc}
                className="image"
                alt={member.name}
                onClick={() => handleImageClick(member.imgCredit, member.imgLink)} // Handle click event
              />
            </div>
            <div className="info">
              <h3 className="name">{member.name}</h3>
              <p className="description">{member.description}</p>
              <div className="iconContainer">
                {Object.entries(member.socialLinks).map(([key, link]) => (
                  <div key={key} className="iconWrapper">
                    <img
                      src={`/images/${key.charAt(0).toUpperCase() + key.slice(1)}Icon.png`}
                      alt={key}
                      className="icon"
                      onClick={() => window.open(link, '_blank')}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for image credit */}
      {modalVisible && (
        <div className="modal">
          <div className="modalContent">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <p>{currentImageCredit}</p>
            <p><a href={currentImageLink} target="_blank" rel="noopener noreferrer">png image from pngtree.com</a></p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;
