import article from "../../data/Article.json"
import { createContentArticleTemplate } from "../templates/template-content";

const ContentArticle = {
  async render() {
    return `
        <hero-jumbotron></hero-jumbotron>

        <section id="article">
            <div class="container-fluid col-11 px-4 pt-3 pb-2 mt-4 mb-2 mb-md-4">
                <div class="row">
                    <div class="col-md-8">
                        <h2>Article</h2>
                        <p class="lead">Article about culture and tourism of Nusantara</p>
                    </div>
                    <div class="col-md-4 my-auto d-flex justify-content-md-end">
                        <a href="#/create-article"><button type="button" class="btn btn-green px-3 py-2" tabindex="-1">Create New Article</button></a>
                    </div>
                </div>
            </div>

            <div class="container-fluid col-11 px-4 py-3 mb-4">
              <div class="row" id="card-articles">


              </div>
        </section>

        <hero-interested></hero-interested>
      `;
  },

  async afterRender() {
    const articleCard = await article.contentArticles;
    const articleContainer = document.querySelector('#card-articles');
    articleCard.forEach((allArticle) => {
      articleContainer.innerHTML += createContentArticleTemplate(allArticle);
    });
  },
};

export default ContentArticle;
