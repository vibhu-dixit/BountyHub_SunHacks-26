'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type BountyStatus = 'open' | 'in-progress' | 'completed' | 'cancelled';
export type BountyCategory = 'design' | 'development' | 'writing' | 'marketing' | 'video' | 'audio' | 'other';

export interface Bounty {
  id: string;
  title: string;
  description: string;
  budget: number;
  deadline: string;
  category: BountyCategory;
  skills: string[];
  postedBy: string;
  postedAt: string;
  status: BountyStatus;
  assignedTo?: string;
  completedAt?: string;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  completedBounties: number;
  joinedDate: string;
}

interface BountyStore {
  bounties: Bounty[];
  users: User[];
  addBounty: (bounty: Omit<Bounty, 'id' | 'postedAt' | 'status'>) => void;
  updateBountyStatus: (id: string, status: BountyStatus, assignedTo?: string) => void;
  completeBounty: (id: string) => void;
  deleteBounty: (id: string) => void;
  getBounty: (id: string) => Bounty | undefined;
}

const useBountyStore = create<BountyStore>()(
  persist(
    (set, get) => ({
      bounties: [
        {
          id: '1',
          title: 'Design a Modern Logo for Tech Startup',
          description: 'Looking for a sleek, minimalist logo design for our AI-powered productivity tool. The logo should convey innovation, efficiency, and reliability.',
          budget: 250,
          deadline: '2025-07-01',
          category: 'design',
          skills: ['logo design', 'branding', 'vector graphics'],
          postedBy: 'user1',
          postedAt: '2025-05-20',
          status: 'open',
        },
        {
          id: '2',
          title: 'Develop a Landing Page for New Product',
          description: 'Need a responsive landing page for our upcoming product launch. The page should include hero section, features, pricing, testimonials, and contact form.',
          budget: 500,
          deadline: '2025-06-15',
          category: 'development',
          skills: ['HTML', 'CSS', 'JavaScript', 'React'],
          postedBy: 'user2',
          postedAt: '2025-05-18',
          status: 'in-progress',
          assignedTo: 'user4'
        },
        {
          id: '3',
          title: 'Write Technical Blog Posts (5x)',
          description: 'Looking for an experienced tech writer to create 5 in-depth blog posts about cloud computing trends. Each article should be 1500-2000 words with proper research and citations.',
          budget: 400,
          deadline: '2025-06-30',
          category: 'writing',
          skills: ['content writing', 'SEO', 'technical knowledge'],
          postedBy: 'user3',
          postedAt: '2025-05-22',
          status: 'open',
        },
        {
          id: '4',
          title: 'Create Promotional Video for Mobile App',
          description: 'We need a 60-90 second promotional video showcasing our fitness app\'s key features. The video should be engaging, modern, and appeal to millennials. Must include motion graphics and professional voiceover.',
          budget: 600,
          deadline: '2025-07-15',
          category: 'video',
          skills: ['video editing', 'motion graphics', 'voiceover'],
          postedBy: 'user2',
          postedAt: '2025-05-24',
          status: 'open',
        },
      ],
      users: [
        {
          id: 'user1',
          name: 'Alex Johnson',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          rating: 4.8,
          completedBounties: 24,
          joinedDate: '2024-01-15',
        },
        {
          id: 'user2',
          name: 'Maria Garcia',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          rating: 4.9,
          completedBounties: 36,
          joinedDate: '2023-11-05',
        },
        {
          id: 'user3',
          name: 'David Chen',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          rating: 4.6,
          completedBounties: 18,
          joinedDate: '2024-02-20',
        },
        {
          id: 'user4',
          name: 'Sophie Williams',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          rating: 4.7,
          completedBounties: 29,
          joinedDate: '2023-09-12',
        },
      ],
      addBounty: (bounty) => {
        set((state) => ({
          bounties: [
            ...state.bounties,
            {
              ...bounty,
              id: Math.random().toString(36).substring(2, 9),
              postedAt: new Date().toISOString(),
              status: 'open',
            },
          ],
        }));
      },
      updateBountyStatus: (id, status, assignedTo) => {
        set((state) => ({
          bounties: state.bounties.map((bounty) =>
            bounty.id === id ? { ...bounty, status, assignedTo } : bounty
          ),
        }));
      },
      completeBounty: (id) => {
        set((state) => ({
          bounties: state.bounties.map((bounty) =>
            bounty.id === id
              ? { ...bounty, status: 'completed', completedAt: new Date().toISOString() }
              : bounty
          ),
        }));
      },
      deleteBounty: (id) => {
        set((state) => ({
          bounties: state.bounties.filter((bounty) => bounty.id !== id),
        }));
      },
      getBounty: (id) => {
        return get().bounties.find((bounty) => bounty.id === id);
      },
    }),
    {
      name: 'bounty-hunter-storage',
    }
  )
);

export default useBountyStore;
