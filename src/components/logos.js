export default function AppLogo() {
  return (
    <section class="worklogo">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-3 py-4">
            <div>
              <img
                class="imglogo"
                src={require("../assets/images/the_curve-logo.png")}
                alt=" logo"
              />
            </div>
          </div>
          <div class="col-lg-3 py-4">
            <div>
              <img
                class="imglogo"
                src={require("../assets/images/the_sun-logo.png")}
                alt=" logo"
              />
            </div>
          </div>
          <div class="col-lg-3 py-4">
            <div>
              <img
                class="imglogo"
                src={require("../assets/images/kora-logo.png")}
                alt=" logo"
              />
            </div>
          </div>
          <div class="col-lg-3 py-4">
            <div>
              <img
                class="imglogo"
                src={require("../assets/images/AdaptIT-Logo.png")}
                alt=" logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
