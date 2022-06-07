const AddEvent = {
    async render() {
      return `
    <section id="add-event">
        <div class="container mt-5">
          <h2 class="text-center fw-bold pt-3 pb-1 mt-1">Form Create Event</h2>
          <form class="color-black mx-2 my-5 mx-sm-0 mx-md-5">
              <div class="form-floating mb-4">
                <input type="text" class="form-control" id="inputNameEvent" placeholder="Name">
                <label for="inputNameEvent">Name</label>
              </div>
              <div class="form-floating mb-4">
                <input type="text" class="form-control" id="inputPlaceEvent" placeholder="PLace">
                <label for="inputPlaceEvent">Place</label>
              </div>
              <div class="form-floating mb-4">
                <input type="text" class="form-control" id="inputDateEvent" placeholder="Date">
                <label for="inputDateEvent">Date</label>
              </div>
              <div class="form-floating mb-4">
              <input type="text" class="form-control" id="inputTimeEvent" placeholder="Time">
                <label for="inputTimeEvent">Time</label>
              </div>
              <div class="form-floating mb-4">
                <input type="text" class="form-control" id="inputTagsEvent" placeholder="Tags">
                  <label for="inputTagsEvent">Tags</label>
              </div>
              <div class="form-floating mb-4" style="padding: 10px 0 20px 0;">
              <input type="url" class="form-control" id="inputImageEvent" placeholder="image">
              <label for="inputImageEvent">Image (Insert Direct Link Image)</label>
              </div> 
              <div class="form-floating mb-4">
                <textarea class="form-control comment-textarea" id="inputDescriptionEvent" placeholder="Description" ></textarea>
                <label for="inputDescriptionEvent">Description</label>
              </div>
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-center my-2 pt-1">
                <button type="button" class="btn btn-green fs-5 px-5 fw-bold me-sm-3" tabindex="-1">Submit</button>
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
  
  export default AddEvent;