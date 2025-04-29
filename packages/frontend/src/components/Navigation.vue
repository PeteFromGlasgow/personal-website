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
    SidebarMenuButton
    // SidebarProvider, // Remove import
    // SidebarTrigger // Remove import
  } from '@/components/ui/sidebar'

  import { CircleUserRound, FileUser } from 'lucide-vue-next'
</script>
<template>
<div>
<SidebarProvider :defaultOpen="false">
<Sidebar collapsible='icon'>
  <SidebarHeader>
    <SidebarMenuButton as="a" href="/" class="justify-start">
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
    {/* <SidebarTrigger class="size-6" /> Remove Trigger */}
  </SidebarFooter>
</Sidebar>

{/* </SidebarProvider> Remove Provider */}

</div>
</template>
