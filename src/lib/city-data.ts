export interface CityData {
  name: string;
  state: string;
  stateAbbrev: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  services: {
    title: string;
    description: string;
    icon: string;
  }[];
  landmarks: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  metaDescription: string;
}

export const cityData: Record<string, CityData> = {
  minneapolis: {
    name: 'Minneapolis',
    state: 'Minnesota',
    stateAbbrev: 'MN',
    heroTitle: 'Trusted Delivery & Medical Courier in Minneapolis',
    heroSubtitle: 'Box trucks, sprinter vans, and same-day service for the Twin Cities metro.',
    description: `Box Truck Boys is proud to serve Minneapolis as the city's go-to delivery and medical courier provider. Based right here in Minneapolis, we understand the pace and demands of businesses across the metro — from the bustling North Loop warehouses to the medical facilities lining the Midtown Greenway corridor. Our fleet of box trucks and sprinter vans are dispatched daily throughout Minneapolis to handle everything from urgent lab specimen pickups at Hennepin Healthcare to scheduled freight routes serving the Minneapolis Warehouse District.

Minneapolis businesses choose Box Truck Boys because we combine local knowledge with professional-grade logistics. We know the fastest routes through downtown Minneapolis during rush hour, which loading docks at the U of M Medical Center require advance scheduling, and how to navigate the skyway-adjacent drop points that other carriers avoid. Whether you operate a clinic near Abbott Northwestern Hospital, a pharmacy in Uptown Minneapolis, or a distribution center in the Northeast Arts District, our drivers arrive on time and handle every package with care.

Our medical courier division has become one of the fastest-growing segments of our Minneapolis operation. Hospitals, clinics, and laboratories across Minneapolis rely on us for STAT specimen transport, pharmaceutical delivery, and durable medical equipment logistics. We maintain strict chain-of-custody protocols and temperature-controlled transport options that meet the compliance requirements of Minneapolis healthcare providers. From Hennepin Healthcare to the VA Medical Center, Minneapolis medical professionals trust Box Truck Boys to deliver critical materials safely and on schedule.

Beyond medical courier services, our Minneapolis team handles same-day delivery, final-mile fulfillment, box truck freight, and recurring scheduled routes. Minneapolis e-commerce businesses use our final-mile service to get orders to customers across the metro the same day they ship. Restaurants and retailers in Minneapolis count on our scheduled routes for consistent inventory replenishment. Whatever your delivery needs in Minneapolis, Box Truck Boys has the fleet, the drivers, and the local expertise to get it done right.`,
    services: [
      {
        title: 'Medical Courier Service',
        description: 'STAT specimen transport, pharmaceutical delivery, and medical equipment logistics for Minneapolis hospitals, clinics, and laboratories including Hennepin Healthcare and Abbott Northwestern.',
        icon: 'images/icons-color/1.png',
      },
      {
        title: 'Same-Day Delivery',
        description: 'Urgent pickup and delivery anywhere in the Minneapolis metro. We dispatch within the hour and deliver before end of business day across the Twin Cities.',
        icon: 'images/icons-color/2.png',
      },
      {
        title: 'Box Truck Freight',
        description: 'Palletized goods, large equipment, and multi-stop deliveries using our box truck fleet throughout Minneapolis and the surrounding metro area.',
        icon: 'images/icons-color/5.png',
      },
      {
        title: 'Scheduled Route Delivery',
        description: 'Recurring daily or weekly delivery routes for Minneapolis hospitals, pharmacies, retailers, and businesses that need consistent, reliable pickup and drop-off service.',
        icon: 'images/icons-color/4.png',
      },
    ],
    landmarks: [
      'Hennepin Healthcare',
      'Abbott Northwestern Hospital',
      'U of M Medical Center',
      'VA Medical Center',
      'North Memorial Health',
      'Minneapolis Warehouse District',
      'North Loop',
      'Uptown',
      'Northeast Arts District',
    ],
    faq: [
      {
        question: 'What areas of Minneapolis do you serve?',
        answer: 'We serve all of Minneapolis and the surrounding Twin Cities metro, including downtown, North Loop, Uptown, Northeast, South Minneapolis, and the entire I-494/I-694 loop. Our drivers know every neighborhood and can reach any Minneapolis address quickly.',
      },
      {
        question: 'Do you offer medical courier service in Minneapolis?',
        answer: 'Yes. Medical courier is one of our core services in Minneapolis. We transport lab specimens, pharmaceuticals, blood products, and medical equipment between hospitals, clinics, and laboratories across Minneapolis with strict chain-of-custody protocols and temperature-controlled options.',
      },
      {
        question: 'How fast can you pick up in Minneapolis?',
        answer: 'For STAT medical pickups and urgent same-day requests in Minneapolis, we typically dispatch within 30 to 60 minutes. Our drivers are positioned throughout the metro so we can respond quickly to any Minneapolis location.',
      },
    ],
    metaDescription: 'Box Truck Boys provides medical courier, same-day delivery, and box truck freight services in Minneapolis, MN. USDOT 3823948. Call (612) 237-7374 for reliable Twin Cities delivery.',
  },

  saintpaul: {
    name: 'Saint Paul',
    state: 'Minnesota',
    stateAbbrev: 'MN',
    heroTitle: 'Reliable Delivery & Courier Service in Saint Paul',
    heroSubtitle: 'Professional box truck and sprinter van delivery across the Capital City.',
    description: `Box Truck Boys delivers throughout Saint Paul with the same reliability and professionalism that has made us a trusted name in the Twin Cities. Saint Paul businesses — from the medical offices along University Avenue to the distribution centers near the State Capitol — depend on our fleet for daily pickups, same-day delivery, and freight transport. Our Saint Paul routes are some of our busiest, and our drivers know the Capital City inside and out.

Serving Saint Paul means understanding the unique logistics of a city built on bluffs and river corridors. Our drivers navigate the winding streets of Summit Hill, the loading docks in Lowertown, and the medical campuses of the East Side with efficiency that only comes from years of local experience. Saint Paul clients appreciate that we never treat their deliveries as an afterthought — every package leaving or arriving in Saint Paul gets the same attention and urgency as a downtown Minneapolis STAT run.

Healthcare delivery is a critical part of our Saint Paul operation. Regions Hospital, United Hospital, and the numerous clinics scattered along West 7th Street and Snelling Avenue rely on Box Truck Boys for lab specimen transport, pharmaceutical deliveries, and scheduled medical supply routes. Our Saint Paul medical couriers maintain full compliance with HIPAA and chain-of-custody requirements, ensuring that sensitive materials arrive safely at their destination every time.

Our Saint Paul service area extends well beyond the city limits. We cover Maplewood, Roseville, Woodbury, and the entire eastern metro from our Saint Paul routes. Businesses in Saint Paul enjoy flexible scheduling, transparent pricing, and a dedicated team that treats every delivery as if their reputation depends on it — because ours does. Whether you need a one-time urgent delivery or a five-day-a-week recurring route through Saint Paul, Box Truck Boys is ready to serve.`,
    services: [
      {
        title: 'Medical Courier Service',
        description: 'Specimen transport, pharmaceutical delivery, and medical supply logistics serving Regions Hospital, United Hospital, and clinics throughout Saint Paul.',
        icon: 'images/icons-color/1.png',
      },
      {
        title: 'Same-Day Delivery',
        description: 'Fast local pickup and delivery across Saint Paul and the eastern Twin Cities metro with dispatch within the hour.',
        icon: 'images/icons-color/2.png',
      },
      {
        title: 'Final-Mile Delivery',
        description: 'E-commerce fulfillment, retail restocking, and direct-to-door delivery throughout Saint Paul, Maplewood, Roseville, and Woodbury.',
        icon: 'images/icons-color/3.png',
      },
    ],
    landmarks: [
      'Regions Hospital',
      'United Hospital',
      'Minnesota State Capitol',
      'Lowertown',
      'Summit Hill',
      'University Avenue',
      'West 7th Street',
    ],
    faq: [
      {
        question: 'Do you deliver throughout all of Saint Paul?',
        answer: 'Yes. We cover every neighborhood in Saint Paul including Lowertown, Summit Hill, Highland Park, the East Side, Midway, and West 7th. We also serve adjacent communities like Maplewood, Roseville, and Woodbury from our Saint Paul routes.',
      },
      {
        question: 'Can you handle recurring delivery routes in Saint Paul?',
        answer: 'Absolutely. Many of our Saint Paul clients use our scheduled route service for daily or weekly deliveries between multiple locations. We build consistent routes that your team can rely on.',
      },
      {
        question: 'What is your response time for urgent pickups in Saint Paul?',
        answer: 'For STAT and urgent same-day requests in Saint Paul, we typically dispatch within 30 to 60 minutes. Our vehicles are positioned across the metro to ensure fast response throughout the Capital City.',
      },
    ],
    metaDescription: 'Box Truck Boys offers same-day delivery, medical courier, and box truck freight in Saint Paul, MN. Serving Regions Hospital, United Hospital & the Capital City. Call (612) 237-7374.',
  },

  bloomington: {
    name: 'Bloomington',
    state: 'Minnesota',
    stateAbbrev: 'MN',
    heroTitle: 'Box Truck Delivery & Courier Service in Bloomington',
    heroSubtitle: 'Fast, reliable delivery near the Mall of America and MSP Airport corridor.',
    description: `Box Truck Boys provides professional delivery and courier services throughout Bloomington, Minnesota — one of the Twin Cities metro's most important commercial hubs. Located at the crossroads of I-494 and I-35W, Bloomington is home to the Mall of America, MSP International Airport, and hundreds of businesses that depend on fast, reliable logistics. Our Bloomington routes run daily, serving everything from medical offices on France Avenue to corporate campuses along American Boulevard.

Bloomington's unique position near the airport makes it a critical link in the Twin Cities supply chain. Companies in Bloomington frequently need time-sensitive pickups and deliveries coordinated with air cargo schedules, and Box Truck Boys is equipped to handle those tight windows. Our drivers know the Bloomington road network — from the 494 Strip to the residential neighborhoods south of Old Shakopee Road — and can navigate efficiently even during peak traffic around the Mall of America.

Healthcare providers in Bloomington benefit from our medical courier capabilities. Clinics and specialty practices near France Avenue, Oxboro, and the HealthPartners Bloomington campus count on us for specimen transport, pharmaceutical pickup, and medical equipment delivery. Our Bloomington medical courier service operates with the same chain-of-custody protocols and compliance standards we maintain across the entire metro.

Whether you are a retailer near the Mall of America needing inventory restocking, a corporate office in Bloomington requiring document delivery, or a medical practice that needs reliable daily courier runs, Box Truck Boys has you covered. Our Bloomington clients enjoy fast dispatch times, competitive pricing, and the peace of mind that comes from working with a locally owned carrier that takes every delivery personally. Bloomington is one of our core service areas, and we are committed to keeping the businesses here running smoothly.`,
    services: [
      {
        title: 'Same-Day Delivery',
        description: 'Urgent pickup and delivery throughout Bloomington, the 494 corridor, and connections to MSP Airport area businesses.',
        icon: 'images/icons-color/2.png',
      },
      {
        title: 'Medical Courier Service',
        description: 'Lab specimen transport and pharmaceutical delivery for Bloomington clinics, specialty practices, and the HealthPartners campus.',
        icon: 'images/icons-color/1.png',
      },
      {
        title: 'Box Truck Freight',
        description: 'Palletized freight, retail restocking, and multi-stop commercial deliveries throughout Bloomington and the south metro.',
        icon: 'images/icons-color/5.png',
      },
      {
        title: 'Final-Mile Delivery',
        description: 'E-commerce fulfillment and direct-to-door delivery for Bloomington businesses serving customers across the Twin Cities.',
        icon: 'images/icons-color/3.png',
      },
    ],
    landmarks: [
      'Mall of America',
      'MSP International Airport',
      'HealthPartners Bloomington',
      'American Boulevard',
      'France Avenue',
      'Oxboro',
    ],
    faq: [
      {
        question: 'How quickly can you pick up in Bloomington?',
        answer: 'We typically dispatch to Bloomington within 30 to 60 minutes for urgent requests. Our vehicles are frequently in the 494 corridor area, so response times to Bloomington addresses are among our fastest.',
      },
      {
        question: 'Do you coordinate deliveries with MSP Airport schedules?',
        answer: 'Yes. Many of our Bloomington clients need pickups or deliveries timed with air cargo arrivals and departures at MSP. We work with your schedule to ensure seamless coordination.',
      },
      {
        question: 'Can you handle retail restocking near Mall of America?',
        answer: 'Absolutely. We provide scheduled and on-demand restocking deliveries for retailers and businesses in the Mall of America area and throughout the Bloomington commercial district.',
      },
    ],
    metaDescription: 'Box Truck Boys delivers in Bloomington, MN — same-day delivery, medical courier, and box truck freight near Mall of America and MSP Airport. Call (612) 237-7374.',
  },

  brooklynpark: {
    name: 'Brooklyn Park',
    state: 'Minnesota',
    stateAbbrev: 'MN',
    heroTitle: 'Delivery & Courier Service in Brooklyn Park',
    heroSubtitle: 'Box truck freight and same-day delivery for the north metro.',
    description: `Box Truck Boys serves Brooklyn Park with the full range of delivery and courier services that north metro businesses depend on. As one of the largest cities in the Twin Cities metro, Brooklyn Park is home to a growing mix of medical facilities, distribution centers, retail corridors, and corporate offices that need reliable logistics support. Our Brooklyn Park routes operate daily, providing consistent service to businesses along Brooklyn Boulevard, Highway 169, and the Edinburgh and Northland business parks.

Brooklyn Park's location in the north metro makes it a strategic hub for businesses that distribute throughout the Twin Cities and beyond. Box Truck Boys helps Brooklyn Park companies move freight, restock inventory, and fulfill same-day delivery requests with box trucks and sprinter vans that are always ready to roll. Our drivers know the Brooklyn Park road network well, including the industrial areas near 85th Avenue and the commercial corridors along Zane Avenue and West Broadway.

Medical courier service in Brooklyn Park is an important part of our operation. Clinics, urgent care centers, and dental offices in Brooklyn Park rely on Box Truck Boys for specimen transport, pharmaceutical delivery, and medical supply logistics. We connect Brooklyn Park healthcare providers with laboratories and hospitals across the metro, maintaining the chain-of-custody standards and timing that medical deliveries require.

For Brooklyn Park businesses looking for a delivery partner that shows up on time and communicates clearly, Box Truck Boys is the answer. We offer same-day delivery, scheduled routes, and box truck freight throughout Brooklyn Park and the surrounding communities of Brooklyn Center, Maple Grove, and Osseo. Our locally owned operation means you talk to real people who know Brooklyn Park and care about getting your delivery right every single time.`,
    services: [
      {
        title: 'Box Truck Freight',
        description: 'Palletized goods and large equipment deliveries throughout Brooklyn Park, the north metro, and the Edinburgh business park corridor.',
        icon: 'images/icons-color/5.png',
      },
      {
        title: 'Same-Day Delivery',
        description: 'Urgent local pickup and delivery across Brooklyn Park and the northern Twin Cities with fast dispatch times.',
        icon: 'images/icons-color/2.png',
      },
      {
        title: 'Medical Courier Service',
        description: 'Lab specimen transport and pharmaceutical delivery serving Brooklyn Park clinics, urgent care centers, and dental offices.',
        icon: 'images/icons-color/1.png',
      },
      {
        title: 'Scheduled Route Delivery',
        description: 'Recurring daily or weekly routes for Brooklyn Park businesses that need consistent pickup and delivery service.',
        icon: 'images/icons-color/4.png',
      },
    ],
    landmarks: [
      'Brooklyn Boulevard',
      'Edinburgh Business Park',
      'Northland Business Park',
      'Highway 169 corridor',
      'North Hennepin Medical Center (nearby)',
    ],
    faq: [
      {
        question: 'Do you serve all of Brooklyn Park?',
        answer: 'Yes. We cover every part of Brooklyn Park from the Highway 169 corridor to Brooklyn Boulevard and everything in between. We also serve neighboring Brooklyn Center, Maple Grove, and Osseo from our north metro routes.',
      },
      {
        question: 'Can you handle freight deliveries to Brooklyn Park industrial parks?',
        answer: 'Absolutely. Our box trucks regularly deliver palletized freight and large equipment to the Edinburgh and Northland business parks and industrial areas throughout Brooklyn Park.',
      },
      {
        question: 'What is your typical response time to Brooklyn Park?',
        answer: 'For urgent same-day requests in Brooklyn Park, we typically dispatch within 30 to 60 minutes. Our north metro coverage means we frequently have vehicles nearby and ready to respond.',
      },
    ],
    metaDescription: 'Box Truck Boys provides delivery, medical courier, and box truck freight services in Brooklyn Park, MN. North metro same-day delivery. Call (612) 237-7374.',
  },

  plymouth: {
    name: 'Plymouth',
    state: 'Minnesota',
    stateAbbrev: 'MN',
    heroTitle: 'Professional Delivery Service in Plymouth',
    heroSubtitle: 'Same-day delivery and freight solutions for the west metro.',
    description: `Box Truck Boys is a trusted delivery partner for businesses throughout Plymouth, Minnesota. Situated in the heart of the west metro, Plymouth is one of the Twin Cities' premier business communities — home to corporate headquarters, medical facilities, technology companies, and a thriving commercial district along Highway 55 and I-494. Our Plymouth routes operate daily, ensuring that businesses here have access to fast, reliable delivery and courier services whenever they need them.

Plymouth's corporate and medical campuses generate significant demand for professional logistics services, and Box Truck Boys is well-positioned to meet that demand. Our drivers serve Plymouth addresses along Vicksburg Lane, Rockford Road, and the Carlson Parkway area with the speed and precision that west metro businesses expect. Whether you need a single urgent delivery to a Plymouth office park or a recurring weekly route serving multiple Plymouth locations, we have the fleet and the expertise to handle it.

Medical courier service in Plymouth connects healthcare providers with the broader Twin Cities medical network. Clinics, specialty practices, and outpatient facilities in Plymouth depend on Box Truck Boys for specimen transport, prescription delivery, and medical equipment logistics. Our Plymouth medical courier runs maintain strict compliance standards and reliable timing, so providers can focus on patient care instead of worrying about logistics.

Plymouth businesses appreciate working with a carrier that is locally owned and genuinely invested in the community. Box Truck Boys offers transparent pricing, responsive communication, and a level of personal attention that national carriers simply cannot match. From same-day delivery and final-mile fulfillment to box truck freight and white glove service, our Plymouth operation covers every delivery need. If your business is in Plymouth and you need a delivery partner you can count on, Box Truck Boys is ready to serve.`,
    services: [
      {
        title: 'Same-Day Delivery',
        description: 'Fast pickup and delivery across Plymouth, the Highway 55 corridor, and the west metro with dispatch within the hour.',
        icon: 'images/icons-color/2.png',
      },
      {
        title: 'Medical Courier Service',
        description: 'Specimen transport and pharmaceutical delivery for Plymouth clinics, specialty practices, and outpatient facilities.',
        icon: 'images/icons-color/1.png',
      },
      {
        title: 'White Glove Delivery',
        description: 'Inside delivery, setup, and careful handling for sensitive equipment, furniture, and high-value items at Plymouth offices and campuses.',
        icon: 'images/icons-color/7.png',
      },
      {
        title: 'Box Truck Freight',
        description: 'Commercial freight, palletized goods, and multi-stop deliveries serving Plymouth business parks and corporate campuses.',
        icon: 'images/icons-color/5.png',
      },
    ],
    landmarks: [
      'Carlson Parkway',
      'Highway 55 corridor',
      'Vicksburg Lane',
      'Plymouth Business Park',
      'Wayzata area (nearby)',
    ],
    faq: [
      {
        question: 'What parts of Plymouth do you serve?',
        answer: 'We serve all of Plymouth including the Highway 55 corridor, Carlson Parkway area, Rockford Road, Vicksburg Lane, and all residential and commercial neighborhoods. We also cover nearby Wayzata, Minnetonka, and Maple Grove.',
      },
      {
        question: 'Do you offer white glove delivery in Plymouth?',
        answer: 'Yes. Our white glove service in Plymouth includes inside delivery, unpacking, setup, and debris removal for sensitive equipment, furniture, and high-value items at offices and corporate campuses.',
      },
      {
        question: 'How do I schedule a recurring route in Plymouth?',
        answer: 'Call us at (612) 237-7374 or email Boxtruckboystrucking@gmail.com. We will work with you to build a consistent daily or weekly route that meets your Plymouth delivery needs and schedule.',
      },
    ],
    metaDescription: 'Box Truck Boys offers same-day delivery, medical courier, and freight services in Plymouth, MN. Serving the west metro and Highway 55 corridor. Call (612) 237-7374.',
  },

  eagan: {
    name: 'Eagan',
    state: 'Minnesota',
    stateAbbrev: 'MN',
    heroTitle: 'Delivery & Courier Service in Eagan',
    heroSubtitle: 'Reliable box truck and sprinter van service for the south metro.',
    description: `Box Truck Boys provides dependable delivery and courier service throughout Eagan, Minnesota. Located along the I-35E and I-494 interchange in the south metro, Eagan is a major business hub with corporate offices, healthcare facilities, and distribution centers that require professional logistics support. Our Eagan routes operate daily, giving local businesses access to same-day delivery, medical courier service, and box truck freight whenever they need it.

Eagan's proximity to MSP Airport and the major interstate interchange makes it a natural logistics node, and Box Truck Boys leverages that positioning to provide fast service throughout the south metro. Our drivers are familiar with every business park along Pilot Knob Road, the commercial corridors on Yankee Doodle Road, and the corporate campuses in the Eagan Town Centre area. This local knowledge translates to faster pickups, efficient routing, and on-time delivery that Eagan businesses can count on.

Healthcare and medical courier service in Eagan is a growing part of our operation. Clinics, dental practices, and urgent care centers throughout Eagan trust Box Truck Boys to transport specimens, deliver prescriptions, and move medical supplies with the care and compliance that healthcare logistics demand. Our Eagan medical routes connect local providers with hospitals and laboratories across the metro, ensuring timely and secure transport of sensitive materials.

From one-time urgent deliveries to daily scheduled routes, Box Truck Boys offers Eagan businesses a full suite of delivery solutions. Our fleet of box trucks and sprinter vans can handle anything from a small package to a full pallet load. Eagan companies choose us because we are local, responsive, and committed to doing the job right. If your Eagan business needs a delivery partner that treats your freight like their own, call Box Truck Boys today.`,
    services: [
      {
        title: 'Same-Day Delivery',
        description: 'Urgent pickup and delivery throughout Eagan and the south metro with fast dispatch and reliable on-time performance.',
        icon: 'images/icons-color/2.png',
      },
      {
        title: 'Medical Courier Service',
        description: 'Specimen transport, prescription delivery, and medical supply logistics for Eagan clinics, dental practices, and urgent care centers.',
        icon: 'images/icons-color/1.png',
      },
      {
        title: 'Box Truck Freight',
        description: 'Palletized freight and commercial deliveries throughout Eagan business parks and the I-494/I-35E corridor.',
        icon: 'images/icons-color/5.png',
      },
      {
        title: 'Scheduled Route Delivery',
        description: 'Recurring daily or weekly pickup and delivery routes for Eagan businesses that need consistent logistics support.',
        icon: 'images/icons-color/4.png',
      },
    ],
    landmarks: [
      'Pilot Knob Road',
      'Yankee Doodle Road',
      'Eagan Town Centre',
      'I-494/I-35E interchange',
      'Blue Cross Blue Shield campus',
      'Thomson Reuters campus',
    ],
    faq: [
      {
        question: 'Do you deliver to all Eagan business parks?',
        answer: 'Yes. We serve every business park and commercial area in Eagan including Pilot Knob Road, Yankee Doodle Road, the Town Centre area, and all corporate campuses. We also cover Inver Grove Heights, Mendota Heights, and Burnsville.',
      },
      {
        question: 'Can you coordinate with air cargo schedules from Eagan?',
        answer: 'Absolutely. Eagan is right next to MSP Airport, and we frequently coordinate time-sensitive pickups and deliveries with air cargo schedules for Eagan businesses.',
      },
      {
        question: 'What size shipments can you handle in Eagan?',
        answer: 'We handle everything from single small packages to full pallet loads. Our fleet includes sprinter vans for smaller urgent deliveries and box trucks for freight and multi-stop commercial routes in Eagan.',
      },
    ],
    metaDescription: 'Box Truck Boys provides same-day delivery, medical courier, and freight services in Eagan, MN. South metro box truck service near MSP Airport. Call (612) 237-7374.',
  },

  rochester: {
    name: 'Rochester',
    state: 'Minnesota',
    stateAbbrev: 'MN',
    heroTitle: 'Medical Courier & Delivery Service in Rochester',
    heroSubtitle: 'Specialized medical logistics for the Mayo Clinic corridor and southeast Minnesota.',
    description: `Box Truck Boys provides professional delivery and medical courier service in Rochester, Minnesota — home to the world-renowned Mayo Clinic and one of the most important medical hubs in the United States. Rochester's healthcare ecosystem generates an enormous demand for specialized medical logistics, and Box Truck Boys has built a dedicated operation to serve it. From STAT specimen transport between Mayo Clinic campuses to pharmaceutical deliveries for the dozens of clinics and laboratories that support Rochester's medical community, our Rochester team handles it all with precision and compliance.

Rochester is unlike any other city in our service area. The concentration of healthcare facilities, research laboratories, and medical offices means that nearly every delivery in Rochester carries heightened urgency and compliance requirements. Box Truck Boys Rochester drivers are trained in medical courier protocols including chain-of-custody documentation, temperature-controlled transport, HIPAA compliance, and biohazard handling. This specialized training makes us the preferred courier partner for Rochester healthcare providers who cannot afford delays or mishandling.

Beyond the Mayo Clinic campus, our Rochester operation serves the broader southeast Minnesota region. We connect Rochester with the Twin Cities through daily courier runs, transporting specimens, pharmaceuticals, and medical supplies between Rochester facilities and Minneapolis/Saint Paul hospitals and laboratories. This Rochester-to-Twin Cities corridor is one of our most critical routes, and we maintain dedicated vehicles and drivers to ensure reliability on every run.

Rochester businesses outside of healthcare also benefit from our presence in the city. We provide same-day delivery, box truck freight, and scheduled route service for Rochester retailers, offices, and distributors. Our Rochester clients appreciate having a local delivery partner that understands the unique pace and priorities of a city built around world-class healthcare. Whether you need a medical courier in Rochester or a reliable freight delivery to the Civic Center area, Box Truck Boys delivers with the professionalism that Rochester expects.`,
    services: [
      {
        title: 'Medical Courier Service',
        description: 'STAT specimen transport, pharmaceutical delivery, and medical supply logistics for Mayo Clinic, Olmsted Medical Center, and Rochester-area healthcare providers.',
        icon: 'images/icons-color/1.png',
      },
      {
        title: 'Rochester-Twin Cities Corridor',
        description: 'Dedicated daily courier runs connecting Rochester with Minneapolis and Saint Paul hospitals and laboratories for specimen and supply transport.',
        icon: 'images/icons-color/4.png',
      },
      {
        title: 'Same-Day Delivery',
        description: 'Urgent pickup and delivery throughout Rochester and southeast Minnesota with fast dispatch and dedicated vehicles.',
        icon: 'images/icons-color/2.png',
      },
    ],
    landmarks: [
      'Mayo Clinic - Rochester',
      'Mayo Clinic - Saint Marys Campus',
      'Mayo Clinic - Methodist Campus',
      'Olmsted Medical Center',
      'Rochester Civic Center',
      'Apache Mall area',
      'Discovery Square',
    ],
    faq: [
      {
        question: 'Do you provide medical courier service to Mayo Clinic?',
        answer: 'Yes. We provide medical courier service to and from all Mayo Clinic campuses in Rochester, including the main campus, Saint Marys, and Methodist. We handle STAT specimens, pharmaceuticals, medical equipment, and supply deliveries with full chain-of-custody compliance.',
      },
      {
        question: 'Do you run daily routes between Rochester and the Twin Cities?',
        answer: 'Yes. We maintain dedicated daily courier runs between Rochester and Minneapolis/Saint Paul. This corridor serves hospitals, laboratories, and healthcare providers who need reliable transport of specimens and medical supplies between the two regions.',
      },
      {
        question: 'What medical compliance standards do your Rochester drivers follow?',
        answer: 'Our Rochester drivers are trained in chain-of-custody documentation, temperature-controlled transport, HIPAA compliance, and biohazard handling. We maintain the protocols required by Mayo Clinic and other Rochester healthcare providers.',
      },
    ],
    metaDescription: 'Box Truck Boys offers medical courier and delivery service in Rochester, MN. Serving Mayo Clinic, Olmsted Medical Center, and southeast Minnesota. Call (612) 237-7374.',
  },

  omaha: {
    name: 'Omaha',
    state: 'Nebraska',
    stateAbbrev: 'NE',
    heroTitle: 'Box Truck Delivery & Freight Service in Omaha',
    heroSubtitle: 'Expanding our reliable delivery and logistics services to the Omaha metro.',
    description: `Box Truck Boys has expanded into Omaha, Nebraska, bringing the same reliable delivery and courier services that have made us a trusted name in the Twin Cities. Omaha is a thriving logistics hub with a robust business community, major healthcare systems, and a strategic location along the I-80 corridor that connects the Midwest. Our Omaha operation provides same-day delivery, box truck freight, and medical courier service to businesses across the Omaha metro area.

Omaha businesses benefit from our proven approach to local delivery: fast dispatch, professional drivers, transparent pricing, and the personal attention that only a locally focused carrier can provide. Our Omaha fleet serves the downtown business district, the Aksarben Village area, West Omaha's office parks, and the industrial corridors near Eppley Airfield. Whether you need an urgent same-day delivery to a Mutual of Omaha office or a recurring freight route to the meatpacking district, Box Truck Boys has the capacity to handle it.

Healthcare delivery in Omaha is a key focus for our expansion. Nebraska Medicine, CHI Health, and the numerous clinics and laboratories across the Omaha metro need reliable medical courier service, and Box Truck Boys is building that capability in the market. Our Omaha medical courier team follows the same chain-of-custody protocols and compliance standards that we maintain in Minnesota, ensuring that Omaha healthcare providers receive the same level of service.

Our Omaha office also connects to our Twin Cities network, enabling businesses to ship between Omaha and Minneapolis/Saint Paul with a single carrier. This Omaha-to-Twin Cities corridor is ideal for companies that operate in both markets and want consistent, reliable logistics across the region. Omaha is a natural extension of our Midwest footprint, and we are committed to earning the trust of Omaha businesses one delivery at a time.`,
    services: [
      {
        title: 'Box Truck Freight',
        description: 'Palletized freight, commercial deliveries, and multi-stop routes throughout the Omaha metro and the I-80 corridor.',
        icon: 'images/icons-color/5.png',
      },
      {
        title: 'Same-Day Delivery',
        description: 'Urgent pickup and delivery across Omaha, Bellevue, Papillion, and the greater Omaha metro area.',
        icon: 'images/icons-color/2.png',
      },
      {
        title: 'Medical Courier Service',
        description: 'Specimen transport and pharmaceutical delivery serving Nebraska Medicine, CHI Health, and Omaha clinics and laboratories.',
        icon: 'images/icons-color/1.png',
      },
      {
        title: 'Omaha-Twin Cities Corridor',
        description: 'Dedicated freight and courier service connecting Omaha with Minneapolis and Saint Paul for businesses operating in both markets.',
        icon: 'images/icons-color/4.png',
      },
    ],
    landmarks: [
      'Nebraska Medicine',
      'CHI Health',
      'Aksarben Village',
      'Mutual of Omaha',
      'Eppley Airfield',
      'Old Market',
      'West Omaha',
    ],
    faq: [
      {
        question: 'Is Box Truck Boys fully operational in Omaha?',
        answer: 'Yes. Our Omaha operation provides same-day delivery, box truck freight, medical courier, and scheduled route services throughout the Omaha metro including Bellevue, Papillion, La Vista, and Council Bluffs.',
      },
      {
        question: 'Do you offer delivery between Omaha and Minneapolis?',
        answer: 'Yes. We maintain a dedicated Omaha-to-Twin Cities corridor service for businesses that need reliable freight and courier transport between the two markets.',
      },
      {
        question: 'What areas of Omaha do you cover?',
        answer: 'We cover the entire Omaha metro area including downtown, Aksarben, West Omaha, North Omaha, Bellevue, Papillion, La Vista, and Council Bluffs across the river in Iowa.',
      },
    ],
    metaDescription: 'Box Truck Boys delivers in Omaha, NE — same-day delivery, box truck freight, and medical courier service across the Omaha metro. Call (612) 237-7374.',
  },

  edenprairie: {
    name: 'Eden Prairie',
    state: 'Minnesota',
    stateAbbrev: 'MN',
    heroTitle: 'Delivery & Courier Service in Eden Prairie',
    heroSubtitle: 'Professional delivery solutions for the southwest metro business community.',
    description: `Box Truck Boys serves Eden Prairie, Minnesota with reliable delivery and courier services tailored to the needs of one of the Twin Cities' most dynamic business communities. Eden Prairie sits at the intersection of I-494 and Highway 212, making it a strategic location for corporate headquarters, technology companies, and healthcare providers that need efficient logistics. Our Eden Prairie routes run daily, connecting local businesses with the broader metro through same-day delivery, box truck freight, and medical courier service.

Eden Prairie's business landscape spans everything from the corporate campuses along Flying Cloud Drive to the retail centers near Eden Prairie Center Mall and the medical offices along Prairie Center Drive. Box Truck Boys drivers know these corridors well and provide fast, professional service to every Eden Prairie address. Our familiarity with Eden Prairie traffic patterns, loading dock configurations, and delivery preferences means your shipments arrive on time and are handled with care.

Medical courier service in Eden Prairie supports the clinics, specialty practices, and outpatient facilities that serve the southwest metro population. Box Truck Boys connects Eden Prairie healthcare providers with hospitals and laboratories throughout the Twin Cities, ensuring that specimens, pharmaceuticals, and medical supplies move quickly and safely. Our Eden Prairie medical routes maintain full chain-of-custody protocols and temperature-controlled transport when required.

Eden Prairie businesses choose Box Truck Boys because we are a locally owned carrier with deep roots in the Twin Cities. We offer the reliability and professionalism of a large logistics company with the responsiveness and personal service of a local partner. Whether you need a one-time freight delivery to an Eden Prairie warehouse or a five-day-a-week courier route serving Eden Prairie medical offices, our team is ready to build a solution that fits your business perfectly.`,
    services: [
      {
        title: 'Same-Day Delivery',
        description: 'Fast pickup and delivery throughout Eden Prairie, the I-494 corridor, and the southwest metro.',
        icon: 'images/icons-color/2.png',
      },
      {
        title: 'Medical Courier Service',
        description: 'Specimen transport and pharmaceutical delivery for Eden Prairie clinics, specialty practices, and outpatient facilities.',
        icon: 'images/icons-color/1.png',
      },
      {
        title: 'Box Truck Freight',
        description: 'Commercial freight and palletized deliveries to Eden Prairie business parks, corporate campuses, and warehouses.',
        icon: 'images/icons-color/5.png',
      },
      {
        title: 'Final-Mile Delivery',
        description: 'E-commerce fulfillment and retail restocking for Eden Prairie businesses serving customers across the Twin Cities.',
        icon: 'images/icons-color/3.png',
      },
    ],
    landmarks: [
      'Eden Prairie Center',
      'Flying Cloud Drive',
      'Prairie Center Drive',
      'I-494/Highway 212 interchange',
      'Southwest Station (light rail)',
    ],
    faq: [
      {
        question: 'Do you serve all of Eden Prairie?',
        answer: 'Yes. We cover every area of Eden Prairie including Flying Cloud Drive, Prairie Center Drive, the Eden Prairie Center area, and all corporate campuses and business parks. We also serve neighboring Minnetonka, Chanhassen, and Shakopee.',
      },
      {
        question: 'Can you deliver to Eden Prairie corporate campuses?',
        answer: 'Absolutely. Our drivers regularly deliver to corporate campuses throughout Eden Prairie and are familiar with the specific access requirements, loading dock procedures, and delivery protocols at major buildings.',
      },
      {
        question: 'What delivery services do you offer in Eden Prairie?',
        answer: 'We offer same-day delivery, medical courier, box truck freight, scheduled routes, final-mile delivery, and white glove service throughout Eden Prairie.',
      },
    ],
    metaDescription: 'Box Truck Boys provides delivery, medical courier, and freight services in Eden Prairie, MN. Southwest metro same-day delivery and logistics. Call (612) 237-7374.',
  },

  maplegrove: {
    name: 'Maple Grove',
    state: 'Minnesota',
    stateAbbrev: 'MN',
    heroTitle: 'Delivery & Courier Service in Maple Grove',
    heroSubtitle: 'Box truck freight and same-day delivery for the northwest metro.',
    description: `Box Truck Boys delivers throughout Maple Grove, Minnesota, providing the northwest metro with professional delivery and courier services that local businesses depend on. Maple Grove has experienced rapid growth over the past decade, and with that growth comes increasing demand for reliable logistics. From the medical offices at Maple Grove Hospital to the retail and commercial centers along Elm Creek Boulevard and Weaver Lake Road, Box Truck Boys is the delivery partner that Maple Grove businesses trust.

Maple Grove's position along I-94 and I-494 makes it a key node in the northwest metro commercial network. Our Maple Grove routes serve the Arbor Lakes retail district, the business parks along Hemlock Lane, and the medical campuses near Maple Grove Hospital and the surrounding clinics. Our drivers are familiar with Maple Grove's evolving road network and construction patterns, ensuring efficient routing and on-time delivery even as the city continues to grow.

Medical courier service in Maple Grove connects local healthcare providers with the broader Twin Cities medical network. Maple Grove Hospital, the CentraCare clinics, and numerous specialty practices rely on Box Truck Boys for specimen transport, pharmaceutical delivery, and medical supply logistics. Our Maple Grove medical courier service maintains the chain-of-custody compliance and temperature-controlled transport capabilities that healthcare delivery demands.

Maple Grove businesses from retail to manufacturing to professional services choose Box Truck Boys for our combination of reliability, responsiveness, and local knowledge. We offer same-day delivery, scheduled routes, and box truck freight throughout Maple Grove and the surrounding northwest metro. If your Maple Grove business needs a delivery partner that will treat every shipment with the urgency and care it deserves, Box Truck Boys is here for you.`,
    services: [
      {
        title: 'Same-Day Delivery',
        description: 'Urgent pickup and delivery throughout Maple Grove and the northwest metro with fast dispatch and reliable timing.',
        icon: 'images/icons-color/2.png',
      },
      {
        title: 'Medical Courier Service',
        description: 'Specimen transport and pharmaceutical delivery serving Maple Grove Hospital, CentraCare clinics, and northwest metro healthcare providers.',
        icon: 'images/icons-color/1.png',
      },
      {
        title: 'Box Truck Freight',
        description: 'Palletized freight and commercial deliveries throughout Maple Grove business parks and the I-94/I-494 corridor.',
        icon: 'images/icons-color/5.png',
      },
      {
        title: 'Scheduled Route Delivery',
        description: 'Recurring daily or weekly delivery routes for Maple Grove businesses that need consistent, reliable logistics support.',
        icon: 'images/icons-color/4.png',
      },
    ],
    landmarks: [
      'Maple Grove Hospital',
      'Arbor Lakes',
      'Elm Creek Boulevard',
      'Weaver Lake Road',
      'Hemlock Lane business parks',
    ],
    faq: [
      {
        question: 'Do you deliver to the Arbor Lakes area of Maple Grove?',
        answer: 'Yes. We serve the entire Maple Grove area including Arbor Lakes, Elm Creek Boulevard, Weaver Lake Road, and all business parks and medical campuses. We also cover nearby Osseo, Plymouth, and Brooklyn Park.',
      },
      {
        question: 'Do you provide medical courier to Maple Grove Hospital?',
        answer: 'Yes. We provide medical courier service to and from Maple Grove Hospital and the surrounding clinics, handling specimen transport, pharmaceutical delivery, and medical supply logistics with full chain-of-custody compliance.',
      },
      {
        question: 'How quickly can you reach Maple Grove?',
        answer: 'For urgent requests, we typically dispatch to Maple Grove within 30 to 60 minutes. Our northwest metro coverage ensures we frequently have vehicles nearby and ready to respond.',
      },
    ],
    metaDescription: 'Box Truck Boys offers delivery, medical courier, and freight services in Maple Grove, MN. Northwest metro same-day delivery and logistics. Call (612) 237-7374.',
  },

  duluth: {
    name: 'Duluth',
    state: 'Minnesota',
    stateAbbrev: 'MN',
    heroTitle: 'Delivery & Freight Service in Duluth',
    heroSubtitle: 'Box truck freight and courier service connecting Duluth with the Twin Cities.',
    description: `Box Truck Boys extends its delivery and freight services to Duluth, Minnesota, connecting the Twin Ports region with the Twin Cities metro through reliable, professional logistics. Duluth's unique position as a port city on Lake Superior creates distinct transportation needs, and Box Truck Boys is equipped to serve them. Our Duluth operation provides box truck freight, same-day delivery, and courier services for businesses throughout the Duluth-Superior metro area.

Duluth's economy is driven by healthcare, shipping, tourism, and manufacturing, and each of these sectors needs dependable delivery service. Box Truck Boys serves Duluth businesses from the Canal Park district to the Miller Hill Mall corridor, from the port and industrial areas along the waterfront to the medical campuses at Essentia Health and St. Luke's Hospital. Our drivers handle the steep hillside terrain and winter road conditions that make Duluth logistics uniquely challenging, delivering with confidence year-round.

The Duluth-to-Twin Cities corridor is a critical part of our Duluth service offering. We operate regular freight and courier runs along I-35 between Duluth and Minneapolis/Saint Paul, providing businesses in both regions with a reliable transport link. Medical specimens, pharmaceuticals, business documents, and commercial freight move daily between Duluth and the Twin Cities aboard Box Truck Boys vehicles, arriving on schedule and in excellent condition.

For Duluth businesses that need local delivery within the Twin Ports area, Box Truck Boys offers same-day service, scheduled routes, and box truck freight throughout Duluth, Superior, Hermantown, and Proctor. Our Duluth operation brings the same standards of reliability, professionalism, and customer service that have made us a trusted carrier in the Minneapolis metro. Duluth businesses deserve a delivery partner that understands northern Minnesota, and Box Truck Boys is proud to be that partner.`,
    services: [
      {
        title: 'Box Truck Freight',
        description: 'Palletized freight and commercial deliveries throughout the Duluth-Superior metro and the I-35 corridor to the Twin Cities.',
        icon: 'images/icons-color/5.png',
      },
      {
        title: 'Duluth-Twin Cities Corridor',
        description: 'Regular freight and courier runs connecting Duluth with Minneapolis and Saint Paul via I-35 for businesses in both markets.',
        icon: 'images/icons-color/4.png',
      },
      {
        title: 'Same-Day Delivery',
        description: 'Urgent pickup and delivery throughout Duluth, Superior, Hermantown, and Proctor.',
        icon: 'images/icons-color/2.png',
      },
      {
        title: 'Medical Courier Service',
        description: 'Specimen transport and pharmaceutical delivery serving Essentia Health, St. Luke\'s Hospital, and Duluth-area healthcare providers.',
        icon: 'images/icons-color/1.png',
      },
    ],
    landmarks: [
      'Essentia Health - Duluth',
      'St. Luke\'s Hospital',
      'Canal Park',
      'Miller Hill Mall',
      'Port of Duluth-Superior',
      'Duluth Entertainment Convention Center',
    ],
    faq: [
      {
        question: 'Do you run regular routes between Duluth and the Twin Cities?',
        answer: 'Yes. We operate regular freight and courier runs along I-35 between Duluth and Minneapolis/Saint Paul. This corridor service connects Duluth businesses with the Twin Cities for medical, commercial, and freight logistics.',
      },
      {
        question: 'What areas of Duluth do you serve?',
        answer: 'We serve the entire Duluth-Superior metro area including downtown Duluth, Canal Park, the hillside neighborhoods, Miller Hill, West Duluth, and the surrounding communities of Superior, Hermantown, and Proctor.',
      },
      {
        question: 'Can you handle deliveries in Duluth winter conditions?',
        answer: 'Absolutely. Our drivers are experienced with northern Minnesota winter conditions and maintain the vehicles, tires, and driving skills needed to deliver reliably through Duluth winters.',
      },
    ],
    metaDescription: 'Box Truck Boys provides box truck freight, delivery, and courier services in Duluth, MN. Duluth-Twin Cities corridor freight and medical courier. Call (612) 237-7374.',
  },
};
