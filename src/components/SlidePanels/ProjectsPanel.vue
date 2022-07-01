<template>
  <div
    ref="panelProjects"
    class="container flex relative flex-col justify-start pt-20 pr-2 pb-16 pl-6 mx-auto h-full md:px-12 md:pt-32 md:pb-24"
  >
    <div
      ref="panelProjectsWrapper"
      class="relative py-16 pr-4 pl-0 h-screen max-h-full md:px-8 panel_projects_wrapper scroll__content-softedge"
    >
      <section class="pb-24 mb-12 min-h-[calc(100vh-128px-96px)] border-b-8 border-white/25 md:mb-20 panel_projects_section">
        <div class="flex flex-col mb-6 md:grid md:grid-cols-2 md:gap-8 md:mb-12">
          <div class="group overflow-hidden relative top-0 left-0 w-full max-w-xl rounded-2xl">
            <a
              href="https://kirukiru.rocket-coding.com/index.html#/home"
              target="_blank"
              class="block transition-transform duration-300 group-hover:scale-110"
            >
              <div class="aspect-w-4 aspect-h-3">
                <img
                  src="@img/kirukiru_homepage.jpg"
                  alt="kirukiru image"
                  class="object-cover w-full"
                >
              </div>
            </a>
          </div>
          <div class="flex flex-col justify-between py-4">
            <div>
              <h2 class="py-2 text-4xl font-bold tracking-wider md:text-5xl">
                切切 KiruKiru
              </h2>
              <h3 class="px-1 mb-4 text-xl tracking-wider">
                你的生活步驟寫作平台
              </h3>
              <p class="py-4 text-base font-light tracking-wider border-t border-white/25">
                專注在切分步驟的文章分享平台，步驟化你的知識技能，讓讀者更容易達成任務。
              </p>
            </div>
            <div class="">
              <div class="flex flex-col gap-1 mb-4">
                <a
                  ref="panelProjects_kiruLink"
                  href="https://kirukiru.rocket-coding.com/index.html#/home"
                  target="_blank"
                  class="inline-block py-1 w-fit"
                  data-link="點我前往"
                  data-tippy-placement="right"
                ><span class="mr-2 align-middle material-symbols-outlined">
                  link
                </span><span class="tracking-widest">作品連結</span></a>
                <a
                  ref="panelProjects_kiruGithub"
                  href="https://github.com/tingminitime"
                  target="_blank"
                  class="flex gap-2 items-center py-1 w-fit"
                  data-link="點我前往"
                  data-tippy-placement="right"
                ><img
                  class="w-6"
                  src="@img/github-logo-white.svg"
                  alt="github icon"
                ><span class="tracking-widest">GitHub</span></a>
              </div>
              <div class="flex gap-4 items-center text-sm font-light tracking-wider">
                <a
                  href="https://rocketcamp.kktix.cc/events/5189db66-copy-4"
                  target="_blank"
                  class="text-white/75 hover:text-white"
                ># 火箭隊培訓營專題作品</a>
              </div>
            </div>
          </div>
        </div>
        <div class="tracking-wider">
          <div class="mb-8">
            <h3 class="inline-block py-1 px-3 mb-4 text-lg font-semibold text-myMainBg bg-white rounded-lg">
              作品簡介
            </h3>
            <p class="font-light">
              與一位設計、一位後端組隊，從無到有共同執行專題開發與最終成果的發表。
            </p>
          </div>
          <div class="mb-8">
            <h3 class="inline-block py-1 px-3 mb-4 text-lg font-semibold text-myMainBg bg-white rounded-lg">
              開發時程
            </h3>
            <p>
              2022 / 02 / 23 ~ 2022 / 04 / 15
            </p>
          </div>
          <div class="mb-8">
            <h3 class="inline-block py-1 px-3 mb-4 text-lg font-semibold text-myMainBg bg-white rounded-lg">
              開發困境
            </h3>
            <ul class="flex flex-col gap-3 font-light list-decimal list-inside">
              <li>
                <p class="inline-block font-semibold">
                  專案環境初期建置
                </p>
                <p class="py-1 px-6 leading-7">
                  在初期前端環境建置上，遇到最大的問題是對專案架構還不是很熟悉，以及 ESLint、Prettier、VSCode settings 的衝突。所以額外花了蠻多時間整理成一篇 <a
                    href="https://timinitime.notion.site/Vite-Vue3-Tailwind-CSS-e7a428bec0e740f587dc803db7106e46"
                    target="_blank"
                    class="hover:text-myLightGreen underline underline-offset-4"
                  >Notion 筆記</a>，釐清整個專案環境設定的流程。
                </p>
              </li>
              <li>
                <p class="inline-block font-semibold">
                  Vue Router 配置
                </p>
                <p class="py-1 px-6 leading-7">
                  因為前期開發階段沒有很適當的規劃好路由表，時常拿捏不準到底頁面要使用 Views 元件還是 Components 元件去切分畫面功能，導致後面時常需要更改路由的設定，浪費許多時間。
                </p>
              </li>
              <li>
                <p class="inline-block font-semibold">
                  什麼都想要
                </p>
                <p class="py-1 px-6 leading-7">
                  在開發過程中，總覺得有很多地方都要做到完善的呈現，導致花費很多時間精力在很局部的小地方，例如 : 動畫、頁面轉場過渡特效等，覺得自己開發時程規劃的並不是很恰當。
                </p>
              </li>
            </ul>
          </div>
          <p class="text-sm text-white/75">
            # Skills : Vite / Vue 3 / Vue Router / Vuex / Tailwind CSS / ESLint / headless UI / Element Plus / Vee-validate / axios / tiptap / Swiper
          </p>
        </div>
      </section>
      <section class="pb-24 mb-12 min-h-[calc(100vh-128px-96px)] border-b-8 border-white/25 md:mb-20 panel_projects_section">
        <div class="flex flex-col mb-6 md:grid md:grid-cols-2 md:gap-8 md:mb-12">
          <div class="flex flex-col order-2 justify-between py-4 md:order-1">
            <div class="md:text-right">
              <h2 class="py-2 text-4xl font-bold tracking-wider md:text-5xl">
                探索。福爾摩沙
              </h2>
              <h3 class="px-2 mb-4 text-xl tracking-wider">
                台灣旅遊資訊網
              </h3>
              <p class="py-4 text-base font-light tracking-wider border-t border-white/25">
                搜尋台灣景點、美食、住宿、觀光資訊。
              </p>
            </div>
            <div class="">
              <div class="flex flex-col gap-1 mb-4 md:items-end">
                <a
                  ref="panelProjects_formosaLink"
                  href="https://tingminitime.github.io/travel-formosa"
                  target="_blank"
                  class="inline-block py-1 w-fit"
                  data-link="點我前往"
                  data-tippy-placement="left"
                ><span class="mr-2 align-middle material-symbols-outlined">
                  link
                </span><span class="tracking-widest">作品連結</span></a>
                <a
                  ref="panelProjects_formosaGithub"
                  href="https://github.com/tingminitime/travel-formosa"
                  target="_blank"
                  class="flex gap-2 items-center py-1 w-fit"
                  data-link="點我前往"
                  data-tippy-placement="left"
                ><img
                  class="w-6"
                  src="@img/github-logo-white.svg"
                  alt="github icon"
                ><span class="tracking-widest">GitHub</span></a>
              </div>
              <div class="flex gap-4 items-center text-sm font-light tracking-wider md:justify-end">
                <a
                  href="https://2021.thef2e.com/"
                  target="_blank"
                  class="text-white/75 hover:text-white"
                ># 2021 THE F2E 3rd</a>
                <a
                  href="https://2021.thef2e.com/works"
                  target="_blank"
                  class="text-white/75 hover:text-white"
                ># Week1 作品</a>
              </div>
            </div>
          </div>
          <div class="group overflow-hidden relative top-0 left-0 order-1 w-full max-w-xl rounded-2xl md:order-2">
            <a
              href="https://kirukiru.rocket-coding.com/index.html#/home"
              target="_blank"
              class="block transition-transform duration-300 group-hover:scale-110"
            >
              <div class="aspect-w-4 aspect-h-3">
                <img
                  src="@img/f2e_week1.png"
                  alt="F2E week1 image"
                  class="object-cover object-[20%_50%] w-full"
                >
              </div>
            </a>
          </div>
        </div>
        <div class="tracking-wider">
          <div class="mb-8">
            <h3 class="inline-block py-1 px-3 mb-4 text-lg font-semibold text-myMainBg bg-white rounded-lg">
              作品簡介
            </h3>
            <p class="font-light leading-7">
              THE F2E 3rd Week1 - 台灣旅遊景點導覽<br>
              串接交通部 PTX 服務，以及使用 Leaflet 地圖框架搭配 Mapbox 圖資服務，提供景點、美食、住宿、觀光位置。
            </p>
          </div>
          <div class="mb-8">
            <h3 class="inline-block py-1 px-3 mb-5 text-lg font-semibold text-myMainBg bg-white rounded-lg">
              專案時程
            </h3>
            <p>
              2021 / 11 / 15 ~ 2021 / 11 / 26
            </p>
          </div>
          <div class="mb-8">
            <h3 class="inline-block py-1 px-3 mb-4 text-lg font-semibold text-myMainBg bg-white rounded-lg">
              開發困境
            </h3>
            <ul class="flex flex-col gap-3 font-light list-decimal list-inside">
              <li>
                <p class="inline-block font-semibold">
                  原生 history API 開發路由
                </p>
                <p class="py-1 px-6 leading-7">
                  當時對專案架構的檔案拆分還不是很熟悉，加上使用原生 history API 搭配 hash 模擬 SPA 這點比較不熟悉，導致路由狀態管理的凌亂。
                </p>
              </li>
              <li>
                <p class="inline-block font-semibold">
                  分頁功能
                </p>
                <p class="py-1 px-6 leading-7">
                  由於沒有使用分頁相關套件，花了很多時間在研究手寫分頁功能上。
                </p>
              </li>
            </ul>
          </div>
          <p class="text-sm text-white/75">
            # Skills : HTML / CSS / Sass / JavaScript / ESM / axios / Swiper / Leaflet / Mapbox
          </p>
        </div>
      </section>
      <section class="pb-24 mb-12 min-h-[calc(100vh-128px-96px)] md:mb-20 panel_projects_section">
        <div class="flex flex-col mb-6 md:grid md:grid-cols-2 md:gap-8 md:mb-12">
          <div class="group overflow-hidden relative top-0 left-0 w-full max-w-xl rounded-2xl">
            <a
              href="https://tingminitime.github.io/KaohsiungBusRoute/"
              target="_blank"
              class="block transition-transform duration-300 group-hover:scale-110"
            >
              <div class="aspect-w-4 aspect-h-3">
                <img
                  src="@img/kaohsiung_bus.png"
                  alt="kirukiru image"
                  class="object-cover w-full"
                >
              </div>
            </a>
          </div>
          <div class="flex flex-col justify-between py-4">
            <div>
              <h2 class="py-2 mb-4 text-4xl font-bold tracking-wider md:text-5xl">
                高雄即時公車動態
              </h2>
              <p class="py-4 text-base font-light tracking-wider border-t border-white/25">
                提供高雄公車即時動態資訊。
              </p>
            </div>
            <div class="">
              <div class="flex flex-col gap-1 mb-4">
                <a
                  ref="panelProjects_busLink"
                  href="https://tingminitime.github.io/KaohsiungBusRoute/"
                  target="_blank"
                  class="inline-block py-1 w-fit"
                  data-link="點我前往"
                  data-tippy-placement="right"
                ><span class="mr-2 align-middle material-symbols-outlined">
                  link
                </span><span class="tracking-widest">作品連結</span></a>
                <a
                  ref="panelProjects_busGithub"
                  href="https://github.com/tingminitime/KaohsiungBusRoute"
                  target="_blank"
                  class="flex gap-2 items-center py-1 w-fit"
                  data-link="點我前往"
                  data-tippy-placement="right"
                ><img
                  class="w-6"
                  src="@img/github-logo-white.svg"
                  alt="github icon"
                ><span class="tracking-widest">GitHub</span></a>
              </div>
              <div class="flex gap-4 items-center text-sm font-light tracking-wider">
                <a
                  href="https://github.com/tingminitime/KaohsiungBusRoute"
                  target="_blank"
                  class="text-white/75 hover:text-white"
                ># 練習作品</a>
              </div>
            </div>
          </div>
        </div>
        <div class="tracking-wider">
          <div class="mb-8">
            <h3 class="inline-block py-1 px-3 mb-4 text-lg font-semibold text-myMainBg bg-white rounded-lg">
              作品簡介
            </h3>
            <p class="font-light">
              串接交通部 TDX 服務，提供高雄公車即時動態資訊。
            </p>
          </div>
          <div class="mb-8">
            <h3 class="inline-block py-1 px-3 mb-4 text-lg font-semibold text-myMainBg bg-white rounded-lg">
              開發時程
            </h3>
            <p>
              2021 / 11 / 03 ~ 2021 / 11 / 06
            </p>
          </div>
          <p class="text-sm text-white/75">
            # Skills : HTML / CSS / Sass / JavaScript / ESM / axios / Swiper / Leaflet / Mapbox
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Scrollbar from 'smooth-scrollbar'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale-subtle.css'
import 'tippy.js/themes/light.css'

gsap.registerPlugin(ScrollTrigger)

const panelProjects = ref(null)
const panelProjectsWrapper = ref(null)

function gsapInit() {
  const contentScrollbar = Scrollbar.init(panelProjectsWrapper.value, {
    damping: 0.05
  })

  ScrollTrigger.scrollerProxy(panelProjectsWrapper.value, {
    scrollTop(value) {
      if (arguments.length) {
        contentScrollbar.scrollTop = value
      }
      return contentScrollbar.scrollTop
    }
  })
}

const panelProjects_kiruLink = ref(null)
const panelProjects_kiruGithub = ref(null)
const panelProjects_formosaLink = ref(null)
const panelProjects_formosaGithub = ref(null)
const panelProjects_busLink = ref(null)
const panelProjects_busGithub = ref(null)

onMounted(() => {
  gsapInit()

  tippy([
    panelProjects_kiruLink.value,
    panelProjects_kiruGithub.value,
    panelProjects_formosaLink.value,
    panelProjects_formosaGithub.value,
    panelProjects_busLink.value,
    panelProjects_busGithub.value,
  ], {
    onTrigger(instance, event) {
      instance.setContent(event.target.dataset?.link)
      instance.setProps({
        placement: event.target.dataset?.['tippy-placement']
      })
    },
    offset: [0, 15],
    inertia: true,
    theme: 'light',
    placement: 'right',
    animation: 'scale-subtle',
  })
})

</script>

<style lang="sass" scoped>
.panel_projects_wrapper
  &::-webkit-scrollbar
    width: 8px
  &::-webkit-scrollbar-track
    opacity: 0
    border-radius: 8px
  &::-webkit-scrollbar-thumb
    background-color: rgba(#fff, 0.5)
    border-radius: 8px
</style>