<template>
  <div class = "home-container">
    <div class="search-container">
      <form @submit.prevent="handleSearch">
      <input type="date" class="search-input" placeholder="Date">
      <input type="time" class="search-input" v-model="startTime" placeholder="Start Time">
      <input type="time" class="search-input" v-model="endTime" placeholder="End Time">
      <input type="text" class="search-input" placeholder="Receipt #">
      <input type="search" class="search-input" required placeholder="Keyword...">
      <!-- Dropdown Menu for Locations -->
      <select v-model="selectedLocation" @change="onLocationChange" class="search-input">
    <option disabled value="" selected>Please select a location</option>
    <option value="location1">Location 1</option>
    <option value="location2">Location 2</option>
    <option value="location3">Location 3</option>
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
           <tr v-for="result in results" :key="result.id" :class="{ 'active-row': result.active }">
            <td>{{ result.date }}</td>
            <td>{{ result.time }}</td>
            <td>{{ result.spoonityId }}</td>
            <td>{{ result.cardNumber }}</td>
            <td>{{ result.documentNumber }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script >
import axios from "axios";
export default {
  data () {
    return {
      selectedLocation: '',// Selected location by the user
      startTime: '',
      endTime: '',
      date: '',
      receiptNumber: '',
      keyword: '',
      results: [
        { id: 1, date: '06/14/2024', time: '12:30 PM', spoonityId: '88,110', cardNumber: 'dcode', documentNumber: '1234567890', active: false },
        { id: 2, date: '06/14/2024', time: '12:35 PM', spoonityId: '72,400', cardNumber: 'Students', documentNumber: '1234567890', active: true },
        { id: 3, date: '06/14/2024', time: '12:40 PM', spoonityId: '52,300', cardNumber: 'dcode', documentNumber: '1234567890', active: false }
      ]
    };
  },
  methods: {
    onLocationChange() {
      console.log("Selected location: ", this.selectedLocation);
      // Handle location change, it will be replaced with the actual data in the server
      this.fetchData()
    },
     handleSearch() {
      // Perform search based on the time range and other criteria
      this.addResult();
      this.fetchData();
    },
    submitForm() {
      console.log(`Time Range: ${this.startTime} - ${this.endTime}`)
      // Perform search based on the time range and other criteria
      this.addResult ();
      this.fetchData()
    },
    addResult() {
      const newId = this.results.length + 1;
      const newResults = {
        id: newId,
        date: this.date,
        time: '${this.startTime}-${this.endTime}',
        spoonityId: 'New ID',
        cardNumber: 'New Card',
        documentNumber: 'New Doc',
        active: false
      };
      this.results.push(newResults);
    },
    fetchData() {
      axios.get('http://localhost:8000/toolsweetapp/api/test/')
        .then(response => {
          console.log('Data from Django:', response.data);
          // You can use response.data to add to results or handle however you need
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }
}
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
