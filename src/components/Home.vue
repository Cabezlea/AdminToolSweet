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

<style >
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
}

.search-input {
  flex-grow: 1;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 25px 0 0 25px; /* Rounded left corners */
  border: 2px solid #4CAF50; /* Green border color */
  outline: none;
}

.search-button {
  padding: 10px 1px;
  background-color: #4CAF50; /* Green background */
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 0 25px 25px 0; /* Rounded right corners */
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #45a049; /* Darker green on hover */
}

/* Ensure the search input and button align perfectly */
.search-input, .search-button {
  height: 45px; /* Ensures both elements are the same height */
}

</style>
