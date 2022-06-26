<template>
  <!-- w-[calc(100vh-64px-24px)] h-[calc(100vw-48px)] -->
  <div class="h-[calc(100vh-48px)] border border-white">
    <TopHeader></TopHeader>
    <main class="overflow-scroll w-[calc(100vh)] h-[calc(100vw-50px)] origin-top-left horizontal__scroll-outer">
      <section class="flex flex-nowrap w-[calc(300vw-64px)] h-[calc(100vh-64px-50px)] bg-slate-300 origin-top-left horizontal__scroll-inner">
        <div class="w-full bg-pink-400">
          123456
        </div>
        <div class="w-full bg-blue-400">
          123456
        </div>
        <div class="w-full bg-yellow-400">
          123456
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import TopHeader from '@/components/TopHeader.vue';

</script>