export default function Page() {
  return (
    <>
<div className="no-bottom no-top" id="content">

            <div id="top"></div>

            <section id="subheader" className="text-light sm-mt-90 relative rounded-1 overflow-hidden m-3" data-bgimage="url('images/background/4.webp') center">
                <div className="container relative z-2">
                    <div className="row gy-4 gx-5 align-items-center">
                        <div className="col-lg-12">
                            <h1 className="split">Our Services</h1>
                            <ul className="crumb wow fadeInUp">
                                <li><a href="/">Home</a></li>
                                <li className="active">Our Services</li>
                            </ul>   
                        </div>
                    </div>
                </div>
                <div className="gradient-edge-bottom color op-7 h-80"></div>
                <div className="sw-overlay op-7"></div>
            </section>

            <section>
                <div className="container">

                    <div className="row g-4 gx-5">
                        <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay="0s">
                            <a href="service-single.html" className="d-block hover relative">
                                <img src="images/icons-color/1.png" className="w-70px mb-3 hover-jello infinite" alt="" />
                                <h4>Trucking</h4>
                                <p>Reliable ground transportation for shipments across the United States with flexible fleet options.</p>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay=".2s">
                            <a href="service-single.html" className="d-block hover relative">
                                <img src="images/icons-color/2.png" className="w-70px mb-3 hover-jello infinite" alt="" />
                                <h4>LTL Shipping</h4>
                                <p>Fast delivery of time-sensitive cargo using global air routes with real-time tracking.</p>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay=".4s">
                            <a href="service-single.html" className="d-block hover relative">
                                <img src="images/icons-color/3.png" className="w-70px mb-3 hover-jello infinite" alt="" />
                                <h4>Expedited Shipping</h4>
                                <p>Cost-effective shipping solution for bulk cargo with dependable international sea freight services.</p>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay=".6s">
                            <a href="service-single.html" className="d-block hover relative">
                                <img src="images/icons-color/4.png" className="w-70px mb-3 hover-jello infinite" alt="" />
                                <h4>Rail Freight</h4>
                                <p>Efficient and eco-friendly rail transport option ideal for long-distance heavy shipments.</p>
                            </a>
                        </div>

                        {/*  New services  */}
                        <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay="0s">
                            <a href="service-single.html" className="d-block hover relative">
                                <img src="images/icons-color/5.png" className="w-70px mb-3 hover-jello infinite" alt="" />
                                <h4>Warehousing</h4>
                                <p>Secure storage with inventory management, order fulfillment, and nationwide distribution.</p>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay=".2s">
                            <a href="service-single.html" className="d-block hover relative">
                                <img src="images/icons-color/6.png" className="w-70px mb-3 hover-jello infinite" alt="" />
                                <h4>Customs Brokerage</h4>
                                <p>Expert assistance in navigating import/export regulations to ensure smooth customs clearance.</p>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay=".4s">
                            <a href="service-single.html" className="d-block hover relative">
                                <img src="images/icons-color/7.png" className="w-70px mb-3 hover-jello infinite" alt="" />
                                <h4>Last-Mile Delivery</h4>
                                <p>Reliable end-to-end delivery service ensuring shipments reach customers’ doors quickly and safely.</p>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay=".6s">
                            <a href="service-single.html" className="d-block hover relative">
                                <img src="images/icons-color/8.png" className="w-70px mb-3 hover-jello infinite" alt="" />
                                <h4>Project Cargo</h4>
                                <p>Specialized transport solutions for oversized, heavy, or complex cargo requiring tailored logistics planning.</p>
                            </a>
                        </div>
                    </div>


                </div>
            </section>

            <section className="text-light bg-dark no-top no-bottom overflow-hidden mx-3 mb-3 rounded-1">
                <div className="container-fluid position-relative half-fluid">
                  <div className="container">
                    <div className="row">
                      {/*  Image  */}
                      <div className="col-lg-6 position-lg-absolute overflow-hidden left-half h-100">
                        <div className="triangle-bottomright-dark"></div>
                        <div className="image wow scaleIn" data-bgimage="url('images/misc/s7.webp') center"></div>
                      </div>
                      {/*  Text  */}
                      <div className="col-lg-5 offset-lg-7">
                            <div className="me-lg-3">
                                <div className="py-5 my-5">
                                    <div className="owl-single-dots owl-carousel owl-theme">

                                        <div className="item">
                                            <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp"></i>
                                            <h3 className="mb-4 wow fadeInUp fs-32">Trucking service kept our supply chain moving smoothly with reliable nationwide coverage and flexible scheduling that minimized delays.</h3>
                                            <span className="wow fadeInUp">Logistics Manager, RetailCo</span>
                                        </div>

                                        <div className="item">
                                            <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp"></i>
                                            <h3 className="mb-4 wow fadeInUp fs-32">LTL Shipping ensured our urgent shipments reached clients overseas right on time, providing peace of mind with accurate tracking updates.</h3>
                                            <span className="wow fadeInUp">Operations Head, TechWorld</span>
                                        </div>

                                        <div className="item">
                                            <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp"></i>
                                            <h3 className="mb-4 wow fadeInUp fs-32">Expedited Shipping provided a cost-effective solution for our large international cargo, handling every step with dependable coordination and care.</h3>
                                            <span className="wow fadeInUp">Supply Officer, GlobalMart</span>
                                        </div>

                                        <div className="item">
                                            <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp"></i>
                                            <h3 className="mb-4 wow fadeInUp fs-32">Rail Freight helped us move heavy shipments long distance in an eco-friendly way, while keeping costs low and schedules predictable.</h3>
                                            <span className="wow fadeInUp">Plant Manager, SteelWorks</span>
                                        </div>

                                        <div className="item">
                                            <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp"></i>
                                            <h3 className="mb-4 wow fadeInUp fs-32">Warehousing gave us secure storage with seamless inventory management and nationwide distribution, allowing faster fulfillment to customers.</h3>
                                            <span className="wow fadeInUp">E-commerce Director, ShopEase</span>
                                        </div>

                                        <div className="item">
                                            <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp"></i>
                                            <h3 className="mb-4 wow fadeInUp fs-32">Customs Brokerage made import/export clearance smooth and hassle-free, guiding us through complex regulations with reliable expertise.</h3>
                                            <span className="wow fadeInUp">CEO, ImportX</span>
                                        </div>

                                        <div className="item">
                                            <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp"></i>
                                            <h3 className="mb-4 wow fadeInUp fs-32">Last-Mile service ensured fast and safe delivery directly to our customers’ doors, improving satisfaction with every completed order.</h3>
                                            <span className="wow fadeInUp">Founder, FreshGrocer</span>
                                        </div>

                                        <div className="item">
                                            <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp"></i>
                                            <h3 className="mb-4 wow fadeInUp fs-32">Project Cargo Handling managed our oversized equipment shipment with precision and care, giving us confidence in meeting tight deadlines.</h3>
                                            <span className="wow fadeInUp">Project Lead, BuildCorp</span>
                                        </div>

                                    </div>
                                </div>
                            </div>


                      </div>
                    </div>
                  </div>
                </div>
            </section>

            <section className="bg-color text-light pt-50 pb-50">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-9">
                            <h3 className="mb-0 fs-32 split">Ready to Ship Your Cargo Worldwide?</h3>
                        </div>
                        <div className="col-lg-3 text-lg-end">
                            <a className="btn-main fx-slide btn-line wow fadeInRight" data-wow-delay=".2s" href="booking.html"><span>Book Shipment</span></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  );
}
