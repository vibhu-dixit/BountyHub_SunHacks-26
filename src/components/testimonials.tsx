'use client';

import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import TestimonialForm from './testimonial-form';
import { useTestimonials } from '@/lib/db';
export default function Testimonials() {
  const [showForm, setShowForm] = useState(false);
  const {
    testimonials,
    loading
  } = useTestimonials();
  const displayedTestimonials = testimonials.slice().reverse().slice(0, 6);
  return <section className="py-16 bg-accent" data-unique-id="1613f9a1-80b8-4238-90c6-c521b7989497" data-file-name="components/testimonials.tsx">
      <div className="container mx-auto px-4" data-unique-id="67cdf00f-a553-4f68-b79a-69aedc0677c1" data-file-name="components/testimonials.tsx" data-dynamic-text="true">
        <div className="flex justify-between items-center mb-8" data-unique-id="5fc10570-995f-4075-b8f2-1e64cae212d3" data-file-name="components/testimonials.tsx">
          <div className="text-center md:text-left" data-unique-id="5496d8ba-e3a6-4594-9419-d040269aa18b" data-file-name="components/testimonials.tsx">
            <motion.h2 className="text-3xl font-bold mb-2" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} data-unique-id="369c160b-c701-4e28-b375-daafedd74f40" data-file-name="components/testimonials.tsx">
              <span className="editable-text" data-unique-id="eafb4e5e-04bd-40d7-a967-c8e03b552e4e" data-file-name="components/testimonials.tsx">What People Say</span>
            </motion.h2>
            <motion.p className="text-muted-foreground md:max-w-2xl" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} viewport={{
            once: true
          }} data-unique-id="68f02abf-2273-481e-8da9-974fb874046f" data-file-name="components/testimonials.tsx">
              <span className="editable-text" data-unique-id="6b4df73e-ab28-40be-9d36-82347b18eaa4" data-file-name="components/testimonials.tsx">
                Hear from bounty posters and hunters about their experience
              </span>
            </motion.p>
          </div>
          
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} data-unique-id="b87b0ab0-0b2e-4758-83a1-6e8d7698ab58" data-file-name="components/testimonials.tsx">
            <Button onClick={() => setShowForm(!showForm)} className="hidden md:flex items-center gap-2" data-unique-id="86c9d72b-75d9-477d-8c6f-640073d8b4ee" data-file-name="components/testimonials.tsx" data-dynamic-text="true">
              {showForm ? 'Hide Form' : <>
                  <Plus className="h-4 w-4" />
                  Share Your Experience
                </>}
            </Button>
          </motion.div>
        </div>
        
        <AnimatePresence>
          {showForm && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="mb-12 overflow-hidden" data-unique-id="cd406e1e-f42b-48ea-92e0-296d93d4c354" data-file-name="components/testimonials.tsx">
              <TestimonialForm onSubmitSuccess={() => setShowForm(false)} onCancel={() => setShowForm(false)} />
            </motion.div>}
        </AnimatePresence>
        
        {loading ? <div className="flex justify-center py-12" data-unique-id="45ba6e00-1979-433d-b78b-2a4bfce93f0b" data-file-name="components/testimonials.tsx">
            <div className="animate-pulse flex flex-col items-center" data-unique-id="3e6fee33-9f10-4f5e-9390-158dde6515d6" data-file-name="components/testimonials.tsx">
              <div className="h-8 w-40 bg-muted rounded-md mb-4" data-unique-id="8eeabd3d-19a0-4ed9-a7c6-e5d3e79a6365" data-file-name="components/testimonials.tsx"></div>
              <div className="h-4 w-64 bg-muted rounded-md" data-unique-id="fa24476a-8cbc-41e5-a12e-fe96d1ea331e" data-file-name="components/testimonials.tsx"></div>
            </div>
          </div> : <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-unique-id="a7479b83-ac85-4e77-9c45-e5a472402be1" data-file-name="components/testimonials.tsx" data-dynamic-text="true">
              {displayedTestimonials.map((testimonial, index) => <motion.div key={testimonial.id} className={cn("rounded-lg p-6 border border-border", testimonial.background)} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} data-unique-id="9b200f3e-a318-4c9e-8cbd-44425c06a747" data-file-name="components/testimonials.tsx">
                  <div className="mb-4" data-unique-id="5721977c-81be-4cd8-8623-c68c45ffad2d" data-file-name="components/testimonials.tsx">
                    <svg className="h-8 w-8 text-muted-foreground/40" fill="currentColor" viewBox="0 0 24 24" data-unique-id="6c068e67-60dc-4e7d-89d5-701e5a016793" data-file-name="components/testimonials.tsx">
                      <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" data-unique-id="ad2b54ac-fa0d-4703-a869-2dd4caeae66f" data-file-name="components/testimonials.tsx" data-dynamic-text="true" />
                    </svg>
                  </div>
                  
                  <blockquote className="mb-6 text-foreground min-h-[100px]" data-unique-id="ae680a9c-d875-4bf3-bb25-182c2729ced5" data-file-name="components/testimonials.tsx" data-dynamic-text="true">
                    <span className="editable-text" data-unique-id="dc7564e4-6119-4095-8a27-912b211c9cde" data-file-name="components/testimonials.tsx">"</span>{testimonial.quote}<span className="editable-text" data-unique-id="d7811c77-82d5-4bb8-8222-def18d6ae64c" data-file-name="components/testimonials.tsx">"</span>
                  </blockquote>
                  
                  <div className="flex items-center" data-unique-id="f7cbe9e5-0b22-427d-8779-1aab0d134ac0" data-file-name="components/testimonials.tsx">
                    <img src={testimonial.avatar} alt={testimonial.author} className="h-12 w-12 rounded-full object-cover" data-unique-id="54f83ef2-18c8-4c5d-9b99-dda5c9a2c4d6" data-file-name="components/testimonials.tsx" />
                    <div className="ml-3" data-unique-id="25b8938c-e861-4f36-af7b-bada0b336e03" data-file-name="components/testimonials.tsx">
                      <div className="font-semibold" data-unique-id="56faecfe-7120-4b0f-bc04-7b078f445b27" data-file-name="components/testimonials.tsx" data-dynamic-text="true">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground" data-unique-id="d2d1daac-9404-46aa-b6da-99dd0383197d" data-file-name="components/testimonials.tsx" data-dynamic-text="true">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </motion.div>)}
            </div>
            
            <div className="mt-8 text-center" data-unique-id="2d3b0a23-caf4-4338-a481-91130ab8b28e" data-file-name="components/testimonials.tsx">
              <Button onClick={() => setShowForm(!showForm)} className="md:hidden" size="lg" data-unique-id="8f62ccfa-e012-45c7-bddc-6b31ed657f55" data-file-name="components/testimonials.tsx" data-dynamic-text="true">
                {showForm ? 'Hide Form' : 'Share Your Experience'}
              </Button>
            </div>
          </>}
      </div>
    </section>;
}