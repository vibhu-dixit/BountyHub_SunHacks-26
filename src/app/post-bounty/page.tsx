import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Suspense } from 'react';
import BountyForm from './bounty-form';
export const metadata = {
  title: 'Post a Bounty | BountyHub',
  description: 'Create a new bounty for your project needs and find the perfect talent.'
};
export default function PostBountyPage() {
  return <div className="min-h-screen flex flex-col" data-unique-id="919d51e1-69ca-4a60-b234-263ab86878e4" data-file-name="app/post-bounty/page.tsx">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8" data-unique-id="73588362-21c7-43bf-80f4-21712c21e331" data-file-name="app/post-bounty/page.tsx">
        <div className="max-w-2xl mx-auto" data-unique-id="48ff6254-8b96-456a-ba69-4e0c5bfbcb6b" data-file-name="app/post-bounty/page.tsx">
          <div className="mb-8" data-unique-id="65aac475-a85a-4bba-b36c-53f83a4144ff" data-file-name="app/post-bounty/page.tsx">
            <h1 className="text-3xl font-bold mb-2" data-unique-id="3b504c1d-15a9-4df4-ae96-9dc06f693e8d" data-file-name="app/post-bounty/page.tsx"><span className="editable-text" data-unique-id="7c7b9c98-a121-4fb7-8e3f-4e8c97ecc5c1" data-file-name="app/post-bounty/page.tsx">Post a Bounty</span></h1>
            <p className="text-muted-foreground" data-unique-id="391759c1-837b-4640-a73c-2982feaf5ee7" data-file-name="app/post-bounty/page.tsx"><span className="editable-text" data-unique-id="85e054cf-7896-42fe-a5bf-99e74fb90dbc" data-file-name="app/post-bounty/page.tsx">
              Describe your requirements in detail to attract the right hunters
            </span></p>
          </div>
          
          <Suspense fallback={<div data-unique-id="11d9fd30-d1ac-4085-843e-1f6c63d56d7a" data-file-name="app/post-bounty/page.tsx"><span className="editable-text" data-unique-id="1d2ace54-4bf9-4c7c-8036-5cca3af65d2f" data-file-name="app/post-bounty/page.tsx">Loading form...</span></div>}>
            <BountyForm />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>;
}