<template>
  <ul>
    <NewsListItem
      v-for="newsItem in newsItems" :key="newsItem.id"
      :newsItem="newsItem"
    />
  </ul>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import NewsListItem from '../NewsListItem/index';
import { NewsItem } from '../../shared/api/index';

defineProps({
  newsItems: Array as PropType<NewsItem[]>,
  required: true
});
</script>

<style scoped>
</style>
../NewsListItem/index