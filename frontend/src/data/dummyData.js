

export const dummyUser = {
  id: '1',
  name: 'Priyanshi Goyal',
  email: 'pgoyal2_be23@thapar.edu',
  interests: ['Web Development', 'Artificial Intelligence', 'Data Science'],
  goals: ['Build a portfolio website', 'Learn React', 'Understand machine learning basics'],
  level: 'intermediate',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
};

export const dummyLearningPaths = [
  {
    id: '1',
    title: 'Web Development Fundamentals',
    description: 'Master the core concepts of HTML, CSS, and JavaScript to build responsive websites.',
    category: 'Web Development',
    level: 'beginner',
    duration: '8 weeks',
    enrolledCount: 1542,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    modules: [
      {
        id: 'm1',
        title: 'HTML Basics',
        description: 'Learn the foundational elements of web pages.',
        duration: '2 weeks',
        completed: true,
        resources: [
          {
            id: 'r1',
            title: 'Introduction to HTML',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
            duration: '15 min',
            completed: true
          },
          {
            id: 'r2',
            title: 'HTML Document Structure',
            type: 'article',
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html',
            duration: '10 min',
            completed: true
          }
        ]
      },
      {
        id: 'm2',
        title: 'CSS Styling',
        description: 'Style your HTML with CSS to create beautiful layouts.',
        duration: '3 weeks',
        completed: false,
        resources: [
          {
            id: 'r3',
            title: 'CSS Selectors and Properties',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=l1mER1bV0N0',
            duration: '20 min',
            completed: false
          },
          {
            id: 'r4',
            title: 'Flexbox Layout',
            type: 'exercise',
            url: 'https://flexboxfroggy.com/',
            duration: '30 min',
            completed: false
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Data Science Essentials',
    description: 'Learn the fundamentals of data analysis, visualization, and machine learning.',
    category: 'Data Science',
    level: 'intermediate',
    duration: '12 weeks',
    enrolledCount: 987,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    modules: [
      {
        id: 'm1',
        title: 'Introduction to Python',
        description: 'Get started with Python for data analysis.',
        duration: '3 weeks',
        completed: true,
        resources: [
          {
            id: 'r1',
            title: 'Python Basics',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=8DvywoWv6fI',
            duration: '25 min',
            completed: true
          },
          {
            id: 'r2',
            title: 'Data Structures in Python',
            type: 'article',
            url: 'https://docs.python.org/3/tutorial/datastructures.html',
            duration: '15 min',
            completed: true
          }
        ]
      },
      {
        id: 'm2',
        title: 'Data Visualization',
        description: 'Create compelling visualizations with matplotlib and seaborn.',
        duration: '4 weeks',
        completed: false,
        resources: [
          {
            id: 'r3',
            title: 'Introduction to Matplotlib',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=3Xc3CA655Y4',
            duration: '20 min',
            completed: false
          },
          {
            id: 'r4',
            title: 'Creating Interactive Dashboards',
            type: 'exercise',
            url: 'https://plotly.com/dash/',
            duration: '45 min',
            completed: false
          }
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'Mobile App Development with React Native',
    description: 'Build cross-platform mobile applications using React Native.',
    category: 'Mobile Development',
    level: 'intermediate',
    duration: '10 weeks',
    enrolledCount: 754,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    modules: [
      {
        id: 'm1',
        title: 'React Fundamentals',
        description: 'Master the core concepts of React.',
        duration: '3 weeks',
        completed: false,
        resources: [
          {
            id: 'r1',
            title: 'Introduction to React',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=Tn6-PIqc4UM',
            duration: '30 min',
            completed: false
          },
          {
            id: 'r2',
            title: 'Components and Props',
            type: 'article',
            url: 'https://react.dev/learn/passing-props-to-a-component',
            duration: '20 min',
            completed: false
          }
        ]
      },
      {
        id: 'm2',
        title: 'React Native Basics',
        description: 'Extend your React knowledge to mobile development.',
        duration: '4 weeks',
        completed: false,
        resources: [
          {
            id: 'r3',
            title: 'Setting Up React Native',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=0-S5a0eXPoc',
            duration: '25 min',
            completed: false
          },
          {
            id: 'r4',
            title: 'Building Your First App',
            type: 'exercise',
            url: 'https://reactnative.dev/docs/tutorial',
            duration: '60 min',
            completed: false
          }
        ]
      }
    ]
  },
  {
    id: '4',
    title: 'Artificial Intelligence Fundamentals',
    description: 'Understand the core concepts of AI and machine learning.',
    category: 'Artificial Intelligence',
    level: 'advanced',
    duration: '16 weeks',
    enrolledCount: 532,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    modules: [
      {
        id: 'm1',
        title: 'Machine Learning Basics',
        description: 'Learn fundamental ML algorithms and concepts.',
        duration: '5 weeks',
        completed: false,
        resources: [
          {
            id: 'r1',
            title: 'Introduction to Machine Learning',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=aircAruvnKk',
            duration: '35 min',
            completed: false
          },
          {
            id: 'r2',
            title: 'Supervised vs. Unsupervised Learning',
            type: 'article',
            url: 'https://www.ibm.com/topics/supervised-learning',
            duration: '25 min',
            completed: false
          }
        ]
      },
      {
        id: 'm2',
        title: 'Neural Networks',
        description: 'Explore deep learning and neural network architectures.',
        duration: '6 weeks',
        completed: false,
        resources: [
          {
            id: 'r3',
            title: 'Neural Networks Fundamentals',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=aircAruvnKk',
            duration: '40 min',
            completed: false
          },
          {
            id: 'r4',
            title: 'Building a Simple Neural Network',
            type: 'exercise',
            url: 'https://playground.tensorflow.org/',
            duration: '75 min',
            completed: false
          }
        ]
      }
    ]
  }
];

export const dummyProgress = {
  userId: '1',
  pathId: '1',
  completed: 2,
  total: 8,
  lastAccessedDate: '2023-04-15',
  modules: {
    'm1': {
      completed: true,
      resources: {
        'r1': true,
        'r2': true
      }
    },
    'm2': {
      completed: false,
      resources: {
        'r3': false,
        'r4': false
      }
    }
  }
};

export const categories = [
  'Web Development',
  'Data Science',
  'Mobile Development',
  'Artificial Intelligence',
  'Cloud Computing',
  'DevOps',
  'Cybersecurity',
  'Game Development'
];

export const popularSkills = [
  'JavaScript',
  'Python',
  'React',
  'Data Analysis',
  'Machine Learning',
  'AWS',
  'UI/UX Design',
  'Node.js',
  'SQL',
  'Docker',
  'Git',
  'TensorFlow'
];