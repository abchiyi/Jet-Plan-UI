<script setup>
import XYSelector from './XYSelector.vue'
import DemoOffset from './DemoOffset.vue'
import SetOffset from './SetOffset.vue'
import DemoGrid from './DemoGrid.vue'
import DemoRow from './DemoRow.vue'
</script>

# 栅格布局

基于`flex box` 的 24 栏网格系统,

## 网格

使用 `<Row>`, `<Col>` 组件进行网格定位。

**示例**：

<preview-demo-code comp-name="Grid" demo-name="DemoGrid">
  <demo-grid/>
</preview-demo-code>

## 定位

使用组件`<Row>`的 prop`X`,`Y`对组件内元素进行快速定位。

**示例**:

<XYSelector v-slot="props">
  <preview-demo-code comp-name="Grid" demo-name="DemoRow">
      <demo-row :row-x="props.X" :row-y="props.Y" />
  </preview-demo-code>
</XYSelector>

## 偏移

使用组件`<Col>`的 prop`offset`进行定位偏移，其中每个`<Col>`宽度占据其父元素宽度的 4 栏。

**示例**:

<SetOffset v-slot="props">
  <preview-demo-code comp-name="Grid" demo-name="DemoOffset">
    <DemoOffset :offset="props.offset" />
  </preview-demo-code>
</SetOffset>

## 组件 Row

- **Props**

  - `X`:

    type：`String`

    default:`'start'`

    range:`['start', 'center', 'end']`

    ‘X’ 轴定位

  - `Y`:

    type:`String`

    default : `top`

    range: `['top', 'center', 'bottom']`

    ‘Y’ 轴定位

  - `tag`:

    type:`String`

    default:`'div'`

    设置最终渲染标签

  - `warp`:

    type:`Boolean`

    default:`false`

    允许内部元素换行

  - `reverse`:

    type:`Boolean`

    default:`false`

    反向排列内部元素

  - `noGap`:

    type:`Boolean`

    default:`false`

    当子元素为组件`<Col>`时，取消其与相邻 `<Col>` 组件的间隙

  - `spaceMode`:

    type:`String`

    default:`false`

    range: `['around', 'between']`

    设置内部元素空格排列方式，此 prop 将覆盖 `props:X`。

- **Slots**

  - default:默认插槽

## 组件 Col

- **Props**

  - `tag`:

    type:`String`

    default:`'div'`

  - `col` , `xs` , `sm` , `md` , `lg` , `xl`:

    type: `Number`

    range: 0~24

    设置组件宽度占用几栏

  - `offset` , `offsetXs` , `offsetSm` , `offsetMd` , `offsetXl`:

    type: `Number`

    range: 0~24

    设置组件偏移几栏

  - `relativeToScreen`:

    type: `Boolean`

    default: `false`

    设置 1 栏的宽度是相对于屏幕亦或者是父组件的宽度

- **Slots**

  - default:默认插槽
