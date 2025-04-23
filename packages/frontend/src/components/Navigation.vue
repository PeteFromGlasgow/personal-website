<script setup>
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar'
</script>
<template>
<div>
<SidebarProvider>
<Sidebar>
  <SidebarHeader>
  PeterKinnaird - Engineer
  </SidebarHeader>
  <SidebarContent>
    <SidebarGroup />
    <SidebarGroup />
  </SidebarContent>
  <SidebarFooter />
</Sidebar>
<SidebarTrigger></SidebarTrigger>
</SidebarProvider>

</div>
</template>
