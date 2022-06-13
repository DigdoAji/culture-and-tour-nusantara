const createFormUpdateArticleTemplate = (detailArticle) => `
    <div class="container mt-5">
        <h2 class="text-center fw-bold pt-3 pb-1 mt-1">Form Edit Article</h2>
        <form method="POST" class="color-black mx-2 my-5 mx-sm-0 mx-md-5">
              <div class="form-floating mb-4">
                <input type="text" class="form-control" id="editHeadineArticle" value="${detailArticle.name}" placeholder="Headline" />
                <label for="editHeadlineArticle">Headline</label>
              </div>
              <div class="form-floating mb-4">
                <input type="text" class="form-control" id="editPublisherName" value="${detailArticle.publisherName}"  placeholder="Publisher" />
                <label for="editPublisherName">Name Publisher</label>
              </div>
              <div class="form-floating mb-4">
                <input type="text" class="form-control" id="editDateArticle" value="${detailArticle.publishDate}" placeholder="Date" />
                <label for="editDateArticle">Date</label>
              </div>
              <div class="form-floating mb-4">
                <input type="text" class="form-control" id="editTagsArticle" value="${detailArticle.categories}" placeholder="Tags" />
                <label for="editTagsArticle">Categories</label>
                </div>
              <div class="form-floating mb-4" style="padding: 10px 0 20px 0;">
                <input type="url" class="form-control" id="editImageArticle" value="${detailArticle.pictureId}" placeholder="Image" />
                <label for="editImageArticle">Image (Insert Direct Link Image)</label>
              </div> 
              <div class="form-floating mb-4">
                <textarea class="form-control comment-textarea" id="editDescriptionArticle" placeholder="Description" >${detailArticle.description}</textarea>
                <label for="editDescriptionArticle">Description</label>
              </div>
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-center my-2 pt-1">
                <button type="submit" id="submitArticle" class="btn btn-green fs-5 px-5 fw-bold me-sm-3" tabindex="-1">Submit</button>
                <a href="${`#/detail-article/${detailArticle.id}`}"><button type="button" class="btn btn-danger fs-5 px-5 fw-bold" tabindex="-1">Cancel</button></a> 
              </div>
        </form>
    </div>
`;

const createFormUpdateEventTemplate = (detailEvent) => `
  <div class="container mt-5">
    <h2 class="text-center fw-bold pt-3 pb-1 mt-1">Form Edit Event</h2>
      <form class="color-black mx-2 my-5 mx-sm-0 mx-md-5">
          <div class="form-floating mb-4">
            <input type="text" class="form-control" id="editNameEvent" value="${detailEvent.name}" placeholder="Name" />
            <label for="editNameEvent">Name</label>
          </div>
          <div class="form-floating mb-4">
            <input type="text" class="form-control" id="editLocationEvent" value="${detailEvent.location}" placeholder="Location" />
            <label for="editLocationEvent">Location</label>
          </div>
          <div class="form-floating mb-4">
            <input type="text" class="form-control" id="editDateEvent" value="${detailEvent.date}" placeholder="Date" />
            <label for="editDateEvent">Date</label>
          </div>
          <div class="form-floating mb-4">
            <input type="text" class="form-control" id="editTimeEvent" value="${detailEvent.time}" placeholder="Time" />
            <label for="editTimeEvent">Time</label>
          </div>
          <div class="form-floating mb-4">
            <input type="text" class="form-control" id="editTagsEvent" value="${detailEvent.categories}" placeholder="Tags" />
            <label for="editTagsEvent">Categories</label>
          </div>
          <div class="form-floating mb-4" style="padding: 10px 0 20px 0;">
            <input type="url" class="form-control" id="editImageEvent" value="${detailEvent.pictureId}" placeholder="Image" />
            <label for="editImageEvent">Image (Insert Direct Link Image)</label>
          </div> 
          <div class="form-floating mb-4">
            <textarea class="form-control comment-textarea" id="editDescriptionEvent" placeholder="Description" >${detailEvent.description}</textarea>
            <label for="editDescriptionEvent">Description</label>
          </div>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center my-2 pt-1">
              <button id="submitEvent" type="submit" class="btn btn-green fs-5 px-5 fw-bold me-sm-3" tabindex="-1">Submit</button>
              <a href="${`#/detail-event/${detailEvent.id}`}"><button type="button" class="btn btn-danger fs-5 px-5 fw-bold" tabindex="-1">Cancel</button></a>    
          </div>
      </form>
  </div>
`;

export {
  createFormUpdateArticleTemplate,
  createFormUpdateEventTemplate,
};
