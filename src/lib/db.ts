'use client';

import Database from 'better-sqlite3';
import { useState, useEffect } from 'react';

// This is a client-side wrapper around SQLite
// In a real production app, you would use a server API instead

export interface Testimonial {
  id?: number;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  background: string;
  createdAt?: string;
}

// Initialize database on first import
let db: Database.Database | null = null;

// Client-side SQLite can only be accessed in browser environment
const initDb = () => {
  if (typeof window === 'undefined') return null;
  
  try {
    if (!db) {
      // Use IndexedDB as fallback since SQLite requires native bindings
      // In a real app, this would be a server API call
      db = {} as Database.Database;
      
      // Create table if it doesn't exist
      const storedTestimonials = localStorage.getItem('testimonials');
      if (!storedTestimonials) {
        const defaultTestimonials = [
          {
            id: 1,
            quote: "BountyHunter helped me find amazing talent quickly. The quality of work exceeded my expectations, and the whole process was seamless.",
            author: "Sarah Chen",
            role: "Marketing Director",
            avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            background: "bg-chart-1/10",
            createdAt: new Date().toISOString()
          },
          {
            id: 2,
            quote: "As a freelancer, I love the bounty system. It lets me choose projects I'm passionate about and the payment process is reliable and fast.",
            author: "Mark Johnson",
            role: "Frontend Developer",
            avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            background: "bg-chart-2/10",
            createdAt: new Date().toISOString()
          },
          {
            id: 3,
            quote: "The platform has transformed how we hire talent for one-off projects. It's now our go-to solution whenever we need specialized skills.",
            author: "Elena Rodriguez",
            role: "Startup Founder",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            background: "bg-chart-3/10",
            createdAt: new Date().toISOString()
          }
        ];
        localStorage.setItem('testimonials', JSON.stringify(defaultTestimonials));
      }
    }
    return db;
  } catch (error) {
    console.error('Failed to initialize database:', error);
    return null;
  }
};

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        initDb();
        const stored = localStorage.getItem('testimonials');
        const data = stored ? JSON.parse(stored) : [];
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const addTestimonial = async (testimonial: Omit<Testimonial, 'id' | 'createdAt'>) => {
    try {
      initDb();
      const stored = localStorage.getItem('testimonials');
      const currentTestimonials = stored ? JSON.parse(stored) : [];
      
      const newTestimonial: Testimonial = {
        ...testimonial,
        id: currentTestimonials.length > 0 ? Math.max(...currentTestimonials.map((t: Testimonial) => t.id || 0)) + 1 : 1,
        createdAt: new Date().toISOString()
      };
      
      const updatedTestimonials = [...currentTestimonials, newTestimonial];
      localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
      
      setTestimonials(updatedTestimonials);
      return newTestimonial;
    } catch (error) {
      console.error('Error adding testimonial:', error);
      throw error;
    }
  };

  return {
    testimonials,
    loading,
    addTestimonial
  };
}
