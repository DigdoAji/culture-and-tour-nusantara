import Swal from 'sweetalert2';
import CTNAPISource from '../../global/API-CTNsource';
import { setInputDateToday } from '../../utils/set-input-today';

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
                <input type="date" class="form-control" id="inputDateArticle" placeholder="Date" />
                <label for="inputDateArticle">Date</label>
              </div>
              <div class="form-floating mb-4">
                <select class="form-select" id="inputTagsArticle" aria-label="Selecting Categories Article">
                  <option selected disabled>Select Categories</option>
                  <option value="Tourism">Tourism</option>
                  <option value="Culture">Culture</option>
                  <option value="Tourism & Culture">Tourism & Culture</option>
                </select>
                <label for="inputTagsArticle">Categories</label>
              </div>
              <div class="form-floating mb-3" style="padding: 10px 0 20px 0;">
                  <input type="url" class="form-control" id="inputImageArticle" placeholder="Image" />
                  <label for="inputImageArticle">Image (Insert Direct Link Image)</label>
                  <p class="size-text-sm ps-2 pt-2 mb-0">Convert image to direct link Url with <a href="https://postimages.org/" class="color-postimages linkhov-deco fw-bold" target="_blank">postimages</a></p>
              </div> 
              <div class="form-floating mb-4">
                <textarea class="form-control description-textarea" id="inputDescriptionArticle" placeholder="Description" ></textarea>
                <label for="inputDescriptionArticle">Description</label>
              </div>
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-center my-2 pt-1">
                <button type="submit" id="submitArticle" class="btn btn-green fs-5 px-5 fw-bold my-2 my-sm-0 me-sm-3" tabindex="-1">Submit</button>
                <button type="button" id="cancelArticle" class="btn btn-danger fs-5 px-5 fw-bold" tabindex="-1">Cancel</button>
              </div>
          </form>
        </div>
    </section>
    `;
  },

  async afterRender() {
    const submitArticle = document.querySelector('#submitArticle');
    const cancelArticle = document.querySelector('#cancelArticle');
    const inputHeadineArticle = document.querySelector('#inputHeadineArticle');
    const inputPublisherName = document.querySelector('#inputPublisherName');
    const inputDateArticle = document.querySelector('#inputDateArticle');
    const inputTagsArticle = document.querySelector('#inputTagsArticle');
    const inputImageArticle = document.querySelector('#inputImageArticle');
    const inputDescriptionArticle = document.querySelector('#inputDescriptionArticle');

    setInputDateToday(inputDateArticle);

    submitArticle.addEventListener('click', async (event) => {
      event.preventDefault();
      if (!inputHeadineArticle.value || !inputDescriptionArticle.value || !inputImageArticle.value
        || !inputPublisherName.value || !inputDateArticle.value || !inputTagsArticle.value) {
        Swal.fire({
          icon: 'error',
          title: 'Your input still empty',
          text: 'Please fill the empty input form!',
        });
      } else if (inputTagsArticle.value === 'Select Categories') {
        Swal.fire({
          icon: 'error',
          title: 'Input categories not selected',
          text: 'Please select categories of article!',
        });
      } else {
        const dataArticle = {
          name: inputHeadineArticle.value,
          description: inputDescriptionArticle.value,
          pictureId: inputImageArticle.value,
          publisherName: inputPublisherName.value,
          publishDate: inputDateArticle.value,
          categories: inputTagsArticle.value,
        };
        await CTNAPISource.insertArticle(dataArticle);
        Swal.fire({
          icon: 'success',
          title: 'New Article have been added',
        });
        window.location.href = '#/content-article';
        window.scrollTo(0, 0);
      }
    });

    cancelArticle.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = '#/content-article';
      window.scrollTo(0, 0);
    });
  },
};

export default AddArticle;
