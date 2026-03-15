import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { serviceData } from '@/lib/service-data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceData[slug];
  if (!service) return {};

  return {
    title: `${service.name} | Box Truck Boys Trucking`,
    description: service.metaDescription,
    openGraph: {
      title: `${service.name} | Box Truck Boys Trucking`,
      description: service.metaDescription,
      type: 'website',
    },
  };
}

export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Box Truck Boys Trucking',
      telephone: '(612) 237-7374',
      email: 'contact@boxtruckboys.com',
      url: 'https://boxtruckboys.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Minneapolis',
        addressRegion: 'MN',
      },
      identifier: [
        { '@type': 'PropertyValue', name: 'USDOT', value: '3823948' },
        { '@type': 'PropertyValue', name: 'MC', value: '1384682' },
      ],
    },
    areaServed: [
      { '@type': 'State', name: 'Minnesota' },
      { '@type': 'State', name: 'Nebraska' },
      { '@type': 'State', name: 'Wisconsin' },
    ],
    url: `https://${slug}.boxtruckboys.com`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        {/* Hero Section */}
        <section
          id="subheader"
          className="text-light sm-mt-90 relative rounded-1 overflow-hidden m-3"
          data-bgimage="url('images/background/4.webp') center"
        >
          <div className="container relative z-2">
            <div className="row gy-4 gx-5 align-items-center">
              <div className="col-lg-8">
                <h1 className="split">{service.headline}</h1>
                <p className="lead">
                  USDOT 3823948 &bull; MC-1384682 &bull; Minneapolis-Based Carrier
                </p>
                <ul className="crumb wow fadeInUp">
                  <li><a href="/">Home</a></li>
                  <li><a href="/services">Services</a></li>
                  <li className="active">{service.name}</li>
                </ul>
              </div>
              <div className="col-lg-4 text-lg-end">
                <a
                  className="btn-main fx-slide wow fadeInRight"
                  data-wow-delay=".2s"
                  href="/contact"
                >
                  <span>Get a Quote</span>
                </a>
              </div>
            </div>
          </div>
          <div className="gradient-edge-bottom color op-7 h-80"></div>
          <div className="sw-overlay op-7"></div>
        </section>

        {/* Description Section */}
        <section id="section-about">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="relative">
                  <div className="w-100 pe-5 pb-5 wow scaleIn">
                    <img
                      src="/images/misc/l2.webp"
                      className="w-100 rounded-1"
                      alt={service.name}
                    />
                  </div>
                  <img
                    src="/images/misc/s2.webp"
                    className="w-40 rounded-1 abs end-0 bottom-0 z-2 soft-shadow wow scaleIn"
                    data-wow-delay=".2s"
                    alt={`${service.name} - Box Truck Boys`}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ps-lg-3">
                  <div className="subtitle id-color wow fadeInUp" data-wow-delay=".2s">
                    {service.name}
                  </div>
                  <h2 className="split">{service.headline}</h2>
                  {service.description.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="wow fadeInUp" data-wow-delay=".4s">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="section-why-choose-us">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-7 text-center">
                <div className="subtitle wow fadeInUp">Why Box Truck Boys</div>
                <h2 className="split" data-wow-delay=".2s">
                  The Box Truck Boys Advantage
                </h2>
              </div>
            </div>
            <div className="row g-4">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="col-lg-6 col-md-6 wow fadeInUp">
                  <div className="relative">
                    <i
                      className={`abs fs-40 p-4 bg-dark ${benefit.icon} rounded-1 text-light`}
                    ></i>
                    <div className="ps-100 ms-4">
                      <h4>{benefit.title}</h4>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="text-light bg-dark no-top no-bottom overflow-hidden mx-3 mb-3 rounded-1">
          <div className="container-fluid position-relative half-fluid">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 position-lg-absolute overflow-hidden left-half h-100">
                  <div className="triangle-bottomright-dark"></div>
                  <div
                    className="image wow scaleIn"
                    data-bgimage="url('images/misc/s7.webp') center"
                  ></div>
                </div>
                <div className="col-lg-5 offset-lg-7">
                  <div className="me-lg-3">
                    <div className="py-5 my-5">
                      <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp"></i>
                      <h3 className="mb-4 wow fadeInUp fs-32">
                        {service.testimonial.quote}
                      </h3>
                      <span className="wow fadeInUp">
                        {service.testimonial.author}, {service.testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="section-faq">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="subtitle id-color">FAQ</div>
                <h2 className="split">
                  Frequently Asked Questions About {service.name}
                </h2>
              </div>

              <div className="col-lg-6">
                <div className="accordion">
                  <div className="accordion-section">
                    {service.faq.map((item, index) => (
                      <div key={index}>
                        <div
                          className="accordion-section-title"
                          data-tab={`#accordion-landing-${index + 1}`}
                        >
                          {item.question}
                        </div>
                        <div
                          className="accordion-section-content"
                          id={`accordion-landing-${index + 1}`}
                        >
                          {item.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-color text-light pt-50 pb-50">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-9">
                <h3 className="mb-0 fs-32 split">
                  Ready to Get Started with {service.name}?
                </h3>
              </div>
              <div className="col-lg-3 text-lg-end">
                <a
                  className="btn-main fx-slide btn-line wow fadeInRight"
                  data-wow-delay=".2s"
                  href="/contact"
                >
                  <span>Get a Quote</span>
                </a>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-12">
                <p className="mb-0">
                  Call{' '}
                  <a href="tel:6122377374" className="text-white fw-bold">
                    (612) 237-7374
                  </a>{' '}
                  or email{' '}
                  <a href="mailto:contact@boxtruckboys.com" className="text-white fw-bold">
                    contact@boxtruckboys.com
                  </a>{' '}
                  to discuss your {service.name.toLowerCase()} needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
