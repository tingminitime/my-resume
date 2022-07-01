<template>
  <div class="relative w-full h-full">
    <!-- Mask -->
    <div
      v-show="openMobileMenu"
      class="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm"
    >
    </div>
    <!-- Mobile menu button -->
    <div class="block fixed top-0 left-0 z-50 py-4 px-6 md:hidden">
      <button
        type="button"
        class="block"
        @click="toggleMenu"
      >
        <span
          v-show="!openMobileMenu"
          class="text-3xl align-middle material-symbols-outlined"
        >
          menu
        </span>
        <span
          v-show="openMobileMenu"
          class="text-3xl align-middle material-symbols-outlined"
        >
          close
        </span>
      </button>
    </div>
    <!-- Mobile menu -->
    <div
      class="block fixed z-40 w-3/4 h-screen bg-black/90 transition-transform duration-200 md:hidden"
      :class="[openMobileMenu ? 'translate-x-0' : '-translate-x-full']"
    >
      <ul class="flex flex-col gap-12 justify-between pt-24 pl-6 md:hidden md:gap-12">
        <li>
          <button
            type="button"
            class="block transition-all"
            :class="[currentNavId === panelHome ? 'text-white' : 'text-white/50']"
            @click="navHandler(panelHome)"
          >
            Home
          </button>
        </li>
        <li>
          <button
            type="button"
            class="block transition-all"
            :class="[currentNavId === panelIntro ? 'text-white' : 'text-white/50']"
            @click="navHandler(panelIntro)"
          >
            Introduction
          </button>
        </li>
        <li>
          <button
            type="button"
            class="block transition-all"
            :class="[currentNavId === panelSkills ? 'text-white' : 'text-white/50']"
            @click="navHandler(panelSkills)"
          >
            Skills
          </button>
        </li>
        <li>
          <button
            type="button"
            class="block transition-all"
            :class="[currentNavId === panelProjects ? 'text-white' : 'text-white/50']"
            @click="navHandler(panelProjects)"
          >
            Projects
          </button>
        </li>
        <li>
          <button
            type="button"
            class="block transition-all"
            :class="[currentNavId === panelExperience ? 'text-white' : 'text-white/50']"
            @click="navHandler(panelExperience)"
          >
            Experience
          </button>
        </li>
      </ul>
    </div>
    <!-- Desktop menu -->
    <div class="fixed top-12 left-1/2 z-40 -translate-x-1/2">
      <ul class="hidden gap-8 justify-between md:flex md:gap-12">
        <li>
          <button
            :data-navbar="panelHome"
            type="button"
            class="block transition-all"
            :class="[currentNavId === panelHome ? 'text-white' : 'text-white/50']"
            @click="navHandler(panelHome)"
          >
            Home
          </button>
        </li>
        <li>
          <button
            :data-navbar="panelIntro"
            type="button"
            class="block transition-all"
            :class="[currentNavId === panelIntro ? 'text-white' : 'text-white/50']"
            @click="navHandler(panelIntro)"
          >
            Introduction
          </button>
        </li>
        <li>
          <button
            :data-navbar="panelSkills"
            type="button"
            class="block transition-all"
            :class="[currentNavId === panelSkills ? 'text-white' : 'text-white/50']"
            @click="navHandler(panelSkills)"
          >
            Skills
          </button>
        </li>
        <li>
          <button
            :data-navbar="panelProjects"
            type="button"
            class="block transition-all"
            :class="[currentNavId === panelProjects ? 'text-white' : 'text-white/50']"
            @click="navHandler(panelProjects)"
          >
            Projects
          </button>
        </li>
        <li>
          <button
            :data-navbar="panelExperience"
            type="button"
            class="block transition-all"
            :class="[currentNavId === panelExperience ? 'text-white' : 'text-white/50']"
            @click="navHandler(panelExperience)"
          >
            Experience
          </button>
        </li>
      </ul>
      <!-- Desktop menu bar -->
      <div
        ref="navSelectBar"
        class="hidden absolute -bottom-1 left-0 z-50 h-[2px] bg-white transition-all duration-300 md:block"
        :class="[ navSelectBarReady ? 'opacity-100' : 'opacity-0' ]"
      ></div>
    </div>
    <transition
      appear
      @enter="enterHandler"
    >
      <div
        ref="slideContainer"
        class="overflow-x-hidden slides_container"
      >
        <section
          class="flex relative z-20 flex-col flex-wrap w-screen h-screen md:flex-row md:flex-nowrap horizon_section"
        >
          <div
            id="panel_home"
            class="relative horizon__panel panel_home"
          >
            <HomePanel></HomePanel>
          </div>
          <div
            id="panel_intro"
            class="relative horizon__panel panel_intro"
          >
            <IntroPanel></IntroPanel>
          </div>
          <div
            id="panel_skills"
            class="relative horizon__panel panel_about"
          >
            <SkillsPanel></SkillsPanel>
          </div>
          <div
            id="panel_projects"
            class="relative horizon__panel panel_projects"
          >
            <ProjectsPanel></ProjectsPanel>
          </div>
          <div
            id="panel_experience"
            class="relative horizon__panel panel_experience"
          >
            <ExperiencePanel></ExperiencePanel>
          </div>
        </section>
      </div>
    </transition>
    <div class="fixed bottom-6 left-1/2 z-20 w-3/4 max-w-lg h-1 bg-white/25 -translate-x-1/2 horizon_progress">
      <div class="absolute top-0 left-0 z-30 w-full h-1 bg-white horizon_progress--percent">
      </div>
    </div>
    <!-- Auxiliay line -->
    <!-- <div class="fixed top-0 left-[calc(50vw-1px)] w-px h-screen bg-yellow-300">
    </div> -->
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HomePanel from '@/components/SlidePanels/HomePanel.vue'
import IntroPanel from '@/components/SlidePanels/IntroPanel.vue'
import SkillsPanel from '@/components/SlidePanels/SkillsPanel.vue'
import ProjectsPanel from '@/components/SlidePanels/ProjectsPanel.vue'
import ExperiencePanel from '@/components/SlidePanels/ExperiencePanel.vue'

gsap.registerPlugin(ScrollTrigger)

// Slide nav
const panelHome = ref('panel_home')
const panelIntro = ref('panel_intro')
const panelSkills = ref('panel_skills')
const panelProjects = ref('panel_projects')
const panelExperience = ref('panel_experience')

const slideContainer = ref(null)
const currentNav = ref(null)
const currentNavId = ref('panel_home')
const accPanelsWidth = ref(0)
function gaspInit(el) {
  // horizontal scroll
  const horizonSection = gsap.utils.toArray('.horizon_section')
  const horizontalPanels = gsap.utils.toArray('.horizon__panel')
  horizontalPanels.forEach((panel) => {
    accPanelsWidth.value += panel.offsetWidth
  })
  horizonSection.forEach(section => {
    const horizontalPanels = Array.from(section.querySelectorAll('.horizon__panel'))

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

  // Trigger current panel
  horizontalPanels.forEach(panel => {
    ScrollTrigger.create({
      trigger: panel,
      start: () => 'top top-=' + (panel.offsetLeft - window.innerWidth / 2),
      end: () => '+=' + panel.offsetWidth,
      toggleClass: 'active',
      onEnter(self) {
        currentNav.value = self.trigger
        currentNavId.value = self.trigger.id
        setTimeout(() => {
          navBarHandler(currentNavId.value)
        }, 200)
      },
      onEnterBack(self) {
        currentNav.value = self.trigger
        currentNavId.value = self.trigger.id
        setTimeout(() => {
          navBarHandler(currentNavId.value)
        }, 200)
      },
      // markers: true,
    })
  })

  // progress
  gsap.from('.horizon_progress--percent', {
    scrollTrigger: {
      trigger: slideContainer.value,
      scrub: 1,
      start: 'top top',
      end: () => '+=' + (slideContainer.value.scrollHeight - window.innerHeight)
    },
    scaleX: 0,
    transformOrigin: 'left center',
    ease: 'none'
  })
}

const enterHandler = (el) => {
  gaspInit(el)
}

// --- Menu controller ---
const navSelectBar = ref(null)
const navSelectBarReady = ref(false)
const openMobileMenu = ref(false)

// Click nav button and scroll to target
function navHandler(domId) {
  const target = slideContainer.value.querySelector(`#${domId}`)
  window.scrollTo({
    top: target.offsetLeft + 1,
  })
}

// Click nav button
function navBarHandler(currentNavId) {
  const targetNav = document.querySelector(`[data-navbar=${currentNavId}]`)
  navSelectBar.value.style.width = targetNav.getBoundingClientRect().width + 'px'
  navSelectBar.value.style.left = targetNav.offsetLeft + 'px'
  navSelectBarReady.value = true
  openMobileMenu.value = false
}

// Click mobile menu button
function toggleMenu() {
  openMobileMenu.value = !openMobileMenu.value
}
// --- Menu controller ---


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

</script>

<style scoped>
</style>