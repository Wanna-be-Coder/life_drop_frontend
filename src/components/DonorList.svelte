<script lang="ts">
  import { donors } from '../stores/donors';
  import DonorCard from './DonorCard.svelte';
  import type { BloodGroup } from '../types/donor';

  let selectedBloodGroup: BloodGroup | 'all' = 'all';

  $: filteredDonors = selectedBloodGroup === 'all' 
    ? $donors 
    : $donors.filter(donor => donor.bloodGroup === selectedBloodGroup);

  const bloodGroups: BloodGroup[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
</script>

<div class="p-4">
  <div class="mb-8">
    <select 
      bind:value={selectedBloodGroup}
      class="p-2 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
    >
      <option value="all">All Blood Groups</option>
      {#each bloodGroups as group}
        <option value={group}>{group}</option>
      {/each}
    </select>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each filteredDonors as donor (donor.id)}
      <DonorCard {donor} />
    {/each}
  </div>
</div>