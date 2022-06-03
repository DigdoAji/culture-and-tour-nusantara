class CardContentArticle extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="article">
            <div class="container-fluid col-11 px-4 pt-3 pb-2 mt-4 mb-2 mb-md-4">
                <div class="row">
                    <div class="col-md-8">
                        <h2>Article</h2>
                        <p class="lead">Article about culture and tourism of Nusantara</p>
                    </div>
                    <div class="col-md-4 my-auto d-flex justify-content-md-end">
                        <a href="#"><button type="button" class="btn btn-green px-3 py-2" tabindex="-1">Create New Article</button></a>
                    </div>
                </div>
            </div>

            <div class="container-fluid col-11 px-4 py-3 mb-4">
              <div class="row">

                <div class="col-md-6 col-lg-4 col-xl-3 mb-5">
                  <div class="card shadow-lg rounded-card h-100">
                    <img src="images/mountain-hero-1.jpg" alt="...." class="card-img-top img-fluid border border-2 img-rounded-card" width="600px" height="400px">
                    <div class="card-body px-4">
                      <p class="card-text fw-normal size-text-sm mb-0"><i class="fa fa-calendar me-1"></i>20 Mei 2022 | <i class="fa fa-user me-1"></i>Admin Karin</p>
                      <p class="card-text fw-normal size-text-sm mb-2"><i class="fa fa-tags me-1"></i>Tourism</p>
                      <h5 class="card-title text-center fw-bold color-ctn py-2">Bromo Mountain</h5>
                      <p class="card-text text-limit mt-2 mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident alias, voluptates officiis hic incidunt numquam deleniti doloribus molestiae rem, maiores, quam vel cupiditate id? Sunt iste delectus ipsa omnis ea. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt at voluptatibus ad commodi, fuga dignissimos? Quidem totam tempora fugiat repudiandae in eius possimus, ea cum. Nostrum quia nihil nisi enim.</p>
                    </div>
                    <div class="d-flex justify-content-center mt-2 mb-4">
                      <a href="#"><button type="button" class="btn btn-outline-green px-3 py-2" tabindex="-1">Read More</button></a>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-4 col-xl-3 mb-5">
                  <div class="card shadow-lg rounded-card h-100">
                    <img src="images/mountain-hero-1.jpg" alt="...." class="card-img-top img-fluid border border-2 img-rounded-card" width="600px" height="400px">
                    <div class="card-body px-4">
                      <p class="card-text fw-normal size-text-sm mb-0"><i class="fa fa-calendar me-1"></i>20 Mei 2022 | <i class="fa fa-user me-1"></i>Admin Karin</p>
                      <p class="card-text fw-normal size-text-sm mb-2"><i class="fa fa-tags me-1"></i>Tourism</p>
                      <h5 class="card-title text-center fw-bold color-ctn py-2">Bromo Mountain</h5>
                      <p class="card-text text-limit mt-2 mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident alias, voluptates officiis hic incidunt numquam deleniti doloribus molestiae rem, maiores, quam vel cupiditate id? Sunt iste delectus ipsa omnis ea. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt at voluptatibus ad commodi, fuga dignissimos? Quidem totam tempora fugiat repudiandae in eius possimus, ea cum. Nostrum quia nihil nisi enim.</p>
                    </div>
                    <div class="d-flex justify-content-center mt-2 mb-4">
                      <a href="#"><button type="button" class="btn btn-outline-green px-3 py-2" tabindex="-1">Read More</button></a>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-4 col-xl-3 mb-5">
                  <div class="card shadow-lg rounded-card h-100">
                    <img src="images/mountain-hero-1.jpg" alt="...." class="card-img-top img-fluid border border-2 img-rounded-card" width="600px" height="400px">
                    <div class="card-body px-4">
                      <p class="card-text fw-normal size-text-sm mb-0"><i class="fa fa-calendar me-1"></i>20 Mei 2022 | <i class="fa fa-user me-1"></i>Admin Karin</p>
                      <p class="card-text fw-normal size-text-sm mb-2"><i class="fa fa-tags me-1"></i>Tourism</p>
                      <h5 class="card-title text-center fw-bold color-ctn py-2">Bromo Mountain</h5>
                      <p class="card-text text-limit mt-2 mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident alias, voluptates officiis hic incidunt numquam deleniti doloribus molestiae rem, maiores, quam vel cupiditate id? Sunt iste delectus ipsa omnis ea. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt at voluptatibus ad commodi, fuga dignissimos? Quidem totam tempora fugiat repudiandae in eius possimus, ea cum. Nostrum quia nihil nisi enim.</p>
                    </div>
                    <div class="d-flex justify-content-center mt-2 mb-4">
                      <a href="#"><button type="button" class="btn btn-outline-green px-3 py-2" tabindex="-1">Read More</button></a>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-4 col-xl-3 mb-5">
                  <div class="card shadow-lg rounded-card h-100">
                    <img src="images/mountain-hero-2.jpg" alt="...." class="card-img-top img-fluid border border-2 img-rounded-card" width="600px" height="400px">
                    <div class="card-body px-4">
                      <p class="card-text fw-normal size-text-sm mb-0"><i class="fa fa-calendar me-1"></i>20 Mei 2022 | <i class="fa fa-user me-1"></i>Admin Karin</p>
                      <p class="card-text fw-normal size-text-sm mb-2"><i class="fa fa-tags me-1"></i>Tourism</p>
                      <h5 class="card-title text-center fw-bold color-ctn py-2">Bromo Mountain</h5>
                      <p class="card-text text-limit mt-2 mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident alias, voluptates officiis hic incidunt numquam deleniti doloribus molestiae rem, maiores, quam vel cupiditate id? Sunt iste delectus ipsa omnis ea. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt at voluptatibus ad commodi, fuga dignissimos? Quidem totam tempora fugiat repudiandae in eius possimus, ea cum. Nostrum quia nihil nisi enim.</p>
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
customElements.define('card-contentarticle', CardContentArticle);
