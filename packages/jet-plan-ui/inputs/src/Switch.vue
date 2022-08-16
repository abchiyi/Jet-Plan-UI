<template>
    <div :class="classes" style="display: inline-block">
        <input
            v-model="scopedValue"
            class="input-hidden"
            :disabled="disabled"
            type="checkbox"
            :id="id"
        />
        <label
            :for="id"
            @mousedown="toWider"
            @mouseup="cancellation"
            @mouseout="cancellation"
            @touchstart="toWider"
            @touchend="cancellation"
            @touchcancel="cancellation"
        >
            <svg ref="self" viewBox="0 0 26 16">
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
        </label>
    </div>
</template>
<script>
import { propInit, propInitBoolean, validatorRange } from '../../tool/lib';
import './css/shape.css';
export default {
    name: 'j-switch',
    props: {
        size: propInit(String, 'm', validatorRange(['s', 'm', 'l'])),
        id: propInit(undefined, undefined, undefined, true),
        modelValue: propInitBoolean(false),
        disabled: propInitBoolean(false),
    },
    mounted() {
        // id 检查
        if (!this.id) {
            console.error(
                `Component 'j-switch' require a unique id or they will not work properly! ↓↓↓↓↓`
            );
            console.error(this.$el);
        }
    },
    data() {
        return {
            wider: false,
            intervalCode: [],
            scopedValue: this.modelValue,
        };
    },
    computed: {
        classes() {
            return ['shape j-switch', this.size, this.wider ? 'wider' : ''];
        },
    },
    methods: {
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

    watch: {
        modelValue(v) {
            this.scopedValue = v;
        },
        scopedValue(v) {
            this.$emit('update:modelValue', v);
        },
    },
};
</script>
<style>
.j-switch {
    vertical-align: middle;
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

/*--------------- Active --------------- */

/* off */
.j-switch.wider .lever > .lever-fill {
    width: 15px;
}
/* on */
.j-switch.wider > input:checked + label .lever-fill {
    width: 15px;
    transform: translate(-5px, 0);
}

/*--------------- Focus --------------- */
span > input[type='checkbox']:focus-visible + .j-switch {
    outline: 2px solid var(--info);
    border-radius: 4px;
}

/*--------------- off --------------- */
.j-switch .background {
    fill: var(--border-light);
}

.j-switch .mask {
    fill: var(--border-dark);
}

.j-switch .lever {
    fill: var(--white);
}

/*--------------- ON --------------- */
.j-switch > input:checked + label .background {
    fill: var(--primary-light);
}

.j-switch > input:checked + label .mask {
    fill: var(--primary);
}

.j-switch > input:checked + label .lever {
    fill: white;
    transform: translate(13px, 3px);
}

/*------------ Animation ----------*/
.j-switch * {
    transition: 0.3s cubic-bezier(0.3, 0.6, 0.15, 1.2);
}

/*--------------- Disabled --------------- */

/* on */
.j-switch > input:disabled:checked + label .background {
    fill: var(--border);
}
.j-switch > input:disabled:checked + label .mask {
    fill: var(--primary-disabled);
}
.j-switch > input:disabled:checked + label .lever {
    fill: var(--border);
}

/* off */
.j-switch > input:disabled + label .background {
    fill: var(--border-light);
}
.j-switch > input:disabled + label .mask {
    fill: var(--border);
}

/* 切换指针为禁用 */
.j-switch > input:disabled + label {
    cursor: not-allowed;
}
</style>
