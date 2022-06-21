const ListAccount = {
  async render() {
    return `
    <section id="list-account">
        <div class="container mt-3">
          <h2 class="text-center fw-bold pt-3 pb-2 mt-1 mb-4">List User/Admin Account</h2>
          <div class="row mt-2 mb-5">
            <div class="col-md-12">
              <div class="table-wrap">
                <table class="table">
                  <thead class="thead-primary">
                    <tr>
                      <th>ID</th>
                      <th>Full Name</th>
                      <th>Username</th>
                      <th>Role Account</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="scope">1</th>
                      <td>Digdo Aji Asrowi</td>
                      <td>digdo_112</td>
                      <td>Admin</td>
                      <td class="">
                        <button class="btn btn-primary fw-bold px-3">Update</button>
                        <button class="btn btn-danger fw-bold px-3">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="scope">2</th>
                      <td>Digdo Aji Asrowi</td>
                      <td>digdo_112</td>
                      <td>Admin</td>
                      <td class="">
                        <button class="btn btn-primary fw-bold px-3">Update</button>
                        <button class="btn btn-danger fw-bold px-3">Delete</button>
                      </td>
                    </tr>
                    <!--
                    <tr>
                      <th scope="row" class="scope border-bottom-0">.me</th>
                      <td class="border-bottom-0">1 Year</td>
                      <td class="border-bottom-0">$45.00</td>
                      <td class="border-bottom-0">$5.00</td>
                      <td class="border-bottom-0">$5.00</td>
                      <td class="border-bottom-0"><a href="#" class="btn btn-primary">Sign Up</a></td>
                    </tr>
                    -->
                  </tbody>
                </table>
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

export default ListAccount;
