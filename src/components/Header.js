import logo from '../assests/restauranfood.jpg';
import Button from './Button';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <h1 className="header-title">Little Lemon</h1>
                <h2 className="header-subtitle">Chicago</h2>
                <p className="header-description">
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <Button text="Reserve a Table" />
            </div>
            <div className="header-right">
                <img src={logo} alt="" />
            </div>
        </header>
    )
};

export default Header