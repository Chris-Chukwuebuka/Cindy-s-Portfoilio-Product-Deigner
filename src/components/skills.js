
export default function AppSkills() {
    return (
        <section data-scroll-index="1" id="skills" class="skills-section">
    <div class="container">
        <div class="row gy-5 align-items-center">
            <div class="col-lg-6">
                <div class="section-heading">
                    <h3>My Skills</h3>
                </div>
                <div class="skill-box">
                    <div class="row g-3">
                        <div class="col-6 col-md-4 col-lg-6">
                            <div class="feature-box-02 bg-1">
                                <div class="icon">
                                <i class="bi bi-columns"></i>
                                </div>
                                <div class="feature-content">
                                    <h6>UI/UX Design</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-md-4 col-lg-6">
                            <div class="feature-box-02 bg-2">
                                <div class="icon">
                                <i class="bi bi-file-earmark-person"></i>
                                </div>
                                <div class="feature-content">
                                    <h6>User Research & Analysis

</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-md-4 col-lg-6">
                            <div class="feature-box-02 bg-3">
                                <div class="icon">
                                <i class="bi bi-calendar-check"></i>
                                </div>
                                <div class="feature-content">
                                    <h6> Collaboration & Project Management

</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-md-4 col-lg-6">
                            <div class="feature-box-02 bg-4">
                                <div class="icon">
                                <i class="bi bi-eye"></i>
                                </div>
                                <div class="feature-content">
                                    <h6>Design Tools

</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-md-4 col-lg-6">
                            <div class="feature-box-02 bg-5">
                                <div class="icon">
                                <i class="bi bi-mouse-fill"></i>
                                </div>
                                <div class="feature-content">
                                    <h6>Wireframing & Prototyping

</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-md-4 col-lg-6">
                            <div class="feature-box-02 bg-6">
                                <div class="icon">
                                <i class="bi bi-file-code-fill"></i>
                                </div>
                                <div class="feature-content">
                                    <h6>Frontend Development</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 text-center">
                <div>
                    <img src={ require('../assets/images/Skills.png')} alt="Skills" />
                </div>
            </div>
        </div>
    </div>
</section>

    )
}