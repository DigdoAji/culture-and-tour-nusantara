const AddAccount = {
    async render() {
    return `
    <section id="add-account">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-9 col-lg-7 pt-2 mx-auto">
          <div class="card border-0 my-5">
            <div class="card-body py-4 px-1 px-md-3">
              <h1 class="card-title text-center mb-4 fw-bold">Form Create Account</h1>
              <form class="color-black my-5">
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="inputFullname" placeholder="Fullname" required>
                  <label for="inputFullname">Fullname</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="inputUsername" placeholder="Username" required>
                  <label for="inputUsername">Username</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="password" class="form-control" id="inputPassword" placeholder="Password" required>
                  <label for="inputPassword">Password</label>
                </div>
                <div class="form-check form-check-inline pt-2 pe-4 mb-4">
                  <input class="form-check-input cursor-pointer" type="radio" name="inlineRadioOptions" id="inputUserRadio" value="option1" required>
                  <label class="form-check-label cursor-pointer" for="inputUserRadio">User</label>
                </div>
                <div class="form-check form-check-inline pt-2 mb-4">
                  <input class="form-check-input cursor-pointer" type="radio" name="inlineRadioOptions" id="inputAdminRadio" value="option2" required>
                  <label class="form-check-label cursor-pointer" for="inputAdminRadio">Admin</label>
                </div>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center my-2 pt-1">
                  <button type="button" class="btn btn-green fs-5 px-5 fw-bold me-sm-3" tabindex="-1">Submit</button>
                  <a href="#"><button type="button" class="btn btn-danger fs-5 px-5 fw-bold" tabindex="-1">Cancel</button></a>   
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
  
  export default AddAccount;