<!-- FIXME 初始值逻辑修正 -->
<template>
    <span class="j-checkbox-shell" :class="classes">
        <input
            v-model="localValue"
            :disabled="disabled"
            class="input-hidden"
            type="checkbox"
            :value="value"
            @click="click"
            :name="name"
            :id="id"
        />
        <label :for="id">
            <svg viewBox="0 0 16 16">
                <path
                    class="background"
                    d="M4,0h8a4,4,0,0,1,4,4v8a4,4,0,0,1-4,4H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0Z"
                />
                <rect
                    class="mask"
                    width="12"
                    height="12"
                    rx="3"
                    transform="translate(2 2)"
                />
                <transition name="dot">
                    <g class="dot" v-show="sectionSelected">
                        <rect
                            width="8"
                            height="8"
                            rx="2"
                            transform="translate(4 4)"
                        />
                    </g>
                </transition>
                <transition name="check">
                    <g v-show="checked">
                        <path
                            class="check"
                            d="M281.784,416c-4.9,5.277-3.769,5.654-6.784,1.884"
                            transform="translate(-270.392 -409.717)"
                            stroke-dasharray="30px"
                            stroke-linecap="round"
                            stroke-width="2"
                            fill="none"
                        />
                    </g>
                </transition>
            </svg>
        </label>
    </span>
</template>
<script>
import { propInit, validatorRange } from '../../tool/lib';
export default {
    name: 'j-checkbox',
    computed: {
        handleCheckAll() {
            if (
                this.validatIsAArray(this.value) &&
                this.validatIsAArray(this.modelValue)
            ) {
                return true;
            }
            return false;
        },
        sectionSelected() {
            if (!this.checked) {
                if (this.handleCheckAll) {
                    for (let key in this.modelValue) {
                        if (this.value.indexOf(this.modelValue[key]) !== -1) {
                            return true;
                        }
                    }
                }
            }

            return false;
        },
        checked() {
            //检查所有值是否存在列表中
            if (this.handleCheckAll) {
                return this.eq;
            }
            // 绑定数组
            if (this.validatIsAArray(this.modelValue)) {
                return this.modelValue.indexOf(this.value) !== -1;
            }
            // 绑定数值
            return this.modelValue;
        },
        eq() {
            let BASE = this.value;
            function allIn(array, base) {
                let conter = 0;
                for (let i in array) {
                    conter++;
                    if (array.indexOf(base[i]) == -1) {
                        return false;
                    }
                }

                if (conter < base.length) {
                    return false;
                }

                return true;
            }

            return allIn(this.modelValue, BASE);
        },
        classes() {
            return [
                'shape j-check-box',
                this.size,
                this.sectionSelected && !this.checked ? 'section-selected' : '',
            ];
        },
    },
    props: {
        modelValue: {
            type: [Array, Boolean],
            required: true,
        },
        value: {
            type: [Array, Boolean, String],
            //   required: true,
        },
        name: String,
        id: {
            type: String,
            required: true,
        },
        size: propInit(
            String,
            'em',
            validatorRange(['s', 'm', 'l', 'em', 'rem'])
        ),

        disabled: {
            type: Boolean,
            default: false,
        },
    },
    emits: {
        change: null,
        'update:modelValue': null,
    },
    data() {
        return {
            localValue: [],
        };
    },
    methods: {
        click() {
            // 'disabled' prop 启用时,不响应点击.
            if (!this.disabled) {
                if (this.handleCheckAll) {
                    // 全选控制
                    if (this.checked) {
                        this.$emit('update:modelValue', []);
                    } else {
                        this.$emit(
                            'update:modelValue',
                            this.checkAll(this.modelValue)
                        );
                    }
                } else {
                    // 常规选择
                    this.$emit(
                        'update:modelValue',
                        this.check(this.modelValue)
                    );
                }
            }
        },
        checkAll(array = Array) {
            let newArray = array;
            for (let key in this.value) {
                if (newArray.indexOf(this.value[key]) == -1) {
                    newArray.push(this.value[key]);
                }
            }
            return newArray;
        },
        check(value) {
            if (this.validatIsAArray(value)) {
                let newArray = value;
                if (this.checked) {
                    newArray.splice(newArray.indexOf(this.value), 1);
                } else {
                    newArray.push(this.value);
                }
                return newArray;
            }
            return !value;
        },
        validatIsAArray(v) {
            return typeof v == 'object' && typeof v.length == 'number';
        },
    },
    watch: {
        checked(v) {
            v ? this.localValue.push(this.value) : (this.localValue = []);
        },
    },
};
</script>

<style>
/* 基本样式 */
.j-check-box,
.j-check-box > * {
    user-select: none;
}

.j-check-box {
    display: inline-block;
    height: var(--SIZE);
    width: var(--SIZE);
    cursor: pointer;
    margin: 0 2px;
}

.j-check-box .dot {
    fill: var(--primary);
}

.j-check-box > label {
    display: flex;
}

/*--------------- Focus --------------- */
.j-check-box > input[type='checkbox']:focus-visible + label {
    outline: 2px solid var(--info);
    border-radius: 4px;
}

/* ---------- No Check ---------- */
.j-check-box .background {
    fill: var(--border);
}

.j-check-box .mask {
    fill: var(--border-dark);
}

/* ---------- Checked ---------- */

.j-check-box > input:checked + label .background {
    fill: var(--primary-light);
}
.j-check-box > input:checked + label .mask {
    fill: var(--primary);
}
.j-check-box > input:checked + label .check {
    stroke: var(--white);
}

/* ---------- Check Dot ---------- */
.j-check-box.section-selected .mask {
    fill: var(--primary-light);
}

/* ---------- Disabled ---------- */

/* section-selected */
.j-check-box > input:disabled + label .background {
    fill: var(--border-light);
}

.j-check-box > input:disabled + label .mask {
    fill: var(--border);
}

.j-check-box > input:disabled + label .dot {
    fill: var(--white);
}

/* checked */
.j-check-box > input:checked:disabled + label .check {
    stroke: var(--white);
}

/* ---------- Animation ---------- */
.j-check-box .background,
.j-check-box .mask {
    transition: fill 0.3s var(--ease-out);
}

.check-enter-active {
    animation: path-in 0.4s cubic-bezier(0.3, 0.6, 0.15, 1.2);
}

.check-leave-active {
    animation: path-out 0.4s var(--ease-out);
}

@keyframes path-in {
    0% {
        stroke-dashoffset: -30;
    }

    40% {
        stroke-dashoffset: 0;
    }

    60% {
        stroke-dashoffset: -0.5;
    }

    100% {
        stroke-dashoffset: 0;
    }
}

@keyframes path-out {
    0% {
        stroke: var(--white);
        stroke-dashoffset: 0;
    }

    100% {
        stroke: var(--white);
        stroke-dashoffset: 32;
    }
}

/* dot */
.dot-leave-active,
.dot-enter-active {
    transform-origin: center;
}

.dot-enter-active {
    animation: dot-in 0.4s cubic-bezier(0.3, 0.6, 0.15, 1.3);
}

.dot-leave-active {
    animation: dot-out 0.4s cubic-bezier(0.3, 0.6, 0.15, 1.3);
}

@keyframes dot-in {
    0% {
        transform: scale(0);
        opacity: 0;
    }

    30% {
        opacity: 1;
    }

    100% {
        opacity: 1;
    }
}

@keyframes dot-out {
    0% {
        opacity: 1;
    }

    70% {
        opacity: 0;
    }

    100% {
        transform: scale(0);
        opacity: 0;
    }
}
</style>
