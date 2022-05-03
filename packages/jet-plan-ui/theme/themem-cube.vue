<template>
    <ActionFeedback
        :title="name"
        :class="classes"
        class="color-set-cube"
        @click="$jetTheme.setTheme(name)"
        active
        hover
    >
        <div class="image">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                viewBox="0 0 80 80"
            >
                <g class="theme-background">
                    <g style="theme-background-bg">
                        <path
                            id="background-border"
                            d="M0 8C4.90527396329193e-16 3.5817220013536524 3.5817220013536533 0 8 0L72 0C76.41827799864635 0 80 3.5817220013536533 80 8L80 72C80 76.41827799864635 76.41827799864635 80 72 80L8 80C3.5817220013536533 80 0 76.41827799864635 0 72Z"
                            class="background"
                            fill-opacity="1"
                        />
                        <path
                            d="M0.871948,4.36808C0,6.07937,0,8.31958,0,14.5113L0,65.4887C0,71.6804,0,73.9206,0.871948,75.6319C1.63893,77.1372,2.86278,78.3611,4.36808,79.1281C6.07937,80,8.31958,80,14.5113,80L65.4887,80C71.6804,80,73.9206,80,75.6319,79.1281C77.1372,78.3611,78.3611,77.1372,79.1281,75.6319C80,73.9206,80,71.6804,80,65.4887L80,14.5113C80,8.31958,80,6.07937,79.1281,4.36808C78.3611,2.86278,77.1372,1.63894,75.6319,0.871948C73.9206,0,71.6804,0,65.4887,0L14.5113,0C8.31958,0,6.07937,0,4.36808,0.871948C2.86278,1.63893,1.63894,2.86278,0.871948,4.36808ZM4,65.4887L4,14.5113Q4,9.44811,4.09911,8.04048Q4.19678,6.65349,4.43597,6.18404Q5.02602,5.02601,6.18404,4.43597Q6.65349,4.19678,8.04048,4.09911Q9.44811,4,14.5113,4L65.4887,4Q70.5519,4,71.9595,4.09911Q73.3465,4.19678,73.816,4.43597Q74.974,5.02601,75.564,6.18404Q75.8032,6.6535,75.9009,8.04048Q76,9.4481,76,14.5113L76,65.4887Q76,70.5519,75.9009,71.9595Q75.8032,73.3465,75.564,73.816Q74.974,74.974,73.816,75.564Q73.3465,75.8032,71.9595,75.9009Q70.5519,76,65.4887,76L14.5113,76Q9.4481,76,8.04048,75.9009Q6.6535,75.8032,6.18404,75.564Q5.02601,74.974,4.43597,73.816Q4.19678,73.3465,4.09911,71.9595Q4,70.5519,4,65.4887Z"
                            class="background-border"
                            fill-rule="evenodd"
                            fill-opacity="1"
                        />
                    </g>
                    <g class="theme-background-foreground">
                        <rect
                            class="foreground"
                            x="33"
                            y="37"
                            width="36"
                            height="33.75"
                            rx="8"
                            fill-opacity="1"
                        />
                        <rect
                            class="primary"
                            x="39"
                            y="54.8125"
                            width="25"
                            height="6.5625"
                            rx="3.28125"
                            fill-opacity="1"
                        />
                    </g>
                </g>
                <g class="theme-text">
                    <g class="text">
                        <rect
                            x="8"
                            y="9.375"
                            width="50"
                            height="4.6875"
                            rx="2.34375"
                            fill-opacity="1"
                        />
                    </g>
                    <g class="text-hint">
                        <rect
                            x="8"
                            y="18.75"
                            width="31"
                            height="2.8125"
                            rx="1.40625"
                            fill-opacity="1"
                        />
                        <rect
                            x="8"
                            y="24.375"
                            width="31"
                            height="2.8125"
                            rx="1.40625"
                            fill-opacity="1"
                        />
                    </g>
                </g>
                <g class="them-auto-mark" v-if="theme.auto">
                    <rect
                        class="foreground"
                        x="9"
                        y="55"
                        width="16"
                        height="16"
                        rx="4"
                        fill-opacity="1"
                    />
                    <rect
                        class="border"
                        x="9.5"
                        y="55.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        fill-opacity="0"
                        stroke-opacity="1"
                        stroke-width="1"
                        fill="none"
                    />
                    <path
                        class="line"
                        d="M26,64L8,64L8,63L26,63L26,64ZM26.5,63.5Q26.5,63.5492457,26.4904,63.5975451Q26.4808,63.645845,26.4619,63.691342Q26.4431,63.736839,26.4157,63.777785Q26.3884,63.818731,26.3536,63.853553Q26.3187,63.888375,26.2778,63.915735Q26.2368,63.943094,26.1913,63.96194Q26.1458,63.980785,26.0975,63.990393Q26.0492,64,26,64Q25.9508,64,25.9025,63.990393Q25.8542,63.980785,25.8087,63.96194Q25.7632,63.943094,25.7222,63.915735Q25.6813,63.888375,25.6464,63.853553Q25.6116,63.818731,25.5843,63.777785Q25.5569,63.736839,25.5381,63.691342Q25.5192,63.645845,25.5096,63.5975451Q25.5,63.5492457,25.5,63.5Q25.5,63.4507543,25.5096,63.4024549Q25.5192,63.354155,25.5381,63.308658Q25.5569,63.263161,25.5843,63.222215Q25.6116,63.181269,25.6464,63.146447Q25.6813,63.111625,25.7222,63.084265Q25.7632,63.056906,25.8087,63.03806Q25.8542,63.019215,25.9025,63.009607Q25.9508,63,26,63Q26.0492,63,26.0975,63.009607Q26.1458,63.019215,26.1913,63.03806Q26.2368,63.056906,26.2778,63.084265Q26.3187,63.111625,26.3536,63.146447Q26.3884,63.181269,26.4157,63.222215Q26.4431,63.263161,26.4619,63.308658Q26.4808,63.354155,26.4904,63.4024549Q26.5,63.4507543,26.5,63.5ZM8.5,63.5Q8.5,63.5492457,8.490393,63.5975451Q8.480785000000001,63.645845,8.46194,63.691342Q8.443094,63.736839,8.415735,63.777785Q8.388375,63.818731,8.353553,63.853553Q8.318731,63.888375,8.277785,63.915735Q8.236839,63.943094,8.191342,63.96194Q8.145845,63.980785,8.0975451,63.990393Q8.0492457,64,8,64Q7.9507543,64,7.9024549,63.990393Q7.854155,63.980785,7.808658,63.96194Q7.763161,63.943094,7.722215,63.915735Q7.681269,63.888375,7.646447,63.853553Q7.611625,63.818731,7.584265,63.777785Q7.556906,63.736839,7.53806,63.691342Q7.519215,63.645845,7.509607,63.5975451Q7.5,63.5492457,7.5,63.5Q7.5,63.4507543,7.509607,63.4024549Q7.519215,63.354155,7.53806,63.308658Q7.556906,63.263161,7.584265,63.222215Q7.611625,63.181269,7.646447,63.146447Q7.681269,63.111625,7.722215,63.084265Q7.763161,63.056906,7.808658,63.03806Q7.854155,63.019215,7.9024549,63.009607Q7.9507543,63,8,63Q8.0492457,63,8.0975451,63.009607Q8.145845,63.019215,8.191342,63.03806Q8.236839,63.056906,8.277785,63.084265Q8.318731,63.111625,8.353553,63.146447Q8.388375,63.181269,8.415735,63.222215Q8.443094,63.263161,8.46194,63.308658Q8.480785000000001,63.354155,8.490393,63.4024549Q8.5,63.4507543,8.5,63.5Z"
                        fill-opacity="1"
                    />
                    <path
                        class="foreground-dark"
                        d="M10 59C10 57.34314575050762 11.34314575050762 56 13 56L21 56C22.65685424949238 56 24 57.34314575050762 24 59L24 63C24 63 24 63 24 63L10 63C10 63 10 63 10 63Z"
                        fill-opacity="1"
                    />
                </g>
            </svg>
        </div>
    </ActionFeedback>
</template>

<script>
import ActionFeedback from '../action-feedback/ActionFeedback.vue';
function vIf(boolean, v) {
    if (boolean) return v;
}
export default {
    name: 'j-color-set-cube',
    props: {
        theme: {
            type: Object,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
    },
    computed: {
        classes() {
            return [
                vIf(this.used, 'used'),
                vIf(this.darkMode && this.theme.auto, 'dark-mode'),
            ];
        },
        used() {
            return this.theme == this.$jetTheme.theme;
        },
        darkMode() {
            return matchMedia('(prefers-color-scheme: dark)').matches;
        },
        showTheme() {
            return this.darkMode && this.theme.auto
                ? this.theme.auto
                : this.theme;
        },
        themeAutoMark() {
            return this.theme.auto
                ? this.theme
                : {
                      ...this.theme,
                      auto: {},
                  };
        },
    },
    components: { ActionFeedback },
};
</script>

<style scoped>
.color-set-cube {
    border-radius: var(--m-radius);
    cursor: pointer;
    width: 80px;
    margin: 5px;
}
.color-set-cube * {
    user-select: none;
}

.primary {
    fill: v-bind('showTheme.primary');
}
.background {
    fill: v-bind('showTheme.background');
}
.background-border {
    fill: var(--border);
}
.used .background-border {
    fill: var(--primary);
}
.border {
    stroke: v-bind('showTheme.border');
}
.foreground {
    fill: v-bind('showTheme.foreground');
}
.foreground-dark {
    fill: var('theme.auto.foreground');
}
.them-auto-mark .foreground {
    fill: v-bind('themeAutoMark.foreground');
}
.them-auto-mark .foreground-dark {
    fill: v-bind('themeAutoMark.auto.foreground');
}
.line {
    fill: v-bind('showTheme.border');
}
.text {
    fill: v-bind('showTheme.text');
}
.text-hint {
    fill: v-bind("showTheme['text-hint']");
}
</style>
