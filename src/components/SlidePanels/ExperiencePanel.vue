<template>
  <div
    ref="panelExperience"
    class="container flex relative flex-col justify-between pt-20 pr-2 pb-16 pl-4 mx-auto h-full md:px-12 md:pt-32 md:pb-24"
  >
    <div
      ref="panelExperienceWrapper"
      class="relative pt-16 pr-4 pb-24 pl-0 h-screen max-h-full md:px-8 panel_projects_wrapper scroll__content-softedge"
    >
      <ul class="flex relative flex-col gap-16 items-center mx-auto max-w-fit text-myMainBg translate-x-4 md:translate-x-8 experience__ulTimeline">
        <li class="py-6 px-4 w-full max-w-[284px] bg-white rounded-xl drop-shadow-2xl md:py-8 md:px-6 md:max-w-xl experience__timeline__ball experience__timeline--first">
          <div class="mb-4">
            <div class="flex flex-col justify-between mb-2 md:flex-row md:items-end">
              <h2 class="text-2xl font-semibold">
                Nodejs 助教
              </h2>
              <span class="text-sm tracking-wide -skew-x-6 md:text-base">2022/04 - 2022/06</span>
            </div>
            <h3 class="text-sm text-blue-900 md:text-base">
              波利馬資訊科技有限公司 ( 六角學院 )
            </h3>
          </div>
          <ul class="flex flex-col gap-2 pr-2 pl-6 mb-4 leading-snug list-disc list-outside text-justify md:gap-1 md:leading-normal">
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
        <li class="py-8 px-6 w-full max-w-[284px] bg-white rounded-xl drop-shadow-2xl md:max-w-xl experience__timeline__ball experience__timeline">
          <div class="mb-4">
            <div class="flex flex-col justify-between mb-2 md:flex-row md:items-end">
              <h2 class="text-2xl font-semibold">
                前端工程師
              </h2>
              <span class="text-sm tracking-wide -skew-x-6 md:text-base">2021/12 - 2022/03</span>
            </div>
            <h3 class="text-sm text-blue-900 md:text-base">
              瘋帽客科技股份有限公司
            </h3>
          </div>
          <ul class="flex flex-col gap-2 pr-2 pl-6 mb-4 leading-snug list-disc list-outside text-justify md:gap-1 md:leading-normal">
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
        <li class="py-8 px-6 w-full max-w-[284px] bg-white rounded-xl drop-shadow-2xl md:max-w-xl experience__timeline__ball experience__timeline">
          <div class="mb-4">
            <div class="flex flex-col justify-between mb-2 md:flex-row md:items-end">
              <h2 class="text-2xl font-semibold">
                火箭隊培訓營 8th 前端學員
              </h2>
              <span class="text-sm tracking-wide -skew-x-6 md:text-base">2021/08 - 2022/04</span>
            </div>
            <h3 class="text-sm text-blue-900 md:text-base">
              波利馬資訊科技有限公司 ( 六角學院 )
            </h3>
          </div>
          <ul class="flex flex-col gap-2 pr-2 pl-6 mb-4 leading-snug list-disc list-outside text-justify md:gap-1 md:leading-normal">
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
        <li class="py-8 px-6 w-full max-w-[284px] bg-white rounded-xl drop-shadow-2xl md:max-w-xl experience__timeline__ball experience__timeline">
          <div class="mb-4">
            <div class="flex flex-col justify-between mb-2 md:flex-row md:items-end">
              <h2 class="text-2xl font-semibold">
                美編人員 / 平面設計
              </h2>
              <span class="text-sm tracking-wide -skew-x-6 md:text-base">2018/01 - 2018/06</span>
            </div>
            <h3 class="text-sm text-blue-900 md:text-base">
              廷媛設計有限公司
            </h3>
          </div>
          <ul class="flex flex-col gap-2 pr-2 pl-6 mb-4 leading-snug list-disc list-outside text-justify md:gap-1 md:leading-normal">
            <li>
              <span>負責長榮大學文宣品平面設計及編排。</span>
            </li>
          </ul>
          <div class="px-1">
            <span class="text-sm"># Skills : Adobe Illustrator / Adobe Photoshop / Adobe InDesign</span>
          </div>
        </li>
        <li class="py-8 px-6 w-full max-w-[284px] bg-white rounded-xl drop-shadow-2xl md:max-w-xl experience__timeline__ball experience__timeline--last">
          <div class="mb-4">
            <div class="flex flex-col justify-between mb-2 md:flex-row md:items-end">
              <h2 class="text-2xl font-semibold">
                特別助理兼管家
              </h2>
              <span class="text-sm tracking-wide -skew-x-6 md:text-base">2017/03 - 2021/09</span>
            </div>
            <h3 class="text-sm text-blue-900 md:text-base">
              智富門資產管理顧問有限公司
            </h3>
          </div>
          <ul class="flex flex-col gap-2 pr-2 pl-6 mb-4 leading-snug list-disc list-outside text-justify md:gap-1 md:leading-normal">
            <li>
              <span>特別助理 : 與客戶介紹案源，協助主管行政文書後勤工作。</span>
            </li>
            <li>
              <span>管家 : 介紹居住環境設備、協助租約簽約、解決客戶生活居住上的問題以及進退房的居家環境清潔。</span>
            </li>
          </ul>
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