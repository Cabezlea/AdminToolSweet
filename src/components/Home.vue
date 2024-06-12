<template>
<div class="home-container">
    <h1>Welcome to the Home Page!</h1>
    <p>This is the home page of your application.</p>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style >
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff; /* Background color white */
}
.home-container h1 {
  color: #000; /* Black color for the font */
  font-size: 2rem; /* Font size 2rem */
  font-weight: bold; /* Bold font weight */
  text-align: center; /* Center align the text */
}
</style>
