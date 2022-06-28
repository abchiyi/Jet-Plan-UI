<template>
    <input
        v-show="false"
        :id="id"
        :name="name"
        :value="value"
        type="checkbox"
        :disabled="disabled"
        v-model="localvalue"
        @click="click"
    />
    <label :for="id" :class="classes">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
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
                    />
                </g>
            </transition>
        </svg>
    </label>
</template>
<script>
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
                this.checked ? 'checked' : '',
                // this.sectionSelected && !this.checked ? "section-selected" : "",
                this.disabled ? 'disabled' : '',
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
        size: {
            type: String,
            default: 'em',
            validator: (v) => {
                return ['s', 'm', 'l', 'em', 'rem'].indexOf(v) !== -1;
            },
        },
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
            localvalue: [],
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
            v ? this.localvalue.push(this.value) : (this.localvalue = []);
        },
    },
};
</script>

<style>
label > * {
    display: inline-block;
}

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

.j-check-box .background {
    fill: var(--border);
    opacity: 0.6;
}

.j-check-box .mask {
    fill: var(--background);
}

.j-check-box .dot {
    fill: var(--primary);
}

.j-check-box .check {
    stroke-dasharray: 30px;
    stroke-linecap: round;
    stroke: var(--text-light);
    stroke-width: 2;
    fill: none;
}

/* Checked */
.j-check-box.checked .mask,
.j-check-box.checked .background {
    fill: var(--primary);
}

/* Disabled */
.j-check-box.disabled {
    cursor: not-allowed;
}
.j-check-box.disabled .background {
    fill: var(--border);
}
.j-check-box.disabled .mask {
    fill: var(--disabled);
}
.j-check-box.disabled .dot {
    fill: var(--text-light);
    opacity: 0.5;
}
.j-check-box.disabled .check {
    opacity: 0.5;
}

/* Animation */

.j-check-box .background,
.j-check-box .mask,
.j-check-box .dot {
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
        stroke-dashoffset: -1;
    }
    100% {
        stroke-dashoffset: 0;
    }
}
@keyframes path-out {
    0% {
        stroke-dashoffset: 0;
    }
    100% {
        stroke-dashoffset: 32;
    }
}

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
