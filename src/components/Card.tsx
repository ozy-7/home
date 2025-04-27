import React from 'react';

interface CardProps {
  logo: string;
  title: string;
  color: string;
  link?: string;
  text?: string;
}

const Card: React.FC<CardProps> = ({ logo, title, color, link, text }) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: color,
    padding: '8px',
    borderRadius: '8px',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'League Spartan, sans-serif',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    width: '100%',
    textDecoration: 'none',
    minWidth: 'fit-content',
    minHeight: 'fit-content',
  };

  const imageStyle: React.CSSProperties = {
    width: '30px',
    height: 'auto',
    marginBottom: '2px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1rem',
    margin: '0',
  };

  const textStyle: React.CSSProperties = {
    fontSize: '.75rem',
    color: '#dcdcdc',
    margin: '2px 0 0 0',
  };

  const cardContent = (
    <div style={cardStyle} className="card">
      <img src={logo} alt={`${title} logo`} style={imageStyle} />
      <h2 style={titleStyle}>{title}</h2>
      {text && <p style={textStyle}>{text}</p>}
    </div>
  );

  return link ? (
    <a href={link} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" className="card-link">
      {cardContent}
    </a>
  ) : (
    cardContent
  );
};

export default Card;