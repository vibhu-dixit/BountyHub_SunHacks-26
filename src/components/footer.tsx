import { Facebook, Github, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
const footerLinks = [{
  title: 'Platform',
  links: [{
    name: 'How It Works',
    href: '/how-it-works'
  }, {
    name: 'Browse Bounties',
    href: '/explore'
  }, {
    name: 'Post a Bounty',
    href: '/post-bounty'
  }, {
    name: 'Our Hunters',
    href: '/hunters'
  }]
}, {
  title: 'Resources',
  links: [{
    name: 'Help Center',
    href: '/help'
  }, {
    name: 'Blog',
    href: '/blog'
  }, {
    name: 'Pricing',
    href: '/pricing'
  }, {
    name: 'Reviews',
    href: '/reviews'
  }]
}, {
  title: 'Company',
  links: [{
    name: 'About Us',
    href: '/about'
  }, {
    name: 'Careers',
    href: '/careers'
  }, {
    name: 'Contact',
    href: '/contact'
  }, {
    name: 'Legal',
    href: '/legal'
  }]
}];
export default function Footer() {
  return <footer className="bg-[#1E3A8A] text-white" data-unique-id="9301b920-30d2-4806-9dc6-c0054f15de7e" data-file-name="components/footer.tsx">
      <div className="container mx-auto px-4 py-12" data-unique-id="6c99d99c-4c54-4ff5-9950-341c6f807704" data-file-name="components/footer.tsx">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8" data-unique-id="acb2187e-2139-4c64-baf6-c7823ae4586e" data-file-name="components/footer.tsx">
          <div className="md:col-span-2" data-unique-id="e2af6546-dc64-4b09-b7bf-161872091c20" data-file-name="components/footer.tsx">
            <Link href="/" className="flex items-center gap-2 mb-4" data-unique-id="07488796-9d93-4f14-ae36-84dcb0957a04" data-file-name="components/footer.tsx">
              <span className="bg-chart-1 text-white p-2 rounded-md" data-unique-id="9ebf574c-516f-401e-952a-b4befc1a03e5" data-file-name="components/footer.tsx"><span className="editable-text" data-unique-id="c40a851e-3cb2-4a19-a5ba-f29f92c323a6" data-file-name="components/footer.tsx">BH</span></span>
              <span className="text-xl font-bold" data-unique-id="35d57679-32d2-4a7d-b6ed-f0518e428fb2" data-file-name="components/footer.tsx"><span className="editable-text" data-unique-id="6c360d89-7bc1-439c-a998-1861a07c500c" data-file-name="components/footer.tsx">BountyHub</span></span>
            </Link>
            
            <p className="text-primary-foreground/80 mb-6 max-w-md" data-unique-id="dd3bbbc8-b070-427a-b9cb-fd8cc145cb89" data-file-name="components/footer.tsx"><span className="editable-text" data-unique-id="9faa1783-f31d-4336-9e2e-d37d90b9e066" data-file-name="components/footer.tsx">
              The marketplace for task-based work. Post bounties for your needs or hunt for opportunities that match your skills.
            </span></p>
            
            <div className="flex space-x-4" data-unique-id="eb7791e7-6692-464c-9605-455a5b36de5b" data-file-name="components/footer.tsx">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground" data-unique-id="08d7ebe4-6344-4043-919a-056a91650270" data-file-name="components/footer.tsx">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground" data-unique-id="8c044226-ba66-42cc-a291-bd5a937adabc" data-file-name="components/footer.tsx">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground" data-unique-id="2211eb3e-a6d3-4bcd-a4d4-9c2655d011c8" data-file-name="components/footer.tsx">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground" data-unique-id="ac4ccc5c-0812-4c80-875b-ef98ebc19622" data-file-name="components/footer.tsx">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8" data-unique-id="579bed4d-0243-423c-af9d-9364ff73ca15" data-file-name="components/footer.tsx" data-dynamic-text="true">
            {footerLinks.map(column => <div key={column.title} data-unique-id="f672aed7-3ab1-4718-8607-f98116723417" data-file-name="components/footer.tsx">
                <h3 className="font-semibold mb-4" data-unique-id="0b27c8dd-886a-4244-a2e9-04b22b0574ef" data-file-name="components/footer.tsx" data-dynamic-text="true">{column.title}</h3>
                <ul className="space-y-2" data-unique-id="7db5009a-4707-4796-b25c-22ffa5b118f6" data-file-name="components/footer.tsx" data-dynamic-text="true">
                  {column.links.map(link => <li key={link.name} data-unique-id="ef3f3efb-6ff3-4167-ab4d-3abf1098527d" data-file-name="components/footer.tsx">
                      <Link href={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" data-unique-id="a8cc2f00-be9e-4172-acbc-38bf2e0a7522" data-file-name="components/footer.tsx" data-dynamic-text="true">
                        {link.name}
                      </Link>
                    </li>)}
                </ul>
              </div>)}
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center" data-unique-id="d97e64ec-d919-4181-a690-3e9fea056281" data-file-name="components/footer.tsx">
          <p className="text-sm text-primary-foreground/70" data-unique-id="86fd5c56-5d59-427f-a063-4545636d2d7b" data-file-name="components/footer.tsx"><span className="editable-text" data-unique-id="fea3c754-4252-47e0-8311-9aa65db5f467" data-file-name="components/footer.tsx">
            © 2025 BountyHub. All rights reserved.
          </span></p>
          
          <div className="flex space-x-6 mt-4 sm:mt-0" data-unique-id="72bb41ab-d183-465f-aadf-022529b43006" data-file-name="components/footer.tsx">
            <Link href="/privacy" className="text-sm text-primary-foreground/70 hover:text-primary-foreground" data-unique-id="7fe3d2a0-11c2-4f9b-ae3b-4c5a79c1eae6" data-file-name="components/footer.tsx"><span className="editable-text" data-unique-id="6869145c-6e88-4f75-83d5-cf11f6fb72f8" data-file-name="components/footer.tsx">
              Privacy Policy
            </span></Link>
            <Link href="/terms" className="text-sm text-primary-foreground/70 hover:text-primary-foreground" data-unique-id="af5f8caf-2663-4ef2-8d01-d784411f7a51" data-file-name="components/footer.tsx"><span className="editable-text" data-unique-id="26171a8f-1b1b-42d4-882b-ef7d3a76b589" data-file-name="components/footer.tsx">
              Terms of Service
            </span></Link>
          </div>
        </div>
      </div>
    </footer>;
}