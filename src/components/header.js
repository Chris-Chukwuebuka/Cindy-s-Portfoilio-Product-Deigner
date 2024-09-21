import { useEffect } from 'react';

export default function AppHeader() {
    useEffect(() => {
        const handleScroll = () => {
            const navbarCollapse = document.getElementById('navbarSupportedContent');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand  img-fluid   " href="#home">
                    <img src={require('../assets/images/cindys-logo.png')} alt="logo" className="logo img-fluid " width={"16px"} height={"16px"} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#home">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">EXPERIENCE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">SKILLS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">PORTFOLIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">CONTACT</a>
                        </li>
                    </ul>
                    <a className="btn-main contact btn-main-theme" data-scroll-nav="4" href="#contact">Contact now</a>
                </div>
            </div>
        </nav>
    );
}