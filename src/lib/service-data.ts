export interface ServiceData {
  name: string;
  headline: string;
  description: string;
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  metaDescription: string;
}

export const serviceData: Record<string, ServiceData> = {
  medical: {
    name: 'Medical Courier Service',
    headline: 'HIPAA-Compliant Medical Courier for the Twin Cities & Beyond',
    description: `Box Truck Boys provides professional medical courier service for hospitals, clinics, laboratories, pharmacies, and healthcare systems across the Twin Cities metro, Rochester, and the upper Midwest. Our medical courier division specializes in the time-sensitive, compliance-critical transport that healthcare providers demand — from STAT lab specimen pickups to scheduled pharmaceutical routes and durable medical equipment delivery.

Every medical courier run we operate follows strict chain-of-custody protocols. Our drivers are trained in HIPAA compliance, biohazard handling, temperature-controlled transport, and the documentation requirements of clinical and laboratory specimens. We maintain insulated containers, cold chain packaging, and GPS-tracked vehicles so that your specimens and medications arrive at their destination in the right condition, at the right time, with a complete chain-of-custody record.

Our medical courier clients include some of the most respected healthcare organizations in Minnesota — from Hennepin Healthcare and Abbott Northwestern in Minneapolis to Mayo Clinic in Rochester and Regions Hospital in Saint Paul. We run daily scheduled routes between hospitals, reference laboratories, and clinics, as well as on-demand STAT pickups when urgent specimens or supplies need to move immediately. Whether it is a single specimen vial or a full pallet of medical supplies, Box Truck Boys handles medical logistics with the precision and care that patient outcomes depend on.

We understand that medical courier service is not just about moving packages — it is about supporting patient care. Late or mishandled specimens can delay diagnoses, compromise test results, and impact treatment decisions. That is why we treat every medical delivery with the urgency it deserves, invest in training and equipment, and maintain the highest standards of reliability in the industry. When healthcare providers trust Box Truck Boys, they know their logistics are in safe hands.`,
    benefits: [
      {
        title: 'Chain-of-Custody Compliance',
        description: 'Full documentation and tracking from pickup to delivery. Every handoff is recorded, every specimen accounted for, and every delivery confirmed with timestamped proof.',
        icon: 'icon_check',
      },
      {
        title: 'Temperature-Controlled Transport',
        description: 'Insulated containers, cold chain packaging, and ambient monitoring ensure specimens and pharmaceuticals maintain required temperature ranges throughout transit.',
        icon: 'icon_check',
      },
      {
        title: 'STAT & Scheduled Service',
        description: 'On-demand STAT pickups with dispatch in 30 minutes or less, plus daily and weekly scheduled routes between hospitals, labs, and clinics.',
        icon: 'icon_check',
      },
      {
        title: 'HIPAA-Trained Drivers',
        description: 'Every driver is trained in HIPAA compliance, biohazard handling, and the specific protocols required by healthcare facilities throughout our service area.',
        icon: 'icon_check',
      },
    ],
    faq: [
      {
        question: 'What types of medical materials do you transport?',
        answer: 'We transport lab specimens (blood, urine, tissue), pharmaceuticals, blood products, durable medical equipment, surgical supplies, diagnostic materials, patient records, and any other medical items that require professional courier handling.',
      },
      {
        question: 'Are your drivers HIPAA trained?',
        answer: 'Yes. Every Box Truck Boys medical courier driver completes HIPAA training and is certified in chain-of-custody protocols, biohazard handling, and temperature-controlled transport procedures.',
      },
      {
        question: 'What is your STAT response time?',
        answer: 'For STAT medical pickups, we dispatch within 30 minutes in the Twin Cities metro. Our vehicles are positioned throughout the metro so we can reach most hospitals and clinics quickly. Rochester and outstate response times may vary.',
      },
    ],
    testimonial: {
      quote: 'Box Truck Boys handles our daily lab specimen pickups with precision. They understand the urgency and never miss a window. Absolutely reliable.',
      author: 'Lab Manager',
      role: 'Hennepin Healthcare',
    },
    metaDescription: 'Box Truck Boys Medical Courier — HIPAA-compliant specimen transport, pharmaceutical delivery, and medical logistics in Minneapolis, Saint Paul, Rochester & the Twin Cities. Call (612) 237-7374.',
  },

  sameday: {
    name: 'Same-Day Delivery',
    headline: 'Same-Day Pickup & Delivery Across the Twin Cities',
    description: `When your shipment cannot wait until tomorrow, Box Truck Boys delivers it today. Our same-day delivery service provides urgent pickup and delivery for businesses across the Twin Cities metro, Rochester, Omaha, and Duluth. We dispatch within the hour, route efficiently, and deliver before end of business day — giving your business the speed it needs without the premium pricing of national overnight carriers.

Same-day delivery from Box Truck Boys is built for businesses that operate in real time. A manufacturer in Brooklyn Park needs replacement parts delivered to a production line in Eagan before the afternoon shift. A law firm in downtown Minneapolis needs documents hand-delivered to opposing counsel in Saint Paul within two hours. An e-commerce company in Bloomington needs customer orders fulfilled and delivered across the metro the same day they are placed. These are the situations where Box Truck Boys excels — fast dispatch, professional handling, and guaranteed same-day completion.

Our same-day fleet includes sprinter vans for smaller urgent deliveries and box trucks for larger shipments that still need to move today. Every vehicle is GPS-tracked, and our dispatch team provides real-time updates so you always know where your delivery is. We cover the entire Twin Cities metro from Maple Grove to Woodbury, from Blaine to Lakeville, and every neighborhood in between. For businesses outside the metro, we also offer same-day service within Rochester, Duluth, and Omaha.

Same-day delivery is not just about speed — it is about reliability. When you call Box Truck Boys for a same-day pickup, you are getting a commitment that your shipment will be picked up promptly and delivered on time. No excuses, no missed windows, no surprises. Our dispatch team confirms every pickup and delivery, and our drivers communicate proactively if anything changes. For Twin Cities businesses that need a same-day delivery partner they can count on, Box Truck Boys is the clear choice.`,
    benefits: [
      {
        title: 'Dispatch Within the Hour',
        description: 'Call us and we roll. Our vehicles are positioned across the metro for rapid response, with most pickups happening within 30 to 60 minutes of your request.',
        icon: 'icon_check',
      },
      {
        title: 'Full Metro Coverage',
        description: 'We cover the entire Twin Cities metro from Maple Grove to Woodbury, Brooklyn Park to Lakeville, plus same-day service in Rochester, Duluth, and Omaha.',
        icon: 'icon_check',
      },
      {
        title: 'Real-Time GPS Tracking',
        description: 'Every vehicle is GPS-tracked and our dispatch team provides updates throughout the delivery. You always know exactly where your shipment is.',
        icon: 'icon_check',
      },
      {
        title: 'Flexible Vehicle Options',
        description: 'Sprinter vans for small urgent packages and box trucks for pallets and larger shipments. We match the right vehicle to your same-day delivery needs.',
        icon: 'icon_check',
      },
    ],
    faq: [
      {
        question: 'How quickly can you pick up for same-day delivery?',
        answer: 'We typically dispatch within 30 to 60 minutes for same-day requests in the Twin Cities metro. Actual pickup time depends on your location and current vehicle availability, but we prioritize speed on every same-day order.',
      },
      {
        question: 'What is the cutoff time for same-day delivery?',
        answer: 'For guaranteed same-day completion within the Twin Cities metro, we recommend requesting pickup by 2:00 PM. We can often accommodate later requests depending on the route, so call us and we will do our best to make it happen.',
      },
      {
        question: 'How much does same-day delivery cost?',
        answer: 'Same-day pricing depends on distance, shipment size, and urgency. We provide transparent quotes before pickup so there are no surprises. Call (612) 237-7374 or email contact@boxtruckboys.com for a quick quote.',
      },
    ],
    testimonial: {
      quote: 'We switched to Box Truck Boys for same-day delivery and have not looked back. Faster response times and better communication than our previous provider.',
      author: 'Operations Manager',
      role: 'North Loop Retail',
    },
    metaDescription: 'Box Truck Boys Same-Day Delivery — urgent pickup and delivery across the Twin Cities metro, Rochester, Duluth & Omaha. Dispatch within the hour. Call (612) 237-7374.',
  },

  freight: {
    name: 'Box Truck Freight',
    headline: 'Box Truck Freight for the Twin Cities & Upper Midwest',
    description: `Box Truck Boys provides professional box truck freight services for businesses that need to move palletized goods, large equipment, and commercial shipments throughout the Twin Cities, Minnesota, and the upper Midwest. Our fleet of well-maintained box trucks handles everything from single-pallet deliveries to full truckload shipments, with the flexibility and responsiveness that local businesses need.

Box truck freight from Box Truck Boys is different from working with a national LTL carrier. When you book a box truck with us, you get a dedicated vehicle and driver for your shipment — no hub-and-spoke sorting, no terminal delays, and no damage from multiple handoffs. Your freight goes from your dock to the destination dock on a single truck, handled by a single driver who takes personal responsibility for the load. This direct-service model means faster transit times, less damage risk, and more predictable delivery windows than traditional LTL.

Our freight clients span a wide range of industries. Manufacturers in Brooklyn Park and Plymouth use our box trucks to deliver finished goods to customers across the metro. Distributors in Bloomington and Eagan rely on us for multi-stop commercial routes. Retailers use our freight service for inventory restocking from warehouses to storefronts. Construction companies call us when building materials need to reach job sites on tight schedules. Whatever you are shipping, if it fits in a box truck, we can move it professionally and on time.

Box Truck Boys freight service covers the entire Twin Cities metro plus regional routes to Rochester, Duluth, Omaha, and cities throughout Minnesota, Wisconsin, Iowa, and the Dakotas. We offer same-day freight for urgent shipments, next-day service for planned loads, and recurring scheduled freight routes for businesses with regular transport needs. Our pricing is transparent and competitive — no hidden fees, no accessorial surprises, just honest rates for reliable freight delivery.`,
    benefits: [
      {
        title: 'Dedicated Vehicle & Driver',
        description: 'Your freight gets a single truck and driver from pickup to delivery. No terminals, no sorting hubs, no multiple handoffs that damage cargo.',
        icon: 'icon_check',
      },
      {
        title: 'Flexible Scheduling',
        description: 'Same-day, next-day, and recurring scheduled freight service. We match our schedule to yours for predictable, reliable delivery windows.',
        icon: 'icon_check',
      },
      {
        title: 'Regional Coverage',
        description: 'Twin Cities metro plus routes to Rochester, Duluth, Omaha, and throughout Minnesota, Wisconsin, Iowa, and the Dakotas.',
        icon: 'icon_check',
      },
      {
        title: 'Transparent Pricing',
        description: 'Honest, competitive rates with no hidden fees or accessorial surprises. We quote before we load so you know exactly what to expect.',
        icon: 'icon_check',
      },
    ],
    faq: [
      {
        question: 'What can you fit in a box truck?',
        answer: 'Our box trucks accommodate standard pallets, furniture, appliances, building materials, commercial equipment, and most items up to 10,000 pounds. Interior dimensions vary by truck but typically offer 12 to 16 feet of cargo space with a lift gate for easy loading.',
      },
      {
        question: 'Do you offer multi-stop freight routes?',
        answer: 'Yes. Many of our freight clients use multi-stop routes for commercial deliveries, retail restocking, and distribution. We plan efficient routes that hit all your stops on schedule.',
      },
      {
        question: 'How far do your freight routes extend?',
        answer: 'We cover the entire Twin Cities metro for local freight, plus regional routes to Rochester, Duluth, Omaha, and destinations throughout Minnesota, Wisconsin, Iowa, Nebraska, and the Dakotas. Call us for a quote on your specific route.',
      },
    ],
    testimonial: {
      quote: 'Box Truck Boys has been our go-to for LTL freight across the metro. Professional drivers, fair rates, and they actually answer the phone.',
      author: 'Logistics Coordinator',
      role: 'Twin Cities Beverage Co.',
    },
    metaDescription: 'Box Truck Boys Freight — dedicated box truck freight service in Minneapolis, Saint Paul & the upper Midwest. Pallets, equipment, commercial delivery. Call (612) 237-7374.',
  },
};
