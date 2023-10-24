import { NavLink } from "react-router-dom";
import scss from "./navBar.module.scss";
const NavBar = () => {
    return (
        <nav className={scss.nav}>
            <NavLink className={scss.link} to="products">
                Products
            </NavLink>
            <NavLink className={scss.link} to="receipts">
                Receipts
            </NavLink>
        </nav>
    );
};
export default NavBar;
