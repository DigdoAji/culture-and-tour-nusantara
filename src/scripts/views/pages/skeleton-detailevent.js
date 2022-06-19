import { createSkeletonDetailEventTemplate } from '../templates/template-detail';

const EventDetailSkeleton = {
  async render() {
    return `
    <section id="skeleton-detail-event">
    </section>
      `;
  },

  async afterRender() {
    const detailContainer = document.querySelector('#skeleton-detail-event');
    detailContainer.innerHTML = createSkeletonDetailEventTemplate();
  },
};

export default EventDetailSkeleton;
