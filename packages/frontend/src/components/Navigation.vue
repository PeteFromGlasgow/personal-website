<script lang='ts' setup>
  import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarProvider,
    SidebarTrigger
  } from '@/components/ui/sidebar'

  import { CircleUserRound, FileUser } from 'lucide-vue-next'
</script>
<template>
<div>
<SidebarProvider :defaultCollapsed="true">
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
  <SidebarFooter>
    <SidebarMenuButton class="justify-center w-full">
      Made with love in 🏴󠁧󠁢󠁳󠁣󠁴󠁿
    </SidebarMenuButton>
  </SidebarFooter>
</Sidebar>
<SidebarTrigger></SidebarTrigger>
</SidebarProvider>

</div>
</template>
