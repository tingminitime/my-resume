<template>
  <div
    ref="panelHome"
    class="container flex relative flex-col justify-between px-6 pt-20 pb-16 mx-auto h-full md:px-12 md:pt-32 md:pb-24"
  >
    <!-- Wheel hint -->
    <div class="hidden absolute top-1/2 left-1/2 flex-col justify-center items-center -translate-x-1/2 -translate-y-1/2 md:flex wheel">
      <span class="mt-2 animate-bounce material-symbols-outlined">
        expand_more
      </span>
    </div>
    <!-- Mobile hint -->
    <div class="block absolute top-1/2 left-1/2 w-6 h-12 rounded-full border border-white/25 -translate-x-1/2 translate-y-[calc(-50%-12px)] md:hidden">
      <div class="w-6 h-6 bg-white rounded-full gesture"></div>
    </div>
    <!-- --- -->
    <div class="flex justify-between items-center select-none">
      <!-- Say Hi -->
      <div class="flex flex-col gap-4 md:gap-6">
        <p class="text-5xl font-bold md:text-6xl panel_home_text-ani">
          HELLO
        </p>
        <h2 class="text-4xl font-bold md:text-6xl panel_home_text-ani">
          I'm Tim .
        </h2>
      </div>
      <!-- Avatar -->
      <div class="relative mr-0 w-32 md:w-48 md:h-48 lg:mr-16">
        <div
          ref="panelHome_avatarMask"
          class="absolute top-0 left-0 z-10 w-full h-full rounded-full shadow-[inset_0_0_0_0px_rgba(255,255,255)] scale-0"
        ></div>
        <div
          ref="panelHome_avatar"
          class="overflow-hidden rounded-full opacity-0 aspect-w-1 aspect-h-1"
        >
          <img
            src="@img/Tim-avatar.jpg"
            class="w-full h-full"
            alt="Tim avatar"
          >
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-8 justify-between pb-4 md:flex-row md:gap-0 md:pb-8">
      <div class="flex flex-col gap-2 tracking-wider">
        <div class="text-lg">
          <p>
            Front-End Developer
          </p>
        </div>
        <div class="font-light">
          <span>Email : </span>
          <button
            ref="contactEmail"
            type="button"
            data-info="e0610k@gmail.com"
            class="hover:tracking-widest transition-all"
            @click="copyInfoHandler"
          >
            e0610k@gmail.com
          </button>
        </div>
        <div class="font-light">
          <span>Phone : </span>
          <button
            ref="contactPhone"
            type="button"
            data-info="0988247111"
            class="hover:tracking-widest transition-all"
            @click="copyInfoHandler"
          >
            0988-247-111
          </button>
        </div>
        <div class="font-light">
          <p class="">
            期望工作地點 : 台北市、新北市、高雄市
          </p>
        </div>
      </div>
      <div class="mr-8 lg:mr-16">
        <ul class="flex flex-row gap-4 md:flex-col">
          <li class="transition-transform hover:scale-110">
            <a
              ref="githubLink"
              data-link="GitHub"
              href="https://github.com/tingminitime"
              target="_blank"
              class="block w-8 h-8 panel_home_outerlink"
            >
              <img
                src="@img/github-logo-white.svg"
                alt="GitHub link"
              >
            </a>
          </li>
          <li class="transition-transform hover:scale-110">
            <a
              ref="codepenLink"
              data-link="Codepen"
              href="https://codepen.io/jake1155/pens/public"
              target="_blank"
              class="block w-8 h-8 panel_home_outerlink"
            >
              <img
                src="@img/codepen-logo-transparent.svg"
                alt="Codepen link"
              >
            </a>
          </li>
          <li class="transition-transform hover:scale-110">
            <a
              ref="cakeresumeLink"
              data-link="Cakeresume"
              href="https://www.cakeresume.com/e0610k"
              target="_blank"
              class="block w-8 h-8 panel_home_outerlink"
            >
              <img
                src="@img/cakeresume-logo-transparent.svg"
                alt="Cakeresume link"
              >
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSlidesStore } from '@/stores'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale-subtle.css'
import 'tippy.js/themes/light.css'

const store = useSlidesStore()
const { slidesMaskStatus } = storeToRefs(store)
gsap.registerPlugin(ScrollTrigger)

const panelHome = ref(null)
const panelHome_avatarMask = ref(null)
const panelHome_avatar = ref(null)
function gaspInit() {
  // Say Hi animation
  const panelHome_textAni = panelHome.value.querySelectorAll('.panel_home_text-ani')
  gsap.from(panelHome_textAni, {
    delay: 0.5,
    duration: 1,
    x: -1 * window.innerWidth,
    stagger: 0.2,
    ease: 'power3',
    scrollTrigger: {
      trigger: panelHome.value,
      toggleActions: 'play reset restart reset'
    }
  })

  // Avatar mask animation
  gsap.to(panelHome_avatarMask.value, {
    ease: 'power3',
    duration: 1.5,
    delay: 1.5,
    keyframes: {
      "0%": {
        scale: 0,
        boxShadow: 'inset 0 0 0 96px rgba(255,255,255)',
      },
      "50%": {
        scale: 1.25,
      },
      "60%": {
        boxShadow: 'inset 0 0 0 96px rgba(255,255,255)',
      },
      "90%": {
        opacity: 1,
      },
      "100%": {
        opacity: 0,
        boxShadow: 'inset 0 0 0 0px rgba(255,255,255)',
      }
    }
  })

  // Avatar animation
  gsap.to(panelHome_avatar.value, {
    ease: 'power3',
    duration: 1,
    delay: 1.75,
    keyframes: {
      "0%": {
        opacity: 1,
      },
      "100%": {
        opacity: 1,
      }
    }
  })

  // Outer link animation
  gsap.from('.panel_home_outerlink', {
    duration: 1,
    delay: 1.5,
    yPercent: -100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3',
    scrollTrigger: {
      trigger: panelHome.value,
      toggleActions: 'play pause restart reset',
    }
  })
}

const githubLink = ref(null)
const codepenLink = ref(null)
const cakeresumeLink = ref(null)
const linkText = ref('')
const contactEmail = ref(null)
const contactPhone = ref(null)
onMounted(() => {
  gaspInit()

  tippy([githubLink.value, codepenLink.value, cakeresumeLink.value], {
    onTrigger(instance, event) {
      linkText.value = event.target.dataset?.link
      instance.setContent(linkText.value)
    },
    offset: [0, 15],
    inertia: true,
    theme: 'light',
    placement: 'left',
    animation: 'scale-subtle',
  })

  tippy([contactEmail.value, contactPhone.value], {
    content: '點我複製',
    offset: [0, 40],
    inertia: true,
    theme: 'light',
    placement: 'right',
    animation: 'scale-subtle',
  })

  tippy([contactEmail.value, contactPhone.value], {
    async onTrigger(instance, event) {
      const clipboardObj = navigator.clipboard
      await navigator.clipboard.writeText(event.target.dataset?.info)
      instance.setContent('已複製')
      setTimeout(() => {
        instance.hide()
      }, 2000)
    },
    offset: [0, 15],
    inertia: true,
    theme: 'light',
    placement: 'right',
    animation: 'scale-subtle',
    trigger: 'click',
  })
})

</script>

<style lang="sass" scoped>
.wheel
  &::before
    content: ''
    width: 20px
    height: 28px
    border: 1px solid rgba(#fff, 0.75)
    border-radius: 8px
  &::after
    content: ''
    width: 2px
    height: 8px
    top: 4px
    background-color: #fff
    position: absolute

@keyframes gestureAni
  0%
    opacity: 0
    transform: translate(-1px, 24px)
  80%
    opacity: 1
  100%
    opacity: 0
    transform: translate(-1px, 0px)

.gesture
  animation-name: gestureAni
  animation-iteration-count: infinite
  animation-duration: 1s

// border: 1px solid #fff
//     border-radius: 50%
//     width: 100%
//     height: 150%

</style>