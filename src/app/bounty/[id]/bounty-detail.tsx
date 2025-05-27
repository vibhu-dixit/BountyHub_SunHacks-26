'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import useBountyStore, { BountyStatus } from '@/lib/store';
import { formatDistanceToNow } from 'date-fns';
import { AlertTriangle, Calendar, Clock, DollarSign, Share2, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
interface BountyDetailProps {
  id: string;
}
const statusColors: Record<BountyStatus, string> = {
  'open': 'bg-chart-2/10 text-chart-2 border-chart-2/30',
  'in-progress': 'bg-chart-4/10 text-chart-4 border-chart-4/30',
  'completed': 'bg-chart-3/10 text-chart-3 border-chart-3/30',
  'cancelled': 'bg-destructive/10 text-destructive border-destructive/30'
};
export default function BountyDetail({
  id
}: BountyDetailProps) {
  const {
    bounties,
    users,
    getBounty,
    updateBountyStatus
  } = useBountyStore();
  const router = useRouter();
  const [bounty, setBounty] = useState(getBounty(id));
  const [poster, setPoster] = useState(users.find(u => u.id === bounty?.postedBy));
  const [hunter, setHunter] = useState(bounty?.assignedTo ? users.find(u => u.id === bounty.assignedTo) : undefined);
  const [showApplyConfirmation, setShowApplyConfirmation] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  useEffect(() => {
    const currentBounty = getBounty(id);
    if (!currentBounty) {
      router.push('/explore');
      return;
    }
    setBounty(currentBounty);
    setPoster(users.find(u => u.id === currentBounty.postedBy));
    setHunter(currentBounty.assignedTo ? users.find(u => u.id === currentBounty.assignedTo) : undefined);
  }, [id, getBounty, users, router, bounties]);
  if (!bounty || !poster) {
    return <div className="flex flex-col items-center justify-center py-16" data-unique-id="3229779f-fc7d-4728-8448-12c2b903b30a" data-file-name="app/bounty/[id]/bounty-detail.tsx">
        <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
        <h2 className="text-2xl font-bold mb-2" data-unique-id="b3bb7624-6740-465b-a869-6a756887e32f" data-file-name="app/bounty/[id]/bounty-detail.tsx"><span className="editable-text" data-unique-id="febce985-9f6b-4614-b271-18802074f685" data-file-name="app/bounty/[id]/bounty-detail.tsx">Bounty Not Found</span></h2>
        <p className="text-muted-foreground mb-8" data-unique-id="896f6ccb-7b56-4c03-a4fd-4e3e1f2456a5" data-file-name="app/bounty/[id]/bounty-detail.tsx"><span className="editable-text" data-unique-id="b1098301-4a3e-4896-8c1d-8633ba281d86" data-file-name="app/bounty/[id]/bounty-detail.tsx">
          The bounty you're looking for doesn't exist or has been removed.
        </span></p>
        <Button onClick={() => router.push('/explore')} data-unique-id="fcabd7d0-551f-4a6c-8fb4-3da5d87b236d" data-file-name="app/bounty/[id]/bounty-detail.tsx"><span className="editable-text" data-unique-id="6e95c5a4-4451-4750-804e-7f50099783b9" data-file-name="app/bounty/[id]/bounty-detail.tsx">
          Browse Available Bounties
        </span></Button>
      </div>;
  }
  const timeAgo = formatDistanceToNow(new Date(bounty.postedAt), {
    addSuffix: true
  });
  const daysLeft = Math.ceil((new Date(bounty.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  const isExpired = new Date(bounty.deadline) < new Date();
  const isAvailable = bounty.status === 'open' && !isExpired;
  const handleApply = () => {
    setShowApplyConfirmation(true);
  };
  const confirmApply = () => {
    // In a real app, this would use the current user's ID
    updateBountyStatus(bounty.id, 'in-progress', 'user4');
    setShowApplyConfirmation(false);
    // Update the local state to reflect changes
    setBounty(getBounty(id));
    setHunter(users.find(u => u.id === 'user4'));
  };
  const handleShare = () => {
    setShowShareOptions(!showShareOptions);
  };
  return <div className="max-w-4xl mx-auto" data-unique-id="3076b7b3-81a9-49a2-a84b-cc5cc2d3585e" data-file-name="app/bounty/[id]/bounty-detail.tsx" data-dynamic-text="true">
      {bounty.status !== 'open' && <div className={`mb-6 p-4 rounded-lg ${statusColors[bounty.status]} border`} data-unique-id="9eca3364-9cca-4a27-bcbf-8ca809145a21" data-file-name="app/bounty/[id]/bounty-detail.tsx" data-dynamic-text="true">
          {bounty.status === 'in-progress' && <p className="flex items-center" data-unique-id="c11dd611-bd9c-4d8f-b243-590ca3b3407e" data-file-name="app/bounty/[id]/bounty-detail.tsx" data-dynamic-text="true">
              <Clock className="h-5 w-5 mr-2" /><span className="editable-text" data-unique-id="bdffce42-b977-4875-8038-a6c71212ff25" data-file-name="app/bounty/[id]/bounty-detail.tsx">
              This bounty is currently in progress by </span>{hunter?.name || "a hunter"}<span className="editable-text" data-unique-id="e840d92d-64a7-4435-b996-596979d007c1" data-file-name="app/bounty/[id]/bounty-detail.tsx">.
            </span></p>}
          {bounty.status === 'completed' && <p className="flex items-center" data-unique-id="1da5fad4-7dae-4d22-85f6-6dcb05b58edd" data-file-name="app/bounty/[id]/bounty-detail.tsx" data-dynamic-text="true">
              <Clock className="h-5 w-5 mr-2" /><span className="editable-text" data-unique-id="5eead0db-f82e-4fb8-8df2-60c3ed116758" data-file-name="app/bounty/[id]/bounty-detail.tsx">
              This bounty was completed </span>{bounty.completedAt ? formatDistanceToNow(new Date(bounty.completedAt), {
          addSuffix: true
        }) : ''}<span className="editable-text" data-unique-id="f5f89f48-45a4-42fd-a442-cf527cd5ff1a" data-file-name="app/bounty/[id]/bounty-detail.tsx">.
            </span></p>}
          {bounty.status === 'cancelled' && <p className="flex items-center" data-unique-id="6d46ca72-2881-4d9f-a60b-9fb6e5abf38d" data-file-name="app/bounty/[id]/bounty-detail.tsx">
              <Clock className="h-5 w-5 mr-2" /><span className="editable-text" data-unique-id="3f5636d1-f6bd-4b66-bb09-7a5aed15678e" data-file-name="app/bounty/[id]/bounty-detail.tsx">
              This bounty has been cancelled by the poster.
            </span></p>}
        </div>}
      
      <div className="bg-card rounded-lg border border-border overflow-hidden" data-unique-id="b336a561-e1e0-4d7f-a30d-2c6c1063a4cf" data-file-name="app/bounty/[id]/bounty-detail.tsx">
        <div className="p-6" data-unique-id="4a5d4c69-9a80-402f-97f3-1945d7319d13" data-file-name="app/bounty/[id]/bounty-detail.tsx" data-dynamic-text="true">
          <div className="flex justify-between items-start mb-6" data-unique-id="abe24cce-4bf0-4565-ab19-3bdbbf3d7735" data-file-name="app/bounty/[id]/bounty-detail.tsx">
            <span className={`px-3 py-1 text-xs font-medium rounded-full border ${statusColors[bounty.status]}`} data-unique-id="3d4b1e3f-d027-400a-a590-4d4056e8b58f" data-file-name="app/bounty/[id]/bounty-detail.tsx" data-dynamic-text="true">
              {bounty.status === 'in-progress' ? 'In Progress' : bounty.status.charAt(0).toUpperCase() + bounty.status.slice(1)}
            </span>
            
            <div className="flex items-center gap-2" data-unique-id="138e7bb2-fdd1-438f-a15f-bf4bbe7a8c67" data-file-name="app/bounty/[id]/bounty-detail.tsx">
              <Button variant="outline" size="sm" onClick={handleShare} className="relative" data-unique-id="c3f9bf56-55b4-440d-a766-d44e7df4137f" data-file-name="app/bounty/[id]/bounty-detail.tsx">
                <Share2 className="h-4 w-4 mr-2" /><span className="editable-text" data-unique-id="2ce28f40-fab1-47fa-a0cd-c57fe1d74d19" data-file-name="app/bounty/[id]/bounty-detail.tsx">
                Share
                
                </span><AnimatePresence>
                  {showShareOptions && <motion.div initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} exit={{
                  opacity: 0,
                  y: 10
                }} className="absolute right-0 top-full mt-2 bg-popover border border-border rounded-md shadow-md p-2 z-10 w-48" data-unique-id="830cfdd3-471c-454b-9279-cdce91fb7155" data-file-name="app/bounty/[id]/bounty-detail.tsx" data-dynamic-text="true">
                      <div className="flex justify-between items-center mb-2 pb-2 border-b border-border" data-unique-id="0c65a0fb-d642-4092-8207-533bf8ccdf01" data-file-name="app/bounty/[id]/bounty-detail.tsx">
                        <span className="text-sm font-medium" data-unique-id="30d92a7b-3f62-4369-b678-cbfd0ff9337d" data-file-name="app/bounty/[id]/bounty-detail.tsx"><span className="editable-text" data-unique-id="3cfea42b-cbc8-4a98-bef4-24acccc559df" data-file-name="app/bounty/[id]/bounty-detail.tsx">Share Bounty</span></span>
                        <button onClick={() => setShowShareOptions(false)} className="text-muted-foreground hover:text-foreground" data-unique-id="58cb075b-2747-41b7-979a-24c80ee3c6d5" data-file-name="app/bounty/[id]/bounty-detail.tsx">
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      {['Twitter', 'Facebook', 'LinkedIn', 'Email', 'Copy Link'].map(option => <button key={option} onClick={() => {
                    // In a real app, implement actual sharing functionality
                    alert(`Share via ${option}`);
                    setShowShareOptions(false);
                  }} className="w-full text-left py-2 px-2 text-sm hover:bg-accent rounded-md flex items-center" data-unique-id="e90ff76d-1b4b-4e55-92d6-7ece797a037b" data-file-name="app/bounty/[id]/bounty-detail.tsx" data-dynamic-text="true">
                          {option}
                        </button>)}
                    </motion.div>}
                </AnimatePresence>
              </Button>
            </div>
          </div>
          
          <h1 className="text-2xl font-bold mb-4" data-unique-id="bd1770b1-2bc8-4c37-9767-c57fadef8a50" data-file-name="app/bounty/[id]/bounty-detail.tsx" data-dynamic-text="true">{bounty.title}</h1>
          
          <div className="flex flex-wrap gap-6 mb-6" data-unique-id="4b2f5f98-9a0f-4526-86f9-fe75f082a413" data-file-name="app/bounty/[id]/bounty-detail.tsx">
            <div className="flex items-center" data-unique-id="7571b9ee-d0d1-410c-ba58-b571a338ed19" data-file-name="app/bounty/[id]/bounty-detail.tsx">
              <DollarSign className="h-5 w-5 text-chart-2 mr-1" />
              <span className="font-semibold" data-unique-id="4edebad8-5609-4ecd-9f0e-be755ea37a3c" data-file-name="app/bounty/[id]/bounty-detail.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="54b1821f-6274-4101-9763-4771b0528130" data-file-name="app/bounty/[id]/bounty-detail.tsx">$</span>{bounty.budget}</span>
            </div>
            
            <div className="flex items-center" data-unique-id="f4f466ff-76cb-4516-a2f6-d42f5f34fb6e" data-file-name="app/bounty/[id]/bounty-detail.tsx">
              <Clock className="h-5 w-5 mr-1" />
              <span data-unique-id="46088610-5a0d-4526-adb4-5aa8c8af8fa0" data-file-name="app/bounty/[id]/bounty-detail.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="a6159317-b566-4111-918a-a548258aecaf" data-file-name="app/bounty/[id]/bounty-detail.tsx">Posted </span>{timeAgo}</span>
            </div>
            
            <div className="flex items-center" data-unique-id="1df6f6cf-dd26-423c-8bf0-5e16ed52d7b8" data-file-name="app/bounty/[id]/bounty-detail.tsx">
              <Calendar className="h-5 w-5 mr-1" data-unique-id="1409e67e-b03f-4e57-a7bc-36d7a44cbfe5" data-file-name="app/bounty/[id]/bounty-detail.tsx" />
              <span className={daysLeft <= 3 && !isExpired ? "text-chart-4" : ""} data-unique-id="317adf65-c160-485c-a151-a709b5c4e5f6" data-file-name="app/bounty/[id]/bounty-detail.tsx" data-dynamic-text="true">
                {isExpired ? "Deadline passed" : `${daysLeft} day${daysLeft !== 1 ? 's' : ''} left`}
              </span>
            </div>
            
            <div className="flex items-center" data-unique-id="401e7a43-8320-4cb1-a25f-e1748c06833d" data-file-name="app/bounty/[id]/bounty-detail.tsx">
              <User className="h-5 w-5 mr-1" />
              <span data-unique-id="15054032-027e-4c6d-b368-d01b22352ec2" data-file-name="app/bounty/[id]/bounty-detail.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="d88a113c-774c-4439-b1be-0e32f3782e33" data-file-name="app/bounty/[id]/bounty-detail.tsx">Posted by </span>{poster.name}</span>
            </div>
          </div>
          
          <div className="mb-6" data-unique-id="06309b34-8e39-451e-8724-70ed6e595682" data-file-name="app/bounty/[id]/bounty-detail.tsx">
            <h2 className="text-lg font-semibold mb-2" data-unique-id="186499dd-0f40-441c-84c6-8ce75af68aae" data-file-name="app/bounty/[id]/bounty-detail.tsx"><span className="editable-text" data-unique-id="f912c627-b96d-45a6-b061-2da88b095dd4" data-file-name="app/bounty/[id]/bounty-detail.tsx">Description</span></h2>
            <p className="whitespace-pre-line" data-unique-id="b6ecae5b-868f-401f-ab13-6276dcabe41f" data-file-name="app/bounty/[id]/bounty-detail.tsx" data-dynamic-text="true">{bounty.description}</p>
          </div>
          
          <div className="mb-6" data-unique-id="7b96a9d8-c597-4805-9762-ab466c9f5900" data-file-name="app/bounty/[id]/bounty-detail.tsx">
            <h2 className="text-lg font-semibold mb-2" data-unique-id="140ebf0f-3d6a-47ad-89a1-982f089bf805" data-file-name="app/bounty/[id]/bounty-detail.tsx"><span className="editable-text" data-unique-id="45e94514-ec94-47c0-b3fc-2f8007784703" data-file-name="app/bounty/[id]/bounty-detail.tsx">Required Skills</span></h2>
            <div className="flex flex-wrap gap-2" data-unique-id="8dc0b41f-6a9b-46a6-954d-a32a6ab44e5f" data-file-name="app/bounty/[id]/bounty-detail.tsx" data-dynamic-text="true">
              {bounty.skills.map(skill => <Badge key={skill} variant="secondary" className="px-3 py-1" data-unique-id="2e9d39a9-d4c4-4ce5-88cd-34e8bff954db" data-file-name="app/bounty/[id]/bounty-detail.tsx" data-dynamic-text="true">
                  {skill}
                </Badge>)}
            </div>
          </div>
          
          {isAvailable && <div className="border-t border-border pt-6" data-unique-id="a969f129-8496-4881-a14a-8aa19abef05c" data-file-name="app/bounty/[id]/bounty-detail.tsx">
              <Button size="lg" onClick={handleApply} data-unique-id="0581d9ab-8693-42c1-83f0-028f4bb0e89c" data-file-name="app/bounty/[id]/bounty-detail.tsx"><span className="editable-text" data-unique-id="ffac7796-a540-4705-8f17-aaccd25e12a7" data-file-name="app/bounty/[id]/bounty-detail.tsx">
                Apply for this Bounty
              </span></Button>
              
              <p className="mt-3 text-sm text-muted-foreground" data-unique-id="789f09c6-77d3-4f69-94f8-aba3a6e83733" data-file-name="app/bounty/[id]/bounty-detail.tsx"><span className="editable-text" data-unique-id="cea5ee03-9ff2-498b-9335-2d4585b6d776" data-file-name="app/bounty/[id]/bounty-detail.tsx">
                By applying, you agree to complete this task as described within the deadline.
              </span></p>
            </div>}
        </div>
      </div>
      
      {/* Apply Confirmation Modal */}
      <AnimatePresence>
        {showApplyConfirmation && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 bg-background/80 flex items-center justify-center z-50 p-4" data-unique-id="26df21f0-b228-40b4-96b8-0eb6a154ea8f" data-file-name="app/bounty/[id]/bounty-detail.tsx">
            <motion.div initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} exit={{
          y: 20,
          opacity: 0
        }} className="bg-card p-6 rounded-lg border border-border shadow-lg max-w-md w-full" data-unique-id="4b6e5f79-6723-4785-a6af-6de216cd0620" data-file-name="app/bounty/[id]/bounty-detail.tsx">
              <h3 className="text-xl font-bold mb-4" data-unique-id="5ce08f71-e25e-48f2-b4ea-bfa897ce50ed" data-file-name="app/bounty/[id]/bounty-detail.tsx"><span className="editable-text" data-unique-id="5cc206ed-c751-44b5-95e7-cc9b64d2d320" data-file-name="app/bounty/[id]/bounty-detail.tsx">Confirm Application</span></h3>
              <p className="text-muted-foreground mb-6" data-unique-id="266c447a-307e-4243-9ed5-b46a577d951f" data-file-name="app/bounty/[id]/bounty-detail.tsx"><span className="editable-text" data-unique-id="39fab005-ad8d-48c6-8943-885ac328d748" data-file-name="app/bounty/[id]/bounty-detail.tsx">
                Are you sure you want to apply for this bounty? Once accepted, you'll be responsible for completing the task on time.
              </span></p>
              <div className="flex justify-end gap-3" data-unique-id="7675df45-cbba-4048-ad4d-33843b4cc868" data-file-name="app/bounty/[id]/bounty-detail.tsx">
                <Button variant="outline" onClick={() => setShowApplyConfirmation(false)} data-unique-id="3b63c595-266c-4eee-ae18-e4f45c4a8c81" data-file-name="app/bounty/[id]/bounty-detail.tsx"><span className="editable-text" data-unique-id="537430bf-f72b-49ae-84f9-d3f9410b6b49" data-file-name="app/bounty/[id]/bounty-detail.tsx">
                  Cancel
                </span></Button>
                <Button onClick={confirmApply} data-unique-id="7f648f60-cd99-4d43-9368-77b10c9dffa1" data-file-name="app/bounty/[id]/bounty-detail.tsx"><span className="editable-text" data-unique-id="5423c213-906f-4e0d-acb8-6b8d46e76e23" data-file-name="app/bounty/[id]/bounty-detail.tsx">
                  Confirm Application
                </span></Button>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </div>;
}