export default function Page() {
  return (
    <>
<div className="no-bottom no-top" id="content">

            <div id="top"></div>

            <section id="subheader" className="text-light sm-mt-90 relative rounded-1 overflow-hidden m-3" data-bgimage="url('images/background/4.webp') center">
                <div className="container relative z-2">
                    <div className="row gy-4 gx-5 align-items-center">
                        <div className="col-lg-12">
                            <h1 className="split">Contact Us</h1>
                            <ul className="crumb wow fadeInUp">
                                <li><a href="/">Home</a></li>
                                <li className="active">Contact Us</li>
                            </ul>   
                        </div>
                    </div>
                </div>
                <div className="gradient-edge-bottom color op-7 h-80"></div>
                <div className="sw-overlay op-7"></div>
            </section>

            <section className="relative">
                <div className="container">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className="subtitle">Contact Us Now</div>
                        <h2 className="wow fadeInUp">We’re here to answer your questions.</h2>

                        <p className="col-lg-8">Have a question, suggestion, or just want to say hi? We’re here and happy to hear from you!</p>

                        <div className="spacer-single"></div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="relative mb-4">
                                    <i className="abs fs-28 p-3 bg-color text-light rounded-1 icofont-location-pin"></i>
                                    <div className="ms-80px">
                                        <h4 className="mb-0">Office Location</h4>
                                        7734 Nebraska Ave, Omaha NE 68134
                                    </div>
                                </div>

                                <div className="relative mb-4">
                                    <i className="abs fs-28 p-3 bg-color text-light rounded-1 icofont-envelope"></i>
                                    <div className="ms-80px">
                                        <h4 className="mb-0">Send a Message</h4>
                                        contact@uhome-property.com
                                    </div>
                                </div>

                                <div className="relative mb-4">
                                    <i className="abs fs-28 p-3 bg-color text-light rounded-1 icofont-phone"></i>
                                    <div className="ms-80px">
                                        <h4 className="mb-0">Call Us Directly</h4>
                                        (123) 202-9296
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-6">
                        <div className="bg-light rounded-1 p-60 relative">
                            <form name="contactForm" id="contact_form" method="post" action="#">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <h3>Get In Touch</h3>
                                    <p>Have a question, suggestion, or just want to say hi? Fill out the form below and we’ll get back to you soon.</p>

                                    <div className="field-set">
                                        <input type="text" name="name" id="name" className="form-control mb-4" placeholder="Your Name" required />
                                    </div>

                                    <div className="field-set">
                                        <input type="text" name="email" id="email" className="form-control mb-4" placeholder="Your Email" required />
                                    </div>

                                    <div className="field-set">
                                        <input type="text" name="phone" id="phone" className="form-control mb-4" placeholder="Your Phone" required />
                                    </div>

                                    <div className="field-set">
                                        <textarea name="message" id="message" className="form-control mb-4 h-100px" placeholder="Your Message" required></textarea>
                                    </div>
                                </div>
                            </div>
                            
                            <div id='submit' className="mt-3">
                                <input type='submit' id='send_message' value='Send Message' className="btn-main" />
                            </div>

                            <div id="success_message" className='success'>
                                Your message has been sent successfully. Refresh this page if you want to send more messages.
                            </div>
                            <div id="error_message" className='error'>
                                Sorry there was an error sending your form.
                            </div>
                        </form>
                        </div>
                    </div>
                  </div>
                </div>
            </section>

            <section className="text-light bg-dark no-top no-bottom overflow-hidden mx-3 mb-3 rounded-1">
                <div className="container-fluid position-relative half-fluid">
                  <div className="container">
                    <div className="row">
                      {/*  Image  */}
                      <div className="col-lg-6 position-lg-absolute left-half h-100">
                        <div className="triangle-bottomright-dark"></div>
                        <div className="image" data-bgimage="url('images/misc/s7.webp') center"></div>
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
                            <a className="btn-main fx-slide btn-line wow fadeInRight" data-wow-delay=".2s" href="/contact"><span>Book Shipment</span></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  );
}
