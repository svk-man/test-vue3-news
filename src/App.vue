<template>
  <main class="main">
    <div class="container">
      <NewsList :newsItems="newsItems" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue';
import { newsApi, NewsResponse, NewsItem } from './shared/api/index';
import NewsList from './widgets/NewsList/index';


const state = reactive<{ newsItems: NewsItem[] }>({
  newsItems: []
});

const { newsItems } = toRefs(state)

const fetchNewsItems = () => {
  newsApi.news.getNewsList(1)
    .then((response: NewsResponse) => {
      state.newsItems = response.data.items
    });
};

fetchNewsItems();
</script>
