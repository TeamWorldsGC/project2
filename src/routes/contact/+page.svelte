<script>
  import Navbar from '../../components/navbar.svelte';
  import { base } from '$app/paths';  // Import the base path for GitHub Pages
</script>

<Navbar />

<div class="container mx-auto px-4 pt-6">
  <!-- Contact Section -->
  <div class="text-center mb-6">
    <h2 class="text-2xl font-bold">Got Any Questions?</h2>
    <p class="text-gray-600">You may contact us in</p>
  </div>

  <div class="flex justify-around items-center mb-10">
    <div class="text-center">
      <p class="text-lg font-semibold mb-4">
        Hey! We are located at Gordon College. Feel free to contact us to reach out.
      </p>
      <div class="flex justify-center">
        <img src="{base}/images/loc1.png" alt="Location Map" class="w-auto h-auto rounded-lg shadow-lg" />
      </div>
    </div>

    <div class="bg-gray-200 p-8 w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg border-2 border-blue-300 text-center">
      <p class="text-lg font-semibold">Landline : 123-456</p>
      <p class="text-lg font-semibold">Phone : 0912-345-6789</p>
      <p class="text-lg font-semibold">Email Us : HelloWorldsSched@gmail.com</p>
      <p class="text-lg font-semibold">Fb : HelloWorldsSched</p>
    </div>      
  </div>
</div>
