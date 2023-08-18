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
.news__item .news-item {
  height: 100%;
}

.news-item {
  display: flex;
  flex-direction: column;
  width: 536px;
  border-radius: var(--radius-m);
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
    padding: 32px;
    flex-grow: 1;
    border: 1px solid var(--color-brend-primary);
    border-bottom-left-radius: var(--radius-m);
    border-bottom-right-radius: var(--radius-m);
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
    text-align: left;
  }
  &__title {
    font-family: Nunito Sans;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    color: var(--link-link-color-default);
    margin-bottom: 16px;
  }
  &__descr {
    font-family: Nunito Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -0.2px;
    color: var(--grey-color-black-85);
    margin-bottom: 40px;
  }
  &__type {
    margin-top: auto;
    padding: 4px 16px;
    color: var(--link-link-dark-default);
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    border-radius: var(--radius-full);
    background-color: var(--bg-bg-5);
  }
}
</style>
