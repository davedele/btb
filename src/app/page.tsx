export default function Page() {
  return (
    <>
<div className="no-bottom no-top" id="content">

            <div id="top"></div>

            <section className="text-light no-top no-bottom relative rounded-1 overflow-hidden m-3 sm-mt-90">
                <div className="mh-800">
                    <div className="swiper">
                      {/*  Additional required wrapper  */}
                      <div className="swiper-wrapper">
                        
                        {/*  Slide 1  */}
                        <div className="swiper-slide">
                            <div className="swiper-inner" data-bgimage="url('images/slider/a1.webp')">
                                <div className="sw-caption">
                                    <div className="container">
                                        <div className="row gx-5 align-items-center justify-content-between">
                                            <div className="col-lg-6"> 
                                                <div className="sw-text-wrapper">
                                                    <h1 className="animated text-uppercase anim-order-1">Cross Country Coverage with Reliable Trucking</h1>

                                                    <div className="animated anim-order-2">
                                                        <p>We maintain relationships with thousands of vetted carriers across the United States. Whether you need LTL, full truckload, or expedited service, we match you with the right provider and manage the details.</p>

                                                        <div className="spacer-half"></div>

                                                        <a className="btn-main fx-slide animated fadeInUp anim-order-3" href="/contact"><span>Book Shipment</span></a>
                                                        
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
                                                        <h6>Fast Global Shipping</h6>
                                                    </div>
                                                    <div>
                                                        <h6>Reliable Cargo Handling</h6>
                                                    </div>
                                                    <div>
                                                        <h6>End-to-End Tracking</h6>
                                                    </div>
                                                    <div>
                                                        <h6>Cost-Effective Solutions</h6>
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
                            <div className="swiper-inner" data-bgimage="url('images/slider/a2.webp')">
                                <div className="sw-caption">
                                    <div className="container">
                                        <div className="row gx-5 align-items-center justify-content-between">
                                            <div className="col-lg-6"> 
                                                <div className="sw-text-wrapper">
                                                    <h1 className="animated text-uppercase anim-order-1">Seamless Expedited Shipping for Global Trade</h1>

                                                    <div className="animated anim-order-2">
                                                        <p>We partner with leading international shipping lines to move your cargo across major trade routes. From full containers to consolidated loads, we provide dependable schedules and cost-efficient solutions worldwide.</p>

                                                        <div className="spacer-half"></div>

                                                        <a className="btn-main fx-slide animated fadeInUp anim-order-3" href="/contact"><span>Book Shipment</span></a>
                                                        
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
                                                        <h6>Worldwide Port Access</h6>
                                                    </div>
                                                    <div>
                                                        <h6>Flexible Cargo Options</h6>
                                                    </div>
                                                    <div>
                                                        <h6>Secure Documentation</h6>
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
                                        <h3 className="border-top pt-3">Advanced Real Time Tracking System</h3>
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
                                            <h1 className="fs-84 mb-1">15</h1>
                                            <div className="fs-16 lh-1-5">Years of Experience</div>
                                        </div>
                                    </div>
                                    <div className="abs p-40 bottom-0 z-3">                            
                                        <h3 className="border-top pt-3">Fully Transparent Freight Pricing</h3>
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
                                        <h3 className="border-top pt-3">Comprehensive Customs and Compliance</h3>
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
                            <h2 className="split" data-wow-delay=".2s">Trusted Logistics Partner for US Nationwide Shipping</h2>
                        </div>
                    </div>

                    <div className="row g-4 gx-5">
                        <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay="0s">
                            <a href="/services" className="d-block hover relative">
                                <img src="images/icons-color/1.png" className="w-70px mb-3 hover-jello infinite" alt="" />
                                <h4>Trucking</h4>
                                <p>Reliable ground transportation for shipments across the United States with flexible fleet options.</p>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay=".2s">
                            <a href="/services" className="d-block hover relative">
                                <img src="images/icons-color/2.png" className="w-70px mb-3 hover-jello infinite" alt="" />
                                <h4>LTL Shipping</h4>
                                <p>Fast delivery of time-sensitive cargo using global air routes with real-time tracking.</p>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay=".4s">
                            <a href="/services" className="d-block hover relative">
                                <img src="images/icons-color/3.png" className="w-70px mb-3 hover-jello infinite" alt="" />
                                <h4>Expedited Shipping</h4>
                                <p>Cost-effective shipping solution for bulk cargo with dependable international sea freight services.</p>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay=".6s">
                            <a href="/services" className="d-block hover relative">
                                <img src="images/icons-color/4.png" className="w-70px mb-3 hover-jello infinite" alt="" />
                                <h4>Rail Freight</h4>
                                <p>Efficient and eco-friendly rail transport option ideal for long-distance heavy shipments.</p>
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

                                <div className="subtitle wow fadeInUp" data-wow-delay=".2s">Track Your Package</div>
                                <h2 className="split" data-wow-delay=".4s">Quick Tracking</h2>

                                <div className="row align-items-center justify-content-end">
                                    <div className="col-md-9 col-sm-8">
                                        <div className="hover-underline">
                                            <input className="form-underline mb-0 no-border fs-18" id='order_id' name='order_id' placeholder="enter your order number here..." type='text' />
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-4">
                                        <a className="btn-main bg-white text-dark fx-slide w-100" href="/"><span>Track It</span></a>
                                    </div>
                                </div>

                                <div className="abs col-lg-6 pos-sm-relative bottom-0 mb-5">
                                    <p className="wow fadeInUp" data-wow-delay=".6s">Track your package with our trusted logistics service. From pickup to delivery, we provide updates, secure handling, and visibility so your shipment arrives safely and on time.</p>
                                </div>

                                <img src="images/misc/c2.webp" className="w-50 abs bottom-0 end-0 wow scaleIn" data-wow-duration="2s" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="relative">
                                <div className="m-5 p-40 overlay-black-6 bg-blur abs bottom-0 mb-5 rounded-1 text-white z-2 xs-hide">
                                    <p>“We’ve trusted this logistics company for years, and they never disappoint. Every shipment is handled with care, delivered on time, and supported with clear tracking. Their team makes global shipping simple, reliable, and stress-free for our business.”</p>

                                    <div className="d-flex align-items-center">
                                        <div>
                                            <img src="images/testimonial/2.webp" className="w-40px h-auto me-4 circle" alt="" />
                                        </div>
                                        <div className="lh-1-5">
                                            <div className="fw-600">Sarah Johnson</div>
                                            <div className="fs-14 op-6">Store Owner</div>
                                        </div>
                                    </div>

                                    <div className="abs bottom-0 end-0">
                                        <i className="fa fa-quote-right id-color fs-40 m-3 p-2"></i>
                                    </div>
                                </div>
                                                                               
                                <div className="bg-light relative overflow-hidden rounded-1">
                                    <img src="images/misc/s4.webp" className="w-100 wow scaleIn" data-wow-duration="2s" alt="" />
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
                            <h2 className="split" data-wow-delay=".2s">Trusted Logistics Partner for US Nationwide Shipping</h2>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                            <div className="relative">
                                <i className="abs fs-40 p-4 bg-dark icon_check rounded-1 text-light"></i>
                                <div className="ps-100 ms-4">
                                    <h4>Experienced Logistics</h4>
                                    <p>Our specialists bring decades of experience in freight forwarding and customs clearance, ensuring smooth and efficient supply chain solutions worldwide.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                            <div className="relative">
                                <i className="abs fs-40 p-4 bg-dark icon_check rounded-1 text-light"></i>
                                <div className="ps-100 ms-4">
                                    <h4>Fast Delivery Commitment</h4>
                                    <p>We understand the urgency of every shipment and act quickly. Optimized routes and tracking technology ensure timely deliveries without unnecessary delays.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                            <div className="relative">
                                <i className="abs fs-40 p-4 bg-dark icon_check rounded-1 text-light"></i>
                                <div className="ps-100 ms-4">
                                    <h4>Transparent Pricing Policy</h4>
                                    <p>Our pricing is clear, competitive, and easy to understand for all clients. We guarantee no hidden charges and complete financial transparency every time.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                            <div className="relative">
                                <i className="abs fs-40 p-4 bg-dark icon_check rounded-1 text-light"></i>
                                <div className="ps-100 ms-4">
                                    <h4>Reliable Cargo Handling</h4>
                                    <p>Every shipment is managed with precision and care to avoid risks. From packing to loading, we guarantee your cargo arrives safely and intact.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                            <div className="relative">
                                <i className="abs fs-40 p-4 bg-dark icon_check rounded-1 text-light"></i>
                                <div className="ps-100 ms-4">
                                    <h4>Comprehensive Solutions</h4>
                                    <p>We cover every step of logistics including warehousing, distribution, and freight. Our integrated services make supply chain management simple and efficient.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                            <div className="relative">
                                <i className="abs fs-40 p-4 bg-dark icon_check rounded-1 text-light"></i>
                                <div className="ps-100 ms-4">
                                    <h4>Satisfaction Guarantee</h4>
                                    <p>Your trust is our highest priority across all shipments. We back our services with responsive support and a strong customer satisfaction guarantee.</p>
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
                                                    <h3>Nationwide Cargo Tracking</h3>
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
                                                    <h3>Efficient Freight Solutions</h3>
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
                                                    <h3>Customs & Compliance</h3>
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
                                Everything You Should Know About Cargo Logistics
                            </h2>
                        </div>

                        <div className="col-lg-6">
                            <div className="de-tab">
                                <ul className="d-tab-nav mb-4">
                                    <li className="active-tab">Shipping & Delivery</li>
                                    <li>Tracking & Support</li>
                                    <li>Billing & Documentation</li>
                                </ul>
                                <ul className="d-tab-content">
                                    <li>
                                        <div className="accordion">
                                            <div className="accordion-section">
                                                <div className="accordion-section-title" data-tab="#accordion-a1">
                                                    What services do you offer?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-a1">
                                                    We provide air, sea, and land cargo shipping, customs clearance, freight forwarding, and last-mile delivery solutions.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-a2">
                                                    How do I get started to get service?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-a2">
                                                    Simply contact us or request a quote online. Our team will guide you through shipping options, documentation, and costs.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-a3">
                                                    Do you handle international shipments?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-a3">
                                                    Yes, we handle both domestic and international cargo, including customs brokerage and global freight forwarding.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-a4">
                                                    What is included in the shipping process?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-a4">
                                                    Our shipping process covers pickup, cargo handling, customs clearance, real-time tracking, and final delivery.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-a5">
                                                    How long does shipping usually take?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-a5">
                                                    Transit times depend on the route and mode of transport. Domestic shipping may take 1–5 days, while international cargo can range from 7–30 days.
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="accordion">
                                            <div className="accordion-section">
                                                <div className="accordion-section-title" data-tab="#accordion-b1">
                                                    How can I track my shipment?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-b1">
                                                    You can track your package using our online tracking system with your shipment ID or booking number.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-b2">
                                                    Do you provide real-time updates?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-b2">
                                                    Yes, we provide real-time cargo updates via email, SMS, or our mobile app so you know your shipment status at all times.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-b3">
                                                    What if my package is delayed?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-b3">
                                                    In case of delays, our customer support team will notify you immediately and provide the next available shipping option.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-b4">
                                                    Can I change the delivery address after booking?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-b4">
                                                    Yes, address changes are possible before dispatch. Once shipped, changes may incur extra costs depending on the route.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-b5">
                                                    Do you offer customer support 24/7?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-b5">
                                                    Yes, our logistics support team is available 24/7 to assist with shipment inquiries, tracking, and urgent requests.
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="accordion">
                                            <div className="accordion-section">
                                                <div className="accordion-section-title" data-tab="#accordion-c1">
                                                    What payment methods do you accept?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-c1">
                                                    We accept bank transfers, credit cards, PayPal, and corporate billing accounts for approved clients.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-c2">
                                                    Do you provide shipping invoices?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-c2">
                                                    Yes, every shipment includes a detailed invoice with freight charges, customs fees, and handling costs.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-c3">
                                                    How do customs duties and taxes work?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-c3">
                                                    Duties and taxes are calculated based on the destination country’s regulations. We assist with documentation and customs clearance.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-c4">
                                                    Can I request a cost breakdown?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-c4">
                                                    Absolutely. We provide a transparent cost breakdown for shipping, including freight, handling, and clearance charges.
                                                </div>

                                                <div className="accordion-section-title" data-tab="#accordion-c5">
                                                    Do you offer credit terms for businesses?
                                                </div>
                                                <div className="accordion-section-content" id="accordion-c5">
                                                    Yes, we provide flexible billing and credit terms for qualified business accounts upon approval.
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
