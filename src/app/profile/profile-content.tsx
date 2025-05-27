'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Check, Edit, Github, Linkedin, Mail, MapPin, Plus, Save, Trash2, Twitter, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
interface ProfileData {
  name: string;
  title: string;
  location: string;
  bio: string;
  avatar: string;
  hourlyRate: number;
  skills: string[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  experience: {
    role: string;
    company: string;
    duration: string;
    description: string;
  }[];
  portfolio: {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  }[];
  social: {
    twitter: string;
    linkedin: string;
    github: string;
  };
}
export default function ProfileContent() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'Alex Johnson',
    title: 'Full Stack Developer',
    location: 'San Francisco, CA',
    bio: 'Passionate developer with 5+ years of experience in web and mobile development. Specialized in React, Node.js, and TypeScript.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    hourlyRate: 65,
    skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'MongoDB', 'AWS', 'Next.js', 'TailwindCSS'],
    education: [{
      degree: 'B.S. Computer Science',
      institution: 'Stanford University',
      year: '2018'
    }, {
      degree: 'Full Stack Web Development',
      institution: 'Coding Bootcamp',
      year: '2019'
    }],
    experience: [{
      role: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      duration: '2020 - Present',
      description: 'Led development of multiple web applications using React and TypeScript. Improved performance by 40%.'
    }, {
      role: 'Web Developer',
      company: 'Digital Solutions',
      duration: '2018 - 2020',
      description: 'Developed and maintained client websites and applications using modern JavaScript frameworks.'
    }],
    portfolio: [{
      title: 'E-commerce Platform',
      description: 'A full-featured online store with payment processing and inventory management.',
      imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#'
    }, {
      title: 'Task Management App',
      description: 'A productivity application with real-time collaboration features.',
      imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#'
    }],
    social: {
      twitter: 'alexjohnson',
      linkedin: 'alex-johnson',
      github: 'alexjdev'
    }
  });
  const [newSkill, setNewSkill] = useState('');
  const [editingEducation, setEditingEducation] = useState<number | null>(null);
  const [newEducation, setNewEducation] = useState({
    degree: '',
    institution: '',
    year: ''
  });
  const [editingExperience, setEditingExperience] = useState<number | null>(null);
  const [newExperience, setNewExperience] = useState({
    role: '',
    company: '',
    duration: '',
    description: ''
  });
  const [editingPortfolio, setEditingPortfolio] = useState<number | null>(null);
  const [newPortfolio, setNewPortfolio] = useState({
    title: '',
    description: '',
    imageUrl: '',
    link: ''
  });

  // Load profile data from localStorage on component mount
  useEffect(() => {
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
      try {
        setProfileData(JSON.parse(storedProfile));
      } catch (error) {
        console.error('Error parsing stored profile:', error);
      }
    }
  }, []);

  // Save profile data to localStorage when updated
  const saveProfile = () => {
    localStorage.setItem('userProfile', JSON.stringify(profileData));
    setIsEditing(false);
  };
  const addSkill = () => {
    if (newSkill.trim() && !profileData.skills.includes(newSkill.trim())) {
      setProfileData({
        ...profileData,
        skills: [...profileData.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };
  const removeSkill = (skillToRemove: string) => {
    setProfileData({
      ...profileData,
      skills: profileData.skills.filter(skill => skill !== skillToRemove)
    });
  };
  const handleAddEducation = () => {
    if (newEducation.degree && newEducation.institution) {
      if (editingEducation !== null) {
        // Update existing education
        const updatedEducation = [...profileData.education];
        updatedEducation[editingEducation] = newEducation;
        setProfileData({
          ...profileData,
          education: updatedEducation
        });
      } else {
        // Add new education
        setProfileData({
          ...profileData,
          education: [...profileData.education, newEducation]
        });
      }
      setNewEducation({
        degree: '',
        institution: '',
        year: ''
      });
      setEditingEducation(null);
    }
  };
  const handleAddExperience = () => {
    if (newExperience.role && newExperience.company) {
      if (editingExperience !== null) {
        // Update existing experience
        const updatedExperience = [...profileData.experience];
        updatedExperience[editingExperience] = newExperience;
        setProfileData({
          ...profileData,
          experience: updatedExperience
        });
      } else {
        // Add new experience
        setProfileData({
          ...profileData,
          experience: [...profileData.experience, newExperience]
        });
      }
      setNewExperience({
        role: '',
        company: '',
        duration: '',
        description: ''
      });
      setEditingExperience(null);
    }
  };
  const handleAddPortfolio = () => {
    if (newPortfolio.title && newPortfolio.description) {
      if (editingPortfolio !== null) {
        // Update existing portfolio item
        const updatedPortfolio = [...profileData.portfolio];
        updatedPortfolio[editingPortfolio] = newPortfolio;
        setProfileData({
          ...profileData,
          portfolio: updatedPortfolio
        });
      } else {
        // Add new portfolio item
        setProfileData({
          ...profileData,
          portfolio: [...profileData.portfolio, newPortfolio]
        });
      }
      setNewPortfolio({
        title: '',
        description: '',
        imageUrl: '',
        link: ''
      });
      setEditingPortfolio(null);
    }
  };
  return <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-unique-id="4751d5e8-8d0a-4a76-9923-996abfcaea66" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
      {/* Left column - Profile info */}
      <div className="md:col-span-1" data-unique-id="cdd490ed-f7c4-4fcc-9bea-5aaa47495a32" data-file-name="app/profile/profile-content.tsx">
        <Card className="mb-6" data-unique-id="65e248dd-41e4-47a0-867a-f304fd0e9391" data-file-name="app/profile/profile-content.tsx">
          <CardContent className="pt-6" data-unique-id="136c2353-e042-4aa1-8e1f-887d4c0487be" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
            <div className="flex flex-col items-center mb-6 relative" data-unique-id="b0eba6ae-ab80-41e5-9582-18d41422a638" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
              <div className="h-32 w-32 rounded-full overflow-hidden mb-4 relative group" data-unique-id="6dd90938-4dfa-48cf-b68c-1f01c5628ca4" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
                <img src={profileData.avatar} alt={profileData.name} className="h-full w-full object-cover" data-unique-id="4c5ff34d-6724-4858-a3e5-dfb20692264d" data-file-name="app/profile/profile-content.tsx" />
                {isEditing && <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" data-unique-id="747e40da-d876-4c25-ab0d-f4d34b6f30be" data-file-name="app/profile/profile-content.tsx">
                    <Camera className="h-8 w-8 text-white" />
                  </div>}
              </div>
              
              {isEditing ? <input type="text" value={profileData.name} onChange={e => setProfileData({
              ...profileData,
              name: e.target.value
            })} className="text-xl font-semibold text-center w-full mb-1 bg-background border border-input rounded px-2 py-1" data-unique-id="a32f00e9-335b-41d9-85ea-c3b9f7327055" data-file-name="app/profile/profile-content.tsx" /> : <h2 className="text-xl font-semibold mb-1" data-unique-id="5dbb4634-dae2-466b-aba5-6fa584b12db7" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">{profileData.name}</h2>}
              
              {isEditing ? <input type="text" value={profileData.title} onChange={e => setProfileData({
              ...profileData,
              title: e.target.value
            })} className="text-muted-foreground text-center w-full mb-2 bg-background border border-input rounded px-2 py-1" data-unique-id="9000b88d-f73e-4373-9f12-fc6ce52f09e2" data-file-name="app/profile/profile-content.tsx" /> : <p className="text-muted-foreground mb-2" data-unique-id="e6ea572f-dac8-47ed-998f-1363f91eea13" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">{profileData.title}</p>}
              
              {isEditing ? <div className="flex items-center mb-2 w-full" data-unique-id="fd1f377b-eaab-46ce-9889-127f1a91b76a" data-file-name="app/profile/profile-content.tsx">
                  <MapPin className="h-4 w-4 text-muted-foreground mr-1 flex-shrink-0" />
                  <input type="text" value={profileData.location} onChange={e => setProfileData({
                ...profileData,
                location: e.target.value
              })} className="text-sm text-muted-foreground w-full bg-background border border-input rounded px-2 py-1" data-unique-id="59057412-fbe1-412c-a111-dda68f444bab" data-file-name="app/profile/profile-content.tsx" />
                </div> : <div className="flex items-center mb-2" data-unique-id="b4964ad6-a374-45a2-b7e7-4ec2c29a92df" data-file-name="app/profile/profile-content.tsx">
                  <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
                  <span className="text-sm text-muted-foreground" data-unique-id="5d9fa271-1ae5-4833-8396-124c7dbaa60d" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">{profileData.location}</span>
                </div>}
              
              <div className="flex space-x-3 text-muted-foreground" data-unique-id="273e9b0a-26e1-41ec-9eb3-822b273c19d0" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
                {profileData.social.twitter && <a href={`https://twitter.com/${profileData.social.twitter}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" data-unique-id="9000ef90-bf79-4678-8de7-a781ca4f1f89" data-file-name="app/profile/profile-content.tsx">
                    <Twitter className="h-5 w-5" />
                  </a>}
                {profileData.social.linkedin && <a href={`https://linkedin.com/in/${profileData.social.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" data-unique-id="2c3e60ef-61c6-444c-a91b-d82936d0285f" data-file-name="app/profile/profile-content.tsx">
                    <Linkedin className="h-5 w-5" />
                  </a>}
                {profileData.social.github && <a href={`https://github.com/${profileData.social.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" data-unique-id="06524995-767f-498e-b4ba-e4260d38a015" data-file-name="app/profile/profile-content.tsx">
                    <Github className="h-5 w-5" />
                  </a>}
                <a href={`mailto:${profileData.name.toLowerCase().replace(' ', '.')}@example.com`} className="hover:text-primary transition-colors" data-unique-id="b080c835-fd7d-43f3-8360-413647e5225a" data-file-name="app/profile/profile-content.tsx">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {isEditing ? <div className="mb-6" data-unique-id="b0b0db8d-e9f9-401b-a0a1-2ce4e185e9d8" data-file-name="app/profile/profile-content.tsx">
                <label className="block text-sm font-medium mb-2" data-unique-id="e2767176-2681-45c2-8c27-fc1345c6445b" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="9c4dea18-0c83-4bcf-a3b2-8cc3b04657f0" data-file-name="app/profile/profile-content.tsx">Social Profiles</span></label>
                <div className="space-y-3" data-unique-id="ec900ab9-e13e-4d09-9205-b8ed106414d0" data-file-name="app/profile/profile-content.tsx">
                  <div className="flex items-center" data-unique-id="bc268906-842c-42b6-a7cc-73faee5739db" data-file-name="app/profile/profile-content.tsx">
                    <Twitter className="h-4 w-4 mr-2 text-muted-foreground" />
                    <input type="text" value={profileData.social.twitter} onChange={e => setProfileData({
                  ...profileData,
                  social: {
                    ...profileData.social,
                    twitter: e.target.value
                  }
                })} placeholder="Twitter username" className="w-full bg-background border border-input rounded px-2 py-1 text-sm" data-unique-id="cbded85e-6a86-4c89-9655-d4e5d1b303ba" data-file-name="app/profile/profile-content.tsx" />
                  </div>
                  <div className="flex items-center" data-unique-id="e64d75e6-793b-4650-afe9-358b77a383ee" data-file-name="app/profile/profile-content.tsx">
                    <Linkedin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <input type="text" value={profileData.social.linkedin} onChange={e => setProfileData({
                  ...profileData,
                  social: {
                    ...profileData.social,
                    linkedin: e.target.value
                  }
                })} placeholder="LinkedIn username" className="w-full bg-background border border-input rounded px-2 py-1 text-sm" data-unique-id="b7d6f5e2-4a5d-4238-b108-21020980deb2" data-file-name="app/profile/profile-content.tsx" />
                  </div>
                  <div className="flex items-center" data-unique-id="11be294f-bdcc-43a5-b818-0960e8c1e9de" data-file-name="app/profile/profile-content.tsx">
                    <Github className="h-4 w-4 mr-2 text-muted-foreground" />
                    <input type="text" value={profileData.social.github} onChange={e => setProfileData({
                  ...profileData,
                  social: {
                    ...profileData.social,
                    github: e.target.value
                  }
                })} placeholder="GitHub username" className="w-full bg-background border border-input rounded px-2 py-1 text-sm" data-unique-id="314dcb5a-d000-48f8-9ff7-5f6ff455fbc0" data-file-name="app/profile/profile-content.tsx" />
                  </div>
                </div>
              </div> : null}
            
            <div className="mb-6" data-unique-id="b3c5c019-56d9-4432-b75f-cdd525917939" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
              <h3 className="font-semibold mb-2" data-unique-id="6f9d3d6a-0194-40b7-8f59-ba57ca75f816" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="35bfcbce-c7d3-4ca4-bfe1-c5dafb698280" data-file-name="app/profile/profile-content.tsx">About Me</span></h3>
              {isEditing ? <textarea value={profileData.bio} onChange={e => setProfileData({
              ...profileData,
              bio: e.target.value
            })} className="w-full h-32 bg-background border border-input rounded px-3 py-2 text-sm" data-unique-id="3e4b8334-9ea1-4a25-a215-a01922e6aa40" data-file-name="app/profile/profile-content.tsx" /> : <p className="text-sm text-muted-foreground" data-unique-id="7f7c7866-7247-4d87-b889-cd603159d1fc" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">{profileData.bio}</p>}
            </div>
            
            <div className="mb-6" data-unique-id="f90ec089-0003-42fe-a994-b544c8eeb8d0" data-file-name="app/profile/profile-content.tsx">
              <div className="flex justify-between items-center mb-2" data-unique-id="add35c56-05e2-4a15-bff1-9c4e1cde94a0" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
                <h3 className="font-semibold" data-unique-id="c18d7abf-6c21-42b5-a169-41a346e34500" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="e3f577a2-71d8-49b2-90bc-84f3a18a2065" data-file-name="app/profile/profile-content.tsx">Skills</span></h3>
                {isEditing && <div className="flex items-center" data-unique-id="99932249-ae63-4bfe-9a33-eafa608af352" data-file-name="app/profile/profile-content.tsx">
                    <input type="text" value={newSkill} onChange={e => setNewSkill(e.target.value)} placeholder="Add skill" className="text-sm bg-background border border-input rounded px-2 py-1 mr-2" onKeyDown={e => e.key === 'Enter' && addSkill()} data-unique-id="fae05532-815a-435f-8505-8973c773e615" data-file-name="app/profile/profile-content.tsx" />
                    <Button size="sm" variant="outline" onClick={addSkill} className="h-7 w-7 p-0" data-unique-id="5e2ebd71-ee82-4cc3-bce9-f33666698870" data-file-name="app/profile/profile-content.tsx">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>}
              </div>
              <div className="flex flex-wrap gap-2" data-unique-id="95758489-c62f-41d1-8bc1-e873ed01af3a" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
                {profileData.skills.map((skill, index) => <Badge key={index} variant={index % 3 === 0 ? "default" : index % 3 === 1 ? "secondary" : "outline"} className="group" data-unique-id="ecbcc1e0-b33a-4f76-98a5-1a8bae7e1217" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
                    {skill}
                    {isEditing && <button onClick={() => removeSkill(skill)} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" data-unique-id="cd6592a1-6479-40ee-b937-8de5d27d92cb" data-file-name="app/profile/profile-content.tsx">
                        <X className="h-3 w-3" data-unique-id="a3dfe512-027f-4514-8a19-332d4390e6d1" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true" />
                      </button>}
                  </Badge>)}
              </div>
            </div>
            
            <div className="mb-6" data-unique-id="ee1bd9a5-225f-4a8d-aeac-946ab77cae32" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
              <h3 className="font-semibold mb-2" data-unique-id="8fe638bd-69e7-4bc8-b672-dcb10da6e687" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="61757a69-42f0-49b1-81bd-444df598677c" data-file-name="app/profile/profile-content.tsx">Hourly Rate</span></h3>
              {isEditing ? <div className="flex items-center" data-unique-id="85dfa00b-74b3-4830-ac09-f1e97833cb6e" data-file-name="app/profile/profile-content.tsx">
                  <span className="mr-2" data-unique-id="c28a79a7-2d1c-4fa2-9554-4cd1b0d239a7" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="fc7237b8-3a17-4e27-ab0f-4e25043a5a66" data-file-name="app/profile/profile-content.tsx">$</span></span>
                  <input type="number" value={profileData.hourlyRate} onChange={e => setProfileData({
                ...profileData,
                hourlyRate: parseInt(e.target.value) || 0
              })} className="w-24 bg-background border border-input rounded px-2 py-1" data-unique-id="3860c8c1-90e0-4188-8723-9fd0ddf8acec" data-file-name="app/profile/profile-content.tsx" />
                  <span className="ml-2" data-unique-id="31c4806b-1494-44cd-a029-743968209cb6" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="f5ca7936-5112-4598-88dc-b0c3d78fa13b" data-file-name="app/profile/profile-content.tsx">/ hour</span></span>
                </div> : <p className="text-lg font-semibold text-primary" data-unique-id="67cb05d6-0224-404f-878f-af5477f1e5b4" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="1a358e34-7fc4-4ed1-950b-aac4a79c8aaa" data-file-name="app/profile/profile-content.tsx">$</span>{profileData.hourlyRate}<span className="editable-text" data-unique-id="c2c7be6c-7d02-4767-8d47-6d379d98aff7" data-file-name="app/profile/profile-content.tsx">/hr</span></p>}
            </div>
            
            <div className="pt-4 border-t border-border" data-unique-id="f3025ebd-5c5b-4d61-8c16-f200d0c06cd2" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
              {isEditing ? <div className="flex gap-3" data-unique-id="18c9d6a3-65f5-40a9-9d55-83e646fbca0c" data-file-name="app/profile/profile-content.tsx">
                  <Button onClick={saveProfile} className="flex-1" data-unique-id="95d57d44-fe2d-4c94-b9d8-0aaa18102368" data-file-name="app/profile/profile-content.tsx">
                    <Save className="h-4 w-4 mr-2" /><span className="editable-text" data-unique-id="911eb6d6-d3a7-4aa0-80b8-d228950d4854" data-file-name="app/profile/profile-content.tsx">
                    Save Changes
                  </span></Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)} className="flex-1" data-unique-id="8c1adc93-7c0f-457e-afd4-236e4f3d5f95" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="e1bfe418-1ab0-4347-bdc8-49809aef4cc5" data-file-name="app/profile/profile-content.tsx">
                    Cancel
                  </span></Button>
                </div> : <Button onClick={() => setIsEditing(true)} variant="outline" className="w-full" data-unique-id="2116bb6e-01a9-48fd-a0be-632871f4fa21" data-file-name="app/profile/profile-content.tsx">
                  <Edit className="h-4 w-4 mr-2" /><span className="editable-text" data-unique-id="cb4e0344-7891-4fb5-b906-54bb00ae2814" data-file-name="app/profile/profile-content.tsx">
                  Edit Profile
                </span></Button>}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Right column - Education, Experience, Portfolio */}
      <div className="md:col-span-2" data-unique-id="b8ba04bd-d7f8-4693-8c40-5199186268a0" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
        {/* Education Section */}
        <Card className="mb-6" data-unique-id="1534c004-df2c-4704-b480-5bed2f76e910" data-file-name="app/profile/profile-content.tsx">
          <CardContent className="pt-6" data-unique-id="0659e04f-b706-4cef-8446-8b290736efe6" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
            <div className="flex justify-between items-center mb-4" data-unique-id="bb1af142-07d0-471b-8289-f35b9961d1e1" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
              <h3 className="text-lg font-semibold" data-unique-id="08d1b46b-4419-4eaf-9fe6-de7c4c267f4f" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="5ac690ed-5e67-4f33-af81-4ac13842653f" data-file-name="app/profile/profile-content.tsx">Education</span></h3>
              {isEditing && <Button size="sm" variant="outline" onClick={() => {
              setNewEducation({
                degree: '',
                institution: '',
                year: ''
              });
              setEditingEducation(null);
            }} className="h-8" data-unique-id="f848dc5a-d2fd-4131-a134-b3a800342984" data-file-name="app/profile/profile-content.tsx">
                  <Plus className="h-4 w-4 mr-1" /><span className="editable-text" data-unique-id="82ef309b-67d3-4a35-80f0-3b06bcb12b96" data-file-name="app/profile/profile-content.tsx">
                  Add Education
                </span></Button>}
            </div>
            
            {(editingEducation !== null || isEditing && newEducation.degree) && <motion.div initial={{
            opacity: 0,
            height: 0
          }} animate={{
            opacity: 1,
            height: 'auto'
          }} className="mb-4 p-4 border border-border rounded-md bg-accent/50" data-unique-id="329beb1a-4384-42fc-9ff8-8a12bcec414e" data-file-name="app/profile/profile-content.tsx">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" data-unique-id="4f523ae7-d9fa-4446-8a0c-ca31ee88b2a1" data-file-name="app/profile/profile-content.tsx">
                  <div data-unique-id="269ceeee-55af-452f-b2d2-78e75423659a" data-file-name="app/profile/profile-content.tsx">
                    <label className="block text-sm font-medium mb-1" data-unique-id="69daae17-b588-4e2a-a176-a1678b41e542" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="9a5842ab-6975-4cca-8adb-d99cc7e2e359" data-file-name="app/profile/profile-content.tsx">Degree/Certificate</span></label>
                    <input type="text" value={newEducation.degree} onChange={e => setNewEducation({
                  ...newEducation,
                  degree: e.target.value
                })} className="w-full bg-background border border-input rounded px-3 py-2" placeholder="B.S. Computer Science" data-unique-id="2d4620dd-bf00-4006-bbbd-066ab6b74b22" data-file-name="app/profile/profile-content.tsx" />
                  </div>
                  <div data-unique-id="3ed7a996-b62f-40f8-a020-e889291a610c" data-file-name="app/profile/profile-content.tsx">
                    <label className="block text-sm font-medium mb-1" data-unique-id="73c305da-9b34-49b3-9061-38c7beb2859a" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="38a31f08-bec4-4247-97e9-22a901f86197" data-file-name="app/profile/profile-content.tsx">Institution</span></label>
                    <input type="text" value={newEducation.institution} onChange={e => setNewEducation({
                  ...newEducation,
                  institution: e.target.value
                })} className="w-full bg-background border border-input rounded px-3 py-2" placeholder="University Name" data-unique-id="4403b23d-62e4-4178-aa26-cfa4f7f91897" data-file-name="app/profile/profile-content.tsx" />
                  </div>
                </div>
                <div className="mb-4" data-unique-id="fd8ea1cb-a501-446a-a5d4-6d0431afcd58" data-file-name="app/profile/profile-content.tsx">
                  <label className="block text-sm font-medium mb-1" data-unique-id="a52c2156-83d2-4df2-8cd3-8117852dfcf8" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="fd19d26f-826c-446f-9070-7c19b4fc5126" data-file-name="app/profile/profile-content.tsx">Year</span></label>
                  <input type="text" value={newEducation.year} onChange={e => setNewEducation({
                ...newEducation,
                year: e.target.value
              })} className="w-full md:w-1/3 bg-background border border-input rounded px-3 py-2" placeholder="2020" data-unique-id="5fd688ec-c367-498c-96b0-394f155d92cd" data-file-name="app/profile/profile-content.tsx" />
                </div>
                <div className="flex justify-end gap-2" data-unique-id="4a88da5f-6d96-428b-b3b5-f0ea992c1398" data-file-name="app/profile/profile-content.tsx">
                  <Button size="sm" variant="outline" onClick={() => {
                setNewEducation({
                  degree: '',
                  institution: '',
                  year: ''
                });
                setEditingEducation(null);
              }} data-unique-id="34a12691-fc41-4db3-9ef4-fee8ac61bc93" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="e8ff3f67-b7ab-4919-b0d2-f2a95f84d644" data-file-name="app/profile/profile-content.tsx">
                    Cancel
                  </span></Button>
                  <Button size="sm" onClick={handleAddEducation} data-unique-id="2f020dd4-33a8-46f8-b6cc-e264bede8e62" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
                    {editingEducation !== null ? 'Update' : 'Add'}<span className="editable-text" data-unique-id="3672cdb5-8f8a-4a22-a955-f2ce7fa9002f" data-file-name="app/profile/profile-content.tsx"> Education
                  </span></Button>
                </div>
              </motion.div>}
            
            <div className="space-y-4" data-unique-id="ed4f6224-53d4-4fa6-b714-ca1f70557457" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
              {profileData.education.map((edu, index) => <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0" data-unique-id="c4c11e22-8bf2-4017-ab21-40d67468322f" data-file-name="app/profile/profile-content.tsx">
                  <div className="flex justify-between" data-unique-id="9cfd1835-d4cf-4033-aea5-2e20a6171fb4" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
                    <div data-unique-id="cf469236-8ef6-42f1-a06b-9db5a00406cd" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
                      <h4 className="font-medium" data-unique-id="ffffbe6a-b1a9-49fd-a74d-d6546b70a2c4" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground" data-unique-id="9360db94-f337-4d28-818e-2c375045447c" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">{edu.institution}</p>
                      {edu.year && <p className="text-sm text-muted-foreground" data-unique-id="33b011f3-3274-4afe-bc51-3827ff1e5979" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">{edu.year}</p>}
                    </div>
                    {isEditing && <div className="flex gap-2" data-unique-id="ad591991-77ff-4640-a121-972471188aa7" data-file-name="app/profile/profile-content.tsx">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0" onClick={() => {
                    setNewEducation(edu);
                    setEditingEducation(index);
                  }} data-unique-id="ac26d7e6-4653-449a-a596-5b9e66e949d9" data-file-name="app/profile/profile-content.tsx">
                          <Edit className="h-4 w-4" data-unique-id="f689ec5d-8ffc-462a-b9c8-f6d73c330815" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive hover:text-destructive" onClick={() => {
                    const updatedEducation = [...profileData.education];
                    updatedEducation.splice(index, 1);
                    setProfileData({
                      ...profileData,
                      education: updatedEducation
                    });
                  }} data-unique-id="008793b6-c5d7-4b93-952c-7a6841fa0c24" data-file-name="app/profile/profile-content.tsx">
                          <Trash2 className="h-4 w-4" data-unique-id="2c4eb388-54b7-454a-a39b-d0b3001006e0" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true" />
                        </Button>
                      </div>}
                  </div>
                </div>)}
              
              {profileData.education.length === 0 && !isEditing && <p className="text-sm text-muted-foreground italic" data-unique-id="511d183d-3d5b-4e04-80bc-7f295ae3224b" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="73666abe-c52f-40bf-a343-5cda615e11ca" data-file-name="app/profile/profile-content.tsx">No education information added yet.</span></p>}
            </div>
          </CardContent>
        </Card>
        
        {/* Experience Section */}
        <Card className="mb-6" data-unique-id="edbe5128-ad1d-447d-97ab-44c7a1758ccf" data-file-name="app/profile/profile-content.tsx">
          <CardContent className="pt-6" data-unique-id="d30a2b9d-1db5-4af4-ba9d-7fed25d7a30f" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
            <div className="flex justify-between items-center mb-4" data-unique-id="3a24b252-44f2-4c76-919e-9464441aa629" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
              <h3 className="text-lg font-semibold" data-unique-id="25278116-434b-4c50-92fe-6a7c2d614e6d" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="d5655e91-e6d7-435b-9c6c-da57c27683f6" data-file-name="app/profile/profile-content.tsx">Work Experience</span></h3>
              {isEditing && <Button size="sm" variant="outline" onClick={() => {
              setNewExperience({
                role: '',
                company: '',
                duration: '',
                description: ''
              });
              setEditingExperience(null);
            }} className="h-8" data-unique-id="52f67d89-fbf7-4076-8414-f400272ae5e4" data-file-name="app/profile/profile-content.tsx">
                  <Plus className="h-4 w-4 mr-1" /><span className="editable-text" data-unique-id="36293a87-78e0-4e52-913b-323ce3141361" data-file-name="app/profile/profile-content.tsx">
                  Add Experience
                </span></Button>}
            </div>
            
            {(editingExperience !== null || isEditing && newExperience.role) && <motion.div initial={{
            opacity: 0,
            height: 0
          }} animate={{
            opacity: 1,
            height: 'auto'
          }} className="mb-4 p-4 border border-border rounded-md bg-accent/50" data-unique-id="4bba98d0-8714-4750-ad9e-e5e2b7051928" data-file-name="app/profile/profile-content.tsx">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" data-unique-id="5cc5fed4-dfec-4f82-be95-a653308503df" data-file-name="app/profile/profile-content.tsx">
                  <div data-unique-id="28aa14a1-d3db-41a9-ba95-cd8d3983f244" data-file-name="app/profile/profile-content.tsx">
                    <label className="block text-sm font-medium mb-1" data-unique-id="26aeca0a-b337-40ac-87fb-12f98c490ccc" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="2420ea01-4abd-4a79-85fb-60e722ddc72f" data-file-name="app/profile/profile-content.tsx">Role/Position</span></label>
                    <input type="text" value={newExperience.role} onChange={e => setNewExperience({
                  ...newExperience,
                  role: e.target.value
                })} className="w-full bg-background border border-input rounded px-3 py-2" placeholder="Senior Developer" data-unique-id="34ead508-7f99-466b-be04-9d3122ae6c00" data-file-name="app/profile/profile-content.tsx" />
                  </div>
                  <div data-unique-id="de31da20-6b8f-4609-9b69-c6d7e5581330" data-file-name="app/profile/profile-content.tsx">
                    <label className="block text-sm font-medium mb-1" data-unique-id="fb93671a-21b1-45e6-8a96-1b3b47e035e4" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="b5b8cd7e-7cdc-480e-a64f-dfa60573893a" data-file-name="app/profile/profile-content.tsx">Company</span></label>
                    <input type="text" value={newExperience.company} onChange={e => setNewExperience({
                  ...newExperience,
                  company: e.target.value
                })} className="w-full bg-background border border-input rounded px-3 py-2" placeholder="Company Name" data-unique-id="70da4f77-1a46-4fa2-9b41-12c434e99a4d" data-file-name="app/profile/profile-content.tsx" />
                  </div>
                </div>
                <div className="mb-4" data-unique-id="aed228b5-3ef9-4f91-9e74-f490204df861" data-file-name="app/profile/profile-content.tsx">
                  <label className="block text-sm font-medium mb-1" data-unique-id="cf0fb769-9b14-49b9-a691-8e432982eeee" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="14c2d99c-bbd9-4851-84a3-6a03a4d94869" data-file-name="app/profile/profile-content.tsx">Duration</span></label>
                  <input type="text" value={newExperience.duration} onChange={e => setNewExperience({
                ...newExperience,
                duration: e.target.value
              })} className="w-full md:w-1/2 bg-background border border-input rounded px-3 py-2" placeholder="2020 - Present" data-unique-id="8229e1e4-86d8-4a75-9c6c-9e122f2a74b9" data-file-name="app/profile/profile-content.tsx" />
                </div>
                <div className="mb-4" data-unique-id="a8d65bad-53b4-4ec3-bed9-08a040507c70" data-file-name="app/profile/profile-content.tsx">
                  <label className="block text-sm font-medium mb-1" data-unique-id="39a0e3f4-9a08-4c07-9741-45b78d2ecc99" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="6c6506e4-088d-411f-ba03-2be0a81a050a" data-file-name="app/profile/profile-content.tsx">Description</span></label>
                  <textarea value={newExperience.description} onChange={e => setNewExperience({
                ...newExperience,
                description: e.target.value
              })} className="w-full h-20 bg-background border border-input rounded px-3 py-2" placeholder="Describe your responsibilities and achievements..." data-unique-id="d6206bf7-f6ff-4788-9796-906b33417556" data-file-name="app/profile/profile-content.tsx" />
                </div>
                <div className="flex justify-end gap-2" data-unique-id="a13973cd-6ed5-4b63-ab37-0ba502ee3a0a" data-file-name="app/profile/profile-content.tsx">
                  <Button size="sm" variant="outline" onClick={() => {
                setNewExperience({
                  role: '',
                  company: '',
                  duration: '',
                  description: ''
                });
                setEditingExperience(null);
              }} data-unique-id="e2c53d37-68e2-42a8-bbdd-7b5cc5c541e6" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="4aafe471-419c-42f4-93ac-8ba54caa2275" data-file-name="app/profile/profile-content.tsx">
                    Cancel
                  </span></Button>
                  <Button size="sm" onClick={handleAddExperience} data-unique-id="6d502613-cd57-4cc9-b76a-ce2ab82b357c" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
                    {editingExperience !== null ? 'Update' : 'Add'}<span className="editable-text" data-unique-id="f132db61-165e-48a2-9484-28128395f176" data-file-name="app/profile/profile-content.tsx"> Experience
                  </span></Button>
                </div>
              </motion.div>}
            
            <div className="space-y-6" data-unique-id="8a5fd7ec-0426-4f15-958b-892eba1187d6" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
              {profileData.experience.map((exp, index) => <div key={index} className="border-b border-border pb-6 last:border-0 last:pb-0" data-unique-id="5b7fcfc4-455c-4b5a-a46d-913ce2932e62" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
                  <div className="flex justify-between" data-unique-id="02f2b3db-d45d-4068-8e5c-e00eb5d7f85f" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
                    <div data-unique-id="463e9c2d-6315-42dd-aea3-d91134ec3f1f" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
                      <h4 className="font-medium" data-unique-id="a3f3ba63-ddfd-487a-be9c-1f0a10aadbb5" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">{exp.role}</h4>
                      <p className="text-sm text-muted-foreground" data-unique-id="ea341f07-dfc7-45b9-8e36-f9c05752166d" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">{exp.company}</p>
                      {exp.duration && <p className="text-sm text-muted-foreground" data-unique-id="1749ac08-fcbc-4638-be27-33f90920d7f7" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">{exp.duration}</p>}
                    </div>
                    {isEditing && <div className="flex gap-2" data-unique-id="52126c36-be57-41a8-ae5d-5a06ad123ba8" data-file-name="app/profile/profile-content.tsx">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0" onClick={() => {
                    setNewExperience(exp);
                    setEditingExperience(index);
                  }} data-unique-id="18325f77-e0d4-4657-9b8c-81448a83d743" data-file-name="app/profile/profile-content.tsx">
                          <Edit className="h-4 w-4" data-unique-id="af38d2c3-2945-442b-9fa4-2fd60764d993" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive hover:text-destructive" onClick={() => {
                    const updatedExperience = [...profileData.experience];
                    updatedExperience.splice(index, 1);
                    setProfileData({
                      ...profileData,
                      experience: updatedExperience
                    });
                  }} data-unique-id="6cdc6b98-253e-4aac-96f7-1cbc1794c825" data-file-name="app/profile/profile-content.tsx">
                          <Trash2 className="h-4 w-4" data-unique-id="c9ddcb75-fabf-4a45-8f98-1ef4f3b39fd4" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true" />
                        </Button>
                      </div>}
                  </div>
                  {exp.description && <p className="text-sm mt-2" data-unique-id="6fd68839-691b-41d5-a73c-38a891f04d26" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">{exp.description}</p>}
                </div>)}
              
              {profileData.experience.length === 0 && !isEditing && <p className="text-sm text-muted-foreground italic" data-unique-id="c89bfbef-a9ed-4e5d-943f-de7a99cd51c2" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="e62341c1-3d4b-4973-94cd-a9fab76f58b1" data-file-name="app/profile/profile-content.tsx">No work experience added yet.</span></p>}
            </div>
          </CardContent>
        </Card>
        
        {/* Portfolio Section */}
        <Card data-unique-id="e0bcc240-4474-4b7c-a71e-14c1dd067ef3" data-file-name="app/profile/profile-content.tsx">
          <CardContent className="pt-6" data-unique-id="a03f0594-4834-4772-bd5d-860000c9bd79" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
            <div className="flex justify-between items-center mb-4" data-unique-id="527a9286-cd17-4618-b536-ce55c4a6dbe1" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
              <h3 className="text-lg font-semibold" data-unique-id="4c1b554b-a831-4f16-bb89-72c589a5e786" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="e6f6c151-2cdb-46bb-b06c-db4ece39166a" data-file-name="app/profile/profile-content.tsx">Portfolio</span></h3>
              {isEditing && <Button size="sm" variant="outline" onClick={() => {
              setNewPortfolio({
                title: '',
                description: '',
                imageUrl: '',
                link: ''
              });
              setEditingPortfolio(null);
            }} className="h-8" data-unique-id="4e7ec339-1ffd-474e-b8d1-77ac49b2a98a" data-file-name="app/profile/profile-content.tsx">
                  <Plus className="h-4 w-4 mr-1" /><span className="editable-text" data-unique-id="5df0c6d1-6f9b-41a3-b66f-e2b8c12590e4" data-file-name="app/profile/profile-content.tsx">
                  Add Project
                </span></Button>}
            </div>
            
            {(editingPortfolio !== null || isEditing && newPortfolio.title) && <motion.div initial={{
            opacity: 0,
            height: 0
          }} animate={{
            opacity: 1,
            height: 'auto'
          }} className="mb-4 p-4 border border-border rounded-md bg-accent/50" data-unique-id="c2646c72-c4ce-4ab7-80a8-5c8d2b146ae2" data-file-name="app/profile/profile-content.tsx">
                <div className="grid grid-cols-1 gap-4 mb-4" data-unique-id="75a7e3c1-2bfe-4947-be71-fb8faf31d67c" data-file-name="app/profile/profile-content.tsx">
                  <div data-unique-id="54d886dc-1566-4299-a48d-546dd1437196" data-file-name="app/profile/profile-content.tsx">
                    <label className="block text-sm font-medium mb-1" data-unique-id="dc37f30c-c172-4e14-b2ec-192ab620468f" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="26e17c03-e7ab-464d-96c2-898a489c19c4" data-file-name="app/profile/profile-content.tsx">Project Title</span></label>
                    <input type="text" value={newPortfolio.title} onChange={e => setNewPortfolio({
                  ...newPortfolio,
                  title: e.target.value
                })} className="w-full bg-background border border-input rounded px-3 py-2" placeholder="E-commerce Platform" data-unique-id="dca1b98d-068d-4025-82c2-e641a908dd67" data-file-name="app/profile/profile-content.tsx" />
                  </div>
                  <div data-unique-id="c61acc22-62fe-4db6-b7eb-5da465d52e80" data-file-name="app/profile/profile-content.tsx">
                    <label className="block text-sm font-medium mb-1" data-unique-id="480c54af-b75c-489a-9ff4-6f0fe62dbb53" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="235a3ca4-cdd0-4d5f-a44f-bdf1f20a2892" data-file-name="app/profile/profile-content.tsx">Description</span></label>
                    <textarea value={newPortfolio.description} onChange={e => setNewPortfolio({
                  ...newPortfolio,
                  description: e.target.value
                })} className="w-full h-20 bg-background border border-input rounded px-3 py-2" placeholder="Describe your project..." data-unique-id="f49d00f4-9f1f-4ab3-99e0-c1bd9af7ea5e" data-file-name="app/profile/profile-content.tsx" />
                  </div>
                  <div data-unique-id="2bee979c-8e98-4889-a772-ad8c071449da" data-file-name="app/profile/profile-content.tsx">
                    <label className="block text-sm font-medium mb-1" data-unique-id="272a3e2f-a4c7-4e63-9def-33da42020b89" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="af66a9cf-c438-4161-9468-caab18e70e3e" data-file-name="app/profile/profile-content.tsx">Image URL</span></label>
                    <input type="text" value={newPortfolio.imageUrl} onChange={e => setNewPortfolio({
                  ...newPortfolio,
                  imageUrl: e.target.value
                })} className="w-full bg-background border border-input rounded px-3 py-2" placeholder="https://picsum.photos/200" data-unique-id="5752ea01-2def-49d0-bbe9-011aae348874" data-file-name="app/profile/profile-content.tsx" />
                  </div>
                  <div data-unique-id="8b0e775d-263d-4a7e-975b-d8153dd40708" data-file-name="app/profile/profile-content.tsx">
                    <label className="block text-sm font-medium mb-1" data-unique-id="e27c93f1-adbb-47b6-850d-54d92fa2da09" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="e8df4730-94ab-4970-97eb-9f53f2fd854f" data-file-name="app/profile/profile-content.tsx">Project Link</span></label>
                    <input type="text" value={newPortfolio.link} onChange={e => setNewPortfolio({
                  ...newPortfolio,
                  link: e.target.value
                })} className="w-full bg-background border border-input rounded px-3 py-2" placeholder="https://example.com" data-unique-id="0fe83f54-d972-4cac-a4e0-0712f7bc6c13" data-file-name="app/profile/profile-content.tsx" />
                  </div>
                </div>
                <div className="flex justify-end gap-2" data-unique-id="f91e5641-f09c-4fdc-810e-8c03e4d8214c" data-file-name="app/profile/profile-content.tsx">
                  <Button size="sm" variant="outline" onClick={() => {
                setNewPortfolio({
                  title: '',
                  description: '',
                  imageUrl: '',
                  link: ''
                });
                setEditingPortfolio(null);
              }} data-unique-id="05dfe5d1-e58c-4d8f-960e-bfd1c7dff109" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="27c99d02-b643-4932-b545-9fd91e015f34" data-file-name="app/profile/profile-content.tsx">
                    Cancel
                  </span></Button>
                  <Button size="sm" onClick={handleAddPortfolio} data-unique-id="c9313d4e-e51b-48b4-bc41-188e4fb42d8f" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
                    {editingPortfolio !== null ? 'Update' : 'Add'}<span className="editable-text" data-unique-id="80571593-ec45-4ac4-b19b-b6cea72d3efc" data-file-name="app/profile/profile-content.tsx"> Project
                  </span></Button>
                </div>
              </motion.div>}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-unique-id="0aa9a75e-07a9-41cc-a540-30e9a1bf4efd" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
              {profileData.portfolio.map((project, index) => <motion.div key={index} className="border border-border rounded-md overflow-hidden" whileHover={{
              y: -5
            }} transition={{
              type: "spring",
              stiffness: 300
            }} data-unique-id="bcb38b3c-0dac-4a4f-b3fe-42fedf8ce047" data-file-name="app/profile/profile-content.tsx">
                  <div className="h-48 overflow-hidden" data-unique-id="b1e5d9d1-9e25-468f-b836-e8de19e084ee" data-file-name="app/profile/profile-content.tsx">
                    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" data-unique-id="0f7c28be-924d-4e76-853a-6e0ab733f972" data-file-name="app/profile/profile-content.tsx" />
                  </div>
                  <div className="p-4" data-unique-id="64df9c96-24b7-407f-b0da-eb0d5a4e9108" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
                    <div className="flex justify-between items-start" data-unique-id="f57ff49b-dae3-4c68-8edd-07626ff1bac3" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">
                      <h4 className="font-medium" data-unique-id="ee095b29-21d2-4953-973f-c8b6c86cd5fe" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">{project.title}</h4>
                      {isEditing && <div className="flex gap-1" data-unique-id="5df57390-2613-4d5b-b876-3eb97a742f95" data-file-name="app/profile/profile-content.tsx">
                          <Button size="sm" variant="ghost" className="h-7 w-7 p-0" onClick={() => {
                      setNewPortfolio(project);
                      setEditingPortfolio(index);
                    }} data-unique-id="1b2548d9-1da6-4e50-9129-6ee5bb2819d2" data-file-name="app/profile/profile-content.tsx">
                            <Edit className="h-3.5 w-3.5" data-unique-id="b8de1b18-05a1-4811-b589-d31f59a9d871" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-7 w-7 p-0 text-destructive hover:text-destructive" onClick={() => {
                      const updatedPortfolio = [...profileData.portfolio];
                      updatedPortfolio.splice(index, 1);
                      setProfileData({
                        ...profileData,
                        portfolio: updatedPortfolio
                      });
                    }} data-unique-id="d03e29f3-6b77-40da-ae63-9a11fe913e41" data-file-name="app/profile/profile-content.tsx">
                            <Trash2 className="h-3.5 w-3.5" data-unique-id="23e9b629-7cd6-4edc-9fc5-ffe41972e543" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true" />
                          </Button>
                        </div>}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 mb-3" data-unique-id="aa2e8999-e05b-4d43-b3ef-e3151c69cabe" data-file-name="app/profile/profile-content.tsx" data-dynamic-text="true">{project.description}</p>
                    {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline" data-unique-id="03bdf705-56e7-4463-984e-c21891950f00" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="b530148f-a615-4678-9e49-370ce56c7b03" data-file-name="app/profile/profile-content.tsx">
                        View Project
                      </span></a>}
                  </div>
                </motion.div>)}
            </div>
            
            {profileData.portfolio.length === 0 && !isEditing && <p className="text-sm text-muted-foreground italic" data-unique-id="bdd97095-44ce-4483-9b82-d45543f46aeb" data-file-name="app/profile/profile-content.tsx"><span className="editable-text" data-unique-id="c3adcfa8-886f-478e-8dc1-73a33fe1656c" data-file-name="app/profile/profile-content.tsx">No portfolio projects added yet.</span></p>}
          </CardContent>
        </Card>
      </div>
    </div>;
}