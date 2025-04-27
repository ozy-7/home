import '../styles/Header.css';
//@ts-ignore
import CardsContainer from './CardsContainer.jsx';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Welcome</h1>
      </div>



      {/* Render CardsContainer here */}
      <CardsContainer />
    </header>
  );
}

export default Header;
