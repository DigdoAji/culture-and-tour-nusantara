class HeroJumbotronWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section id="hero-jumbotron">
        <div id="jumbtronImageCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item hero active">
              <img
                width="100%" height="360px" 
                src="images/hero-image-bromo.jpg" 
                alt="Bromo Mountain"
              />
              <div class="hero-text pos-fix-hero">
                <h1>Bromo Mountain</h1>
                <p><i class="fa fa-map-marker me-2"></i>East Java, Indonesia</p>
              </div>
            </div>
            <div class="carousel-item hero">
              <img
                width="100%" height="360px" 
                src="images/hero-image-kecak.jpg" 
                alt="Kecak Dance"
              />
              <div class="hero-text pos-fix-hero">
                <h1>Kecak Dance</h1>
                <p><i class="fa fa-map-marker me-2"></i>Bali, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('hero-jumbotron', HeroJumbotronWeb);
