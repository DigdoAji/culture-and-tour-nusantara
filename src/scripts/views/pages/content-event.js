import CTNAPISource from '../../data/API-CTNsource';
import { createContentEventTemplate } from '../templates/template-content';

const ContentEvent = {
  async render() {
    return `
        <hero-jumbotron></hero-jumbotron>

        <section id="event">
            <div class="container-fluid col-11 px-4 pt-3 pb-2 mt-4 mb-2 mb-md-4">
                <div class="row">
                    <div class="col-md-8">
                        <h2>Event</h2>
                        <p class="lead">All activities/event/competitions about culture and tourism of Nusantara</p>
                    </div>
                    <div class="col-md-4 my-auto d-flex justify-content-md-end">
                        <a href="#/create-event"><button type="button" class="btn btn-green px-3 py-2" tabindex="-1">Create New Event</button></a>
                    </div>
                </div>
            </div>

            <div class="container-fluid col-11 px-4 py-3 mb-4">
              <div class="row" id="card-events">

              </div>
            </div>
        </section>

        <hero-interested></hero-interested>
      `;
  },

  async afterRender() {
    const eventContainer = document.querySelector('#card-events');
    eventContainer.innerHTML = '';

    try {
      const eventCard = await CTNAPISource.contentEvents();
      eventCard.reverse().slice(0, 4).forEach((allEvent) => {
        eventContainer.innerHTML += createContentEventTemplate(allEvent);
      });
    } catch (err) {
      console.log(err);
    }
  },
};

export default ContentEvent;
