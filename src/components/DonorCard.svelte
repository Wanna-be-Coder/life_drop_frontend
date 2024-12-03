<script lang="ts">
  import type { Donor } from '../types/donor';
  import { Link } from 'svelte-routing';

  export let donor: Donor;
</script>

<Link to={`/donor/${donor.id}`} class="block no-underline text-inherit">
  <div class="bg-white rounded-lg p-6 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
    <h2 class="text-xl font-bold text-gray-800 m-0">{donor.name}</h2>
    <div class="inline-block bg-primary text-white px-3 py-1 rounded-md font-bold my-2">
      {donor.bloodGroup}
    </div>
    <div class="text-gray-600">
      <p>📍 {donor.location}</p>
      {#if donor.lastDonation}
        <p class="mt-2">🩸 Last donation: {new Date(donor.lastDonation).toLocaleDateString()}</p>
      {/if}
    </div>
  </div>
</Link>