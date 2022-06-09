const EditEvent = {
    async render() {
    return `
    <section id="update-event">
        <div class="container mt-5">
          <h2 class="text-center fw-bold pt-3 pb-1 mt-1">Form Edit Event</h2>
          <form class="color-black mx-2 my-5 mx-sm-0 mx-md-5">
              <div class="form-floating mb-4">
                <input type="text" class="form-control" id="editNameEvent" placeholder="Name" />
                <label for="editNameEvent">Name</label>
              </div>
              <div class="form-floating mb-4">
                <input type="text" class="form-control" id="editLocationEvent" placeholder="Location" />
                <label for="editLocationEvent">Location</label>
              </div>
              <div class="form-floating mb-4">
                <input type="text" class="form-control" id="editDateEvent" placeholder="Date" />
                <label for="editDateEvent">Date</label>
              </div>
              <div class="form-floating mb-4">
                <input type="text" class="form-control" id="editTimeEvent" placeholder="Time" />
                <label for="editTimeEvent">Time</label>
              </div>
              <div class="form-floating mb-4">
                <input type="text" class="form-control" id="editTagsEvent" placeholder="Tags" />
                <label for="editTagsEvent">Categories</label>
              </div>
              <div class="form-floating mb-4" style="padding: 10px 0 20px 0;">
                <input type="url" class="form-control" id="editImageEvent" placeholder="Image" />
                <label for="editImageEvent">Image (Insert Direct Link Image)</label>
              </div> 
              <div class="form-floating mb-4">
                <textarea class="form-control comment-textarea" id="editDescriptionEvent" placeholder="Description" ></textarea>
                <label for="editDescriptionEvent">Description</label>
              </div>
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-center my-2 pt-1">
                <button id="submitEvent" type="submit" class="btn btn-green fs-5 px-5 fw-bold me-sm-3" tabindex="-1">Submit</button>
                <a href="#/content-event"><button type="button" class="btn btn-danger fs-5 px-5 fw-bold" tabindex="-1">Cancel</button></a>    
              </div>
          </form>
        </div>
      </section>
    `;
    },
  
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
  
  export default EditEvent;