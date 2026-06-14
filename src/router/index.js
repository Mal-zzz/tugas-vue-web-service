import { createRouter, createWebHistory } from 'vue-router'

import UserList from '@/views/usersList.vue'
import UserDetail from '@/views/usersDetail.vue'
import CreateUser from '@/views/createUsers.vue'

const routes = [
  {
    path: '/',
    component: UserList
  },
  {
    path: '/user/:id',
    component: UserDetail
  },
  {
    path: '/create',
    component: CreateUser
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})