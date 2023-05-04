<template>
  <div class="title-anchor-nav">
    <strong>目录</strong>
    <ul>
      <li v-for="item in TocChildren" :key="item.text">
        <linkButton block text hover :to="`#${item.text}`">
          {{
            item.text.length > 10 ? item.text.slice(0, 10) + " ..." : item.text
          }}
        </linkButton>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { TocStorm, type Toc } from "../tool/index";
import { computed, defineComponent } from "vue";
import { linkButton } from "src/components";
const name = "title-anchor-nav";
export default defineComponent({
  name,
  components: {
    linkButton,
  },
  setup() {
    const TOC = computed(() => {
      return TocStorm().TocData as never[] | Toc[];
    });

    const TocChildren = computed(() => {
      return TOC.value ? TOC.value[0].children : [];
    });

    return {
      TocChildren,
    };
  },
});
</script>
<style>
.title-anchor-nav {
  padding-left: 1rem;
  overflow-x: hidden;
}

.title-anchor-nav > ul {
  padding-left: unset;
  font-weight: 300;
  list-style: none;
  font-size: 14px;
}

.title-anchor-nav > ul > li + li {
  margin-top: 0.3em;
}

.title-anchor-nav a {
  text-decoration: unset;
  white-space: nowrap;
  text-align: start;
  margin: unset;
}
</style>
