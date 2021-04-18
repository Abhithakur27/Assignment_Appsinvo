import React from 'react'
import appStoreImg from  "../assets/images/app-store.png"
import playStoreImg from  "../assets/images/playstore.png"

export default function Footer() {
    return (
        <>
            <footer className="position-relative text-center text-sm-left text-white">
    <section className="footer px-3 px-lg-5">
      <div className="container">

        <div className="row justify-content-between">
          <div className="col-md-4">
            <div className="textwidget">
              <h4 className="widget-title mb-2 mt-3">Support</h4>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="#">about us</a>
                  <a className="nav-link" href="#">contact us</a>
                  <a className="nav-link" href="terms-and-conditions.html">terms & conditions</a>
                  <a className="nav-link" href="#">privacy policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="textwidget">
              <h4 className="widget-title mb-2 mt-3">Download App</h4>
              <div className="my-3">
                <a href="#" target="_blank" className="p-2 p-xl-0 d-inline-block">
                  <img className="img-fluid" src={appStoreImg} alt="app-store.png" />
                </a>
                <a href="#" target="_blank" className="p-2 p-xl-0 d-inline-block">
                  <img className="img-fluid" src={playStoreImg} alt="playstore.png" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-md-flex justify-content-end">
            <div className="textwidget ">
              <h4 className="widget-title mb-2 mt-3">Follow us</h4>
              <p>Join our mailing list for news and the best esclusive travel deals</p>
              <form className="form-group d-sm-flex d-md-block d-lg-flex my-2 my-lg-0">
                <input
                  className="form-control round round-xl form-control-lg col-sm-8 col-md-12 col-lg-8 mr-sm-2 mr-md-0 mr-lg-2"
                  type="search" placeholder="Email ID" aria-label="Search" />
                <button
                  className="btn col-sm-4 col-lg-4 col-md-12 round round-xl btn-lg btn-primary my-2 my-sm-0 my-md-2 my-lg-0"
                  type="submit">Sign Up</button>
              </form>
              <div className="social-contact my-3">
                <a href="https://www.facebook.com/" target="_blank" className="facebook"><span
                    className="fab fa-facebook-f"></span></a>
                <a href="https://www.twitter.com/" target="_blank" className="twitter"><span
                    className="fab fa-twitter"></span></a>
                <a href="https://www.linkedin.com/" target="_blank" className="linkedin"><span
                    className="fab fa-linkedin"></span></a>
                <a href="https://www.instagram.com/" target="_blank" className="instagram"><span
                    className="fab fa-instagram "></span></a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
    <section className="sub-footer py-4">
      <div className="container text-center">
        Copyright &copy; 2020 Snapp App. All rights reserved
      </div>

    </section>
  </footer>
        </>
    )
}
