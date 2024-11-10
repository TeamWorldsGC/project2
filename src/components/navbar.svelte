<script>
  import { Input, Label, Helper, Button, Checkbox, A } from 'flowbite-svelte';
  import { base } from '$app/paths';  // Import base path for GitHub Pages deployment
</script>

<header class="w-full py-6 px-8 flex justify-between items-center bg-customBlue">
  <div class="text-2xl font-bold text-customGreen">
    <span>HelloWorlds</span><br>
    <span class="text-center">Scheduling</span>
  </div>
  <nav class="text-2xl flex space-x-6 font-bold text-customGreen">
    <a href="{base}/events" class="hover:underline">Events</a>
    <a href="{base}/contact" class="hover:underline">Contact Us</a>
  </nav>
</header>
