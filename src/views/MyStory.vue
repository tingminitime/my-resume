<template>
  <div class="relative w-full h-full">
    <h2 class="fixed top-0 left-0 py-4 px-6">
      My Story
    </h2>
    <transition
      appear
      @enter="enterHandler"
    >
      <div
        id="horizon_container"
        ref="horizonContainer"
        class="flex relative z-20 flex-nowrap h-screen"
      >
        <section
          ref="horizonPanel1"
          class="flex basis-[100vw] grow shrink-0 justify-center items-center border-r border-white/25 horizon_panel horizon_panel1"
        >
          <div>
            <p class="text-4xl">
              Slide 1
            </p>
          </div>
        </section>
        <section class="flex basis-[100vw] grow shrink-0 justify-center items-center border-r border-white/25 horizon_panel horizon_panel2">
          <div>
            <p class="text-4xl">
              Slide 2
            </p>
          </div>
        </section>
      </div>
    </transition>
    <div class="fixed bottom-6 left-1/2 z-20 w-3/4 h-1 bg-white/25 -translate-x-1/2 horizon_progress">
      <div class="absolute top-0 left-0 z-30 w-full h-1 bg-white horizon_progress--percent">
      </div>
    </div>
    <!-- <div
      v-for="i in 3"
      :key="i"
      class="absolute top-0 left-0 w-24 h-24 bg-slate-400/25 bg_block"
    ></div> -->
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const useResize = (onResize) => {
  onMounted(() => {
    window.addEventListener('resize', onResize)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize)
  })
}

const width = ref(null)
const height = ref(null)
useResize(() => {
  width.value = window.innerWidth
  height.value = window.innerHeight
  
})

const horizonContainer = ref(null)
const horizonPanel1 = ref(null)
const enterHandler = (el) => {
  const panels = gsap.utils.toArray('.horizon_panel')

  gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '#horizon_container',
      pin: true,
      scrub: 1,
      snap: {
        snapTo: 1 / (panels.length - 1),
        duration: 0.3,
        delay: 0.3
      },
      end: () => '+=' + horizonContainer.value.offsetWidth
    },
  })

  gsap.from('.horizon_progress--percent', {
    scrollTrigger: {
      trigger: horizonPanel1.value,
      scrub: 1,
      start: 'top top',
      end: () => '+=' + horizonContainer.value.offsetWidth
    },
    scaleX: 0,
    transformOrigin: 'left center',
    ease: 'none'
  })
}

onMounted(() => {
  width.value = window.innerWidth
  height.value = window.innerHeight
})

</script>

<style scoped>
</style>