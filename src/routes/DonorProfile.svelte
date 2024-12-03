<script lang="ts">
  import { donors } from '../stores/donors';

  export let id: string;
  $: donor = $donors.find(d => d.id === id);
</script>

{#if donor}
  <div class="max-w-3xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
    <h1 class="text-3xl font-bold text-gray-800">{donor.name}</h1>
    <div class="inline-block bg-primary text-white px-4 py-2 rounded-md font-bold my-4">
      {donor.bloodGroup}
    </div>
    
    <div class="mt-8 p-4 border border-gray-200 rounded-md">
      <h2 class="text-xl font-semibold text-gray-700 mb-4">Contact Information</h2>
      <p class="text-gray-600">📍 Location: {donor.location}</p>
      {#if donor.phone}
        <p class="text-gray-600 mt-2">📞 Phone: {donor.phone}</p>
      {/if}
      {#if donor.socialMedia}
        <p class="text-gray-600 mt-2">
          🔗 Social Media: 
          <a href={donor.socialMedia} 
             target="_blank" 
             rel="noopener noreferrer"
             class="text-blue-600 hover:underline">
            Profile Link
          </a>
        </p>
      {/if}
    </div>

    <div class="mt-8 p-4 border border-gray-200 rounded-md">
      <h2 class="text-xl font-semibold text-gray-700 mb-4">Donation History</h2>
      {#if donor.lastDonation}
        <p class="text-gray-600">Last Donation: {new Date(donor.lastDonation).toLocaleDateString()}</p>
      {:else}
        <p class="text-gray-600">No donation history available</p>
      {/if}
    </div>
  </div>
{:else}
  <p class="text-center mt-8 text-gray-600">Donor not found</p>
{/if}