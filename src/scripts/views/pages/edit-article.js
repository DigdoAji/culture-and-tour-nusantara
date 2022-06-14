import UrlParser from '../../routes/url-parser';
import CTNAPISource from '../../data/API-CTNsource';
import { createFormUpdateArticleTemplate } from '../templates/template-form';
import { setInputEditDateToday } from '../../utils/set-input-today';

const EditArticle = {
  async render() {
    return `
    <section id="update-article">
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const updateContainer = document.querySelector('#update-article');

    try {
      const articleItem = await CTNAPISource.detailArticle(url.id);
      updateContainer.innerHTML = createFormUpdateArticleTemplate(articleItem);
    } catch (err) {
      console.log(err);
    }

    const submitArticle = document.querySelector('#submitArticle');
    const cancelArticle = document.querySelector('#cancelArticle');
    const editHeadineArticle = document.querySelector('#editHeadineArticle');
    const editPublisherName = document.querySelector('#editPublisherName');
    const editDateArticle = document.querySelector('#editDateArticle');
    const editTagsArticle = document.querySelector('#editTagsArticle');
    const editImageArticle = document.querySelector('#editImageArticle');
    const editDescriptionArticle = document.querySelector('#editDescriptionArticle');

    setInputEditDateToday(editDateArticle);

    submitArticle.addEventListener('click', async (event) => {
      event.preventDefault();
      const dataArticle = {
        name: editHeadineArticle.value,
        description: editDescriptionArticle.value,
        pictureId: editImageArticle.value,
        publisherName: editPublisherName.value,
        publishDate: editDateArticle.value,
        categories: editTagsArticle.value,
      };
      await CTNAPISource.editArticle(url.id, dataArticle);
      await location.replace('#/content-article');
      window.scrollTo(0, 0);
    });

    cancelArticle.addEventListener('click', async (event) => {
      event.preventDefault();
      await location.replace('#/content-article');
      window.scrollTo(0, 0);
    });
  },
};

export default EditArticle;
