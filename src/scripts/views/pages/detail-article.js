import Swal from 'sweetalert2';
import UrlParser from '../../routes/url-parser';
import CTNAPISource from '../../global/API-CTNsource';
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
        await CTNAPISource.addReviewArticle(dataReview);
        await location.reload();
      }
    });

    const submitDelete = document.querySelector('#deleteArticle');

    submitDelete.addEventListener('click', (event) => {
      event.preventDefault();
      Swal.fire({
        title: 'Are you sure delete this article?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await CTNAPISource.removeArticle(url.id);
          Swal.fire(
            'Deleted!',
            'Your selected article has been deleted.',
            'success',
          );
          await location.replace('#/content-article');
          await window.scrollTo(0, 0);
        }
      });
    });
  },
};

export default DetailArticle;
