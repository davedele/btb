import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceDetails, serviceList } from "@/lib/service-detail-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return serviceList.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails[slug];
  if (!service) return {};
  return {
    title: `${service.name} | Box Truck Boys Trucking Minneapolis`,
    description: service.metaDescription,
  };
}

export default async function ServiceSinglePage({ params }: Props) {
  const { slug } = await params;
  const service = serviceDetails[slug];
  if (!service) notFound();

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>

      <section
        id="subheader"
        className="text-light sm-mt-90 relative rounded-1 overflow-hidden m-3"
        data-bgimage="url('/images/background/4.webp') center"
      >
        <div className="container relative z-2">
          <div className="row gy-4 gx-5 align-items-center">
            <div className="col-lg-12">
              <h1 className="split">{service.name}</h1>
              <ul className="crumb wow fadeInUp">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li className="active">{service.name}</li>
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
            {/* Sidebar */}
            <div className="col-lg-3">
              <div className="me-lg-3">
                {serviceList.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className={`${
                      s.slug === slug
                        ? "bg-color text-light"
                        : "bg-light"
                    } d-block p-3 px-4 rounded-10px mb-3 relative`}
                  >
                    <h5 className="mb-0">{s.name}</h5>
                    {s.slug === slug && (
                      <i className="icofont-long-arrow-right absolute abs-middle fs-24 end-20px"></i>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-9">
              <div className="row g-4 gx-5">
                <div className="col-lg-6">
                  <h2 className="split">{service.headline}</h2>
                  <p className="wow fadeInRight" data-wow-delay=".5s">
                    {service.description}
                  </p>
                </div>

                <div className="col-lg-6">
                  <div className="relative">
                    <img
                      src="/images/misc/s3.webp"
                      className="img-fluid rounded-1 wow fadeInUp"
                      alt={service.name}
                    />
                    <div className="bg-color text-light p-4 abs m-4 bottom-0 rounded-1 sm-hide">
                      <div className="row g-4 align-items-center">
                        <div className="col-lg-12">
                          <p className="no-bottom">{service.callout}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="spacer-double"></div>
              <h2>Key Features</h2>

              <div className="row g-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="col-lg-6 wow fadeInUp">
                    <div className="relative">
                      <i className="abs fs-40 p-4 bg-dark icon_check rounded-1 text-light"></i>
                      <div className="ps-100 ms-4">
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="spacer-double"></div>

              <div className="bg-color text-light p-4 rounded-1">
                <div className="row g-4 align-items-center">
                  <div className="col-md-8">
                    <h3 className="mb-0">
                      Ready to get started with {service.name.toLowerCase()}?
                    </h3>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <Link
                      href="/contact"
                      className="btn-main btn-line fx-slide text-light"
                    >
                      <span>Get a Quote</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
