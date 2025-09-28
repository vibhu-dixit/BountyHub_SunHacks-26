import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Suspense } from 'react';
import ExploreContent from './explore-content';
export const metadata = {
  title: 'Explore Bounties | BountyHub',
  description: 'Browse and filter available bounties across various categories.'
};
export default function ExplorePage() {
  return <div className="min-h-screen flex flex-col" data-unique-id="6e98e6a1-783b-4937-958a-7d0ab5d06f1d" data-file-name="app/explore/page.tsx">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8" data-unique-id="8081cf75-8995-45e2-9607-320033503fcd" data-file-name="app/explore/page.tsx">
        <div className="mb-8" data-unique-id="eecdb293-3bdb-435a-bda9-2654d9d172b9" data-file-name="app/explore/page.tsx">
          <h1 className="text-3xl font-bold mb-2" data-unique-id="529d8096-7a2f-4b2b-9aa2-4cdaca849801" data-file-name="app/explore/page.tsx"><span className="editable-text" data-unique-id="79e7a023-b3f3-46c6-94b2-3f3e20acac3e" data-file-name="app/explore/page.tsx">Explore Bounties</span></h1>
          <p className="text-muted-foreground" data-unique-id="d8d0b046-2c90-4a6a-9d36-d09d69af50be" data-file-name="app/explore/page.tsx"><span className="editable-text" data-unique-id="b9a87344-c20f-43cc-930c-a11b018c020f" data-file-name="app/explore/page.tsx">
            Browse through available opportunities and find the perfect match for your skills
          </span></p>
        </div>
        
        <Suspense fallback={<div data-unique-id="b1ed2db7-ca5c-43a2-8187-ac5c5e9c558b" data-file-name="app/explore/page.tsx"><span className="editable-text" data-unique-id="4623d61d-f3bc-419a-a201-367acb3d3764" data-file-name="app/explore/page.tsx">Loading bounties...</span></div>}>
          <ExploreContent />
        </Suspense>
      </main>
      <Footer />
    </div>;
}