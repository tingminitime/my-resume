<template>
  <div
    ref="panelExperience"
    class="container flex relative flex-col justify-between px-8 pt-32 pb-24 mx-auto h-full md:px-12"
  >
    <div
      ref="panelExperienceWrapper"
      class="relative px-8 pt-16 pb-24 h-screen max-h-full panel_projects_wrapper scroll__content-softedge"
    >
      <ul class="flex before:absolute relative before:top-1/2 before:-left-8 before:z-10 flex-col gap-16 items-center mx-auto before:w-[2px] max-w-fit before:h-[calc(100%+128px)] text-myMainBg before:bg-myLightGreen/50 translate-x-8 before:-translate-y-1/2">
        <li class="py-8 px-6 w-full max-w-xl bg-white rounded-xl drop-shadow-2xl experience__timeline__ball experience__timeline--first">
          <div class="mb-4">
            <div class="flex justify-between items-end mb-2">
              <h2 class="text-2xl font-semibold">
                Nodejs 助教
              </h2>
              <span class="tracking-wide -skew-x-6">2022/04 - 2022/06</span>
            </div>
            <h3 class="text-blue-900">
              波利馬資訊科技有限公司 ( 六角學院 )
            </h3>
          </div>
          <ul class="flex flex-col gap-1 pr-2 pl-6 mb-4 list-disc list-outside">
            <li>
              <span>協助學員繳交的作業進行 Code Review，並給予鼓勵及修改建議。</span>
            </li>
            <li>
              <span>針對學員提出的問題進行回覆。</span>
            </li>
          </ul>
          <div class="px-1">
            <span class="text-sm"># Skills : JavaScript / Nodejs / Express / MongoDB / Mongoose / JWT</span>
          </div>
        </li>
        <li class="py-8 px-6 w-full max-w-xl bg-white rounded-xl drop-shadow-2xl experience__timeline__ball experience__timeline">
          <div class="mb-4">
            <div class="flex justify-between items-end mb-2">
              <h2 class="text-2xl font-semibold">
                前端工程師
              </h2>
              <span class="tracking-wide -skew-x-6">2021/12 - 2022/03</span>
            </div>
            <h3 class="text-blue-900">
              瘋帽客科技股份有限公司
            </h3>
          </div>
          <ul class="flex flex-col gap-1 pr-2 pl-6 mb-4 list-disc list-outside">
            <li>
              <span>團隊協作執行系統擴充專案</span>
            </li>
            <li>
              <span>分析專案架構進行功能擴充開發</span>
            </li>
            <li>
              <span>提供技術解決方案文件</span>
            </li>
            <li>
              <span>配合後端 API 開發進度規劃串接期限及交付測試</span>
            </li>
          </ul>
          <div class="px-1">
            <span class="text-sm"># Skills : Vue 2 / Bootstrap 3 / ESLint / axios / FullCalendar / Moment.js / Youtube Iframe API</span>
          </div>
        </li>
        <li class="py-8 px-6 w-full max-w-xl bg-white rounded-xl drop-shadow-2xl experience__timeline__ball experience__timeline--last">
          <div class="mb-4">
            <div class="flex justify-between items-end mb-2">
              <h2 class="text-2xl font-semibold">
                火箭隊培訓營 8th 前端學員
              </h2>
              <span class="tracking-wide -skew-x-6">2021/08 - 2022/04</span>
            </div>
            <h3 class="text-blue-900">
              波利馬資訊科技有限公司 ( 六角學院 )
            </h3>
          </div>
          <ul class="flex flex-col gap-1 pr-2 pl-6 mb-4 list-disc list-outside">
            <li>
              <span>初期 : 網頁切版與響應式網站規劃，培養自學能力。</span>
            </li>
            <li>
              <span>中期 : RESTful API 介接練習、參與 THE F2E 前端修煉精神時光屋比賽與切版志工。</span>
            </li>
            <li>
              <span>後期 : 參與系統擴充案開發、與設計、後端團隊合作完成專題開發與發表。</span>
            </li>
            <li>
              <span>定期舉辦讀書會與前後端技術分享研討</span>
            </li>
          </ul>
          <div class="px-1">
            <span class="text-sm"># Skills : HTML / CSS / Sass / JavaScript / Vue / Git</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Scrollbar from 'smooth-scrollbar'

gsap.registerPlugin(ScrollTrigger)

const panelExperience = ref(null)
const panelExperienceWrapper = ref(null)

function gsapInit() {
  const contentScrollbar = Scrollbar.init(panelExperienceWrapper.value, {
    damping: 0.05
  })

  ScrollTrigger.scrollerProxy(panelExperienceWrapper.value, {
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