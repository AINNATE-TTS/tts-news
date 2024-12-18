<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<NavItem[]>('navigation', [])

const { header } = useAppConfig()
const staticLogo = ref(false)
const links = [
  {
    label: 'News',
    to: '/'
  },
  {
    label: 'Pricing',
    to: '/pricing'
  },
  {
    label: 'Services',
    to: 'https://ttsopenai.com/',
    external: true,
    target: '_blank'
  }
]
onMounted(() => {
  if (import.meta.client) {
    setTimeout(() => {
      staticLogo.value = !staticLogo.value
    }, 3000)
  }
})

// check if scroll is at top of the page or from top 90px
const isScrolled = ref(false)
const scrollHandler = () => {
  isScrolled.value = window.scrollY > 90
}
onMounted(() => {
  window.addEventListener('scroll', scrollHandler)
})
</script>

<template>
  <UHeader
    :ui="{
      wrapper: isScrolled ? 'bg-background/75' : 'bg-background/0 backdrop-blur-sm border-b-0'
    }"
    :links="links"
    @mouseenter="staticLogo = false"
    @mouseleave="staticLogo = true"
  >
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
            label="News"
            variant="subtle"
          />
        </div>
      </template>
    </template>

    <template #right>
      <UContentSearchButton
        v-if="header?.search"
        :label="null"
      />

      <UColorModeButton v-if="header?.colorMode" />
      <UButton
        label="Get Started Free"
        icon="i-heroicons-arrow-right-20-solid"
        trailing
        color="gray"
        to="https://ttsopenai.com/"
        target="_blank"
        class="hidden lg:flex"
      />
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
