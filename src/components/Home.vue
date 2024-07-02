<template>
  <div class = "home-container">
    <div class="search-container">
      <form @submit.prevent="performSearch">
        <input type="date" class="search-input" v-model="date" placeholder="Date">
        <input type="time" class="search-input" v-model="startTime" placeholder="Start Time">
        <input type="time" class="search-input" v-model="endTime" placeholder="End Time">
        <input type="text" class="search-input" v-model="receiptNumber" placeholder="Receipt #">
        <input type="search" class="search-input" v-model="keyword" required placeholder="Keyword...">
      <!-- Dropdown Menu for terminal -->
      <select v-model="selectedTerminal" class="search-input">
      <option disabled value="" selected>Please select a terminal</option>
      <option value="Terminal 1">Terminal 1</option>
      <option value="Terminal 2">Terminal 2</option>
      </select>
<!-- Dropdown Menu for Locations -->
      <select v-model="selectedLocation" class="search-input">
      <option disabled value="" selected>Please select a location</option>
      <option v-for="location in locations" :key="location" :value="location">{{ location }}</option>
      </select>

      <button class="search-btn" type="submit">
        <span>Search</span>
      </button>
      </form>
    </div>

    <!-- Log Table Container -->
    <div class = "table-container">
    <table class="content-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Spoonity ID</th>
            <th>Card Number</th>
            <th>Document Number</th>
          </tr>
        </thead>
        <tbody>
           <tr v-for="result in results" :key="result.Evento" :class="{ 'active-row': result.active }">
            <td>{{ result.Fecha.split('T')[0] }}</td>
            <td>{{ result.Fecha.split('T')[1].split('.')[0] }}</td>
            <td>{{ result.UsuarioAplicacion }}</td>
            <td>{{ result.Objeto }}</td>
            <td>{{ result.Evento }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script >
import axios from "axios";
export default {
  data() {
    return {
      selectedTerminal: '',
      selectedLocation: '', // Selected location by the user
      startTime: '',
      endTime: '',
      date: '',
      receiptNumber: '',
      keyword: '',
      locations: [],
      results: [],
      message: ''
    };
  },
  methods: {
    onLocationChange() {
      console.log("Selected location: ", this.selectedLocation);
      // Handle location change, it will be replaced with the actual data in the server
      this.fetchData()
    },
    performSearch() {
      console.log(`Performing search with Time Range: ${this.startTime} - ${this.endTime}`);
      this.fetchData();
    },
    onTerminalChange() {
      console.log("Selected terminal: ", this.selectedTerminal);
      this.fetchData();
    },
    fetchLocations() {
      axios.get('http://localhost:8000/toolsweetapp/api/locations/')
          .then(response => {
            this.locations = response.data;
          })
          .catch(error => {
            console.error('Error fetching locations:', error);
          });
    },
    fetchData() {
      const params = new URLSearchParams();
      params.append('date', this.date);
      params.append('start_time', this.startTime);
      params.append('end_time', this.endTime);
      params.append('receipt_number', this.receiptNumber);
      params.append('keyword', this.keyword);
      params.append('location', this.selectedLocation);
      params.append('terminal', this.selectedTerminal);


      axios.get('http://localhost:8000/toolsweetapp/api/test/', {params})
          .then(response => {
            console.log('Data from Django:', response.data);
            this.results = response.data;
            this.message = '';
          })
          .catch(error => {
            if (error.response && error.response.status === 404) {
              this.message = 'No data found for the provided search criteria.';
            } else {
              console.error('Error fetching data:', error);
            }
          });
    }
  },
  mounted() {
    this.fetchLocations();
  }
};
</script>

<style scoped>

/* CSS code for the search bar with the filters */

.home-container {
  width: 100%;
  padding: 1rem;
  justify-content: center;
}

.search-container {
  padding: 1rem;
  display: flex;
  padding: 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.search-input, .search-input select {
  margin: 0 8px;
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid #4CAF50; /* Adjust the color to match your theme */
  outline: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  -webkit-appearance: none; /* Disables native dropdown styling on WebKit browsers like Chrome and Safari */
  -moz-appearance: none; /* Disables native dropdown styling on Firefox */
}

.search-input, .search-btn {
  margin: 5px; /* Adds margin around inputs and button */
  flex-grow: 1; /* Allows inputs and button to grow and fill available space */
}

.search-btn {
  padding: 10px 20px;
  background-color: #4CAF50; /* Adjust the color to match your theme */
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 50px;
  transition: background-color 0.3s;
}

.search-btn:hover {
  background-color: #45a049; /* Darker green on hover */
}

.search-input:focus {
  border-color: #2762f3; /* Focus color */
}

.search-input:hover {
  cursor: pointer;
}

.search-input::placeholder {
  color: #ccc;
}

/* CSS code for the Log Table */

/* Styling for the entire table */
.content-table {
    border-collapse: collapse;
    margin: 50px 0;
    font-size: 0.9em;
    min-width: 400px;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    width: 100%;
}

/* Header of the table */
.content-table thead tr {
    background-color: #4CAF50;
    color: #ffffff;
    text-align: left;
    font-weight: bold;
}

.content-table th,
.content-table td {
    padding: 12px 15px;
}

/* Each cell in the table */
.content-table td {
  color: #333;
}

/* Targeting every single table row (tr) */
.content-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

/* Targeting every single even row */
.content-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

/* Border at the bottom of the last row */
.content-table tbody tr:last-of-type {
    border-bottom: 2px solid #4CAF50;
}

.content-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}
</style>
