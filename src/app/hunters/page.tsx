import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Suspense } from 'react';
import HuntersContent from './hunters-content';
export const metadata = {
  title: 'Explore Bounty Hunters | BountyHub',
  description: 'Find skilled professionals for your projects on BountyHub.'
};
export default function HuntersPage() {
  return <div className="min-h-screen flex flex-col" data-unique-id="2534604f-d6ea-449e-9718-aad974275402" data-file-name="app/hunters/page.tsx">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8" data-unique-id="0d3a6797-39e8-4e07-a8dc-7ef0bf6e5d11" data-file-name="app/hunters/page.tsx">
        <div className="mb-8" data-unique-id="a13c7cc9-5f09-4d0c-9834-249919f4274c" data-file-name="app/hunters/page.tsx">
          <h1 className="text-3xl font-bold mb-2" data-unique-id="3b810f80-e002-448f-be1c-09f3cbbb9181" data-file-name="app/hunters/page.tsx"><span className="editable-text" data-unique-id="f1bcca02-dca6-448e-9d48-f82a9798d891" data-file-name="app/hunters/page.tsx">Explore Bounty Hunters</span></h1>
          <p className="text-muted-foreground" data-unique-id="46a46cda-e79a-45d6-93f6-db190dba8b68" data-file-name="app/hunters/page.tsx"><span className="editable-text" data-unique-id="fc905ea5-3c8d-46c9-b356-3d8405131a78" data-file-name="app/hunters/page.tsx">
            Find skilled professionals for your projects based on expertise, ratings, and experience
          </span></p>
        </div>
        
        <Suspense fallback={<div data-unique-id="3b0d8fc5-78c9-4f9b-80d9-8c263d2427f6" data-file-name="app/hunters/page.tsx"><span className="editable-text" data-unique-id="37eea150-69bf-4429-b6a3-379a4d83d62a" data-file-name="app/hunters/page.tsx">Loading hunters...</span></div>}>
          <HuntersContent />
        </Suspense>
      </main>
      <Footer />
    </div>;
}