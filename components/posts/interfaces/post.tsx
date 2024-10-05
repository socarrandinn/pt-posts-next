export interface IPost {
  id: number
  title: string,
  body: string,
  userId: number
}

export const posts: IPost[] = [
  {
    id: 1,
    title: 'Understanding TypeScript',
    body: 'An introduction to TypeScript and its benefits in JavaScript development.',
    userId: 1
  },
  {
    id: 2,
    title: 'React Hooks Explained',
    body: 'A deep dive into React Hooks and how to use them effectively.',
    userId: 2
  },
  {
    id: 3,
    title: 'Next.js: The React Framework',
    body: 'Discover the powerful features of Next.js for building modern web apps.',
    userId: 3
  },
  {
    id: 4,
    title: 'State Management in React',
    body: 'Learn about different state management techniques in React applications.',
    userId: 1
  },
  {
    id: 5,
    title: 'Async JavaScript: Promises and Async/Await',
    body: 'A guide to handling asynchronous operations in JavaScript.',
    userId: 2
  },
  {
    id: 6,
    title: 'Understanding REST APIs',
    body: 'What is a REST API, and how do you interact with one in your web applications?',
    userId: 3
  },
  {
    id: 7,
    title: 'Building a Full-stack App with Next.js and Node.js',
    body: 'Step-by-step guide on how to build a full-stack application.',
    userId: 1
  },
  {
    id: 8,
    title: 'GraphQL vs REST: A Comparison',
    body: 'Explore the differences between GraphQL and REST APIs.',
    userId: 2
  },
  {
    id: 9,
    title: 'Getting Started with MongoDB',
    body: 'An introduction to MongoDB and how to use it in your applications.',
    userId: 3
  },
  {
    id: 10,
    title: 'CSS Grid and Flexbox: Layout Essentials',
    body: 'Master the layout techniques of CSS Grid and Flexbox.',
    userId: 1
  },
  {
    id: 11,
    title: 'Version Control with Git',
    body: 'A beginner-friendly guide to version control using Git.',
    userId: 2
  },
  {
    id: 12,
    title: 'Deploying with Vercel',
    body: 'Learn how to deploy your Next.js apps using Vercel.',
    userId: 3
  },
  {
    id: 13,
    title: 'Introduction to React Native',
    body: 'Learn how to build mobile applications using React Native.',
    userId: 1
  },
  {
    id: 14,
    title: 'Testing in JavaScript with Jest',
    body: 'An overview of testing JavaScript applications with Jest.',
    userId: 2
  },
  {
    id: 15,
    title: 'Tailwind CSS: Utility-First CSS',
    body: 'Learn how to use Tailwind CSS to style your applications efficiently.',
    userId: 3
  },
  {
    id: 16,
    title: 'Authentication in Web Apps',
    body: 'Implement secure authentication strategies in your web applications.',
    userId: 1
  },
  {
    id: 17,
    title: 'Building APIs with NestJS',
    body: 'Discover the powerful features of NestJS for building scalable APIs.',
    userId: 2
  },
  {
    id: 18,
    title: 'Advanced TypeScript Techniques',
    body: 'Learn advanced TypeScript concepts for building robust applications.',
    userId: 3
  },
  {
    id: 19,
    title: 'Progressive Web Apps (PWAs)',
    body: 'A guide to building fast and reliable Progressive Web Apps.',
    userId: 1
  },
  {
    id: 20,
    title: 'Using Axios for HTTP Requests',
    body: 'Learn how to handle HTTP requests in your apps using Axios.',
    userId: 2
  }
];