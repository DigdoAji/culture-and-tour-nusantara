import UrlParser from '../../routes/url-parser';
import CTNAPISource from '../../data/API-CTNsource';
import { createDetailArticleTemplate } from '../templates/template-detail';

const DetailArticle = {
  async render() {
    return `
    <section id="detail-article">
    </section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailContainer = document.querySelector('#detail-article');

    try {
      const articleItem = await CTNAPISource.detailArticle(url.id);
      detailContainer.innerHTML = createDetailArticleTemplate(articleItem);
    } catch (err) {
      console.log(err);
    }

    const submitReview = document.querySelector('#submitReview');
    const inputName = document.querySelector('#inputUserReview');
    const inputReview = document.querySelector('#inputReviewArticle');

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
        await CTNAPISource.addReviewArticle(dataReview);
        await location.reload();
      }
    });

    const submitDelete = document.querySelector('#deleteArticle');

    submitDelete.addEventListener('click', async (event) => {
      event.preventDefault();
      if (confirm('Are you sure delete this article?')) {
        await CTNAPISource.removeArticle(url.id);
        await location.replace('#/content-article');
      }
    });
  },
};

export default DetailArticle;
