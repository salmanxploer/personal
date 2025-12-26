export interface Course {
  id: number
  name: string
  platform: string
  year: string
  skills: string[]
}

export const courses: Course[] = [
  {
    id: 1,
    name: 'Complete Web Development',
    platform: 'Programming Hero',
    year: '2022',
    skills: ['React', 'Node.js', 'MongoDB', 'Express.js'],
  },
  {
    id: 2,
    name: 'Advanced JavaScript',
    platform: 'Udemy',
    year: '2021',
    skills: ['ES6+', 'Async/Await', 'OOP', 'Functional Programming'],
  },
  {
    id: 3,
    name: 'WordPress Development',
    platform: 'LinkedIn Learning',
    year: '2020',
    skills: ['Theme Development', 'Plugin Development', 'WooCommerce'],
  },
  {
    id: 4,
    name: 'Laravel Framework',
    platform: 'Laracasts',
    year: '2021',
    skills: ['MVC', 'Eloquent ORM', 'Authentication', 'RESTful APIs'],
  },
  {
    id: 5,
    name: 'Google Analytics & GTM',
    platform: 'Google Analytics Academy',
    year: '2022',
    skills: ['GA4', 'GTM', 'Event Tracking', 'Conversion Optimization'],
  },
  {
    id: 6,
    name: 'Firebase Full Course',
    platform: 'freeCodeCamp',
    year: '2022',
    skills: ['Authentication', 'Firestore', 'Hosting', 'Cloud Functions'],
  },
]
