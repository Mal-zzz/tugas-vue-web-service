<template>
  <div class="container">

    <router-link
      to="/"
      class="back-btn"
    >
      ← Kembali
    </router-link>

    <h2 class="title">
      Tambah Pengguna
    </h2>

    <input
      v-model="name"
      placeholder="Masukkan nama"
      class="input"
    >

    <input
      v-model="job"
      placeholder="Masukkan pekerjaan"
      class="input"
    >

    <button
      @click="createUser"
      class="btn"
    >
      Tambah User
    </button>

    <div
      v-if="response"
      class="success-box"
    >
      <p><strong>ID:</strong> {{ response.id }}</p>
      <p><strong>Nama:</strong> {{ response.name }}</p>
      <p><strong>Pekerjaan:</strong> {{ response.job }}</p>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const name = ref('')
const job = ref('')
const response = ref(null)

const createUser = async () => {
  try {
    const res = await axios.post(
      'https://reqres.in/api/users',
      {
        name: name.value,
        job: job.value
      },
      {
        headers: {
          'x-api-key': 'pub_4d35e6b1a32646526807eaaab1caaa0b751f0defded74e874078a7c2c309280d'
        }
      }
    )

    response.value = res.data

  } catch (err) {
    console.error('Gagal menambah user:', err)
  }
}
</script>


<style scoped>
.container {
  max-width: 500px;
  margin: 60px auto;
  padding: 35px;
  background: white;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
}

.title {
  text-align: center;
  margin-bottom: 25px;
  color: #111827;
}

.back-btn {
  display: inline-block;
  margin-bottom: 20px;
  text-decoration: none;
  color: #2563eb;
}

.input {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  box-sizing: border-box;
}

.input:focus {
  outline: none;
  border-color: #2563eb;
}

.btn {
  width: 100%;
  padding: 12px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  background: #1d4ed8;
}

.success-box {
  margin-top: 20px;
  padding: 15px;
  border-radius: 10px;
  background: #f0fdf4;
  border: 1px solid #22c55e;
}
</style>