import Link from "next/link";

export default function Footer() {
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
                      <li><Link href="/services">Truck Freight</Link></li>
                      <li><Link href="/services">Dedicated Freight</Link></li>
                      <li><Link href="/services">LTL Shipping</Link></li>
                      <li><Link href="/services">Expedited Shipping</Link></li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="widget">
                    <h5>Company</h5>
                    <ul>
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="/about">About Us</Link></li>
                      <li><Link href="/contact">Contact</Link></li>
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
                <h3>7734 Nebraska Ave, Omaha NE 68134</h3>
                <h3 className="mt-2">3327 N Washburn Ave, Minneapolis MN 55412</h3>

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
                <span style={{ fontSize: '0.8em', opacity: 0.7 }}>US DOT: 3823948 | MC: 01384682</span>
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
            <li>Truck Freight</li>
            <li>Dedicated Freight</li>
            <li>LTL Shipping</li>
            <li>Expedited Shipping</li>
          </ul>

          <div className="spacer-30-line"></div>

          <h5>Contact Us</h5>
          <div><i className="icofont-phone me-2 op-5"></i>(612) 237-7374</div>
          <div><i className="icofont-location-pin me-2 op-5"></i>7734 Nebraska Ave, Omaha NE</div>

          <div className="spacer-30-line"></div>

          <h5>About Us</h5>
          <p>We are a trusted ground transportation and trucking company committed to delivering your freight safely, efficiently, and on time across the United States.</p>

        </div>
      </div>
      {/* overlay content end */}
    </>
  );
}
