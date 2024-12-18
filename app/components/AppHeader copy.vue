<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))
const { header } = useAppConfig()
const links = [
  {
    label: 'Docs',
    to: '/docs'
  },
  {
    label: 'Pricing',
    to: '/pricing'
  },
  {
    label: 'Blog',
    to: '/blog'
  }
]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <template v-if="header?.logo?.dark || header?.logo?.light">
        <UColorModeImage v-bind="{ class: 'h-6 w-auto', ...header?.logo }" />
      </template>
      <template v-else>
        <div class="flex flex-row items-center gap-2">
          <BaseSoundWave
            :static="staticLogo"
            class="cursor-pointer"
            @click="navigateTo('/docs/api-reference/getting-started')"
          />
          <span class="block md:hidden">TTSOpenAI</span>
          <span class="hidden md:block">Text To Speech OpenAI</span>
          <UBadge
            label="Docs"
            variant="subtle"
          />
        </div>
      </template>
    </template>

    <template #right>
      <UButton
        label="Sign in"
        color="gray"
        to="/login"
      />
      <UButton
        label="Sign up"
        icon="i-heroicons-arrow-right-20-solid"
        trailing
        color="black"
        to="/signup"
        class="hidden lg:flex"
      />
    </template>

    <template #panel>
      <UNavigationTree
        :links="mapContentNavigation(navigation)"
        default-open
      />
    </template>
  </UHeader>
</template>
