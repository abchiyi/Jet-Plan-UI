<template>
  <div class="demo-page-have-index">
    <ul class="container">
      <li
        class="item"
        :class="[$route.path == item.href && item.index.length ? 'expand' : '']"
        v-for="item in paths"
        :key="item"
      >
        <!-- Link -->
        <router-link-a :href="item.href" style="padding-left: 1.5rem">
          {{ item.name }}
        </router-link-a>
        <!-- Index -->
        <j-transition-folded>
          <div
            class="page-index"
            v-show="$route.path == item.href && item.index.length"
          >
            <j-button
              v-scroll-to:120="i.to"
              style="padding-left: 2.5rem"
              v-for="i in item.index"
              :key="i"
              active
              hover
              text
              row
            >
              {{ i.name }}
            </j-button>
          </div>
        </j-transition-folded>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'demo-page-have-index',
  data() {
    return {
      path: undefined,
    };
  },
  props: {
    paths: Object,
  },
};
</script>
<style scoped>
.item {
  overflow: hidden;
  padding: 5px;
}
.item::marker {
  color: #00000000;
  font-size: 0;
}
.item *,
.item {
  text-align: start;
}
.item.expand {
  border-radius: var(--m-radius);
  background: var(--background);
}

#links,
.container {
  padding: unset;
}

.router-link-a + .page-index {
  margin-top: 5px;
}
</style>
