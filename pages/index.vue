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
        <div class="card border-0 n-bg-secondary n-rounded" style="height: 100px">
          <span class="w-100">PH Tanah</span>
          <h1 class="m-0">{{phTanah}}</h1>
          <span class="w-100">{{statusKelembapan}}</span>
        </div>
      </div>
      <div class="col-6 text-center">
        <div class="card border-0 n-bg-secondary n-rounded" style="height: 100px">
          <span class="w-100">Kelembapan Tanah</span>
          <h1 class="m-0">{{ kelembapan }}%</h1>
          <span class="w-100 "  :class="{ 'text-danger': (statusPHTanah!='Baik'), 'text-success': (statusPHTanah=='Baik') }">{{statusPHTanah}}</span>
        </div>
      </div>
      <div class="col-6 text-center">
        <div class="card border-0 n-bg-secondary n-rounded" style="height: 100px">
          <span class="w-100">Tinggi Air</span>
          <h1 class="m-0">{{ ketinggianAir }}</h1>
        </div>
      </div>
      <div class="col-6 text-center">
        <div class="card border-0 n-bg-secondary n-rounded" style="height: 100px">
          <span class="w-100">Cairan Hama</span>
          <h1 class="m-0">{{ statusDirigen }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onValue } from "firebase/database";
export default {
  data() {
    return {
      kelembapan: 0,
      statusKelembapan: "",
      ketinggianAir: 0,
      phTanah: 0,
      statusPHTanah: "",
      statusDirigen: ""
    };
  },

  mounted() {

    const kelembapanRef = ref(this.$firebaseData, 'Kelembapan');
    const ketinggianAirRef = ref(this.$firebaseData, 'KetinggiAir');
    const phTanahRef = ref(this.$firebaseData, 'PHTanah');
    const statusDirigenRef = ref(this.$firebaseData, 'StatusDirigen');
    onValue(kelembapanRef, (snapshot) => {
      this.kelembapan = snapshot.val();
      if (this.kelembapan >= 220) {
        this.statusKelembapan = "Kering"
      } else if (this.kelembapan >= 140) {
        this.statusKelembapan = "Lembap"
      } else {
        his.statusKelembapan = "Basah"
      }
    });
    onValue(ketinggianAirRef, (snapshot) => {
      this.ketinggianAir = snapshot.val();
    });
    onValue(phTanahRef, (snapshot) => {
      this.phTanah = snapshot.val();
      if (this.phTanah >= 5.5 && this.phTanah <= 6.5){
        this.statusPHTanah = "Baik"
      }else{
        this.statusPHTanah = "Tidak Baik"
      }
    });
    onValue(statusDirigenRef, (snapshot) => {
      this.statusDirigen = snapshot.val();
    });
  }
};
</script>