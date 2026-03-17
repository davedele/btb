import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cityData } from '@/lib/city-data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(cityData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = cityData[slug];
  if (!city) return {};

  return {
    title: `Delivery & Medical Courier in ${city.name}, ${city.stateAbbrev} | Box Truck Boys Trucking`,
    description: city.metaDescription,
    openGraph: {
      title: `Delivery & Medical Courier in ${city.name}, ${city.stateAbbrev} | Box Truck Boys Trucking`,
      description: city.metaDescription,
      type: 'website',
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params;
  const city = cityData[slug];

  if (!city) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Box Truck Boys Trucking',
    description: city.metaDescription,
    telephone: '(612) 237-7374',
    email: 'Boxtruckboystrucking@gmail.com',
    url: `https://${slug}.boxtruckboys.com`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.stateAbbrev,
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
    },
    priceRange: '$$',
    image: 'https://boxtruckboys.com/images/logo-white.webp',
    sameAs: ['https://boxtruckboys.com'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Delivery Services',
      itemListElement: city.services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
        },
      })),
    },
    identifier: [
      { '@type': 'PropertyValue', name: 'USDOT', value: '3823948' },
      { '@type': 'PropertyValue', name: 'MC', value: '1384682' },
    ],
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
              <div className="col-lg-12">
                <h1 className="split">{city.heroTitle}</h1>
                <p className="lead col-lg-8">{city.heroSubtitle}</p>
                <ul className="crumb wow fadeInUp">
                  <li><a href="/">Home</a></li>
                  <li><a href="/services">Services</a></li>
                  <li className="active">{city.name}</li>
                </ul>
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
                      src="/images/misc/l1.webp"
                      className="w-100 rounded-1"
                      alt={`Box Truck Boys delivery service in ${city.name}`}
                    />
                  </div>
                  <img
                    src="/images/misc/s1.webp"
                    className="w-40 rounded-1 abs end-0 bottom-0 z-2 soft-shadow wow scaleIn"
                    data-wow-delay=".2s"
                    alt={`Box truck freight in ${city.name}`}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ps-lg-3">
                  <div className="subtitle id-color wow fadeInUp" data-wow-delay=".2s">
                    {city.name}, {city.stateAbbrev}
                  </div>
                  <h2 className="split">
                    Delivery &amp; Courier Service in {city.name}
                  </h2>
                  {city.description.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="wow fadeInUp" data-wow-delay=".4s">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="section-services">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-7 text-center">
                <div className="subtitle wow fadeInUp">Our Services</div>
                <h2 className="split" data-wow-delay=".2s">
                  What We Deliver in {city.name}
                </h2>
              </div>
            </div>

            <div className="row g-4 gx-5">
              {city.services.map((service, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-6 wow fadeInRight"
                  data-wow-delay={`${index * 0.2}s`}
                >
                  <a href="/services" className="d-block hover relative">
                    <img
                      src={`/${service.icon}`}
                      className="w-70px mb-3 hover-jello infinite"
                      alt={service.title}
                    />
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="section-why-choose-us">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-7 text-center">
                <div className="subtitle wow fadeInUp">Why Choose Us</div>
                <h2 className="split" data-wow-delay=".2s">
                  Why {city.name} Businesses Trust Box Truck Boys
                </h2>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6 wow fadeInUp">
                <div className="relative">
                  <i className="abs fs-40 p-4 bg-dark icon_check rounded-1 text-light"></i>
                  <div className="ps-100 ms-4">
                    <h4>Locally Owned &amp; Operated</h4>
                    <p>
                      We are a Twin Cities-based carrier with deep roots in the community. Our
                      drivers know {city.name} and deliver with the care and urgency that only a
                      local company can provide.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 wow fadeInUp">
                <div className="relative">
                  <i className="abs fs-40 p-4 bg-dark icon_check rounded-1 text-light"></i>
                  <div className="ps-100 ms-4">
                    <h4>USDOT Registered Carrier</h4>
                    <p>
                      Box Truck Boys operates under USDOT 3823948 and MC-1384682. We are fully
                      licensed, insured, and compliant with federal transportation regulations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 wow fadeInUp">
                <div className="relative">
                  <i className="abs fs-40 p-4 bg-dark icon_check rounded-1 text-light"></i>
                  <div className="ps-100 ms-4">
                    <h4>Fast Dispatch</h4>
                    <p>
                      For urgent deliveries in {city.name}, we dispatch within 30 to 60 minutes.
                      Our fleet is positioned across the metro for rapid response to any address.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 wow fadeInUp">
                <div className="relative">
                  <i className="abs fs-40 p-4 bg-dark icon_check rounded-1 text-light"></i>
                  <div className="ps-100 ms-4">
                    <h4>Medical Courier Expertise</h4>
                    <p>
                      Chain-of-custody compliance, temperature-controlled transport, and
                      HIPAA-trained drivers for healthcare providers in {city.name}.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 wow fadeInUp">
                <div className="relative">
                  <i className="abs fs-40 p-4 bg-dark icon_check rounded-1 text-light"></i>
                  <div className="ps-100 ms-4">
                    <h4>Transparent Pricing</h4>
                    <p>
                      No hidden fees, no accessorial surprises. We provide clear quotes before
                      pickup so you know exactly what your {city.name} delivery will cost.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 wow fadeInUp">
                <div className="relative">
                  <i className="abs fs-40 p-4 bg-dark icon_check rounded-1 text-light"></i>
                  <div className="ps-100 ms-4">
                    <h4>Flexible Fleet</h4>
                    <p>
                      Sprinter vans for small urgent deliveries and box trucks for pallets and
                      freight. We match the right vehicle to every {city.name} delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="section-faq" className="pt-0">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="subtitle id-color">FAQ</div>
                <h2 className="split">
                  Frequently Asked Questions About Delivery in {city.name}
                </h2>
              </div>

              <div className="col-lg-6">
                <div className="accordion">
                  <div className="accordion-section">
                    {city.faq.map((item, index) => (
                      <div key={index}>
                        <div
                          className="accordion-section-title"
                          data-tab={`#accordion-city-${index + 1}`}
                        >
                          {item.question}
                        </div>
                        <div
                          className="accordion-section-content"
                          id={`accordion-city-${index + 1}`}
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
                  Ready to Get Started in {city.name}?
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
                  <a href="mailto:Boxtruckboystrucking@gmail.com" className="text-white fw-bold">
                    Boxtruckboystrucking@gmail.com
                  </a>{' '}
                  for delivery service in {city.name}, {city.stateAbbrev}.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
