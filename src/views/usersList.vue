
<template>
  <div class="container">
    <div class="header">
      <h2>Daftar Pengguna</h2>

      <router-link
        to="/create"
        class="create-btn"
      >
        Tambah User
      </router-link>
    </div>

    <div v-if="loading">
      Memuat data...
    </div>

    <ul v-else>
      <li
  v-for="user in users"
  :key="user.id"
  class="user-card"
>
  <img
    :src="`https://api.dicebear.com/9.x/personas/svg?seed=${user.id}`"
    class="avatar"
  >

  <div class="user-info">
    <h3>
      {{ user.first_name }} {{ user.last_name }}
    </h3>

    <p>{{ user.email }}</p>
  </div>

  <router-link
    :to="'/user/' + user.id"
    class="detail-link"
  >
    Detail →
  </router-link>
</li>
    </ul>
  </div>
</template>


<style scoped>
.container {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.header h2 {
  margin: 0;
  color: #1f2937;
}

.create-btn {
  background: #2563eb;
  color: white;
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 8px;
  transition: 0.3s;
}

.create-btn:hover {
  background: #1d4ed8;
}

.user-card {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 18px;
  margin-bottom: 15px;
  border-radius: 12px;
  background: white;
  border: 1px solid #e5e7eb;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
  transition: 0.3s;
}

.user-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 18px rgba(0,0,0,0.08);
}

.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.user-info {
  flex: 1;
}

.user-info h3 {
  margin: 0;
  color: #111827;
}

.user-info p {
  margin: 5px 0 0;
  color: #6b7280;
}

.detail-link {
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
}

.detail-link:hover {
  text-decoration: underline;
}
</style>


<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await axios.get(
  'https://reqres.in/api/users',
  {
    headers: {
      'x-api-key': 'pub_4d35e6b1a32646526807eaaab1caaa0b751f0defded74e874078a7c2c309280d'
    }
  }
)
    users.value = res.data.data
  } catch (error) {
    console.error('Gagal mengambil data:', error)
  } finally {
    loading.value = false
  }
})
</script>
