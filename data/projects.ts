export interface Project {
  id: number
  name: string
  url: string
  category: 'WordPress' | 'Laravel' | 'React'
  tech: string[]
  description: string
}

export const projects: Project[] = [
  // WordPress / WooCommerce Projects
  {
    id: 1,
    name: 'RH Auto Repair',
    url: 'https://rhautorepair.com',
    category: 'WordPress',
    tech: ['WordPress', 'WooCommerce', 'PHP', 'Custom Theme'],
    description: 'Auto repair service website with online booking system',
  },
  {
    id: 2,
    name: 'Elitic Education',
    url: 'https://eliticeducation.org',
    category: 'WordPress',
    tech: ['WordPress', 'LMS', 'Custom Plugin', 'SEO'],
    description: 'Educational platform with course management system',
  },
  {
    id: 3,
    name: 'Blissful Touch',
    url: 'https://blissfultouch.ca',
    category: 'WordPress',
    tech: ['WordPress', 'WooCommerce', 'Custom Theme', 'Payment Gateway'],
    description: 'Spa and wellness center e-commerce website',
  },
  {
    id: 4,
    name: 'Puff Picks',
    url: 'https://puffpicks.com',
    category: 'WordPress',
    tech: ['WordPress', 'WooCommerce', 'Custom Plugin', 'SEO'],
    description: 'E-commerce platform for vape products',
  },
  {
    id: 5,
    name: 'Rides On Time',
    url: 'https://ridesontime.com',
    category: 'WordPress',
    tech: ['WordPress', 'Booking System', 'Payment Integration', 'Google Maps'],
    description: 'Transportation service booking platform',
  },
  {
    id: 6,
    name: 'The Busy Builders',
    url: 'https://thebusybuilders.com',
    category: 'WordPress',
    tech: ['WordPress', 'Custom Theme', 'Portfolio', 'SEO'],
    description: 'Construction company portfolio website',
  },
  {
    id: 7,
    name: 'Quirky Cart',
    url: 'https://quirky-cart.com',
    category: 'WordPress',
    tech: ['WordPress', 'WooCommerce', 'Custom Plugin', 'Payment Gateway'],
    description: 'Unique products e-commerce store',
  },
  {
    id: 8,
    name: 'Junk Car Buyers Dallas',
    url: 'https://junkcarbuyersdallas.com',
    category: 'WordPress',
    tech: ['WordPress', 'Custom Forms', 'Lead Generation', 'SEO'],
    description: 'Car buying service with lead generation system',
  },
  // Laravel / PHP Projects
  {
    id: 9,
    name: 'Cashing Carz',
    url: 'https://cashingcarz.com',
    category: 'Laravel',
    tech: ['Laravel', 'PHP', 'MySQL', 'RESTful API'],
    description: 'Car trading platform with advanced search features',
  },
  {
    id: 10,
    name: 'Cash Carzz',
    url: 'https://cashcarzz.com',
    category: 'Laravel',
    tech: ['Laravel', 'PHP', 'MySQL', 'Payment Gateway'],
    description: 'Vehicle marketplace with instant cash offers',
  },
  // React Projects
  {
    id: 11,
    name: 'BUBT Cafe',
    url: 'https://bubt-cafe.netlify.app',
    category: 'React',
    tech: ['React', 'JavaScript', 'CSS3', 'Responsive Design'],
    description: 'University cafe ordering system with menu management',
  },
  {
    id: 12,
    name: 'Alpha Travel',
    url: 'https://alpha-travel-svo.netlify.app',
    category: 'React',
    tech: ['React', 'React Router', 'API Integration', 'Responsive'],
    description: 'Travel booking platform with destination explorer',
  },
  {
    id: 13,
    name: 'Tea Land',
    url: 'https://tea-land-svo.netlify.app',
    category: 'React',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    description: 'Tea shop e-commerce with product filtering',
  },
  {
    id: 14,
    name: 'Disabe Site',
    url: 'https://disabesite-svo.netlify.app',
    category: 'React',
    tech: ['React', 'Accessibility', 'WCAG', 'Responsive Design'],
    description: 'Accessible website for disability support services',
  },
  {
    id: 15,
    name: 'G3 Architects',
    url: 'https://g3-architects-svo.netlify.app',
    category: 'React',
    tech: ['React', 'CSS Grid', 'Portfolio', 'Animation'],
    description: 'Architecture firm portfolio with project showcase',
  },
]
