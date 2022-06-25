import CTNAPISource from '../../global/API-CTNsource';
import {
  createContentArticleTemplate,
  createSkeletonArticleTemplate,
  createLoadingText,
  createAfterLoadingText,
  createCardEmpty,
  createCategoryNotFound,
} from '../templates/template-content';

const ContentArticle = {
  async render() {
    return `
        <hero-jumbotron></hero-jumbotron>

        <section id="article">
            <div class="container-fluid col-11 px-4 pt-3 pb-3 mt-4 mb-3 mb-md-0">
                <div class="row">
                    <div class="col-md-8">
                        <h2>Article</h2>
                        <p class="lead">Article about culture and tourism of Nusantara</p>
                    </div>
                    <div class="col-md-4 my-auto d-flex justify-content-md-end">
                        <a href="#/create-article" onclick="window.scrollTo(0, 0);"><button type="button" class="btn btn-green px-3 py-2" tabindex="-1">Create New Article</button></a>
                    </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <form class="mt-5 mt-md-4">
                      <div class="form-floating mb-4">
                        <select class="form-select" id="findTagsArticle" aria-label="Selecting Categories Article">
                          <option value="All">All Categories</option>
                          <option value="Tourism">Tourism</option>
                          <option value="Culture">Culture</option>
                          <option value="Tourism & Culture">Tourism & Culture</option>
                        </select>
                        <label for="findTagsArticle">Categories</label>
                      </div>
                    <form>
                  </div>
                  <div class="col-md-4 my-auto d-flex justify-content-center justify-content-md-start">
                      <button id="btnFind" type="button" class="btn btn-green px-3 py-2" tabindex="-1">Find Category</button>
                  </div>
                </div>
            </div>

            <div class="container-fluid col-11 px-4 py-3 mb-4">
              <div class="row" id="loading-article"></div>
              <div class="row" id="card-articles"></div>
              <div class="row" id="category-articles"></div>
            </div>
        </section>

        <hero-interested></hero-interested>
      `;
  },

  async afterRender() {
    const articleContainer = document.querySelector('#card-articles');
    const categoryContainer = document.querySelector('#category-articles');
    const btnFind = document.querySelector('#btnFind');
    const findTagsArticle = document.querySelector('#findTagsArticle');
    const loadArticle = document.querySelector('#loading-article');
    loadArticle.innerHTML = createLoadingText();

    try {
      const articleCard = await CTNAPISource.contentArticles();
      articleCard.reverse().forEach((allArticle) => {
        articleContainer.innerHTML += createContentArticleTemplate(allArticle);
      });

      loadArticle.style.display = 'none';
      if (!articleCard.length) {
        articleContainer.innerHTML = createCardEmpty();
      }

      btnFind.addEventListener('click', async (event) => {
        event.preventDefault();
        if (findTagsArticle.value === 'All') {
          articleContainer.style.display = 'flex';
          categoryContainer.style.display = 'none';
        } else {
          articleContainer.style.display = 'none';
          categoryContainer.style.display = 'flex';
          if (findTagsArticle.value === 'Culture') {
            this.category = 'Culture';
          } else if (findTagsArticle.value === 'Tourism') {
            this.category = 'Tourism';
          } else {
            this.category = 'Tourism+%26+Culture';
          }
          loadArticle.style.display = 'flex';
          const categoryCard = await CTNAPISource.findCategoryArticle(this.category);
          categoryContainer.innerHTML = '';
          categoryCard.reverse().forEach((allArticle) => {
            categoryContainer.innerHTML += createContentArticleTemplate(allArticle);
          });
          loadArticle.style.display = 'none';
          if (categoryContainer.innerHTML === '') {
            categoryContainer.innerHTML = createCategoryNotFound(findTagsArticle.value);
          }
        }
      });
    } catch (err) {
      loadArticle.innerHTML = createAfterLoadingText(err);
      articleContainer.innerHTML += createSkeletonArticleTemplate(4);
      console.log(err);
    }
  },
};

export default ContentArticle;
