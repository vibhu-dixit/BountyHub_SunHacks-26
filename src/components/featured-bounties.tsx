'use client';

import BountyCard from '@/components/bounty-card';
import useBountyStore from '@/lib/store';
import { motion } from 'framer-motion';
export default function FeaturedBounties() {
  const bounties = useBountyStore(state => state.bounties);
  const featuredBounties = bounties.filter(bounty => bounty.status === 'open').slice(0, 3);
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };
  return <section className="py-12 container mx-auto px-4" data-unique-id="fc5e20b7-3213-4ca2-895e-64fcdf7548c0" data-file-name="components/featured-bounties.tsx">
      <div className="flex justify-between items-center mb-8" data-unique-id="d1d8d0d5-640a-4875-8a44-5027f553e8b9" data-file-name="components/featured-bounties.tsx">
        <div data-unique-id="3d64ff3b-c2fa-4ed2-955a-4e7242f4203b" data-file-name="components/featured-bounties.tsx">
          <h2 className="text-2xl font-bold" data-unique-id="cdbdd359-c6f5-4543-bec8-3fb612d86d0e" data-file-name="components/featured-bounties.tsx"><span className="editable-text" data-unique-id="50aa4d53-7ae2-4abd-affe-2adce546256a" data-file-name="components/featured-bounties.tsx">Featured Bounties</span></h2>
          <p className="text-muted-foreground" data-unique-id="4db3a9ba-d7de-44be-9e93-f338106e8157" data-file-name="components/featured-bounties.tsx"><span className="editable-text" data-unique-id="2d26ccd4-8209-4053-9945-99e71a23267e" data-file-name="components/featured-bounties.tsx">Top opportunities available right now</span></p>
        </div>
        <motion.div whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} data-unique-id="2c0ce53b-8420-4c1b-86a5-4a579370bdc3" data-file-name="components/featured-bounties.tsx">
          <a href="/explore" className="text-chart-1 hover:text-chart-5 transition-colors font-medium" data-unique-id="02a22875-c2bc-4424-94f7-904ac28d3173" data-file-name="components/featured-bounties.tsx"><span className="editable-text" data-unique-id="f2e8b9a9-a350-4042-922b-07feba36852f" data-file-name="components/featured-bounties.tsx">
            View all bounties
          </span></a>
        </motion.div>
      </div>
      
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" animate="visible" data-unique-id="554a3cde-d3d1-40de-b52c-1f5729505fb2" data-file-name="components/featured-bounties.tsx" data-dynamic-text="true">
        {featuredBounties.length > 0 ? featuredBounties.map(bounty => <motion.div key={bounty.id} variants={itemVariants} data-unique-id="2270dfcc-b7b7-44b9-bc7c-8e9631662471" data-file-name="components/featured-bounties.tsx">
              <BountyCard bounty={bounty} />
            </motion.div>) : <div className="col-span-3 text-center py-12" data-unique-id="979ec4fc-0cea-4fdc-a7c0-62057cff761b" data-file-name="components/featured-bounties.tsx">
            <p className="text-muted-foreground" data-unique-id="8c476b02-ad2b-4ae5-a239-51c7f5748ae9" data-file-name="components/featured-bounties.tsx"><span className="editable-text" data-unique-id="873eb1fa-7a0d-4d56-9913-9584d382f670" data-file-name="components/featured-bounties.tsx">No open bounties at the moment.</span></p>
          </div>}
      </motion.div>
    </section>;
}