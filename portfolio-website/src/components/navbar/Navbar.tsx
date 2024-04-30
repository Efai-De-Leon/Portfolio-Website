import { NavLink } from "react-router-dom";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";

type NavbarProps = {
    title: string;
    navLinks: {
        path: string;
        title: string;
    }[];
};

/**
 * Navbar component
 *
 * @param title - title of the website
 * @param navLinks - array of objects containing path and title of each link
 * @returns
 */

export const Navbar = ({ title, navLinks }: NavbarProps) => {
    const homeLink = navLinks.find((link) => link.title === "Home");

    return (
        <header>
            <div className="header-content">
                <Link to={homeLink ? homeLink.path : "/"}>
                    <div className="website-title">
                        <h1>{title}</h1>
                    </div>
                </Link>
            </div>
            <nav className="navbar">
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
