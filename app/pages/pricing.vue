<script setup lang="ts">
const { data: page } = await useAsyncData('pricing', () =>
  queryContent('/pricing').findOne()
)
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImageComponent('Saas')

const isYearly = ref(false)
</script>

<template>
  <div v-if="page">
    <UPageHero v-bind="page.hero" />

    <UContainer>
      <UPricingGrid
        :ui="{
          wrapper: 'lg:grid-cols-2 lg:w-2/3 lg:mx-auto'
        }"
      >
        <UPricingCard
          v-for="(plan, index) in page.plans"
          :key="index"
          v-bind="plan"
          :price="isYearly ? plan.price.year : plan.price.month"
        />
      </UPricingGrid>
    </UContainer>

    <ULandingSection>
      <ULandingLogos>
        <UIcon
          v-for="icon in page.logos.icons"
          :key="icon"
          :name="icon"
          class="w-12 h-12 flex-shrink-0 text-gray-500 dark:text-gray-400"
        />
      </ULandingLogos>
    </ULandingSection>
  </div>
</template>
