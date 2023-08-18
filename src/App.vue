<template>
  <header class="header">
    <div class="container header__container">
      <div class="logo">
        <img src="./assets/logo.png" alt="alpha">
      </div>
    </div>
  </header>
  <main class="main">
    <section class="hero">
      <div class="container hero__container">
        <h2 class="hero__title">Новости</h2>
      </div>
    </section>
    <section class="container news">
      <NewsList :newsItems="newsItems" />
      <button class="btn news__btn" @click="goToNextPage" v-show="isLoadPossible">Загрузить ещё</button>
    </section>
  </main>
</template>

<script setup lang="ts">
import { reactive, toRefs, computed } from 'vue';
import { newsApi, NewsResponse, NewsItem } from './shared/api/index';
import NewsList from './widgets/NewsList/index';


const state = reactive<{ newsItems: NewsItem[], currentPage: number, totalPages: number }>({
  newsItems: [],
  currentPage: 1,
  totalPages: 1,
});

const { newsItems, currentPage, totalPages } = toRefs(state);

const fetchNewsItems = () => {
  newsApi.news.getNewsList(currentPage.value)
    .then((response: NewsResponse) => {
      state.newsItems = state.newsItems.concat(response.data.items);
      state.totalPages = response.data.nav.total;
    });
};

fetchNewsItems();

const goToNextPage = () => {
  state.currentPage += 1;
  fetchNewsItems();
};

const isLoadPossible = computed(() => currentPage.value < totalPages.value);
</script>

<style lang="scss">
.header {
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.08);
  margin-bottom: 3px;
  &__container {
    display: flex;
    align-items: center;
    min-height: 120px;
  }
}

.hero {
  height: 320px;
  background: #eef2f8 url('./assets/hero-bg.jpg') no-repeat bottom right;
  background-size: cover;
  &__container {
    height: 100%;
    padding-bottom: 48px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }
  &__title {
    margin: 0;
    font-family: Nunito Sans;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: -0.4px;
  }
}

.news {
  padding: 35px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__btn {
    margin: 0 auto;
    margin-top: 70px;
  }
}
</style>
