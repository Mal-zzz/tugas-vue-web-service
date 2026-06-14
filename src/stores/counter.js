import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    nama: 'Akmal',
    prodi: 'Informatika',
    semester: 4,
    tugasSelesai: 0
  }),

  actions: {
    tambahTugas() {
      this.tugasSelesai++
    }
  }
})