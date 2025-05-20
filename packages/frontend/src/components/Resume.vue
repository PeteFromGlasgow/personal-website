<template>
  <div>
    {{ contents.basics }} 
  </div>
</template>

<script setup lang="ts">
  import { resume } from '@petefromglasgow/personal-website-resume'
  type Resume = typeof resume
  const props = defineProps(['contents'])

  const contents: Resume = props.contents
</script>
