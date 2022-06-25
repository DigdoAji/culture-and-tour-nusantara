import CTNAPISource from '../../global/API-CTNsource';
import {
  createContentEventTemplate,
  createSkeletonEventTemplate,
  createLoadingText,
  createAfterLoadingText,
  createCardEmpty,
  createCategoryNotFound,
} from '../templates/template-content';

const ContentEvent = {
  async render() {
    return `
        <hero-jumbotron></hero-jumbotron>

        <section id="event">
            <div class="container-fluid col-11 px-4 pt-3 pb-3 mt-4 mb-3 mb-md-0">
                <div class="row">
                    <div class="col-md-8">
                        <h2>Event</h2>
                        <p class="lead">All activities/event/competitions about culture and tourism of Nusantara</p>
                    </div>
                    <div class="col-md-4 my-auto d-flex justify-content-md-end">
                        <a href="#/create-event" onclick="window.scrollTo(0, 0);"><button type="button" class="btn btn-green px-3 py-2" tabindex="-1">Create New Event</button></a>
                    </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <form class="mt-5 mt-md-4">
                      <div class="form-floating mb-4">
                        <select class="form-select" id="findTagsEvent" aria-label="Selecting Categories Event">
                          <option value="All">All Categories</option>
                          <option value="Travel & Tour">Travel & Tour</option>
                          <option value="Culture Show">Culture Show</option>
                          <option value="Competition">Competition</option>
                          <option value="Festival">Festival</option>
                        </select>
                        <label for="findTagsEvent">Categories</label>
                      </div>
                    <form>
                  </div>
                  <div class="col-md-4 my-auto d-flex justify-content-center justify-content-md-start">
                      <button id="btnFind" type="button" class="btn btn-green px-3 py-2" tabindex="-1">Find Category</button>
                  </div>
                </div>
            </div>

            <div class="container-fluid col-11 px-4 py-3 mb-4">
              <div class="row" id="loading-event"></div>
              <div class="row" id="card-events"></div>
              <div class="row" id="category-events"></div>
            </div>
        </section>

        <hero-interested></hero-interested>
      `;
  },

  async afterRender() {
    const eventContainer = document.querySelector('#card-events');
    const categoryContainer = document.querySelector('#category-events');
    const btnFind = document.querySelector('#btnFind');
    const findTagsEvent = document.querySelector('#findTagsEvent');
    const loadEvent = document.querySelector('#loading-event');
    loadEvent.innerHTML = createLoadingText();

    try {
      const eventCard = await CTNAPISource.contentEvents();
      eventCard.reverse().forEach((allEvents) => {
        eventContainer.innerHTML += createContentEventTemplate(allEvents);
      });

      loadEvent.style.display = 'none';
      if (!eventCard.length) {
        eventContainer.innerHTML = createCardEmpty();
      }

      btnFind.addEventListener('click', async (event) => {
        event.preventDefault();
        if (findTagsEvent.value === 'All') {
          eventContainer.style.display = 'flex';
          categoryContainer.style.display = 'none';
        } else {
          eventContainer.style.display = 'none';
          categoryContainer.style.display = 'flex';
          if (findTagsEvent.value === 'Travel & Tour') {
            this.category = 'Travel+%26+Tour';
          } else if (findTagsEvent.value === 'Culture Show') {
            this.category = 'Culture+Show';
          } else if (findTagsEvent.value === 'Competition') {
            this.category = 'Competition';
          } else {
            this.category = 'Festival';
          }
          loadEvent.style.display = 'flex';
          const categoryCard = await CTNAPISource.findCategoryEvent(this.category);
          categoryContainer.innerHTML = '';
          categoryCard.reverse().forEach((allArticle) => {
            categoryContainer.innerHTML += createContentEventTemplate(allArticle);
          });
          loadEvent.style.display = 'none';
          if (categoryContainer.innerHTML === '') {
            categoryContainer.innerHTML = createCategoryNotFound(findTagsEvent.value);
          }
        }
      });
    } catch (err) {
      loadEvent.innerHTML = createAfterLoadingText(err);
      eventContainer.innerHTML += createSkeletonEventTemplate(4);
      console.log(err);
    }
  },
};

export default ContentEvent;
