import React from "react";
import Slider from "react-slick";

export default function HomeProductSection(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    slickPrev: "none",
  };
  console.log("props", props);
  return (
    <>
      <section className="home-products py-4">
        <div className="container">
          <div className="row no-gutters justify-content-between">
            <div className="col-9">
              <div className="main-heading text-left">
                <h3 className=""> {props.sectionTitle} </h3>
              </div>
            </div>
            <div className="col-3 text-right">
              <a
                href="#"
                className="btn  px-lg-4 btn-outline-info btn-lg round-xl round"
              >
                View All
              </a>
            </div>
          </div>
        </div>
        <div className="bg-items">
          <div className="row">
            <div className="col-12">
              <div className="js-products-slider">
                <Slider {...settings}>
                  {props.products &&
                    props.products.map((product) => {
                      return (
                        <div>
                          <div className="product-item">
                            <div className="box">
                              <figure className="img-holder">
                                <img
                                  className="img-fluid "
                                  src={product.product_image}
                                  alt="product img"
                                />
                              </figure>

                              <div className="caption ">
                                <a
                                  href="product-details.php"
                                  className="h6 font-weight-normal"
                                >
                                 {product.product_name}
                                  <span className="small d-block">{product.product_quantity} {product.product_basic_unit}</span>
                                </a>

                                <p className="text-light-blue h5  text-capitalize">
                                  ${product.product_price}
                                </p>
                              </div>
                              <div className="btn-box ">
                                <button className="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
                                  {" "}
                                  <i className="ti-plus"></i>
                                  add to cart
                                </button>

                                <div
                                  className="cart-inc-dec btn btn-info round-xl round btn-lg btn-block d-none"
                                >
                                  {/* <button
                                    type="button"
                                    onclick="decrementValue()"
                                  >
                                    <i className="ti-minus"></i>
                                  </button>
                                  <input
                                    type="text"
                                    name="quantity"
                                    value="1"
                                    maxlength="2"
                                    max="10"
                                    size="1"
                                    id="number"
                                  />
                                  <button
                                    type="button"
                                    onclick="incrementValue()"
                                  >
                                    <i className="ti-plus"></i>
                                  </button> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
