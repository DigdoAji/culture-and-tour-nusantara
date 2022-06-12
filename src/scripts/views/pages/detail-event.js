import UrlParser from "../../routes/url-parser";
import CTNAPISource from "../../data/API-CTNsource";
import { createDetailEventTemplate } from "../templates/template-detail";

const DetailEvent = {
  async render() {
    return `
      <section id="detail-event">
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailContainer = document.querySelector('#detail-event');

    try {
      const eventItem = await CTNAPISource.detailEvent(url.id);
      console.log (eventItem);
      detailContainer.innerHTML = createDetailEventTemplate(eventItem);
    } catch (err) {
      console.log(err);
    }

    const submitReview = document.querySelector('#submitReview');
    const inputName = document.querySelector('#inputUserReview');
    const inputReview = document.querySelector('#inputReviewEvent');

    submitReview.addEventListener('click', async (event) => {
      event.preventDefault();
      if (inputName.value === '' || inputReview.value === '') {
        alert('Input still empty. Please fill the input form!');
      } else {
        const dataReview = {
          id: url.id,
          name: inputName.value,
          review: inputReview.value,
        };
        await CTNAPISource.addReviewEvent(dataReview);
        await location.reload();
      }
    });

    const submitDelete = document.querySelector('#deleteEvent');

    submitDelete.addEventListener('click', async (event) => {
      event.preventDefault();
      if (confirm('Are you sure delete this Event?')) {
        await CTNAPISource.removeEvent(url.id);
        await location.replace("#/content-event");
      } else {
        await location.reload();
      }
    });
  },
};

export default DetailEvent;
