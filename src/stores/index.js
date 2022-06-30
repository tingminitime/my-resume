import { defineStore } from 'pinia'

export const useSlidesStore = defineStore({
  id: 'slides',
  state: () => ({
    slidesMaskStatus: false,
    navigateRouteName: ''
  }),
  getters: {},
  actions: {
    triggerMask() {
      this.slidesMaskStatus = true
    },
    completeMask() {
      this.slidesMaskStatus = false
    },
    saveRouteName(routeName) {
      this.navigateRouteName = routeName
    },
    clearRouteName() {
      this.navigateRouteName = ''
    }
  }
})
