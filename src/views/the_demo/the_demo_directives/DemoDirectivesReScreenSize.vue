<template>
  <article id='re-screen-size'>
    <strong>ReScreenSize</strong>
    <demo-box
      title='v-re-screen-size'
      :code='code'
      :expand="true"
    >
    </demo-box>
    <doc-directive>
      <template v-slot:value>
        <li>
          <inline-code>function (el,value)=>{} </inline-code>
          接受一个函数作为回调。当屏幕尺寸发生变动时，函数将会被调用。
        </li>
      </template>
    </doc-directive>
  </article>
</template>
<script>
import inlineCode from '../../../common/inlineCode.vue';
export default {
  components: { inlineCode },
  name: 're-screen-size',
  data: () => {
    return {
      code: `
// javascript
function test(el,screenSizeInfo){
    console.log(el);
    console.log(screenSizeInfo);
};
// HTML
<body>
    <div v-reScreenSize=screenSizeInfo ></div>
</body>`
    }
  }
};
</script>
<style>
</style>
