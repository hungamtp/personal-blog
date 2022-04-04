import React from 'react';

function Slide() {
  return (
    <div>
      <section className="home-slider position-relative">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <div
                className="bg-home-75vh d-flex align-items-center"
                style={{ background: "url('/asset/images/blog/bg1.jpg') center center;" }}
              >
                <div className="bg-overlay"></div>
                <div className="container">
                  <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                      <div className="title-heading text-center">
                        <h2 className="text-white title-dark mb-3">Weekend Travel</h2>
                        <ul className="list-unstyled">
                          <li className="list-inline-item small user text-light me-2">
                            <i className="uil uil-user text-white title-dark"></i> Calvin Carlo
                          </li>
                          <li className="list-inline-item small date text-light">
                            <i className="uil uil-calendar-alt text-white title-dark"></i> 25th June 2021
                          </li>
                        </ul>
                        <p className="para-desc mx-auto text-white-50 mb-0">
                          Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.
                        </p>
                        <div className="mt-4">
                          <a href="javascript:void(0)" className="btn btn-primary">
                            Read More{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000">
              <div
                className="bg-home-75vh d-flex align-items-center"
                style={{ background: "url('/asset/images/blog/bg2.jpg') center center;" }}
              >
                <div className="bg-overlay"></div>
                <div className="container">
                  <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                      <div className="title-heading text-center">
                        <h2 className="text-white title-dark mb-3">Business Meeting</h2>
                        <ul className="list-unstyled">
                          <li className="list-inline-item small user text-light me-2">
                            <i className="uil uil-user text-white title-dark"></i> Calvin Carlo
                          </li>
                          <li className="list-inline-item small date text-light">
                            <i className="uil uil-calendar-alt text-white title-dark"></i> 25th June 2021
                          </li>
                        </ul>
                        <p className="para-desc mx-auto text-white-50 mb-0">
                          Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.
                        </p>
                        <div className="mt-4">
                          <a href="javascript:void(0)" className="btn btn-primary">
                            Read More{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000">
              <div
                className="bg-home-75vh d-flex align-items-center"
                style={{ background: "url('/asset/images/blog/bg3.jpg') center center;" }}
              >
                <div className="bg-overlay"></div>
                <div className="container">
                  <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                      <div className="title-heading text-center">
                        <h2 className="text-white title-dark mb-3">Delicious & Organic</h2>
                        <ul className="list-unstyled">
                          <li className="list-inline-item small user text-light me-2">
                            <i className="uil uil-user text-white title-dark"></i> Calvin Carlo
                          </li>
                          <li className="list-inline-item small date text-light">
                            <i className="uil uil-calendar-alt text-white title-dark"></i> 25th June 2021
                          </li>
                        </ul>
                        <p className="para-desc mx-auto text-white-50 mb-0">
                          Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.
                        </p>
                        <div className="mt-4">
                          <a href="javascript:void(0)" className="btn btn-primary">
                            Read More{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Slide;
