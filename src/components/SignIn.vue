<template>
<!-- HTML code beginning -->
  <div class = "sign-in-container">
    <form @submit.prevent=" submitForm">
      <!-- Input for store name -->
      <input type="text" v-model="storeName" placeholder="Enter Store Name" />
      <!--Input for password -->
      <input type="password" v-model="storeName" placeholder="Enter store name" />
      <!--Submit button -->
      <button type = "submit">Sign In</button>
    </form>
  </div>
  <!-- HTML code end -->
</template>

<script>
//JS code beginning
export default {
  data(){
    // Data function returns an object with component data
    return{
      storeName: ' ', // Store name entered by the user
      password: ' ' // Password entered by the user
    };
  },
  methods: {
    // Methods object contains all methods for this component
    submitForm() {
      // Submit form is called when the form is submitted
      console.log(`Store: ${this.storeName}, Password: ${this.password}`);
      //Logging the input values to console, will change with the actual authentication
    }
  }
}
//JS code end
</script>

<style scoped>
/* CSS code beginning*/
.sign-in-container{
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  width: 300px;
  margin: 50px auto;
  text-align: center;
}
input, button {
  margin-top: 10px;
  width: 90%;
  padding: 10px;
}
/* CSS code end*/
</style>