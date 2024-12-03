<script lang="ts">
  import { Router, Link, Route } from 'svelte-routing';
  import DonorList from './components/DonorList.svelte';
  import DonorProfile from './routes/DonorProfile.svelte';
  import RegisterDonor from './routes/RegisterDonor.svelte';

  export let url = '';
</script>

<Router {url}>
  <nav class="bg-primary p-4 mb-8">
    <div class="max-w-7xl mx-auto">
      <Link to="/" class="text-white no-underline mr-4 px-4 py-2 rounded-md hover:bg-primary-dark">Home</Link>
      <Link to="/register" class="text-white no-underline px-4 py-2 rounded-md hover:bg-primary-dark">Register as Donor</Link>
    </div>
  </nav>

  <main class="max-w-7xl mx-auto px-4">
    <Route path="/" component={DonorList} />
    <Route path="/donor/:id" let:params>
      <DonorProfile id={params.id} />
    </Route>
    <Route path="/register" component={RegisterDonor} />
  </main>
</Router>