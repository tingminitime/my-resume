<template>
  <!-- w-[calc(100vh-64px-24px)] h-[calc(100vw-48px)] -->
  <div class="flex relative justify-center items-center h-[calc(100vh-48px)]">
    <div class="start__effect"></div>
    <button
      type="button"
      class="block z-30 w-[150px] h-[150px] text-white/50 hover:text-white rounded-full transition duration-200"
      @click="startHandler"
    >
      <span class="text-lg font-medium tracking-wider md:text-xl"><i>Start</i></span>
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useSlidesStore } from '@/stores'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const router = useRouter()
const store = useSlidesStore()

function startHandler() {
  store.saveRouteName('MyStory')
  store.triggerMask()
}

</script>

<style lang="sass" scoped>
@keyframes startAni
  0%
    border: 1px solid rgba(255, 255, 255, 0.8)
    opacity: 0
    transform: scale(0) translate(-50%, -50%)
  60%
    border: 5px solid rgba(255, 255, 255, 0.8)
  80%
    opacity: 0.8
  100%
    border: 1px solid rgba(255, 255, 255, 0.8)
    opacity: 0
    transform: scale(1) translate(-50%, -50%)

.start__effect
  animation-name: startAni
  animation-duration: 1s
  animation-iteration-count: infinite
  position: absolute
  top: 50%
  left: 50%
  // transform: translate(-50%, -50%)
  transform-origin: left top
  width: 150px
  height: 150px
  border-radius: 9999px

</style>