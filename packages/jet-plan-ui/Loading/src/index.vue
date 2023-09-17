<template>
  <div class="j-loading" :class="classes">
    <TransitionFade mode="out-in">
      <svg v-if="mode === 'circle'" :viewBox="circleParameters.viewBox">
        <circle
          class="background"
          :stroke-width="circleParameters.strokeWidth"
          :cx="circleParameters.cx"
          :cy="circleParameters.cy"
          :r="circleParameters.r"
          fill="none"
        />
        <circle
          class="progressbar"
          :stroke-dasharray="circleParameters.strokeDasharray"
          :stroke-width="circleParameters.strokeWidth"
          :stroke-dashoffset="percentageOfRing"
          :cx="circleParameters.cx"
          :cy="circleParameters.cy"
          :r="circleParameters.r"
          fill="none"
        />
      </svg>
      <track-bar
        :style="{ '--HEIGHT': lineWidth + 'px' }"
        v-model:percentage="displayValue"
        v-if="mode === 'bar'"
        display-only
      />
    </TransitionFade>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TransitionFade } from "../../Animations";
import { getEl, getOffset } from "../../tool";
import { TrackBar } from "../../TrackBar";

import gsap from "gsap";

export default defineComponent({
  name: "j-loading",
  components: {
    TransitionFade,
    TrackBar,
  },
  props: {
    mode: {
      type: String as PropType<"bar" | "circle">,
      default: "bar",
    },
    value: {
      type: Number,
      default: 0,
      validator(value: number) {
        return value <= 1;
      },
    },
    diameter: { type: Number, default: 100 },
    lineWidth: { type: Number, default: 15 },
    loading: Boolean,
  },
  data() {
    return {
      displayValue: this.value,
    };
  },
  computed: {
    classes() {
      return [this.mode, this.loading ? "loading" : null];
    },
    percentageOfRing() {
      const strokeDasharray = this.circleParameters.strokeDasharray;
      return strokeDasharray - strokeDasharray * this.displayValue;
    },
    circleParameters() {
      const r = this.diameter / 2 - this.lineWidth / 2;
      const strokeDasharray = Math.PI * r * 2;
      const xyCenter = this.diameter / 2;
      return {
        viewBox: `0 0 ${this.diameter} ${this.diameter}`,
        strokeWidth: this.lineWidth,
        strokeDasharray,
        cx: xyCenter,
        cy: xyCenter,
        r,
      };
    },
  },
  methods: {
    getSlider() {
      const circle = getEl(this).getElementsByTagName("svg")[0];
      const bar = getEl(this).getElementsByClassName("slider")[0];
      return this.mode == "circle" ? circle : bar;
    },

    rotate(circle: Element, once?: Boolean) {
      gsap.to(circle, {
        ease: "linear",
        duration: 0.5,
        rotate: 360,
        onComplete: () => {
          gsap.set(circle, {
            rotate: 0,
          });
          if (this.loading && !once) this.rotate(circle);
        },
      });
    },

    animationCircleStart() {
      const slider = this.getSlider();
      const T = gsap.timeline();
      T.to(this, {
        duration: 0.5,
        displayValue: 0,
        ease: "ease-out",
        onStart: () => this.rotate(slider),
      });
      T.to(this, {
        displayValue: 0.4,
        ease: "linear",
        duration: 0.7,
        yoyo: true,
        repeat: -1,
      });
    },
    animationCircleStop() {
      gsap.to(this, {
        displayValue: this.value,
        ease: "ease-out",
        overwrite: true,
        duration: 0.5,
        onStart: () => this.rotate(this.getSlider()),
      });
    },
    animationBarStop() {
      gsap.to(this, {
        displayValue: this.value,
        ease: "ease-out",
        overwrite: true,
        duration: 0.5,
      });
    },
    animationBarStart(run: Boolean = true) {
      const slider = this.getSlider();
      const move = () => {
        const width = gsap.getProperty(getEl(this), "width");
        const sliderWidth = getOffset(slider as any).width;
        const duration = Number(width) / 130 <= 0.5 ? 0.5 : Number(width) / 130;

        gsap.fromTo(
          slider,
          {
            x: -1.2 * Number(sliderWidth),
            ease: "linear",
            duration,
          },
          {
            ease: "linear",
            duration,
            x: width,
            onComplete: () => {
              if (this.loading && run) {
                move();
              } else {
                gsap.set(slider, { x: -1.2 * Number(sliderWidth) });
                gsap.to(slider, { x: 0 });
              }
            },
          }
        );
      };

      gsap.to(slider, {
        x: gsap.getProperty(getEl(this), "width"),
        duration: Number(gsap.getProperty(getEl(this), "width")) / 130,
        ease: "linear",
        onComplete: move,
      });
    },
    LoadingStart() {
      if (this.mode === "circle") {
        this.animationCircleStart();
      } else this.animationBarStart();
    },
    LoadingStop() {
      if (this.mode === "circle") {
        this.animationCircleStop();
      } else {
        this.animationBarStop();
      }
    },
  },
  mounted() {
    if (this.loading) this.animationCircleStart();
  },
  watch: {
    value(value) {
      gsap.to(this, { displayValue: value });
    },
    loading(value) {
      value ? this.LoadingStart() : this.LoadingStop();
    },
    mode() {
      this.animationBarStart(false);
      this.animationBarStop();
    },
  },
});
</script>

<style>
.j-loading {
  display: inline-block;
  height: 1em;
}

.j-loading.circle {
  transform: rotate(-180deg);
  width: 1em;
}

.j-loading.circle .background {
  stroke: var(--border);
  fill: none;
}

.j-loading.circle .progressbar {
  stroke: var(--info-colors-info);
  stroke-linecap: round;
  animation: aa 3s linear infinite;
}
</style>

<!-- bar -->
<style>
.j-loading.bar {
  height: unset;
  width: 1em;
}

.j-loading.bar .slider {
  border-radius: var(--HEIGHT);
}
</style>
