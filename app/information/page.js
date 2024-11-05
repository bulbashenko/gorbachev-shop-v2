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
      description: 'My name is Albekov Aleksander, and I am 22 years old. I am currently studying Computer Science at the Technical University of Košice. My interests include programming and exploring new technologies.',
      imgSrc: '/images/AlexanderPic.jpg',
      socialLinks: {
        facebook: 'https://www.facebook.com/profile.php?id=100087952890575',
        github: 'https://github.com/bulbashenko',
        instagram: 'https://www.instagram.com/albekov',
        youtube: 'https://www.youtube.com/channel/albekov',
      }
    },
    {
      name: 'Istomina Polina',
      hobbies: 'Hobbies for Member 3',
      description: 'Im Polina Istomina, Im 19 years old. I am finishing my bachelors degree at TUKE. My hobbies are traveling and reading.',
      imgSrc: '/images/MackaPic.jpg',
      socialLinks: {
        facebook: 'https://www.facebook.com/profile.php?id=100095638837198',
        github: 'https://github.com/wiatjlkg',
        instagram: 'https://www.instagram.com/istomina',
        youtube: 'https://www.youtube.com/channel/istomina',
      }
    },
    {
      name: 'Pöhm Peter',
      hobbies: 'Hobbies for Member 4',
      description: 'My name is Peter Pöhm, I am 21 years old and I attend TUKE University in Košice. My hobbies include cycling and playing computer games.',
      imgSrc: '/images/PohmImage.jpg',
      socialLinks: {
        facebook: 'https://www.facebook.com/profile.php?id=100006458835800',
        github: 'https://github.com/Peto321',
        instagram: 'https://www.instagram.com/pohm',
        youtube: 'https://www.youtube.com/channel/pohm',
      }
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
                onClick={() => handleImageClick(member.imgCredit, member.imgLink, member.name)} // Pass name to handler
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

      {/* Modal for image and member name */}
      {modalVisible && (
        <div className="modal">
          <div className="modalContent">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <p>{currentImageCredit} - {currentMemberName}</p>
            <p><a href={currentImageLink} target="_blank" rel="noopener noreferrer"></a></p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;
