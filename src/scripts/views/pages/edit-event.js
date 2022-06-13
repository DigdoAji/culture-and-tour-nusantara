import UrlParser from '../../routes/url-parser';
import CTNAPISource from '../../data/API-CTNsource';
import { createFormUpdateEventTemplate } from '../templates/template-form';

const EditEvent = {
  async render() {
    return `
    <section id="update-event">
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const updateContainer = document.querySelector('#update-event');

    try {
      const eventItem = await CTNAPISource.detailEvent(url.id);
      updateContainer.innerHTML = createFormUpdateEventTemplate(eventItem);
    } catch (err) {
      console.log(err);
    }

    const submitEvent = document.querySelector('#submitEvent');
    const editNameEvent = document.querySelector('#editNameEvent');
    const editLocationEvent = document.querySelector('#editLocationEvent');
    const editDateEvent = document.querySelector('#editDateEvent');
    const editTimeEvent = document.querySelector('#editTimeEvent');
    const editTagsEvent = document.querySelector('#editTagsEvent');
    const editImageEvent = document.querySelector('#editImageEvent');
    const editDescriptionEvent = document.querySelector('#editDescriptionEvent');

    submitEvent.addEventListener('click', async (event) => {
      event.preventDefault();
      const dataEvent = {
        name: editNameEvent.value,
        location: editLocationEvent.value,
        date: editDateEvent.value,
        time: editTimeEvent.value,
        description: editDescriptionEvent.value,
        pictureId: editImageEvent.value,
        categories: editTagsEvent.value,
      };
      await CTNAPISource.editEvent(url.id, dataEvent);
      await location.replace('#/content-event');
    });
  },
};

export default EditEvent;
