export default function AppHeader() {
    return (
<nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand bg-black" href="#home">
            <img src={ require('../assets/images/cindys-logo.png')} alt="logo" width={"26px"} height={"46px"} />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#home">HOME</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#experience">EXPERIENCE</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#skills">SKILLS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#portfolio">PORTFOLIO</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">CONTACT</a>
                </li>
            </ul>
            <a class="btn-main contact btn-main-theme" data-scroll-nav="4" href="#contact">Contact now</a>
        </div>
    </div>
</nav>

    )
}