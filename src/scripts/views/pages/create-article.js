const AddArticle = {
    async render() {
      return `
      <section id="add-article">
        <div class="container mt-5">
          <h2 class="text-center fw-bold pt-3 pb-1 mt-1">Form Create Article</h2>
          <form class="color-black mx-2 my-5 mx-sm-0 mx-md-5">
              <div class="form-floating mb-4">
                <input type="text" class="form-control" id="inputHeadineArticle" placeholder="Headline" />
                <label for="inputHeadlineArticle">Headline</label>
              </div>
              <div class="form-floating mb-4">
                <input type="text" class="form-control" id="inputPublisherName" placeholder="Publisher" />
                <label for="inputPublisherName">Name Publisher</label>
              </div>
              <div class="form-floating mb-4">
                <input type="text" class="form-control" id="inputDateArticle" placeholder="Date" />
                <label for="inputDateArticle">Date</label>
              </div>
              <div class="form-floating mb-4">
                <input type="text" class="form-control" id="inputTagsArticle" placeholder="Tags" />
                  <label for="inputTagsArticle">Categories</label>
                </div>
              <div class="form-floating mb-4" style="padding: 10px 0 20px 0;">
                  <input type="url" class="form-control" id="inputImageArticle" placeholder="Image />
                  <label for="inputImageArticle">Image (Insert Direct Link Image)</label>
              </div> 
              <div class="form-floating mb-4">
                <textarea class="form-control comment-textarea" id="inputDescriptionArticle" placeholder="Description" ></textarea>
                <label for="inputDescriptionArticle">Description</label>
              </div>
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-center my-2 pt-1">
                <button type="submit" id="submitArticle" class="btn btn-green fs-5 px-5 fw-bold me-sm-3" tabindex="-1">Submit</button>
                <a href="#/content-article"><button type="button" class="btn btn-danger fs-5 px-5 fw-bold" tabindex="-1">Cancel</button></a> 
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
  
  export default AddArticle;
  