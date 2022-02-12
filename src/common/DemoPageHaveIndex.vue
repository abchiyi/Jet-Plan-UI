<template >
  <div class="demo-page-have-index">
    <ul class="container">
      <li
        class="item"
        v-for="item in paths"
        :key="item"
      >
        <!-- Link -->
        <router-link-a
          v-model="path"
          :href="item.href"
          style="padding-left: 1.5rem"
        >
          {{ item.name }}
        </router-link-a>
        <!-- Index -->
        <m-transition-folded>
          <div
            class="page-index"
            v-show="pageNow == item.href"
          >
            <m-button
              v-scroll-to:120="i.to"
              style="padding-left: 2.5rem"
              v-for="i in item.index"
              :key="i"
              text
              row
            >
              {{ i.name }}
            </m-button>
          </div>
        </m-transition-folded>
      </li>
    </ul>
  </div>
</template>
<script>
//   v-scroll-to:120="i.to"

export default {
  name: "demo-page-have-index",
  data () {
    return {
      path: undefined
    }
  },
  props: {
    pageNow: String,
    paths: Object,
  },
  emits: ["update:pageNow"],
  watch: {
    pageNow (v) {
      this.path = v
    },
    path (v) {
      this.$emit("update:pageNow", v)
    }
  }
}
</script>
<style>
.item::marker {
  font-size: 0;
}

#links,
.container {
  padding: unset;
}
</style>
