import CTNAPISource from '../../data/API-CTNsource';
import MoreButton from '../../utils/more-button';
import {
  createContentArticleTemplate,
  createContentEventTemplate,
  createSkeletonArticleTemplate,
  createSkeletonEventTemplate,
  createLoadingText,
  createAfterLoadingText,
  createCardEmpty,
} from '../templates/template-content';

const Home = {
  async render() {
    return `
    <hero-jumbotron></hero-jumbotron>
    <hero-intro></hero-intro>
    
    <section id="article">
    <div class="container-fluid col-11 px-4 pt-3 pb-2 mt-4 mb-2">
        <div class="text-center mb-4">
          <h2>Article</h2>
          <p class="lead">Article about culture and tourism of Nusantara</p>
        </div>
    </div>

    <div class="container-fluid col-11 px-4 py-3 mb-0">
      <div class="row" id="loading-article"></div>
      <div class="row" id="home-article">
      </div>
      <div class="d-flex justify-content-center my-2">
        <button type="button" class="btn btn-green px-4 py-2" tabindex="0" id="more-articles">More Articles</button>
      </div>
    </div>

</section>

<section id="event">
    <div class="container-fluid col-11 px-4 py-3 mt-5 mb-2">
        <div class="text-center mb-4">
          <h2>Event</h2>
          <p class="lead">All activities/event/competitions about culture and tourism of Nusantara</p>
        </div>
    </div>

    <div class="container-fluid col-11 px-4 py-3 mb-5">
      <div class="row" id="loading-event"></div>
      <div class="row" id="home-event">
      </div>
      <div class="d-flex justify-content-center my-2">
        <button type="button" class="btn btn-green px-4 py-2" tabindex="0" id="more-events">More Events</button>
      </div>
    </div>

  </section>
      `;
  },

  async afterRender() {
    const articleContainer = document.querySelector('#home-article');
    const eventContainer = document.querySelector('#home-event');
    const loadArticle = document.querySelector('#loading-article');
    const loadEvent = document.querySelector('#loading-event');
    loadArticle.innerHTML = createLoadingText();
    loadEvent.innerHTML = createLoadingText();

    try {
      const articleCard = await CTNAPISource.contentArticles();
      articleCard.reverse().slice(0, 4).forEach((allArticle) => {
        articleContainer.innerHTML += createContentArticleTemplate(allArticle);
      });
      const eventCard = await CTNAPISource.contentEvents();
      eventCard.reverse().slice(0, 4).forEach((allEvent) => {
        eventContainer.innerHTML += createContentEventTemplate(allEvent);
      });
      loadArticle.style.display = 'none';
      loadEvent.style.display = 'none';
      if (!articleCard.length) {
        articleContainer.innerHTML = createCardEmpty();
      }
      if (!eventCard.length) {
        eventContainer.innerHTML = createCardEmpty();
      }
    } catch (err) {
      loadArticle.innerHTML = createAfterLoadingText(err);
      loadEvent.innerHTML = createAfterLoadingText(err);
      articleContainer.innerHTML += createSkeletonArticleTemplate(4);
      eventContainer.innerHTML += createSkeletonEventTemplate(4);
      console.log(err);
    }

    MoreButton();
  },
};

export default Home;
