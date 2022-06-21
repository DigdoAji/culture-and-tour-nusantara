const createContentArticleTemplate = (contentArticles) => `
    <div class="col-md-6 col-lg-4 col-xl-3 mb-5">
        <div class="card shadow-lg rounded-card h-100">
            <img src="${contentArticles.pictureId ? contentArticles.pictureId : 'https://via.placeholder.com/600x400/?text=image+not+found'}" 
                alt="${contentArticles.name} illustration" 
                class="article-img-top img-fluid border border-2 img-rounded-card" 
                width="600px" height="300px"
            >
            <div class="card-body px-4">
                <p class="card-text fw-normal size-text-sm mb-0"><i class="fa fa-calendar me-1"></i>${contentArticles.publishDate} | <i class="fa fa-user me-1"></i>${contentArticles.publisherName}</p>
                <p class="card-text fw-normal size-text-sm mb-2"><i class="fa fa-tags me-1"></i>${contentArticles.categories}</p>
                <h5 class="card-title text-center fw-bold color-ctn py-2">${contentArticles.name}</h5>
                <p class="card-text text-limit mt-2 mb-0">
                    ${contentArticles.description}
                </p>
            </div>
            <div class="d-flex justify-content-center mt-2 mb-4">
                <a href="${`#/detail-article/${contentArticles._id}`}" onclick="window.scrollTo(0, 0);"><button type="button" class="btn btn-outline-green px-3 py-2" tabindex="-1">Read More</button></a>
            </div>
        </div>
     </div>

`;

const createContentEventTemplate = (contentEvents) => `
    <div class="col-md-6 col-lg-4 col-xl-3 mb-5">
        <div class="card shadow-lg rounded-card h-100">
            <img src="${contentEvents.pictureId ? contentEvents.pictureId : 'https://via.placeholder.com/600x700/?text=image+not+found'}" 
                alt="${contentEvents.name} illustration" 
                class="img-fluid border border-2 img-rounded-card" 
                width="600px" height="700px"
            >
            <div class="card-body px-4">
                <h5 class="card-title text-center fw-bold color-ctn py-2">${contentEvents.name}</h5>
                <p class="card-text fw-normal mb-0"><i class="fa fa-map-marker me-1"></i>${contentEvents.location}</p>
                <p class="card-text fw-normal mb-0"><i class="fa fa-calendar me-1"></i>${contentEvents.date}</p>
                <p class="card-text fw-normal mb-0"><i class="fa fa-clock-o me-1"></i>${contentEvents.time} ${contentEvents.timezone}</p>
                <p class="card-text fw-normal mb-0"><i class="fa fa-tags me-1"></i>${contentEvents.categories}</p>
            </div>
            <div class="d-flex justify-content-center mt-2 mb-4">
                <a href="${`#/detail-event/${contentEvents._id}`}" onclick="window.scrollTo(0, 0);"><button type="button" class="btn btn-outline-green px-3 py-2" tabindex="-1">Read More</button></a>
            </div>
        </div>
    </div>
`;

const createSkeletonArticleTemplate = (count) => {
  let skeletonTemplate = '';

  for (let i = 0; i < count; i += 1) {
    skeletonTemplate += `
      <div class="col-md-6 col-lg-4 col-xl-3 mb-5">
        <div class="card skeleton shadow-lg rounded-card h-100">
            <img src="https://via.placeholder.com/600x400/?text=image+placeholder" 
                alt="Skeleton image" 
                class="article-img-top img-fluid border border-2 img-rounded-card" 
                width="800px" height="400px"
            >
            <div class="card-body px-4">
                <p class="card-text fw-normal size-text-sm mb-0"><i class="fa fa-calendar me-1"></i>XXXX-XX-XX | <i class="fa fa-user me-1"></i>User</p>
                <p class="card-text fw-normal size-text-sm mb-2"><i class="fa fa-tags me-1"></i>Any</p>
                <h5 class="card-title text-center fw-bold color-ctn py-2">Lorem ipsum dolor sit amet</h5>
                <p class="card-text text-limit mt-2 mb-0">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
                    Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, 
                    imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
                    Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, 
                    porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, 
                    feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
                </p>
            </div>
            <div class="d-flex justify-content-center mt-2 mb-4">
            <a href="#/skeleton-detail-article" onclick="window.scrollTo(0, 0);"><button type="button" class="btn btn-outline-green px-3 py-2" tabindex="-1">Read More</button></a>
            </div>
        </div>
     </div>
      `;
  }
  return skeletonTemplate;
};

const createSkeletonEventTemplate = (count) => {
  let skeletonTemplate = '';

  for (let i = 0; i < count; i += 1) {
    skeletonTemplate += `
    <div class="col-md-6 col-lg-4 col-xl-3 mb-5">
        <div class="card skeleton shadow-lg rounded-card h-100">
            <img src="https://via.placeholder.com/600x700/?text=image+placeholder" 
                alt="Poster Skeleton" 
                class="img-fluid border border-2 img-rounded-card" 
                width="800px" height="700px"
            >
            <div class="card-body px-4">
                <h5 class="card-title text-center fw-bold color-ctn py-2">Lorem Ipsum Inarte</h5>
                <p class="card-text fw-normal mb-0"><i class="fa fa-map-marker me-1"></i>Nusantara</p>
                <p class="card-text fw-normal mb-0"><i class="fa fa-calendar me-1"></i>XXXX-XX-XX</p>
                <p class="card-text fw-normal mb-0"><i class="fa fa-clock-o me-1"></i>XX:XX WIB</p>
                <p class="card-text fw-normal mb-0"><i class="fa fa-tags me-1"></i>Any</p>
            </div>
            <div class="d-flex justify-content-center mt-2 mb-4">
                <a href="#/skeleton-detail-event" onclick="window.scrollTo(0, 0);"><button type="button" class="btn btn-outline-green px-3 py-2" tabindex="-1">Read More</button></a>
            </div>
        </div>
    </div>
        `;
  }
  return skeletonTemplate;
};

const createLoadingText = () => `  
    <div class="lds-dual-ring"></div>
    <h3 class="text-center mb-5">Loading API Data. Please Wait.....</h3>
`;

const createAfterLoadingText = (err) => `  
    <p class="text-danger fw-bolder ms-2"><i class="fa fa-warning me-1"></i>CTN API Error. ${err}<h2>
`;

const createCardEmpty = () => ` 
    <div class="d-flex justify-content-center">
        <img src="images/empty-box.png" 
            class="d-block img-fluid mt-2 mt-md-0 mb-4"  
            alt="logo Culture and Tour Nusantara" 
            width="300px" height="300px"
        >
    </div>
    <h3 class="text-center mt-2 mb-5">Data in CTN API is Empty. Please create new content!!</h3>
`;

export {
  createContentArticleTemplate,
  createContentEventTemplate,
  createSkeletonArticleTemplate,
  createSkeletonEventTemplate,
  createLoadingText,
  createAfterLoadingText,
  createCardEmpty,
};
