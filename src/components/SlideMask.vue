<template>
  <div
    ref="slidesMask"
    class="flex fixed flex-col w-full h-full"
    :class="{ 'z-50': slidesMaskStatus }"
  >
    <div class="absolute top-0 left-full w-full h-[25vh] bg-white slides_mask-bar"></div>
    <div class="absolute top-1/4 left-full w-full h-[25vh] bg-white slides_mask-bar"></div>
    <div class="absolute top-1/2 left-full w-full h-[25vh] bg-white slides_mask-bar"></div>
    <div class="absolute top-3/4 left-full w-full h-[25vh] bg-white slides_mask-bar"></div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useSlidesStore } from '@/stores'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const router = useRouter()
const store = useSlidesStore()
const { slidesMaskStatus, navigateRouteName } = storeToRefs(store)

const slidesMask = ref(null)
function slidesMaskHandler() {
  const maskBar = slidesMask.value.querySelectorAll('.slides_mask-bar')
  const slidesMaskTimeline = gsap.timeline({
    defaults: {
      duration: 0.4,
      stagger: 0.2,
    },
    onComplete() {
      store.completeMask()
      console.log('Mask complete!', slidesMaskStatus.value)
    }
  })
  slidesMaskTimeline
    .to(maskBar, {
      xPercent: -100,
      onComplete() {
        router.push({ name: navigateRouteName.value })
        console.log('Mask success!', slidesMaskStatus.value)
      }
    })
    .to(maskBar, {
      delay: 0.2,
      xPercent: 0
    })
}

watch(slidesMaskStatus, (newVal) => {
  if (newVal) {
    slidesMaskHandler()
  }
})

</script>