<script lang="ts">
  import Navbar from '../components/navbar.svelte';
  import Button1 from '../components/modal.svelte';
  import { base } from '$app/paths';  // Import the base path for deployment
</script>

<Navbar />
<div class="flex flex-col items-center justify-between min-h-screen bg-gray-50">
  <!-- Main Content -->
  <main class="flex flex-col md:flex-row items-center justify-center flex-grow px-6">
    <!-- Text Section --> 
    <div class="text-center md:text-left md:mr-8">
      <h1 class="text-6xl font-bold text-customBlue1 mb-4 flex flex-col items-center">
        <span>Professional Scheduling</span>
        <span class="text-center">made easy</span>
      </h1>

      <!-- Button to open the modal -->
      <div class="flex justify-center">
        <Button1 />
      </div>
    </div>

    <!-- Image Section -->
    <div class="mt-8 md:mt-0 flex justify-center">
      <img src="{base}/images/mainpic.jpg" alt="Scheduling illustration" class="w-[500px] h-auto object-contain">
    </div>
  </main>
</div>

<style>
  :global(.fixed.inset-0.bg-gray-900.bg-opacity-50) {
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  }
</style>
