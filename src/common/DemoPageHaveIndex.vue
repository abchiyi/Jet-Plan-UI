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
          indentation="1"
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
              style="padding-left: 2.5rem"
              v-scroll-to:120="i.to"
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
import ScrollTo from '../../packages/tool/directives/ScrollTo'
export default {
  name: "demo-page-have-index",
  computed: {
    activeLink () {
      return this.pageNow == this.path
    }
  },
  directives: {
    scrollTo: ScrollTo,
  },
  data () {
    return {
      path: undefined
    }
  },
  props: {
    pageNow: String,
    paths: Object,
  },
  methods: {
    updatedPath (path) {
      this.$emit("update:pageNow", path)
    },
  },
  emits: ["update:pageNow"],
  watch: {
    pageNow (v) {
      this.path = v
    },
    path (v) {
      this.updatedPath(v)
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
