<script lang='ts' setup>
  import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarProvider, // Re-add import
    SidebarTrigger // Re-add import
  } from '@/components/ui/sidebar'

  import { CircleUserRound, FileUser } from 'lucide-vue-next'
</script>
<template>
<SidebarProvider :defaultOpen="false">
  <div class="relative h-screen">
    {/* Increased z-index to ensure visibility */}
    <SidebarTrigger class="absolute top-3 left-3 z-50 size-6" />

    <Sidebar collapsible='icon'>
      <SidebarHeader>
        <SidebarMenuButton as="a" href="/" class="justify-start pl-10">
      <slot name="logo"></slot>
      <span class="ml-2">Kinnaird.scot</span>
    </SidebarMenuButton>
  </SidebarHeader>
  <SidebarContent>
    <SidebarGroup>
      <SidebarGroupLabel>About Me</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
              <a href="/profile">
		<CircleUserRound /> Profile
              </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
              <a href="/curriculum-vitie">
		<FileUser /> Curriculum Vitie
              </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarGroupContent>
    </SidebarGroup>
    <SidebarGroup>
      <SidebarGroupLabel>Content</SidebarGroupLabel>
    </SidebarGroup>
  </SidebarContent>
  <SidebarFooter class="flex flex-col gap-3 p-3">
  </SidebarFooter>
</Sidebar>
</div>
</SidebarProvider>
</template>
