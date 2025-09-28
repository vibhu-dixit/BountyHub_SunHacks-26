'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { AlarmClock, Building, BriefcaseBusiness, Map, Mail, Globe } from 'lucide-react';
import { useState } from 'react';
export default function CareersContent() {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    alert(`Thank you! We'll notify ${email} when opportunities are available.`);
    setEmail('');
  };
  return <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-accent to-background py-20 overflow-hidden" data-unique-id="c0ab3cf4-2565-4aa0-8497-56b154d40a06" data-file-name="app/careers/careers-content.tsx" data-dynamic-text="true">
        <div className="container mx-auto px-4" data-unique-id="ca8d9d3f-47e0-4634-8ac2-e0015bab784a" data-file-name="app/careers/careers-content.tsx">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto" data-unique-id="4a5b1abd-8fbb-4ec7-ac79-76f518a2d5bc" data-file-name="app/careers/careers-content.tsx">
            <motion.h1 className="text-4xl md:text-5xl font-bold mb-6" initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} data-unique-id="0b4d5a7a-24b7-4076-b382-6fb45f2f55d6" data-file-name="app/careers/careers-content.tsx">
              <span className="editable-text" data-unique-id="6a0d3ac3-9a4c-4cf9-8084-fdb05759544c" data-file-name="app/careers/careers-content.tsx">Join Our </span>
              <span className="text-chart-1" data-unique-id="98ab4c0e-bc49-4768-901b-5d344c25cee3" data-file-name="app/careers/careers-content.tsx"><span className="editable-text" data-unique-id="a9452a32-d23a-4183-bc14-b284344f679b" data-file-name="app/careers/careers-content.tsx">Team</span></span>
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
          }} data-unique-id="5e8066aa-4263-459e-9f10-e2a3ffe7a3b4" data-file-name="app/careers/careers-content.tsx">
              <span className="editable-text" data-unique-id="97deebc4-1608-4a4e-829f-61d222f30f95" data-file-name="app/careers/careers-content.tsx">
                Help us build the future of work by joining the BountyHub team
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
      }} data-unique-id="8e1c90f2-b0ee-4366-bbc5-c97af6b2e3cc" data-file-name="app/careers/careers-content.tsx" />
        <motion.div className="absolute -bottom-32 -left-32 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 0.3
      }} data-unique-id="fa8f90f3-f9a5-4bf4-baef-35a1ac44d4fe" data-file-name="app/careers/careers-content.tsx" />
      </section>
      
      {/* No Opportunities Yet */}
      <section className="py-24 container mx-auto px-4" data-unique-id="35e541db-269e-47a2-8214-cc9ae296b043" data-file-name="app/careers/careers-content.tsx">
        <div className="max-w-3xl mx-auto text-center" data-unique-id="fc47a7f0-b7ce-4598-94e4-50c0ef31df5b" data-file-name="app/careers/careers-content.tsx">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5
        }} className="bg-card border border-border rounded-lg p-12 shadow-sm" data-unique-id="5835d0e8-12fc-44dc-9ec4-84f58db577d9" data-file-name="app/careers/careers-content.tsx">
            <BriefcaseBusiness className="h-16 w-16 mx-auto mb-6 text-chart-1" />
            <h2 className="text-3xl font-bold mb-6" data-unique-id="cf59b7b6-2067-4193-8e8a-756e29169ab5" data-file-name="app/careers/careers-content.tsx"><span className="editable-text" data-unique-id="3382785a-6683-4024-85e0-95b7f41bf1cd" data-file-name="app/careers/careers-content.tsx">No opportunities yet. Stay Tuned!</span></h2>
            <p className="text-lg text-muted-foreground mb-8" data-unique-id="0c4f452e-f49b-435a-92f8-e29c3ca174ab" data-file-name="app/careers/careers-content.tsx"><span className="editable-text" data-unique-id="a572928e-67cf-4ffe-946c-e78b1b5e9328" data-file-name="app/careers/careers-content.tsx">
              We're growing fast and will be adding new positions soon. Sign up to be notified when we have openings that match your skills and interests.
            </span></p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto" data-unique-id="56c1361e-8d6e-4901-acc1-ed14d72c67b0" data-file-name="app/careers/careers-content.tsx">
              <div className="flex flex-col sm:flex-row gap-3" data-unique-id="4e7c8cd8-b0db-4616-99fa-e46297a0fe14" data-file-name="app/careers/careers-content.tsx">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 p-3 rounded-md border border-input bg-background" required data-unique-id="438a6071-295b-43ba-90e5-a97ea352923b" data-file-name="app/careers/careers-content.tsx" />
                <Button type="submit" className="whitespace-nowrap" data-unique-id="535cf598-cbc0-4bc6-a5c9-96d0f3f2823f" data-file-name="app/careers/careers-content.tsx">
                  <span className="editable-text" data-unique-id="04d0aa86-67ba-4b25-af7d-a5008768bd13" data-file-name="app/careers/careers-content.tsx">Notify Me</span>
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
      
      {/* Why Join Us */}
      <section className="py-16 bg-accent" data-unique-id="f3aa24c6-e229-4a33-b4a9-eb7e6f7cffcd" data-file-name="app/careers/careers-content.tsx">
        <div className="container mx-auto px-4" data-unique-id="5883c762-bc3f-48eb-904d-8752c6ec2442" data-file-name="app/careers/careers-content.tsx">
          <div className="text-center mb-12" data-unique-id="a2dcabd4-669f-43cd-914d-3f64e7274859" data-file-name="app/careers/careers-content.tsx">
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
          }} data-unique-id="81679180-b942-420c-81f2-b746c13161b2" data-file-name="app/careers/careers-content.tsx">
              <h2 className="text-3xl font-bold mb-6" data-unique-id="f15673f7-318d-40fc-82d3-b515aff772b5" data-file-name="app/careers/careers-content.tsx"><span className="editable-text" data-unique-id="813593f7-0ef7-4de2-86f2-05044990ef90" data-file-name="app/careers/careers-content.tsx">Why Join BountyHub?</span></h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-unique-id="b1457d2b-b8df-43a7-ba02-d33973518e40" data-file-name="app/careers/careers-content.tsx"><span className="editable-text" data-unique-id="e62a6165-1703-44e2-a278-b6a75f3a8b4b" data-file-name="app/careers/careers-content.tsx">
                We're building a team of passionate individuals who want to make a difference in how people work and collaborate worldwide.
              </span></p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-unique-id="71572941-4afb-4db3-901b-92d8406ef047" data-file-name="app/careers/careers-content.tsx" data-dynamic-text="true">
            {[{
            icon: <Building className="h-10 w-10 mb-4 text-chart-1" data-unique-id="ef212a5c-3d01-4854-a6e4-024f8fe8bc0d" data-file-name="app/careers/careers-content.tsx" data-dynamic-text="true" />,
            title: "Innovative Environment",
            description: "Be part of a team that's reimagining the future of work and pushing the boundaries of what's possible."
          }, {
            icon: <AlarmClock className="h-10 w-10 mb-4 text-chart-2" data-unique-id="8a786ab7-cca9-4e73-91bb-c1dd066c6fea" data-file-name="app/careers/careers-content.tsx" data-dynamic-text="true" />,
            title: "Flexible Work",
            description: "We believe in results, not hours. Enjoy flexible schedules and remote-friendly policies."
          }, {
            icon: <Globe className="h-10 w-10 mb-4 text-chart-3" data-unique-id="5704a37d-a518-4444-aa5a-c8ef459b953e" data-file-name="app/careers/careers-content.tsx" data-dynamic-text="true" />,
            title: "Global Impact",
            description: "Your work will help connect talented individuals with opportunities around the world."
          }].map((benefit, index) => <motion.div key={index} initial={{
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
          }} className="bg-card border border-border rounded-lg p-6 shadow-sm" data-unique-id="cd83486b-3b7d-42d6-8aeb-be60b1257b2a" data-file-name="app/careers/careers-content.tsx" data-dynamic-text="true">
                {benefit.icon}
                <h3 className="text-xl font-bold mb-2" data-unique-id="0b4d6c2c-1d63-4d76-a7dd-7a869a0f0207" data-file-name="app/careers/careers-content.tsx" data-dynamic-text="true">{benefit.title}</h3>
                <p className="text-muted-foreground" data-unique-id="189385c7-39a3-4ee4-bfef-5b9c48dbd8f2" data-file-name="app/careers/careers-content.tsx" data-dynamic-text="true">{benefit.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>
      
      {/* Contact */}
      <section className="py-16 container mx-auto px-4" data-unique-id="df793210-dc89-4fe9-a4b7-323c8ba8a929" data-file-name="app/careers/careers-content.tsx">
        <div className="max-w-3xl mx-auto text-center" data-unique-id="52bd9fc0-818d-47e0-a23d-b9f78dc92ed7" data-file-name="app/careers/careers-content.tsx">
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
        }} data-unique-id="30f1c2f9-afe3-4547-a725-ccbaf551edc1" data-file-name="app/careers/careers-content.tsx">
            <h2 className="text-3xl font-bold mb-6" data-unique-id="691a039d-65e6-4652-8bd2-6dd46d10125d" data-file-name="app/careers/careers-content.tsx"><span className="editable-text" data-unique-id="ddd56793-d497-47a8-8f86-8161442a822d" data-file-name="app/careers/careers-content.tsx">Have Questions?</span></h2>
            <p className="text-lg text-muted-foreground mb-8" data-unique-id="05dd2f94-3a89-4263-a36e-a3dc64ee0f08" data-file-name="app/careers/careers-content.tsx"><span className="editable-text" data-unique-id="c2ef5ee3-9f51-4bc2-bcf5-38e778dbfa52" data-file-name="app/careers/careers-content.tsx">
              If you'd like to learn more about working at BountyHub, feel free to reach out to our team.
            </span></p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center" data-unique-id="45e1ed28-0f08-4ac1-bcbf-136aa2eaea4c" data-file-name="app/careers/careers-content.tsx">
              <div className="flex items-center" data-unique-id="99607729-b876-4b7a-898b-4509584d52c6" data-file-name="app/careers/careers-content.tsx">
                <Mail className="h-5 w-5 mr-2 text-chart-1" />
                <span data-unique-id="9c00eca1-de57-4a2d-84bf-fb080d54c4cb" data-file-name="app/careers/careers-content.tsx"><span className="editable-text" data-unique-id="585f85cb-27d8-48d7-b1c1-583388faf7b3" data-file-name="app/careers/careers-content.tsx">careers@bountyhub.com</span></span>
              </div>
              <div className="flex items-center" data-unique-id="11a5c365-0da5-476e-8ae7-d6d67811463f" data-file-name="app/careers/careers-content.tsx">
                <Map className="h-5 w-5 mr-2 text-chart-1" />
                <span data-unique-id="8e4b063e-ab2c-4b17-885e-737de2d86201" data-file-name="app/careers/careers-content.tsx"><span className="editable-text" data-unique-id="91d6a451-bf8b-4aae-bca9-b5c110eaec97" data-file-name="app/careers/careers-content.tsx">San Francisco, CA</span></span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>;
}