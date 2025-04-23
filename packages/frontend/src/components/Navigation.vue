<script lang="ts" setup>
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
</script>
<template>
<div>
<SidebarProvider>
<Sidebar>
  <SidebarHeader>
    <div class='flex flex-row'>
      <div>
        <img class='w-10 h-10 flex-1 rounded-sm' src="https://gravatar.com/avatar/af209d37d6bc17d6e3f3b2210f3e24da96afcd2eb3617a315eea641e9e9cc09c" alt="Peter Kinnaird Logo" />
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
              <span>Profile</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
              <a href="/curriculum-vitie">
              <span>Curriculum Vitie</span>
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
