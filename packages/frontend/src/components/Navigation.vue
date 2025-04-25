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
<SidebarProvider>
<Sidebar>
  <SidebarHeader>
    <div class='flex flex-row'>
      <div class='flex-1 rounded-sm'>
	 <slot name="logo"></slot>
      </div>
      <div class='content-center m-2'>
        Kinnaird.scot
      </div>
    </div>
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
  <SidebarFooter class='content-center'>Made with love in 🏴󠁧󠁢󠁳󠁣󠁴󠁿</SidebarFooter>
</Sidebar>
<SidebarTrigger></SidebarTrigger>
</SidebarProvider>

</div>
</template>
