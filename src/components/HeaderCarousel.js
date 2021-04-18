import React from 'react'
import banner1 from  "../assets/images/home/banner-img.png"
import Slider from "react-slick";


export default function HeaderCarousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 2,
        slickPrev: "none"
      };
    return (
        
      <>
      
       <section class="home-banner">
      <div class="banner pt-5 border d-flex justify-content-center">
        <div class="w-100 mb-5 align-self-end pt-5">
          <div class="js-main-slider align-self-end">
           
          <Slider {...settings}>
      <div>
      <div class="item">
              <div class="row justify-content-center">
                <div class="col-md-6">
                  <div class="caption ">
                    <h2 class="heading-lg text-light">We deliver all kind of grocery in reliable cost which is best for
                      you.</h2>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-holder">
                    <img class="img-fluid " src={banner1} alt="banner img" />
                  </div>
                </div>
              </div>
            </div>
      </div>
      <div>
      <div class="item">
              <div class="d-md-flex justify-content-center">
                <div class="col-md-6">
                  <div class="caption ">
                    <h2 class="heading-lg text-light">We deliver all kind of grocery in reliable cost which is best for
                      you.</h2>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-holder">
                    <img class="img-fluid " src={banner1} alt="banner img" />
                  </div>
                </div>
              </div>
            </div>
      </div>
      
    </Slider>

          </div>
        </div>
      </div>
    </section>
      </>
    )
}
