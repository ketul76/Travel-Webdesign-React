import React from 'react';

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg px-5 header">
        <div class="container-fluid  ">
          <a class="navbar-brand text-white" href="#">
            <img src='./logo.jpg' /> TRAVEL
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Read Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;