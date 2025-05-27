import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Suspense } from 'react';
import ProfileContent from './profile-content';
export const metadata = {
  title: 'Your Profile | BountyHub',
  description: 'Manage your profile, skills, and portfolio on BountyHub.'
};
export default function ProfilePage() {
  return <div className="min-h-screen flex flex-col" data-unique-id="5bf5548b-8c0e-4ff3-b0f9-ae7abf04e847" data-file-name="app/profile/page.tsx">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8" data-unique-id="b054bb6d-d92d-4ea6-9956-1e508c0c80c2" data-file-name="app/profile/page.tsx">
        <div className="mb-8" data-unique-id="b6723e0b-57b0-41c0-a882-0e76a28e07c2" data-file-name="app/profile/page.tsx">
          <h1 className="text-3xl font-bold mb-2" data-unique-id="d7d5c643-96a9-42c0-9a95-5fa0979e7774" data-file-name="app/profile/page.tsx"><span className="editable-text" data-unique-id="d219de0b-1fe2-422d-bb73-3765824f1db3" data-file-name="app/profile/page.tsx">Your Profile</span></h1>
          <p className="text-muted-foreground" data-unique-id="5f16f349-b50a-458e-9957-157c40f2d30d" data-file-name="app/profile/page.tsx"><span className="editable-text" data-unique-id="4b9978fa-fffb-4c8d-9834-502a7368f9d6" data-file-name="app/profile/page.tsx">
            Manage your professional information and showcase your skills
          </span></p>
        </div>
        
        <Suspense fallback={<div data-unique-id="f337e59c-94ab-4da6-bf58-f454dcd9fc7c" data-file-name="app/profile/page.tsx"><span className="editable-text" data-unique-id="5bf72ba3-9599-4983-ac20-e89e93ed4475" data-file-name="app/profile/page.tsx">Loading profile...</span></div>}>
          <ProfileContent />
        </Suspense>
      </main>
      <Footer />
    </div>;
}