class FooterWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="bg-footer-top">
        <div class="container px-0 mb-5">
          <div class="post-footer d-flex pt-5 px-4 px-md-0">
            <div class="col">
              <img class="img-fluid bi me-2 mb-3" 
                src="images/CTN logo - with title.png" 
                alt="logo Culture and Tour Nusantara" 
                width="175px" height="65px"
              >
              <p class=" text-muted">Discover Paradise of Nusantara</p>
            </div>
            
            <div class="col">
              <div class="row mt-4 mt-md-0">
                <ul class="nav flex-column">
                  <h5 class="mx-3">Navigation</h5>
                  <li class="nav-item mb-2 mx-3"><a href="/" class="nav-link p-0 text-muted"">Home</a></li>
                  <li class="nav-item mb-2 mx-3"><a href="#/content-article" class="nav-link p-0 text-muted" onclick="window.scrollTo(0, 0);">Content Article</a></li>
                  <li class="nav-item mb-2 mx-3"><a href="#/content-event" class="nav-link p-0 text-muted" onclick="window.scrollTo(0, 0);">Content Event</a></li>
                  <li class="nav-item mb-2 mx-3"><a href="#/about" class="nav-link p-0 text-muted" onclick="window.scrollTo(0, 0);">About Us</a></li>
                </ul>
              </div>
              <div class="row mt-4">
                <ul class="nav flex-column">
                  <h5 class="mx-3">Social Media</h5>
                  <li class="nav-item mb-2 mx-3"><a href="https://web.facebook.com/dicoding/" class="nav-link p-0 text-muted" target="_blank"><i class="fa fa-facebook me-1"></i>Facebook</a></li>
                  <li class="nav-item mb-2 mx-3"><a href="https://www.instagram.com/dicoding/" class="nav-link p-0 text-muted" target="_blank"><i class="fa fa-instagram me-1"></i>Instagram</a></li>
                  <li class="nav-item mb-2 mx-3"><a href="https://twitter.com/dicoding" class="nav-link p-0 text-muted" target="_blank"><i class="fa fa-twitter me-1"></i>Twitter</a></li>
                </ul>
              </div>
            </div>

            <div class="col">
              <div class="row mt-4 mt-md-0">
                <ul class="nav flex-column">
                  <h5 class="mx-3">Help Center</h5>
                  <li class="nav-item mb-2 mx-3"><p class="m-0 text-muted"><i class="fa fa-phone me-2"></i>+62 878-7060-4041 (Raichan)</p></li>
                  <li class="nav-item mb-2 mx-3"><p class="m-0 text-muted"><i class="fa fa-phone me-2"></i>+62 813-5497-9486 (Taufik)</p></li>
                  <li class="nav-item mb-2 mx-3"><p class="m-0 text-muted"><i class="fa fa-envelope me-2"></i>raichan.programmer4@gmail.com</p></li>
                  <li class="nav-item mb-2 mx-3"><p class="m-0 text-muted"><i class="fa fa-envelope me-2"></i>yahyaatmi23@gmail.com</p></li>
                </ul>
              </div>
            
              <div class="row mt-4">
                <ul class="nav flex-column">
                  <h5 class="mx-3">Address</h5>
                  <li class="nav-item mb-2 mx-3">
                    <p class="text-muted">Jl. Batik Kumeli No. 50, Bandung City, West Java, Indonesia, 40123</p>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
      <div class="bg-footer-bottom">
        <p class="text-footer py-4 my-0">Copyrights © 2022 by <span class="fw-bold color-white">Culture and Tour Nusantara (CTN)</span></p>
      </div>
     `;
  }
}
customElements.define('foot-web', FooterWeb);
