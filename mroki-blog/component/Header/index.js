import React from 'react';
import Image from 'next/image';
import SettingIcon from '../../Icon/SettingIcon';

function Header() {
  const toggleMenu = () => {
    document.getElementById('isToggle').classList.toggle('open');
    var isOpen = document.getElementById('navigation');
    if (isOpen.style.display === 'block') {
      isOpen.style.display = 'none';
    } else {
      isOpen.style.display = 'block';
    }
  };
  return (
    <header id="topnav" className="defaultscroll sticky bg-white">
      <div className="container">
        <a className="logo" href="index.html">
          <img src="/asset/images/logo-dark.png" height={24} className="logo-light-mode" alt="Logo" />
          <img src="/asset/images/logo-light.png" height={24} className="logo-dark-mode" alt="" />
        </a>

        <div className="menu-extras">
          <div className="menu-item">
            <a className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>

        <ul className="buy-button list-inline mb-0">
          <li className="list-inline-item mb-0 pe-1">
            <a href="javascript:void(0)" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
              <i className="uil uil-search h5 text-dark align-middle"></i>
            </a>
          </li>

          <li className="list-inline-item mb-0">
            <a href="javascript:void(0)" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <div className="btn btn-icon btn-pills btn-soft-primary">
                <SettingIcon />
              </div>
            </a>
          </li>

          <li className="list-inline-item ps-1 mb-0">
            <a href="https://1.envato.market/4n73n">
              <div className="btn btn-icon btn-pills btn-primary">
                <SettingIcon />
              </div>
            </a>
          </li>
        </ul>

        <div id="navigation">
          <ul className="navigation-menu">
            <li>
              <a href="index-blog.html" className="sub-menu-item">
                Home
              </a>
            </li>

            <li>
              <a href="blog-about.html" className="sub-menu-item">
                About
              </a>
            </li>

            <li className="has-submenu parent-menu-item">
              <a href="javascript:void(0)">Post</a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li>
                  <a href="blog-standard-post.html" className="sub-menu-item">
                    Standard Post
                  </a>
                </li>
                <li>
                  <a href="blog-slider-post.html" className="sub-menu-item">
                    Slider Post
                  </a>
                </li>
                <li>
                  <a href="blog-gallery-post.html" className="sub-menu-item">
                    Gallery Post
                  </a>
                </li>
                <li>
                  <a href="blog-youtube-post.html" className="sub-menu-item">
                    Youtube Post
                  </a>
                </li>
                <li>
                  <a href="blog-vimeo-post.html" className="sub-menu-item">
                    Vimeo Post
                  </a>
                </li>
                <li>
                  <a href="blog-audio-post.html" className="sub-menu-item">
                    Audio Post
                  </a>
                </li>
                <li>
                  <a href="blog-blockquote-post.html" className="sub-menu-item">
                    Blockquote
                  </a>
                </li>
                <li>
                  <a href="blog-left-sidebar-post.html" className="sub-menu-item">
                    Left Sidebar
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="javascript:void(0)" className="sub-menu-item">
                Lifestyle
              </a>
            </li>

            <li>
              <a href="javascript:void(0)" className="sub-menu-item">
                Technology
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
