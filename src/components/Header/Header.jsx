import { Nav } from "../Nav/Nav"
import logo from "/img/imagen.svg"
import "./Header.css"
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <Link to={"/"}>
                    <img src={logo} alt="logo reactiva" />
                    
                </Link>
            </div>
            <Nav />
        </header>
    )
}