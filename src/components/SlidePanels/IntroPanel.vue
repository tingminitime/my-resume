<template>
  <div
    ref="panelIntro"
    class="container flex relative flex-col justify-between px-6 pt-20 pb-16 mx-auto h-full md:px-12 md:pt-32 md:pb-24"
  >
    <div
      ref="panelIntroWrapper"
      class="relative pt-16 pr-4 pb-32 pl-0 mx-auto h-screen max-h-full md:px-8 panel_projects_wrapper scroll__content-softedge"
    >
      <div class="flex flex-col items-start mb-8 md:mb-12">
        <div class="mx-4 mb-6 w-12 h-12">
          <img
            src="@img/icon-comma.svg"
            alt="comma icon"
          >
        </div>
        <h2 class="px-2 text-2xl tracking-wider leading-relaxed text-myLightGreen -skew-x-6 md:px-0 md:text-3xl md:leading-normal md:text-right md:-skew-x-12">
          <span class="hidden md:inline-block">「 剛開始只是覺得好玩，卻愈玩愈認真 」</span>
          <span class="inline-block md:hidden">剛開始只是覺得好玩，<br>卻愈玩愈認真</span>
        </h2>
      </div>
      <div class="flex flex-col gap-4 px-0 mb-16 max-w-xl md:px-8 md:max-w-4xl">
        <p class="mb-8 text-lg font-light tracking-[0.075rem] leading-8">
          因緣際會下從設計領域接觸到前端技能，覺得能夠寫出與滑鼠、鍵盤互動的網頁很好玩，逐漸對前端領域產生好奇心而開始尋找前端相關的課程學習。一開始雖然被龐大的知識量嚇到不知所措，但同時也認為這是才值得我挑戰的領域，也多虧平常學習有寫技術筆記的習慣，以及憑藉自己對新技術的好奇心，可以讓我有持續自主學習的動力。
        </p>
        <div class="overflow-hidden max-w-lg rounded-lg">
          <div class="aspect-w-1 aspect-h-1">
            <img
              class="object-cover object-top"
              src="@img/intro-4.jpg"
              alt=""
            >
          </div>
        </div>
        <p class="mb-8 text-lg font-light tracking-[0.075rem] leading-8">
          初期自學一段時間後，為了打好前端開發基礎，在 2020 年底下定決心報名心目中嚮往的培訓單位 – <i class="font-bold">火箭隊軟體工程師培訓營</i>，正式展開我的前端工程師轉職之路。在培訓營遇到許多擁有共同目標和語言的夥伴，期間學習了很多自己未曾接觸過的技術以及實際加入專案的開發，但最重要的是有一群志同道合的夥伴相互扶持，在大家的協作下培養團隊合作精神。
        </p>
        <div class="overflow-hidden max-w-lg rounded-lg">
          <div class="aspect-w-1 aspect-h-1">
            <img
              class="object-cover object-top"
              src="@img/intro-1.jpg"
              alt=""
            >
          </div>
        </div>
        <p class="text-lg font-light tracking-[0.075rem] leading-8">
          2022 / 04 / 15 專題發表完培訓也正式結束，但每週依然會舉辦線上讀書會，我也常常將自己所學的做成技術筆記在讀書會上分享，藉由分享讓自己獲得更多、成長愈快。
        </p>
        <p class="text-lg font-light tracking-[0.075rem] leading-8">
          在軟體工程師領域經歷尚淺，但擁有好奇心與求知慾這兩把利器，使我有源源不絕的自主學習動力，期許自己在漫長的職涯中為身處的團隊盡一份力，達成團隊目標。
        </p>
      </div>
      <h3 class="py-2 font-semibold tracking-wider">
        我的前端學習筆記
      </h3>
      <ul class="flex flex-col gap-6 py-2 text-sm list-disc list-inside md:gap-3 md:text-base">
        <li>
          <a
            href="https://hackmd.io/@wheat0120/ByvW0TqUF"
            target="_blank"
            class="inline-block text-white hover:text-myLightGreen"
          >
            BMI Kata with VSCode 快捷鍵秘笈
          </a>
        </li>
        <li>
          <a
            href="https://hackmd.io/@wheat0120/ryegUgEBK"
            target="_blank"
            class="inline-block text-white hover:text-myLightGreen"
          >
            JavaScript - 傳值、傳址、傳共享
          </a>
        </li>
        <li>
          <a
            href="https://timinitime.notion.site/Virtual-DOM-f9b1ada21087491bbe99de288e517dd1"
            target="_blank"
            class="inline-block text-white hover:text-myLightGreen"
          >
            Virtual DOM | 框架基礎探索
          </a>
        </li>
        <li>
          <a
            href="https://timinitime.notion.site/Vite-Vue3-Tailwind-CSS-e7a428bec0e740f587dc803db7106e46"
            target="_blank"
            class="inline-block text-white hover:text-myLightGreen"
          >
            Vite Vue3 Tailwind CSS 環境建置
          </a>
        </li>
        <li>
          <a
            href="https://hackmd.io/@wheat0120/javascript-this"
            target="_blank"
            class="inline-block text-white hover:text-myLightGreen"
          >
            JavaScript - this
          </a>
        </li>
        <li>
          <a
            href="https://hackmd.io/@wheat0120/javascript-eventloop"
            target="_blank"
            class="inline-block text-white hover:text-myLightGreen"
          >
            JavaScript - Event Loop
          </a>
        </li>
        <li>
          <a
            href="https://hackmd.io/@wheat0120/javascript-memoization"
            target="_blank"
            class="inline-block text-white hover:text-myLightGreen"
          >
            JavaScript - Memoization 記憶函式
          </a>
        </li>
        <li>
          <a
            href="https://hackmd.io/@wheat0120/javascript-promise"
            target="_blank"
            class="inline-block text-white hover:text-myLightGreen"
          >
            JavaScript - Promise
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="py-12 mx-auto">
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Scrollbar from 'smooth-scrollbar'

gsap.registerPlugin(ScrollTrigger)

const panelIntro = ref(null)
const panelIntroWrapper = ref(null)

function gsapInit() {
  const contentScrollbar = Scrollbar.init(panelIntroWrapper.value, {
    damping: 0.05,
    plugins: {
      disableScroll: {
        direction: 'x',
      }
    }
  })

  ScrollTrigger.scrollerProxy(panelIntroWrapper.value, {
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