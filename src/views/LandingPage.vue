<template>
  <!-- w-[calc(100vh-64px-24px)] h-[calc(100vw-48px)] -->
  <div class="flex justify-center items-center h-[calc(100vh-48px)] border border-white">
    <router-link
      :to="{ name: 'MyStory' }"
      class="text-lg tracking-wider"
    >
      <i>Start</i>
    </router-link>
  </div>
</template>

<script setup>
// import TopHeader from '@/components/TopHeader.vue';

</script>