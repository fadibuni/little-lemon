import logo from '../assests/Logo.svg'; // Tell webpack this JS file uses this image


const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo" />
        </header>
    )
};

export default Header