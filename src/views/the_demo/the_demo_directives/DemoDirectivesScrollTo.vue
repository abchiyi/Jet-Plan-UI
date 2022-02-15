<template>
  <article id='scroll-to'>
    <strong>ScrollTo</strong>
    <p>滚动到指定的元素</p>
    <demo-box
      title='v-scroll-to'
      :code='code'
    >
      <template v-slot:header>
        <div id="scroll-controll">
          <m-button
            tag='a'
            v-scroll-to:120="`#cube1`"
          >滚动至大于屏幕高度元素,定义顶部距离视窗200px</m-button>
          <m-button
            tag='a'
            v-scroll-to="`#cube2`"
          >滚动至小于屏幕高度元素</m-button>
          <m-button
            tag='a'
            v-scroll-to="`#cube3`"
          >滚动至大于屏幕高度元素,未定义顶部距离视窗位置</m-button>
        </div>

      </template>
      <m-row X='center'>
        <m-col style="width:100px">
          <m-cube
            id="cube1"
            style="height:120vh"
            v-scroll-to="`#scroll-controll`"
          >120vh</m-cube>
          <m-cube
            id="cube2"
            v-scroll-to="`#scroll-controll`"
            style="height:100px;background:var(--warning)"
          >100px</m-cube>
          <m-cube
            id="cube3"
            v-scroll-to="`#scroll-controll`"
            style="height:120vh;background:var(--error)"
          >120vh</m-cube>
        </m-col>
      </m-row>
    </demo-box>
    <doc-directive directive="scroll-to">
      <template v-slot:arg>
        <li>传入任意数字作为参数，值将被作为像素使用，例如 120px</li>
      </template>
      <template v-slot:value>
        <li>传入任意元素 id </li>
      </template>
    </doc-directive>
    <p>当元素高度小于视窗高度时，滚动到该元素将会把该元素至于视窗中央。当元素高度大于视窗高度时将会把元素头部滚动至视窗顶部。
      传入参数<inline-code>arg:Number</inline-code>将会在元素高度大于视窗时，将元素顶部至于距离视窗顶部指定的位置。
    </p>
  </article>
</template>
<script>
export default {
  name: '',
  data: () => {
    return {
      //TODO示例代码
      code: undefined
    }
  }
};
</script>
<style>
</style>
