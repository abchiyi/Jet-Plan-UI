<template>
    <div
        :class="classes"
        @click.prevent="change"
        @mousedown.prevent="toWider"
        @mouseup.prevent="cancellation"
        @mouseout.prevent="cancellation"
        @touchstart.prevent="toWider"
        @touchend.prevent="cancellation"
        @touchcancel.prevent="cancellation"
    >
        <svg ref="self" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 16">
            <rect class="background" rx="8" />
            <rect
                class="mask"
                width="22"
                height="12"
                rx="6"
                transform="translate(2 2)"
            />
            <g class="lever">
                <rect class="lever-fill" width="10" height="10" rx="5" s />
            </g>
        </svg>
    </div>
    <input
        :id="id"
        v-show="false"
        type="checkbox"
        :disabled="disabled"
        v-model="scopedValue"
    />
</template>
<script>
import { propInit, validatorRange } from '../../tool/lib';
import './css/shape.css';
export default {
    name: 'j-switch',
    props: {
        modelValue: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        size: propInit(String, 'm', validatorRange(['s', 'm', 'l'])),
        id: {
            required: true,
        },
    },
    data() {
        return {
            wider: false,
            intervalCode: [],
            first_load: null,
            scopedValue: this.modelValue,
        };
    },
    model: {
        prop: 'modeValue',
        event: 'update:modelValue',
    },
    computed: {
        classes() {
            return [
                'shape j-switch',
                this.size,
                this.wider ? 'wider' : '',
                this.disabled ? 'disabled' : '',
                this.modelValue ? 'on' : 'off',
                this.first_load ? 'first-load' : '',
            ];
        },
    },
    methods: {
        change() {
            if (!this.disabled) {
                this.$emit('update:modelValue', this.modelValue ? false : true);
                if (this.first_load) this.first_load = false;
            }
        },
        toWider() {
            // 在按下100ms后设置拨杆拉宽参数为true
            let inervalCode = setInterval(() => {
                this.wider = true;
            }, 100);
            this.intervalCode.push(inervalCode);
        },
        cancellation(e) {
            if (!this.$refs.self.contains(e.relatedTarget)) {
                // 在抬起或离开元素后设置拨杆拉宽参数为false
                if (this.intervalCode) {
                    this.intervalCode.forEach((code) => {
                        clearInterval(code);
                    });
                    this.intervalCode = [];
                    this.wider = false;
                }
            }
        },
    },
    created() {
        this.first_load = true;
    },
    watch: {
        modelValue(v) {
            if (this.first_load) this.first_load = false;
            this.scopedValue = v;
        },
        scopedValue(v) {
            this.$emit('update:modelValue', v);
        },
    },
};
</script>
<style>
/* 隐藏选中框 */
@supports (-webkit-tap-highlight-color: #ffffff00) {
    .j-switch {
        -webkit-tap-highlight-color: #ffffff00;
    }
}
.j-switch {
    height: var(--HEIGHT);
    width: var(--WIDTH);
    display: inline-block;
    user-select: none;
    cursor: pointer;
    margin: 0 2px;
}

.j-switch .background {
    width: 26px;
    height: 16px;
}

.j-switch .lever {
    transform: translate(3px, 3px);
    stroke-width: 1;
}

/*--------------- off --------------- */
.j-switch .background {
    fill: var(--border-dark);
}

.j-switch .mask {
    fill: var(--border-light-ex);
}

.j-switch .lever {
    fill: var(--border-dark);
}

/*--------------- Active --------------- */
.j-switch.wider .lever > .lever-fill {
    width: 15px;
}
.j-switch.wider.on .lever > .lever-fill {
    width: 15px;
    transform: translate(-5px, 0);
}

/*--------------- ON --------------- */
.j-switch.on .background {
    fill: var(--primary-light);
}
.j-switch.on .mask {
    fill: var(--primary-dark);
}

.j-switch.on .lever {
    fill: white;
    transform: translate(13px, 3px);
}

/*------------ Animation ----------*/
.j-switch * {
    transition: 0.3s cubic-bezier(0.3, 0.6, 0.15, 1.2);
}

/*--------------- Disabled --------------- */

/* off */
.j-switch.disabled .mask {
    fill: var(--border-light);
}

/* on */
.j-switch.disabled.on .background {
    fill: var(--border-dark);
}

.j-switch.disabled.on .mask {
    fill: var(--primary-disabled);
}

.j-switch.disabled.on .lever {
    fill: var(--border-disabled);
}

/* 切换指针为禁用 */
.j-switch.disabled {
    cursor: not-allowed;
}
</style>
