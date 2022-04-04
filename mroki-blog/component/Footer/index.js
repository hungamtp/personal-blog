import React from 'react';
import InstagramIcon from '../../Icon/InstagramIcon';
import MailIcon from '../../Icon/MailIcon';

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-py-60">
                <div className="row">
                  <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                    <p>Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="rounded">
                          <i data-feather="facebook" className="fea icon-sm fea-social"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="rounded">
                          <i data-feather="instagram" className="fea icon-sm fea-social"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="rounded">
                          <i data-feather="twitter" className="fea icon-sm fea-social"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript:void(0)" className="rounded">
                          <i data-feather="linkedin" className="fea icon-sm fea-social"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5 className="footer-head">Company</h5>
                    <ul className="list-unstyled footer-list mt-4">
                      <li>
                        <a href="javascript:void(0)" className="text-foot">
                          <i className="uil uil-angle-right-b me-1"></i> About us
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="text-foot">
                          <i className="uil uil-angle-right-b me-1"></i> Services
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="text-foot">
                          <i className="uil uil-angle-right-b me-1"></i> Team
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="text-foot">
                          <i className="uil uil-angle-right-b me-1"></i> Pricing
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="text-foot">
                          <i className="uil uil-angle-right-b me-1"></i> Project
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="text-foot">
                          <i className="uil uil-angle-right-b me-1"></i> Careers
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="text-foot">
                          <i className="uil uil-angle-right-b me-1"></i> Blog
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="text-foot">
                          <i className="uil uil-angle-right-b me-1"></i> Login
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5 className="footer-head">Usefull Links</h5>
                    <ul className="list-unstyled footer-list mt-4">
                      <li>
                        <a href="javascript:void(0)" className="text-foot">
                          <i className="uil uil-angle-right-b me-1"></i> Terms of Services
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="text-foot">
                          <i className="uil uil-angle-right-b me-1"></i> Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="text-foot">
                          <i className="uil uil-angle-right-b me-1"></i> Documentation
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="text-foot">
                          <i className="uil uil-angle-right-b me-1"></i> Changelog
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="text-foot">
                          <i className="uil uil-angle-right-b me-1"></i> Components
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5 className="footer-head">Newsletter</h5>
                    <p className="mt-4">Sign up and receive the latest tips via email.</p>
                    <form>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="foot-subscribe mb-3">
                            <label className="form-label">
                              Write your email <span className="text-danger">*</span>
                            </label>
                            <div className="form-icon position-relative">
                              <i data-feather="mail" className="fea icon-sm icons"></i>
                              <input
                                type="email"
                                name="email"
                                id="emailsubscribe"
                                className="form-control ps-5 rounded"
                                placeholder="Your email : "
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="d-grid">
                            <input type="submit" id="submitsubscribe" name="send" className="btn btn-soft-primary" value="Subscribe" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-py-30 footer-border">
                <div className="container text-center">
                  <div className="row align-items-center">
                    <div className="col-sm-6">
                      <div className="text-sm-start">
                        <a href="#" className="logo-footer">
                          <img src="asset/images/logo-light.png" height="24" alt="" />
                        </a>
                      </div>
                    </div>

                    <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <ul className="list-unstyled footer-list terms-service text-sm-end mb-0">
                        <li className="list-inline-item mb-0">
                          <a href="javascript:void(0)" className="text-foot me-2">
                            Privacy
                          </a>
                        </li>
                        <li className="list-inline-item mb-0">
                          <a href="javascript:void(0)" className="text-foot me-2">
                            Terms
                          </a>
                        </li>
                        <li className="list-inline-item mb-0">
                          <a href="javascript:void(0)" className="text-foot me-2">
                            FAQs
                          </a>
                        </li>
                        <li className="list-inline-item mb-0">
                          <a href="javascript:void(0)" className="text-foot">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-py-30 footer-border">
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-sm-12">
                <p className="mb-0">
                  © <script>document.write(new Date().getFullYear())</script> Landrick. Design with{' '}
                  <i className="mdi mdi-heart text-danger"></i> by{' '}
                  <a href="https://shreethemes.in/" className="text-reset">
                    Shreethemes
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="offcanvas offcanvas-end bg-white shadow" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header p-4 border-bottom">
          <h5 id="offcanvasRightLabel" className="mb-0">
            <img src="asset/images/logo-dark.png" height={24} className="light-version" alt="" />
            <img src="asset/images/logo-light.png" height={24} className="dark-version" alt="" />
          </h5>
          <button type="button" className="btn-close d-flex align-items-center text-dark" data-bs-dismiss="offcanvas" aria-label="Close">
            <i className="uil uil-times fs-4"></i>
          </button>
        </div>
        <div className="offcanvas-body p-4">
          <div className="row">
            <div className="col-12">
              <img src="asset/images/contact.svg" className="img-fluid d-block mx-auto" style={{ maxWidth: '256px' }} alt="" />
              <div className="card border-0 mt-5" style={{ zIndex: 1 }}>
                <div className="card-body p-0">
                  <form method="post" name="myForm" onSubmit="return validateForm()">
                    <p id="error-msg" className="mb-0"></p>
                    <div id="simple-msg"></div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Your Name <span className="text-danger">*</span>
                          </label>
                          <div className="form-icon position-relative">
                            <i data-feather="user" className="fea icon-sm icons"></i>
                            <input name="name" id="name" type="text" className="form-control ps-5" placeholder="Name :" />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Your Email <span className="text-danger">*</span>
                          </label>
                          <div className="form-icon position-relative">
                            <MailIcon />
                            <input name="email" id="email" type="email" className="form-control ps-5" placeholder="Email :" />
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="mb-3">
                          <label className="form-label">Subject</label>
                          <div className="form-icon position-relative">
                            <i data-feather="book" className="fea icon-sm icons"></i>
                            <input name="subject" id="subject" className="form-control ps-5" placeholder="subject :" />
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Comments <span className="text-danger">*</span>
                          </label>
                          <div className="form-icon position-relative">
                            <i data-feather="message-circle" className="fea icon-sm icons clearfix"></i>
                            <textarea
                              name="comments"
                              id="comments"
                              rows="4"
                              className="form-control ps-5"
                              placeholder="Message :"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="d-grid">
                          <button type="submit" id="submit" name="send" className="btn btn-primary">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="offcanvas-footer p-4 border-top text-center">
          <ul className="list-unstyled social-icon social mb-0">
            <li className="list-inline-item mb-0">
              <a href="https://1.envato.market/4n73n" className="rounded">
                <i className="uil uil-shopping-cart align-middle" title="Buy Now"></i>
              </a>
            </li>
            <li className="list-inline-item mb-0">
              <a href="https://dribbble.com/shreethemes" className="rounded">
                <i className="uil uil-dribbble align-middle" title="dribbble"></i>
              </a>
            </li>
            <li className="list-inline-item mb-0">
              <a href="https://www.facebook.com/shreethemes" className="rounded">
                <i className="uil uil-facebook-f align-middle" title="facebook"></i>
              </a>
            </li>
            <li className="list-inline-item mb-0">
              <a href="https://www.instagram.com/shreethemes/" className="rounded">
                <InstagramIcon />
              </a>
            </li>
            <li className="list-inline-item mb-0">
              <a href="https://twitter.com/shreethemes" className="rounded">
                <InstagramIcon />
              </a>
            </li>
            <li className="list-inline-item mb-0">
              <a href="mailto:support@shreethemes.in" className="rounded">
                <i className="uil uil-envelope align-middle" title="email"></i>
              </a>
            </li>
            <li className="list-inline-item mb-0">
              <a href="https://shreethemes.in" className="rounded">
                <i className="uil uil-globe align-middle" title="website"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="offcanvas bg-white offcanvas-top" tabIndex="-1" id="offcanvasTop">
        <div className="offcanvas-body d-flex align-items-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="text-center">
                  <h4>Search now.....</h4>
                  <div className="subcribe-form mt-4">
                    <form>
                      <div className="mb-0">
                        <input
                          type="text"
                          id="help"
                          name="name"
                          className="border bg-white rounded-pill"
                          required=""
                          placeholder="Search"
                        />
                        <button type="submit" className="btn btn-pills btn-primary">
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cookie-popup bg-white shadow rounded py-3 px-4">
        <p className="text-muted mb-0">
          This website uses cookies to provide you with a great user experience. By using it, you accept our{' '}
          <a href="https://shreethemes.in" className="text-success h6">
            use of cookies
          </a>
        </p>
        <div className="cookie-popup-actions text-end">
          <button>
            <i className="uil uil-times text-dark fs-4"></i>
          </button>
        </div>
      </div>

      <a href="#" onclick="topFunction()" id="back-to-top" className="back-to-top fs-5">
        <i data-feather="arrow-up" className="fea icon-sm icons align-middle"></i>
      </a>

      <div id="style-switcher" className="bg-light border p-3 pt-2 pb-2" onclick="toggleSwitcher()">
        <div>
          <h6 className="title text-center">Select Your Color</h6>
          <ul className="pattern">
            <li className="list-inline-item">
              <a className="color1" href="javascript: void(0);" onclick="setColor('default')"></a>
            </li>
            <li className="list-inline-item">
              <a className="color2" href="javascript: void(0);" onclick="setColor('green')"></a>
            </li>
            <li className="list-inline-item">
              <a className="color3" href="javascript: void(0);" onclick="setColor('purple')"></a>
            </li>
            <li className="list-inline-item">
              <a className="color4" href="javascript: void(0);" onclick="setColor('red')"></a>
            </li>
            <li className="list-inline-item">
              <a className="color5" href="javascript: void(0);" onclick="setColor('skyblue')"></a>
            </li>
            <li className="list-inline-item">
              <a className="color6" href="javascript: void(0);" onclick="setColor('skobleoff')"></a>
            </li>
            <li className="list-inline-item">
              <a className="color7" href="javascript: void(0);" onclick="setColor('cyan')"></a>
            </li>
            <li className="list-inline-item">
              <a className="color8" href="javascript: void(0);" onclick="setColor('slateblue')"></a>
            </li>
            <li className="list-inline-item">
              <a className="color9" href="javascript: void(0);" onclick="setColor('yellow')"></a>
            </li>
          </ul>

          <h6 className="title text-center pt-3 mb-0 border-top">Theme Option</h6>
          <ul className="text-center list-unstyled">
            <li className="d-grid">
              <a
                href="javascript:void(0)"
                className="btn btn-sm btn-block btn-primary rtl-version t-rtl-light mt-2"
                onclick="setTheme('style-rtl')"
              >
                RTL
              </a>
            </li>
            <li className="d-grid">
              <a
                href="javascript:void(0)"
                className="btn btn-sm btn-block btn-primary ltr-version t-ltr-light mt-2"
                onclick="setTheme('style')"
              >
                LTR
              </a>
            </li>
            <li className="d-grid">
              <a
                href="javascript:void(0)"
                className="btn btn-sm btn-block btn-primary dark-rtl-version t-rtl-dark mt-2"
                onclick="setTheme('style-dark-rtl')"
              >
                RTL
              </a>
            </li>
            <li className="d-grid">
              <a
                href="javascript:void(0)"
                className="btn btn-sm btn-block btn-primary dark-ltr-version t-ltr-dark mt-2"
                onclick="setTheme('style-dark')"
              >
                LTR
              </a>
            </li>
            <li className="d-grid">
              <a
                href="javascript:void(0)"
                className="btn btn-sm btn-block btn-dark dark-version t-dark mt-2"
                onclick="setTheme('style-dark')"
              >
                Dark
              </a>
            </li>
            <li className="d-grid">
              <a href="javascript:void(0)" className="btn btn-sm btn-block btn-dark light-version t-light mt-2" onclick="setTheme('style')">
                Light
              </a>
            </li>
          </ul>

          <h6 className="title text-center pt-3 mb-0 border-top">Admin</h6>
          <ul className="text-center list-unstyled mb-0">
            <li>
              <a href="javascript:void(0)" className="btn btn-sm btn-block btn-success mt-2">
                Admin Dashboard
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <a href="javascript: void(0);" className="settings bg-white title-bg-dark shadow d-block">
            <i className="mdi mdi-cog ms-1 mdi-24px position-absolute mdi-spin text-primary"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
