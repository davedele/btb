import Link from "next/link";

export default function Header() {
  return (
    <header className="header-static transparent mt-lg-4 pt-lg-2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                {/* logo begin */}
                <div id="logo">
                  <Link href="/">
                    <img className="logo-main" src="/images/btb_logo1.png" alt="Box Truck Boys Logo" />
                    <img className="logo-scroll" src="/images/btb_logo1.png" alt="Box Truck Boys Logo" />
                    <img className="logo-mobile" src="/images/btb_logo1.png" alt="Box Truck Boys Logo" />
                  </Link>
                </div>
                {/* logo end */}
              </div>
              <div className="de-flex-col header-col-mid">
                {/* mainemenu begin */}
                <ul id="mainmenu">
                  <li><Link className="menu-item" href="/">Home</Link></li>
                  <li>
                    <a className="menu-item" href="#">Services</a>
                    <ul>
                      <li><Link href="/services">All Services</Link></li>
                      <li><Link href="/services/medical-courier">Medical Courier</Link></li>
                      <li><Link href="/services/same-day">Same-Day Delivery</Link></li>
                      <li><Link href="/services/last-mile">Last-Mile Delivery</Link></li>
                    </ul>
                  </li>
                  <li>
                    <a className="menu-item" href="#">Company</a>
                    <ul>
                      <li><Link href="/about">About Us</Link></li>
                    </ul>
                  </li>
                  <li><Link className="menu-item" href="/contact">Contact</Link></li>
                </ul>
                {/* mainmenu end */}
              </div>
              <div className="de-flex-col">
                <div className="menu_side_area">
                  <Link href="/contact" className="btn-main btn-line fx-slide"><span>Get a Quote</span></Link>
                  <span id="menu-btn"></span>
                </div>

                <div id="btn-extra">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
