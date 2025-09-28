import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Suspense } from 'react';
import CareersContent from './careers-content';
export const metadata = {
  title: 'Careers | BountyHub',
  description: 'Join our team at BountyHub and help revolutionize how work gets done.'
};
export default function CareersPage() {
  return <div className="min-h-screen flex flex-col" data-unique-id="633e188c-a487-42f5-bc1f-0b5d13cbe8b2" data-file-name="app/careers/page.tsx">
      <Navbar />
      <main className="flex-grow" data-unique-id="cf859dec-ae37-4f55-959e-0aa096ccbb92" data-file-name="app/careers/page.tsx">
        <Suspense fallback={<div data-unique-id="af1999fe-d208-43b7-afff-15354ce46c47" data-file-name="app/careers/page.tsx"><span className="editable-text" data-unique-id="e960d8a0-78d8-4d56-bc40-42a048882c3e" data-file-name="app/careers/page.tsx">Loading careers page...</span></div>}>
          <CareersContent />
        </Suspense>
      </main>
      <Footer />
    </div>;
}