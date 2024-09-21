export default function AppAbout() {
    return (
<section class="about-section" id="about">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 py-4">
                <div>
                    <img src={ require('../assets/images/home-banner2.png')} alt="Prototype"/>
                </div>
            </div>
            <div class="col-lg-6 py-4">
                <div>
                    <h1>I'm a UI/UX Product Designer with  1 year and some months of design work experience.</h1>
                </div>
                <p>
                Paul Rand's paradoxical design philosophy influences my approach, combining aesthetics with problem-solving and expression. Passionate for innovation, I thrive in collaborative settings, seeking like-minded professionals for design excellence.
                </p>
                <br />
                <div class="row pt-2">
                    <div class="col-6 col-md-4">
                        <h5 class="counter">285+</h5>
                        <p>Lessons Learnt</p>
                    </div>
                    <div class="col-6 col-md-4">
                        <h5 class="counter">500+</h5>
                        <p>Self Idea's </p>
                    </div>
                </div>
                <div class="btn-bar pt-4">
                    <a class="btn-main btn-main-theme me-4" data-scroll-nav="4" href="#contact">Contact me</a>
                    <a class="btn-main btn-main-dark" data-scroll-nav="3" href="#portfolio">Portfolio</a>
                </div>
            </div>
        </div>
    </div>
</section>

    )
}