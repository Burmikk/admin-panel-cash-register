import { NavLink } from "react-router-dom";
import scss from "./navBar.module.scss";
const NavBar = () => {
    return (
        <nav>
            <NavLink to="products">Products</NavLink>
        </nav>
    );
};
export default NavBar;
