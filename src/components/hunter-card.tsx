'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Hunter } from '@/lib/hunter-store';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Star } from 'lucide-react';
import Link from 'next/link';
interface HunterCardProps {
  hunter: Hunter;
}
export default function HunterCard({
  hunter
}: HunterCardProps) {
  return <motion.div whileHover={{
    y: -5
  }} transition={{
    type: "spring",
    stiffness: 300
  }} data-unique-id="e423f470-4298-41de-99cd-443a9c0f2269" data-file-name="components/hunter-card.tsx">
      <Link href={`/hunters/${hunter.id}`} data-unique-id="76ae3f7d-6aea-4551-b52b-febb0f2dcd68" data-file-name="components/hunter-card.tsx">
        <div className="border border-border rounded-lg p-6 bg-card hover:shadow-md transition-shadow h-full flex flex-col" data-unique-id="0170769e-a9c7-4cee-97e7-9b523c83463f" data-file-name="components/hunter-card.tsx">
          <div className="flex items-center mb-4" data-unique-id="cda501d8-a529-45ec-a846-8c3d87360bd6" data-file-name="components/hunter-card.tsx">
            <div className="h-16 w-16 rounded-full overflow-hidden mr-4" data-unique-id="4771a5bb-e5cd-49fd-81d0-8ff53c822392" data-file-name="components/hunter-card.tsx">
              <img src={hunter.avatar} alt={hunter.name} className="h-full w-full object-cover" data-unique-id="624fa243-4226-4361-b841-2c2cae2fb3da" data-file-name="components/hunter-card.tsx" />
            </div>
            <div data-unique-id="00e91ad8-28e6-4ead-9010-64d6c7d79ba1" data-file-name="components/hunter-card.tsx">
              <h3 className="font-semibold" data-unique-id="5e3b5ebb-fc51-4311-858e-c4bc1a5c9390" data-file-name="components/hunter-card.tsx" data-dynamic-text="true">{hunter.name}</h3>
              <p className="text-sm text-muted-foreground" data-unique-id="2e0165de-e3fd-4305-9902-c4e2d1325122" data-file-name="components/hunter-card.tsx" data-dynamic-text="true">{hunter.title}</p>
            </div>
          </div>
          
          <div className="flex items-center mb-3" data-unique-id="9ad6239f-2174-4969-91c0-0fdcf7315317" data-file-name="components/hunter-card.tsx">
            <div className="flex items-center text-chart-4" data-unique-id="355961ed-8787-495b-bb43-a35674362efb" data-file-name="components/hunter-card.tsx">
              <Star className="h-4 w-4 fill-chart-4 mr-1" />
              <span className="font-medium" data-unique-id="36b2003d-6887-4816-9e8c-7ac36240d777" data-file-name="components/hunter-card.tsx" data-dynamic-text="true">{hunter.rating.toFixed(1)}</span>
            </div>
            <span className="mx-2 text-muted-foreground" data-unique-id="d838545d-b3a6-4c4e-9bef-d3e704274794" data-file-name="components/hunter-card.tsx"><span className="editable-text" data-unique-id="50befdd7-c7f2-445a-abcd-8388e79ccab6" data-file-name="components/hunter-card.tsx">•</span></span>
            <div className="flex items-center text-muted-foreground text-sm" data-unique-id="3d261d22-c69c-4f0c-99b6-69fb4089236d" data-file-name="components/hunter-card.tsx">
              <Briefcase className="h-3.5 w-3.5 mr-1" />
              <span data-unique-id="e9695c72-9c8c-431f-a065-32b5e5bea516" data-file-name="components/hunter-card.tsx" data-dynamic-text="true">{hunter.completedBounties}<span className="editable-text" data-unique-id="92d6c20d-7485-4d22-84cb-482bbada6ecf" data-file-name="components/hunter-card.tsx"> completed</span></span>
            </div>
          </div>
          
          <div className="flex items-center mb-4 text-sm text-muted-foreground" data-unique-id="b407dd12-2070-442e-a3b2-3bc2bc2fd1f3" data-file-name="components/hunter-card.tsx">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            <span data-unique-id="88074f32-421a-49e0-b559-2cc34fbfb861" data-file-name="components/hunter-card.tsx" data-dynamic-text="true">{hunter.location}</span>
          </div>
          
          <div className="mb-4 flex-grow" data-unique-id="eabf6147-29fb-4ee4-a18d-b8f99f517015" data-file-name="components/hunter-card.tsx">
            <p className="text-sm line-clamp-2" data-unique-id="e73a3758-39ae-45d7-b255-341d71d219e8" data-file-name="components/hunter-card.tsx" data-dynamic-text="true">{hunter.bio}</p>
          </div>
          
          <div className="mb-4" data-unique-id="f7cc16b0-5752-45d3-9069-cbadb5e3225d" data-file-name="components/hunter-card.tsx">
            <div className="flex flex-wrap gap-1" data-unique-id="78385d0f-6c94-4902-9987-02d2c437e05c" data-file-name="components/hunter-card.tsx" data-dynamic-text="true">
              {hunter.skills.slice(0, 3).map((skill, index) => <Badge key={index} variant="secondary" className="text-xs" data-unique-id="59ce64a9-0297-4044-853e-6ac67fc1eafc" data-file-name="components/hunter-card.tsx" data-dynamic-text="true">
                  {skill}
                </Badge>)}
              {hunter.skills.length > 3 && <Badge variant="outline" className="text-xs" data-unique-id="6b2a2e07-8ece-4c83-af15-066fcbdf6f6d" data-file-name="components/hunter-card.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="bc5de4e8-f677-406d-93fd-eff7c6e0aff4" data-file-name="components/hunter-card.tsx">
                  +</span>{hunter.skills.length - 3}<span className="editable-text" data-unique-id="4492bd8f-e276-49e9-9455-9626111e3a10" data-file-name="components/hunter-card.tsx"> more
                </span></Badge>}
            </div>
          </div>
          
          <div className="mt-auto pt-3 border-t border-border flex justify-between items-center" data-unique-id="b4ca8a21-8c9a-4bee-8785-f4ac1852bc1c" data-file-name="components/hunter-card.tsx">
            <span className="font-semibold text-primary" data-unique-id="b4746a4b-e733-4352-b723-fcee39ee2fa0" data-file-name="components/hunter-card.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="7d09a334-e5ad-49f1-a7f0-bafdf626e548" data-file-name="components/hunter-card.tsx">$</span>{hunter.hourlyRate}<span className="editable-text" data-unique-id="16815505-572d-4f0c-ad4c-43fc0b6e8e41" data-file-name="components/hunter-card.tsx">/hr</span></span>
            <Button variant="outline" size="sm" data-unique-id="9ce20e2e-b61b-4435-ab76-7c99e1c385fe" data-file-name="components/hunter-card.tsx"><span className="editable-text" data-unique-id="985568f8-d109-4771-a726-47a1c1f344a8" data-file-name="components/hunter-card.tsx">View Profile</span></Button>
          </div>
        </div>
      </Link>
    </motion.div>;
}