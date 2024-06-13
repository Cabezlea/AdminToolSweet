<template>
<div class="home-container">
    <h1>Welcome to the Home Page!</h1>
  <div class = "search-bar">
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
.search-bar {
  overflow: hidden;
  background-color:#e9e9e9;
}
</style>
