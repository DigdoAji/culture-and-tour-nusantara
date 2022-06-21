import Swal from 'sweetalert2';
import UrlParser from '../../routes/url-parser';
import CTNAPISource from '../../global/API-CTNsource';
import { createDetailEventTemplate } from '../templates/template-detail';

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
      console.log(eventItem);
      detailContainer.innerHTML = createDetailEventTemplate(eventItem);
    } catch (err) {
      console.log(err);
    }

    const submitReview = document.querySelector('#submitReview');
    const inputName = document.querySelector('#inputUserReview');
    const inputReview = document.querySelector('#inputReviewEvent');

    submitReview.addEventListener('click', async (event) => {
      event.preventDefault();
      if (!inputName.value || !inputReview.value) {
        Swal.fire({
          icon: 'error',
          title: 'Your input still Empty',
          text: 'Please fill the empty input comment!',
        });
      } else {
        const dataReview = {
          _id: url.id,
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
      Swal.fire({
        title: 'Are you sure delete this event?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await CTNAPISource.removeEvent(url.id);
          Swal.fire(
            'Deleted!',
            'Your selected article has been deleted.',
            'success',
          );
          await location.replace('#/content-event');
          await window.scrollTo(0, 0);
        }
      });
    });
  },
};

export default DetailEvent;
