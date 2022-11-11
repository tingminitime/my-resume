<template>
  <div
    ref="panelSkills"
    class="flex relative flex-col justify-start pt-20 pr-4 pb-16 pl-6 mx-auto max-w-5xl h-full md:px-0 md:pt-32 md:pb-24"
  >
    <div
      ref="panelSkillsWrapper"
      class="relative px-0 h-screen max-h-full md:px-8 panel_skills_wrapper scroll__content-softedge"
    >
      <section class="min-h-[calc(100vh-128px-96px)] panel_skills_section">
        <div class="flex flex-col gap-12 py-12 max-h-[75vh] md:grid md:grid-cols-3 md:gap-x-4 md:gap-y-20 md:max-h-full">
          <div>
            <h3 class="inline-block mb-4 text-2xl font-semibold underline decoration-myLightGreen underline-offset-8 ">
              Vue.js
            </h3>
            <ul class="flex flex-col gap-4 py-2 tracking-wide">
              <li>．Vue 2 / Vue 3</li>
              <li>．使用 Vite 環境建置及編譯專案</li>
              <li>．Nuxt.js SSR 開發</li>
              <li>．Options API / Composition API</li>
              <li>．Components 元件管理</li>
              <li>．Vue Router 規劃 SPA 網站</li>
              <li>．Vuex 集中狀態管理</li>
            </ul>
          </div>
          <div>
            <h3 class="inline-block mb-4 text-2xl font-semibold underline decoration-myLightGreen underline-offset-8 ">
              Node.js
            </h3>
            <ul class="flex flex-col gap-4 py-2 tracking-wide">
              <li>．使用 Express 開發 RESTful API</li>
              <li>．使用 Mongoose 介接 MongoDB</li>
              <li>．實作 JWT 驗證</li>
              <li>．實作 Swagger API 文件</li>
            </ul>
          </div>
          <div>
            <h3 class="inline-block mb-4 text-2xl font-semibold underline decoration-myLightGreen underline-offset-8 ">
              JavaScript
            </h3>
            <ul class="flex flex-col gap-4 py-2 tracking-wide">
              <li>．JavaScript ES5 / ES6+</li>
              <li>．AJAX / JSON 串接第三方 API</li>
              <li>．CommonJS / ES Modules</li>
              <li>．ESLint Standard 規範開發</li>
            </ul>
          </div>
          <div>
            <h3 class="inline-block mb-4 text-2xl font-semibold underline decoration-myLightGreen underline-offset-8 ">
              Web Layout
            </h3>
            <ul class="flex flex-col gap-4 py-2 tracking-wide">
              <li>．熟悉 HTML5 / CSS3</li>
              <li>．熟悉 Sass 預處理器</li>
              <li>．RWD 響應式網頁規劃</li>
              <li>．使用 Tailwind CSS 於專案開發</li>
            </ul>
          </div>
          <div>
            <h3 class="inline-block mb-4 text-2xl font-semibold underline decoration-myLightGreen underline-offset-8 ">
              Version Control
            </h3>
            <ul class="flex flex-col gap-4 py-2 tracking-wide">
              <li>．Git Command Line</li>
              <li>．VSCode Source Control</li>
              <li>．GitHub / GitLab</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <!-- <div class="flex flex-col gap-4 py-12 max-h-[75vh] md:grid md:grid-cols-3 md:gap-x-4 md:gap-y-20 md:max-h-full">
      <div>
        <h3 class="inline-block mb-4 text-2xl font-semibold underline decoration-myLightGreen underline-offset-8 ">
          Vue.js
        </h3>
        <ul class="flex flex-col gap-4 py-2 tracking-wide">
          <li>．Vue 2 / Vue 3</li>
          <li>．使用 Vite 環境建置及編譯專案</li>
          <li>．Options API / Composition API</li>
          <li>．Components 元件管理</li>
          <li>．Vue Router 規劃 SPA 網站</li>
          <li>．Vuex 集中狀態管理</li>
        </ul>
      </div>
      <div>
        <h3 class="inline-block mb-4 text-2xl font-semibold underline decoration-myLightGreen underline-offset-8 ">
          Node.js
        </h3>
        <ul class="flex flex-col gap-4 py-2 tracking-wide">
          <li>．使用 Express 開發 RESTful API</li>
          <li>．使用 Mongoose 介接 MongoDB</li>
          <li>．實作 JWT 驗證</li>
          <li>．實作 Swagger API 文件</li>
        </ul>
      </div>
      <div>
        <h3 class="inline-block mb-4 text-2xl font-semibold underline decoration-myLightGreen underline-offset-8 ">
          JavaScript
        </h3>
        <ul class="flex flex-col gap-4 py-2 tracking-wide">
          <li>．JavaScript ES5 / ES6+</li>
          <li>．AJAX / JSON 串接第三方 API</li>
          <li>．CommonJS / ES Modules</li>
          <li>．ESLint Standard 規範開發</li>
        </ul>
      </div>
      <div>
        <h3 class="inline-block mb-4 text-2xl font-semibold underline decoration-myLightGreen underline-offset-8 ">
          Web Layout
        </h3>
        <ul class="flex flex-col gap-4 py-2 tracking-wide">
          <li>．熟悉 HTML5 / CSS3</li>
          <li>．熟悉 Sass 預處理器</li>
          <li>．RWD 響應式網頁規劃</li>
          <li>．使用 Tailwind CSS 於專案開發</li>
        </ul>
      </div>
      <div>
        <h3 class="inline-block mb-4 text-2xl font-semibold underline decoration-myLightGreen underline-offset-8 ">
          Version Control
        </h3>
        <ul class="flex flex-col gap-4 py-2 tracking-wide">
          <li>．Git Command Line</li>
          <li>．VSCode Source Control</li>
          <li>．GitHub</li>
        </ul>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Scrollbar from 'smooth-scrollbar'

gsap.registerPlugin(ScrollTrigger)

const panelSkillsWrapper = ref(null)

function gsapInit() {
  const contentScrollbar = Scrollbar.init(panelSkillsWrapper.value, {
    damping: 0.05
  })

  ScrollTrigger.scrollerProxy(panelSkillsWrapper.value, {
    scrollTop(value) {
      if (arguments.length) {
        contentScrollbar.scrollTop = value
      }
      return contentScrollbar.scrollTop
    }
  })
}

onMounted(() => {
  gsapInit()
})

</script>