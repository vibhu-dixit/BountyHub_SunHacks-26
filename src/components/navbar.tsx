'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, Plus, Search } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
const navItems = [{
  name: 'Home',
  href: '/'
}, {
  name: 'Explore',
  href: '/explore'
}, {
  name: 'Hunters',
  href: '/hunters'
}, {
  name: 'How It Works',
  href: '/how-it-works'
}, {
  name: 'Testimonials',
  href: '/testimonials'
}];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return <header className="sticky top-0 z-50 bg-background border-b border-border" data-unique-id="7416b548-346e-4677-85c8-fd748cc43b69" data-file-name="components/navbar.tsx">
      <div className="container mx-auto px-4 py-3" data-unique-id="e08b9422-a109-4a36-bf92-c8c7d6c942ae" data-file-name="components/navbar.tsx" data-dynamic-text="true">
        <div className="flex items-center justify-between" data-unique-id="3795d883-d76f-4aa8-a14a-6255a7a3b5b7" data-file-name="components/navbar.tsx">
          <div className="flex items-center space-x-6" data-unique-id="8373c73d-875a-465f-81d9-4f1d84bd0e63" data-file-name="components/navbar.tsx">
            <Link href="/" className="flex items-center gap-2" data-unique-id="aa277699-413f-48fc-b913-5894e777a988" data-file-name="components/navbar.tsx">
              <span className="bg-chart-1 text-white p-2 rounded-md" data-unique-id="3fb50e85-3c62-4350-a104-bac731c9d46c" data-file-name="components/navbar.tsx"><span className="editable-text" data-unique-id="776f1f3d-8bc3-48ff-807c-8477f939974e" data-file-name="components/navbar.tsx">BH</span></span>
              <span className="text-xl font-bold" data-unique-id="1b298ed5-b7d3-4058-a5e2-abfd91697436" data-file-name="components/navbar.tsx"><span className="editable-text" data-unique-id="3388d400-81f9-45fa-bd52-86cf39721c88" data-file-name="components/navbar.tsx">BountyHub</span></span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6" data-unique-id="bc997215-4023-49ab-ac3e-b0ced4c562d3" data-file-name="components/navbar.tsx" data-dynamic-text="true">
              {navItems.map(item => <Link key={item.name} href={item.href} className={cn('text-muted-foreground hover:text-foreground transition-colors', pathname === item.href && 'text-foreground font-medium')} data-unique-id="0847e74f-a4a6-49d9-a770-52c866ccba0d" data-file-name="components/navbar.tsx" data-dynamic-text="true">
                  {item.name}
                </Link>)}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4" data-unique-id="a14bbddb-b740-4be0-86ab-c57ee8ab633e" data-file-name="components/navbar.tsx">
            <div className="hidden md:block relative" data-unique-id="bb4fe40f-f14c-4ad2-9225-7b548a69e18f" data-file-name="components/navbar.tsx">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3" data-unique-id="761f5ee5-3b84-41a2-81be-ed5d7de9eb08" data-file-name="components/navbar.tsx">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <input type="text" placeholder="Search bounties..." className="pl-10 pr-4 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring w-[200px]" data-unique-id="4f1bce0c-d1c8-4b8f-b71f-7536510c5374" data-file-name="components/navbar.tsx" />
            </div>
            
            <Link href="/post-bounty" data-unique-id="ac83b670-a625-4f9f-97fe-e0220f5fb38c" data-file-name="components/navbar.tsx">
              <Button size="sm" className="hidden md:flex gap-1 items-center" data-unique-id="a90dcf2e-42c0-4b6d-9c3b-002a7fb9367a" data-file-name="components/navbar.tsx">
                <Plus className="h-4 w-4" />
                <span data-unique-id="1939fa42-298f-463f-a605-90f870a333b3" data-file-name="components/navbar.tsx"><span className="editable-text" data-unique-id="a12c1b77-1dbd-42d7-a259-2ac9a2c70920" data-file-name="components/navbar.tsx">Post Bounty</span></span>
              </Button>
            </Link>
            
            <Link href="/dashboard" data-unique-id="e58b5cc2-414a-4f78-ab9e-a66cb299bd89" data-file-name="components/navbar.tsx">
              <Button variant="outline" size="sm" className="hidden md:inline-flex" data-unique-id="9d757dbf-d0e1-4308-bc5f-de8f006472c4" data-file-name="components/navbar.tsx"><span className="editable-text" data-unique-id="292ffeb2-8cb1-4a31-8543-ee7762cb0bb2" data-file-name="components/navbar.tsx">
                Dashboard
              </span></Button>
            </Link>
            
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)} data-unique-id="35cce769-83c5-477b-902d-954795a5f5ca" data-file-name="components/navbar.tsx">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {isOpen && <div className="md:hidden mt-4 py-4 border-t" data-unique-id="ad912ead-4e58-44f3-9818-da6356de5042" data-file-name="components/navbar.tsx">
            <nav className="flex flex-col space-y-4" data-unique-id="8e407cf2-3071-4b2e-9aa5-fe2f64a351e9" data-file-name="components/navbar.tsx" data-dynamic-text="true">
              {navItems.map(item => <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className={cn('text-muted-foreground hover:text-foreground transition-colors', pathname === item.href && 'text-foreground font-medium')} data-unique-id="8c8cad94-bf3c-4f68-ad63-3449d2b742e1" data-file-name="components/navbar.tsx" data-dynamic-text="true">
                  {item.name}
                </Link>)}
              <div className="pt-4 border-t border-border" data-unique-id="37bb218e-730f-4f9d-a31a-f689a5ed653d" data-file-name="components/navbar.tsx">
                <Link href="/post-bounty" onClick={() => setIsOpen(false)} data-unique-id="dfac6c71-e22d-47c4-a9d4-17744a41b8d2" data-file-name="components/navbar.tsx">
                  <Button className="w-full" data-unique-id="5b527a55-2966-464b-b729-c3b24c57271e" data-file-name="components/navbar.tsx"><span className="editable-text" data-unique-id="66b87aab-055f-4a7c-a9e9-2497d468ea9b" data-file-name="components/navbar.tsx">Post a Bounty</span></Button>
                </Link>
              </div>
              <Link href="/dashboard" onClick={() => setIsOpen(false)} data-unique-id="bf85d68c-faee-495b-8248-47177537bb61" data-file-name="components/navbar.tsx">
                <Button variant="outline" className="w-full" data-unique-id="8e4d109d-37a9-49aa-ac7d-9278b3085004" data-file-name="components/navbar.tsx"><span className="editable-text" data-unique-id="3031f4cc-b679-44c3-ae0e-70d992f011f0" data-file-name="components/navbar.tsx">
                  Dashboard
                </span></Button>
              </Link>
            </nav>
          </div>}
      </div>
    </header>;
}