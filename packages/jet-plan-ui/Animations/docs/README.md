<!-- 加载 demo 组件 start -->
<script setup>
import demoFade from './DemoFade.vue'
import demoScale from './DemoScale.vue'
import demoFolded from './DemoFolded.vue'
import demoSlider from './DemoSlider.vue'
import AnimatedSwitch from './AnimatedSwitch.vue'
import { ref } from "vue"
const Fade = ref(true)
const Scale = ref(true)
const Folded= ref(true)
const Slider = ref(true)
const SliderFade = ref(true)
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 动画组件

预置动画
使用前请参考官方 [Transition 文档](https://cn.vuejs.org/guide/built-ins/transition.html) 。

## Fade

<AnimatedSwitch v-model="Fade" />
<preview-demo-code comp-name="Animations" demo-name="DemoFade">
  <demo-fade :show-demo="Fade" />
</preview-demo-code>

## Scale

<AnimatedSwitch v-model="Scale" />
<preview-demo-code comp-name="Animations" demo-name="DemoScale">
  <demo-scale :show-demo="Scale" />
</preview-demo-code>

## Folded

<AnimatedSwitch v-model="Folded" />
<preview-demo-code comp-name="Animations" demo-name="DemoFolded">
  <demo-folded :show-demo="Folded" />
</preview-demo-code>

## Slider

<AnimatedSwitch v-model="SliderFade" :text="`${SliderFade?'':'不'}使用Fade效果`" />
<AnimatedSwitch v-model="Slider" />
<preview-demo-code comp-name="Animations" demo-name="DemoSlider">
  <demo-slider :show-demo="Slider" :use-fade="SliderFade" />
</preview-demo-code>

### TransitionSliderProps

- position:

  Type：String

  范围：top | bottom | left | right

  该 prop 是必须的。

- opacity:

  Type: Boolean

  default：true
