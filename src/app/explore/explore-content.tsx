'use client';

import BountyCard from '@/components/bounty-card';
import { Button } from '@/components/ui/button';
import { BountyCategory, BountyStatus } from '@/lib/store';
import useBountyStore from '@/lib/store';
import { ChevronDown, Filter, Search, SlidersHorizontal } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
type FilterState = {
  category: BountyCategory | 'all';
  status: BountyStatus | 'all';
  minBudget: number | null;
  maxBudget: number | null;
  searchQuery: string;
};
export default function ExploreContent() {
  const bounties = useBountyStore(state => state.bounties);
  const searchParams = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    status: 'open',
    minBudget: null,
    maxBudget: null,
    searchQuery: ''
  });
  useEffect(() => {
    // Get category from URL params if available
    const categoryParam = searchParams.get('category') as BountyCategory | null;
    if (categoryParam) {
      setFilters(prev => ({
        ...prev,
        category: categoryParam
      }));
    }
  }, [searchParams]);
  const filteredBounties = bounties.filter(bounty => {
    // Filter by category
    if (filters.category !== 'all' && bounty.category !== filters.category) {
      return false;
    }

    // Filter by status
    if (filters.status !== 'all' && bounty.status !== filters.status) {
      return false;
    }

    // Filter by min budget
    if (filters.minBudget !== null && bounty.budget < filters.minBudget) {
      return false;
    }

    // Filter by max budget
    if (filters.maxBudget !== null && bounty.budget > filters.maxBudget) {
      return false;
    }

    // Filter by search query
    if (filters.searchQuery) {
      const searchLower = filters.searchQuery.toLowerCase();
      return bounty.title.toLowerCase().includes(searchLower) || bounty.description.toLowerCase().includes(searchLower) || bounty.skills.some(skill => skill.toLowerCase().includes(searchLower));
    }
    return true;
  });
  const handleFilterChange = (name: keyof FilterState, value: string | number | null) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({
      ...prev,
      searchQuery: e.target.value
    }));
  };
  const categories: BountyCategory[] = ['design', 'development', 'writing', 'marketing', 'video', 'audio', 'other'];
  const statuses: BountyStatus[] = ['open', 'in-progress', 'completed', 'cancelled'];
  return <div data-unique-id="cb679b1e-dcfc-434b-a7d6-e0378e602eae" data-file-name="app/explore/explore-content.tsx">
      <div className="flex flex-col mb-8" data-unique-id="9a6b2091-c204-4238-b317-e434ea9b50dd" data-file-name="app/explore/explore-content.tsx" data-dynamic-text="true">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6" data-unique-id="e7daa548-76e7-4642-86f1-0ded06c75a51" data-file-name="app/explore/explore-content.tsx">
          <div className="relative flex-grow" data-unique-id="cf821a5e-8099-40a9-ad05-c56fea9f9a0a" data-file-name="app/explore/explore-content.tsx">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3" data-unique-id="52692454-9bf5-4137-ac82-18a5692c0258" data-file-name="app/explore/explore-content.tsx">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <input type="text" placeholder="Search by title, description or skills..." className="pl-10 pr-4 py-2 rounded-md border border-input bg-background w-full" value={filters.searchQuery} onChange={handleSearchChange} data-unique-id="36a83a3d-13ce-4c77-bfdd-4e6b371e7c82" data-file-name="app/explore/explore-content.tsx" />
          </div>
          
          <Button variant="outline" onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex items-center gap-2" data-unique-id="aa154831-1ad0-47eb-b7f8-e5ec2fa1fb4a" data-file-name="app/explore/explore-content.tsx">
            <SlidersHorizontal className="h-4 w-4" /><span className="editable-text" data-unique-id="33f27e6f-7dcc-49ee-9fb0-f016ca07ab2a" data-file-name="app/explore/explore-content.tsx">
            Filters
            </span><ChevronDown className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </Button>
        </div>
        
        {isFilterOpen && <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-card rounded-lg border border-border mb-6" data-unique-id="62de1a21-c723-4451-9ee0-a021da9c9461" data-file-name="app/explore/explore-content.tsx">
            <div data-unique-id="8344c199-b69b-432d-ab1f-b78ca24fdcf6" data-file-name="app/explore/explore-content.tsx">
              <label className="block text-sm font-medium text-muted-foreground mb-2" data-unique-id="794a2e17-2046-47d1-ba26-43631e4652af" data-file-name="app/explore/explore-content.tsx"><span className="editable-text" data-unique-id="19f53a7c-15f2-437c-8bd6-b4399d956da7" data-file-name="app/explore/explore-content.tsx">
                Category
              </span></label>
              <select className="w-full p-2 rounded-md border border-input bg-background" value={filters.category} onChange={e => handleFilterChange('category', e.target.value)} data-unique-id="5513208f-9b0c-48fe-8ba2-777876122a88" data-file-name="app/explore/explore-content.tsx" data-dynamic-text="true">
                <option value="all" data-unique-id="0eafef4e-11a9-42cb-ba59-085478a0e4ce" data-file-name="app/explore/explore-content.tsx"><span className="editable-text" data-unique-id="bac4b46e-88e2-4383-9c49-b9c2642d9019" data-file-name="app/explore/explore-content.tsx">All Categories</span></option>
                {categories.map(category => <option key={category} value={category} data-unique-id="cbfada86-a220-4d97-a2ae-3d9493b4f4e7" data-file-name="app/explore/explore-content.tsx" data-dynamic-text="true">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>)}
              </select>
            </div>
            
            <div data-unique-id="b469ec1b-a3ab-4ce0-85f4-14ed88bd9ad6" data-file-name="app/explore/explore-content.tsx">
              <label className="block text-sm font-medium text-muted-foreground mb-2" data-unique-id="ad9c74fe-e42a-413a-8fbb-ce5e10896633" data-file-name="app/explore/explore-content.tsx"><span className="editable-text" data-unique-id="ca033a4c-9d8c-4e80-bd61-baed1293f348" data-file-name="app/explore/explore-content.tsx">
                Status
              </span></label>
              <select className="w-full p-2 rounded-md border border-input bg-background" value={filters.status} onChange={e => handleFilterChange('status', e.target.value)} data-unique-id="84537f41-d5fa-4887-95bc-94973a5a527f" data-file-name="app/explore/explore-content.tsx" data-dynamic-text="true">
                <option value="all" data-unique-id="8547a6f1-0090-4455-9ab5-08ce0ab4dc41" data-file-name="app/explore/explore-content.tsx"><span className="editable-text" data-unique-id="4afcc2e8-66ba-4d04-a466-bf191ac89c77" data-file-name="app/explore/explore-content.tsx">All Statuses</span></option>
                {statuses.map(status => <option key={status} value={status} data-unique-id="209108a4-eddc-4b41-be95-061e7575c9b0" data-file-name="app/explore/explore-content.tsx" data-dynamic-text="true">
                    {status === 'in-progress' ? 'In Progress' : status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>)}
              </select>
            </div>
            
            <div data-unique-id="3a133573-21cc-4a4f-b79a-8368087aa15d" data-file-name="app/explore/explore-content.tsx">
              <label className="block text-sm font-medium text-muted-foreground mb-2" data-unique-id="35f2c6d8-0bdd-4151-9c97-20d48f6dc2df" data-file-name="app/explore/explore-content.tsx"><span className="editable-text" data-unique-id="823cf3b6-ffa3-46e1-8848-1c26aa326857" data-file-name="app/explore/explore-content.tsx">
                Budget Range
              </span></label>
              <div className="flex items-center gap-2" data-unique-id="685c55ad-df16-436d-b602-f54384851992" data-file-name="app/explore/explore-content.tsx">
                <input type="number" placeholder="Min $" className="w-full p-2 rounded-md border border-input bg-background" value={filters.minBudget || ''} onChange={e => handleFilterChange('minBudget', e.target.value ? Number(e.target.value) : null)} data-unique-id="8cc88d07-e425-4fea-9f70-c3d8e49626d5" data-file-name="app/explore/explore-content.tsx" />
                <span className="text-muted-foreground" data-unique-id="f3b48a78-869a-4fbd-8ebc-59c3bf17ab54" data-file-name="app/explore/explore-content.tsx"><span className="editable-text" data-unique-id="dc0b4890-4d30-480c-bb3b-34a2d73e7a6b" data-file-name="app/explore/explore-content.tsx">to</span></span>
                <input type="number" placeholder="Max $" className="w-full p-2 rounded-md border border-input bg-background" value={filters.maxBudget || ''} onChange={e => handleFilterChange('maxBudget', e.target.value ? Number(e.target.value) : null)} data-unique-id="28a09a86-3ad1-4a10-8d12-b3eb21acc8a7" data-file-name="app/explore/explore-content.tsx" />
              </div>
            </div>
          </div>}
      </div>
      
      <div className="mb-4 flex items-center justify-between" data-unique-id="7fa9c437-3246-42e4-876e-2c5d0fc615bb" data-file-name="app/explore/explore-content.tsx">
        <p className="text-muted-foreground" data-unique-id="ecc6d7ed-027a-41fe-8d2a-fdb5c4e926eb" data-file-name="app/explore/explore-content.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="746f7e79-d522-414f-b27c-5f00b34253ec" data-file-name="app/explore/explore-content.tsx">
          Showing </span>{filteredBounties.length}<span className="editable-text" data-unique-id="0f23dfa5-d470-4c50-bf08-17928460e58c" data-file-name="app/explore/explore-content.tsx"> bounties
        </span></p>
        <div className="flex items-center gap-2" data-unique-id="9fdb11c3-5b83-4f4f-801c-a1a4c40fc2d8" data-file-name="app/explore/explore-content.tsx">
          <label className="text-sm text-muted-foreground" data-unique-id="0c302893-a1a2-4acb-b630-a659a7bdbe8b" data-file-name="app/explore/explore-content.tsx"><span className="editable-text" data-unique-id="2de0c557-e462-4622-b873-4670f7c2fa5e" data-file-name="app/explore/explore-content.tsx">Sort by:</span></label>
          <select className="p-2 rounded-md border border-input bg-background text-sm" data-unique-id="92c0d139-80e5-4591-9106-28f2d8a412ca" data-file-name="app/explore/explore-content.tsx">
            <option value="newest" data-unique-id="b76393d5-4aad-430d-aae9-f7344a82cf66" data-file-name="app/explore/explore-content.tsx"><span className="editable-text" data-unique-id="78c77ae0-dc64-46eb-88f9-633a1034513f" data-file-name="app/explore/explore-content.tsx">Newest First</span></option>
            <option value="budget-high" data-unique-id="ea3b9194-6a85-4d55-8539-39cbc86a42ef" data-file-name="app/explore/explore-content.tsx"><span className="editable-text" data-unique-id="09ad787c-e3ad-4ab5-885e-ab01591cb528" data-file-name="app/explore/explore-content.tsx">Budget: High to Low</span></option>
            <option value="budget-low" data-unique-id="7a34e706-30db-42ed-beb8-ebb95878d004" data-file-name="app/explore/explore-content.tsx"><span className="editable-text" data-unique-id="3271d297-c979-47c6-8ee5-e52a90681ef5" data-file-name="app/explore/explore-content.tsx">Budget: Low to High</span></option>
            <option value="deadline" data-unique-id="5a014c1f-7023-4260-9b0f-802d81eac05e" data-file-name="app/explore/explore-content.tsx"><span className="editable-text" data-unique-id="a460ac5f-a9f4-4c04-a71f-003eb6d427a2" data-file-name="app/explore/explore-content.tsx">Deadline: Soonest</span></option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-unique-id="7e74af7f-3542-4f0f-9b52-5d6e1047de96" data-file-name="app/explore/explore-content.tsx" data-dynamic-text="true">
        {filteredBounties.length > 0 ? filteredBounties.map(bounty => <BountyCard key={bounty.id} bounty={bounty} />) : <div className="col-span-3 py-16 text-center" data-unique-id="37f6e97e-84df-49ce-b861-8144b257f317" data-file-name="app/explore/explore-content.tsx">
            <Filter className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2" data-unique-id="3976b998-a55c-4ddc-a64a-f7b1b1e4660c" data-file-name="app/explore/explore-content.tsx"><span className="editable-text" data-unique-id="4b5e187e-387f-45d4-a39c-79460672fa42" data-file-name="app/explore/explore-content.tsx">No bounties found</span></h3>
            <p className="text-muted-foreground" data-unique-id="f60ee300-c0f4-4d80-8fd0-07e5a966fc2b" data-file-name="app/explore/explore-content.tsx"><span className="editable-text" data-unique-id="d987849b-7a17-42a5-96c9-be598b8d93a0" data-file-name="app/explore/explore-content.tsx">
              Try adjusting your filters or search term to find what you're looking for.
            </span></p>
          </div>}
      </div>
    </div>;
}