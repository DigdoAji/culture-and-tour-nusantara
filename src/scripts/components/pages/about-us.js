class AboutUs extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="hero-about">
        <div class="container-fluid col-11 px-4">
            <div class="row d-flex align-items-center g-5 mt-3">
              <div class="col-10 col-sm-8 col-lg-6">
                <img src="images/CTN logo.png" 
                  class="d-block mx-lg-auto img-fluid" 
                  alt="logo Culture and Tour Nusantara" 
                  width="320" height="320"
                >
              </div>
              <div class="col-lg-6">
                <h1 class="display-6 fw-bold lh-1 mb-3">About us</h1>
                <p class="lead"><strong class="fw-bold color-ctn">Culture and Tour Nusantara (CTN)</strong> is a website-based platform as a medium of 
                  information about tourism and culture for local and foreign tourists who want to visit every 
                  region in Indonesia. In addition, our platform also provides information about 
                  activities/events/competitions related to tourism and regional culture in Indonesia</p>
              </div>
            </div>
          </div>
      </section>

      <section id="hero-why">
        <div class="container-fluid col-11 px-4">
            <div class="row flex-lg-row-reverse align-items-center g-5 mt-5 mb-2 pb-4">
              <div class="col-10 col-sm-8 col-lg-6">
                <img src="images/question-people.png" 
                  class="d-block mx-lg-auto img-fluid" 
                  alt="two people having conversation for question" 
                  width="360px" height="360px"
                >
              </div>
              <div class="col-lg-6">
                <h1 class="display-6 fw-bold lh-1 mb-3">Why CTN?</h1>
                <p class="lead">Tourism and local culture are an attraction for the general public to foreign countries. 
                  However, there are tourism and culture that are rarely known and even threatened with extinction due 
                  to the times and lack of information dissemination. We thought why don't we introduce the diverse and 
                  unique archipelago tourism and culture. With this, our team created a website called 
                  <strong class="fw-bold color-ctn">Culture and Tour Nusantara (CTN)</strong> to provide complete information and activities/event on tourism and 
                  regional culture of Indonesia.</p>
              </div>
            </div>
          </div>
      </section>

      <section id="Team">
        <div class="container-fluid col-11 px-4 py-2 mt-5 mb-2">
            <div class="text-center">
              <h2>Our Team</h2>
              <p class="lead">Who create this Culture and Tour Nusantara (CTN) Website?</p>
            </div>
        </div>

        <div class="container-fluid col-11 px-4 py-3 mb-4">
          <div class="row text-center">
            
            <div class="col-xl-3 col-md-6 mb-5 px-0 px-sm-4 px-md-3 px-xl-2">
              <div class="card bg-white border border-3 rounded-card shadow-lg py-5 px-4">
                <img src="images/foto-profil-digdo.jpg" 
                  class="img-fluid rounded-circle border border-3 mx-auto mb-3 shadow-sm" 
                  alt="Digdo Profile" 
                  width="130px" height="130px"
                >
                <div class="card-body">
                  <h5 class="card-title color-ctn fw-bold mb-0">Digdo Aji Asrowi</h2>
                  <p class="card-text medium text-lead pt-2 mb-1">Web Developer</p>
                </div>
                <div class="d-flex justify-content-center mt-4 mb-2">
                  <a href="https://wa.me/6281350913264" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-whatsapp"></i></button></a>
                  <a href="https://www.instagram.com/digdoaji_02/" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-instagram"></i></button></a>
                  <a href="https://www.linkedin.com/in/digdoajiasrowi/" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-linkedin-square"></i></button></a>
                  <a href="https://github.com/DigdoAji" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-github"></i></button></a>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-5 px-0 px-sm-4 px-md-3 px-xl-2">
              <div class="card bg-white border border-3 rounded-card shadow-lg py-5 px-4">
                <img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" 
                  class="img-fluid rounded-circle border border-3 mx-auto mb-3 shadow-sm" 
                  alt="Raichan Profile" 
                  width="130px" height="130px"
                >
                <div class="card-body">
                  <h5 class="card-title color-ctn fw-bold mb-0">Raichan Alghafari</h2>
                  <p class="card-text medium text-lead pt-2 mb-1">Web Developer</p>
                </div>
                <div class="d-flex justify-content-center mt-4 mb-2">
                  <a href="https://wa.me/6287870604041" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-whatsapp"></i></button></a>
                  <a href="#" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-instagram"></i></button></a>
                  <a href="https://www.linkedin.com/in/raichan-alghafari-9b5a1a217/" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-linkedin-square"></i></button></a>
                  <a href="https://github.com/Raichan4" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-github"></i></button></a>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-5 px-0 px-sm-4 px-md-3 px-xl-2">
              <div class="card bg-white border border-3 rounded-card shadow-lg py-5 px-4">
                <img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" 
                  class="img-fluid rounded-circle border border-3 mx-auto mb-3 shadow-sm" 
                  alt="Taufik Profile" 
                  width="130px" height="130px"
                >
                <div class="card-body">
                  <h5 class="card-title color-ctn fw-bold mb-0">Muh. Taufik Hidayat</h2>
                  <p class="card-text medium text-lead pt-2 mb-1">Web Developer</p>
                </div>
                <div class="d-flex justify-content-center mt-4 mb-2">
                  <a href="https://wa.me/6281354979486" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-whatsapp"></i></button></a>
                  <a href="https://www.instagram.com/muhtaufikhidayat_/" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-instagram"></i></button></a>
                  <a href="https://www.linkedin.com/in/muh-taufik-hidayat-536029209/" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-linkedin-square"></i></button></a>
                  <a href="https://github.com/MuhTaufikHidayat" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-github"></i></button></a>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-5 px-0 px-sm-4 px-md-3 px-xl-2">
              <div class="card bg-white border border-3 rounded-card shadow-lg py-5 px-4">
                <img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" 
                  class="img-fluid rounded-circle border border-3 mx-auto mb-3 shadow-sm" 
                  alt="Saprini Profile" 
                  width="130px" height="130px"
                >
                <div class="card-body">
                  <h5 class="card-title color-ctn fw-bold mb-0">Saprini Khairunnisa</h2>
                  <p class="card-text medium text-lead pt-2 mb-1">Web Developer</p>
                </div>
                <div class="d-flex justify-content-center mt-4 mb-2">
                  <a href="https://wa.me/6283129309577" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-whatsapp"></i></button></a>
                  <a href="https://www.instagram.com/saprini_khairunnisa/" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-instagram"></i></button></a>
                  <a href="https://www.linkedin.com/in/saprini-khairunnisa-830b291a7/" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-linkedin-square"></i></button></a>
                  <a href="https://github.com/saprinikhairunnisa" target="_blank" class="px-2"><button type="button" class="btn btn-outline-green icons-size" tabindex="-1"><i class="fa fa-github"></i></button></a>
                </div>
              </div>
            </div>\
            
          </div>
        </div>
      </section>
       `;
  }
}
customElements.define('about-us', AboutUs);
