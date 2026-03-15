export default function OnepageHeader() {
  return (
    <header className="header-static transparent mt-lg-4 pt-lg-2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                {/* logo begin */}
                <div id="logo">
                  <a href="https://boxtruckboys.com">
                    <img className="logo-main" src="/images/btb_logo1.png" alt="Box Truck Boys Logo" />
                    <img className="logo-scroll" src="/images/btb_logo1.png" alt="Box Truck Boys Logo" />
                    <img className="logo-mobile" src="/images/btb_logo1.png" alt="Box Truck Boys Logo" />
                  </a>
                </div>
                {/* logo end */}
              </div>
              <div className="de-flex-col header-col-mid">
                {/* mainemenu begin */}
                <ul id="mainmenu">
                  <li><a className="menu-item" href="#">Home</a></li>
                  <li><a className="menu-item" href="#section-about">About</a></li>
                  <li><a className="menu-item" href="#section-services">Services</a></li>
                  <li><a className="menu-item" href="#section-why-choose-us">Why Choose Us</a></li>
                  <li><a className="menu-item" href="#section-faq">FAQ</a></li>
                </ul>
                {/* mainmenu end */}
              </div>
              <div className="de-flex-col">
                <div className="menu_side_area">
                  <a href="tel:6122377374" className="btn-main btn-line fx-slide"><span>Call (612) 237-7374</span></a>
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
