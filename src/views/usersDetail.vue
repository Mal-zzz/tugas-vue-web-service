<template>
  <div v-if="user" class="container">

    <router-link
      to="/"
      class="back-btn"
    >
      ← Kembali
    </router-link>

    <img
      :src="`https://api.dicebear.com/9.x/personas/svg?seed=${user.id}`"
      class="avatar"
    >

    <h2 class="name">
      {{ user.first_name }} {{ user.last_name }}
    </h2>

    <p class="email">
      {{ user.email }}
    </p>

  </div>
</template>

<style scoped>
.container {
  max-width: 450px;
  margin: 60px auto;
  padding: 30px;

  background: white;
  border-radius: 16px;

  box-shadow:
    0 10px 25px rgba(0,0,0,.08);

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.back-btn {
  display: inline-block;
  margin-bottom: 20px;
  text-decoration: none;
  color: #2563eb;
  align-self: flex-start;
}

.avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.name {
  margin: 0;
  color: #111827;
}

.email {
  color: #6b7280;
}
</style>


<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const user = ref(null)

onMounted(async () => {
  try {
    const userId = route.params.id

    const res = await axios.get(
      `https://reqres.in/api/users/${userId}`,
      {
        headers: {
          'x-api-key': 'pub_4d35e6b1a32646526807eaaab1caaa0b751f0defded74e874078a7c2c309280d'
        }
      }
    )

    user.value = res.data.data
  } catch (error) {
    console.error(error)
  }
})
</script>