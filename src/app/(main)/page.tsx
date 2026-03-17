export default function Page() {
  return (
    <>
<div className="no-bottom no-top" id="content">

            <div id="top"></div>

            <section className="text-light no-top no-bottom relative rounded-1 overflow-hidden m-3 sm-mt-90">
                <div className="mh-740" style={{ minHeight: '695px' }}>
                    <div className="swiper" style={{ minHeight: '695px' }}>
                      {/*  Additional required wrapper  */}
                      <div className="swiper-wrapper">

                        {/*  Slide 1  */}
                        <div className="swiper-slide">
                            <div className="swiper-inner position-relative">
                                <video autoPlay loop muted playsInline className="position-absolute w-100 h-100" style={{ objectFit: 'cover', zIndex: 0, top: 0, left: 0 }}>
                                    <source src="/images/slider/Professional_Medical_Delivery_Video.mp4" type="video/mp4" />
                                </video>
                                <div className="sw-caption" style={{ zIndex: 1, position: 'relative' }}>
                                    <div className="container">
                                        <div className="row gx-5 align-items-center justify-content-between">
                                            <div className="col-lg-6">
                                                <div className="sw-text-wrapper">
                                                    <h1 className="animated text-uppercase anim-order-1" style={{ fontSize: '3rem', lineHeight: '1.1' }}>Minneapolis Medical Courier and Delivery Service</h1>

                                                    <div className="animated anim-order-2">
                                                        <p>Box Truck Boys provides medical courier, same-day delivery, and box truck freight services throughout the Twin Cities and beyond. Our fleet of box trucks and sprinter vans is ready to move your cargo safely, on time, every time.</p>

                                                        <div className="spacer-half"></div>

                                                        <a className="btn-main fx-slide animated fadeInUp anim-order-3" href="/contact"><span>Get a Quote</span></a>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="abs w-100 bottom-0 z-2 pb-4 sm-hide">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <h6>Medical Courier Service</h6>
                                                    </div>
                                                    <div>
                                                        <h6>Same-Day Delivery</h6>
                                                    </div>
                                                    <div>
                                                        <h6>HIPAA-Conscious Handling</h6>
                                                    </div>
                                                    <div>
                                                        <h6>Dedicated Local Fleet</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sw-overlay op-4"></div>
                            </div>
                        </div>

                        {/*  Slide 2  */}
                        <div className="swiper-slide">
                            <div className="swiper-inner position-relative">
                                <video autoPlay loop muted playsInline className="position-absolute w-100 h-100" style={{ objectFit: 'cover', zIndex: 0, top: 0, left: 0 }}>
                                    <source src="/images/slider/Realistic_Truck_Animation_With_Logo.mp4" type="video/mp4" />
                                </video>
                                <div className="sw-caption" style={{ zIndex: 1, position: 'relative' }}>
                                    <div className="container">
                                        <div className="row gx-5 align-items-center justify-content-between">
                                            <div className="col-lg-6">
                                                <div className="sw-text-wrapper">
                                                    <h1 className="animated text-uppercase anim-order-1" style={{ fontSize: '3rem', lineHeight: '1.1' }}>Box Truck and Sprinter Van Delivery You Can Count On</h1>

                                                    <div className="animated anim-order-2">
                                                        <p>From palletized freight to time-sensitive medical specimens, our fleet handles deliveries of every size across Minneapolis, Saint Paul, and the greater Minnesota region. Reliable, professional, and always on schedule.</p>

                                                        <div className="spacer-half"></div>

                                                        <a className="btn-main fx-slide animated fadeInUp anim-order-3" href="/contact"><span>Get a Quote</span></a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="abs w-100 bottom-0 z-2 pb-4 sm-hide">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <h6>Twin Cities Coverage</h6>
                                                    </div>
                                                    <div>
                                                        <h6>Flexible Fleet Options</h6>
                                                    </div>
                                                    <div>
                                                        <h6>Professional Handling</h6>
                                                    </div>
                                                    <div>
                                                        <h6>On-Time Delivery</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sw-overlay op-4"></div>
                            </div>
                        </div>

                      </div>

                      {/*  If we need pagination  */}
                      <div className="swiper-pagination"></div>

                      {/*  If we need navigation buttons  */}
                      <div className="swiper-button-prev"></div>
                      <div className="swiper-button-next"></div>
                    </div>
                </div>
            </section>


            <section className="mx-3 p-0">
                <div className="container-fluid">
                    <div className="row g-3">

                        {/*  First Item  */}
                        <div className="col-lg-4 col-md-6">
                            <a href="/about">
                                <div className="hover rounded-1 relative overflow-hidden text-light wow zoomIn" data-wow-delay="0s">
                                    <div className="abs p-40 bottom-0 z-3">
                                        <h3 className="border-top pt-3">Medical Courier Specialists</h3>
                                        <p className="mb-0 hover-mh-60">Read More</p>
                                    </div>
                                    <img src="images/misc/s1.webp" className="w-100 hover-scale-1-2 wow scaleIn" data-wow-delay="0s" alt="" />
                                    <div className="gradient-edge-bottom h-50 op-5"></div>
                                </div>
                            </a>
                        </div>

                        {/*  Second Item  */}
                        <div className="col-lg-4 col-md-6">
                            <a href="/about">
                                <div className="hover rounded-1 relative overflow-hidden text-light wow zoomIn" data-wow-delay="0.2s">
                                    <div className="abs p-4 m-1 z-2">
                                        <div className="p-4 mb-4 bg-color text-light rounded-1 text-center wow fadeInRight" data-wow-delay="0.2s">
                                            <h1 className="fs-84 mb-1">3</h1>
                                            <div className="fs-16 lh-1-5">Years Serving Minneapolis</div>
                                        </div>
                                    </div>
                                    <div className="abs p-40 bottom-0 z-3">
                                        <h3 className="border-top pt-3">Upfront, Honest Pricing</h3>
                                        <p className="mb-0 hover-mh-60">Read More</p>
                                    </div>
                                    <img src="images/misc/s2.webp" className="w-100 hover-scale-1-2 wow scaleIn" data-wow-delay="0.2s" alt="" />
                                    <div className="gradient-edge-bottom h-50 op-5"></div>
                                </div>
                            </a>
                        </div>

                        {/*  Third Item  */}
                        <div className="col-lg-4 col-md-6">
                            <a href="/about">
                                <div className="hover rounded-1 relative overflow-hidden text-light wow zoomIn" data-wow-delay="0.4s">
                                    <div className="abs p-40 bottom-0 z-3">
                                        <h3 className="border-top pt-3">USDOT Registered & Fully Insured</h3>
                                        <p className="mb-0 hover-mh-60">Read More</p>
                                    </div>
                                    <img src="images/misc/s3.webp" className="w-100 hover-scale-1-2 wow scaleIn" data-wow-delay="0.4s" alt="" />
                                    <div className="gradient-edge-bottom h-50 op-5"></div>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </section>


            <section>
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-7 text-center">
                            <div className="subtitle wow fadeInUp">Our Services</div>
                            <h2 className="split" data-wow-delay=".2s">Delivery Services Built for Minneapolis Businesses</h2>
                        </div>
                    </div>

                    <div className="row g-4 gx-5">
                        <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay="0s">
                            <a href="/services" className="d-block hover relative">
                                <img src="images/icons-color/1.png" className="w-70px mb-3 hover-jello infinite" alt="" />
                                <h4>Medical Courier</h4>
                                <p>Reliable transport of lab specimens, pharmaceuticals, medical devices, and diagnostic materials between clinics, hospitals, and laboratories.</p>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay=".2s">
                            <a href="/services" className="d-block hover relative">
                                <img src="images/icons-color/2.png" className="w-70px mb-3 hover-jello infinite" alt="" />
                                <h4>Same-Day Delivery</h4>
                                <p>Urgent local pickup and delivery for businesses that need it now. We dispatch within the hour across the Twin Cities metro.</p>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay=".4s">
                            <a href="/services" className="d-block hover relative">
                                <img src="images/icons-color/3.png" className="w-70px mb-3 hover-jello infinite" alt="" />
                                <h4>Final-Mile Delivery</h4>
                                <p>The final leg of your supply chain, handled with care. E-commerce fulfillment, retail restocking, and direct-to-door delivery.</p>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay=".6s">
                            <a href="/services" className="d-block hover relative">
                                <img src="images/icons-color/4.png" className="w-70px mb-3 hover-jello infinite" alt="" />
                                <h4>Box Truck Freight</h4>
                                <p>Palletized goods, large equipment, and multi-stop deliveries using our box truck fleet. Local and regional freight handled professionally.</p>
                            </a>
                        </div>

                    </div>

                </div>
            </section>

            <section aria-label="section" className="p-0 mx-3 rounded-1 overflow-hidden">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <a className="d-block hover popup-youtube" href="../../_cdn/www.youtube.com/watch_3f763d46696b6b51">
                                <div className="relative overflow-hidden">
                                    <div className="absolute start-0 w-100 abs-middle fs-36 text-white text-center z-2">
                                        <div className="player bg-dark border-0 circle wow fadeInUp"><span></span></div>
                                    </div>
                                    <div className="absolute w-100 h-100 top-0 bg-dark hover-op-05"></div>
                                    <img src="images/background/1.webp" className="w-100 hover-scale-1-1" alt="" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-3 mt-3 p-0">
                <div className="container-fluid relative z-1">
                    <div className="row g-3">
                        <div className="col-lg-6">
                            <div className="h-100 relative bg-color p-5 text-light rounded-1">

                                <div className="subtitle wow fadeInUp" data-wow-delay=".2s">Request a Quote</div>
                                <h2 className="split" data-wow-delay=".4s">Get a Free Estimate</h2>

                                <div className="row align-items-center justify-content-end">
                                    <div className="col-md-12">
                                        <p className="wow fadeInUp" data-wow-delay=".4s">Tell us about your delivery needs and we will get back to you with a free, no-obligation quote within the hour.</p>
                                        <div className="spacer-half"></div>
                                        <a className="btn-main bg-white text-dark fx-slide" href="/contact"><span>Request a Quote</span></a>
                                    </div>
                                </div>

                                <div className="abs col-lg-6 pos-sm-relative bottom-0 mb-5">
                                    <p className="wow fadeInUp" data-wow-delay=".6s"></p>
                                </div>

                                <img src="images/misc/c2.webp" className="w-50 abs bottom-0 end-0 wow scaleIn" data-wow-duration="2s" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="relative">
                                <div className="m-5 p-40 overlay-black-6 bg-blur abs bottom-0 mb-5 rounded-1 text-white z-2 xs-hide">
                                    <p>&quot;Box Truck Boys has been handling our lab specimen pickups for over a year now. They are always on time, professional, and treat every package like it matters. We could not run our clinic without them.&quot;</p>

                                    <div className="d-flex align-items-center">
                                        <div>
                                            <img src="images/testimonial/2.webp" className="w-40px h-auto me-4 circle" alt="" />
                                        </div>
                                        <div className="lh-1-5">
                                            <div className="fw-600">Dr. Lisa Chen</div>
                                            <div className="fs-14 op-6">Clinic Director, Twin Cities Family Medicine</div>
                                        </div>
                                    </div>

                                    <div className="abs bottom-0 end-0">
                                        <i className="fa fa-quote-right id-color fs-40 m-3 p-2"></i>
                                    </div>
                                </div>

                                <div className="bg-light relative overflow-hidden rounded-1">
                                    <img src="images/misc/s12.webp" className="w-100 wow scaleIn" data-wow-duration="2s" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-7 text-center">
                            <div className="subtitle wow fadeInUp">Why Choose Us</div>
                            <h2 className="split" data-wow-delay=".2s">Why Minneapolis Businesses Choose Box Truck Boys</h2>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                            <div className="relative">
                                <i className="abs fs-40 p-4 bg-dark icon_check rounded-1 text-light"></i>
                                <div className="ps-100 ms-4">
                                    <h4>Medical Delivery Expertise</h4>
                                    <p>Trained drivers who understand the urgency and sensitivity of medical deliveries. Lab specimens, pharmaceuticals, and diagnostic materials handled with the care they demand.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                            <div className="relative">
                                <i className="abs fs-40 p-4 bg-dark icon_check rounded-1 text-light"></i>
                                <div className="ps-100 ms-4">
                                    <h4>Same-Day & On-Demand Service</h4>
                                    <p>Need it there today? We dispatch within the hour. Our local fleet means faster response times than national carriers can offer.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                            <div className="relative">
                                <i className="abs fs-40 p-4 bg-dark icon_check rounded-1 text-light"></i>
                                <div className="ps-100 ms-4">
                                    <h4>Upfront, Honest Pricing</h4>
                                    <p>No hidden fees, no surprise surcharges. We quote a fair price and stick to it. Volume discounts available for recurring business accounts.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                            <div className="relative">
                                <i className="abs fs-40 p-4 bg-dark icon_check rounded-1 text-light"></i>
                                <div className="ps-100 ms-4">
                                    <h4>Careful, Professional Handling</h4>
                                    <p>Every delivery is treated with attention and care. From fragile medical equipment to palletized freight, your cargo is in good hands.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                            <div className="relative">
                                <i className="abs fs-40 p-4 bg-dark icon_check rounded-1 text-light"></i>
                                <div className="ps-100 ms-4">
                                    <h4>Flexible Fleet for Any Job</h4>
                                    <p>Box trucks for large freight, sprinter vans for quick runs. We match the right vehicle to every job so you never pay for more than you need.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                            <div className="relative">
                                <i className="abs fs-40 p-4 bg-dark icon_check rounded-1 text-light"></i>
                                <div className="ps-100 ms-4">
                                    <h4>Locally Owned, Locally Trusted</h4>
                                    <p>We live and work in Minneapolis. When you call Box Truck Boys, you talk to the people who actually drive your deliveries. That is accountability you can count on.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section id="section-gallery" className="pt-0 overflow-hidden">

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="owl-custom-nav menu-float" data-target="#carousel-1">
                                <a className="btn-next"></a>
                                <a className="btn-prev"></a>

                                <div id="carousel-1" className="owl-2-cols-center owl-carousel owl-theme">

                                    {/*  item begin  */}
                                    <div className="item">
                                        <a href="/about">
                                            <div className="hover rounded-1 relative overflow-hidden text-light">
                                                <div className="abs p-40 bottom-0 z-3 w-50">
                                                    <h3>Medical Courier Fleet</h3>
                                                    <p className="mb-0 hover-mh-60">Read More</p>
                                                </div>
                                                <img src="images/misc/l1.webp" className="w-100 hover-scale-1-2" alt="" />
                                                <div className="gradient-edge-bottom h-50 op-5"></div>
                                            </div>
                                        </a>
                                    </div>
                                    {/*  item end  */}

                                    {/*  item begin  */}
                                    <div className="item">
                                        <a href="/about">
                                            <div className="hover rounded-1 relative overflow-hidden text-light">
                                                <div className="abs p-40 bottom-0 z-3 w-50">
                                                    <h3>Box Truck Delivery in Action</h3>
                                                    <p className="mb-0 hover-mh-60">Read More</p>
                                                </div>
                                                <img src="images/misc/l2.webp" className="w-100 hover-scale-1-2" alt="" />
                                                <div className="gradient-edge-bottom h-50 op-5"></div>
                                            </div>
                                        </a>
                                    </div>
                                    {/*  item end  */}

                                    {/*  item begin  */}
                                    <div className="item">
                                        <a href="/about">
                                            <div className="hover rounded-1 relative overflow-hidden text-light">
                                                <div className="abs p-40 bottom-0 z-3 w-50">
                                                    <h3>Final-Mile to Your Door</h3>
                                                    <p className="mb-0 hover-mh-60">Read More</p>
                                                </div>
                                                <img src="images/misc/l3.webp" className="w-100 hover-scale-1-2" alt="" />
                                                <div className="gradient-edge-bottom h-50 op-5"></div>
                                            </div>
                                        </a>
                                    </div>
                                    {/*  item end  */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="pt-0">
                <div className="container">

                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="subtitle id-color">FAQ</div>
                            <h2 className="split">
                                Everything You Should Know About Our Delivery Services
                            </h2>
                        </div>

                        <div className="col-lg-6">
                            <div className="de-tab">
                                <ul className="d-tab-nav mb-4">
                                    <li className="active-tab">Services & Delivery</li>
                                    <li>Medical Courier</li>
                                    <li>Pricing & Business</li>
                                </ul>
                                <ul className="d-tab-content">
                                    <li>
                                        <div className="accordion">
                                            <div className="accordion-section">
                                                <div className="accordion-section-title" data-tab="#accordion-a1">
                                                    What delivery services does Box Truck Boys offer?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-a1">
                                                    We offer medical courier, same-day delivery, final-mile delivery, scheduled route delivery, box truck freight, white glove delivery, and LTL shipping throughout Minneapolis, the Twin Cities, and beyond.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-a2">
                                                    How do I get started with Box Truck Boys?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-a2">
                                                    Call us at (612) 237-7374 or fill out our online quote form. We will discuss your delivery needs, provide a free estimate, and can often schedule your first pickup within 24 hours.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-a3">
                                                    What areas do you serve?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-a3">
                                                    Our home base is Minneapolis, and we serve the entire Twin Cities metro including Saint Paul, Bloomington, Brooklyn Park, Plymouth, Eagan, and surrounding suburbs. We also handle longer routes across Minnesota and nationwide.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-a4">
                                                    What types of vehicles are in your fleet?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-a4">
                                                    Our fleet includes box trucks for larger freight and palletized loads, and sprinter vans for smaller, time-sensitive deliveries like medical specimens and urgent parcels.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-a5">
                                                    How fast can you deliver?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-a5">
                                                    For same-day deliveries, we dispatch within the hour. Scheduled routes run daily or weekly. Standard local deliveries are typically completed within the same business day.
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="accordion">
                                            <div className="accordion-section">
                                                <div className="accordion-section-title" data-tab="#accordion-b1">
                                                    What medical items can you transport?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-b1">
                                                    We transport lab specimens, blood work, pharmaceuticals, durable medical equipment (DME), diagnostic materials, medical records, and other healthcare-related items between facilities.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-b2">
                                                    Are your drivers trained for medical deliveries?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-b2">
                                                    Yes. Our drivers are trained in proper specimen handling procedures, maintain chain of custody documentation, and understand the time-sensitive nature of medical logistics.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-b3">
                                                    Do you offer scheduled medical courier routes?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-b3">
                                                    Absolutely. Many of our medical clients use daily or weekly scheduled routes for recurring pickups and deliveries between clinics, hospitals, labs, and pharmacies.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-b4">
                                                    Can you handle STAT or urgent medical deliveries?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-b4">
                                                    Yes. We offer on-demand STAT delivery for urgent specimens and medical supplies. Call us and we will dispatch a dedicated vehicle immediately.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-b5">
                                                    What types of medical facilities do you serve?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-b5">
                                                    We serve hospitals, clinics, laboratories, pharmacies, dental offices, veterinary clinics, assisted living facilities, and other healthcare providers across the Twin Cities.
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="accordion">
                                            <div className="accordion-section">
                                                <div className="accordion-section-title" data-tab="#accordion-c1">
                                                    How does your pricing work?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-c1">
                                                    We provide upfront, transparent quotes based on distance, delivery speed, and cargo type. No hidden fees. Contact us for a free estimate tailored to your specific needs.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-c2">
                                                    Do you offer business accounts?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-c2">
                                                    Yes. We offer business accounts with net-30 invoicing, volume discounts, and dedicated account management for companies with regular delivery needs.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-c3">
                                                    Do you provide invoices and proof of delivery?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-c3">
                                                    Every delivery comes with proof of delivery documentation. Business account clients receive detailed monthly invoices with delivery logs.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-c4">
                                                    What payment methods do you accept?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-c4">
                                                    We accept credit cards, ACH bank transfers, checks, and invoice billing for approved business accounts.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-c5">
                                                    Are there discounts for regular or high-volume deliveries?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-c5">
                                                    Yes. We offer competitive volume pricing for businesses with recurring delivery needs. The more you ship, the more you save. Contact us to discuss a custom rate.
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="p-0 overflow-hidden" aria-label="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <img src="images/misc/c1.webp" className="w-100 wow fadeInUp" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-color text-light pt-50 pb-50">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-9">
                            <h3 className="mb-0 fs-32 split">Ready to Schedule Your First Delivery?</h3>
                        </div>
                        <div className="col-lg-3 text-lg-end">
                            <a className="btn-main fx-slide btn-line wow fadeInRight" data-wow-delay=".2s" href="/contact"><span>Get a Quote</span></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  );
}
