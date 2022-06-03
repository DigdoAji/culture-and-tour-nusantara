const Home = {
  async render() {
    return `
    <hero-jumbotron></hero-jumbotron>
    <hero-intro></hero-intro>
    <card-home></card-home>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
