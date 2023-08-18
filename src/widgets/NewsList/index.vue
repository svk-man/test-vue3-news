<template>
  <ul class="news__list">
    <NewsListItem
      v-for="newsItem in newsItems" :key="newsItem.code"
      :newsItem="newsItem"
    />
  </ul>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import NewsListItem from '../NewsListItem/index';
import { NewsItem } from '../../shared/api/index';

defineProps({
  newsItems: {
    type: Array as PropType<NewsItem[]>,
    required: true
  }
});
</script>

<style lang="scss">
.news__list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 64px 48px;
}
</style>
