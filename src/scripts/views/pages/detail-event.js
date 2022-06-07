import UrlParser from "../../routes/url-parser";
import CTNAPISource from "../../data/API-CTNsource";
import { createDetailEventTemplate } from "../templates/template-detail";

const DetailEvent = {
  async render() {
    return `
      <section id="detail-event">
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailContainer = document.querySelector('#detail-event');

    try {
      const eventItem = await CTNAPISource.detailEvent(url.id);
      console.log (eventItem);
      detailContainer.innerHTML = createDetailEventTemplate(eventItem);
    } catch (err) {
      console.log(err);
    }
  },
};

export default DetailEvent;
