export interface ServiceDetail {
  name: string;
  slug: string;
  headline: string;
  description: string;
  callout: string;
  features: { title: string; description: string }[];
  metaDescription: string;
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "medical-courier": {
    name: "Medical Courier Service",
    slug: "medical-courier",
    headline: "Reliable Medical Courier for Minneapolis Healthcare Providers",
    description:
      "Box Truck Boys provides professional medical courier service for hospitals, clinics, laboratories, pharmacies, and healthcare systems across the Twin Cities metro. Our medical courier division specializes in the time-sensitive, compliance-critical transport that healthcare providers demand — from STAT lab specimen pickups to scheduled pharmaceutical routes and durable medical equipment delivery. Every medical courier run follows strict chain-of-custody protocols. Our drivers are trained in HIPAA-conscious handling, biohazard procedures, temperature-controlled transport, and the documentation requirements of clinical and laboratory specimens.",
    callout:
      "Trusted medical courier solutions for healthcare providers who need reliable, compliant delivery of specimens, pharmaceuticals, and medical supplies.",
    features: [
      {
        title: "Chain-of-Custody Compliance",
        description:
          "Every medical delivery is documented with full chain-of-custody records. We track custody from pickup to delivery so your specimens and supplies are accounted for at every step.",
      },
      {
        title: "STAT & Scheduled Routes",
        description:
          "Need an urgent pickup right now? We dispatch within minutes. Need a daily route between your clinic and the lab? We set up recurring schedules that run like clockwork.",
      },
      {
        title: "Temperature-Controlled Transport",
        description:
          "Insulated containers, cold chain packaging, and climate monitoring keep specimens and pharmaceuticals at the required temperature from pickup to delivery.",
      },
      {
        title: "HIPAA-Conscious Drivers",
        description:
          "Our medical courier drivers are trained in HIPAA-conscious handling, biohazard safety, and the specific protocols required by healthcare logistics.",
      },
      {
        title: "Healthcare Facilities Served",
        description:
          "We serve hospitals, clinics, laboratories, pharmacies, dental offices, veterinary clinics, assisted living facilities, and home health agencies across the Twin Cities.",
      },
      {
        title: "Dedicated Medical Fleet",
        description:
          "Our sprinter vans are equipped specifically for medical transport with secure compartments, GPS tracking, and the tools needed for compliant healthcare delivery.",
      },
    ],
    metaDescription:
      "Medical courier service in Minneapolis and the Twin Cities. Lab specimens, pharmaceuticals, DME, and medical supplies. HIPAA-conscious. Call (612) 237-7374.",
  },
  "same-day": {
    name: "Same-Day Delivery",
    slug: "same-day",
    headline: "Same-Day Delivery Across the Twin Cities Metro",
    description:
      "When your shipment cannot wait until tomorrow, Box Truck Boys delivers today. Our same-day delivery service covers the entire Twin Cities metro and beyond, with dispatch times as fast as one hour from your call. Whether it is an urgent parts delivery, a last-minute client shipment, or a time-sensitive document, our fleet of box trucks and sprinter vans is standing by to move it. We handle same-day deliveries for businesses of every size — from single-location shops to multi-site operations that need fast, reliable logistics on demand.",
    callout:
      "Same-day dispatch within the hour. Your delivery arrives before end of business day, guaranteed.",
    features: [
      {
        title: "Dispatch Within the Hour",
        description:
          "Call us and we roll. Our local fleet means we can dispatch a vehicle to your location within 60 minutes of your request, often sooner.",
      },
      {
        title: "Full Metro Coverage",
        description:
          "We cover Minneapolis, Saint Paul, and every suburb in the Twin Cities metro. Bloomington, Plymouth, Eagan, Brooklyn Park, Maple Grove — we are already in your area.",
      },
      {
        title: "Flexible Vehicle Options",
        description:
          "Small parcel? Sprinter van. Full pallet? Box truck. We match the right vehicle to your delivery so you get the fastest, most cost-effective solution.",
      },
      {
        title: "Real-Time Communication",
        description:
          "Know exactly where your delivery is. We provide pickup confirmation, in-transit updates, and delivery confirmation so you are never left guessing.",
      },
      {
        title: "Business & Personal",
        description:
          "We handle same-day delivery for businesses and individuals alike. Office supplies, retail inventory, personal packages — if it fits in our vehicles, we will move it today.",
      },
      {
        title: "Competitive Pricing",
        description:
          "Our same-day rates are transparent and competitive. No surge pricing, no hidden fees. You get a quote before we dispatch and that is the price you pay.",
      },
    ],
    metaDescription:
      "Same-day delivery service in Minneapolis and the Twin Cities. Dispatch within the hour. Box truck and sprinter van delivery. Call (612) 237-7374.",
  },
  "last-mile": {
    name: "Final-Mile Delivery",
    slug: "last-mile",
    headline: "Final-Mile Delivery for E-Commerce and Retail",
    description:
      "The final mile is where your customer experience is made or broken. Box Truck Boys handles the final leg of your supply chain with the care and professionalism that your brand reputation depends on. From e-commerce fulfillment to retail restocking and direct-to-door delivery, our final-mile service ensures your products arrive on time, in perfect condition, and with a positive delivery experience. We partner with online retailers, distribution centers, and local businesses throughout Minneapolis and Saint Paul to handle their final-mile logistics.",
    callout:
      "Professional final-mile delivery that protects your brand and delights your customers with on-time, careful handling.",
    features: [
      {
        title: "E-Commerce Fulfillment",
        description:
          "We pick up from your warehouse or fulfillment center and deliver directly to your customers' doors across the Twin Cities metro, with proof of delivery for every package.",
      },
      {
        title: "Retail Restocking",
        description:
          "Keep your store shelves full with scheduled restocking deliveries. We handle the logistics so your team can focus on serving customers.",
      },
      {
        title: "White Label Service",
        description:
          "We represent your brand at the door. Professional, uniformed drivers deliver your products with the care and presentation your customers expect.",
      },
      {
        title: "Proof of Delivery",
        description:
          "Every delivery is documented with signature confirmation and photo proof. You and your customers always know when and where the delivery was completed.",
      },
      {
        title: "Multi-Stop Routes",
        description:
          "Efficient route planning for high-volume final-mile delivery. We optimize stops to maximize deliveries per route while maintaining on-time performance.",
      },
      {
        title: "Returns & Reverse Logistics",
        description:
          "Need to handle returns? We pick up from customers and bring items back to your facility, completing the logistics loop.",
      },
    ],
    metaDescription:
      "Final-mile delivery service in Minneapolis. E-commerce fulfillment, retail restocking, and direct-to-door delivery. Call (612) 237-7374.",
  },
  "scheduled-routes": {
    name: "Scheduled Route Delivery",
    slug: "scheduled-routes",
    headline: "Recurring Delivery Routes for Minneapolis Businesses",
    description:
      "For businesses that need deliveries on a regular schedule, Box Truck Boys provides dedicated route delivery service. We set up daily, weekly, or custom schedules that run like clockwork — same driver, same route, same reliable service every time. Our scheduled routes serve hospitals, pharmacies, clinics, offices, and distribution operations that depend on consistent, predictable logistics. You tell us where and when, and we build a route that fits your business perfectly.",
    callout:
      "Same driver, same schedule, same reliable delivery. Recurring routes built around your business needs.",
    features: [
      {
        title: "Consistent Schedule",
        description:
          "Daily, weekly, or custom schedules that your team can count on. We show up at the same time, every time, so your operations run smoothly.",
      },
      {
        title: "Dedicated Drivers",
        description:
          "Your route is assigned to a dedicated driver who knows your locations, your people, and your specific delivery requirements. No strangers at your door.",
      },
      {
        title: "Multi-Stop Efficiency",
        description:
          "We optimize routes across multiple pickup and delivery points to maximize efficiency while meeting your time windows at every stop.",
      },
      {
        title: "Healthcare Route Specialists",
        description:
          "Many of our scheduled routes serve medical facilities. Specimen pickups, pharmacy deliveries, and supply runs between clinics operate with compliance built in.",
      },
      {
        title: "Volume Pricing",
        description:
          "Scheduled routes qualify for our best rates. The more consistent your delivery needs, the more you save compared to on-demand pricing.",
      },
      {
        title: "Flexible Adjustments",
        description:
          "Need to add a stop? Change a day? We adjust routes as your business needs evolve. No long-term lock-in — just reliable service that adapts with you.",
      },
    ],
    metaDescription:
      "Scheduled route delivery in Minneapolis. Daily and weekly recurring routes for healthcare, retail, and business logistics. Call (612) 237-7374.",
  },
  "box-truck-freight": {
    name: "Box Truck Freight",
    slug: "box-truck-freight",
    headline: "Box Truck Freight Service for the Twin Cities",
    description:
      "When your shipment needs more than a van but less than a semi, our box truck freight service is the right fit. Box Truck Boys handles palletized goods, large equipment, multi-stop deliveries, and commercial freight throughout Minneapolis, the Twin Cities metro, and across the region. Our box trucks are equipped for loading dock access, lift gate delivery, and inside placement, giving you the flexibility to move freight without the overhead of a full tractor-trailer.",
    callout:
      "Right-sized freight delivery. Box trucks for pallets, equipment, and commercial loads without the cost of a full semi.",
    features: [
      {
        title: "Palletized Freight",
        description:
          "We handle standard pallets, oversized pallets, and multi-pallet loads. Our box trucks are equipped with lift gates and loading dock compatibility for efficient freight handling.",
      },
      {
        title: "Multi-Stop Delivery",
        description:
          "One pickup, multiple deliveries. We build efficient multi-stop routes for businesses that need freight distributed across several locations in a single run.",
      },
      {
        title: "Inside Delivery",
        description:
          "Need freight moved inside your building? Our drivers handle inside delivery, placement, and positioning so your team does not have to.",
      },
      {
        title: "Lift Gate Service",
        description:
          "No loading dock? No problem. Our box trucks are equipped with lift gates for ground-level delivery at any location.",
      },
      {
        title: "Regional Coverage",
        description:
          "We handle freight throughout Minnesota, Wisconsin, Iowa, the Dakotas, and Nebraska. Our box trucks move your cargo regionally without the cost of a long-haul carrier.",
      },
      {
        title: "Commercial & Industrial",
        description:
          "We serve manufacturers, distributors, retailers, and contractors with freight delivery that meets commercial and industrial requirements.",
      },
    ],
    metaDescription:
      "Box truck freight service in Minneapolis. Palletized goods, equipment delivery, and commercial freight. Lift gate available. Call (612) 237-7374.",
  },
  "white-glove": {
    name: "White Glove Delivery",
    slug: "white-glove",
    headline: "White Glove Delivery for Sensitive and High-Value Items",
    description:
      "Some deliveries require more than just getting from point A to point B. Box Truck Boys white glove service provides inside delivery, unpacking, setup, placement, and debris removal for items that need extra care and attention. From sensitive medical equipment to high-end furniture, fragile electronics to museum pieces, our white glove team handles your delivery with the precision and professionalism that valuable items demand.",
    callout:
      "Inside delivery, setup, and placement for items that deserve the highest level of care and professionalism.",
    features: [
      {
        title: "Inside Delivery & Placement",
        description:
          "We do not just drop at the door. Our team brings items inside, navigates stairs and hallways, and places them exactly where you need them.",
      },
      {
        title: "Unpacking & Assembly",
        description:
          "We unpack, assemble, and set up items as needed. Furniture, equipment, displays — delivered ready to use, not sitting in boxes.",
      },
      {
        title: "Debris Removal",
        description:
          "All packing materials, boxes, and debris are removed from your space. We leave your location clean and ready to go.",
      },
      {
        title: "Fragile Item Handling",
        description:
          "Specialized handling for fragile, sensitive, and high-value items. Our team is trained in proper lifting, padding, and protection techniques.",
      },
      {
        title: "Medical Equipment",
        description:
          "We deliver and set up medical equipment for clinics, hospitals, and home health providers. Careful handling of sensitive diagnostic and treatment equipment.",
      },
      {
        title: "Office & Commercial",
        description:
          "Furniture delivery, office setup, trade show logistics, and commercial installations. Professional service that keeps your business running.",
      },
    ],
    metaDescription:
      "White glove delivery in Minneapolis. Inside delivery, setup, unpacking, and placement for sensitive and high-value items. Call (612) 237-7374.",
  },
  ltl: {
    name: "LTL Shipping",
    slug: "ltl",
    headline: "LTL Shipping for Minneapolis Businesses",
    description:
      "Not every shipment needs a full truck. Box Truck Boys LTL (less-than-truckload) shipping provides cost-effective freight solutions for businesses that need to ship partial loads. We consolidate shipments efficiently so you only pay for the space you use, while still getting the reliable, professional delivery service that your business depends on. LTL shipping is ideal for businesses with regular freight needs that do not fill an entire truck on every shipment.",
    callout:
      "Ship what you need without paying for a full truck. Cost-effective LTL freight with reliable scheduling.",
    features: [
      {
        title: "Pay for What You Ship",
        description:
          "LTL pricing is based on the space your freight occupies, not the full truck. Ship partial loads cost-effectively without sacrificing service quality.",
      },
      {
        title: "Reliable Scheduling",
        description:
          "Our LTL service runs on predictable schedules. Your freight moves on time, even when sharing truck space with other shipments.",
      },
      {
        title: "Careful Handling",
        description:
          "Every LTL shipment is handled with the same care as a dedicated load. Proper securing, loading, and delivery ensure your freight arrives intact.",
      },
      {
        title: "Metro & Regional",
        description:
          "LTL service throughout the Twin Cities metro and to regional destinations. We cover Minnesota and neighboring states with regular LTL runs.",
      },
      {
        title: "Business Accounts",
        description:
          "Regular LTL shippers qualify for business accounts with net-30 invoicing, volume discounts, and dedicated account management.",
      },
      {
        title: "Proof of Delivery",
        description:
          "Every LTL shipment comes with proof of delivery documentation. Business accounts receive detailed monthly shipping logs.",
      },
    ],
    metaDescription:
      "LTL shipping in Minneapolis. Cost-effective partial load freight service with reliable scheduling. Call (612) 237-7374.",
  },
};

export const serviceList = Object.values(serviceDetails);
