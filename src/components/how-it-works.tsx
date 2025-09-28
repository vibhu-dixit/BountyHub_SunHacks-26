'use client';

import { cn } from '@/lib/utils';
import { CheckCircle, FileText, Search, Send } from 'lucide-react';
import { motion } from 'framer-motion';
const steps = [{
  icon: <FileText className="h-10 w-10" />,
  title: 'Post a Bounty',
  description: 'Describe what you need, set your budget, and specify any requirements.'
}, {
  icon: <Search className="h-10 w-10" />,
  title: 'Hunters Find Your Bounty',
  description: 'Skilled professionals browse and find opportunities that match their expertise.'
}, {
  icon: <Send className="h-10 w-10" />,
  title: 'Work Gets Done',
  description: 'The hunter completes the task according to your specifications.'
}, {
  icon: <CheckCircle className="h-10 w-10" />,
  title: 'Review & Pay',
  description: 'Approve the completed work and release payment to the hunter.'
}];
export default function HowItWorks() {
  return <section className="py-12 bg-accent" data-unique-id="173385d4-edde-4bef-aa94-2d9475bd5bd5" data-file-name="components/how-it-works.tsx">
      <div className="container mx-auto px-4" data-unique-id="48ecbd8c-7142-4d5b-8ff3-55be27753a4b" data-file-name="components/how-it-works.tsx">
        <div className="text-center mb-12" data-unique-id="d84bbcb8-c47e-473e-9e80-587b99fd3500" data-file-name="components/how-it-works.tsx">
          <motion.h2 className="text-3xl font-bold mb-4" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} data-unique-id="b83cd957-73ae-42bd-9bb0-600b6c95093c" data-file-name="components/how-it-works.tsx"><span className="editable-text" data-unique-id="cc10727b-3bcb-49fd-b532-8fddfe7cabb6" data-file-name="components/how-it-works.tsx">
            How BountyHub Works
          </span></motion.h2>
          <motion.p className="text-muted-foreground max-w-2xl mx-auto" initial={{
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
        }} data-unique-id="bf81d1be-af70-44f1-8dd0-a18dc027c3ad" data-file-name="components/how-it-works.tsx"><span className="editable-text" data-unique-id="ec911561-49de-428e-acec-a572eccfbe86" data-file-name="components/how-it-works.tsx">
            A simple process to get your tasks done by talented professionals
          </span></motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-unique-id="297a71ed-ae8a-4476-b79c-3b3d229d9b76" data-file-name="components/how-it-works.tsx" data-dynamic-text="true">
          {steps.map((step, index) => <motion.div key={index} className={cn("flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border relative")} initial={{
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
        }} data-unique-id="67f6cc74-ac24-4a22-8485-678d2931c923" data-file-name="components/how-it-works.tsx" data-dynamic-text="true">
              {index < steps.length - 1 && <div className="hidden md:block absolute top-1/4 left-full w-8 h-0.5 bg-border z-0 -ml-4" data-unique-id="deaf0bb5-11b9-4bb3-aa9e-fd5a779408cf" data-file-name="components/how-it-works.tsx">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-45 w-2 h-2 border-t border-r border-border bg-background" data-unique-id="3a1425c5-e79a-45a5-a892-db117c608944" data-file-name="components/how-it-works.tsx"></div>
                </div>}
              
              <div className="bg-primary/10 p-4 rounded-full mb-4 text-chart-1" data-unique-id="f8ec9fdb-790b-4906-9358-17c0cf4c4b2e" data-file-name="components/how-it-works.tsx" data-dynamic-text="true">
                {step.icon}
              </div>
              
              <h3 className="text-lg font-semibold mb-2" data-unique-id="3d23fd8d-86c3-48ae-9a17-76a89dea9b27" data-file-name="components/how-it-works.tsx" data-dynamic-text="true">{step.title}</h3>
              
              <p className="text-muted-foreground text-sm" data-unique-id="7a89fe53-e21f-4580-91eb-0f9f13eb7143" data-file-name="components/how-it-works.tsx" data-dynamic-text="true">{step.description}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}