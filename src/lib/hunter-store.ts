'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Hunter {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  location: string;
  rating: number;
  completedBounties: number;
  hourlyRate: number;
  skills: string[];
  joinedDate: string;
}

interface HunterStore {
  hunters: Hunter[];
  getHunter: (id: string) => Hunter | undefined;
}

export const useHunterStore = create<HunterStore>()(
  persist(
    (set, get) => ({
      hunters: [
        {
          id: 'hunter1',
          name: 'Alex Johnson',
          title: 'Full Stack Developer',
          bio: 'Passionate developer with 5+ years of experience in web and mobile development. Specialized in React, Node.js, and TypeScript.',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          location: 'San Francisco, CA',
          rating: 4.8,
          completedBounties: 24,
          hourlyRate: 65,
          skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'MongoDB', 'AWS'],
          joinedDate: '2023-05-15',
        },
        {
          id: 'hunter2',
          name: 'Maria Garcia',
          title: 'UI/UX Designer',
          bio: 'Creative designer with a passion for crafting beautiful and functional user interfaces. Expert in Figma, Adobe XD, and design systems.',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          location: 'New York, NY',
          rating: 4.9,
          completedBounties: 36,
          hourlyRate: 75,
          skills: ['UI Design', 'UX Research', 'Figma', 'Adobe XD', 'Prototyping', 'Design Systems'],
          joinedDate: '2023-03-10',
        },
        {
          id: 'hunter3',
          name: 'David Chen',
          title: 'Backend Developer',
          bio: 'Experienced backend developer specializing in scalable architectures and cloud solutions. Strong expertise in Python, Go, and AWS.',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          location: 'Seattle, WA',
          rating: 4.6,
          completedBounties: 18,
          hourlyRate: 70,
          skills: ['Python', 'Go', 'AWS', 'Docker', 'Kubernetes', 'Microservices'],
          joinedDate: '2023-07-22',
        },
        {
          id: 'hunter4',
          name: 'Sophie Williams',
          title: 'Content Writer',
          bio: 'Professional writer with expertise in technical documentation, blog posts, and marketing copy. Specialized in technology and SaaS content.',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          location: 'Austin, TX',
          rating: 4.7,
          completedBounties: 29,
          hourlyRate: 45,
          skills: ['Content Writing', 'Copywriting', 'Technical Writing', 'SEO', 'Editing', 'Research'],
          joinedDate: '2023-02-15',
        },
        {
          id: 'hunter5',
          name: 'James Wilson',
          title: 'Mobile Developer',
          bio: 'Mobile app developer with expertise in React Native and Flutter. Created multiple successful apps with millions of downloads.',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          location: 'Chicago, IL',
          rating: 4.5,
          completedBounties: 15,
          hourlyRate: 60,
          skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase', 'App Store Optimization'],
          joinedDate: '2023-08-05',
        },
        {
          id: 'hunter6',
          name: 'Priya Patel',
          title: 'Data Scientist',
          bio: 'Data scientist with expertise in machine learning, statistical analysis, and data visualization. Passionate about solving complex problems with data.',
          avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          location: 'Boston, MA',
          rating: 4.9,
          completedBounties: 22,
          hourlyRate: 85,
          skills: ['Python', 'Machine Learning', 'TensorFlow', 'Data Analysis', 'SQL', 'Tableau'],
          joinedDate: '2023-04-18',
        },
        {
          id: 'hunter7',
          name: 'Michael Brown',
          title: 'DevOps Engineer',
          bio: 'DevOps engineer specializing in CI/CD pipelines, infrastructure as code, and cloud architecture. Expert in AWS and Azure.',
          avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          location: 'Denver, CO',
          rating: 4.7,
          completedBounties: 19,
          hourlyRate: 75,
          skills: ['AWS', 'Azure', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD'],
          joinedDate: '2023-06-30',
        },
        {
          id: 'hunter8',
          name: 'Emma Rodriguez',
          title: 'Graphic Designer',
          bio: 'Creative graphic designer with a strong portfolio in branding, illustration, and marketing materials. Passionate about visual storytelling.',
          avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          location: 'Los Angeles, CA',
          rating: 4.8,
          completedBounties: 31,
          hourlyRate: 55,
          skills: ['Adobe Creative Suite', 'Illustration', 'Branding', 'Typography', 'Logo Design', 'Print Design'],
          joinedDate: '2023-01-25',
        },
        {
          id: 'hunter9',
          name: 'Ryan Kim',
          title: 'Video Editor',
          bio: 'Professional video editor with experience in commercial, documentary, and social media content. Expert in Adobe Premiere and After Effects.',
          avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          location: 'Portland, OR',
          rating: 4.6,
          completedBounties: 17,
          hourlyRate: 50,
          skills: ['Adobe Premiere', 'After Effects', 'Color Grading', 'Motion Graphics', 'Sound Design', 'Storytelling'],
          joinedDate: '2023-09-12',
        }
      ],
      getHunter: (id: string) => {
        return get().hunters.find(hunter => hunter.id === id);
      },
    }),
    {
      name: 'bounty-hunter-hunters',
    }
  )
);
