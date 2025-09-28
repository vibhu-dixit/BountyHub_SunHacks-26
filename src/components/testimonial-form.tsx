'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Loader2, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Testimonial, useTestimonials } from '@/lib/db';
const testmonialSchema = z.object({
  quote: z.string().min(20, 'Testimonial must be at least 20 characters long').max(500, 'Testimonial cannot exceed 500 characters'),
  author: z.string().min(2, 'Name is required'),
  role: z.string().min(2, 'Role or company is required'),
  avatar: z.string().url('Please enter a valid image URL').optional()
});
type TestimonialFormData = z.infer<typeof testmonialSchema>;
interface TestimonialFormProps {
  onSubmitSuccess?: () => void;
  onCancel?: () => void;
}
export default function TestimonialForm({
  onSubmitSuccess,
  onCancel
}: TestimonialFormProps) {
  const {
    addTestimonial
  } = useTestimonials();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    reset
  } = useForm<TestimonialFormData>({
    resolver: zodResolver(testmonialSchema),
    defaultValues: {
      quote: '',
      author: '',
      role: '',
      avatar: ''
    }
  });
  const backgroundOptions = [{
    value: 'bg-chart-1/10',
    label: 'Red',
    previewClass: 'bg-chart-1'
  }, {
    value: 'bg-chart-2/10',
    label: 'Green',
    previewClass: 'bg-chart-2'
  }, {
    value: 'bg-chart-3/10',
    label: 'Blue',
    previewClass: 'bg-chart-3'
  }, {
    value: 'bg-chart-4/10',
    label: 'Yellow',
    previewClass: 'bg-chart-4'
  }, {
    value: 'bg-chart-5/10',
    label: 'Orange',
    previewClass: 'bg-chart-5'
  }];
  const [selectedBackground, setSelectedBackground] = useState(backgroundOptions[0].value);
  const onSubmit = async (data: TestimonialFormData) => {
    setIsSubmitting(true);
    try {
      // Default avatar if none provided
      const avatar = data.avatar || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
      await addTestimonial({
        quote: data.quote,
        author: data.author,
        role: data.role,
        avatar,
        background: selectedBackground
      });
      reset();
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    } catch (error) {
      console.error('Error submitting testimonial:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0,
    y: -20
  }} className="bg-card border border-border rounded-lg p-6 shadow-md max-w-2xl mx-auto" data-unique-id="582e30ad-2bc2-47f4-957f-1c160a3c795c" data-file-name="components/testimonial-form.tsx">
      <div className="flex justify-between items-center mb-6" data-unique-id="e1ba5072-c8ca-4448-bcee-489d2de75602" data-file-name="components/testimonial-form.tsx" data-dynamic-text="true">
        <h3 className="text-xl font-semibold" data-unique-id="56dcabad-8486-4e23-a503-31e809a47e65" data-file-name="components/testimonial-form.tsx"><span className="editable-text" data-unique-id="e13eeca1-ee9d-4c14-af9a-5cf936bf2a9e" data-file-name="components/testimonial-form.tsx">Share Your Experience</span></h3>
        {onCancel && <Button variant="ghost" size="sm" onClick={onCancel} className="h-8 w-8 p-0 rounded-full" data-unique-id="2ff79747-b92d-4c5b-9d87-e7bd5c923076" data-file-name="components/testimonial-form.tsx">
            <X className="h-4 w-4" />
          </Button>}
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" data-unique-id="b3f5f003-65d0-40fd-b626-d03f5872dced" data-file-name="components/testimonial-form.tsx">
        <div data-unique-id="defffd57-3159-427b-89dd-f9f7c5a87643" data-file-name="components/testimonial-form.tsx" data-dynamic-text="true">
          <label className="block text-sm font-medium mb-2" data-unique-id="cb941ee1-1318-49c1-bb1f-13eba2bd90f6" data-file-name="components/testimonial-form.tsx"><span className="editable-text" data-unique-id="7eeb15f7-e8fd-4233-b807-abcf8df179f5" data-file-name="components/testimonial-form.tsx">
            Your Testimonial*
          </span></label>
          <textarea {...register('quote')} className="w-full p-3 rounded-md border border-input bg-background min-h-24" placeholder="Tell us about your experience with BountyHub..." data-unique-id="783cd9d0-9bf3-4ead-b905-e0e7dfd26d64" data-file-name="components/testimonial-form.tsx" />
          {errors.quote && <p className="mt-1 text-sm text-destructive" data-unique-id="c50e2b1b-ab98-4df2-bda9-bb64daac2a9f" data-file-name="components/testimonial-form.tsx" data-dynamic-text="true">{errors.quote.message}</p>}
          <div className="text-xs text-muted-foreground mt-1 text-right" data-unique-id="02bbbed8-18ac-4931-90b5-404171225c78" data-file-name="components/testimonial-form.tsx"><span className="editable-text" data-unique-id="97140e96-2f23-427c-b40e-7007a8e189d2" data-file-name="components/testimonial-form.tsx">
            Max 500 characters
          </span></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-unique-id="ba8493db-992f-4be7-87ce-547f5bcd1fb9" data-file-name="components/testimonial-form.tsx">
          <div data-unique-id="43f98f0f-9e13-444d-adcd-485e8031ac4a" data-file-name="components/testimonial-form.tsx" data-dynamic-text="true">
            <label className="block text-sm font-medium mb-2" data-unique-id="438bdd47-97e6-4fe4-b81e-68529dc0c1cc" data-file-name="components/testimonial-form.tsx"><span className="editable-text" data-unique-id="c0104dee-bea5-4fb0-a08c-f76925420d15" data-file-name="components/testimonial-form.tsx">
              Your Name*
            </span></label>
            <input type="text" {...register('author')} className="w-full p-3 rounded-md border border-input bg-background" placeholder="John Doe" data-unique-id="4de3baeb-7a22-4347-a4f0-d721510aea04" data-file-name="components/testimonial-form.tsx" />
            {errors.author && <p className="mt-1 text-sm text-destructive" data-unique-id="0677cce9-a9b3-4623-89e7-f36f45312f63" data-file-name="components/testimonial-form.tsx" data-dynamic-text="true">{errors.author.message}</p>}
          </div>
          
          <div data-unique-id="d7b14a01-456e-4903-9824-524fe92b29a6" data-file-name="components/testimonial-form.tsx" data-dynamic-text="true">
            <label className="block text-sm font-medium mb-2" data-unique-id="8a84118d-36b1-4c70-8b9c-6caaaa8ed219" data-file-name="components/testimonial-form.tsx"><span className="editable-text" data-unique-id="163b70e5-5509-4d71-ad60-92c9e7f0112d" data-file-name="components/testimonial-form.tsx">
              Your Role/Company*
            </span></label>
            <input type="text" {...register('role')} className="w-full p-3 rounded-md border border-input bg-background" placeholder="Frontend Developer at Acme Inc." data-unique-id="5afca820-991c-41d0-9c9c-e0fc28e36097" data-file-name="components/testimonial-form.tsx" />
            {errors.role && <p className="mt-1 text-sm text-destructive" data-unique-id="0f501057-6389-4168-b244-bcc8b7df732d" data-file-name="components/testimonial-form.tsx" data-dynamic-text="true">{errors.role.message}</p>}
          </div>
        </div>
        
        <div data-unique-id="a64f3c49-2b35-4aa7-bda8-99a97d824454" data-file-name="components/testimonial-form.tsx" data-dynamic-text="true">
          <label className="block text-sm font-medium mb-2" data-unique-id="1317d41c-26ea-441c-8f67-babfb2afa7fa" data-file-name="components/testimonial-form.tsx"><span className="editable-text" data-unique-id="77988a18-e241-4bbb-8858-7b6f10a0bcab" data-file-name="components/testimonial-form.tsx">
            Profile Image URL (Optional)
          </span></label>
          <input type="url" {...register('avatar')} className="w-full p-3 rounded-md border border-input bg-background" placeholder="https://picsum.photos/200" data-unique-id="36bbc29e-eb45-455b-ba4f-7c266d03aaaa" data-file-name="components/testimonial-form.tsx" />
          {errors.avatar && <p className="mt-1 text-sm text-destructive" data-unique-id="3ce01f84-6ffa-42dd-a950-63271081ded2" data-file-name="components/testimonial-form.tsx" data-dynamic-text="true">{errors.avatar.message}</p>}
          <p className="text-xs text-muted-foreground mt-1" data-unique-id="ad02443d-642b-48b2-8a91-c14d7c0514bc" data-file-name="components/testimonial-form.tsx"><span className="editable-text" data-unique-id="fb6cd8ef-ffbd-4c72-8788-581c6117bcf8" data-file-name="components/testimonial-form.tsx">
            Leave empty to use a default avatar
          </span></p>
        </div>
        
        <div data-unique-id="2eb4f586-4f18-490c-b0e3-92a99bee37fa" data-file-name="components/testimonial-form.tsx">
          <label className="block text-sm font-medium mb-2" data-unique-id="8c5fc052-7980-4933-b33d-698e3ee8ae36" data-file-name="components/testimonial-form.tsx"><span className="editable-text" data-unique-id="c669fd0d-58d2-44e0-83c9-7f0e2312915b" data-file-name="components/testimonial-form.tsx">
            Card Color Theme
          </span></label>
          <div className="flex flex-wrap gap-3" data-unique-id="6041f485-a7d5-4f79-b68d-c377e51d4841" data-file-name="components/testimonial-form.tsx" data-dynamic-text="true">
            {backgroundOptions.map(option => <div key={option.value} onClick={() => setSelectedBackground(option.value)} className={`
                  p-1 rounded-md cursor-pointer transition-all
                  ${selectedBackground === option.value ? 'ring-2 ring-primary' : 'hover:bg-accent'}
                `} data-unique-id="9e310435-2cce-4fb0-98f0-ec7a7359aed5" data-file-name="components/testimonial-form.tsx">
                <div className={`w-8 h-8 rounded-full ${option.previewClass}`} data-unique-id="0ba211aa-cc47-4b50-be7c-cf4e8c8a6f5a" data-file-name="components/testimonial-form.tsx"></div>
              </div>)}
          </div>
        </div>
        
        <div className="flex justify-end gap-3 pt-2" data-unique-id="198d5f27-a9a0-4776-86b1-9ecbfc84fbcf" data-file-name="components/testimonial-form.tsx" data-dynamic-text="true">
          {onCancel && <Button type="button" variant="outline" onClick={onCancel} data-unique-id="8add518d-f4c1-436b-aa8b-2338d237d23c" data-file-name="components/testimonial-form.tsx"><span className="editable-text" data-unique-id="30cb0625-0495-47f3-bee4-fcc4e5f4c606" data-file-name="components/testimonial-form.tsx">
              Cancel
            </span></Button>}
          <Button type="submit" disabled={isSubmitting} data-unique-id="533c1d59-5835-4893-a58c-0a86ec321778" data-file-name="components/testimonial-form.tsx" data-dynamic-text="true">
            {isSubmitting ? <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </> : 'Submit Testimonial'}
          </Button>
        </div>
      </form>
    </motion.div>;
}