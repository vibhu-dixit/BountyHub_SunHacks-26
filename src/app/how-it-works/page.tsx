import Footer from '@/components/footer';
import HowItWorks from '@/components/how-it-works';
import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';
export const metadata = {
  title: 'How It Works | BountyHub',
  description: 'Learn how the BountyHub platform connects clients with talented freelancers.'
};
export default function HowItWorksPage() {
  return <div className="min-h-screen flex flex-col" data-unique-id="329bc8a0-179f-4cc3-9bb7-a149ebb25068" data-file-name="app/how-it-works/page.tsx">
      <Navbar />
      <main className="flex-grow" data-unique-id="948c9014-a182-44a8-914f-7e473441c148" data-file-name="app/how-it-works/page.tsx">
        <div className="container mx-auto px-4 py-12" data-unique-id="a2b74e56-00fc-432b-b8de-69b0596c4a4f" data-file-name="app/how-it-works/page.tsx">
          <div className="text-center mb-16" data-unique-id="40c61b86-593f-4940-8b7d-00bdab7663b0" data-file-name="app/how-it-works/page.tsx">
            <h1 className="text-4xl font-bold mb-4" data-unique-id="38e59e52-379f-466e-98b3-b3d1a9513c93" data-file-name="app/how-it-works/page.tsx"><span className="editable-text" data-unique-id="a3bd98d9-e698-4d19-943e-f64d4913fd4a" data-file-name="app/how-it-works/page.tsx">How BountyHunter Works</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-unique-id="864204dc-9c40-4cbe-84d9-4545f2c6066c" data-file-name="app/how-it-works/page.tsx"><span className="editable-text" data-unique-id="347fb4a0-6e27-451b-8fc4-9ccad5f3bb64" data-file-name="app/how-it-works/page.tsx">
              A seamless process connecting clients with skilled professionals for task-based work
            </span></p>
          </div>
        </div>
        
        <HowItWorks />
        
        <section className="py-16 container mx-auto px-4" data-unique-id="c4c3f97e-b8c2-4d3d-ab0a-f2e312a22c54" data-file-name="app/how-it-works/page.tsx">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16" data-unique-id="69b66e9c-d02f-4f1e-8682-c9fe30c71eec" data-file-name="app/how-it-works/page.tsx">
            <div data-unique-id="38dd87cc-720c-4a8f-a974-99645a4c6908" data-file-name="app/how-it-works/page.tsx">
              <h2 className="text-2xl font-bold mb-6" data-unique-id="c7c30163-118d-4789-9666-9a65f83beed0" data-file-name="app/how-it-works/page.tsx"><span className="editable-text" data-unique-id="4a2db791-cf3c-421a-b29f-d335c5b2d416" data-file-name="app/how-it-works/page.tsx">For Clients</span></h2>
              
              <ul className="space-y-4" data-unique-id="0f56f109-60ca-4285-9e6c-9cb44255711c" data-file-name="app/how-it-works/page.tsx" data-dynamic-text="true">
                {["Post specific tasks with clear requirements and budgets", "Browse qualified hunter profiles to find the right match", "Review submissions and only pay for satisfactory work", "Build relationships with reliable hunters for future projects", "Get fast turnaround times for urgent tasks"].map((item, index) => <li key={index} className="flex items-start gap-3" data-unique-id="fe16e0ec-8830-4e63-9bb3-5919edf28f9e" data-file-name="app/how-it-works/page.tsx">
                    <Check className="h-5 w-5 text-chart-2 mt-0.5" data-unique-id="9784d4f2-3ebf-4ad6-8bd3-04730e775222" data-file-name="app/how-it-works/page.tsx" data-dynamic-text="true" />
                    <span data-unique-id="bb3fe944-d43d-4fa6-a811-426e7fb7872b" data-file-name="app/how-it-works/page.tsx" data-dynamic-text="true">{item}</span>
                  </li>)}
              </ul>
              
              <div className="mt-8" data-unique-id="039131b0-3ec5-48aa-8045-a14d6e5afff9" data-file-name="app/how-it-works/page.tsx">
                <Link href="/post-bounty" data-unique-id="2c21446e-616f-4c60-839d-a13837d90fbf" data-file-name="app/how-it-works/page.tsx">
                  <Button size="lg" data-unique-id="4604b771-b547-47d0-9bd1-e3b602591988" data-file-name="app/how-it-works/page.tsx"><span className="editable-text" data-unique-id="0486f96d-bb3e-47d1-bf9d-d8c11ff0f6b1" data-file-name="app/how-it-works/page.tsx">Post Your First Bounty</span></Button>
                </Link>
              </div>
            </div>
            
            <div data-unique-id="2ffc3b2a-b1aa-40ea-8339-f89684d1b244" data-file-name="app/how-it-works/page.tsx">
              <h2 className="text-2xl font-bold mb-6" data-unique-id="af4cdf11-22f6-49de-bd5c-445a9c474b7c" data-file-name="app/how-it-works/page.tsx"><span className="editable-text" data-unique-id="71c0715d-5a2c-467b-a555-ef77af87a61e" data-file-name="app/how-it-works/page.tsx">For Hunters</span></h2>
              
              <ul className="space-y-4" data-unique-id="9b8c516f-7b5c-4309-b2cf-11992b0f92a1" data-file-name="app/how-it-works/page.tsx" data-dynamic-text="true">
                {["Find opportunities that match your skills and interests", "Work on your own schedule and choose your own projects", "Build a portfolio and reputation through successful completions", "Get paid promptly upon completion of tasks", "Connect with clients for potential long-term collaborations"].map((item, index) => <li key={index} className="flex items-start gap-3" data-unique-id="144ccf7d-1dec-43ec-a50e-b4930a6f5d77" data-file-name="app/how-it-works/page.tsx">
                    <Check className="h-5 w-5 text-chart-1 mt-0.5" data-unique-id="1052a35c-2cf8-4fcb-9ed2-d15b420a691a" data-file-name="app/how-it-works/page.tsx" data-dynamic-text="true" />
                    <span data-unique-id="b8fe08e5-7ac8-4e9e-a13e-3ea622d025d9" data-file-name="app/how-it-works/page.tsx" data-dynamic-text="true">{item}</span>
                  </li>)}
              </ul>
              
              <div className="mt-8" data-unique-id="0fbee4c3-09bf-4caf-98be-d7d36bc35869" data-file-name="app/how-it-works/page.tsx">
                <Link href="/explore" data-unique-id="91deb3f0-8d9b-4c9c-9419-47a888a95d10" data-file-name="app/how-it-works/page.tsx">
                  <Button size="lg" variant="outline" data-unique-id="a2e60e2e-c1b0-4de4-859e-7ec747d4ec44" data-file-name="app/how-it-works/page.tsx"><span className="editable-text" data-unique-id="2b7d5b2c-a4fd-4a77-b502-5ee34435d8ce" data-file-name="app/how-it-works/page.tsx">Browse Available Bounties</span></Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-accent" data-unique-id="da2f2d7c-d365-4652-9349-670d035f906b" data-file-name="app/how-it-works/page.tsx">
          <div className="container mx-auto px-4 text-center" data-unique-id="99bb46db-e932-46b4-ac0e-632bd1958166" data-file-name="app/how-it-works/page.tsx">
            <h2 className="text-3xl font-bold mb-6" data-unique-id="d8d7d3ed-9e7e-4387-8457-134ee6b01e8e" data-file-name="app/how-it-works/page.tsx"><span className="editable-text" data-unique-id="1b672c09-64ec-471a-98c4-60138237e473" data-file-name="app/how-it-works/page.tsx">Ready to Get Started?</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8" data-unique-id="205c3d48-5c0e-4e86-b970-b3b671997a2e" data-file-name="app/how-it-works/page.tsx"><span className="editable-text" data-unique-id="12f4090a-615f-4f16-bb48-10cbb0ca860e" data-file-name="app/how-it-works/page.tsx">
              Join our community of clients and skilled professionals and experience a new way of working.
            </span></p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-unique-id="887530c8-0cdc-4a5b-9b57-3dec54e334c6" data-file-name="app/how-it-works/page.tsx">
              <Link href="/post-bounty" data-unique-id="62f7b9f6-9382-4997-97d2-e4b3f0cfd1c7" data-file-name="app/how-it-works/page.tsx">
                <Button size="lg" className="px-8" data-unique-id="f87c041f-3d29-4411-8fff-cd09112e6a82" data-file-name="app/how-it-works/page.tsx"><span className="editable-text" data-unique-id="68d7647e-60b6-441f-ba37-a46c95dd8061" data-file-name="app/how-it-works/page.tsx">Post a Bounty</span></Button>
              </Link>
              <Link href="/explore" data-unique-id="d22290b3-6a9f-4aa0-857f-728b955b4952" data-file-name="app/how-it-works/page.tsx">
                <Button size="lg" variant="outline" className="px-8" data-unique-id="70e6e58b-a2c0-4aa5-be56-96b402663809" data-file-name="app/how-it-works/page.tsx"><span className="editable-text" data-unique-id="1bbd3cab-a607-4f95-adec-c65007ecba24" data-file-name="app/how-it-works/page.tsx">Find Work</span></Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
}