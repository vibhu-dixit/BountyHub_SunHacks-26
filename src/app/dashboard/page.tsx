import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Suspense } from 'react';
import DashboardContent from './dashboard-content';
export const metadata = {
  title: 'Dashboard | BountyHub',
  description: 'Manage your bounties and applications in one place.'
};
export default function DashboardPage() {
  return <div className="min-h-screen flex flex-col" data-unique-id="b2a5de3c-ff88-459a-b9bb-743e60f3a406" data-file-name="app/dashboard/page.tsx">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8" data-unique-id="16c70825-b763-4ece-8924-86890f7d04e9" data-file-name="app/dashboard/page.tsx">
        <div className="mb-8" data-unique-id="7c5e8935-c5f9-4675-8a1a-90f882b6b6dd" data-file-name="app/dashboard/page.tsx">
          <h1 className="text-3xl font-bold mb-2" data-unique-id="053c0bf4-e9bf-402e-8236-40c6b80cfaf1" data-file-name="app/dashboard/page.tsx"><span className="editable-text" data-unique-id="f073cd46-24f2-40a5-8f9e-bc7aec25416d" data-file-name="app/dashboard/page.tsx">Your Dashboard</span></h1>
          <p className="text-muted-foreground" data-unique-id="7676fd51-5d99-4684-9afe-3ea8fd0e4023" data-file-name="app/dashboard/page.tsx"><span className="editable-text" data-unique-id="a7ee312a-674b-4620-9011-58d6358712ce" data-file-name="app/dashboard/page.tsx">
            Manage your bounties, applications, and account in one place
          </span></p>
        </div>
        
        <Suspense fallback={<div data-unique-id="d26d5f4c-9d26-42b5-ade7-a8ec79b9af66" data-file-name="app/dashboard/page.tsx"><span className="editable-text" data-unique-id="37dff68d-9edc-4300-8756-3c9d01e4b544" data-file-name="app/dashboard/page.tsx">Loading dashboard...</span></div>}>
          <DashboardContent />
        </Suspense>
      </main>
      <Footer />
    </div>;
}