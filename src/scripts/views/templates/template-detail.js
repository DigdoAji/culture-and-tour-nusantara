const createDetailArticleTemplate = (detailArticle) => `
        <div class="container-fluid">
            <div class="card border border-0">
                <div class="d-flex justify-content-center mx-3 mx-md-0 mt-2 mb-2 pt-4">
                    <img src="images/mountain-hero-1.jpg" 
                    class="img-fluid img-rounded border border-2 border-success mx-auto d-block" 
                    alt="ilustrasi ...." 
                    width="750px" height="300px"
                    >
                </div>
                <div class="card-body">
                    <h2 class="card-title text-center fw-bold py-2 mt-1">Bromo Mountain</h2>
                    <p class="card-text mt-2 mb-0 px-3 px-md-5">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident alias, 
                        voluptates officiis hic incidunt numquam deleniti doloribus molestiae rem, maiores, 
                        quam vel cupiditate id? Sunt iste delectus ipsa omnis ea. Lorem, ipsum dolor sit amet 
                        consectetur adipisicing elit. Deserunt at voluptatibus ad commodi, fuga dignissimos? 
                        Quidem totam tempora fugiat repudiandae in eius possimus, ea cum. Nostrum quia nihil nisi 
                        enim. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident alias, 
                        voluptates officiis hic incidunt numquam deleniti doloribus molestiae rem, maiores, 
                        quam vel cupiditate id? Sunt iste delectus ipsa omnis ea. Lorem, ipsum dolor sit amet 
                        consectetur adipisicing elit. Deserunt at voluptatibus ad commodi, fuga dignissimos? 
                        Quidem totam tempora fugiat repudiandae in eius possimus, ea cum. Nostrum quia nihil 
                        nisi enim.
                    </p>
                    <div class="row mt-2 mb-2 pt-4 px-3 px-md-5">
                        <div class="col-md-8 my-auto">
                            <h5 class="card-text fw-bold mb-3">Published by :</h5>
                            <p class="card-text fw-normal mb-2"><i class="fa fa-user me-2"></i>Admin Karin</p>
                            <p class="card-text fw-normal mb-2"><i class="fa fa-calendar me-2"></i>20 Mei 2022</p>
                            <p class="card-text fw-normal mb-2"><i class="fa fa-tags me-2"></i>Tourism, Adventure</p>
                        </div>
                        <div class="col-md-4 my-auto pt-3 d-flex justify-content-center justify-content-md-end">
                            <button type="button" class="btn btn-primary me-2 fw-bold px-4" tabindex="-1">Update</button>
                            <button type="button" class="btn btn-danger me-2 fw-bold px-4" tabindex="-1">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Review Article -->
        <div class="container mt-5">
            <h3 class="text-center color-ctn fw-bold pt-3 pb-1 mt-1">What's your comment?</h3>
            <form class="color-black mx-2 my-5 mx-sm-0 mx-md-5">
                <div class="form-floating mb-4">
                  <input type="text" class="form-control" id="inputUserReview" placeholder="Name">
                  <label for="inputUserReview">Name</label>
                </div>
                <div class="form-floating mb-4">
                  <textarea class="form-control comment-textarea" id="inputReview" placeholder="Leave your comment here"></textarea>
                  <label for="inputReview">Your Comment</label>
                </div>
                <div class="d-flex justify-content-center my-2 pt-3 pb-2 px-3 px-md-5">
                    <button type="button" class="btn btn-green fs-5 px-5 fw-bold" tabindex="-1">Submit</button>
                </div>
            </form>
        </div>
        <div class="container-fluid my-5 pb-4">
            <div class="row d-flex justify-content-center">

                <div class="col-md-9 px-4 px-md-0">
                    <div class="headings d-flex justify-content-between align-items-center mb-3">
                        <h5 class="color-ctn fw-bold pt-3 pb-1 mt-1">All User Comments</h5>
                    </div>
                    <div class="card card-comment my-3">
                        <div class="card-body py-3">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="user d-flex flex-row align-items-center">
                                    <img src="images/blank-profile.png" width="50" height="50" class="usercomment-img rounded-circle me-3">
                                    <h5 class="card-title fs-5 mb-0">Digdo Aji Asrowi</h5>
                                </div>
                                <p class="text-muted fs-6 mb-0">01 June 2022</p>
                            </div>
                            <div class="action d-flex justify-content-between align-items-center">
                            <div class="card-text px-3 ms-5">
                                <p class="fw-light mb-0 ps-1">Hmm, This poster looks cool</p>                           
                            </div>
                            <div class="align-items-center">
                                <button type="button" class="btn btn-danger fw-bold px-3" tabindex="-1">Remove</button>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="card card-comment my-3">
                        <div class="card-body py-3">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="user d-flex flex-row align-items-center">
                                    <img src="images/blank-profile.png" width="50" height="50" class="usercomment-img rounded-circle me-3">
                                    <h5 class="card-title fs-5 mb-0">Digdo Aji Asrowi</h5>
                                </div>
                                <p class="text-muted fs-6 mb-0">01 June 2022</p>
                            </div>
                            <div class="action d-flex justify-content-between align-items-center">
                            <div class="card-text px-3 ms-5">
                                <p class="fw-light mb-0 ps-1">Hmm, This poster looks cool</p>                           
                            </div>
                            <div class="align-items-center">
                                <button type="button" class="btn btn-danger fw-bold px-3" tabindex="-1">Remove</button>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`;

const createDetailEventTemplate = (detailEvent) => `
        <div class="container my-5">
            <div class="row">
                <div class="col-md-7 d-flex justify-content-md-end">
                    <div class="p-3" >
                        <h2 class="mt-2">Banjar Traditional Rowboat Competition</h2>
                        <p class="fw-normal size-text-md mb-1"><i class="fa fa-map-marker me-2"></i>Martapura, South Borneo</p>
                        <p class="fw-normal size-text-md mb-1"><i class="fa fa-calendar me-2"></i>15 May 2022</p>
                        <p class="fw-normal size-text-md mb-1"><i class="fa fa-clock-o me-2"></i>08.00 WITA - 16.00 WITA</p>
                        <p class="fw-normal size-text-md mb-4"><i class="fa fa-tags me-2"></i>Culture, Tourism</p>
                        <h3 class="fw-bold size-text-md mb-1">Description :</h3>
                        <p class="fw-normal mt-2 mb-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident alias, voluptates officiis 
                            hic incidunt numquam deleniti doloribus molestiae rem, maiores, quam vel cupiditate id? Sunt iste 
                            delectus ipsa omnis ea. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt at 
                            voluptatibus ad commodi, fuga dignissimos? Quidem totam tempora fugiat repudiandae in eius 
                            possimus, ea cum. Nostrum quia nihil nisi enim. Lorem, ipsum dolor sit amet consectetur adipisicing 
                            elit. Provident alias, voluptates officiis hic incidunt numquam deleniti doloribus molestiae 
                            rem, maiores, quam vel cupiditate id? Sunt iste delectus ipsa omnis ea. Lorem, ipsum dolor sit 
                            amet consectetur adipisicing elit. Deserunt at voluptatibus ad commodi, fuga dignissimos? Quidem 
                            totam tempora fugiat repudiandae in eius possimus, ea cum. Nostrum quia nihil nisi enim.
                        </p>
                    </div>
                </div>
                <div class="col-md-5">
                    <img src="images/lomba-jukung-tradisonal-banjar.png" 
                        class="img-fluid img-rounded border border-2 border-success mx-auto d-block" 
                        width="8000px" height="200px"
                        alt="poster ..."
                    >
                    <div class="d-flex justify-content-center justify-content-md-end mt-2 mb-2 pt-4">
                        <button type="button" class="btn btn-primary ms-2 fw-bold px-4" tabindex="-1">Update</button>
                        <button type="button" class="btn btn-danger ms-2 fw-bold px-4" tabindex="-1">Delete</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Review Event  -->
        <div class="container mt-5">
            <h3 class="text-center color-ctn fw-bold pt-3 pb-1 mt-1">What's your comment?</h3>
            <form class="color-black mx-2 my-5 mx-sm-0 mx-md-5">
                <div class="form-floating mb-4">
                  <input type="text" class="form-control" id="inputUserReview" placeholder="Name">
                  <label for="inputUserReview">Name</label>
                </div>
                <div class="form-floating mb-4">
                  <textarea class="form-control comment-textarea" id="inputReview" placeholder="Leave your comment here"></textarea>
                  <label for="inputReview">Your Comment</label>
                </div>
                <div class="d-flex justify-content-center my-2 pt-3 pb-2 px-3 px-md-5">
                    <button type="button" class="btn btn-green fs-5 px-5 fw-bold" tabindex="-1">Submit</button>
                </div>
            </form>
        </div>
        <div class="container-fluid my-5 pb-4">
            <div class="row d-flex justify-content-center">

                <div class="col-md-9 px-4 px-md-0">
                    <div class="headings d-flex justify-content-between align-items-center mb-3">
                        <h5 class="color-ctn fw-bold pt-3 pb-1 mt-1">All User Comments</h5>
                    </div>
                    <div class="card card-comment my-3">
                        <div class="card-body py-3">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="user d-flex flex-row align-items-center">
                                    <img src="images/blank-profile.png" width="50" height="50" class="usercomment-img rounded-circle me-3">
                                    <h5 class="card-title fs-5 mb-0">Digdo Aji Asrowi</h5>
                                </div>
                                <p class="text-muted fs-6 mb-0">01 June 2022</p>
                            </div>
                            <div class="action d-flex justify-content-between align-items-center">
                            <div class="card-text px-3 ms-5">
                                <p class="fw-light mb-0 ps-1">Hmm, This poster looks cool</p>                           
                            </div>
                            <div class="align-items-center">
                                <button type="button" class="btn btn-danger fw-bold px-3" tabindex="-1">Remove</button>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="card card-comment my-3">
                        <div class="card-body py-3">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="user d-flex flex-row align-items-center">
                                    <img src="images/blank-profile.png" width="50" height="50" class="usercomment-img rounded-circle me-3">
                                    <h5 class="card-title fs-5 mb-0">Digdo Aji Asrowi</h5>
                                </div>
                                <p class="text-muted fs-6 mb-0">01 June 2022</p>
                            </div>
                            <div class="action d-flex justify-content-between align-items-center">
                            <div class="card-text px-3 ms-5">
                                <p class="fw-light mb-0 ps-1">Hmm, This poster looks cool</p>                           
                            </div>
                            <div class="align-items-center">
                                <button type="button" class="btn btn-danger fw-bold px-3" tabindex="-1">Remove</button>
                            </div>
                          </div>
                        </div>
                    </div>                 
                </div>
            </div>
        </div>
`;

export {
    createDetailArticleTemplate,
    createDetailEventTemplate,
};