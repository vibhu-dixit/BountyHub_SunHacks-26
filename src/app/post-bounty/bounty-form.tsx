'use client';

import { Button } from '@/components/ui/button';
import { BountyCategory, Bounty } from '@/lib/store';
import useBountyStore from '@/lib/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon, Loader2, PlusCircle, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { motion } from 'framer-motion';
const bountySchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters').max(100, 'Title must be less than 100 characters'),
  description: z.string().min(30, 'Description must be at least 30 characters').max(2000, 'Description must be less than 2000 characters'),
  budget: z.number().min(5, 'Budget must be at least $5').max(10000, 'Budget must be less than $10,000'),
  deadline: z.string().refine(date => !isNaN(Date.parse(date)) && new Date(date) > new Date(), {
    message: 'Deadline must be a valid date in the future'
  }),
  category: z.enum(['design', 'development', 'writing', 'marketing', 'video', 'audio', 'other'] as [BountyCategory, ...BountyCategory[]]),
  skills: z.array(z.string()).min(1, 'Add at least one skill'),
  postedBy: z.string().default('user1') // In a real app, this would be the current user's ID
});
type BountyFormData = z.infer<typeof bountySchema>;
export default function BountyForm() {
  const addBounty = useBountyStore(state => state.addBounty);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [skillInput, setSkillInput] = useState('');
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    setValue,
    watch,
    reset
  } = useForm<BountyFormData>({
    resolver: zodResolver(bountySchema),
    defaultValues: {
      title: '',
      description: '',
      budget: 100,
      deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      // 2 weeks from now
      category: 'development',
      skills: [],
      postedBy: 'user1'
    }
  });
  const watchedSkills = watch('skills');
  const addSkill = () => {
    if (skillInput.trim() && !watchedSkills.includes(skillInput.trim())) {
      setValue('skills', [...watchedSkills, skillInput.trim()]);
      setSkillInput('');
    }
  };
  const removeSkill = (skill: string) => {
    setValue('skills', watchedSkills.filter(s => s !== skill));
  };
  const onSubmit = async (data: BountyFormData) => {
    setIsSubmitting(true);
    try {
      addBounty({
        title: data.title,
        description: data.description,
        budget: data.budget,
        deadline: data.deadline,
        category: data.category,
        skills: data.skills,
        postedBy: data.postedBy
      });

      // Simulate an API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Redirect to home after successful submission
      router.push('/');
    } catch (error) {
      console.error('Error submitting bounty:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const formSubmitHandler = handleSubmit(onSubmit);
  const categories: BountyCategory[] = ['design', 'development', 'writing', 'marketing', 'video', 'audio', 'other'];
  return <motion.div initial={{
    opacity: 0,
    y: 10
  }} animate={{
    opacity: 1,
    y: 0
  }} className="bg-card border border-border rounded-lg p-6 shadow-sm" data-unique-id="3711204e-e357-4a93-92ee-a861dfc9a1df" data-file-name="app/post-bounty/bounty-form.tsx">
      <form onSubmit={formSubmitHandler} className="space-y-6" data-unique-id="8bcce2b4-75e9-463d-bf59-d3222964d182" data-file-name="app/post-bounty/bounty-form.tsx">
        <div data-unique-id="cbc5a501-2f52-4614-8621-860b9ff3d377" data-file-name="app/post-bounty/bounty-form.tsx" data-dynamic-text="true">
          <label htmlFor="title" className="block text-sm font-medium mb-2" data-unique-id="dfeebc16-dc38-4e66-812a-8bac266831b1" data-file-name="app/post-bounty/bounty-form.tsx"><span className="editable-text" data-unique-id="19ecdb24-f83b-49af-a038-3119dcbba7d2" data-file-name="app/post-bounty/bounty-form.tsx">
            Bounty Title*
          </span></label>
          <input id="title" {...register('title')} placeholder="E.g., Design a Modern Logo for Tech Startup" className="w-full p-3 rounded-md border border-input bg-background" data-unique-id="a8c46555-793d-4e0e-a87a-8f801c1620ac" data-file-name="app/post-bounty/bounty-form.tsx" />
          {errors.title && <p className="mt-1 text-sm text-destructive" data-unique-id="057186cd-cfee-4c68-93f8-36e100ec18b9" data-file-name="app/post-bounty/bounty-form.tsx" data-dynamic-text="true">{errors.title.message}</p>}
        </div>
        
        <div data-unique-id="131655cb-b22f-4948-9ebe-8e853c9a9724" data-file-name="app/post-bounty/bounty-form.tsx" data-dynamic-text="true">
          <label htmlFor="description" className="block text-sm font-medium mb-2" data-unique-id="27bd15a4-4904-4884-8001-f8a570d2dd66" data-file-name="app/post-bounty/bounty-form.tsx"><span className="editable-text" data-unique-id="a990dc23-e4b9-4ded-a289-f2a7e69ca589" data-file-name="app/post-bounty/bounty-form.tsx">
            Detailed Description*
          </span></label>
          <textarea id="description" {...register('description')} rows={5} placeholder="Provide a detailed description of what you need..." className="w-full p-3 rounded-md border border-input bg-background" data-unique-id="a620254e-0ff4-472c-94d8-fb8bbcc17203" data-file-name="app/post-bounty/bounty-form.tsx" />
          {errors.description && <p className="mt-1 text-sm text-destructive" data-unique-id="64d79686-2bce-4bee-acd7-9bb0508eb00a" data-file-name="app/post-bounty/bounty-form.tsx" data-dynamic-text="true">{errors.description.message}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-unique-id="c8b5cf87-e69c-4d20-8872-0f3561960259" data-file-name="app/post-bounty/bounty-form.tsx">
          <div data-unique-id="cf44638c-56b5-496f-91d1-74c4deaa8740" data-file-name="app/post-bounty/bounty-form.tsx" data-dynamic-text="true">
            <label htmlFor="budget" className="block text-sm font-medium mb-2" data-unique-id="cbc46464-2dc8-4ccb-8d62-71950bb23aa7" data-file-name="app/post-bounty/bounty-form.tsx"><span className="editable-text" data-unique-id="bf2fb154-6607-4fe4-9866-3b2a8c5bab85" data-file-name="app/post-bounty/bounty-form.tsx">
              Budget ($)*
            </span></label>
            <input id="budget" type="number" {...register('budget', {
            valueAsNumber: true
          })} placeholder="100" className="w-full p-3 rounded-md border border-input bg-background" data-unique-id="58b927dc-16cd-4f86-959d-41a97c1e3509" data-file-name="app/post-bounty/bounty-form.tsx" />
            {errors.budget && <p className="mt-1 text-sm text-destructive" data-unique-id="80c385da-085b-4f6f-b428-62cfcb6beabd" data-file-name="app/post-bounty/bounty-form.tsx" data-dynamic-text="true">{errors.budget.message}</p>}
          </div>
          
          <div data-unique-id="3ba24184-47ec-484e-9dd0-a12a8f17d4a7" data-file-name="app/post-bounty/bounty-form.tsx" data-dynamic-text="true">
            <label htmlFor="deadline" className="block text-sm font-medium mb-2" data-unique-id="8817e0ac-2d23-4481-b0d5-52979c7d14e1" data-file-name="app/post-bounty/bounty-form.tsx"><span className="editable-text" data-unique-id="131d021f-3916-419e-9981-aa5236ac4bbd" data-file-name="app/post-bounty/bounty-form.tsx">
              Deadline*
            </span></label>
            <div className="relative" data-unique-id="08166779-fb67-4858-82a8-f434a6b3c654" data-file-name="app/post-bounty/bounty-form.tsx">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" data-unique-id="90ff02cc-debe-4681-b6e5-8e4e44afa7f7" data-file-name="app/post-bounty/bounty-form.tsx">
                <CalendarIcon className="h-4 w-4 text-muted-foreground" />
              </div>
              <input id="deadline" type="date" {...register('deadline')} className="w-full p-3 pl-10 rounded-md border border-input bg-background" data-unique-id="6fca7e74-420e-4d6c-a529-e4e1f2a0f62d" data-file-name="app/post-bounty/bounty-form.tsx" />
            </div>
            {errors.deadline && <p className="mt-1 text-sm text-destructive" data-unique-id="9463d0ea-e491-4660-a640-8173e0634318" data-file-name="app/post-bounty/bounty-form.tsx" data-dynamic-text="true">{errors.deadline.message}</p>}
          </div>
        </div>
        
        <div data-unique-id="9f94da20-41c3-4f7f-911e-2af5c820842f" data-file-name="app/post-bounty/bounty-form.tsx" data-dynamic-text="true">
          <label htmlFor="category" className="block text-sm font-medium mb-2" data-unique-id="9e153819-8048-4118-89d0-0dca28d93948" data-file-name="app/post-bounty/bounty-form.tsx"><span className="editable-text" data-unique-id="c99e6048-8899-495c-bb79-145a654a1c3f" data-file-name="app/post-bounty/bounty-form.tsx">
            Category*
          </span></label>
          <select id="category" {...register('category')} className="w-full p-3 rounded-md border border-input bg-background" data-unique-id="90796b40-b69b-4a2f-9069-d42abe73f202" data-file-name="app/post-bounty/bounty-form.tsx" data-dynamic-text="true">
            {categories.map(category => <option key={category} value={category} data-unique-id="0e379ac3-218b-4a53-8138-b3d1aec6bad9" data-file-name="app/post-bounty/bounty-form.tsx" data-dynamic-text="true">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>)}
          </select>
          {errors.category && <p className="mt-1 text-sm text-destructive" data-unique-id="caead8db-9b4e-4920-8e4f-60dd34494fa4" data-file-name="app/post-bounty/bounty-form.tsx" data-dynamic-text="true">{errors.category.message}</p>}
        </div>
        
        <div data-unique-id="d9507283-9b66-4534-bebd-311349123eb4" data-file-name="app/post-bounty/bounty-form.tsx" data-dynamic-text="true">
          <label htmlFor="skills" className="block text-sm font-medium mb-2" data-unique-id="77b54962-1fa1-4a10-ad18-bc6000a244a4" data-file-name="app/post-bounty/bounty-form.tsx"><span className="editable-text" data-unique-id="02465b6f-a3af-4c10-bd78-3583573e1b85" data-file-name="app/post-bounty/bounty-form.tsx">
            Required Skills*
          </span></label>
          <div className="flex items-center" data-unique-id="3161418f-495a-4455-ae53-ee6a3431babf" data-file-name="app/post-bounty/bounty-form.tsx">
            <input id="skills" type="text" value={skillInput} onChange={e => setSkillInput(e.target.value)} placeholder="E.g., JavaScript, UI Design, Copywriting" className="w-full p-3 rounded-l-md border border-input bg-background" onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              addSkill();
            }
          }} data-unique-id="a95a7363-53d0-4217-900f-36046ee2ed25" data-file-name="app/post-bounty/bounty-form.tsx" />
            <Button type="button" onClick={addSkill} variant="secondary" className="rounded-l-none" data-unique-id="488ab9e3-c1e5-4530-8646-d6e5c27ee932" data-file-name="app/post-bounty/bounty-form.tsx">
              <PlusCircle className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-3 flex flex-wrap gap-2" data-unique-id="97f394ef-e9d6-4982-a187-7f02d6766d38" data-file-name="app/post-bounty/bounty-form.tsx" data-dynamic-text="true">
            {watchedSkills.map(skill => <div key={skill} className="bg-accent px-3 py-1 rounded-full flex items-center gap-1 text-sm" data-unique-id="dee977ee-8c72-42a5-84f2-378a0599c220" data-file-name="app/post-bounty/bounty-form.tsx" data-dynamic-text="true">
                {skill}
                <button type="button" onClick={() => removeSkill(skill)} className="text-muted-foreground hover:text-destructive" data-unique-id="72e8859e-7dba-4d0f-8270-72a6f15af1b6" data-file-name="app/post-bounty/bounty-form.tsx">
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>)}
          </div>
          
          {errors.skills && <p className="mt-1 text-sm text-destructive" data-unique-id="3a4f3f59-e4b4-463c-b38b-5e6709f9c504" data-file-name="app/post-bounty/bounty-form.tsx" data-dynamic-text="true">{errors.skills.message}</p>}
        </div>
        
        <div className="pt-4" data-unique-id="a81305eb-b67a-49b5-90b8-2743ef08a1c8" data-file-name="app/post-bounty/bounty-form.tsx">
          <Button type="submit" disabled={isSubmitting} className="w-full py-6" data-unique-id="89e06170-8a4d-4279-8c92-5d75293f661d" data-file-name="app/post-bounty/bounty-form.tsx" data-dynamic-text="true">
            {isSubmitting ? <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                Posting Bounty...
              </> : 'Post Bounty'}
          </Button>
        </div>
      </form>
    </motion.div>;
}