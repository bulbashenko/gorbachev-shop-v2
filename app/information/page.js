"use client"; // Add this line to mark the file as a client component

import React, { useState } from 'react';

const AboutUs = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentLink, setCurrentLink] = useState('');

  const members = [
    {
      name: 'Murcko Adam',
      hobbies: 'Hobbies for member 1',
      description: 'My name is Adam Murcko, and I am 22 years old. I am currently studying Computer Networks at the Technical University of Košice. My interests include playing video games, keeping up with the latest developments in the tech world, and exploring Japanese culture, particularly through anime.',
      imgSrc: 'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/463215621_3279193688878941_1369419553071856078_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=AE2WJJwY_LQQ7kNvgEjGFQS&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=AVI0ipsgrNrlGBU3Zgtzjvy&oh=00_AYDtUy1Aj7VKyUQsq5t_461uCf8NDtFa45NQ_lpkaDBR_g&oe=672BDCE1',
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
      imgSrc: '/member2.jpg',
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
      imgSrc: '/member3.jpg',
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
      imgSrc: '/member4.jpg',
      socialLinks: {
        facebook: 'https://www.facebook.com/pohm.peter',
        github: 'https://github.com/pohm',
        instagram: 'https://www.instagram.com/pohm',
        youtube: 'https://www.youtube.com/channel/pohm',
      }
    },
  ];

  const handleIconClick = (link) => {
    setCurrentLink(link);
    setShowPopup(true);
  };

  const handleConfirm = () => {
    window.open(currentLink, '_blank');
    setShowPopup(false);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <section style={styles.aboutUs}>
      <h2>About Us</h2>
      <div style={styles.members}>
        {members.map((member, index) => (
          <div key={index} style={styles.member}>
            <div style={styles.imageContainer}>
              <img src={member.imgSrc} style={styles.image} alt={member.name} />
            </div>
            <div style={styles.info}>
              <h3 style={styles.name}>{member.name}</h3>
              <p style={styles.description}>{member.description}</p>
              {/* Social Media Icons Section */}
              <div style={styles.iconContainer}>
                {Object.entries(member.socialLinks).map(([key, link]) => (
                  <div key={key} onClick={() => handleIconClick(link)} style={styles.iconWrapper}>
                    <img src={`/images/${key.charAt(0).toUpperCase() + key.slice(1)}Icon.png`} alt={key} style={styles.icon} />
                  </div>
                ))}
              </div>
              {/* End of Social Media Icons Section */}
            </div>
          </div>
        ))}
      </div>
      {/* Popup Confirmation Dialog */}
      {showPopup && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <p>Do you really want to be redirected?</p>
            <button onClick={handleConfirm} style={styles.button}>Yes</button>
            <button onClick={handleCancel} style={styles.button}>No</button>
          </div>
        </div>
      )}
    </section>
  );
};

const styles = {
  aboutUs: {
    textAlign: 'center',
    padding: '20px',
  },
  members: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  member: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    minHeight: '150px',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '15px',
    overflow: 'hidden',
    borderRadius: '10px',
  },
  image: {
    width: '300px',
    height: 'auto',
    borderRadius: '10px',
    transition: 'transform 0.3s',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  name: {
    marginBottom: '10px',
    fontSize: '1.2em',
    textAlign: 'left',
  },
  description: {
    marginTop: '10px',
    textAlign: 'center',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center', // Center align the icons
    marginTop: '10px', // Add margin above icons
    width: '100%', // Ensure icons take full width
    padding: '10px', // Add padding around the icon container
    border: '2px solid #fff', // White border around the icon container
    borderRadius: '10px', // Rounded corners for the container
    backgroundColor: '#1a1a1a', // Same background as the member section
  },
  iconWrapper: { // New style for icon wrapper
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #fff', // White border around each icon
    borderRadius: '50%', // Circular border
    margin: '0 5px', // Margin between icons
    padding: '5px', // Padding inside the border
    cursor: 'pointer',
  },
  icon: {
    width: '30px', // Set width for icons
    height: '30px', // Set height for icons
  },
  popup: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark semi-transparent background
    zIndex: 1000,
  },
  popupContent: {
    backgroundColor: '#000000', // Black background for the popup
    color: '#ffffff', // White text color
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
  },
  button: {
    margin: '5px',
    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#ffffff',
    color: '#000000',
  },
};

export default AboutUs;
