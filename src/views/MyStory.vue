<template>
  <div class="relative w-full h-full">
    <h2 class="fixed top-0 left-0 py-4 px-6">
      My Story
    </h2>
    <ul class="fixed top-12 left-1/2 z-40 -translate-x-1/2">
      <li>
        <a href="javascript:;">關於我</a>
      </li>
    </ul>
    <transition
      appear
      @enter="enterHandler"
    >
      <div
        ref="slideContainer"
        class="overflow-x-hidden slide_container"
      >
        <section
          class="flex relative z-20 flex-nowrap w-screen h-screen horizon_section"
          @wheel="slideAni"
        >
          <div class="flex basis-[100vw] grow-0 shrink-0 justify-center items-center w-screen h-screen border-r border-white/25 horizon_panel">
            <p class="text-4xl">
              Slide 1
            </p>
          </div>
          <div class="flex basis-[100vw] grow-0 shrink-0 justify-center items-center w-screen h-screen border-r border-white/25 horizon_panel">
            <p class="text-4xl">
              Slide 2
            </p>
          </div>
          <div class="flex basis-[100vw] grow-0 shrink-0 justify-center items-center w-screen h-screen border-r border-white/25 horizon_panel">
            <p class="text-4xl">
              Slide 3
            </p>
          </div>
          <div class="flex basis-[100vw] grow-0 shrink-0 justify-center items-center w-screen h-screen border-r border-white/25 horizon_panel">
            <p class="text-4xl">
              Slide 4
            </p>
          </div>
        </section>
      </div>
    </transition>
    <div class="fixed top-1/2 left-8 z-20 -translate-y-1/2">
      <button type="button">
        prev
      </button>
    </div>
    <div class="fixed top-1/2 right-8 z-20 -translate-y-1/2">
      <button
        type="button"
        @click="nextHandler"
      >
        next
      </button>
    </div>
    <div class="fixed bottom-6 left-1/2 z-20 w-3/4 h-1 bg-white/25 -translate-x-1/2 horizon_progress">
      <div class="absolute top-0 left-0 z-30 w-full h-1 bg-white horizon_progress--percent">
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const useResize = (onResize) => {
  ww.value = window.innerWidth
  wh.value = window.innerHeight
  onMounted(() => {
    window.addEventListener('resize', onResize)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize)
  })
}

const ww = ref(null)
const wh = ref(null)
useResize(() => {
  ww.value = window.innerWidth
  wh.value = window.innerHeight
})

const enterHandler = (el) => {}

const slideContainer = ref(null)

function nextHandler() {
  if ((window.scrollY + window.innerHeight) < document.documentElement.scrollHeight) {
    window.scrollTo({
      top: (window.scrollY + window.innerWidth),
      behavior: 'smooth'
    })
  }
}

function gaspInit() {
  // horizontal scroll
  const horizonSection = gsap.utils.toArray('.horizon_section')
  horizonSection.forEach(section => {
    const horizontalPanels = Array.from(section.querySelectorAll('.horizon_panel'))

    gsap.to(section, {
      xPercent: -100 * (horizontalPanels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (horizontalPanels.length - 1),
          duration: 0.2,
          delay: 0.2,
          inertia: false,
        },
        start: 'top top',
        end: () => '+=' + (section.scrollWidth - section.clientWidth),
      },
    })
  })

  // progress
  gsap.from('.horizon_progress--percent', {
    scrollTrigger: {
      trigger: slideContainer.value,
      scrub: 1,
      start: 'top top',
      // end: () => '+=' + slideContainer.value.offsetWidth
      end: () => '+=' + (slideContainer.value.scrollHeight - window.innerHeight)
    },
    scaleX: 0,
    transformOrigin: 'left center',
    ease: 'none'
  })
}

onMounted(() => {
  // ww.value = window.innerWidth
  // wh.value = window.innerHeight
  gaspInit()
})

onBeforeUnmount(() => {
  // window.removeEventListener('wheel', slideAni)
})

</script>

<style scoped>
</style>