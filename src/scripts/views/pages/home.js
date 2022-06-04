import article from "../../data/Article.json"
import event from "../../data/Event.json"
import { createHomeArticleTemplate, createHomeEventTemplate} from "../templates/template-content";

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
        <a href="#/content-article"><button type="button" class="btn btn-green px-4 py-2" tabindex="-1">More Articles</button></a>
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
        <a href="#/content-event"><button type="button" class="btn btn-green px-4 py-2" tabindex="-1">More Events</button></a>
      </div>
    </div>

  </section>
      `;
  },

  async afterRender() {
    const articleContainer = document.querySelector('#home-article');
    articleContainer.innerHTML = '';
    const articleCard = await article.contentArticles;
    articleCard.forEach((allArticle) => {
      articleContainer.innerHTML += createHomeArticleTemplate(allArticle);
    });

    const eventContainer = document.querySelector('#home-event');
    eventContainer.innerHTML = '';
    const eventCard = await event.contentEvents;
    eventCard.forEach((allEvent) => {
      eventContainer.innerHTML += createHomeEventTemplate(allEvent);
    });
  },
};

export default Home;
