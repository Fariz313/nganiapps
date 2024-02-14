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
    <h1 class="text-center my-3 n-text-tersier">DATA PH TANAH</h1>

    <div class="row gy-3 mt-3 mx-4">
      <div class="col-6 text-center">
        <div class="card p-4 border-0 n-bg-secondary n-rounded">
          <h1 class="m-0">{{ phTanah }}</h1>
        </div>
      </div>
      <div class="col-6 text-center">
        <div class="card p-4 border-0 n-bg-secondary n-rounded">
          <h1 class="m-0">{{ statusPHTanah }}</h1>
        </div>
      </div>
    </div>
    <h1 class="text-center my-3 n-text-tersier">HISTORICAL PH TANAH</h1>
    <canvas id="myChart"></canvas>
  </div>
</template>
<script>
import Chart from "chart.js/auto";
import { ref, onValue, set } from "firebase/database";
export default {
  data() {
    return {
      phTanah: 0,
      statusPHTanah: "-",
    };
  },
  mounted() {
    this.$nextTick(function () {
      console.log("sData", this.$getDataStored("ph"));
      const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Grafik PH Tanah",
            data: this.$getDataStored("ph"),
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
      let StatPH = null
      const statPhTanahRef = ref(this.$firebaseData, "StatisticPH");
      onValue(statPhTanahRef, (snapshot) => {
        StatPH = snapshot.val();
        myChart.data.datasets[0].data = StatPH;
        myChart.update();
      });

      const phTanahRef = ref(this.$firebaseData, "PHTanah");
      onValue(phTanahRef, (snapshot) => {
        this.phTanah = snapshot.val();
        if (this.phTanah >= 5.5 && this.phTanah <= 6.5) {
          this.statusPHTanah = "Baik";
        } else {
          this.statusPHTanah = "Tidak Baik";
        }
        if(StatPH!=null){
          const dataWStore = this.$storeByDay("ph", snapshot.val(),StatPH);
          set(ref(this.$firebaseData, "StatisticPH"), dataWStore);
        }
      });
    });
  },
};
</script>