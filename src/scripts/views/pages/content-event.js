const ContentEvent = {
  async render() {
    return `
        <hero-jumbotron></hero-jumbotron>
        <card-contentevent></card-contentevent>
        <hero-interested></hero-interested>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default ContentEvent;
