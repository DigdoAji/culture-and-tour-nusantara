const MoreButton = () => {
  const clickMoreArticles = document.getElementById('more-articles');
  clickMoreArticles.addEventListener('click', () => {
    window.location.href = '#/content-article';
    window.scrollTo(0, 0);
  });

  const clickMoreEvents = document.getElementById('more-events');
  clickMoreEvents.addEventListener('click', () => {
    window.location.href = '#/content-event';
    window.scrollTo(0, 0);
  });
};

export default MoreButton;
