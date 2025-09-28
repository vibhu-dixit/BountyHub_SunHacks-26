'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
export default function HeroSection() {
  return <section className="relative bg-gradient-to-b from-accent to-background py-20 overflow-hidden" data-unique-id="ca9c8336-8968-4bcc-bf15-48e7ba363fe4" data-file-name="components/hero-section.tsx" data-dynamic-text="true">
      <div className="container mx-auto px-4" data-unique-id="70e94e55-b775-4046-b1f8-0b69da086fdf" data-file-name="components/hero-section.tsx">
        <div className="flex flex-col items-center text-center" data-unique-id="8bbf7cd6-e34e-4616-a9b9-37a8c45151be" data-file-name="components/hero-section.tsx" data-dynamic-text="true">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="max-w-3xl mx-auto mb-12" data-unique-id="612160f7-0130-40c9-895b-1343ede58fc1" data-file-name="components/hero-section.tsx">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-unique-id="a1f24b45-9ca6-46c9-b3b7-6c16fdb58dc8" data-file-name="components/hero-section.tsx"><span className="editable-text" data-unique-id="5e6915f1-cd36-4a14-88bd-46d3310db82b" data-file-name="components/hero-section.tsx">
              Find Talent or Work on
              </span><span className="text-chart-1 block" data-unique-id="7123c1b4-57ce-492a-b46d-2b85d5b288cb" data-file-name="components/hero-section.tsx"><span className="editable-text" data-unique-id="a52c7603-151e-4d7f-b577-bb4992fc965e" data-file-name="components/hero-section.tsx">Demand-Driven Bounties</span></span>
            </h1>
            <p className="text-xl mb-8 text-muted-foreground" data-unique-id="6f697307-6181-43ba-b1d4-6d3d9afe49f4" data-file-name="components/hero-section.tsx"><span className="editable-text" data-unique-id="18b542cb-ecf4-48e8-b184-372e21355eb0" data-file-name="components/hero-section.tsx">
              Post your requirements as bounties or hunt for opportunities that match your skills.
              Fast, reliable, and transparent.
            </span></p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-unique-id="bcbf2afb-46fd-4dfb-9ef4-569d237228ac" data-file-name="components/hero-section.tsx">
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-unique-id="f0b24369-49dd-47b4-b60e-db35545b1c26" data-file-name="components/hero-section.tsx">
                <Link href="/post-bounty" data-unique-id="ee70951d-f244-4dc3-9507-ac430cd0a2d9" data-file-name="components/hero-section.tsx">
                  <Button size="lg" className="px-8" data-unique-id="1ae31880-8cd0-4ae2-9ccc-04b209ccc781" data-file-name="components/hero-section.tsx"><span className="editable-text" data-unique-id="acce5baf-7ad9-4710-82fd-7b3e6cabbcc4" data-file-name="components/hero-section.tsx">
                    Post a Bounty
                  </span></Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} data-unique-id="fae281fc-98ae-4f3d-9b90-27c1d4f86f18" data-file-name="components/hero-section.tsx">
                <Link href="/explore" data-unique-id="1d64cd13-d80d-453f-b8c1-ff57f81d7f30" data-file-name="components/hero-section.tsx">
                  <Button size="lg" variant="outline" className="px-8 group" data-unique-id="65f88935-b5d3-45a9-ae61-9e18fae61b2b" data-file-name="components/hero-section.tsx"><span className="editable-text" data-unique-id="3ce0c77d-4e21-4d77-b666-9f6fc14d2afa" data-file-name="components/hero-section.tsx">
                    Browse Bounties
                    </span><ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Stats display */}
          <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full max-w-3xl mx-auto" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} data-unique-id="f3418aa9-fcc0-4571-bcfb-43a03cee8102" data-file-name="components/hero-section.tsx" data-dynamic-text="true">
            {[{
            value: '3,500+',
            label: 'Bounties Posted'
          }, {
            value: '95%',
            label: 'Completion Rate'
          }, {
            value: '24hr',
            label: 'Avg. Response Time'
          }, {
            value: '1,200+',
            label: 'Active Hunters'
          }].map((stat, index) => <div key={index} className="text-center" data-unique-id="9e5eae86-87d5-4331-b629-cbd9aafa4119" data-file-name="components/hero-section.tsx">
                <div className="text-2xl md:text-3xl font-bold text-chart-1" data-unique-id="bc6093cb-010d-4a56-bca7-b5c9a79602a5" data-file-name="components/hero-section.tsx" data-dynamic-text="true">{stat.value}</div>
                <div className="text-sm text-muted-foreground" data-unique-id="d07f16a1-8db6-406a-ade0-16054f2641ce" data-file-name="components/hero-section.tsx" data-dynamic-text="true">{stat.label}</div>
              </div>)}
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <motion.div className="absolute -top-24 -right-24 w-96 h-96 bg-chart-1/10 rounded-full blur-3xl" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1
    }} data-unique-id="37561f7a-f09e-4321-8caa-ab3feb0ccfb3" data-file-name="components/hero-section.tsx" />
      <motion.div className="absolute -bottom-32 -left-32 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1,
      delay: 0.3
    }} data-unique-id="2dcd3678-779b-45ba-9ee4-a5620bf1584f" data-file-name="components/hero-section.tsx" />
    </section>;
}