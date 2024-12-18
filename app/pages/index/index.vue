<script setup lang="ts">
import type { BlogPost } from '~/types'

const { data: page } = await useAsyncData('home', () =>
  queryContent('/home').findOne()
)
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { data: posts } = await useAsyncData('posts', () =>
  queryContent<BlogPost>('/posts')
    .where({ _extension: 'md' })
    .sort({ date: -1 })
    .find()
)

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImageComponent('Saas')
</script>

<template>
  <div class="overlay">
    <ULandingHero
      :title="page.hero.title"
      :description="page.hero.description"
    >
      <div
        class="absolute inset-0 landing-grid z-[-1] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <BaseBackgroundColor />
      </div>
    </ULandingHero>
    <UContainer>
      <UPageBody>
        <UBlogList>
          <UBlogPost
            v-for="(post, index) in posts"
            :key="index"
            :to="post._path"
            :title="post.title"
            :description="post.description"
            :image="post.image"
            :date="
              new Date(post.date).toLocaleDateString('en', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })
            "
            :authors="post.authors"
            :badge="post.badge"
            :orientation="index === 0 ? 'horizontal' : 'vertical'"
            :class="[index === 0 && 'col-span-full']"
            :ui="{
              description: 'line-clamp-2'
            }"
          />
        </UBlogList>
      </UPageBody>
    </UContainer>
  </div>
</template>

<style scoped>
.landing-grid {
  background-size: 100px 100px;
  background-image: linear-gradient(
      to right,
      rgb(var(--color-gray-200)) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgb(var(--color-gray-200)) 1px, transparent 1px);
}
.dark {
  .landing-grid {
    background-image: linear-gradient(
        to right,
        rgb(var(--color-gray-800)) 1px,
        transparent 1px
      ),
      linear-gradient(
        to bottom,
        rgb(var(--color-gray-800)) 1px,
        transparent 1px
      );
  }
}
</style>
