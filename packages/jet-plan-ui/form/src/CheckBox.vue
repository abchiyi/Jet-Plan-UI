<template>
	<input
		v-show="false"
		:id="this.id"
		:name="name"
		:value="value"
		type="checkbox"
		:disabled="disabled"
		v-model="localvalue"
		@click="click"
	/>
	<label :for="id" :class="classes">
		<svg
			id="checkbox"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			<rect class="background" width="24" height="24" rx="4" />
			<rect
				class="mask"
				width="20"
				height="20"
				rx="3"
				transform="translate(2 2)"
			/>
			<transition name="dot">
				<g v-show="sectionSelected" width="24" height="24">
					<rect
						class="dot"
						transform="translate(5 5)"
						width="14"
						height="14"
						rx="2"
					/>
				</g>
			</transition>

			<transition name="path">
				<g v-show="checked">
					<path
						id="path"
						class="path"
						d="M285.176,416c-7.35,7.915-5.654,8.48-10.176,2.827"
						transform="translate(-268.114 -406.865)"
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
							if (
								this.value.indexOf(this.modelValue[key]) !== -1
							) {
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
				required: true,
			},
			size: {
				type: String,
				default: 'em',
				validator: v => {
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
	}

	.j-check-box .mask {
		fill: var(--foreground);
	}

	.j-check-box .dot {
		fill: var(--primary);
	}

	.j-check-box .path {
		stroke-dasharray: 30px;
		stroke-linecap: round;
		stroke: white;
		stroke-width: 3;
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
		fill: var(--border);
	}
	.j-check-box.disabled .path {
		stroke: var(--text-disabled);
	}

	/* Animation */

	.j-check-box .background,
	.j-check-box .mask,
	.j-check-box .dot {
		transition: fill 0.3s var(--ease-out);
	}

	.path-enter-active {
		animation: path-in 0.4s cubic-bezier(0.3, 0.6, 0.15, 1.2);
	}
	.path-leave-active {
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
			transform: scale(0) translate(10%, 10%);
			opacity: 0;
		}
		30% {
			opacity: 1;
		}
		100% {
			transform: scale(1) translate(0, 0);
			opacity: 1;
		}
	}
	@keyframes dot-out {
		0% {
			transform: scale(1) translate(0%, 0%);
			opacity: 1;
		}
		70% {
			opacity: 0;
		}
		100% {
			transform: scale(0) translate(10%, 10%);
			opacity: 0;
		}
	}
</style>
