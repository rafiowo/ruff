import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import pfp101 from './assets/pfp101.jpg';
import SleepingCat from './SleepingCat';

function NavBar() {

    return(
        <>
        <div className="navbar">
            <a href="#main-身体"><img src={pfp101} alt="pfp"></img></a>
            <a href="https://github.com/rafiowo"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/rafiowo/"><FaLinkedin/></a>
            <a className = "nav-link-2" href="#works">Works</a>
            <a className="nav-link-3" href="#skills">Skills</a>
            <a className="nav-link-4" href="#contact">Contact</a>
            <SleepingCat />

        </div>
        </>
    );
}

export default NavBar;