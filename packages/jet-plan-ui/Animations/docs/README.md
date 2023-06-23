<!-- 加载 demo 组件 start -->
<script setup>
import demoFade from './DemoFade.vue'
import demoScale from './DemoScale.vue'
import demoFolded from './DemoFolded.vue'
import demoSlider from './DemoSlider.vue'
import ControlSlider from './ControlSlider.vue'
import ControlAnimation from './ControlAnimation.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 动画组件

预置动画
使用前请参考官方 [Transition 文档](https://cn.vuejs.org/guide/built-ins/transition.html) 。

## Fade

<control-animation v-slot="props" >
  <preview-demo-code comp-name="Animations" demo-name="DemoFade">
    <demo-fade v-bind="props" />
  </preview-demo-code>
</control-animation>

## Scale

<control-animation v-slot="props" >
  <preview-demo-code comp-name="Animations" demo-name="DemoScale">
    <demo-scale v-bind="props" />
  </preview-demo-code>
</control-animation>

## Folded

<control-animation v-slot="props" >
  <preview-demo-code comp-name="Animations" demo-name="DemoFolded">
    <demo-folded v-bind="props" />
  </preview-demo-code>
</control-animation>

## Slider

<control-slider v-slot="props">
  <preview-demo-code comp-name="Animations" demo-name="DemoSlider">
    <demo-slider v-bind="props" />
  </preview-demo-code>
</control-slider>

### TransitionSliderProps

- position:

  Type：String

  范围：top | bottom | left | right

  该 prop 是必须的。

- opacity:

  Type: Boolean

  default：true
