export default function AppIntro() {
    return (
        <section class="home-section bg-gray">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 py-4">
                        <div class="typing">
                           <h2 class="typewrite">Hi, I'm Cynthia </h2>
                        </div>
                           <h5>I am a UI/UX Product Designer and Fashion Crocheter from Lagos, Nigeria, blending technology and craftsmanship to deliver innovative solutions and stylish designs..</h5>
                           <br />
                           <a class="btn-main btn-main-theme" data-scroll-nav="1" href="#skills" >Let's start</a>
                    </div>
                    <div class="col-lg-6 py-4">
                        <div>
                            <img src={ require('../assets/images/hero-banner.png')} alt="Danielle"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}