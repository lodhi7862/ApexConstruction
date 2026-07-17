// Central content + configuration for the Apex Construction site.
// Contact details fall back to env vars so they can be overridden per-deployment.

const CEO_IMAGE = "/Images/Founder%26CEO.jpeg?v=20260717";

export const company = {
  name: "Apex Construction",
  tagline: "Building the Future",
  ceo: "Asif Masih",
  phone: process.env.NEXT_PUBLIC_PHONE || "03455371055",
  email: process.env.NEXT_PUBLIC_EMAIL || "razaasifraza360@gmail.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "923455371055",
  foundedYear: 2004,
  address: "Mall of Wah Office 244/Z 4th floor, Wah Cantt Rawalpindi",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "CEO Message", href: "#ceo" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    id: "residential",
    icon: "home",
    title: "Residential Construction",
    description:
      "From bespoke custom homes to full-scale renovations and interior design, we craft living spaces that blend comfort, functionality and timeless style. Every detail is engineered around how you live, ensuring a home that feels as good as it looks for decades to come.",
  },
  {
    id: "commercial",
    icon: "building",
    title: "Commercial Construction",
    description:
      "We deliver high-performance office spaces, retail environments and hospitality projects that elevate brands and inspire productivity. Our teams manage complex commercial builds end-to-end, balancing aesthetics, code compliance and tight delivery schedules without compromise.",
  },
  {
    id: "infrastructure",
    icon: "road",
    title: "Infrastructure Projects",
    description:
      "Roads, bridges and public facilities demand precision, resilience and rigorous safety. We bring the engineering expertise and heavy-civil capability to build the essential infrastructure that connects communities and stands the test of time and traffic.",
  },
  {
    id: "renovation",
    icon: "tools",
    title: "Renovation & Remodeling",
    description:
      "Breathe new life into existing structures with modern upgrades and intelligent space optimization. We modernize interiors, improve energy efficiency and reimagine layouts, delivering transformative results while minimizing disruption to your daily routine.",
  },
];

export const projects = [
  {
    id: 1,
    title: "Skyline Residences",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description:
      "A collection of 42 luxury custom homes featuring smart automation, sustainable materials and panoramic city views.",
  },
  {
    id: 2,
    title: "Meridian Office Tower",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description:
      "A 24-storey LEED-certified corporate headquarters with column-free floor plates and a striking glass facade.",
  },
  {
    id: 3,
    title: "Harbor Crossing Bridge",
    category: "Infrastructure",
    image:
      "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1200&q=80",
    description:
      "A 1.2km cable-stayed bridge engineered for seismic resilience and a 100-year service life.",
  },
  {
    id: 4,
    title: "The Grand Plaza Mall",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1567958451986-2de427a4a0be?auto=format&fit=crop&w=1200&q=80",
    description:
      "A 60,000 m² retail and entertainment destination delivered three weeks ahead of schedule.",
  },
  {
    id: 5,
    title: "Willowbrook Villas",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description:
      "An award-winning gated community of energy-efficient family villas set around landscaped courtyards.",
  },
  {
    id: 6,
    title: "Central Transit Hub",
    category: "Infrastructure",
    image:
      "/Images/centralTransithub.jpg",
    description:
      "A multimodal transport interchange serving 80,000 daily commuters with a sweeping steel canopy roof.",
  },
  {
    id: 7,
    title: "Aurora Boutique Hotel",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
    description:
      "A 180-key five-star hotel blending contemporary luxury with locally inspired architectural detailing.",
  },
  {
    id: 8,
    title: "Lakeside Modern Home",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    description:
      "A bespoke waterfront residence with floor-to-ceiling glazing and a cantilevered infinity terrace.",
  },
  {
    id: 9,
    title: "Riverside Expressway",
    category: "Infrastructure",
    image:
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1200&q=80",
    description:
      "An 18km elevated expressway easing congestion with advanced drainage and smart lighting systems.",
  },
];

export const projectFilters = ["All", "Residential", "Commercial", "Infrastructure"];

export const stats = [
  { id: "projects", value: 500, suffix: "+", label: "Projects Completed" },
  { id: "clients", value: 1000, suffix: "+", label: "Happy Clients" },
  { id: "years", value: 20, suffix: "+", label: "Years of Experience" },
  { id: "team", value: 150, suffix: "+", label: "Team Members" },
];

export const team = [
  {
    name: "Asif Masih",
    role: "Founder & CEO",
    image: CEO_IMAGE,
  },
  {
    //shail Nasir
    name: "Shail Nasir",
    role: "Head of Operations",
    image: "/Images/Head_of_Operations.jpeg",
    focalPosition: "72% 15%",
  },
  {
    //Nabeel
    name: "Nabeel",
    role: "Lead Architect",
    image: "/Images/Lead_Architect.jpeg",
    focalPosition: "50% 8%",
  },
  {
    //Arrian Gill
    name: "Arrian Gill",
    role: "Chief Engineer",
    image: "/Images/Chief_Engineer.jpeg",
  },
  {
    //sageer khan
    name: "Sageer Khan",
    role: "Project Director",
    image: "/Images/Project_Director.jpeg",
  },
  {
    //tanveer munir
    name: "Tanveer Munir",
    role: "Safety & Quality Manager",
    image: "/Images/Safety%26QualityManager.jpeg",
  },
];

export const whyUs = [
  {
    icon: "team",
    title: "Expert Team",
    description:
      "Decades of combined experience across architecture, engineering and project management drive flawless execution on every build.",
  },
  {
    icon: "medal",
    title: "Quality Materials & Craftsmanship",
    description:
      "We source premium, certified materials and hold every trade to exacting standards so your project endures for generations.",
  },
  {
    icon: "clock",
    title: "On-Time Project Delivery",
    description:
      "Disciplined scheduling and proactive site management mean we consistently hand over projects on or ahead of deadline.",
  },
  {
    icon: "dollar",
    title: "Competitive Pricing",
    description:
      "Transparent budgeting and smart value engineering deliver exceptional quality without unnecessary cost or hidden surprises.",
  },
  {
    icon: "heart",
    title: "Customer-Centric Approach",
    description:
      "You are involved at every milestone. Clear communication and true partnership keep your vision at the heart of the project.",
  },
  {
    icon: "cpu",
    title: "Advanced Technology & Innovation",
    description:
      "From BIM modeling to drone surveys and sustainable methods, we harness technology to build smarter, safer and greener.",
  },
];

export const ceoMessage = {
  name: "Asif Masih",
  role: "Founder & Chief Executive Officer",
  image: CEO_IMAGE,
  message:
    "At Apex Construction, our vision is to create spaces that inspire and endure. With over two decades of experience, we've built a reputation for excellence, integrity, and innovation. Every project we undertake reflects our commitment to quality and customer satisfaction. We don't just build structures; we build relationships and legacies. Thank you for considering Apex Construction as your trusted partner in creating the spaces of your dreams.",
};

export const testimonials = [
  {
    name: "Rebecca Lawson",
    role: "Homeowner, Skyline Residences",
    rating: 5,
    text: "Apex turned our dream home into reality with craftsmanship that exceeded every expectation. They were transparent, punctual and genuinely cared about the details that mattered to us.",
  },
  {
    name: "Michael Chen",
    role: "CEO, Meridian Group",
    rating: 5,
    text: "Delivering a 24-storey tower on schedule is no small feat, yet Apex managed it flawlessly. Their engineering expertise and communication throughout the build were world-class.",
  },
  {
    name: "Fatima Noor",
    role: "Director, City Development Authority",
    rating: 5,
    text: "The Harbor Crossing Bridge was a complex civil project, and Apex handled every challenge with professionalism. Safety, quality and precision were evident at every stage.",
  },
  {
    name: "David Thompson",
    role: "Owner, Aurora Hospitality",
    rating: 5,
    text: "From concept to completion, our boutique hotel was in expert hands. The finish quality is stunning and our guests constantly compliment the architecture.",
  },
  {
    name: "Priya Sharma",
    role: "Retail Operations Lead, Grand Plaza",
    rating: 5,
    text: "Apex delivered our shopping destination three weeks early without cutting a single corner. A rare blend of speed, reliability and outstanding quality.",
  },
  {
    name: "Robert Alvarez",
    role: "Property Developer",
    rating: 5,
    text: "I've worked with many contractors, but none match Apex's professionalism and integrity. They are now my first call for every new development.",
  },
];

export const faqs = [
  {
    question: "What types of construction projects does Apex handle?",
    answer:
      "We deliver residential, commercial, institutional and infrastructure projects — including custom homes, office towers, retail and hospitality developments, roads, bridges, and renovation or remodeling works of virtually any scale.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "Apex Construction operates across the region and takes on projects nationally. Contact us with your location and project brief and we'll confirm availability right away.",
  },
  {
    question: "How do you ensure projects are delivered on time?",
    answer:
      "We use disciplined scheduling, dedicated site managers and proactive risk management. Progress is tracked against clear milestones and communicated to you regularly, which is why we consistently deliver on or ahead of schedule.",
  },
  {
    question: "Do you provide free estimates and consultations?",
    answer:
      "Yes. We offer a no-obligation consultation to understand your vision, followed by a transparent, itemized estimate so you know exactly what to expect before any work begins.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. Apex Construction is fully licensed and insured, and we adhere to all relevant building codes, safety regulations and quality standards on every project.",
  },
  {
    question: "Can you work with my own architect or designer?",
    answer:
      "Of course. We collaborate seamlessly with your chosen architects and designers, or we can provide our own in-house architectural and design team — whichever suits your project best.",
  },
  {
    question: "How do you manage project budgets?",
    answer:
      "We provide detailed, transparent budgeting up front and apply value engineering to maximize quality per dollar. You receive clear cost reporting throughout, with no hidden charges or surprise fees.",
  },
  {
    question: "What sustainability practices do you follow?",
    answer:
      "We prioritize energy-efficient designs, responsibly sourced materials and modern methods such as BIM modeling to reduce waste. Many of our projects meet or exceed recognized green-building certifications.",
  },
];
