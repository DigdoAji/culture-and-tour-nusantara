const Register = {
  async render() {
    return `
      <section id="register-account">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-9 col-lg-7 pt-2 mx-auto">
              <div class="card border-0 my-3">
                <div class="card-body py-4 px-5">
                    <div class="d-flex justify-content-center mt-0 mb-4">
                        <img class="img-fluid" 
                          src="images/CTN logo - with title.png" 
                          alt="logo Culture and Tour Nusantara" 
                          width="235" height="53"
                        >
                    </div>
                    <h3 class="card-title text-center mb-4 fw-bold">Register</h3>
                  <form class="color-black my-5 pb-3">
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="inputFullName" placeholder="Full Name" required>
                      <label for="inputFullName">Full Name</label>
                    </div>
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="inputUsername" placeholder="Username" required>
                    <label for="inputUsername">Username</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" required>
                    <label for="inputPassword">Password</label>
                  </div>
                  <div class="form-check mb-4">
                    <input class="form-check-input" type="checkbox" value="" id="checkRemember">
                    <label class="form-check-label" for="checkRemember">Remember Me</label>
                  </div>
                  <div class="d-grid">
                    <button class="btn btn-green fs-5 fw-bold py-2" type="submit" tabindex="-1">Register</button>
                  </div>
                  <hr class="my-4">
                  <div class="d-grid">
                    <p class="text-center">Already have an account? <a href="#/login" class="linkhov-deco color-ctn fw-bold">Log In Now</a></p>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Register;
