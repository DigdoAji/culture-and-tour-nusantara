import { createSkeletonDetailArticleTemplate } from '../templates/template-detail';

const ArticleDetailSkeleton = {
  async render() {
    return `
    <section id="skeleton-detail-article">
    </section>
      `;
  },

  async afterRender() {
    const detailContainer = document.querySelector('#skeleton-detail-article');
    detailContainer.innerHTML = createSkeletonDetailArticleTemplate();
  },
};

export default ArticleDetailSkeleton;
