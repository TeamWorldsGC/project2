<script lang="ts">
  import { onMount } from 'svelte';
  import Navbar from '../../components/navbar.svelte';
  import Button1 from '../../components/modal.svelte';
  import { base } from '$app/paths';  // Import the base path for GitHub Pages

  type Event = {
    title?: string;
    image?: string;
    modal?: string;
    eventName?: string;
    name?: string;
    contactNumber?: string;
    startTime?: string;
    endTime?: string;
  };

  let events: Event[] = [
    { title: "Birthday Parties?", image: `${base}/images/event1.jpg`, modal: "birthday" },
    { title: "Debut?", image: `${base}/images/event2.jpg`, modal: "debut" },
    { title: "Wedding?", image: `${base}/images/event3.jpg`, modal: "wedding" },
    { eventName: "Jose and Patricia's Wedding", name: "Jose", contactNumber: "09123456789", startTime: "2023-09-26 10:00 AM", endTime: "2023-09-26 02:00 PM" }
  ];

  onMount(() => {
    const storedEvents = localStorage.getItem('eventData');
    if (storedEvents) {
      try {
        events = JSON.parse(storedEvents);
      } catch (error) {
        console.error('Error parsing stored events:', error);
      }
    }
  });

  const deleteEvent = (index: number) => {
    events.splice(index, 1);
    localStorage.setItem('eventData', JSON.stringify(events));
    location.reload();
  };
</script>

<Navbar />

<div class="container mx-auto px-4 pt-6">
  <h2 class="text-center text-2xl font-bold mb-6 text-customBlue">Any Type of Event We Got You</h2>
  <div class="flex justify-around mb-10">
    <div class="text-center">
      <h1 class="text-2xl font-bold mb-2 text-customBlue1">Birthday Parties?</h1>
      <img src="{base}/images/event1.jpg" alt="Event 1" class="w-full rounded-lg mb-2" />
      <Button1></Button1>
    </div>
    <div class="text-center">
      <h1 class="text-2xl font-bold mb-2 text-customBlue1">Debut?</h1>
      <img src="{base}/images/event2.jpg" alt="Event 2" class="w-full rounded-lg mb-2" />
      <Button1></Button1>
    </div>
    <div class="text-center">
      <h1 class="text-2xl font-bold mb-2 text-customBlue1">Wedding?</h1>
      <img src="{base}/images/event3.jpg" alt="Event 3" class="w-full rounded-lg mb-2" />
      <Button1></Button1>
    </div>
  </div>
</div>

<h2 class="text-center text-2xl font-bold mb-6">Celebrating Moments, Sharing Memories.</h2>
<div class="flex justify-around">
  <div class="w-1/3 text-center">
    <img src="{base}/images/testemonial2.jpg" alt="Testimonial 1" class="w-full rounded-3xl mb-4 p-4" />
  </div>
  <div class="w-1/3 text-center mt-6">
    <img src="{base}/images/testemonial1.jpg" alt="Testimonial 2" class="w-full h-auto rounded-3xl mb-8 p-4" />
  </div>
  <div class="w-1/3 bg-gray-100 p-4 rounded-lg shadow-lg relative">
    <div class="p-4 rounded-3xl bg-gray-300 shadow-lg">
      <div class="bg-customBlue text-customGreen p-4 rounded-3xl">
        <h3 class="font-bold">Jose and Patricia's Wedding</h3>
        <p class="text-sm">September 26, 2023</p>
        <div class="mt-4 p-4">
          <div class="flex items-start p-4">
            <img src="{base}/images/profile.jfif" alt="User" class="w-14 h-14 rounded-full mr-2" />
            <div class="bg-white text-black p-4 rounded-lg mt-4 text-center">
              <p>Super Worth It. Dahil sa inyo HelloWords Scheduling natuloy ang<br> Wedding ko. Labyu</p>
            </div>
          </div>
          <div class="flex items-start p-4">
            <img src="{base}/images/profile.jfif" alt="Profile of Jose" class="w-14 h-14 rounded-full mr-2" />
            <div class="bg-white text-black p-4 rounded-lg mt-4 text-center">
              <p>Kayo uli sa susunod. Promise</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end mt-4">
        <button class="bg-customBlue text-customGreen py-2 px-4 rounded-lg">See Past Events</button>
      </div>
    </div>
  </div>
</div>

<h2 class="text-center text-2xl font-bold mt-10 mb-6">Scheduled Events</h2>
<div class="container mx-auto px-4">
  {#if events.length > 0}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each events as event, index}
        <div class="bg-customBlue shadow-md rounded-lg p-4">
          <h3 class="text-lg font-bold text-customGreen">{event.eventName}</h3>
          <p class="text-customGreen"><strong>Name:</strong> {event.name}</p>
          <p class="text-customGreen"><strong>Contact:</strong> {event.contactNumber}</p>
          <p class="text-customGreen"><strong>Start Date:</strong> {event.startTime}</p>
          <p class="text-customGreen"><strong>End Date:</strong> {event.endTime}</p>
          <button on:click={() => deleteEvent(index)} class="mt-4 bg-red-500 text-white font-bold rounded px-4 py-2 hover:bg-red-700">Delete</button>
        </div>
      {/each}
    </div>
  {:else}
    <p class="text-center">No scheduled events found.</p>
  {/if}
</div>

<style>
  :global(.fixed.inset-0.bg-gray-900.bg-opacity-50) {
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
