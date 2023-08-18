<template>
  <li>{{ newsItem.name }}</li>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { NewsItem } from '../../shared/api/models';

defineProps({
  newsItem: Object as PropType<NewsItem>,
  required: true
});
</script>

<style scoped>
</style>
