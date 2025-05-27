'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useHunterStore } from '@/lib/hunter-store';
import { motion } from 'framer-motion';
import { AlertTriangle, Briefcase, Calendar, Github, Linkedin, Mail, MapPin, MessageSquare, Star, Twitter } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
interface HunterDetailProps {
  id: string;
}
export default function HunterDetail({
  id
}: HunterDetailProps) {
  const router = useRouter();
  const {
    getHunter
  } = useHunterStore();
  const hunter = getHunter(id);
  const [showContactForm, setShowContactForm] = useState(false);
  const [message, setMessage] = useState('');
  if (!hunter) {
    return <div className="flex flex-col items-center justify-center py-16" data-unique-id="1ebf807d-7018-4980-9b4c-0473234957da" data-file-name="app/hunters/[id]/hunter-detail.tsx">
        <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
        <h2 className="text-2xl font-bold mb-2" data-unique-id="80916690-94f7-47b4-9708-93aa50162e02" data-file-name="app/hunters/[id]/hunter-detail.tsx"><span className="editable-text" data-unique-id="c4d5c7c0-14fc-4d09-807d-97aa0bdc168f" data-file-name="app/hunters/[id]/hunter-detail.tsx">Hunter Not Found</span></h2>
        <p className="text-muted-foreground mb-8" data-unique-id="3d836767-2d73-45ab-87ce-7beb1f6ddb33" data-file-name="app/hunters/[id]/hunter-detail.tsx"><span className="editable-text" data-unique-id="1b7636b8-d140-4b2c-964b-37c2609197ca" data-file-name="app/hunters/[id]/hunter-detail.tsx">
          The hunter you're looking for doesn't exist or has been removed.
        </span></p>
        <Button onClick={() => router.push('/hunters')} data-unique-id="2b392d1e-d0b2-4ccc-a9b0-a47203dea19a" data-file-name="app/hunters/[id]/hunter-detail.tsx"><span className="editable-text" data-unique-id="42f8dc16-56d7-4cb8-80b5-a2f0a5500eea" data-file-name="app/hunters/[id]/hunter-detail.tsx">
          Browse Available Hunters
        </span></Button>
      </div>;
  }

  // Sample projects for the hunter
  const projects = [{
    title: 'E-commerce Platform',
    description: 'Developed a full-featured online store with payment processing and inventory management.',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    title: 'Task Management App',
    description: 'Created a productivity application with real-time collaboration features.',
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    title: 'Portfolio Website',
    description: 'Designed and developed a responsive portfolio website for a creative professional.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }];

  // Sample reviews for the hunter
  const reviews = [{
    text: "Excellent work! Delivered the project ahead of schedule and exceeded my expectations.",
    author: "Jane Smith",
    rating: 5,
    date: "2 months ago"
  }, {
    text: "Great communication throughout the project. Would definitely hire again.",
    author: "Michael Brown",
    rating: 5,
    date: "3 months ago"
  }, {
    text: "Very professional and skilled. The quality of work was outstanding.",
    author: "Sarah Johnson",
    rating: 4,
    date: "4 months ago"
  }];
  const handleSendMessage = () => {
    // In a real app, this would send the message to the hunter
    alert(`Message sent to ${hunter.name}: ${message}`);
    setMessage('');
    setShowContactForm(false);
  };
  return <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-unique-id="2a19aed3-c4a4-438a-addf-3b5c6d85f95d" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true">
      {/* Left column - Hunter info */}
      <div className="md:col-span-1" data-unique-id="6da4c94c-f09d-4a0f-8dba-3a9c61056eac" data-file-name="app/hunters/[id]/hunter-detail.tsx">
        <Card className="mb-6" data-unique-id="d1156f98-327c-4890-a731-596cbedfacc0" data-file-name="app/hunters/[id]/hunter-detail.tsx">
          <CardContent className="pt-6" data-unique-id="25bfbe27-c5db-4702-9006-913c246393a4" data-file-name="app/hunters/[id]/hunter-detail.tsx">
            <div className="flex flex-col items-center mb-6" data-unique-id="313c51b9-0b20-4486-8674-2ee17f7aabbd" data-file-name="app/hunters/[id]/hunter-detail.tsx">
              <div className="h-32 w-32 rounded-full overflow-hidden mb-4" data-unique-id="fd03347b-2a14-49f7-b5c7-853006aa45c9" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                <img src={hunter.avatar} alt={hunter.name} className="h-full w-full object-cover" data-unique-id="299d7ece-e439-4a0b-8df0-017685f6f84b" data-file-name="app/hunters/[id]/hunter-detail.tsx" />
              </div>
              
              <h2 className="text-xl font-semibold mb-1" data-unique-id="d202ae1a-5907-41fa-9573-f77903363189" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true">{hunter.name}</h2>
              <p className="text-muted-foreground mb-2" data-unique-id="9a4d02e6-91b6-48ff-8b7a-29fe63524b61" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true">{hunter.title}</p>
              
              <div className="flex items-center mb-2" data-unique-id="eb416fdb-96b3-4c00-950a-69bf67136693" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
                <span className="text-sm text-muted-foreground" data-unique-id="cfc2118c-e186-4d55-b8a0-2bc0937b394d" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true">{hunter.location}</span>
              </div>
              
              <div className="flex items-center mb-4" data-unique-id="e58295ac-06bf-4224-86a7-7f98062958d8" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                <div className="flex items-center text-chart-4" data-unique-id="bdaab2b2-b7a8-455d-8f7e-039319a0ac59" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                  <Star className="h-4 w-4 fill-chart-4 mr-1" />
                  <span className="font-medium" data-unique-id="aa45b890-0f25-4920-ad42-4f35a1ae61e5" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true">{hunter.rating.toFixed(1)}</span>
                </div>
                <span className="mx-2 text-muted-foreground" data-unique-id="355144b5-e690-40d1-9c7b-a10f80c3a30a" data-file-name="app/hunters/[id]/hunter-detail.tsx"><span className="editable-text" data-unique-id="3e44229b-0d89-4852-98f0-5217f620df23" data-file-name="app/hunters/[id]/hunter-detail.tsx">•</span></span>
                <div className="flex items-center text-muted-foreground text-sm" data-unique-id="8e4e5b59-82ec-4d67-80ad-380d92f80466" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                  <Briefcase className="h-3.5 w-3.5 mr-1" />
                  <span data-unique-id="20fae10c-5e4b-4ac6-9f76-54fd3a92d4ad" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true">{hunter.completedBounties}<span className="editable-text" data-unique-id="b810914c-00d5-43d6-a498-01c54202615b" data-file-name="app/hunters/[id]/hunter-detail.tsx"> completed</span></span>
                </div>
              </div>
              
              <div className="flex space-x-3 text-muted-foreground" data-unique-id="cc87d73e-1348-4e05-a936-0911091497b9" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                <a href="#" className="hover:text-primary transition-colors" data-unique-id="b54c0d49-ae95-4a47-a8c0-cb7f86955948" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-primary transition-colors" data-unique-id="9090a10e-e3a7-4159-86bd-b064adf9a284" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-primary transition-colors" data-unique-id="a079af65-0a72-4253-a1d2-251781ef105a" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                  <Github className="h-5 w-5" />
                </a>
                <a href={`mailto:${hunter.name.toLowerCase().replace(' ', '.')}@example.com`} className="hover:text-primary transition-colors" data-unique-id="5665e5a5-4ae7-4b19-9cb4-7e81e4e5beaa" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="mb-6" data-unique-id="d514c528-365a-4901-aebf-1e936336dd65" data-file-name="app/hunters/[id]/hunter-detail.tsx">
              <h3 className="font-semibold mb-2" data-unique-id="99501aa1-41d5-4418-9342-63f1a77fc693" data-file-name="app/hunters/[id]/hunter-detail.tsx"><span className="editable-text" data-unique-id="de02c342-007f-4ffe-93a3-660d2809e174" data-file-name="app/hunters/[id]/hunter-detail.tsx">About</span></h3>
              <p className="text-sm text-muted-foreground" data-unique-id="536642cb-4755-4a0e-944f-4477ca197baf" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true">{hunter.bio}</p>
            </div>
            
            <div className="mb-6" data-unique-id="315f8841-1629-478e-be2b-9b088f89dd99" data-file-name="app/hunters/[id]/hunter-detail.tsx">
              <h3 className="font-semibold mb-2" data-unique-id="e73b9992-44e7-4df5-99cd-f332e37c191d" data-file-name="app/hunters/[id]/hunter-detail.tsx"><span className="editable-text" data-unique-id="a2bfc884-ae92-4cef-bd38-5666d6ad539d" data-file-name="app/hunters/[id]/hunter-detail.tsx">Skills</span></h3>
              <div className="flex flex-wrap gap-2" data-unique-id="9e57fd4e-bc22-4d23-9307-9b5cc8893d8d" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true">
                {hunter.skills.map((skill, index) => <Badge key={index} variant={index % 3 === 0 ? "default" : index % 3 === 1 ? "secondary" : "outline"} data-unique-id="c806d113-7690-4b1d-8e0d-10d6878689a6" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true">
                    {skill}
                  </Badge>)}
              </div>
            </div>
            
            <div className="mb-6" data-unique-id="b61548b9-f822-42b2-a741-82816d996b7f" data-file-name="app/hunters/[id]/hunter-detail.tsx">
              <h3 className="font-semibold mb-2" data-unique-id="5bffcf53-8532-46cd-826b-b766a034bf2b" data-file-name="app/hunters/[id]/hunter-detail.tsx"><span className="editable-text" data-unique-id="9e111f7d-91a1-499c-bacf-5354b592e00d" data-file-name="app/hunters/[id]/hunter-detail.tsx">Hourly Rate</span></h3>
              <p className="text-lg font-semibold text-primary" data-unique-id="d29814a1-3b8e-409d-a8e0-2ad20e5393bf" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="327eebfd-7607-4a81-89e2-be0b1f5bb337" data-file-name="app/hunters/[id]/hunter-detail.tsx">$</span>{hunter.hourlyRate}<span className="editable-text" data-unique-id="e9a546c0-4c86-4561-87e4-6dac67b4965f" data-file-name="app/hunters/[id]/hunter-detail.tsx">/hr</span></p>
            </div>
            
            <div className="mb-4" data-unique-id="38adb955-1e67-4868-b415-91eeb25912a3" data-file-name="app/hunters/[id]/hunter-detail.tsx">
              <h3 className="font-semibold mb-2" data-unique-id="c2fb2415-a6c0-4bd7-bdc2-783f13b6e8ba" data-file-name="app/hunters/[id]/hunter-detail.tsx"><span className="editable-text" data-unique-id="97ec334e-963f-4016-b384-cbcf58ddcecd" data-file-name="app/hunters/[id]/hunter-detail.tsx">Member Since</span></h3>
              <div className="flex items-center text-muted-foreground" data-unique-id="d79dc98f-2eae-4f3d-9ce5-f6beb5cfeabc" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                <Calendar className="h-4 w-4 mr-2" data-unique-id="e72d0dde-0e79-4ffb-a530-45e89538fdd4" data-file-name="app/hunters/[id]/hunter-detail.tsx" />
                <span data-unique-id="674c2510-fea6-4427-b3f2-e52a403ce3a7" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true">{new Date(hunter.joinedDate).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric'
                })}</span>
              </div>
            </div>
            
            <div className="pt-4 border-t border-border" data-unique-id="6899db7a-c88c-4cc3-a898-2b709c71d987" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true">
              <Button onClick={() => setShowContactForm(!showContactForm)} className="w-full" data-unique-id="16db8589-9265-49d8-9049-923fcb46fdfd" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                <MessageSquare className="h-4 w-4 mr-2" /><span className="editable-text" data-unique-id="37dd2944-a81f-4a1e-9c94-fbac2c83741c" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                Contact Hunter
              </span></Button>
              
              {showContactForm && <motion.div initial={{
              opacity: 0,
              height: 0
            }} animate={{
              opacity: 1,
              height: 'auto'
            }} className="mt-4" data-unique-id="07e44b6d-dba1-4788-8ed1-67767250bedf" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                  <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder={`Message to ${hunter.name}...`} className="w-full h-32 p-3 border border-input rounded-md bg-background mb-2" data-unique-id="2257a283-76b4-4c6c-82b0-bec20f8a96fa" data-file-name="app/hunters/[id]/hunter-detail.tsx" />
                  <div className="flex justify-end gap-2" data-unique-id="9f0f69f3-71a0-4615-9a42-5b91794f08e8" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                    <Button variant="outline" size="sm" onClick={() => setShowContactForm(false)} data-unique-id="2271c2ee-1bf2-43f0-a552-4b2b83545907" data-file-name="app/hunters/[id]/hunter-detail.tsx"><span className="editable-text" data-unique-id="61f6dfcd-9e65-4c54-b8fe-23b185ff5adf" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                      Cancel
                    </span></Button>
                    <Button size="sm" onClick={handleSendMessage} disabled={!message.trim()} data-unique-id="5c2cb040-a8df-4f47-ad34-12802abab5c5" data-file-name="app/hunters/[id]/hunter-detail.tsx"><span className="editable-text" data-unique-id="77effd83-2ba4-48e4-9201-695afe9a5f61" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                      Send Message
                    </span></Button>
                  </div>
                </motion.div>}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Right column - Portfolio, Reviews */}
      <div className="md:col-span-2" data-unique-id="aec511f1-113c-4a49-894f-6c54b05dc303" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true">
        {/* Portfolio Section */}
        <Card className="mb-6" data-unique-id="5bbe7fc1-54df-4b9e-9038-887e7815af19" data-file-name="app/hunters/[id]/hunter-detail.tsx">
          <CardContent className="pt-6" data-unique-id="1e347815-d93b-4870-9e2a-f35a88cc7f69" data-file-name="app/hunters/[id]/hunter-detail.tsx">
            <h3 className="text-lg font-semibold mb-4" data-unique-id="6aebb3b1-4374-4e10-bacf-6c757b080094" data-file-name="app/hunters/[id]/hunter-detail.tsx"><span className="editable-text" data-unique-id="b28d632e-bca3-47fb-96b3-e1927066565d" data-file-name="app/hunters/[id]/hunter-detail.tsx">Portfolio</span></h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-unique-id="b3355c6d-b59f-4e2d-ba42-088a5c647df8" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true">
              {projects.map((project, index) => <motion.div key={index} className="border border-border rounded-md overflow-hidden" whileHover={{
              y: -5
            }} transition={{
              type: "spring",
              stiffness: 300
            }} data-unique-id="5174f758-5b9a-4974-b7df-332efe1520ca" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                  <div className="h-48 overflow-hidden" data-unique-id="1508799e-7a07-44d0-afa1-fc91486a26b8" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" data-unique-id="3fde80f5-9a99-4a44-940f-a34a70d2982b" data-file-name="app/hunters/[id]/hunter-detail.tsx" />
                  </div>
                  <div className="p-4" data-unique-id="b99858f1-17f1-42ac-bc37-2dce60534b76" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                    <h4 className="font-medium mb-1" data-unique-id="4fc5963a-f3c9-43b0-a55d-25b76b352079" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true">{project.title}</h4>
                    <p className="text-sm text-muted-foreground" data-unique-id="661af7fc-48d0-48ed-a156-9258e094e624" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true">{project.description}</p>
                  </div>
                </motion.div>)}
            </div>
          </CardContent>
        </Card>
        
        {/* Reviews Section */}
        <Card data-unique-id="4a438f09-53ae-43c9-8d13-4824ad8b335c" data-file-name="app/hunters/[id]/hunter-detail.tsx">
          <CardContent className="pt-6" data-unique-id="35c45bfc-b39c-412d-92b4-a02d070fe135" data-file-name="app/hunters/[id]/hunter-detail.tsx">
            <div className="flex justify-between items-center mb-4" data-unique-id="6b1579f9-8878-49cc-99e5-160d98b83501" data-file-name="app/hunters/[id]/hunter-detail.tsx">
              <h3 className="text-lg font-semibold" data-unique-id="754383ce-cdfb-4ee6-9a6e-854ff6eada81" data-file-name="app/hunters/[id]/hunter-detail.tsx"><span className="editable-text" data-unique-id="88b35855-b049-4766-8e44-ba4760796a42" data-file-name="app/hunters/[id]/hunter-detail.tsx">Reviews</span></h3>
              <div className="flex items-center" data-unique-id="3e1a21c1-896a-4d48-b07c-bfcbf56ebab3" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                <Star className="h-5 w-5 fill-chart-4 text-chart-4 mr-1" />
                <span className="font-semibold" data-unique-id="9cc3dab9-5cc2-4fdf-b66c-ea9df3e0ff34" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true">{hunter.rating.toFixed(1)}</span>
                <span className="text-muted-foreground ml-1" data-unique-id="3652a313-8484-47cd-be50-43652f691629" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="6fe0c439-d0f2-41ad-83bd-55a0f8e4e67c" data-file-name="app/hunters/[id]/hunter-detail.tsx">(</span>{reviews.length}<span className="editable-text" data-unique-id="5d35079a-2625-47ed-86a2-95b565d7c82a" data-file-name="app/hunters/[id]/hunter-detail.tsx">)</span></span>
              </div>
            </div>
            
            <div className="space-y-6" data-unique-id="fd676aec-d3d6-43dd-bf0c-61de0993bcab" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true">
              {reviews.map((review, index) => <div key={index} className="border-b border-border pb-6 last:border-0 last:pb-0" data-unique-id="12f97d09-02b7-4447-9d7d-82b3b2ade7c9" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                  <div className="flex justify-between items-start mb-2" data-unique-id="fb857a51-9b65-4185-8127-32a2f7f28ca8" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                    <h4 className="font-medium" data-unique-id="6549423b-ac18-4af2-a983-40c0dfcae706" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true">{review.author}</h4>
                    <div className="flex items-center" data-unique-id="4f5270ac-9eda-41be-88d5-37ead5c1de4c" data-file-name="app/hunters/[id]/hunter-detail.tsx">
                      <div className="flex" data-unique-id="7205a429-c183-4a99-a06a-22d218116eb2" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true">
                        {[...Array(5)].map((_, i) => <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-chart-4 text-chart-4' : 'text-muted-foreground'}`} data-unique-id="1a47563e-4812-4441-ab56-1c172b001596" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true" />)}
                      </div>
                      <span className="text-xs text-muted-foreground ml-2" data-unique-id="a5374eed-b113-4dd0-bf8e-f163daeea6b8" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true">{review.date}</span>
                    </div>
                  </div>
                  <p className="text-sm" data-unique-id="9336543a-26c9-451d-bf80-bb52a16a95d8" data-file-name="app/hunters/[id]/hunter-detail.tsx" data-dynamic-text="true">{review.text}</p>
                </div>)}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
}