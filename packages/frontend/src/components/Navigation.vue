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
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar'

import { CircleUserRound, FileUser } from 'lucide-vue-next'
</script>
<template>
  <SidebarProvider :default-open="false">
    <div class="relative h-screen">
      <SidebarTrigger class="md:hidden absolute top-3 left-3 z-50" />
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenuButton
            as="a"
            href="/"
          >
            <slot name="logo" />
            <span class="ml-2">Kinnaird.scot</span>
          </SidebarMenuButton>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>About Me</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenuItem>
                <SidebarMenuButton as-child>
                  <a href="/profile">
                    <CircleUserRound /> Profile
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton as-child>
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
          <SidebarTrigger class="hidden md:block" />
        </SidebarFooter>
      </Sidebar>
    </div>
  </SidebarProvider>
</template>
