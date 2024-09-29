export default function AppFooter() {
    return (
<section data-scroll-index="4" id="contact" class="home-section bg-foot">
    <div class="container">
        <div class="row gy-5r">
            <div class="col-lg-6 pt-4 pb-4">
                <div>
                    <img src={ require('../assets/images/contact-bg.png')} alt="Design" />
                </div>
            </div>
            <div class="col-lg-5 ms-auto col-xl-4">
                <ul class="contact-infos">
                    <li>
                        <div class="icon bg-1">
                            <a href="tel:+234 913 395 6256"><i class="bi bi-telephone-fill"></i></a>
                        </div>
                        <div class="col">
                            <h5>Phone</h5>
                            <p>+234 913 395 6256</p>
                        </div>
                    </li>
                    <li>
                        <div class="icon bg-2">
                            <a href="mailto:ebubecynthiaobidiwe@gmail.com"><i class="bi bi-envelope-fill"></i></a>
                        </div>
                        <div class="col">
                            <h5>Mail</h5>
                            <p>ebubecynthiaobidiwe@gmail.com</p>
                        </div>
                    </li>
                    <li>
                        <div class="icon bg-4">
                          <a href="https://www.linkedin.com/in/ebube-cynthia-17b223292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a>
                        </div>
                        <div class="col">
                            <h5>See More</h5>
                            <p>Personal Profile</p>
                        </div>
                    </li>
                    <li>
                        <div class="icon bg-3">
                            <i class="bi bi-geo-alt-fill"></i>
                        </div>
                        <div class="col">
                            <h5>Located</h5>
                            <p>Ikeja, Lagos, Nigeria</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
    )
}