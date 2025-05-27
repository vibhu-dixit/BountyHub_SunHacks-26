import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Suspense } from 'react';
import BountyDetail from './bounty-detail';
interface BountyPageProps {
  params: {
    id: string;
  };
}
export default function BountyPage({
  params
}: BountyPageProps) {
  return <div className="min-h-screen flex flex-col" data-unique-id="9136d996-5708-4ec5-bdaf-01c529988272" data-file-name="app/bounty/[id]/page.tsx">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8" data-unique-id="3d8201b4-0c18-4834-801d-8b67b263f3dd" data-file-name="app/bounty/[id]/page.tsx">
        <Suspense fallback={<div data-unique-id="37b217cc-56d1-4e14-b586-330e29e3b26e" data-file-name="app/bounty/[id]/page.tsx"><span className="editable-text" data-unique-id="b9d86d46-0771-40cb-bb3f-f6b2f858f850" data-file-name="app/bounty/[id]/page.tsx">Loading bounty details...</span></div>}>
          <BountyDetail id={params.id} />
        </Suspense>
      </main>
      <Footer />
    </div>;
}