import React from 'react';
//@ts-ignore
import Card from './Card';
import steamLogo from '../assets/images/Steam.png';
import eaLogo from '../assets/images/EA.webp';
import instagramLogo from '../assets/images/Instagram.png';

function CardsContainer() {
  const cardsContainerStyle = {
    display: 'flex',
    flexDirection: 'column', // Align items in a row
    justifyContent: 'center', // Center items horizontally
    alignItems: 'center', // Align items vertically
    gap: '10px', // Space between items
    width: '100%', // Ensure container takes full width to avoid overflow
    maxWidth: '145px', // Limit the width to prevent overflow
    padding: '60px', // Add some padding to the container
    //flexWrap: 'wrap' // Allow items to wrap to the next line if necessary
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', // Cards in a column
    justifyContent: 'flex-start', // Align them to the start of the container
    alignItems: 'center', // Center the cards horizontally
    gap: '5px', // Reduce the space between cards
    
    
    
    height: 'auto',
  };

  return (
    <div style={containerStyle}>
      {/*<Card
        logo={instagramLogo}
        title="Instagram"
        color="rgba(141,12,86,255)"
        link="https://www.instagram.com/ozanceng/"
        text="      "
      />
      <Card
        logo={steamLogo}
        title="Steam"
        color="rgba(17,50,93,255)"
        link="https://steamcommunity.com/id/ozzy1327"
        text="      "
      />
      <Card
        logo={eaLogo}
        title="EA"
        color="rgba(182,56,78,255)"
        text="/ozy360"
      />*/}
    </div>
  );
}

export default CardsContainer;
