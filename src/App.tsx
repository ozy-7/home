import './styles/App.css';
import Header from './components/Header.tsx';
import  Navbar  from './components/DropdownMenu.tsx';


function App() {
    return (
        <div className="min-h-screen flex items-center justify-center">

            <Header />
            <Navbar />

        </div>
    );
}

export default App;
