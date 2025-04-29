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
<SidebarProvider :defaultOpen="false"> {/* Add Provider wrapper here */}
  <div class="relative h-screen"> {/* Add relative positioning and ensure height */}
    {/* Position Trigger outside the Sidebar component flow */}
    <SidebarTrigger class="absolute top-3 left-3 z-10 size-6" />

    <Sidebar collapsible='icon'>
      <SidebarHeader>
        {/* Add padding to header to avoid overlap with the absolute trigger */}
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
    {/* Trigger is now outside the footer */}
  </SidebarFooter>
</Sidebar>
</div>
</SidebarProvider> {/* Close Provider wrapper */}
</template>
