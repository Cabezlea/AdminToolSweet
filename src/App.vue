<template>
  <!-- HTML code beginning -->
  <div id="app">
    <!-- SignIn component used here -->
        <router-view></router-view>
    <!--SignIn /-->
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
  overflow: hidden;
  background-color: #f0f0f0;
}
#app{
  min-height: 100vh;
  background-color: white;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0; /* Consistent with global background */

}
/* CSS code end*/
</style>

