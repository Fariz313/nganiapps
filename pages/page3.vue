<template>
  <div>
    <div class="card border-0 n-bg-secondary mx-5 mt-5 py-2 text-center n-rounded">
      <div class="w-100 d-flex justify-content-around">
        <h3>SUHU CUACA</h3>
        <h3>24 Derajat</h3>
      </div>
    </div>
    <h1 class="text-center my-3 n-text-tersier">DATA KELEMBAPAN TANAH</h1>

    <div class="row gy-3 mt-3 mx-4">
      <div class="col-6 text-center">
        <div class="card p-4 border-0 n-bg-secondary n-rounded">
          <h1 class="m-0">{{ kelembapan }}</h1>
        </div>
      </div>
      <div class="col-6 text-center">
        <div class="card p-4 border-0 n-bg-secondary n-rounded">
          <h1 class="m-0">{{ statusKelembapan }}</h1>
        </div>
      </div>
    </div>
    <h1 class="text-center my-3 n-text-tersier">HISTORICAL KELEMBAPAN TANAH</h1>
    <canvas id="myChart"></canvas>
  </div>
</template>
<script>
import Chart from "chart.js/auto";
import { ref, onValue,set } from "firebase/database";
export default {
  data() {
    return {
      kelembapan: 0,
      statusKelembapan: ""
    }
  },
  mounted() {
    const kelembapanRef = ref(this.$firebaseData, 'Kelembapan');
    onValue(kelembapanRef, (snapshot) => {
      this.kelembapan = snapshot.val();
      if (this.kelembapan >= 220) {
        this.statusKelembapan = "Kering"
      } else if (this.kelembapan >= 140) {
        this.statusKelembapan = "Lembap"
      } else {
        his.statusKelembapan = "Basah"
      }
      this.$storeByDay("kelembapan", snapshot.val());
      set(ref(this.$firebaseData, "StatisticKelembapan"), this.$storeByDay("kelembapan", snapshot.val()));

    });
    this.$nextTick(function () {
      const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Grafik Kelembapan Tanah",
            data: this.$getDataStored("kelembapan"),
            backgroundColor: "#712DDF",
            borderWidth: 0,
          },
        ],
      };

      const options = {
        scales: {
          y: {
          },
        },
      };

      const ctx = document.getElementById("myChart").getContext("2d");
      const myChart = new Chart(ctx, {
        type: "bar",
        data: data,
        options: options,
      });
      const statKelembapanRef = ref(this.$firebaseData, "StatisticKelembapan");
      onValue(statKelembapanRef, (snapshot) => {
        const StatK = snapshot.val();
        myChart.data.datasets[0].data = StatK;
        myChart.update();
      });
    });
  },
};
</script>