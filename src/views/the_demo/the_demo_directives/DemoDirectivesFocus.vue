<template>
  <article id="focus">
    <strong>Focus</strong>
    <p>判断操作是否聚焦于某个元素。</p>
    <demo-box
      title='v-focus'
      :code='code'
    >
      <m-row X="center">
        <m-cube
          v-focus="onblur"
          style="width:150px;padding: 0 10px "
        >
          {{value?'NowClickOutside':"NowClickMe"}}
        </m-cube>
      </m-row>
    </demo-box>
    <doc-directive directive="focus">
      <template v-slot:value>
        <li>
          <inline-code>
            type:function(Boolean){}
          </inline-code>
          接受一个函数作为参数，在点击元素即元素内部时为 true，
          点击外部为 false。
        </li>
      </template>
    </doc-directive>
  </article>
</template>
<script>
export default {
  name: 'demo-directives-focus',
  data: () => {
    return {
      //TODO示例代码
      code: `// Script
function onblur (v) {
    this.value = v;
};


// Style
<style>
    .demo-cube{
        style="width:150px;
        padding:0 10px;
    }
</style>


//Html
<body>
    <div class="demo-cube" v-focus="onblur">
        {{value?'NowClickOutside':"NowClickMe"}}
    </div>
</body>

`,
      value: false
    }
  },
  methods: {
    onblur (v) {
      this.value = v
    }
  }
};
</script>
<style>
</style>
