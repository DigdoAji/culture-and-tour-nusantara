const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer({ event, button, drawer });
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer({ event, button, drawer });
    });
  },

  _toggleDrawer({ event }) {
    event.stopPropagation();
  },

  _closeDrawer({ event }) {
    event.stopPropagation();
  },
};

export default DrawerInitiator;
