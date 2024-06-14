<template>
  <div class = "home-container">
    <div class="search-container">
      <input type="date" class="search-input" placeholder="Date">
      <input type="time" class="search-input" placeholder="Time">
      <input type="text" class="search-input" placeholder="Receipt #">
      <input type="search" class="search-input" required placeholder="Keyword...">
      <button class="search-btn" type="submit">
        <span>Search</span>
      </button>
    </div>
  </div>
</template>

<script setup>

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

.search-input {
  margin: 0 8px;
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid #4CAF50; /* Adjust the color to match your theme */
  outline: none;
  border-radius: 50px;
  transition: all 0.3s ease;
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

.search-input::placeholder {
  color: #ccc;
}


</style>
