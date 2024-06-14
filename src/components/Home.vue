<template>
  <div class = "home-container">
    <div class="search-container">
      <input type="date" class="search-input" placeholder="Date">
      <input type="time" class="search-input" placeholder="Time">
      <input type="text" class="search-input" placeholder="Receipt #">
      <input type="search" class="search-input" required placeholder="Keyword...">
      <!-- Dropdown Menu for Locations -->
      <select v-model="selectedLocation" @change="onLocationChange" class="search-input">
    <option disabled value="" selected>Please select a location</option>
    <option value="location1">Location 1</option>
    <option value="location2">Location 2</option>
    <option value="location3">Location 3</option>
     </select>

      <button class="search-btn" type="submit">
        <span>Search</span>
      </button>
    </div>
  </div>
</template>

<script >
export default {
  data () {
    return {
      selectedLocation: ''// Selected location by the user
    };
  },
  methods: {
    onLocationChange() {
      console.log("Selected location: ", this.selectedLocation);
      // Handle location change, it will be replaced with the actual data in the server
    }
  }
}
</script>

<style scoped>

.home-container {
  width: 100%;
  padding: 1rem;
  justify-content: center;
}

.search-container {
  padding: 1rem;
  display: flex;
  padding: 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.search-input, .search-input select {
  margin: 0 8px;
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid #4CAF50; /* Adjust the color to match your theme */
  outline: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  -webkit-appearance: none; /* Disables native dropdown styling on WebKit browsers like Chrome and Safari */
  -moz-appearance: none; /* Disables native dropdown styling on Firefox */
}



.search-input, .search-btn {
  margin: 5px; /* Adds margin around inputs and button */
  flex-grow: 1; /* Allows inputs and button to grow and fill available space */
}

.search-btn {
  padding: 10px 20px;
  background-color: #4CAF50; /* Adjust the color to match your theme */
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 50px;
  transition: background-color 0.3s;
}

.search-btn:hover {
  background-color: #45a049; /* Darker green on hover */
}

.search-input:focus {
  border-color: #2762f3; /* Focus color */
}
.search-input:hover {
  cursor: pointer;
}

.search-input::placeholder {
  color: #ccc;
}


</style>
