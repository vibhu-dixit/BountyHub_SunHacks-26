'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Filter, Search, SlidersHorizontal, Star, ChevronDown, MapPin, Briefcase, Clock } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import HunterCard from '@/components/hunter-card';
import { useHunterStore } from '@/lib/hunter-store';
type FilterState = {
  skills: string[];
  minRating: number | null;
  maxHourlyRate: number | null;
  searchQuery: string;
};
export default function HuntersContent() {
  const {
    hunters
  } = useHunterStore();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    skills: [],
    minRating: null,
    maxHourlyRate: null,
    searchQuery: ''
  });
  const [skillInput, setSkillInput] = useState('');

  // Get all unique skills from hunters
  const allSkills = Array.from(new Set(hunters.flatMap(hunter => hunter.skills))).sort();
  const filteredHunters = hunters.filter(hunter => {
    // Filter by skills
    if (filters.skills.length > 0 && !filters.skills.some(skill => hunter.skills.includes(skill))) {
      return false;
    }

    // Filter by rating
    if (filters.minRating !== null && hunter.rating < filters.minRating) {
      return false;
    }

    // Filter by hourly rate
    if (filters.maxHourlyRate !== null && hunter.hourlyRate > filters.maxHourlyRate) {
      return false;
    }

    // Filter by search query
    if (filters.searchQuery) {
      const searchLower = filters.searchQuery.toLowerCase();
      return hunter.name.toLowerCase().includes(searchLower) || hunter.title.toLowerCase().includes(searchLower) || hunter.skills.some(skill => skill.toLowerCase().includes(searchLower));
    }
    return true;
  });
  const toggleSkill = (skill: string) => {
    setFilters(prev => {
      if (prev.skills.includes(skill)) {
        return {
          ...prev,
          skills: prev.skills.filter(s => s !== skill)
        };
      } else {
        return {
          ...prev,
          skills: [...prev.skills, skill]
        };
      }
    });
  };
  const addSkill = () => {
    if (skillInput && !filters.skills.includes(skillInput)) {
      setFilters(prev => ({
        ...prev,
        skills: [...prev.skills, skillInput]
      }));
      setSkillInput('');
    }
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({
      ...prev,
      searchQuery: e.target.value
    }));
  };
  const clearFilters = () => {
    setFilters({
      skills: [],
      minRating: null,
      maxHourlyRate: null,
      searchQuery: ''
    });
  };
  return <div data-unique-id="9818b83c-47b1-48d2-95a6-9570ac27aad9" data-file-name="app/hunters/hunters-content.tsx">
      <div className="flex flex-col mb-8" data-unique-id="5ffe0ec6-2f59-40a8-9b02-eb5aee39e2dd" data-file-name="app/hunters/hunters-content.tsx" data-dynamic-text="true">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6" data-unique-id="9d1144c4-8086-4933-8c19-6b550d4b7c4e" data-file-name="app/hunters/hunters-content.tsx">
          <div className="relative flex-grow" data-unique-id="3be463bb-208f-49bd-a3d1-0ed09b995276" data-file-name="app/hunters/hunters-content.tsx">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3" data-unique-id="058fed8d-a966-4b53-beec-dc6469a09a11" data-file-name="app/hunters/hunters-content.tsx">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <input type="text" placeholder="Search by name, title or skills..." className="pl-10 pr-4 py-2 rounded-md border border-input bg-background w-full" value={filters.searchQuery} onChange={handleSearchChange} data-unique-id="b9868964-03ba-4d21-a4dd-77e25eca5e41" data-file-name="app/hunters/hunters-content.tsx" />
          </div>
          
          <Button variant="outline" onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex items-center gap-2" data-unique-id="6f26b2cf-ab63-400a-a008-7f24dff6d6a3" data-file-name="app/hunters/hunters-content.tsx">
            <SlidersHorizontal className="h-4 w-4" /><span className="editable-text" data-unique-id="aead150c-41d6-4c1f-bdd8-a143652b28d4" data-file-name="app/hunters/hunters-content.tsx">
            Filters
            </span><ChevronDown className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </Button>
        </div>
        
        {isFilterOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-card rounded-lg border border-border mb-6" data-unique-id="b4e28d05-f3a4-470d-97a2-487e15ec1c1d" data-file-name="app/hunters/hunters-content.tsx">
            <div data-unique-id="1da5af57-7deb-4e57-ac61-fd85056b1c32" data-file-name="app/hunters/hunters-content.tsx">
              <label className="block text-sm font-medium text-muted-foreground mb-2" data-unique-id="ef0df132-02e5-42f1-8440-60e1dec310da" data-file-name="app/hunters/hunters-content.tsx"><span className="editable-text" data-unique-id="5c1ae871-df9c-4fc0-9821-9d72b46579d5" data-file-name="app/hunters/hunters-content.tsx">
                Skills
              </span></label>
              <div className="flex items-center mb-2" data-unique-id="1d4bd5b2-8635-416f-aa49-6d01de490754" data-file-name="app/hunters/hunters-content.tsx">
                <input type="text" placeholder="Add skill" className="flex-grow p-2 rounded-md border border-input bg-background" value={skillInput} onChange={e => setSkillInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && addSkill()} data-unique-id="1b6667d6-0d64-4500-aaac-0c25326238f8" data-file-name="app/hunters/hunters-content.tsx" />
                <Button variant="outline" size="sm" onClick={addSkill} className="ml-2" data-unique-id="ac4632e3-3be4-41c1-8c5d-e2004144848b" data-file-name="app/hunters/hunters-content.tsx"><span className="editable-text" data-unique-id="24c70108-1d36-4fc0-8681-6c08d3da72f0" data-file-name="app/hunters/hunters-content.tsx">
                  Add
                </span></Button>
              </div>
              <div className="flex flex-wrap gap-2 mb-2" data-unique-id="437e6aaa-850d-4561-91cd-9893826cf264" data-file-name="app/hunters/hunters-content.tsx" data-dynamic-text="true">
                {filters.skills.map(skill => <Badge key={skill} variant="secondary" className="cursor-pointer" onClick={() => toggleSkill(skill)} data-unique-id="8e31b8f6-9c03-4044-ab15-b7753f736c39" data-file-name="app/hunters/hunters-content.tsx" data-dynamic-text="true">
                    {skill}<span className="editable-text" data-unique-id="3807b227-49a4-4fd4-b8d2-4e918e7423bd" data-file-name="app/hunters/hunters-content.tsx"> ×
                  </span></Badge>)}
              </div>
              <div className="text-xs text-muted-foreground mb-2" data-unique-id="ad31889d-c737-445f-bc31-1a62117c036f" data-file-name="app/hunters/hunters-content.tsx"><span className="editable-text" data-unique-id="9faa8ad3-33a7-43b5-9a0a-1b26c00104f1" data-file-name="app/hunters/hunters-content.tsx">Popular skills:</span></div>
              <div className="flex flex-wrap gap-1" data-unique-id="14a476de-c3f1-4070-a22e-61e2ebca8433" data-file-name="app/hunters/hunters-content.tsx" data-dynamic-text="true">
                {allSkills.slice(0, 8).map(skill => <Badge key={skill} variant={filters.skills.includes(skill) ? "default" : "outline"} className="cursor-pointer text-xs" onClick={() => toggleSkill(skill)} data-unique-id="af06f6e7-f597-4854-b4ab-c37d0a371a9a" data-file-name="app/hunters/hunters-content.tsx" data-dynamic-text="true">
                    {skill}
                  </Badge>)}
              </div>
            </div>
            
            <div data-unique-id="9d652e95-0c74-4a64-9cd7-bfc3789e6ad4" data-file-name="app/hunters/hunters-content.tsx">
              <label className="block text-sm font-medium text-muted-foreground mb-2" data-unique-id="f533bbc0-46ac-42e8-afbf-b099a3c15dd5" data-file-name="app/hunters/hunters-content.tsx"><span className="editable-text" data-unique-id="a7e3aa71-9952-4c80-bdb8-b8ca0e35109d" data-file-name="app/hunters/hunters-content.tsx">
                Minimum Rating
              </span></label>
              <select className="w-full p-2 rounded-md border border-input bg-background" value={filters.minRating || ''} onChange={e => setFilters(prev => ({
            ...prev,
            minRating: e.target.value ? Number(e.target.value) : null
          }))} data-unique-id="a1625bd9-c9d0-4234-829a-59627501fa2c" data-file-name="app/hunters/hunters-content.tsx">
                <option value="" data-unique-id="4b263190-776a-435c-8e53-6fa308942868" data-file-name="app/hunters/hunters-content.tsx"><span className="editable-text" data-unique-id="d1bfb3ed-1e4f-4e31-9c6e-1ea8443cf8cc" data-file-name="app/hunters/hunters-content.tsx">Any Rating</span></option>
                <option value="4.5" data-unique-id="13a3a3d0-66f1-4a99-bead-226eac943c99" data-file-name="app/hunters/hunters-content.tsx"><span className="editable-text" data-unique-id="245f443a-3d09-4905-ab00-5802ef98c4b6" data-file-name="app/hunters/hunters-content.tsx">4.5+ Stars</span></option>
                <option value="4" data-unique-id="795d7271-9058-4098-a3fa-b61eb07205a4" data-file-name="app/hunters/hunters-content.tsx"><span className="editable-text" data-unique-id="c12d466d-692a-4504-b445-252cb26c695c" data-file-name="app/hunters/hunters-content.tsx">4+ Stars</span></option>
                <option value="3.5" data-unique-id="ac776920-6bf9-45ef-9666-50b744255960" data-file-name="app/hunters/hunters-content.tsx"><span className="editable-text" data-unique-id="ea2928e4-d68a-4931-a94a-e9a880b49529" data-file-name="app/hunters/hunters-content.tsx">3.5+ Stars</span></option>
                <option value="3" data-unique-id="0fe003ae-a2df-4fcb-9405-f34cf1bac094" data-file-name="app/hunters/hunters-content.tsx"><span className="editable-text" data-unique-id="cbeaebb2-940c-416d-9d86-6c270147b40e" data-file-name="app/hunters/hunters-content.tsx">3+ Stars</span></option>
              </select>
            </div>
            
            <div data-unique-id="ec9ecaf1-633c-40af-8a64-40ac091d3823" data-file-name="app/hunters/hunters-content.tsx">
              <label className="block text-sm font-medium text-muted-foreground mb-2" data-unique-id="e881a8a5-87c9-436a-ae98-8c81fc6002a5" data-file-name="app/hunters/hunters-content.tsx"><span className="editable-text" data-unique-id="ee883279-c61b-489c-bb56-f9a516b5c181" data-file-name="app/hunters/hunters-content.tsx">
                Max Hourly Rate
              </span></label>
              <input type="number" placeholder="Max $ per hour" className="w-full p-2 rounded-md border border-input bg-background" value={filters.maxHourlyRate || ''} onChange={e => setFilters(prev => ({
            ...prev,
            maxHourlyRate: e.target.value ? Number(e.target.value) : null
          }))} data-unique-id="c83a4771-73a0-4194-adb8-d87a8246701e" data-file-name="app/hunters/hunters-content.tsx" />
            </div>
            
            <div className="md:col-span-3 flex justify-end" data-unique-id="9a07d884-021b-4fb9-926a-c3cb07f500c1" data-file-name="app/hunters/hunters-content.tsx">
              <Button variant="outline" size="sm" onClick={clearFilters} className="mr-2" data-unique-id="bccf3a84-d982-4475-968e-64df1211f23c" data-file-name="app/hunters/hunters-content.tsx"><span className="editable-text" data-unique-id="c6a465e4-12b2-4ff7-b89c-bf6be9685d15" data-file-name="app/hunters/hunters-content.tsx">
                Clear Filters
              </span></Button>
            </div>
          </motion.div>}
      </div>
      
      <div className="mb-4 flex items-center justify-between" data-unique-id="3bc4a2ee-9c82-4201-a03e-5fed65fbd4cf" data-file-name="app/hunters/hunters-content.tsx">
        <p className="text-muted-foreground" data-unique-id="20ae0632-4264-4368-99c8-b5b8455b02fe" data-file-name="app/hunters/hunters-content.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="5ab8b376-97a0-4416-9290-4fe68cc8b7de" data-file-name="app/hunters/hunters-content.tsx">
          Showing </span>{filteredHunters.length}<span className="editable-text" data-unique-id="6f366bb4-b335-41ae-94ae-7c3db2b21211" data-file-name="app/hunters/hunters-content.tsx"> hunters
        </span></p>
        <div className="flex items-center gap-2" data-unique-id="e76f3308-a401-43a3-b787-2959399a7d07" data-file-name="app/hunters/hunters-content.tsx">
          <label className="text-sm text-muted-foreground" data-unique-id="af547e46-b843-4d44-812a-bb4db46d5f49" data-file-name="app/hunters/hunters-content.tsx"><span className="editable-text" data-unique-id="67691a0f-c2f1-4659-9d37-f269c1803ee4" data-file-name="app/hunters/hunters-content.tsx">Sort by:</span></label>
          <select className="p-2 rounded-md border border-input bg-background text-sm" data-unique-id="ae45df42-1a51-4973-bced-e6e94fd05cb7" data-file-name="app/hunters/hunters-content.tsx">
            <option value="rating" data-unique-id="d45dc195-4be1-433c-bb48-b13d9c74e055" data-file-name="app/hunters/hunters-content.tsx"><span className="editable-text" data-unique-id="728ad73f-6f20-4eff-a26f-d934fa427650" data-file-name="app/hunters/hunters-content.tsx">Highest Rated</span></option>
            <option value="completed" data-unique-id="d88bd401-7ddc-4409-9a46-1560abd9d48c" data-file-name="app/hunters/hunters-content.tsx"><span className="editable-text" data-unique-id="1cff0bda-8e1c-4bdb-9962-77abaee224ca" data-file-name="app/hunters/hunters-content.tsx">Most Completed Bounties</span></option>
            <option value="rate-low" data-unique-id="213b25f1-37ba-496d-8e96-946dc9ad883d" data-file-name="app/hunters/hunters-content.tsx"><span className="editable-text" data-unique-id="a216403a-bef4-4900-bd32-f14bb4d8e1b5" data-file-name="app/hunters/hunters-content.tsx">Hourly Rate: Low to High</span></option>
            <option value="rate-high" data-unique-id="d525ba1e-9859-4d94-9afe-071c927f173c" data-file-name="app/hunters/hunters-content.tsx"><span className="editable-text" data-unique-id="e6253ba3-e330-4fa0-86a2-e8b247cc2b52" data-file-name="app/hunters/hunters-content.tsx">Hourly Rate: High to Low</span></option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-unique-id="815a13d6-c042-45a7-811c-9127b50680f0" data-file-name="app/hunters/hunters-content.tsx" data-dynamic-text="true">
        {filteredHunters.length > 0 ? filteredHunters.map(hunter => <HunterCard key={hunter.id} hunter={hunter} />) : <div className="col-span-3 py-16 text-center" data-unique-id="7c074a31-c9c9-4969-94be-dfc851b96718" data-file-name="app/hunters/hunters-content.tsx">
            <Filter className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2" data-unique-id="a6e5fb63-12b5-4e86-aefc-db6c27d32b11" data-file-name="app/hunters/hunters-content.tsx"><span className="editable-text" data-unique-id="78661b7e-0ced-4ed6-a9f1-7fcad3b13371" data-file-name="app/hunters/hunters-content.tsx">No hunters found</span></h3>
            <p className="text-muted-foreground" data-unique-id="4990cf70-8733-4a91-9c5c-3e26b80e24a7" data-file-name="app/hunters/hunters-content.tsx"><span className="editable-text" data-unique-id="66c9978f-0256-4188-b730-473ac89cdb8d" data-file-name="app/hunters/hunters-content.tsx">
              Try adjusting your filters or search term to find what you're looking for.
            </span></p>
          </div>}
      </div>
    </div>;
}