'use client';

import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
const categories = [{
  name: 'Design',
  icon: '🎨',
  color: 'bg-chart-1/10 border-chart-1/30 text-chart-1',
  description: 'Logos, UI/UX, graphics & more',
  link: '/explore?category=design'
}, {
  name: 'Development',
  icon: '💻',
  color: 'bg-chart-2/10 border-chart-2/30 text-chart-2',
  description: 'Web, mobile & software development',
  link: '/explore?category=development'
}, {
  name: 'Writing',
  icon: '✍️',
  color: 'bg-chart-3/10 border-chart-3/30 text-chart-3',
  description: 'Content, copywriting & editing',
  link: '/explore?category=writing'
}, {
  name: 'Marketing',
  icon: '📣',
  color: 'bg-chart-4/10 border-chart-4/30 text-chart-4',
  description: 'Social media, SEO & advertising',
  link: '/explore?category=marketing'
}, {
  name: 'Video',
  icon: '🎬',
  color: 'bg-chart-5/10 border-chart-5/30 text-chart-5',
  description: 'Editing, animation & production',
  link: '/explore?category=video'
}, {
  name: 'Audio',
  icon: '🎵',
  color: 'bg-chart-1/10 border-chart-1/30 text-chart-1',
  description: 'Music, podcasts & voice over',
  link: '/explore?category=audio'
}];
export default function CategoryShowcase() {
  return <section className="py-16 container mx-auto px-4" data-unique-id="4ae9606c-a688-4139-b462-33b2d7de3535" data-file-name="components/category-showcase.tsx">
      <div className="text-center mb-12" data-unique-id="d3b57cd1-9875-4192-b787-ebd7a0e167b3" data-file-name="components/category-showcase.tsx">
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
      }} data-unique-id="cad70131-3901-4085-805f-15bcdbefb1a2" data-file-name="components/category-showcase.tsx"><span className="editable-text" data-unique-id="ccbe0b50-f640-4ea8-ae7f-d53e5c420c9c" data-file-name="components/category-showcase.tsx">
          Explore Bounty Categories
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
      }} data-unique-id="76f733eb-fd6c-4af3-9edf-e642d8e1e969" data-file-name="components/category-showcase.tsx"><span className="editable-text" data-unique-id="e9aca50b-06d0-43da-8ed5-7cdb5c3de313" data-file-name="components/category-showcase.tsx">
          Find opportunities in various fields that match your expertise
        </span></motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-unique-id="0f081aec-0b2d-44a2-9a91-c22c5410b481" data-file-name="components/category-showcase.tsx" data-dynamic-text="true">
        {categories.map((category, index) => <motion.div key={index} className={cn("border rounded-lg p-6 flex items-start", category.color, "border transition-transform cursor-pointer")} whileHover={{
        y: -5,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
      }} initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.4,
        delay: index * 0.1
      }} viewport={{
        once: true
      }} data-unique-id="6d100b0b-8304-4e81-bb69-2e01566e638c" data-file-name="components/category-showcase.tsx">
            <Link href={category.link} className="flex w-full justify-between" data-unique-id="07b825f2-90ad-4ba0-ba4b-1c81164101c4" data-file-name="components/category-showcase.tsx">
              <div className="flex" data-unique-id="bc66e44d-2ecd-4057-b51b-b6b1a3da551d" data-file-name="components/category-showcase.tsx">
                <div className="text-2xl mr-4" data-unique-id="4cfb0b2e-211e-4422-bdc0-529200209d71" data-file-name="components/category-showcase.tsx" data-dynamic-text="true">{category.icon}</div>
                <div data-unique-id="411c4797-88bd-4868-b68d-39af37caf412" data-file-name="components/category-showcase.tsx">
                  <h3 className="font-semibold text-lg mb-1" data-unique-id="c683e513-7227-4acb-9e14-eda9a30aaf27" data-file-name="components/category-showcase.tsx" data-dynamic-text="true">{category.name}</h3>
                  <p className="text-sm text-muted-foreground" data-unique-id="aabeb34f-247c-42a9-a10a-d3706a31f159" data-file-name="components/category-showcase.tsx" data-dynamic-text="true">{category.description}</p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 opacity-60" data-unique-id="017a87e2-9abc-416d-9ae1-84345c8d0183" data-file-name="components/category-showcase.tsx" data-dynamic-text="true" />
            </Link>
          </motion.div>)}
      </div>
    </section>;
}