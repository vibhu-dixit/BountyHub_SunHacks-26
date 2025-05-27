'use client';

import { Badge } from '@/components/ui/badge';
import { Bounty } from '@/lib/store';
import { formatDistanceToNow } from 'date-fns';
import { Calendar, Clock, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
interface BountyCardProps {
  bounty: Bounty;
}
const statusVariants = {
  'open': 'bg-chart-2/10 text-chart-2 border-chart-2/30',
  'in-progress': 'bg-chart-4/10 text-chart-4 border-chart-4/30',
  'completed': 'bg-chart-3/10 text-chart-3 border-chart-3/30',
  'cancelled': 'bg-destructive/10 text-destructive border-destructive/30'
};
const categoryIcons: Record<string, JSX.Element> = {
  design: <span className="text-chart-1" data-unique-id="59f8d2f1-9943-4648-b00a-9c2a03bef554" data-file-name="components/bounty-card.tsx"><span className="editable-text" data-unique-id="2792c2f7-d64b-458b-9e26-69ae7e5c6576" data-file-name="components/bounty-card.tsx">🎨</span></span>,
  development: <span className="text-chart-2" data-unique-id="316d0171-e0ae-4ffc-8c39-9bfd5af8e485" data-file-name="components/bounty-card.tsx"><span className="editable-text" data-unique-id="ef8187dd-9747-4e2a-8a95-a5a07309b3df" data-file-name="components/bounty-card.tsx">💻</span></span>,
  writing: <span className="text-chart-3" data-unique-id="aeda4362-8bc4-458b-aaa3-004711c4d508" data-file-name="components/bounty-card.tsx"><span className="editable-text" data-unique-id="9df92d1f-8ece-491e-82ac-20710d27bcba" data-file-name="components/bounty-card.tsx">✍️</span></span>,
  marketing: <span className="text-chart-4" data-unique-id="08ff22e8-dd02-44f8-bb1a-506232c91c76" data-file-name="components/bounty-card.tsx"><span className="editable-text" data-unique-id="71b24d88-4978-46a5-93b1-ddd2b9b22647" data-file-name="components/bounty-card.tsx">📣</span></span>,
  video: <span className="text-chart-5" data-unique-id="a734c7d4-38f4-454c-a1db-24e02c46b567" data-file-name="components/bounty-card.tsx"><span className="editable-text" data-unique-id="b4e11caa-1088-42fe-9ce7-4f22b8ed2da0" data-file-name="components/bounty-card.tsx">🎬</span></span>,
  audio: <span data-unique-id="e3f56312-e07a-4547-9feb-38bdb863c287" data-file-name="components/bounty-card.tsx"><span className="editable-text" data-unique-id="c33e1d89-d74c-42d4-8a1e-d3599bdd8f34" data-file-name="components/bounty-card.tsx">🎵</span></span>,
  other: <span data-unique-id="71208f21-b9b1-4b6c-9b0f-96e4ae9c6143" data-file-name="components/bounty-card.tsx"><span className="editable-text" data-unique-id="22382539-ca08-4793-8370-ce466ded8655" data-file-name="components/bounty-card.tsx">🔍</span></span>
};
export default function BountyCard({
  bounty
}: BountyCardProps) {
  const timeAgo = formatDistanceToNow(new Date(bounty.postedAt), {
    addSuffix: true
  });
  return <motion.div whileHover={{
    y: -5
  }} transition={{
    type: "spring",
    stiffness: 300
  }} data-unique-id="9f1ce6e8-f752-4482-ba16-b48b34956044" data-file-name="components/bounty-card.tsx">
      <Link href={`/bounty/${bounty.id}`} data-unique-id="15b01169-716d-4509-862f-9636d873d954" data-file-name="components/bounty-card.tsx">
        <div className="border border-border rounded-lg p-6 bg-card hover:shadow-md transition-shadow" data-unique-id="0586e123-c5f2-4514-bee2-29fa6aaee124" data-file-name="components/bounty-card.tsx">
          <div className="flex justify-between items-start mb-4" data-unique-id="3747f77f-77a6-4653-8dc0-0d19c73a1858" data-file-name="components/bounty-card.tsx">
            <div className="flex items-center" data-unique-id="7d9df986-2ea9-49a2-bc16-2779f2f0f892" data-file-name="components/bounty-card.tsx" data-dynamic-text="true">
              {categoryIcons[bounty.category]}
              <span className="text-sm ml-2 text-muted-foreground capitalize" data-unique-id="e99b8165-c3c8-4dfd-aa8e-87e4ef176d02" data-file-name="components/bounty-card.tsx" data-dynamic-text="true">{bounty.category}</span>
            </div>
            <div className={`px-2 py-1 text-xs font-medium rounded-full border ${statusVariants[bounty.status]}`} data-unique-id="ef06a5a0-6a44-47a0-a1f4-7980b36b91bd" data-file-name="components/bounty-card.tsx" data-dynamic-text="true">
              {bounty.status === 'in-progress' ? 'In Progress' : bounty.status.charAt(0).toUpperCase() + bounty.status.slice(1)}
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-2 line-clamp-2" data-unique-id="4506bddc-b6fa-4ed2-8b56-b06688bf971b" data-file-name="components/bounty-card.tsx" data-dynamic-text="true">{bounty.title}</h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-2" data-unique-id="d5bb9198-87e0-47d4-ad72-b7e551278076" data-file-name="components/bounty-card.tsx" data-dynamic-text="true">{bounty.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4" data-unique-id="1262ceaf-60f3-494a-b6e6-5aee91e66036" data-file-name="components/bounty-card.tsx" data-dynamic-text="true">
            {bounty.skills.slice(0, 3).map(skill => <Badge key={skill} variant="secondary" className="text-xs" data-unique-id="ca591c5e-1d63-4546-ab8a-1169b75a0145" data-file-name="components/bounty-card.tsx" data-dynamic-text="true">{skill}</Badge>)}
            {bounty.skills.length > 3 && <Badge variant="outline" className="text-xs" data-unique-id="491764d3-b12d-474a-a854-4b0df9575e30" data-file-name="components/bounty-card.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="2f580d4a-0597-4e6d-bd96-3b34a57b07c0" data-file-name="components/bounty-card.tsx">+</span>{bounty.skills.length - 3}<span className="editable-text" data-unique-id="ea263577-13cc-4c2f-8b9b-a5e8d57e5d51" data-file-name="components/bounty-card.tsx"> more</span></Badge>}
          </div>
          
          <div className="flex justify-between items-center pt-3 border-t border-border" data-unique-id="36b58011-2793-4233-bc74-f1a5a320f3b8" data-file-name="components/bounty-card.tsx">
            <div className="flex items-center" data-unique-id="df18ab5c-5ca1-442a-b506-35ea9125c2c8" data-file-name="components/bounty-card.tsx">
              <DollarSign className="h-4 w-4 text-chart-2 mr-1" />
              <span className="font-semibold" data-unique-id="f0a24042-9a29-4cd4-8915-d8f159bc0000" data-file-name="components/bounty-card.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="a0e9ba80-ae74-4af8-aa00-c913afc5bb17" data-file-name="components/bounty-card.tsx">$</span>{bounty.budget}</span>
            </div>
            
            <div className="flex text-xs text-muted-foreground" data-unique-id="b613262a-8f23-4156-8bbb-c08d100a2ba1" data-file-name="components/bounty-card.tsx">
              <div className="flex items-center mr-4" data-unique-id="381bfb06-02da-4a5e-ae1b-d5b5dd944130" data-file-name="components/bounty-card.tsx">
                <Calendar className="h-3 w-3 mr-1" data-unique-id="6b063bcd-ae9a-4216-a7a3-beb7da36d146" data-file-name="components/bounty-card.tsx" />
                <span data-unique-id="866f8d84-95fa-416b-9d4b-b158b63b948d" data-file-name="components/bounty-card.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="160f4fc9-8e77-4c57-bdb0-c22df0ac28b3" data-file-name="components/bounty-card.tsx">Due </span>{new Date(bounty.deadline).toLocaleDateString()}</span>
              </div>
              
              <div className="flex items-center" data-unique-id="7f6915d7-87b2-43c7-b740-12d256d4b2f9" data-file-name="components/bounty-card.tsx">
                <Clock className="h-3 w-3 mr-1" />
                <span data-unique-id="d0c3a69a-ca10-4cf9-b149-85fcad18c6ba" data-file-name="components/bounty-card.tsx" data-dynamic-text="true">{timeAgo}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>;
}