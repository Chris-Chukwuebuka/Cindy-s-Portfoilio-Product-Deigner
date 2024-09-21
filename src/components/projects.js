export default function AppProjects() {
    return (
<section data-scroll-index="3" id="portfolio" class="service-section">
    <div class="container">
        <div class="row section-heading align-items-center">
            <div class="col-lg-12 text-center">
                <h3>Latest Projects</h3>
            </div>
        </div>
        <div class="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
            <div class="col-md-6 col-lg-5">
                <div class="portfolio-img">
                    <img src={ require('../assets/images/Portfolio_ITS_Infinity_Applications.png')} alt="ITS_Infinity_Applications" />
                </div>
            </div>
            <div class="col-md-6 col-lg-5">
                <div class="portfolio-text">
                    <h6><span>UI/UX Product Design</span></h6>
                    <h4>ITS Infinity Application Management System</h4>
                    <p>This design was developed for an online application system to assist students in applying to universities. The primary objective was to address the issue of "dirty data." By integrating psychological principles and incorporating targeted questions, we enhanced data accuracy and streamlined the application process. Additionally, the system is optimized for mobile use and designed to be data-efficient, ensuring accessibility in areas with limited network coverage</p>
                </div>
            </div>
        </div>
        <div class="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
            <div class="col-md-6 col-lg-5">
                <div class="portfolio-text">
                    <h6><span>UI/UX Product Design</span></h6>
                    <h4>ITS Infinity Selections Management System</h4>
                    <p>This design complements the Application system. The Selections system aggregates all submitted applications, aiding the institution in identifying top-performing candidates through analytical dashboards based on specific questions asked during the application process. The system aims to provide the admissions office with a comprehensive view of each applicant and to streamline and automate the institute's admissions process.</p>
                </div>
            </div>
            <div class="col-md-6 col-lg-5">
                <div class="portfolio-img">
                    <img src={ require('../assets/images/Portfolio_ITS_Infinity_Selections.png')} alt="ITS_Infinity_Selections" />
                </div>
            </div>
        </div>
        <div class="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
            <div class="col-md-6 col-lg-5">
                <div class="portfolio-img">
                    <img src={ require('../assets/images/Portfolio_ITS_Infinity_Asset_Scanner.png')} alt="ITS_Infinity_Asset_Scanner" />
                </div>
            </div>
            <div class="col-md-6 col-lg-5">
                <div class="portfolio-text">
                    <h6><span>UI/UX Product Design</span></h6>
                    <h4>ITS Infinity Asset Management Scanner</h4>
                    <p>
                    Many institutions still manage their assets using pen and paper, leading to frequent issues with data accuracy. The Asset Management Scanner app was designed to address this by providing an easy and cost-effective method for scanning and logging room-associated assets directly from a smartphone. In addition to asset management, the app collects analytical data on asset condition and location, tracking whether assets have moved offsite or been reported stolen. This data is consolidated into a dashboard for the procurement team to monitor, facilitating improved budgeting, allocation, and replacement of assets.</p>
                </div>
            </div>
        </div>
    </div>
</section>

    )
}