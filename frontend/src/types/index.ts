export interface User {
  id: string;
  name: string;
  email: string;
  interests: string[];
  goals: string[];
  level: 'beginner' | 'intermediate' | 'advanced';
  avatar?: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  modules: Module[];
  image: string;
  enrolledCount: number;
  rating: number;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  resources: Resource[];
  completed: boolean;
}

export interface Resource {
  id: string;
  title: string;
  type: 'video' | 'article' | 'quiz' | 'exercise';
  url: string;
  duration: string;
  completed: boolean;
}

export interface Progress {
  userId: string;
  pathId: string;
  completed: number;
  total: number;
  lastAccessedDate: string;
  modules: {
    [moduleId: string]: {
      completed: boolean;
      resources: {
        [resourceId: string]: boolean;
      };
    };
  };
}