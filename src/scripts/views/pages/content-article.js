const ContentArticle = {
  async render() {
    return `
        <hero-jumbotron></hero-jumbotron>
        <card-contentarticle></card-contentarticle>
        <hero-interested></hero-interested>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default ContentArticle;
