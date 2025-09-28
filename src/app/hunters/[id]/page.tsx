import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Suspense } from 'react';
import HunterDetail from './hunter-detail';
interface HunterPageProps {
  params: {
    id: string;
  };
}
export default function HunterPage({
  params
}: HunterPageProps) {
  return <div className="min-h-screen flex flex-col" data-unique-id="53a2a71b-a9ca-49b0-b387-bae252cfcc7d" data-file-name="app/hunters/[id]/page.tsx">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8" data-unique-id="38307ec1-c75f-4fd4-803e-0f246ddbd7d0" data-file-name="app/hunters/[id]/page.tsx">
        <Suspense fallback={<div data-unique-id="7893cc9b-9bef-4f19-a4c2-48be9a3c3f30" data-file-name="app/hunters/[id]/page.tsx"><span className="editable-text" data-unique-id="e21a4812-1731-41ba-9202-27efcdb67b19" data-file-name="app/hunters/[id]/page.tsx">Loading hunter profile...</span></div>}>
          <HunterDetail id={params.id} />
        </Suspense>
      </main>
      <Footer />
    </div>;
}