'use client';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Building, CheckCircle, Code, Globe, HeartHandshake, Shield, Users } from 'lucide-react';
import Link from 'next/link';
export default function AboutPage() {
  return <div className="min-h-screen flex flex-col" data-unique-id="18fd1bbe-5579-4c4c-8a6f-8abf3137bb15" data-file-name="app/about/page.tsx">
      <Navbar />
      <main className="flex-grow" data-unique-id="0f73f612-0cce-4b15-b067-84a206070842" data-file-name="app/about/page.tsx" data-dynamic-text="true">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-accent to-background py-20 overflow-hidden" data-unique-id="b9d8cbf9-964d-4f53-946b-fa6d722c8dcc" data-file-name="app/about/page.tsx" data-dynamic-text="true">
          <div className="container mx-auto px-4" data-unique-id="ee31310d-3ee0-4953-a370-d0faba95345c" data-file-name="app/about/page.tsx">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto" data-unique-id="8012d4a8-99a1-4967-9fe2-22dbae09381c" data-file-name="app/about/page.tsx">
              <motion.h1 className="text-4xl md:text-5xl font-bold mb-6" initial={{
              opacity: 0,
              y: -20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5
            }} data-unique-id="085d6a2e-c75b-4fec-a6df-e5dd6e285d44" data-file-name="app/about/page.tsx">
                <span className="editable-text" data-unique-id="4811f167-ea3a-487b-b51f-cc9393d061ec" data-file-name="app/about/page.tsx">About </span>
                <span className="text-chart-1" data-unique-id="7774afc5-6c18-460f-84ae-f62753817855" data-file-name="app/about/page.tsx"><span className="editable-text" data-unique-id="087abe75-5e79-455c-bfbd-92dc31b6d1b9" data-file-name="app/about/page.tsx">BountyHub</span></span>
              </motion.h1>
              
              <motion.p className="text-xl mb-8 text-muted-foreground" initial={{
              opacity: 0,
              y: -10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} data-unique-id="0a2c62c2-8837-4cf5-8138-34a43e0bba0a" data-file-name="app/about/page.tsx">
                <span className="editable-text" data-unique-id="1a8738f1-e2eb-4aba-ad59-cca835861912" data-file-name="app/about/page.tsx">
                  Connecting talented professionals with clients worldwide through our innovative bounty marketplace.
                </span>
              </motion.p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <motion.div className="absolute -top-24 -right-24 w-96 h-96 bg-chart-1/10 rounded-full blur-3xl" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1
        }} data-unique-id="7611f5cd-f0b8-4032-aad5-245a6943b153" data-file-name="app/about/page.tsx" />
          <motion.div className="absolute -bottom-32 -left-32 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1,
          delay: 0.3
        }} data-unique-id="8f43bbb8-fb7f-4eb7-a568-f0bce437ceef" data-file-name="app/about/page.tsx" />
        </section>
        
        {/* Our Mission */}
        <section className="py-16 container mx-auto px-4" data-unique-id="3cee40d7-f9a8-4553-82a4-c3d2eeb04467" data-file-name="app/about/page.tsx">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" data-unique-id="2b4999bd-5c47-4599-b276-c0bc1fc6b95b" data-file-name="app/about/page.tsx">
            <div data-unique-id="3377dd8b-c85c-442b-99bc-2d7b17b1c3d3" data-file-name="app/about/page.tsx">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5
            }} viewport={{
              once: true
            }} data-unique-id="e5e9da38-a5e7-4062-b10c-d5772d8820a6" data-file-name="app/about/page.tsx">
                <Badge variant="outline" className="mb-4 px-3 py-1" data-unique-id="6f2651f6-641e-44c8-a52f-188eeddaa325" data-file-name="app/about/page.tsx"><span className="editable-text" data-unique-id="f87447ad-efd2-4c2c-8518-04fbfc0d7c38" data-file-name="app/about/page.tsx">Our Mission</span></Badge>
                <h2 className="text-3xl font-bold mb-6" data-unique-id="4a65ddcf-0b0e-4e18-882e-2ec5bdb3b8f2" data-file-name="app/about/page.tsx"><span className="editable-text" data-unique-id="894cd592-f44d-463a-ba25-5a5b15ad30ba" data-file-name="app/about/page.tsx">Revolutionizing How Work Gets Done</span></h2>
                
                <p className="text-lg text-muted-foreground mb-6" data-unique-id="97bcc9d8-472c-4dda-97bf-c554baec8ecc" data-file-name="app/about/page.tsx"><span className="editable-text" data-unique-id="b271ebee-9708-4fb7-a627-067670080c12" data-file-name="app/about/page.tsx">
                  At BountyHub, we believe in a world where talent meets opportunity without boundaries. Our mission is to create a global marketplace that empowers professionals and businesses to connect, collaborate, and thrive.
                </span></p>
                
                <p className="text-lg text-muted-foreground mb-6" data-unique-id="2b4e47a7-2fa8-4c23-bd3b-8b21e14384a7" data-file-name="app/about/page.tsx"><span className="editable-text" data-unique-id="6da05255-6b0e-4e26-9a83-ed4d9056ed2a" data-file-name="app/about/page.tsx">
                  We're dedicated to building a platform where quality work is rewarded fairly and efficiently, giving both clients and talent the tools they need to succeed in today's dynamic digital economy.
                </span></p>
              </motion.div>
            </div>
            
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} className="relative" data-unique-id="60ec8aac-3695-4f74-b319-72758911d4de" data-file-name="app/about/page.tsx">
              <div className="rounded-lg overflow-hidden shadow-lg" data-unique-id="f124dc04-d308-4be5-9777-3eca15f9dbdd" data-file-name="app/about/page.tsx">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Team collaboration" className="w-full h-96 object-cover" data-unique-id="122643bf-ecfd-4e28-b842-d15b841e51ba" data-file-name="app/about/page.tsx" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-chart-1 text-white p-6 rounded-lg shadow-lg" data-unique-id="ac77a6ff-d6e2-4e55-8692-c186733b12d9" data-file-name="app/about/page.tsx">
                <div className="text-4xl font-bold" data-unique-id="d506decc-2947-4ff4-94ae-2d5b9d2837fd" data-file-name="app/about/page.tsx"><span className="editable-text" data-unique-id="9ddf51a1-bc30-4e3d-8715-b380c467d664" data-file-name="app/about/page.tsx">5000+</span></div>
                <div className="text-sm" data-unique-id="6208c418-07c2-4fb2-8398-9c310e3ca456" data-file-name="app/about/page.tsx"><span className="editable-text" data-unique-id="f5ca3ab4-af56-4157-b9b2-7976cceecb41" data-file-name="app/about/page.tsx">Successful Projects</span></div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-accent" data-unique-id="8e9cf0b4-1e92-47db-b4bf-f4822d6c2065" data-file-name="app/about/page.tsx">
          <div className="container mx-auto px-4" data-unique-id="ebad66a2-ab6e-4658-861d-ce87eee2e5e6" data-file-name="app/about/page.tsx">
            <div className="text-center mb-12" data-unique-id="71dc225a-b6b4-4a79-84f3-d4099b0487d2" data-file-name="app/about/page.tsx">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5
            }} viewport={{
              once: true
            }} data-unique-id="74969d92-d32c-4d78-b9ae-2c2acb70bb30" data-file-name="app/about/page.tsx">
                <Badge variant="outline" className="mb-4 px-3 py-1" data-unique-id="e07eecb3-e8d4-4d4e-b3db-be8c789c7bd8" data-file-name="app/about/page.tsx"><span className="editable-text" data-unique-id="b63ecb92-efe2-4a9b-ae89-f98dba7f99ef" data-file-name="app/about/page.tsx">Our Values</span></Badge>
                <h2 className="text-3xl font-bold mb-6" data-unique-id="1fbc695f-7796-48d1-b71a-fc2412a829e9" data-file-name="app/about/page.tsx"><span className="editable-text" data-unique-id="6d00b261-d550-4884-af5a-1ef80256aa2e" data-file-name="app/about/page.tsx">What We Stand For</span></h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-unique-id="f60739e2-f57a-4d73-8b20-2a76b6e781f7" data-file-name="app/about/page.tsx"><span className="editable-text" data-unique-id="0ba9f54d-003c-4832-9d05-0f9a9241e321" data-file-name="app/about/page.tsx">
                  Our values guide everything we do, from how we build our platform to how we interact with our community.
                </span></p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-unique-id="bcdf2003-df8a-40c9-8164-13f3b2cde19f" data-file-name="app/about/page.tsx" data-dynamic-text="true">
              {[{
              icon: <Shield className="h-10 w-10 mb-4 text-chart-1" data-unique-id="74e9b7b9-15b2-49eb-a2ff-2e2539d9862c" data-file-name="app/about/page.tsx" data-dynamic-text="true" />,
              title: "Trust & Transparency",
              description: "We build trust through clear communication, fair policies, and transparent processes."
            }, {
              icon: <Code className="h-10 w-10 mb-4 text-chart-2" data-unique-id="c8b6a7ca-5a84-40cb-b5bc-799daf2ad418" data-file-name="app/about/page.tsx" data-dynamic-text="true" />,
              title: "Quality & Excellence",
              description: "We strive for excellence in every aspect of our platform and encourage the same in our community."
            }, {
              icon: <Globe className="h-10 w-10 mb-4 text-chart-3" data-unique-id="cbc9112b-1353-46ca-898a-3df5d92a14bb" data-file-name="app/about/page.tsx" data-dynamic-text="true" />,
              title: "Global Opportunity",
              description: "We believe talent exists everywhere and work to connect it with opportunities worldwide."
            }, {
              icon: <HeartHandshake className="h-10 w-10 mb-4 text-chart-4" data-unique-id="14c9e926-8e81-4a0b-ada4-70269bf76ed7" data-file-name="app/about/page.tsx" data-dynamic-text="true" />,
              title: "Fair Compensation",
              description: "We advocate for fair pay that values skills, expertise, and quality outcomes."
            }, {
              icon: <Users className="h-10 w-10 mb-4 text-chart-5" data-unique-id="a0747822-83b9-42f0-8785-09cceca0fcd2" data-file-name="app/about/page.tsx" data-dynamic-text="true" />,
              title: "Community Focus",
              description: "We prioritize building and nurturing our community of clients and professionals."
            }, {
              icon: <Award className="h-10 w-10 mb-4 text-chart-1" data-unique-id="58d595ac-e151-4144-a313-fd845d631fcc" data-file-name="app/about/page.tsx" data-dynamic-text="true" />,
              title: "Innovation",
              description: "We continuously innovate to improve our platform and stay ahead of industry trends."
            }].map((value, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="bg-card border border-border rounded-lg p-6 shadow-sm" data-unique-id="736c6ad3-548c-4559-b0e6-ea0d666769e1" data-file-name="app/about/page.tsx" data-dynamic-text="true">
                  {value.icon}
                  <h3 className="text-xl font-bold mb-2" data-unique-id="17ee30be-a8e8-4e5d-8b5e-9882084aa863" data-file-name="app/about/page.tsx" data-dynamic-text="true">{value.title}</h3>
                  <p className="text-muted-foreground" data-unique-id="f6de5bd7-f322-4485-a2eb-8a8b88427dbb" data-file-name="app/about/page.tsx" data-dynamic-text="true">{value.description}</p>
                </motion.div>)}
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 container mx-auto px-4" data-unique-id="f94afe52-63db-4986-8888-db3dceea005d" data-file-name="app/about/page.tsx">
          <div className="max-w-4xl mx-auto" data-unique-id="f6061cd1-bb51-440c-a238-f26f722331f9" data-file-name="app/about/page.tsx">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} className="text-center mb-12" data-unique-id="ee6367ab-a4c7-43e7-84ca-f32e4e397797" data-file-name="app/about/page.tsx">
              <Badge variant="outline" className="mb-4 px-3 py-1" data-unique-id="c61948be-5de3-4518-b847-7610d6b8e8fb" data-file-name="app/about/page.tsx"><span className="editable-text" data-unique-id="30333996-2d16-435d-a862-7f61eb648999" data-file-name="app/about/page.tsx">Our Story</span></Badge>
              <h2 className="text-3xl font-bold mb-6" data-unique-id="1f959d9d-1d5f-491d-b2e7-a47b26472ef0" data-file-name="app/about/page.tsx"><span className="editable-text" data-unique-id="f52cecae-75c9-4c6b-9c25-1baef787faab" data-file-name="app/about/page.tsx">How BountyHub Came to Be</span></h2>
            </motion.div>
            
            <div className="space-y-12" data-unique-id="88926569-4633-4a11-920e-45aacfea24d7" data-file-name="app/about/page.tsx" data-dynamic-text="true">
              {[ {
              year: "2024",
              title: "The Idea",
              description: "BountyHub was born from the frustration of traditional freelance platforms. Our founders saw a need for a more direct, task-focused approach to connecting talent with opportunities."
            }, {
              year: "Today",
              title: "Building and Launching",
              description: "Our team of developers, designers, and industry experts came together to build the first version of BountyHub, focusing on user experience. BountyHub officially launched, quickly gaining traction among professionals and businesses looking for a better way to collaborate on specific tasks and projects."
            }].map((milestone, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: index % 2 === 0 ? -20 : 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5
            }} viewport={{
              once: true
            }} className="flex" data-unique-id="bff8e17d-a3ed-436b-a4d0-b5f79f325747" data-file-name="app/about/page.tsx">
                  <div className="mr-6 text-center" data-unique-id="76b2c228-5478-4e1c-a02c-45dbe9bb284e" data-file-name="app/about/page.tsx">
                    <div className="w-16 h-16 rounded-full bg-chart-1 text-white flex items-center justify-center font-bold" data-unique-id="501e3119-297e-4e03-8bd7-65a7a4356ecc" data-file-name="app/about/page.tsx" data-dynamic-text="true">
                      {milestone.year}
                    </div>
                    <div className="h-full w-px bg-border mx-auto mt-2 mb-0" data-unique-id="73c6e866-960c-4202-b0fe-07ac970be9dd" data-file-name="app/about/page.tsx"></div>
                  </div>
                  
                  <div className="flex-1" data-unique-id="fd7dd510-4879-4feb-948a-0f5eb1c78794" data-file-name="app/about/page.tsx">
                    <h3 className="text-xl font-bold mb-2" data-unique-id="8b0ebbe4-05e2-4b08-a365-ac485b972553" data-file-name="app/about/page.tsx" data-dynamic-text="true">{milestone.title}</h3>
                    <p className="text-muted-foreground" data-unique-id="e21ac438-7bc2-478a-98a1-ce7586ab0c89" data-file-name="app/about/page.tsx" data-dynamic-text="true">{milestone.description}</p>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>
        
        {/* Join Us CTA */}
        <section className="py-16 bg-chart-1/10" data-unique-id="a54c98c8-4cc5-463b-b2dc-6a8760c1e423" data-file-name="app/about/page.tsx">
          <div className="container mx-auto px-4 text-center" data-unique-id="16f00a89-dc84-4ff1-a5f9-d69c6824a400" data-file-name="app/about/page.tsx">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} data-unique-id="2cd20e48-85ee-4015-a72c-d25a94ba7ba3" data-file-name="app/about/page.tsx">
              <h2 className="text-3xl font-bold mb-6" data-unique-id="10548083-6a37-400f-80f6-c0ada0910035" data-file-name="app/about/page.tsx"><span className="editable-text" data-unique-id="43cba768-6b04-4827-b7a4-a050eb8c8a5c" data-file-name="app/about/page.tsx">Join the BountyHub Community</span></h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8" data-unique-id="bf3ca5ba-2274-48db-b765-f7be353aaee8" data-file-name="app/about/page.tsx"><span className="editable-text" data-unique-id="d31f0eba-fbe7-44c6-8130-ef16024a1693" data-file-name="app/about/page.tsx">
                Whether you're looking to hire top talent or showcase your skills, BountyHub is the place to make it happen.
              </span></p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center" data-unique-id="669ee65a-5f26-4fac-8201-751c86859dba" data-file-name="app/about/page.tsx">
                <Button size="lg" className="px-8" data-unique-id="511740cf-177d-49d8-ba33-1360adab1897" data-file-name="app/about/page.tsx">
                  <Link href="/post-bounty" data-unique-id="196f4ef6-787e-4034-9d4a-9161a421913b" data-file-name="app/about/page.tsx"><span className="editable-text" data-unique-id="e4e1d180-d15e-4279-93c6-94c69f418920" data-file-name="app/about/page.tsx">Post a Bounty</span></Link>
                </Button>
                
                <Button size="lg" variant="outline" className="px-8 group" data-unique-id="f0f9aa06-5a98-4c59-aebb-5cb27d2f6f55" data-file-name="app/about/page.tsx">
                  <Link href="/explore" className="flex items-center" data-unique-id="8d4e40ac-71e7-4ebb-b60b-4a4cd937fa56" data-file-name="app/about/page.tsx">
                    <span className="editable-text" data-unique-id="761d6e34-6b86-4940-b40b-3b3c7e464c1a" data-file-name="app/about/page.tsx">Find Work</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
}