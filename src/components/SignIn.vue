<template>
<!-- HTML code beginning -->
 <div class="main-container">
    <div class="login-header">
      <img src="https://sweetandcoffee.spnty.co/assets/img/logo.png" alt="Sweet & Coffee Logo" />
      <h1>Login To Your Store</h1>
    </div>
    <div class="sign-in-container">
      <form @submit.prevent="submitForm">
        <input type="text" v-model="storeName" placeholder="Enter User Name" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  </div>
  <!-- HTML code end -->
</template>

<script>
//JS code beginning
export default {
  data(){
    // Data function returns an object with component data
    return{
      storeName: '', // Store name entered by the user
      password: '', // Password entered by the user
    };
  },
  methods: {
    // Methods object contains all methods for this component
    submitForm() {
      // Submit form is called when the form is submitted
      console.log(`Store: ${this.storeName}, Password: ${this.password}`);
      //Logging the input values to console, will change with the actual authentication
      this.$router.push({name: 'Home'});
    },
    onLocationChange() {
      console.log("Selected location: ", this.selectedLocation);
      // Handle location change, it will be replaced with the actual data in the server
    }
  }
}
//JS code end
</script>

<style scoped>

.main-container {
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

select {
  width: 90%;
  padding: 10px;
  margin-top: 10px;
}
input:focus, button:focus, select:focus {
  outline: none;
  box-shadow: 0 0 0 2px #4CAF50; /* Green glow */
}

button{
  width: 100%;
  padding: 12px;
  background-color: #4CAF50; /* Green color */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px; /* Space before button */
}
button:hover {
  background-color: #45a049;
}

.login-header h1 {
  text-align: center;
  color: #333;
  font-weight: bold;
  font-size: 28px;
  margin-top: 20%;
}

.sign-in-container {
  background-color: white;
  padding: 30px;
  width: 35%;
  margin: 25px auto;
  text-align: center;
  border: 2px solid black;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Subtle shadow for depth */
}

input, button {
  margin-top: 30px;
  width: 90%;
  padding: 12px;
  border: 2px solid black;
  font-weight: bold;
}

.login-header img {
  width: 180px;
  height: auto;
  display: block;
  margin: 0 auto; /* Centering the logo */
  padding: 5%;
}

input, select {
  width: 100%;
  padding: 12px;
  margin-top: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05); /* Subtle shadow for inputs */
  font-size: 16px; /* Larger font size for readability */
  font-palette:light;
}

input {
  margin-top: 15px;
}

</style>
