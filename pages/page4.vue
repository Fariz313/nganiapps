<template>
  <div>
    <div
      class="card border-0 n-bg-secondary mx-5 mt-5 py-2 text-center n-rounded"
    >
      <div class="w-100 d-flex justify-content-around">
        <h3>SUHU CUACA</h3>
        <h3>24 Derajat</h3>
      </div>
    </div>
    <h1 class="text-center my-3 n-text-tersier">HISTORICAL KETINGGIAN AIR</h1>

    <div class="row gy-3 mt-3 mx-4">
      <div class="col-6 text-center">
        <div class="card p-4 border-0 n-bg-secondary n-rounded">
          <h1 class="m-0">{{ ketinggianAir }}</h1>
        </div>
      </div>
    </div>
    <h1 class="text-center my-3 n-text-tersier">HISTORICAL KETINGGIAN AIR</h1>
    <canvas id="myChart"></canvas>
  </div>
</template>
<script>
import Chart from "chart.js/auto";
import { ref, onValue, set } from "firebase/database";
export default {
  data() {
    return {
      ketinggianAir: 0,
    };
  },
  mounted() {
    this.$nextTick(function () {
      const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Grafik Kelembapan Tanah",
            data: [],
            backgroundColor: "#712DDF",
            borderWidth: 0,
          },
        ],
      };

      const options = {
        scales: {
          y: {
            max: 7,
            beginAtZero: true,
          },
        },
      };

      const ctx = document.getElementById("myChart").getContext("2d");
      const myChart = new Chart(ctx, {
        type: "bar",
        data: data,
        options: options,
      });
      const StatisticKetinggianAirRef = ref(
        this.$firebaseData,
        "StatisticKetinggianAir"
      );
      let StatK = null;
      onValue(StatisticKetinggianAirRef, (snapshot) => {
        StatK = snapshot.val();
        myChart.data.datasets[0].data = StatK;
        myChart.update();
      });
      const ketinggianAirRef = ref(this.$firebaseData, "KetinggiAir");
      onValue(ketinggianAirRef, (snapshot) => {
        this.ketinggianAir = snapshot.val();
        if (StatK != null) {
          const updatedStat = this.$storeByDay(
            "ketinggianAir",
            snapshot.val(),
            StatK
          );
          set(ref(this.$firebaseData, "StatisticKetinggianAir"), updatedStat);
        }
      });
    });
  },
};
</script>