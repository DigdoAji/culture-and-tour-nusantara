class HeroIntroWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="hero-intro">
        <div class="container-fluid col-11 px-4 pb-2 mb-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 my-3">
              <div class="col-10 col-sm-8 col-lg-6">
                <img 
                  src="images/two-traveler.png" 
                  class="d-block mx-lg-auto img-fluid" 
                  alt="two traveler with backpack and map" 
                  width="650" height="650"
                >
              </div>
              <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3">Discover Paradise of Nusantara</h1>
                <p class="lead">Indonesia is a country with thousands of islands spread from Sabang to Merauke. 
                  That's why Indonesia is also called an archipelagic country or Nusantara. Various tourist 
                  attractions and diverse cultures are the unique characteristics of each region in Indonesia. 
                  So what are you waiting for? 
                  <strong class="fw-bold color-ctn">Let's Discover Paradise of Nusantara</strong>
                </p>
              </div>
            </div>
          </div>
    </section>
    `;
  }
}
customElements.define('hero-intro', HeroIntroWeb);
