<template>
  <div class="ContainerGlobal">

    <Header :favoris="state.favoris" />

  </div>
  <div class="view-container">
    <router-view v-slot="{ Component }">
      <template v-if="Component">
        <suspense>
          <component :is="Component" />
          <template #fallback>
            <Loader />
          </template>
        </suspense>
      </template>
    </router-view>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import { search, state } from '@/shared/film';
import { computed, reactive } from '@vue/reactivity';
import Header from "./components/Header/header.vue";
import { seed } from './shared/seed';
import Footer from './components/Footer/Footer.vue';
import Loader from './components/Loader/Loader.vue';
import DOMLoader from './components/Loader/DOMLoader.vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
// seed('getfilm')







</script>

<style>
@import "@/assets/base.css";

.ContainerGlobal {
  display: flex;
  flex-direction: column;
}

.view-container {
  width: 100%;
  min-height: 100vh;
}
</style>
