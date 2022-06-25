class HeroInterested extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="hero-interested">
        <div class="container-fluid col-11 px-4 pb-2 mb-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 my-3">
              <div class="col-10 col-sm-8 col-lg-6">
                <img 
                  src="images/people-travelling.png" 
                  class="d-block mx-lg-auto img-fluid" 
                  alt="two traveler with backpack and map" 
                  width="650px" height="300px"
                >
              </div>
              <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3">Interested to visit?</h1>
                <p class="lead">Buy flight ticket and booking place now via website <a href="https://www.booking.com/" class="color-bookingcom linkhov-deco fw-bold" target="_blank">Booking.com</a> or <a href="https://www.traveloka.com/en-id/" class="color-traveloka linkhov-deco fw-bold" target="_blank">Traveloka</a>. We will welcome you by enjoying the beauty, exotic, and uniqueness of Nusantara's Culture and Tourism</p>
              </div>
            </div>
          </div>
    </section>
      `;
  }
}
customElements.define('hero-interested', HeroInterested);
