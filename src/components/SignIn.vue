<template>
<!-- HTML code beginning -->
  <div class ="login-header">
        <img src="https://sweetandcoffee.spnty.co/assets/img/logo.png" alt="Sweet & Coffee Logo" />
    <h1>Login To Your Store</h1>
  <div class = "sign-in-container">
    <form @submit.prevent=" submitForm">
      <!-- Input for store name -->
      <input type="text" v-model="storeName" placeholder="Enter Store Name" />
      <!--Input for password -->
      <input type="password" v-model="storeName" placeholder="Enter Password" />
      <!--Submit button -->
      <button type = "submit">Sign In</button>
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

<style>
/* CSS code beginning*/
input:focus, button:focus {
  outline: none;
  border-color: darkblue;
}

button:hover {
  background-color: lightgray;
}
.login-header h1 {
  text-align: center;
  color: black;
  font-weight: bolder;
  font-size: 24px;
  height: 20px;
}
.sign-in-container {
  background-color: white;
  padding: 20px;
  width: 300px;
  margin: 50px auto;
  text-align: center;
  border: 2px solid black;
}
input, button {
  margin-top: 10px;
  width: 90%;
  padding: 10px;
  border: 2px solid black;
  font-weight: bold;
}
.login-header img {
  width: 150px;
  height: auto;
  display: block;
}

/* CSS code end*/
</style>
