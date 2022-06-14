const MoreButton = () => {
  const clickMoreEvents = document.getElementById('more-events');
  clickMoreEvents.addEventListener('click', () => {
    location.replace('#/content-event');
    window.scrollTo(0, 0);
  });

  const clickMoreArticles = document.getElementById('more-articles');
  clickMoreArticles.addEventListener('click', () => {
    location.replace('#/content-article');
    window.scrollTo(0, 0);
  });
};

export default MoreButton;
