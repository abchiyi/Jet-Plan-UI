<template>
  <article id='shadow'>
    <strong>Shadow</strong>
    <demo-box
      title='v-shaow'
      :code='code'
    >
      <m-row
        Y=center
        X=start
        warp
        space-mode="between"
      >
        <m-cube
          v-for="n in 20"
          :key="n"
          v-shadow="n"
          :intensity="n"
        >Test{{ n }}</m-cube>
      </m-row>
    </demo-box>
  </article>
</template>
<script>
export default {
  name: 'v-shaow',
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
