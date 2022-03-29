<template>
  <div id="the-demo-header">
    <doc-item id="describes" title-is="h2" name="页头浮动栏">
      <li>
        <p>
          页头浮动栏, flex
          定位至页面顶部，始终悬浮于内容上方。没有除定位以及高度外任何样式设置，需自定义样式
        </p>
      </li>
    </doc-item>
    <hr />
    <div id="doc">
      <doc-item title-is="h2" name="<j-header>:">
        <li id="slots">
          <doc-item name="Slots:">
            <li id="slots-default">
              <p>
                <high-lighter>:default</high-lighter>
                - 默认插槽
              </p>
            </li>
          </doc-item>
        </li>
      </doc-item>
    </div>
    <demo-box title="<j-header>" :code="code" :expand="true"></demo-box>
  </div>
</template>
<script>
import pdn from '../../../common/mix/popDemoName';
export default {
  mixins: [pdn],
  name: 'the-demo-header',
  data: () => {
    return {
      code: `
<j-header>
    <template v-slot:default>
        Header
    </template>
</j-header>
                `,
    };
  },
};
</script>
<style></style>
