class NavWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="shadow-border navbar navbar-expand-md navbar-light bg-nav px-4 px-md-4 py-3">
          <div class="container-fluid">
              <div class="navbar-brand">
                  <img class="img-fluid" 
                    src="images/CTN logo - with title.png" 
                    alt="logo Culture and Tour Nusantara" 
                    width="145" height="53"
                  >
              </div>
            <button class="navbar-toggler" type="button" id="drawerButton" data-bs-toggle="collapse" data-bs-target="#navDropdown" aria-controls="navDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navDropdown">
              <ul class="navbar-nav ms-auto me-auto mt-lg-0">
                <li class="nav-item mx-md-1">
                  <a class="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item dropdown mx-md-1">
                  <a class="nav-link dropdown-toggle" href="#" id="dropdownNavMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Content
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="dropdownNavMenu">
                    <li><a class="nav-link dropdown-item px-3 py-md-3" href="#/content-article">Article</a></li>
                    <li><a class="nav-link dropdown-item px-3 py-md-3" href="#/content-event">Event</a></li>
                  </ul>
                </li>
                <li class="nav-item mx-md-1">
                  <a class="nav-link" href="#/about">About Us</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                  <a href="#/login" class="me-1 me-lg-2"><button type="button" class="btn btn-green px-4" tabindex="-1">Log In</button></a>
                  <a href="#/register"><button type="button" class="btn btn-outline-green px-4" tabindex="-1">Register</button></a>
              </form>
            </div>
          </div>
        </nav>
      `;
  }
}
customElements.define('nav-web', NavWeb);
