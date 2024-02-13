<template>
  <div>
    <div class="card border-0 n-bg-secondary mx-5 mt-5 text-center n-rounded">
      <h3>CUACA</h3>
      <div class="d-flex">
        <div class="ps-3">
          <h3>24 C</h3>
          <span>Hujan</span>
        </div>
      </div>
    </div>
    <div class="row gy-3 mt-3 mx-4">
      <div class="col-6 text-center">
        <div
          class="card border-0 n-bg-secondary n-rounded"
          style="height: 100px"
        >
          <span class="w-100">PH Tanah</span>
          <h1 class="m-0">6.2</h1>
          <span class="w-100 text-success">Baik</span>
        </div>
      </div>
      <div class="col-6 text-center">
        <div
          class="card border-0 n-bg-secondary n-rounded"
          style="height: 100px"
        >
          <span class="w-100">Kelembapan Tanah</span>
          <h1 class="m-0">313</h1>
          <span class="w-100 text-danger">Tidak Baik</span>
        </div>
      </div>
      <div class="col-6 text-center">
        <div
          class="card border-0 n-bg-secondary n-rounded"
          style="height: 100px"
        >
          <span class="w-100">Tinggi Air</span>
          <h1 class="m-0">0</h1>
        </div>
      </div>
      <div class="col-6 text-center">
        <div
          class="card border-0 n-bg-secondary n-rounded"
          style="height: 100px"
        >
          <span class="w-100">Cairan Hama</span>
          <h1 class="m-0">KOSONG</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
//   async fetch() {
//     const snapshot = await this.$firebase()
//       .database()
//       .ref("/")
//       .once("kelembapan");
//     this.items = snapshot.val();
//   },
//   data() {
//     return {
//       items: [],
//     };
//   },

mounted(){
  // Initialize Firebase
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "https://ngani-87091-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

// Reference to your Firebase database
var ref = database.ref("/"); // Change "/" to the path of your data if it's not at the root level

// Read data from Firebase Realtime Database
ref.once("value")
  .then(function(snapshot) {
    // Get data snapshot
    var data = snapshot.val();
    console.log(data); // Output the retrieved data to console
  })
  .catch(function(error) {
    console.error("Error reading data:", error);
  });
}
};
</script>