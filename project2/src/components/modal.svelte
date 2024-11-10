<script lang="ts">
    import { Button, Modal, Input, Label } from 'flowbite-svelte';
    import { createEventDispatcher, tick } from 'svelte';
  
    let defaultModal = false;
  
    // Variables to store form data
    let name = '';
    let contactNumber = '';
    let eventName = '';
    let startTime = '';
    let endTime = '';
  
    const dispatch = createEventDispatcher();
  
    // Consolidated handleSubmit function
    const handleSubmit = async (event: Event) => {
      event.preventDefault(); // Prevent form submission by default
  
      const form = event.target as HTMLFormElement;
  
      // Validate required fields
      if (!form.checkValidity()) {
        form.reportValidity(); // Display validation errors for invalid fields
        console.log("Form contains invalid fields.");
        return;
      }
  
      // Manually validate contact number
      const contactPattern = /^\d{11}$/;
      if (!contactPattern.test(contactNumber)) {
        alert("Contact number must be exactly 11 digits.");
        return;
      }
  
      // Construct event data
      const eventData = {
        contactNumber,
        name,
        eventName,
        startTime,
        endTime,
      };
  
      // Dispatch event
      dispatch('schedule', eventData);
      console.log('Event Data:', eventData);
  
      // Retrieve existing events from local storage
      let events = [];
      const storedEvents = localStorage.getItem('eventData');
  
      if (storedEvents) {
        try {
          events = JSON.parse(storedEvents);
          if (!Array.isArray(events)) {
            console.error('Stored data is not an array:', events);
            events = [];
          }
        } catch (error) {
          console.error('Error parsing stored events:', error);
        }
      }
  
      // Append new event and store in local storage
      events.push(eventData);
      localStorage.setItem('eventData', JSON.stringify(events));
  
      // Close modal after submission
      defaultModal = false;
      await tick();
  
      // Reload the page after submission
      location.reload();
    };
  </script>
  
  <!-- Trigger Button -->
  <Button
    style="background-color: #23395B"
    class="text-customGreen text-base font-bold rounded-full px-14 py-1 hover:opacity-80"
    on:click={() => (defaultModal = true)} >
    Create <br> Schedule
  </Button>
  
  <!-- Modal with Form -->
  <Modal bind:open={defaultModal}>
    <div class="flex flex-col items-center justify-center mb-4">
      <h2 class="text-xl font-bold text-customBlue">HelloWorlds</h2>
      <h3 class="text-xl font-bold text-customBlue">Scheduling</h3>
    </div>
  
    <div class="flex justify-center items-center min-h-[70vh]">
      <form on:submit|preventDefault={handleSubmit} class="space-y-4 w-full max-w-md bg-white p-6 rounded-lg" novalidate>
  
        <!-- Name -->
        <div>
          <Label for="name" class="text-customBlue1 font-bold">Name:</Label>
          <Input type="text" id="name" placeholder="Enter your name" bind:value={name} required />
        </div>
  
        <!-- Contact -->
        <div>
          <Label for="contact" class="text-customBlue1 font-bold">Contact:</Label>
          <Input 
            type="tel" 
            id="contact" 
            placeholder="Enter contact number" 
            bind:value={contactNumber} 
            required 
            inputmode="numeric" 
            title="Contact number should be exactly 11 digits." 
          />
        </div>
  
        <!-- Event Name -->
        <div>
          <Label for="event_name" class="text-customBlue1 font-bold">Type of Event:</Label>
          <Input type="text" id="event_name" placeholder="Enter event type" bind:value={eventName} required />
        </div>
  
        <!-- Start Date -->
        <div>
          <Label for="start_date" class="text-customBlue1 font-bold">Start Date:</Label>
          <Input type="date" id="start_date" bind:value={startTime} required min="1900-01-01" max="2099-12-31" />
        </div>
  
        <!-- End Date -->
        <div>
          <Label for="end_date" class="text-customBlue1 font-bold">End Date:</Label>
          <Input type="date" id="end_date" bind:value={endTime} required min="1900-01-01" max="2099-12-31" />
        </div>
  
        <!-- Modal Footer -->
        <div class="flex justify-end mt-4">
          <Button
            type="submit"
            style="background-color: #23395B"
            class="text-customGreen text-base font-bold rounded-full px-14 py-1 hover:opacity-80">
            Submit
          </Button>
        </div>
      </form>
    </div>
  </Modal>