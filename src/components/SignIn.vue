<template>
<!-- HTML code beginning -->
 <div class="main-container">
    <div class="login-header">
      <img src="https://sweetandcoffee.spnty.co/assets/img/logo.png" alt="Sweet & Coffee Logo" />
      <h1>Login To Your Store</h1>
    </div>
    <div class="sign-in-container">
      <select v-model="selectedLocation" @change="onLocationChange">
        <option disabled value="" selected>Please select a location</option>
        <option value="location1">Location 1</option>
        <option value="location2">Location 2</option>
        <option value="location3">Location 3</option>
      </select>
      <form @submit.prevent="submitForm">
        <input type="text" v-model="storeName" placeholder="Enter Store Name" />
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
      selectedLocation: ''// Selected location by the user
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

/* CSS code beginning*/
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
  margin-top: 50px;
}

.sign-in-container {
  background-color: white;
  padding: 20px;
  width: 450px;
  margin: 25px auto;
  text-align: center;
  border: 2px solid black;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Subtle shadow for depth */
}

input, button {
  margin-top: 10px;
  width: 90%;
  padding: 10px;
  border: 2px solid black;
  font-weight: bold;
}

.login-header img {
  width: 120px;
  height: auto;
  display: block;
  margin: 0 auto; /* Centering the logo */
}

input, select {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05); /* Subtle shadow for inputs */
  font-size: 16px; /* Larger font size for readability */
  font-palette:light;
}


/* Media queries for larger screens */
@media only screen and (min-width: 1200px) {
  .main-container {
    margin-top: -60px;
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
  width: 100%;
  text-align: center;
  color: #333;
  font-weight: bold;
  font-size: 28px;
  margin-top: 50px;
  margin-left: 185px;
}

.sign-in-container {
  background-color: white;
  padding: 20px;
  width: 450px;
  margin: 25px auto;
  text-align: center;
  border: 2px solid black;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Subtle shadow for depth */
  margin-left: 375px;
}

input, button {
  margin-top: 10px;
  width: 90%;
  padding: 10px;
  border: 2px solid black;
  font-weight: bold;
}

.login-header img {
  width: 30%;
  height: auto;
  display: block;
  margin-left: 460px;
  margin-top: 1px;
}

input, select {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05); /* Subtle shadow for inputs */
  font-size: 16px; /* Larger font size for readability */
  font-palette:light;
  }
}

</style>
