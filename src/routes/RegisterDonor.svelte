<script lang="ts">
  import { donors } from '../stores/donors';
  import type { BloodGroup } from '../types/donor';
  import { navigate } from 'svelte-routing';

  let name = '';
  let bloodGroup: BloodGroup = 'A+';
  let location = '';
  let phone = '';
  let socialMedia = '';
  let lastDonation = '';

  const bloodGroups: BloodGroup[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  function handleSubmit() {
    const newDonor = {
      id: crypto.randomUUID(),
      name,
      bloodGroup,
      location,
      phone: phone || undefined,
      socialMedia: socialMedia || undefined,
      lastDonation: lastDonation ? new Date(lastDonation) : undefined
    };

    donors.update(d => [...d, newDonor]);
    navigate('/');
  }
</script>

<div class="max-w-2xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
  <h1 class="text-3xl font-bold text-gray-800 mb-8">Register as a Donor</h1>
  
  <form on:submit|preventDefault={handleSubmit} class="space-y-6">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name *</label>
      <input 
        id="name" 
        type="text" 
        bind:value={name} 
        required
        class="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
      />
    </div>

    <div>
      <label for="bloodGroup" class="block text-sm font-medium text-gray-700 mb-2">Blood Group *</label>
      <select 
        id="bloodGroup" 
        bind:value={bloodGroup} 
        required
        class="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
      >
        {#each bloodGroups as group}
          <option value={group}>{group}</option>
        {/each}
      </select>
    </div>

    <div>
      <label for="location" class="block text-sm font-medium text-gray-700 mb-2">Location *</label>
      <input 
        id="location" 
        type="text" 
        bind:value={location} 
        required
        class="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
      />
    </div>

    <div>
      <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number (optional)</label>
      <input 
        id="phone" 
        type="tel" 
        bind:value={phone}
        class="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
      />
    </div>

    <div>
      <label for="socialMedia" class="block text-sm font-medium text-gray-700 mb-2">Social Media Link (optional)</label>
      <input 
        id="socialMedia" 
        type="url" 
        bind:value={socialMedia}
        class="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
      />
    </div>

    <div>
      <label for="lastDonation" class="block text-sm font-medium text-gray-700 mb-2">Last Donation Date (optional)</label>
      <input 
        id="lastDonation" 
        type="date" 
        bind:value={lastDonation}
        class="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
      />
    </div>

    <button 
      type="submit"
      class="w-full bg-primary text-white py-3 px-6 rounded-md font-medium hover:bg-red-500 transition-colors"
    >
      Register
    </button>
  </form>
</div>