const createContentArticleTemplate = (contentArticles) => `
    <div class="col-md-6 col-lg-4 col-xl-3 mb-5">
        <div class="card shadow-lg rounded-card h-100">
            <img src="${contentArticles.pictureId}" alt="${contentArticles.name} illustration" class="card-img-top img-fluid border border-2 img-rounded-card" width="600px" height="400px">
            <div class="card-body px-4">
                <p class="card-text fw-normal size-text-sm mb-0"><i class="fa fa-calendar me-1"></i>${contentArticles.publishDate} | <i class="fa fa-user me-1"></i>Admin ${contentArticles.publisherName}</p>
                <p class="card-text fw-normal size-text-sm mb-2"><i class="fa fa-tags me-1"></i>${contentArticles.categories}</p>
                <h5 class="card-title text-center fw-bold color-ctn py-2">${contentArticles.name}</h5>
                <p class="card-text text-limit mt-2 mb-0">
                    ${contentArticles.description}
                </p>
            </div>
            <div class="d-flex justify-content-center mt-2 mb-4">
                <a href="${`#/detail-article/${contentArticles.id}`}"><button type="button" class="btn btn-outline-green px-3 py-2" tabindex="-1">Read More</button></a>
            </div>
        </div>
     </div>

`;

const createContentEventTemplate = (contentEvents) => `
    <div class="col-md-6 col-lg-4 col-xl-3 mb-5">
        <div class="card shadow-lg rounded-card h-100">
            <img src="${contentEvents.pictureId}" alt="${contentEvents.name} illustration" class="card-img-top img-fluid border border-2 img-rounded-card" width="600px" height="700px">
            <div class="card-body px-4">
                <h5 class="card-title text-center fw-bold color-ctn py-2">${contentEvents.name}</h5>
                <p class="card-text fw-normal mb-0"><i class="fa fa-map-marker me-1"></i>${contentEvents.location}</p>
                <p class="card-text fw-normal mb-0"><i class="fa fa-calendar me-1"></i>${contentEvents.date}</p>
                <p class="card-text fw-normal mb-0"><i class="fa fa-clock-o me-1"></i>${contentEvents.time}</p>
                <p class="card-text fw-normal mb-0"><i class="fa fa-tags me-1"></i>${contentEvents.categories}</p>
            </div>
            <div class="d-flex justify-content-center mt-2 mb-4">
                <a href="${`#/detail-event/${contentEvents.id}`}"><button type="button" class="btn btn-outline-green px-3 py-2" tabindex="-1">Read More</button></a>
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
            <img src="https://via.placeholder.com/600x400/?text=image+placeholder" alt="Skeleton image" class="card-img-top img-fluid border border-2 img-rounded-card" width="600px" height="400px">
            <div class="card-body px-4">
                <p class="card-text fw-normal size-text-sm mb-0"><i class="fa fa-calendar me-1"></i>XX June XXXX | <i class="fa fa-user me-1"></i>Admin XXXX</p>
                <p class="card-text fw-normal size-text-sm mb-2"><i class="fa fa-tags me-1"></i>Any</p>
                <h5 class="card-title text-center fw-bold color-ctn py-2">Lorem Ipsum</h5>
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
                <a href="#"><button type="button" class="btn btn-outline-green px-3 py-2" tabindex="-1">Read More</button></a>
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
            <img src="https://via.placeholder.com/450x550/?text=image+placeholder" 
                alt="image skeleton" class="card-img-top img-fluid border border-2 img-rounded-card" 
                width="450px" height="550px">
            <div class="card-body px-4">
                <h5 class="card-title text-center fw-bold color-ctn py-2">Lorem Ipsum</h5>
                <p class="card-text fw-normal mb-0"><i class="fa fa-map-marker me-1"></i>Nusantara</p>
                <p class="card-text fw-normal mb-0"><i class="fa fa-calendar me-1"></i>XX June XXXX</p>
                <p class="card-text fw-normal mb-0"><i class="fa fa-clock-o me-1"></i>XX.XX WITA</p>
                <p class="card-text fw-normal mb-0"><i class="fa fa-tags me-1"></i>Any</p>
            </div>
            <div class="d-flex justify-content-center mt-2 mb-4">
                <a href="#"><button type="button" class="btn btn-outline-green px-3 py-2" tabindex="-1">Read More</button></a>
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
    <p class="text-danger fw-bolder ms-2"><i class="fa fa-warning me-1"></i>Data CTN API not loaded. ${err}<h2>
`;

export {
  createContentArticleTemplate,
  createContentEventTemplate,
  createSkeletonArticleTemplate,
  createSkeletonEventTemplate,
  createLoadingText,
  createAfterLoadingText,
};
