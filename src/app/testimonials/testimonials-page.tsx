'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialForm from '@/components/testimonial-form';
import { useTestimonials } from '@/lib/db';
import { cn } from '@/lib/utils';
export default function TestimonialsPage() {
  const [showForm, setShowForm] = useState(false);
  const {
    testimonials,
    loading
  } = useTestimonials();
  return <>
      <div className="flex justify-end mb-8" data-unique-id="0598b2de-80fa-4db2-9e09-21d12d8484e7" data-file-name="app/testimonials/testimonials-page.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.3
      }} data-unique-id="d43a0581-1ef5-4b28-95ad-e097cdd569ec" data-file-name="app/testimonials/testimonials-page.tsx">
          <Button onClick={() => setShowForm(!showForm)} className="flex items-center gap-2" data-unique-id="a17a6a88-3638-41e2-8901-feafbff7b721" data-file-name="app/testimonials/testimonials-page.tsx" data-dynamic-text="true">
            {showForm ? 'Hide Form' : <>
                <Plus className="h-4 w-4" />
                Add Your Testimonial
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
      }} className="mb-12 overflow-hidden" data-unique-id="8d38fb61-7c58-47e5-895f-5142b6a1f508" data-file-name="app/testimonials/testimonials-page.tsx">
            <TestimonialForm onSubmitSuccess={() => {
          setShowForm(false);
          // Scroll to top with animation after submission
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }} onCancel={() => setShowForm(false)} />
          </motion.div>}
      </AnimatePresence>

      {loading ? <div className="flex justify-center py-12" data-unique-id="1538ca0d-a103-423f-94f3-38b178a020c7" data-file-name="app/testimonials/testimonials-page.tsx">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div> : testimonials.length === 0 ? <div className="text-center py-16" data-unique-id="b4158ec5-998c-4274-a6fb-c8ec9b92ec95" data-file-name="app/testimonials/testimonials-page.tsx">
          <h3 className="text-xl font-semibold mb-2" data-unique-id="11856c26-22b9-4bf8-a272-570647d43242" data-file-name="app/testimonials/testimonials-page.tsx"><span className="editable-text" data-unique-id="214643f4-8f3c-4657-b1dd-eb41191292f8" data-file-name="app/testimonials/testimonials-page.tsx">No testimonials yet</span></h3>
          <p className="text-muted-foreground mb-6" data-unique-id="7dc27918-740d-448a-98ed-074e31d2e603" data-file-name="app/testimonials/testimonials-page.tsx"><span className="editable-text" data-unique-id="4b42ca9a-bcc8-4f98-95b1-29cd936d94b9" data-file-name="app/testimonials/testimonials-page.tsx">Be the first to share your experience!</span></p>
          <Button onClick={() => setShowForm(true)} data-unique-id="ae8ac4ca-595b-4e17-b30c-7436d25c62cd" data-file-name="app/testimonials/testimonials-page.tsx"><span className="editable-text" data-unique-id="c218441e-1459-4939-86e5-f905a5743028" data-file-name="app/testimonials/testimonials-page.tsx">Add Your Testimonial</span></Button>
        </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-unique-id="cef75673-cab5-49f3-9757-47d9128b5f52" data-file-name="app/testimonials/testimonials-page.tsx" data-dynamic-text="true">
          {testimonials.slice().reverse().map((testimonial, index) => <motion.div key={testimonial.id} className={cn("rounded-lg p-6 border border-border", testimonial.background)} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: index * 0.05
      }} data-unique-id="2571dfc8-bafb-4656-b770-ffb88883faff" data-file-name="app/testimonials/testimonials-page.tsx" data-dynamic-text="true">
              <div className="mb-4" data-unique-id="52cbafa6-3459-421e-b9b6-1854d82edf74" data-file-name="app/testimonials/testimonials-page.tsx">
                <svg className="h-8 w-8 text-muted-foreground/40" fill="currentColor" viewBox="0 0 24 24" data-unique-id="f7fdee0a-d0c2-4b1d-8929-8435e94c086c" data-file-name="app/testimonials/testimonials-page.tsx">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" data-unique-id="90973134-cbe2-426e-9c90-f643ab76e0f1" data-file-name="app/testimonials/testimonials-page.tsx" data-dynamic-text="true" />
                </svg>
              </div>
              
              <blockquote className="mb-6 text-foreground min-h-[100px]" data-unique-id="8bc5a8c1-6097-49e3-a05f-1296e9dbabdf" data-file-name="app/testimonials/testimonials-page.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="84f8a93b-91ab-4b9b-9ea1-7253eaa52ffd" data-file-name="app/testimonials/testimonials-page.tsx">
                "</span>{testimonial.quote}<span className="editable-text" data-unique-id="7a21b9d6-624d-46bf-91df-ab5478559437" data-file-name="app/testimonials/testimonials-page.tsx">"
              </span></blockquote>
              
              <div className="flex items-center" data-unique-id="c71478a9-8089-4d0b-8308-c951328b3cd0" data-file-name="app/testimonials/testimonials-page.tsx">
                <img src={testimonial.avatar} alt={testimonial.author} className="h-12 w-12 rounded-full object-cover" data-unique-id="d7b62b7b-37ce-4402-9f6a-f8bd47f349de" data-file-name="app/testimonials/testimonials-page.tsx" />
                <div className="ml-3" data-unique-id="e9b32565-dee4-42f1-90e0-e1d208281f78" data-file-name="app/testimonials/testimonials-page.tsx">
                  <div className="font-semibold" data-unique-id="f009e911-40c0-4fef-870f-7cff767069c1" data-file-name="app/testimonials/testimonials-page.tsx" data-dynamic-text="true">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground" data-unique-id="f9dbc3e9-f475-416e-9500-4bbb5970a9cd" data-file-name="app/testimonials/testimonials-page.tsx" data-dynamic-text="true">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              
              {testimonial.createdAt && <div className="mt-4 text-xs text-muted-foreground" data-unique-id="e93f68d9-6ab5-47c6-a895-7c02b4edfd36" data-file-name="app/testimonials/testimonials-page.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="0dda6c78-ddf6-44fd-9fbb-79abaffbe2b1" data-file-name="app/testimonials/testimonials-page.tsx">
                  Posted </span>{new Date(testimonial.createdAt).toLocaleDateString()}
                </div>}
            </motion.div>)}
        </div>}
    </>;
}