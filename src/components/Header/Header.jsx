import { Nav } from "../Nav/Nav"
import logo from "../../assets/react.svg"
import "./Header.css"
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <Link to={"/"}>
                    <img src={logo} alt="logo reactiva" />
                    <span>Reactiva</span>
                </Link>
            </div>
            <Nav />
        </header>
    )
}