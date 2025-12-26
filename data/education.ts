export interface Education {
  id: number
  institution: string
  degree: string
  period: string
  description: string
}

export const education: Education[] = [
  {
    id: 1,
    institution: 'Bangladesh University of Business and Technology (BUBT)',
    degree: 'Bachelor of Science in Computer Science and Engineering',
    period: '2019 - 2023',
    description: 'Focused on software engineering, web development, algorithms, and database systems. Completed projects in full-stack development and gained hands-on experience with modern web technologies.',
  },
  {
    id: 2,
    institution: 'Dhaka Polytechnic Institute',
    degree: 'Diploma in Computer Technology',
    period: '2015 - 2019',
    description: 'Studied fundamental programming concepts, web development, and network systems. Built strong foundation in computer science and practical technical skills.',
  },
]
