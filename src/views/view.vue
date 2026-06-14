<script setup>
import { useCounterStore } from '../stores/counter'
const appName = import.meta.env.VITE_APP_NAME

const mahasiswa = useCounterStore()
</script>

<template>
  <h1>{{appName}}</h1>
  <div class="container">
    <div class="card">
      <h1>📚 Dashboard Mahasiswa</h1>

      <div class="info">
        <p><strong>Nama :</strong> {{ mahasiswa.nama }}</p>
        <p><strong>Program Studi :</strong> {{ mahasiswa.prodi }}</p>
        <p><strong>Semester :</strong> {{ mahasiswa.semester }}</p>
      </div>

      <div class="counter">
        <h2>Tugas Selesai</h2>
        <h1>{{ mahasiswa.tugasSelesai }}</h1>

        <button @click="mahasiswa.tambahTugas()">
          ✅ Selesaikan Tugas
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container{
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background:#f4f6f9;
}

.card{
  background:white;
  padding:30px;
  border-radius:15px;
  width:400px;
  box-shadow:0 5px 20px rgba(0,0,0,0.1);
  text-align:center;
}

.info{
  text-align:left;
  margin:20px 0;
}

.counter h1{
  font-size:50px;
  color:#42b883;
}

button{
  padding:10px 20px;
  border:none;
  border-radius:8px;
  cursor:pointer;
  background:#42b883;
  color:white;
  font-size:16px;
}

button:hover{
  opacity:.9;
}
</style>