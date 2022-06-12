import CTNAPISource from "../../data/API-CTNsource";
import { createContentArticleTemplate, createContentEventTemplate} from "../templates/template-content";
// import article from "../../data/Article.json";
// import event from "../../data/Event.json";

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
    articleContainer.innerHTML = '';

    try {
      const articleCard = await CTNAPISource.contentArticles();
      articleCard.reverse().slice(0, 4).forEach((allArticle) => {
        articleContainer.innerHTML += createContentArticleTemplate(allArticle);
      });
    } catch (err) {
      console.log(err);
      /*
      const articleCard = await article.contentArticles;
      articleCard.reverse().slice(0, 4).forEach((allArticle) => {
        articleContainer.innerHTML += createHomeArticleTemplate(allArticle);
      });
      */
    }

    const eventContainer = document.querySelector('#home-event');
    eventContainer.innerHTML = '';

    try {
      const eventCard = await CTNAPISource.contentEvents();
      eventCard.reverse().slice(0, 4).forEach((allEvent) => {
        eventContainer.innerHTML += createContentEventTemplate(allEvent);
      });
    } catch (err) {
      console.log(err);
      /*
      const eventCard = await event.contentEvents;
      eventCard.reverse().slice(0, 4).forEach((allEvent) => {
        eventContainer.innerHTML += createHomeEventTemplate(allEvent);
      });
      */
    }

    const clickMoreEvents = document.getElementById("more-events");
    clickMoreEvents.addEventListener('click', () => {
      location.replace("#/content-event");
      window.scrollTo(0, 0);
    });

    const clickMoreArticles = document.getElementById("more-articles");
    clickMoreArticles.addEventListener('click', () => {
      location.replace("#/content-article");
      window.scrollTo(0, 0);
    });
  },
};

export default Home;
