import React from 'react';
import ArrowRight from '../../Icon/ArrowRight';

function PopularPost() {
  return (
    <div className="container mt-4 mt-lg-0">
      <div className="row align-items-center mb-4 pb-2">
        <div className="col-md-8">
          <div className="section-title text-center text-md-start">
            <h4 className="mb-4">Popular post</h4>
            <p className="text-muted mb-0 para-desc">
              Start working with <span className="text-primary fw-bold">Landrick</span> that can provide everything you need to generate
              awareness, drive traffic, connect.
            </p>
          </div>
        </div>

        <div className="col-md-4 mt-4 mt-sm-0">
          <div className="text-center text-md-end">
            <a href="javascript:void(0)" className="btn btn-soft-primary">
              See More <ArrowRight />
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-6 mt-4 pt-2">
          <div className="card blog rounded border-0 shadow overflow-hidden">
            <div className="position-relative">
              <img src="/asset/images/blog/01.jpg" className="card-img-top" alt="..." />
              <div className="overlay rounded-top"></div>
            </div>
            <div className="card-body content">
              <h5>
                <a href="javascript:void(0)" className="card-title title text-dark">
                  Design your apps in your own way
                </a>
              </h5>
              <div className="post-meta d-flex justify-content-between mt-3">
                <ul className="list-unstyled mb-0">
                  <li className="list-inline-item me-2 mb-0">
                    <a href="javascript:void(0)" className="text-muted like">
                      <i className="uil uil-heart me-1"></i>33
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="text-muted comments">
                      <i className="uil uil-comment me-1"></i>08
                    </a>
                  </li>
                </ul>
                <a href="blog-detail.html" className="text-muted readmore">
                  Read More <i className="uil uil-angle-right-b align-middle"></i>
                </a>
              </div>
            </div>
            <div className="author">
              <small className="text-light user d-block">
                <i className="uil uil-user"></i> Calvin Carlo
              </small>
              <small className="text-light date">
                <i className="uil uil-calendar-alt"></i> 25th June 2021
              </small>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mt-4 pt-2">
          <div className="card blog rounded border-0 shadow overflow-hidden">
            <div className="position-relative">
              <img src="/asset/images/blog/02.jpg" className="card-img-top" alt="..." />
              <div className="overlay rounded-top"></div>
            </div>
            <div className="card-body content">
              <h5>
                <a href="javascript:void(0)" className="card-title title text-dark">
                  How apps is changing the IT world
                </a>
              </h5>
              <div className="post-meta d-flex justify-content-between mt-3">
                <ul className="list-unstyled mb-0">
                  <li className="list-inline-item me-2 mb-0">
                    <a href="javascript:void(0)" className="text-muted like">
                      <i className="uil uil-heart me-1"></i>33
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="text-muted comments">
                      <i className="uil uil-comment me-1"></i>08
                    </a>
                  </li>
                </ul>
                <a href="blog-detail.html" className="text-muted readmore">
                  Read More <i className="uil uil-angle-right-b align-middle"></i>
                </a>
              </div>
            </div>
            <div className="author">
              <small className="text-light user d-block">
                <i className="uil uil-user"></i> Calvin Carlo
              </small>
              <small className="text-light date">
                <i className="uil uil-calendar-alt"></i> 25th June 2021
              </small>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mt-4 pt-2">
          <div className="card blog rounded border-0 shadow overflow-hidden">
            <div className="position-relative">
              <img src="/asset/images/blog/03.jpg" className="card-img-top" alt="..." />
              <div className="overlay rounded-top"></div>
            </div>
            <div className="card-body content">
              <h5>
                <a href="javascript:void(0)" className="card-title title text-dark">
                  Smartest Applications for Business
                </a>
              </h5>
              <div className="post-meta d-flex justify-content-between mt-3">
                <ul className="list-unstyled mb-0">
                  <li className="list-inline-item me-2 mb-0">
                    <a href="javascript:void(0)" className="text-muted like">
                      <i className="uil uil-heart me-1"></i>33
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="text-muted comments">
                      <i className="uil uil-comment me-1"></i>08
                    </a>
                  </li>
                </ul>
                <a href="blog-detail.html" className="text-muted readmore">
                  Read More <i className="uil uil-angle-right-b align-middle"></i>
                </a>
              </div>
            </div>
            <div className="author">
              <small className="text-light user d-block">
                <i className="uil uil-user"></i> Calvin Carlo
              </small>
              <small className="text-light date">
                <i className="uil uil-calendar-alt"></i> 25th June 2021
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularPost;
