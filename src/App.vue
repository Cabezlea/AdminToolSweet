<template>
  <!-- HTML code beginning -->
  <div id="app">
    <!-- SignIn component used here -->
    <SignIn />
  </div>
    <!-- HTML code end -->
</template>

<script setup>
//JS code beginning
import SignIn from "@/components/SignIn.vue";

//JS code end
</script>

<style>
/* CSS code beginning*/
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: white;
}
#app{
  min-height: 100vh;
  background-color: white;
}
/* CSS code end*/
</style>

