<template>
  <main class="main">
    <div class="container news">
      <NewsList :newsItems="newsItems" />
      <button class="btn news__btn" @click="goToNextPage" v-show="isLoadPossible">Загрузить ещё</button>
    </div>
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
