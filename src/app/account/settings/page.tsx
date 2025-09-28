import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Suspense } from 'react';
import AccountSettingsContent from './settings-content';
export const metadata = {
  title: 'Account Settings | BountyHub',
  description: 'Manage your account settings, notifications, and preferences.'
};
export default function AccountSettingsPage() {
  return <div className="min-h-screen flex flex-col" data-unique-id="1e0fb170-d329-403b-98fd-cab97ff4efc7" data-file-name="app/account/settings/page.tsx">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8" data-unique-id="46788c1b-49c9-42c7-9363-0b62a883d60e" data-file-name="app/account/settings/page.tsx">
        <div className="mb-8" data-unique-id="b40a480e-e531-40d3-a615-76fa6180ec69" data-file-name="app/account/settings/page.tsx">
          <h1 className="text-3xl font-bold mb-2" data-unique-id="e47dd6a3-e7f3-4dc3-9904-6d2ca151636b" data-file-name="app/account/settings/page.tsx"><span className="editable-text" data-unique-id="f4dbc10e-b65f-4f6b-bbb9-6260f22ddb4a" data-file-name="app/account/settings/page.tsx">Account Settings</span></h1>
          <p className="text-muted-foreground" data-unique-id="8ded6463-5939-4878-b6b1-8cd3b688fd45" data-file-name="app/account/settings/page.tsx"><span className="editable-text" data-unique-id="eeee194c-1743-4174-b907-f8a7d2e6ae73" data-file-name="app/account/settings/page.tsx">
            Manage your account preferences, notifications, and security settings
          </span></p>
        </div>
        
        <Suspense fallback={<div data-unique-id="99acc402-d94e-4ffd-9dfa-dbd58e50ee9e" data-file-name="app/account/settings/page.tsx"><span className="editable-text" data-unique-id="7c41020b-7cff-4632-87f6-04d528671a1e" data-file-name="app/account/settings/page.tsx">Loading settings...</span></div>}>
          <AccountSettingsContent />
        </Suspense>
      </main>
      <Footer />
    </div>;
}