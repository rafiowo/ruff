import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import pfp101 from './assets/pfp101.jpg';

function NavBar() {

    return(
        <>
        <div className="navbar">
            <img src={pfp101} alt="pfp"></img>
            <a href="https://github.com/rafiowo"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/rafiowo/"><FaLinkedin/></a>
            <a className = "nav-link-2"href="/about">Work</a>
            <a className="nav-link-3"href="/contact">About</a>
            <a className="nav-link-4"href="/contact">Contact</a>

        </div>
        </>
    );
}

export default NavBar;