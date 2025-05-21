<template>
  <div>
    <h1 class="text-4xl pb-2">{{ contents.basics.name }}</h1>
    <h2 class="text-2xl pb-4">About me</h2>
    <p class="italic font-light pl-1">{{ contents.basics.summary }}</p>
    <h2 id='employment' class="text-2xl">Employment</h2>
    <div v-for="work in contents.work">
       <p>{{ work.name }} </p>
    </div>

  </div>
</template>

<script setup lang="ts">
  import { resume } from '@petefromglasgow/personal-website-resume'
  type Resume = typeof resume
  const props = defineProps(['contents'])

  const contents: Resume = props.contents
</script>
