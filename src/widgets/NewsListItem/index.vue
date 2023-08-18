<template>
  <li class="news__item">
    <article :class="`news-item${newsItem.image ? '' : ' news-item--no-image'} `">
      <div class="news-item__image" v-if="newsItem.image">
        <img :src="newsItem.image" :alt="newsItem.name">
      </div>
      <div class="news-item__content">
        <h3 class="news-item__title">{{ newsItem.name }}</h3>
        <p class="news-item__descr">{{ newsItem.previewText }}</p>
        <span class="news-item__type">{{ newsItem.type.value }}</span>
      </div>
    </article>
  </li>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { NewsItem } from '../../shared/api/models';

defineProps({
  newsItem: Object as PropType<NewsItem>,
  required: true
});
</script>

<style lang="scss">
.news {
  margin: 0;
  padding: 35px 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 65px;
  &__item .news-item {
    height: 100%;
  }
}

.news-item {
  display: flex;
  flex-direction: column;
  width: 535px;
  border-radius: 15px;
  background-color: white;
  overflow: hidden;
  &__image {
    height: 250px;
    margin-bottom: -1px;
    z-index: 2;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
    flex-grow: 1;
    border: 1px solid #0f62fe;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  &--no-image {
    overflow: initial;
    .news-item__content {
      border-radius: 15px;
    }
  }
  &__title,
  &__descr {
    margin: 0;
    margin-bottom: 15px;
    text-align: left;
  }
  &__title {
    font-size: 23px;
    line-height: 27px;
    font-weight: 400;
    color: #0f62fe;
  }
  &__descr {
    font-size: 20px;
    line-height: 25px;
    font-weight: 400;
  }
  &__type {
    margin-top: auto;
    padding: 7px 15px;
    font-size: 14px;
    line-height: 14px;
    color: #3c4c6b;
    background-color: #f0f6fe;
    border-radius: 30px;
  }
}
</style>
