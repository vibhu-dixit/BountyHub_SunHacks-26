import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Suspense } from 'react';
import TestimonialsPage from './testimonials-page';
export const metadata = {
  title: 'Testimonials | BountyHub',
  description: 'Read what our users say about their experience with BountyHub.'
};
export default function TestimonialsPageContainer() {
  return <div className="min-h-screen flex flex-col" data-unique-id="cfe991d3-ae5c-4a1e-ad04-c3f7109f9ba0" data-file-name="app/testimonials/page.tsx">
      <Navbar />
      <main className="flex-grow" data-unique-id="b4c96918-07ab-46d9-8687-1e9dab9164a4" data-file-name="app/testimonials/page.tsx">
        <div className="container mx-auto px-4 py-12" data-unique-id="1e7d24da-33ca-4a5a-a673-127f0a76060e" data-file-name="app/testimonials/page.tsx">
          <div className="text-center mb-12" data-unique-id="c3e9a750-e5fb-4ef0-b32f-bd5303d65afd" data-file-name="app/testimonials/page.tsx">
            <h1 className="text-4xl font-bold mb-4" data-unique-id="df294901-46cb-427a-b16d-00a5f13e449c" data-file-name="app/testimonials/page.tsx"><span className="editable-text" data-unique-id="e52d2741-7106-498c-8b39-ce9b749b61f7" data-file-name="app/testimonials/page.tsx">Testimonials</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-unique-id="7b5ab9ba-c251-4b22-830a-83d69ad469da" data-file-name="app/testimonials/page.tsx"><span className="editable-text" data-unique-id="41131a62-3b06-4627-b2df-58402d49e7be" data-file-name="app/testimonials/page.tsx">
              Read what our community has to say about their BountyHub experience
            </span></p>
          </div>
          
          <Suspense fallback={<div data-unique-id="6d0adfb1-3e7a-4342-b6d7-d256ce70d085" data-file-name="app/testimonials/page.tsx"><span className="editable-text" data-unique-id="8e3a38ec-10fc-4885-8d86-1666d0baf586" data-file-name="app/testimonials/page.tsx">Loading testimonials...</span></div>}>
            <TestimonialsPage />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>;
}