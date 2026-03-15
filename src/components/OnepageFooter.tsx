export default function OnepageFooter() {
  return (
    <>
      <footer className="text-light section-dark">
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-md-6">
              <img src="/images/btb_logo1.png" className="w-170px mb-2" alt="Box Truck Boys Trucking Logo" />
              <div className="spacer-single"></div>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="widget">
                    <h5>Services</h5>
                    <ul>
                      <li><a href="#section-services">Our Services</a></li>
                      <li><a href="https://boxtruckboys.com/services/medical-courier">Medical Courier</a></li>
                      <li><a href="https://boxtruckboys.com/services/same-day">Same-Day Delivery</a></li>
                      <li><a href="https://boxtruckboys.com/services/last-mile">Last-Mile Delivery</a></li>
                      <li><a href="https://boxtruckboys.com/services/box-truck-freight">Box Truck Freight</a></li>
                      <li><a href="https://boxtruckboys.com/services/hot-shot">Hot Shot / Expedited</a></li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="widget">
                    <h5>Company</h5>
                    <ul>
                      <li><a href="https://boxtruckboys.com">Home</a></li>
                      <li><a href="https://boxtruckboys.com/about">About Us</a></li>
                      <li><a href="https://boxtruckboys.com/contact">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            <div className="col-md-6">
              <div className="d-flex align-items-center justify-content-between">
                <h2>Get in Touch</h2>
                <img src="/images/ui/up-right-arrow.webp" className="w-60px op-5" alt="" />
              </div>

              <div className="widget">
                <div className="op-5 fs-15">Email</div>
                <h3>contact@boxtruckboys.com</h3>

                <div className="spacer-20"></div>

                <div className="op-5 fs-15">Phone</div>
                <h3>(612) 237-7374</h3>

                <div className="spacer-20"></div>

                <div className="op-5 fs-15">Office Locations</div>
                <h3>3327 N Washburn Ave, Minneapolis MN 55412</h3>
                <h3 className="mt-2">7734 Nebraska Ave, Omaha NE 68134</h3>

                <div className="spacer-20"></div>

              </div>
            </div>
          </div>
        </div>
        <div className="subfooter">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                Copyright {new Date().getFullYear()} Box Truck Boys Trucking
                <br />
                <span style={{ fontSize: '0.8em', opacity: 0.7 }}>US DOT: 3823948 | MC: MC-1384682</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* overlay content begin */}
      <div id="extra-wrap" className="text-light">
        <div id="btn-close">
          <span></span>
          <span></span>
        </div>

        <div id="extra-content">
          <img src="/images/btb_logo1.png" className="w-200px" alt="" />

          <div className="spacer-30-line"></div>

          <h5>Our Services</h5>
          <ul className="ul-check">
            <li>Medical Courier Service</li>
            <li>Same-Day Delivery</li>
            <li>Last-Mile Delivery</li>
            <li>Scheduled Route Delivery</li>
            <li>Box Truck Freight</li>
            <li>Hot Shot / Expedited</li>
            <li>White Glove Delivery</li>
            <li>LTL Shipping</li>
          </ul>

          <div className="spacer-30-line"></div>

          <h5>Contact Us</h5>
          <div><i className="icofont-phone me-2 op-5"></i>(612) 237-7374</div>
          <div><i className="icofont-envelope me-2 op-5"></i>contact@boxtruckboys.com</div>
          <div><i className="icofont-location-pin me-2 op-5"></i>3327 N Washburn Ave, Minneapolis MN 55412</div>

          <div className="spacer-30-line"></div>

          <h5>About Us</h5>
          <p>Box Truck Boys is a locally owned Minneapolis delivery company specializing in medical courier, same-day delivery, and box truck freight services throughout the Twin Cities.</p>

        </div>
      </div>
      {/* overlay content end */}
    </>
  );
}
