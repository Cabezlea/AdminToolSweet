<template>
<div class="home-container">
    <h1>Welcome to the Home Page!</h1>
  <div class = "search-container">
    <input type="text" placeholder="Search..." class="search-input">
    <button class = "search-button">Search</button>
  </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.home-container {
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0; /* Background color matches the one in the app */
}
.home-container h1 {
  color: #000; /* Black color for the font */
  font-size: 2rem; /* Font size 2rem */
  font-weight: bold; /* Bold font weight */
  text-align: center; /* Center align the text */
}
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px; /* Adjust as needed */
  margin: 20px auto; /* Centering the search bar */
}

.search-input {
  flex-grow: 1;
  padding: 10px 20px; /* Increased padding for better visual alignment */
  font-size: 16px;
  border: 2px solid #4CAF50; /* Consistent border for cohesion */
  outline: none;
  border-radius: 50px 0 0 50px; /* Rounded left corners */
  border-right: none; /* Removing right border to merge with the button */
}

.search-button {
  padding: 10px 20px; /* Match padding with input for seamless design */
  background-color: #4CAF50; /* Green background */
  color: white;
  font-size: 16px;
  border: 2px solid #4CAF50; /* Same border to align with input */
  border-radius: 0 50px 50px 0; /* Rounded right corners */
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: none; /* Remove left border to visually connect to the input */
}

.search-button:hover {
  background-color: #45a049; /* Darker green on hover */
}

/* Ensure the search input and button align perfectly */
.search-input, .search-button {
  height: 45px; /* Ensures both elements are the same height for perfect alignment */
}


</style>
