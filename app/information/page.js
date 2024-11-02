// AboutUs.js
import React from 'react';
import './information.css';

const AboutUs = () => {
  const members = [
    {
      name: 'Murcko Adam',
      hobbies: 'Hobbies for member 1',
      description: 'My name is Adam Murcko, and I am 22 years old. I am currently studying Computer Networks at the Technical University of Košice. My interests include playing video games, keeping up with the latest developments in the tech world, and exploring Japanese culture, particularly through anime.',
      imgSrc: 'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/463215621_3279193688878941_1369419553071856078_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=AE2WJJwY_LQQ7kNvgEjGFQS&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=AVI0ipsgrNrlGBU3Zgtzjvy&oh=00_AYDtUy1Aj7VKyUQsq5t_461uCf8NDtFa45NQ_lpkaDBR_g&oe=672BDCE1' // Random image from Unsplash
    },
    {
      name: 'Albekov Aleksandr',
      hobbies: 'Hobbies for Member 2',
      description: 'This is a description for Member 2. They love music and traveling.',
      imgSrc: '/member2.jpg'
    },
    {
      name: 'Istomina Polina',
      hobbies: 'Hobbies for Member 3',
      description: 'This is a description for Member 3. They are passionate about photography and painting.',
      imgSrc: '/member3.jpg'
    },
    {
      name: 'Pöhm Peter',
      hobbies: 'Hobbies for Member 4',
      description: 'This is a description for Member 4. They enjoy cooking and reading.',
      imgSrc: '/member4.jpg'
    },
  ];

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
            </div>
          </div>
        ))}
      </div>
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
    flexDirection: 'row', // Layout items in a row
    backgroundColor: '#1a1a1a', // Dark background for member cards
    color: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)', // Increased shadow for depth
    transition: 'transform 0.2s, box-shadow 0.2s', // Smooth transition for hover effect
    minHeight: '150px', // Adjust height as needed
    overflow: 'hidden', // Prevent content overflow
    cursor: 'pointer', // Change cursor on hover
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '15px', // Add margin to the right of the image
    overflow: 'hidden', // Prevent image overflow
    borderRadius: '10px', // Rounded corners for the image
  },
  image: {
    width: '300px', // Set width of the image
    height: 'auto',
    borderRadius: '10px',
    transition: 'transform 0.3s', // Smooth transition for image on hover
    '&:hover': {
      transform: 'scale(1.1)', // Scale up on hover
    },
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align text to the left
  },
  name: {
    marginBottom: '10px',
    fontSize: '1.2em', // Increase font size for names
    textAlign: 'left', // Align name text to the left
  },
  description: {
    marginTop: '10px',
    textAlign: 'center', // Center the description text
  },
};

export default AboutUs;
