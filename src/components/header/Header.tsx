import { Link } from "react-router-dom";
import logo from "../../assets/strategy.png"
import home from "../../assets/home.png";
import "./Header.css";

export const Header = () => {
    return (
        <header>
            <div className="awd">
                <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
                <Link to="/"><img src={home} alt="home" className="home"/></Link>
            </div>
        </header>
    );
};
