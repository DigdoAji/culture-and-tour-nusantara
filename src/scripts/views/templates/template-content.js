const createContentArticleTemplate = (contentArticles) => `
    <div class="col-md-6 col-lg-4 col-xl-3 mb-5">
        <div class="card shadow-lg rounded-card h-100">
            <img src="images/${contentArticles.pictureId}" alt="${contentArticles.name} illustration" class="card-img-top img-fluid border border-2 img-rounded-card" width="600px" height="400px">
            <div class="card-body px-4">
                <p class="card-text fw-normal size-text-sm mb-0"><i class="fa fa-calendar me-1"></i>${contentArticles.publishDate} | <i class="fa fa-user me-1"></i>Admin ${contentArticles.publisherName}</p>
                <p class="card-text fw-normal size-text-sm mb-2"><i class="fa fa-tags me-1"></i>${contentArticles.categories}</p>
                <h5 class="card-title text-center fw-bold color-ctn py-2">${contentArticles.name}</h5>
                <p class="card-text text-limit mt-2 mb-0">
                    ${contentArticles.description}
                </p>
            </div>
            <div class="d-flex justify-content-center mt-2 mb-4">
                <a href="${`/#/detail-article/${contentArticles.id}`}"><button type="button" class="btn btn-outline-green px-3 py-2" tabindex="-1">Read More</button></a>
            </div>
        </div>
     </div>

`;

const createContentEventTemplate = (contentEvents) => `
    <div class="col-md-6 col-lg-4 col-xl-3 mb-5">
        <div class="card shadow-lg rounded-card h-100">
            <img src="images/${contentEvents.pictureId}" alt="${contentEvents.name} illustration" class="card-img-top img-fluid border border-2 img-rounded-card" width="600px" height="700px">
            <div class="card-body px-4">
                <h5 class="card-title text-center fw-bold color-ctn py-2">${contentEvents.name}</h5>
                <p class="card-text fw-normal mb-0"><i class="fa fa-map-marker me-1"></i>${contentEvents.location}</p>
                <p class="card-text fw-normal mb-0"><i class="fa fa-calendar me-1"></i>${contentEvents.Date}</p>
                <p class="card-text fw-normal mb-0"><i class="fa fa-clock-o me-1"></i>${contentEvents.Time}</p>
                <p class="card-text fw-normal mb-0"><i class="fa fa-tags me-1"></i>${contentEvents.categories}</p>
            </div>
            <div class="d-flex justify-content-center mt-2 mb-4">
                <a href="${`/#/detail-article/${contentEvents.id}`}"><button type="button" class="btn btn-outline-green px-3 py-2" tabindex="-1">Read More</button></a>
            </div>
        </div>
    </div>
`;

const createHomeArticleTemplate = (contentArticles) => `
    <div class="col-md-6 col-lg-4 col-xl-3 mb-5">
        <div class="card shadow-lg rounded-card h-100">
            <img src="images/${contentArticles.pictureId}" alt="${contentArticles.name} illustration" class="card-img-top img-fluid border border-2 img-rounded-card" width="600px" height="400px">
            <div class="card-body px-4">
                <p class="card-text fw-normal size-text-sm mb-0"><i class="fa fa-calendar me-1"></i>${contentArticles.publishDate} | <i class="fa fa-user me-1"></i>Admin ${contentArticles.publisherName}</p>
                <p class="card-text fw-normal size-text-sm mb-2"><i class="fa fa-tags me-1"></i>${contentArticles.categories}</p>
                <h5 class="card-title text-center fw-bold color-ctn py-2">${contentArticles.name}</h5>
                <p class="card-text text-limit mt-2 mb-0">
                    ${contentArticles.description}
                </p>
            </div>
            <div class="d-flex justify-content-center mt-2 mb-4">
                <a href="${`/#/detail-article/${contentArticles.id}`}"><button type="button" class="btn btn-outline-green px-3 py-2" tabindex="-1">Read More</button></a>
            </div>
        </div>
     </div>

`;

const createHomeEventTemplate = (contentEvents) => `
    <div class="col-md-6 col-lg-4 col-xl-3 mb-5">
        <div class="card shadow-lg rounded-card h-100">
            <img src="images/${contentEvents.pictureId}" alt="${contentEvents.name} illustration" class="card-img-top img-fluid border border-2 img-rounded-card" width="600px" height="700px">
            <div class="card-body px-4">
                <h5 class="card-title text-center fw-bold color-ctn py-2">${contentEvents.name}</h5>
                <p class="card-text fw-normal mb-0"><i class="fa fa-map-marker me-1"></i>${contentEvents.location}</p>
                <p class="card-text fw-normal mb-0"><i class="fa fa-calendar me-1"></i>${contentEvents.Date}</p>
                <p class="card-text fw-normal mb-0"><i class="fa fa-clock-o me-1"></i>${contentEvents.Time}</p>
                <p class="card-text fw-normal mb-0"><i class="fa fa-tags me-1"></i>${contentEvents.categories}</p>
            </div>
            <div class="d-flex justify-content-center mt-2 mb-4">
                <a href="${`/#/detail-article/${contentEvents.id}`}"><button type="button" class="btn btn-outline-green px-3 py-2" tabindex="-1">Read More</button></a>
            </div>
        </div>
    </div>
`;

export {
    createHomeArticleTemplate,
    createHomeEventTemplate,
    createContentArticleTemplate,
    createContentEventTemplate,
};