import Swal from 'sweetalert2';
import CTNAPISource from '../../global/API-CTNsource';

const AddEvent = {
  async render() {
    return `
      <section id="add-event">
        <div class="container mt-5">
          <h2 class="text-center fw-bold pt-3 pb-1 mt-1">Form Create Event</h2>
          <form class="color-black mx-2 my-5 mx-sm-0 mx-md-5">
              <div class="form-floating mb-4">
                <input type="text" class="form-control" id="inputNameEvent" placeholder="Name" />
                <label for="inputNameEvent">Name</label>
              </div>
              <div class="form-floating mb-4">
                <input type="text" class="form-control" id="inputLocationEvent" placeholder="Location" />
                <label for="inputLocationEvent">Location</label>
              </div>
              <div class="form-floating mb-4">
                <input type="date" class="form-control" id="inputDateEvent" placeholder="Date" />
                <label for="inputDateEvent">Date</label>
              </div>
              <div class="row g-2">
                <div class="col">
                  <div class="form-floating mb-4">
                    <input type="time" class="form-control" id="inputTimeEvent" placeholder="Time" />
                    <label for="inputTimeEvent">Time</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-floating mb-4">
                    <select class="form-select" id="inputTimezoneEvent" aria-label="Selecting Indonesian Timezone">
                      <option selected disabled>Select Indonesian Timezone</option>
                      <option value="WIB">WIB</option>
                      <option value="WITA">WITA</option>
                      <option value="WIT">WIT</option>
                    </select>
                    <label for="inputTimezoneEvent">Timezone</label>
                  </div>
                </div>
              </div>
              <div class="form-floating mb-4">
                <select class="form-select" id="inputTagsEvent" aria-label="Selecting Categories Event">
                  <option selected disabled>Select Categories</option>
                  <option value="Travel & Tour">Travel & Tour</option>
                  <option value="Culture Show">Culture Show</option>
                  <option value="Competition">Competition</option>
                  <option value="Festival">Festival</option>
                </select>
                <label for="inputTagsEvent">Categories</label>
              </div>
              <div class="form-floating mb-3" style="padding: 10px 0 20px 0;">
                  <input type="url" class="form-control" id="inputImageEvent" placeholder="Image" />
                  <label for="inputImageEvent">Image (Insert Direct Link Image)</label>
                  <p class="size-text-sm ps-2 pt-2 mb-0">Convert image to direct link Url with <a href="https://postimages.org/" class="color-postimages linkhov-deco fw-bold" target="_blank">postimages</a></p>
              </div> 
              <div class="form-floating mb-4">
                <textarea class="form-control description-textarea" id="inputDescriptionEvent" placeholder="Description" ></textarea>
                <label for="inputDescriptionEvent">Description</label>
              </div>
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-center my-2 pt-1">
                <button id="submitEvent" type="submit" class="btn btn-green fs-5 px-5 fw-bold my-2 my-sm-0 me-sm-3" tabindex="-1">Submit</button>
                <button id="cancelEvent" type="button" class="btn btn-danger fs-5 px-5 fw-bold" tabindex="-1">Cancel</button>  
              </div>
          </form>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const submitEvent = document.querySelector('#submitEvent');
    const cancelEvent = document.querySelector('#cancelEvent');
    const inputNameEvent = document.querySelector('#inputNameEvent');
    const inputLocationEvent = document.querySelector('#inputLocationEvent');
    const inputDateEvent = document.querySelector('#inputDateEvent');
    const inputTimeEvent = document.querySelector('#inputTimeEvent');
    const inputTimezoneEvent = document.querySelector('#inputTimezoneEvent');
    const inputTagsEvent = document.querySelector('#inputTagsEvent');
    const inputImageEvent = document.querySelector('#inputImageEvent');
    const inputDescriptionEvent = document.querySelector('#inputDescriptionEvent');

    submitEvent.addEventListener('click', async (event) => {
      event.preventDefault();
      if (!inputNameEvent.value || !inputLocationEvent.value || !inputTimeEvent.value
        || !inputTimezoneEvent.value || !inputDescriptionEvent.value
        || !inputImageEvent.value || !inputTagsEvent.value) {
        Swal.fire({
          icon: 'error',
          title: 'Your input still empty',
          text: 'Please fill the empty input form!',
        });
      } else if (inputTimezoneEvent.value === 'Select Indonesian Timezone') {
        Swal.fire({
          icon: 'error',
          title: 'Input timezone not selected',
          text: 'Please select Indonesian timezone where you at!',
        });
      } else if (inputTagsEvent.value === 'Select Categories') {
        Swal.fire({
          icon: 'error',
          title: 'Input categories not selected',
          text: 'Please select categories of event!',
        });
      } else {
        const dataEvent = {
          name: inputNameEvent.value,
          location: inputLocationEvent.value,
          date: inputDateEvent.value,
          time: inputTimeEvent.value,
          timezone: inputTimezoneEvent.value,
          description: inputDescriptionEvent.value,
          pictureId: inputImageEvent.value,
          categories: inputTagsEvent.value,
        };
        await CTNAPISource.insertEvent(dataEvent);
        Swal.fire({
          icon: 'success',
          title: 'New Event have been added',
        });
        window.location.href = '#/content-event';
      }
    });

    cancelEvent.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = '#/content-event';
      window.scrollTo(0, 0);
    });
  },
};

export default AddEvent;
