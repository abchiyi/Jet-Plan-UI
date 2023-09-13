<template>
  <div class="j-loading" :class="classes">
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
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { getEl } from "jet-plan-ui/tool";
import gsap from "gsap";

export default defineComponent({
  name: "j-loading",
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
      displayLoadingDelay: false,
      displayLoading: this.loading,
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
    LoadingStart() {
      const HTMLCollection = getEl(this).getElementsByTagName("svg");
      if (HTMLCollection.length) {
        const rotate = (once?: Boolean) => {
          gsap.to(HTMLCollection[0], {
            ease: "linear",
            duration: 0.5,
            rotate: -360,
            onComplete: () => {
              gsap.set(HTMLCollection[0], {
                rotate: 0,
              });
              if (this.loading && !once) rotate();
            },
          });
        };

        const T = gsap.timeline();
        T.to(this, {
          duration: 0.5,
          displayValue: 0,
          ease: "ease-out",
          onStart: rotate,
        });

        T.to(this, {
          displayValue: 0.7,
          ease: "linear",
          duration: 0.5,
          yoyo: true,
          repeat: -1,
          onRepeat: () => {
            if (this.loading) return;
            T.set(this, { overwrite: true });
          },
        });
      }
    },
    LoadingStop() {
      gsap.to(this, {
        displayValue: this.value,
        ease: "ease-out",
        overwrite: true,
        duration: 0.5,
      });
    },
  },
  watch: {
    value(value) {
      gsap.to(this, { displayValue: value });
    },
    loading(value) {
      value ? this.LoadingStart() : this.LoadingStop();
    },
  },
});
</script>

<style>
.j-loading {
  display: inline-block;
  font-size: 100px;
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
