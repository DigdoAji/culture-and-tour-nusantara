class CardContentEvent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="event">
            <div class="container-fluid col-11 px-4 pt-3 pb-2 mt-4 mb-2 mb-md-4">
                <div class="row">
                    <div class="col-md-8">
                        <h2>Event</h2>
                        <p class="lead">All activities/event/competitions about culture and tourism of Nusantara</p>
                    </div>
                    <div class="col-md-4 my-auto d-flex justify-content-md-end">
                        <a href="#"><button type="button" class="btn btn-green px-3 py-2" tabindex="-1">Create New Event</button></a>
                    </div>
                </div>
            </div>

            <div class="container-fluid col-11 px-4 py-3 mb-4">
              <div class="row">

                <div class="col-md-6 col-lg-4 col-xl-3 mb-5">
                  <div class="card shadow-lg rounded-card h-100">
                    <img src="images/lomba-jukung-tradisonal-banjar.png" alt="...." class="card-img-top img-fluid border border-2 img-rounded-card" width="600px" height="700px">
                    <div class="card-body px-4">
                      <h5 class="card-title text-center fw-bold color-ctn py-2">Banjar Traditional Rowboat Competition</h5>
                      <p class="card-text fw-normal mb-0"><i class="fa fa-map-marker me-1"></i>Martapura, South Borneo</p>
                      <p class="card-text fw-normal mb-0"><i class="fa fa-calendar me-1"></i>15 May 2022</p>
                      <p class="card-text fw-normal mb-0"><i class="fa fa-clock-o me-1"></i>08.00 WITA - 16.00 WITA</p>
                      <p class="card-text fw-normal mb-0"><i class="fa fa-tags me-1"></i>Culture, Tourism</p>
                    </div>
                    <div class="d-flex justify-content-center mt-2 mb-4">
                      <a href="#"><button type="button" class="btn btn-outline-green px-3 py-2" tabindex="-1">Read More</button></a>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-4 col-xl-3 mb-5">
                  <div class="card shadow-lg rounded-card h-100">
                    <img src="images/hari-tari-dunia-toraja.jpeg" alt="...." class="card-img-top img-fluid border border-2 img-rounded-card" width="600px" height="700px">
                    <div class="card-body px-4">
                      <h5 class="card-title text-center fw-bold color-ctn py-2">World Dance Day 2020 "Toraya Ma'Gellu"</h5>
                      <p class="card-text fw-normal mb-0"><i class="fa fa-map-marker me-1"></i>Buntu Pune, South Celebes</p>
                      <p class="card-text fw-normal mb-0"><i class="fa fa-calendar me-1"></i>26 April 2022 - 29 April 2022</p>
                      <p class="card-text fw-normal mb-0"><i class="fa fa-clock-o me-1"></i>08.00 WITA - 16.00 WITA</p>
                      <p class="card-text fw-normal mb-0"><i class="fa fa-tags me-1"></i>Culture</p>
                    </div>
                    <div class="d-flex justify-content-center mt-2 mb-4">
                      <a href="#"><button type="button" class="btn btn-outline-green px-3 py-2" tabindex="-1">Read More</button></a>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-4 col-xl-3 mb-5">
                  <div class="card shadow-lg rounded-card h-100">
                    <img src="images/hari-tari-dunia-toraja.jpeg" alt="...." class="card-img-top img-fluid border border-2 img-rounded-card" width="600px" height="700px">
                    <div class="card-body px-4">
                      <h5 class="card-title text-center fw-bold color-ctn py-2">World Dance Day 2020 "Toraya Ma'Gellu"</h5>
                      <p class="card-text fw-normal mb-0"><i class="fa fa-map-marker me-1"></i>Buntu Pune, South Celebes</p>
                      <p class="card-text fw-normal mb-0"><i class="fa fa-calendar me-1"></i>26 April 2022 - 29 April 2022</p>
                      <p class="card-text fw-normal mb-0"><i class="fa fa-clock-o me-1"></i>08.00 WITA - 16.00 WITA</p>
                      <p class="card-text fw-normal mb-0"><i class="fa fa-tags me-1"></i>Culture</p>
                    </div>
                    <div class="d-flex justify-content-center mt-2 mb-4">
                      <a href="#"><button type="button" class="btn btn-outline-green px-3 py-2" tabindex="-1">Read More</button></a>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-4 col-xl-3 mb-5">
                  <div class="card shadow-lg rounded-card h-100">
                    <img src="images/hari-tari-dunia-toraja.jpeg" alt="...." class="card-img-top img-fluid border border-2 img-rounded-card" width="600px" height="700px">
                    <div class="card-body px-4">
                      <h5 class="card-title text-center fw-bold color-ctn py-2">World Dance Day 2020 "Toraya Ma'Gellu"</h5>
                      <p class="card-text fw-normal mb-0"><i class="fa fa-map-marker me-1"></i>Buntu Pune, South Celebes</p>
                      <p class="card-text fw-normal mb-0"><i class="fa fa-calendar me-1"></i>26 April 2022 - 29 April 2022</p>
                      <p class="card-text fw-normal mb-0"><i class="fa fa-clock-o me-1"></i>08.00 WITA - 16.00 WITA</p>
                      <p class="card-text fw-normal mb-0"><i class="fa fa-tags me-1"></i>Culture</p>
                    </div>
                    <div class="d-flex justify-content-center mt-2 mb-4">
                      <a href="#"><button type="button" class="btn btn-outline-green px-3 py-2" tabindex="-1">Read More</button></a>
                    </div>
                  </div>
                </div>

              </div>
        </section>
    `;
  }
}
customElements.define('card-contentevent', CardContentEvent);
