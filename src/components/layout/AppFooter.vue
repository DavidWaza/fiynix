<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { footerColumns } from '@/data/footerLinks'
import { site, socialLinks } from '@/data/site'
import AppLogo from '@/components/ui/AppLogo.vue'
import SocialIcon from '@/components/ui/SocialIcon.vue'
import StoreBadges from '@/components/ui/StoreBadges.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-cream text-muted">
    <div class="page-container py-16 lg:py-20">
      <div class="grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <AppLogo size="lg" />
          <p class="mt-5 max-w-xs text-sm leading-relaxed">{{ site.defaultDescription }}</p>
          <div class="mt-6">
            <StoreBadges />
          </div>
        </div>

        <div class="grid gap-10 sm:grid-cols-3 lg:col-span-8">
          <nav v-for="column in footerColumns" :key="column.title" :aria-label="column.title">
            <h2 class="font-display text-sm font-bold tracking-wide text-ink uppercase">
              {{ column.title }}
            </h2>
            <ul class="mt-5 space-y-3 text-sm">
              <li v-for="link in column.links" :key="link.label">
                <RouterLink :to="link.to" class="transition-colors hover:text-primary-dark">
                  {{ link.label }}
                </RouterLink>
              </li>
            </ul>
          </nav>

          <div>
            <h2 class="font-display text-sm font-bold tracking-wide text-ink uppercase">Contact</h2>
            <address class="mt-5 space-y-3 text-sm not-italic">
              <p>
                <template v-for="(line, i) in site.contact.address" :key="line">
                  <br v-if="i > 0" />{{ line }}
                </template>
              </p>
              <p>
                <a
                  :href="`mailto:${site.contact.email}`"
                  class="transition-colors hover:text-primary-dark"
                >
                  {{ site.contact.email }}
                </a>
              </p>
            </address>
            <ul class="mt-6 flex gap-2">
              <li v-for="social in socialLinks" :key="social.platform">
                <a
                  :href="social.href"
                  :aria-label="social.label"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex size-10 items-center justify-center rounded-full bg-surface text-ink shadow-sm transition-colors hover:bg-primary-dark hover:text-white"
                >
                  <SocialIcon :platform="social.platform" class="size-4.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-ink/10">
      <div
        class="page-container text-center gap-2 py-6 text-sm sm:flex-row sm:items-center sm:justify-between"
      >
        <p>&copy; {{ year }} {{ site.name }}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
