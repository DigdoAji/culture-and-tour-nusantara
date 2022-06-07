import UrlParser from '../../routes/url-parser';
import CTNAPISource from "../../data/API-CTNsource";
import { createDetailArticleTemplate } from "../templates/template-detail";

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
      console.log (articleItem);
      detailContainer.innerHTML = createDetailArticleTemplate(articleItem);
    } catch (err) {
      console.log(err);
    }
  },
};

export default DetailArticle;
