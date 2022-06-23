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
                <input type="date" class="form-control" id="editDateArticle" value="${detailArticle.publishDate}" placeholder="Date" />
                <label for="editDateArticle">Date</label>
              </div>
              <div class="form-floating mb-4">
                <select class="form-select" id="editTagsArticle" aria-label="Selecting Categories Article">
                  <option selected disabled>${detailArticle.categories}</option>
                  <option value="Tourism">Tourism</option>
                  <option value="Culture">Culture</option>
                  <option value="Tourism & Culture">Tourism & Culture</option>
                </select>
                <label for="editTagsArticle">Categories</label>
              </div>
              <div class="form-floating mb-3" style="padding: 10px 0 20px 0;">
                <input type="url" class="form-control" id="editImageArticle" value="${detailArticle.pictureId}" placeholder="Image" />
                <label for="editImageArticle">Image (Insert Direct Link Image)</label>
                <p class="size-text-sm ps-2 pt-2 mb-0">Convert image to direct link Url with <a href="https://postimages.org/" class="color-postimages linkhov-deco fw-bold" target="_blank">postimages</a></p>
              </div> 
              <div class="form-floating mb-4">
                <textarea class="form-control description-textarea" id="editDescriptionArticle" placeholder="Description" >${detailArticle.description}</textarea>
                <label for="editDescriptionArticle">Description</label>
              </div>
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-center my-2 pt-1">
                <button type="submit" id="submitArticle" class="btn btn-green fs-5 px-5 fw-bold my-2 my-sm-0 me-sm-3" tabindex="-1">Submit</button>
                <button type="button" id="cancelArticle" class="btn btn-danger fs-5 px-5 fw-bold" tabindex="-1">Cancel</button>
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
            <input type="date" class="form-control" id="editDateEvent" value="${detailEvent.date}" placeholder="Date" />
            <label for="editDateEvent">Date</label>
          </div>
          <div class="row g-2">
            <div class="col">
              <div class="form-floating mb-4">
                <input type="time" class="form-control" id="editTimeEvent" value="${detailEvent.time}" placeholder="Time" />
                <label for="editTimeEvent">Time</label>
              </div>
            </div>
            <div class="col">
              <div class="form-floating mb-4">
                <select class="form-select" id="editTimezoneEvent" aria-label="Selecting Indonesian Timezone">
                  <option selected disabled>${detailEvent.timezone}</option>
                  <option value="WIB">WIB</option>
                  <option value="WITA">WITA</option>
                  <option value="WIT">WIT</option>
                </select>
                <label for="editTimezoneEvent">Timezone</label>
              </div>
            </div>
          </div>
          <div class="form-floating mb-4">
            <select class="form-select" id="editTagsEvent" aria-label="Selecting Categories Event">
              <option selected disabled>${detailEvent.categories}</option>
              <option value="Travel & Tour">Travel & Tour</option>
              <option value="Culture Show">Culture Show</option>
              <option value="Competition">Competition</option>
              <option value="Festival">Festival</option>
            </select>
            <label for="editTagsEvent">Categories</label>
          </div>
          <div class="form-floating mb-3" style="padding: 10px 0 20px 0;">
            <input type="url" class="form-control" id="editImageEvent" value="${detailEvent.pictureId}" placeholder="Image" />
            <label for="editImageEvent">Image (Insert Direct Link Image)</label>
            <p class="size-text-sm ps-2 pt-2 mb-0">Convert image to direct link Url with <a href="https://postimages.org/" class="color-postimages linkhov-deco fw-bold" target="_blank">postimages</a></p>
          </div>
          <div class="form-floating mb-4">
            <textarea class="form-control description-textarea" id="editDescriptionEvent" placeholder="Description" >${detailEvent.description}</textarea>
            <label for="editDescriptionEvent">Description</label>
          </div>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center my-2 pt-1">
              <button id="submitEvent" type="submit" class="btn btn-green fs-5 px-5 fw-bold my-2 my-sm-0 me-sm-3" tabindex="-1">Submit</button>
              <button id="cancelEvent" type="button" class="btn btn-danger fs-5 px-5 fw-bold" tabindex="-1">Cancel</button></a>
          </div>
      </form>
  </div>
`;

export {
  createFormUpdateArticleTemplate,
  createFormUpdateEventTemplate,
};
