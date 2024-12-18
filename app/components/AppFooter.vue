<script setup lang="ts">
const { footer } = useAppConfig()

const links = [
  {
    label: 'Resources',
    children: [
      {
        label: 'Voice Library',
        to: 'https://ttsopenai.com/voice-library',
        external: true,
        target: '_blank'
      },
      {
        label: 'Service Integrations (API)',
        to: 'https://docs.ttsopenai.com/',
        external: true,
        target: '_blank'
      }
    ]
  },
  {
    label: 'Features',
    children: [
      {
        label: 'Text To Speech',
        to: 'https://ttsopenai.com/',
        external: true,
        target: '_blank'
      },
      {
        label: 'Document To Speech',
        to: 'https://ttsopenai.com/documents',
        external: true,
        target: '_blank'
      },
      {
        label: 'Story To Speech',
        to: 'https://ttsopenai.com/story-maker',
        external: true,
        target: '_blank'
      },
      {
        label: 'Voice Cloning',
        to: 'https://ttsopenai.com/my-voice',
        external: true,
        target: '_blank'
      }
    ]
  },
  {
    label: 'TTsOpenAI Team',
    children: [
      {
        label: 'Privacy Policy',
        to: 'https://ttsopenai.com/privacy',
        external: true,
        target: '_blank'
      },
      {
        label: 'Terms of Service',
        to: 'https://ttsopenai.com/terms',
        external: true,
        target: '_blank'
      },
      {
        label: 'Pricing Plans',
        to: 'https://ttsopenai.com/pricing-plans',
        external: true,
        target: '_blank'
      },
      {
        label: 'Frequency Asked Questions',
        to: 'https://ttsopenai.com/pricing-plans#faq',
        external: true,
        target: '_blank'
      }
    ]
  }
]

const toast = useToast()

const email = ref('')
const loading = ref(false)

function onSubmit() {
  loading.value = true

  setTimeout(() => {
    toast.add({
      title: 'Subscribed!',
      description: 'You\'ve been subscribed to our newsletter.'
    })

    loading.value = false
  }, 1000)
}
</script>

<template>
  <UFooter>
    <template #top>
      <UFooterColumns :links="links" />
    </template>

    <template #left>
      {{ footer.credits }}
    </template>
    <template #center>
      <div class="text-xs text-gray-500 text-center">
        The website is jointly operated by A2ZAI LTD No:16078579 Registered
        address at 483 Green Lanes, London, England, N13 4BS
      </div>
    </template>
    <template #right>
      <UColorModeButton size="sm" />

      <template v-if="footer?.links">
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...link }"
        />
      </template>
    </template>
  </UFooter>
</template>
