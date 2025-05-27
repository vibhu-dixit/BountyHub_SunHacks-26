'use client';

import BountyCard from '@/components/bounty-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import useBountyStore from '@/lib/store';
import { Bell, ChevronRight, Clock, CreditCard, DollarSign, FileText, Settings, Star, User } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
export default function DashboardContent() {
  const {
    bounties
  } = useBountyStore();
  // Simulating current user's ID (in a real app this would come from auth)
  const currentUserId = 'user1';

  // Tabs
  const [activeTab, setActiveTab] = useState<'posted' | 'applied' | 'completed'>('posted');

  // Filter bounties based on active tab
  const postedBounties = bounties.filter(b => b.postedBy === currentUserId);
  const appliedBounties = bounties.filter(b => b.assignedTo === currentUserId && b.status === 'in-progress');
  const completedBounties = bounties.filter(b => (b.assignedTo === currentUserId || b.postedBy === currentUserId) && b.status === 'completed');

  // Get bounties based on active tab
  const displayedBounties = activeTab === 'posted' ? postedBounties : activeTab === 'applied' ? appliedBounties : completedBounties;
  return <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-unique-id="7998dc9d-35a6-4f52-b313-f3e56f73194a" data-file-name="app/dashboard/dashboard-content.tsx">
      <div className="md:col-span-2" data-unique-id="167d83d2-9af8-4582-a7cc-b71bf361c2e7" data-file-name="app/dashboard/dashboard-content.tsx" data-dynamic-text="true">
        <div className="mb-6" data-unique-id="b3916323-9aea-4198-b6b2-9de8dfcc5de3" data-file-name="app/dashboard/dashboard-content.tsx">
          <div className="border-b border-border" data-unique-id="01ad0f9f-740c-4b86-9d83-9180b7803c19" data-file-name="app/dashboard/dashboard-content.tsx">
            <div className="flex overflow-x-auto" data-unique-id="e23b9325-8b2c-4bbf-99fb-8b70adc716fa" data-file-name="app/dashboard/dashboard-content.tsx" data-dynamic-text="true">
              {[{
              id: 'posted',
              label: 'Posted Bounties',
              count: postedBounties.length
            }, {
              id: 'applied',
              label: 'Applied Bounties',
              count: appliedBounties.length
            }, {
              id: 'completed',
              label: 'Completed',
              count: completedBounties.length
            }].map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} className={`px-4 py-2 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === tab.id ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`} data-unique-id="66b0e7a0-8ec6-402e-a97c-2bf79fd1ef5f" data-file-name="app/dashboard/dashboard-content.tsx" data-dynamic-text="true">
                  {tab.label} {tab.count > 0 && `(${tab.count})`}
                </button>)}
            </div>
          </div>
        </div>
        
        {displayedBounties.length === 0 ? <div className="text-center py-16 bg-card border border-border rounded-lg" data-unique-id="05a99262-1de3-4571-b989-d6428eae8bbd" data-file-name="app/dashboard/dashboard-content.tsx" data-dynamic-text="true">
            <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2" data-unique-id="e49ebc98-14bc-4f16-aea0-3584aacc19d6" data-file-name="app/dashboard/dashboard-content.tsx"><span className="editable-text" data-unique-id="269bed05-fdca-4923-aa59-becfff713c54" data-file-name="app/dashboard/dashboard-content.tsx">No bounties found</span></h3>
            <p className="text-muted-foreground mb-6" data-unique-id="7318e53d-4cec-4d72-9f65-024b16baaf36" data-file-name="app/dashboard/dashboard-content.tsx" data-dynamic-text="true">
              {activeTab === 'posted' ? "You haven't posted any bounties yet." : activeTab === 'applied' ? "You haven't applied to any bounties yet." : "You don't have any completed bounties yet."}
            </p>
            {activeTab === 'posted' && <Link href="/post-bounty" data-unique-id="1c0db46f-7442-43d7-9d68-6fb6818a6e4c" data-file-name="app/dashboard/dashboard-content.tsx">
                <Button data-unique-id="bd816b73-2a29-41c1-bd22-cdb01bb6b00b" data-file-name="app/dashboard/dashboard-content.tsx"><span className="editable-text" data-unique-id="d4afc119-7732-4eb8-9d39-be07b2301d8a" data-file-name="app/dashboard/dashboard-content.tsx">Post Your First Bounty</span></Button>
              </Link>}
            {activeTab === 'applied' && <Link href="/explore" data-unique-id="80d04f09-d124-4e73-93cc-5d882659bc41" data-file-name="app/dashboard/dashboard-content.tsx">
                <Button data-unique-id="5efcfb5d-ac87-4e44-b4b9-0d08db819554" data-file-name="app/dashboard/dashboard-content.tsx"><span className="editable-text" data-unique-id="92bb9255-19cb-4c5b-bb1a-168ff5ba0803" data-file-name="app/dashboard/dashboard-content.tsx">Browse Bounties</span></Button>
              </Link>}
          </div> : <motion.div className="grid grid-cols-1 gap-6" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.3
      }} key={activeTab} data-unique-id="7d0e63c5-94d6-4201-a8d1-17f887a39671" data-file-name="app/dashboard/dashboard-content.tsx" data-dynamic-text="true">
            {displayedBounties.map(bounty => <BountyCard key={bounty.id} bounty={bounty} />)}
          </motion.div>}
      </div>
      
      <div data-unique-id="ab4e1924-b84d-42cc-a445-319f90d06590" data-file-name="app/dashboard/dashboard-content.tsx">
        <Card className="mb-6" data-unique-id="f5223c59-197d-4d61-906c-572df4c310ef" data-file-name="app/dashboard/dashboard-content.tsx">
          <CardContent className="pt-6" data-unique-id="878228f2-a189-4202-aaf6-73a2df8a57c4" data-file-name="app/dashboard/dashboard-content.tsx">
            <div className="flex items-center mb-4" data-unique-id="491ed50e-6e2d-445e-9b53-c0d88f040271" data-file-name="app/dashboard/dashboard-content.tsx">
              <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center mr-3 overflow-hidden" data-unique-id="c8d998f9-1ebe-493d-87fd-d6a56370bb11" data-file-name="app/dashboard/dashboard-content.tsx">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" className="h-full w-full object-cover" data-unique-id="6fa59946-a1e7-4ba2-9763-e306050e34ce" data-file-name="app/dashboard/dashboard-content.tsx" />
              </div>
              <div data-unique-id="e86cee64-aeb2-4e5c-a6a3-077be0c4c966" data-file-name="app/dashboard/dashboard-content.tsx">
                <h3 className="font-semibold" data-unique-id="7ebe1033-defe-4fef-9ab1-a64d9878252d" data-file-name="app/dashboard/dashboard-content.tsx"><span className="editable-text" data-unique-id="5031e38b-7ac4-4822-a6a0-02b7525ccb0f" data-file-name="app/dashboard/dashboard-content.tsx">Alex Johnson</span></h3>
                <div className="flex items-center text-sm text-muted-foreground" data-unique-id="66b4cd7b-d701-4012-9384-b02b1872e8a6" data-file-name="app/dashboard/dashboard-content.tsx">
                  <Star className="h-3.5 w-3.5 fill-chart-4 text-chart-4 mr-1" />
                  <span data-unique-id="88cfd131-2447-4023-9f07-efbdf3ddb80e" data-file-name="app/dashboard/dashboard-content.tsx"><span className="editable-text" data-unique-id="47a5d0ba-3610-4ba4-940f-9f1b6b910b56" data-file-name="app/dashboard/dashboard-content.tsx">4.8/5.0 (24 reviews)</span></span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4" data-unique-id="2a58a5b2-2ea8-437e-b532-ac953c201540" data-file-name="app/dashboard/dashboard-content.tsx">
              <Link href="/profile" data-unique-id="bddec6e0-97d0-4e84-b272-5384f45756bd" data-file-name="app/dashboard/dashboard-content.tsx">
                <Button variant="outline" className="w-full justify-between" data-unique-id="b3e27e02-2838-44a5-a0ca-1b42d74f82eb" data-file-name="app/dashboard/dashboard-content.tsx">
                  <div className="flex items-center" data-unique-id="ffe4372d-3077-4fbb-afc6-1c623ffd34dd" data-file-name="app/dashboard/dashboard-content.tsx">
                    <User className="h-4 w-4 mr-2" /><span className="editable-text" data-unique-id="76778b08-2132-41d5-8d80-c97dcb63e5c7" data-file-name="app/dashboard/dashboard-content.tsx">
                    Edit Profile
                  </span></div>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
              
              <Link href="/account/settings" data-unique-id="65ed89c7-2e06-4362-8485-92c8e79cf94b" data-file-name="app/dashboard/dashboard-content.tsx">
                <Button variant="outline" className="w-full justify-between" data-unique-id="52bc31d0-5ac6-4630-ae77-1dd862aa84c0" data-file-name="app/dashboard/dashboard-content.tsx">
                  <div className="flex items-center" data-unique-id="8b918190-d872-4771-a436-0358fd674976" data-file-name="app/dashboard/dashboard-content.tsx">
                    <Settings className="h-4 w-4 mr-2" /><span className="editable-text" data-unique-id="5fea2909-31fd-45a2-a986-d8860420bb01" data-file-name="app/dashboard/dashboard-content.tsx">
                    Account Settings
                  </span></div>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-6" data-unique-id="c1b7292c-7c80-4f5e-80d5-63e85ac85d1b" data-file-name="app/dashboard/dashboard-content.tsx">
          <CardContent className="pt-6" data-unique-id="7c3626d6-460a-44cb-9aab-7f2faa0d0768" data-file-name="app/dashboard/dashboard-content.tsx">
            <h3 className="font-semibold mb-4" data-unique-id="09404cc5-4612-4988-9bb7-19a348e390c6" data-file-name="app/dashboard/dashboard-content.tsx"><span className="editable-text" data-unique-id="e264dbd0-1055-4591-8706-718e37047344" data-file-name="app/dashboard/dashboard-content.tsx">Summary</span></h3>
            
            <div className="space-y-3" data-unique-id="8e44e3d6-d1fd-4a56-849f-5c8ed959ef3a" data-file-name="app/dashboard/dashboard-content.tsx">
              <div className="flex justify-between items-center" data-unique-id="ec7eff1e-5592-4a4c-80e8-2b1b7e27e186" data-file-name="app/dashboard/dashboard-content.tsx">
                <div className="flex items-center text-muted-foreground" data-unique-id="f9266cb2-1464-4f0a-931c-77d18158af47" data-file-name="app/dashboard/dashboard-content.tsx">
                  <CreditCard className="h-4 w-4 mr-2" />
                  <span data-unique-id="35232615-dae8-473b-9fc8-2865661e5da3" data-file-name="app/dashboard/dashboard-content.tsx"><span className="editable-text" data-unique-id="db63ac27-132d-499a-8ece-5ab93d3c41c6" data-file-name="app/dashboard/dashboard-content.tsx">Earnings this month</span></span>
                </div>
                <span className="font-semibold" data-unique-id="b63154a9-9933-4c29-a1a1-9bfdc43b8ff1" data-file-name="app/dashboard/dashboard-content.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="acf6452a-20af-4634-a167-84acdc1d3c37" data-file-name="app/dashboard/dashboard-content.tsx">$</span>{450 .toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between items-center" data-unique-id="bc949c1a-0a09-47f7-95df-ead7c3ae6fa9" data-file-name="app/dashboard/dashboard-content.tsx">
                <div className="flex items-center text-muted-foreground" data-unique-id="ed3c9e72-11cd-462f-be65-54d69d4d236f" data-file-name="app/dashboard/dashboard-content.tsx">
                  <Clock className="h-4 w-4 mr-2" />
                  <span data-unique-id="4d79caf5-3266-47ad-9a06-5fa6987456d7" data-file-name="app/dashboard/dashboard-content.tsx"><span className="editable-text" data-unique-id="78618c67-8e6f-449a-9ebe-053034894559" data-file-name="app/dashboard/dashboard-content.tsx">Pending payouts</span></span>
                </div>
                <span className="font-semibold" data-unique-id="221b5465-bb9d-4c15-8b6b-e9ed4eb5f135" data-file-name="app/dashboard/dashboard-content.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="f0fb1a5f-8be6-46f4-86d5-1909824cb669" data-file-name="app/dashboard/dashboard-content.tsx">$</span>{120 .toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between items-center" data-unique-id="4c430f6c-4f28-4747-b81e-98ee5c70125b" data-file-name="app/dashboard/dashboard-content.tsx">
                <div className="flex items-center text-muted-foreground" data-unique-id="8c436fbe-c152-45cf-9beb-a80d48068200" data-file-name="app/dashboard/dashboard-content.tsx">
                  <DollarSign className="h-4 w-4 mr-2" />
                  <span data-unique-id="9ba53d0a-99c0-405e-b618-ca80a287fe6f" data-file-name="app/dashboard/dashboard-content.tsx"><span className="editable-text" data-unique-id="78c7a3ac-62a4-4651-a72a-2f0c0350f8dc" data-file-name="app/dashboard/dashboard-content.tsx">Available for withdrawal</span></span>
                </div>
                <span className="font-semibold" data-unique-id="7dd090e1-e7e0-42b9-83a5-5eb810259336" data-file-name="app/dashboard/dashboard-content.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="fed0ef3d-0325-46c6-a7ff-eb7561fd64a8" data-file-name="app/dashboard/dashboard-content.tsx">$</span>{330 .toFixed(2)}</span>
              </div>
            </div>
            
            <div className="mt-4" data-unique-id="bea9745b-b5db-4e72-82cd-9e9093deefe2" data-file-name="app/dashboard/dashboard-content.tsx">
              <Button variant="outline" size="sm" className="w-full" data-unique-id="fa591b9b-139e-4a3e-a057-c407ca63dc77" data-file-name="app/dashboard/dashboard-content.tsx"><span className="editable-text" data-unique-id="719fad9c-7863-4f83-bf7d-b8f5b0a331c4" data-file-name="app/dashboard/dashboard-content.tsx">Withdraw Funds</span></Button>
            </div>
          </CardContent>
        </Card>
        
        <Card data-unique-id="1bd0b61d-48a8-4b54-8219-dea195c01dc2" data-file-name="app/dashboard/dashboard-content.tsx">
          <CardContent className="pt-6" data-unique-id="5d60f38b-9f71-4cd5-8574-a5fb242af854" data-file-name="app/dashboard/dashboard-content.tsx" data-dynamic-text="true">
            <div className="flex items-center justify-between mb-4" data-unique-id="4eb39dc6-0bae-433a-8e2a-48083e6b4b71" data-file-name="app/dashboard/dashboard-content.tsx">
              <h3 className="font-semibold" data-unique-id="7d949178-0412-43b9-b90e-43bd5c0c0cb6" data-file-name="app/dashboard/dashboard-content.tsx"><span className="editable-text" data-unique-id="b880a2db-44ff-4a6a-8268-a785d72990ea" data-file-name="app/dashboard/dashboard-content.tsx">Recent Notifications</span></h3>
              <Bell className="h-4 w-4 text-muted-foreground" />
            </div>
            
            {[{
            message: 'Your bounty "Design a Modern Logo" received a new application',
            time: '2 hours ago'
          }, {
            message: 'Payment received for "Develop Landing Page"',
            time: '1 day ago'
          }, {
            message: 'Your application was accepted',
            time: '3 days ago'
          }].map((notification, index) => <div key={index} className={`py-3 ${index !== 2 ? 'border-b border-border' : ''}`} data-unique-id="b3992496-4afa-4a0f-b85c-02d0c661af52" data-file-name="app/dashboard/dashboard-content.tsx">
                <p className="text-sm" data-unique-id="ae95cc00-a98a-44d7-8ad0-c86f17b1c8cd" data-file-name="app/dashboard/dashboard-content.tsx" data-dynamic-text="true">{notification.message}</p>
                <span className="text-xs text-muted-foreground" data-unique-id="e2839cf2-4e66-44ce-aeb1-55dca5f731db" data-file-name="app/dashboard/dashboard-content.tsx" data-dynamic-text="true">{notification.time}</span>
              </div>)}
            
            <div className="mt-4 text-center" data-unique-id="782e71a4-f5f3-41ec-9e6f-bc0579c5f78c" data-file-name="app/dashboard/dashboard-content.tsx">
              <Link href="/notifications" className="text-sm text-chart-1 hover:underline" data-unique-id="67618926-43e4-49a7-b27e-87410a597e8e" data-file-name="app/dashboard/dashboard-content.tsx"><span className="editable-text" data-unique-id="c8593dd1-8830-43dc-be0e-498227ec197d" data-file-name="app/dashboard/dashboard-content.tsx">
                View All Notifications
              </span></Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
}